import axios from 'axios';
import * as cheerio from 'cheerio';

export interface ExtractedHTML {
  title: string;
  metaDescription: string;
  metaRobots: string;
  canonical: string;
  h1s: string[];
  h2s: string[];
  h3s: string[];
  headings: { level: string; text: string }[];
  schemas: object[];
  bodyText: string;
  wordCount: number;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  htmlLang: string;
  hasMain: boolean;
  hasArticle: boolean;
  isSPALikely: boolean;
  allMetaTags: { name: string; content: string }[];
  linkTags: { rel: string; href: string }[];
  // HTML-computable performance signals (no API dependency)
  imagesWithoutAlt: { src: string }[];
  renderBlockingScripts: number;
  viewportMeta: string;
}

export async function extractHTML(url: string): Promise<ExtractedHTML> {
  const response = await axios.get(url, {
    timeout: 15000,
    maxRedirects: 5,
    maxContentLength: 2 * 1024 * 1024, // 2MB limit
    maxBodyLength: 2 * 1024 * 1024,
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; AuditBot/1.0; +https://levinagymarketing.com)',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });

  const $ = cheerio.load(response.data);

  const title = $('title').first().text().trim();
  const metaDescription = $('meta[name="description"]').attr('content')?.trim() || '';
  const metaRobots = $('meta[name="robots"]').attr('content')?.trim() || '';
  const canonical = $('link[rel="canonical"]').attr('href')?.trim() || '';
  const htmlLang = $('html').attr('lang')?.trim() || '';
  const hasMain = $('main').length > 0;
  const hasArticle = $('article').length > 0;
  const ogTitle = $('meta[property="og:title"]').attr('content')?.trim() || '';
  const ogDescription = $('meta[property="og:description"]').attr('content')?.trim() || '';
  const ogImage = $('meta[property="og:image"]').attr('content')?.trim() || '';

  const allMetaTags: { name: string; content: string }[] = [];
  $('meta').each((_, el) => {
    const name = $(el).attr('name') || $(el).attr('property') || '';
    const content = $(el).attr('content') || '';
    if (name && content) allMetaTags.push({ name, content });
  });

  const linkTags: { rel: string; href: string }[] = [];
  $('link').each((_, el) => {
    const rel = $(el).attr('rel') || '';
    const href = $(el).attr('href') || '';
    if (rel && href) linkTags.push({ rel, href });
  });

  const schemas: object[] = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const parsed = JSON.parse($(el).html() || '{}');
      schemas.push(parsed);
    } catch { /* skip malformed */ }
  });

  const h1s: string[] = [];
  const h2s: string[] = [];
  const h3s: string[] = [];
  const headings: { level: string; text: string }[] = [];
  $('h1, h2, h3').each((_, el) => {
    const level = el.tagName.toLowerCase();
    const text = $(el).text().trim();
    if (!text) return;
    if (level === 'h1') h1s.push(text);
    if (level === 'h2') h2s.push(text);
    if (level === 'h3') h3s.push(text);
    headings.push({ level, text });
  });

  // HTML-computable performance signals
  const viewportMeta = $('meta[name="viewport"]').attr('content')?.trim() || '';

  const imagesWithoutAlt: { src: string }[] = [];
  $('img').each((_, el) => {
    const alt = $(el).attr('alt');
    if (alt === undefined || alt.trim() === '') {
      const src = $(el).attr('src') || $(el).attr('data-src') || '';
      imagesWithoutAlt.push({ src: src.slice(0, 120) });
    }
  });

  let renderBlockingScripts = 0;
  $('head script[src]').each((_, el) => {
    const hasAsync = $(el).attr('async') !== undefined;
    const hasDefer = $(el).attr('defer') !== undefined;
    if (!hasAsync && !hasDefer) renderBlockingScripts++;
  });

  $('nav, footer, header, script, style, noscript, iframe, svg').remove();
  const bodyText = $('body').text().replace(/\s+/g, ' ').trim().slice(0, 6000);
  const wordCount = bodyText.split(/\s+/).filter(w => w.length > 2).length;
  const isSPALikely = wordCount < 30 && !hasMain;

  return {
    title, metaDescription, metaRobots, canonical,
    h1s, h2s, h3s, headings, schemas,
    bodyText, wordCount,
    ogTitle, ogDescription, ogImage,
    htmlLang, hasMain, hasArticle, isSPALikely,
    allMetaTags, linkTags,
    imagesWithoutAlt, renderBlockingScripts, viewportMeta,
  };
}
