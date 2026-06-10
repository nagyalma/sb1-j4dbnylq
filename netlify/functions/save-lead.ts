import type { Handler, HandlerEvent } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const MAX_REPORT_SIZE = 20 * 1024; // 20KB

function json(statusCode: number, body: object) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(body),
  };
}

function sanitizeString(val: unknown, maxLen = 500): string {
  if (typeof val !== 'string') return '';
  return val.slice(0, maxLen);
}

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST, OPTIONS' }, body: '' };
  }
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed.' });

  // Reject oversized payloads
  if ((event.body?.length || 0) > MAX_REPORT_SIZE) {
    return json(413, { error: 'Payload too large.' });
  }

  let url: string, mode: string, report: any;
  try {
    const body = JSON.parse(event.body || '{}');
    url = sanitizeString(body.url, 2048);
    mode = sanitizeString(body.mode, 10);
    report = body.report;
    if (!url || !report || typeof report !== 'object') return json(400, { error: 'Missing or invalid fields.' });
    // Validate report has expected shape
    if (!Array.isArray(report.free_insights) || !Array.isArray(report.locked_insights)) {
      return json(400, { error: 'Invalid report structure.' });
    }
  } catch {
    return json(400, { error: 'Invalid request body.' });
  }

  const results: Record<string, string> = { supabase: 'skipped', webhook: 'skipped' };

  // Save to Supabase
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { error } = await supabase.from('audit_leads').insert({ url, mode, report });
      results.supabase = error ? `error: ${error.message}` : 'saved';
    } catch (err: any) {
      results.supabase = `error: ${err.message}`;
    }
  }

  // Notify via webhook
  const webhookUrl = process.env.NOTIFY_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const payload = {
        event: 'audit_lead_booked',
        booked_at: new Date().toISOString(),
        site_url: url,
        audit_mode: mode === 'geo' ? 'AI Search (GEO)' : 'Google Search (SEO)',
        overall_score: `${report.overall_score}/10 (${report.score_color})`,
        headline: report.headline,
        free_insights: report.free_insights.map((i: any) => ({
          category: i.category,
          score: `${i.score}/10`,
          observed: i.issue?.observed_value ?? i.issue,
          problem: i.issue?.problem ?? '',
          fix: i.surface_fix,
        })),
        locked_insights: report.locked_insights.map((i: any) => ({
          category: i.category,
          score: `${i.score}/10`,
          teaser: i.teaser,
        })),
        additional_issues: report.additional_issues_count,
        total_issues_found: (report.free_insights.length + report.locked_insights.length + report.additional_issues_count),
      };
      await axios.post(webhookUrl, payload, { timeout: 8000 });
      results.webhook = 'sent';
    } catch (err: any) {
      results.webhook = `error: ${err.message}`;
    }
  }

  return json(200, { ok: true, results });
};
