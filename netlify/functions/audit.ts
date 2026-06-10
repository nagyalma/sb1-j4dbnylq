import type { Handler, HandlerEvent } from '@netlify/functions';
import { extractHTML } from './lib/htmlExtractor';
import { fetchPageSpeed } from './lib/pageSpeed';
import { runGeminiAudit, type AuditMode } from './lib/geminiAudit';

// Simple in-memory rate limiter (per function instance)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT) return true;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

function normalizeUrl(raw: string): string {
  let url = raw.trim();
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  return url;
}

function validateUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    if (host === 'localhost' || host === '127.0.0.1' || /^10\.|^172\.(1[6-9]|2\d|3[01])\.|^192\.168\./.test(host)) {
      return 'Local addresses are not supported.';
    }
    if (!/^[a-z0-9.-]+\.[a-z]{2,}$/.test(host)) {
      return 'Please enter a valid website URL.';
    }
    return null;
  } catch {
    return 'Please enter a valid URL (e.g. https://example.com).';
  }
}

function json(statusCode: number, body: object) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(body),
  };
}

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST, OPTIONS' }, body: '' };
  }
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed.' });

  // Rate limiting
  const clientIp = event.headers['x-forwarded-for']?.split(',')[0]?.trim() || event.headers['x-nf-client-connection-ip'] || 'unknown';
  if (isRateLimited(clientIp)) {
    return json(429, { error: 'Too many requests. Please wait an hour before trying again.' });
  }

  let rawUrl: string;
  let mode: AuditMode = 'geo';
  let lang: 'en' | 'hu' = 'en';
  try {
    const body = JSON.parse(event.body || '{}');
    rawUrl = body.url;
    if (!rawUrl) return json(400, { error: 'URL is required.' });
    if (body.mode === 'seo' || body.mode === 'geo') mode = body.mode;
    if (body.lang === 'hu' || body.lang === 'en') lang = body.lang;
  } catch {
    return json(400, { error: 'Invalid request body.' });
  }

  const url = normalizeUrl(rawUrl);
  const validationError = validateUrl(url);
  if (validationError) return json(400, { error: validationError });

  // Step 1: Fetch HTML
  let html;
  try {
    html = await extractHTML(url);
  } catch (err: any) {
    const status = err?.response?.status;
    if (status === 403 || status === 429) return json(422, { error: 'This site blocks automated access. Try a different URL.' });
    if (err.code === 'ECONNABORTED' || err.code === 'ETIMEDOUT') return json(422, { error: 'The site took too long to respond.' });
    if (err.code === 'ERR_FR_MAX_BODY_LENGTH_EXCEEDED') return json(422, { error: 'This site returned too much data to analyze.' });
    return json(422, { error: 'Could not load the site. Please check the URL and try again.' });
  }

  // Step 2: PageSpeed (non-fatal)
  let pageSpeed = null;
  try {
    pageSpeed = await fetchPageSpeed(url);
  } catch { /* continue without */ }

  // Step 3: AI audit
  let report;
  try {
    report = await runGeminiAudit(html, pageSpeed, mode, lang);
  } catch {
    return json(500, { error: 'AI analysis failed. Please try again in a moment.' });
  }

  return json(200, { report });
};
