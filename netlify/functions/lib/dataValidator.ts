import type { ExtractedHTML } from './htmlExtractor';
import type { PageSpeedData } from './pageSpeed';
import type { AuditMode } from './geminiAudit';

export interface DataContext {
  availableSignals: string[];
  missingSignals: string[];
  constraints: string[];
  isSPALikely: boolean;
  qualityNote: string;
}

export interface ValidatedInsight {
  valid: boolean;
  reason?: string;
}

/**
 * Builds an explicit data context that tells the AI exactly what
 * data is present vs missing — preventing hallucination.
 */
export function buildDataContext(
  html: ExtractedHTML,
  pageSpeed: PageSpeedData | null,
  mode: AuditMode
): DataContext {
  const available: string[] = [];
  const missing: string[] = [];
  const constraints: string[] = [];

  // Title
  if (html.title) {
    available.push(`title tag: "${html.title}" (${html.title.length} chars)`);
  } else {
    missing.push('title tag');
    constraints.push('Title tag is MISSING — report this as a critical finding.');
  }

  // Meta description
  if (html.metaDescription) {
    available.push(`meta description: "${html.metaDescription}" (${html.metaDescription.length} chars)`);
  } else {
    missing.push('meta description');
    constraints.push('Meta description is MISSING — report this as a finding.');
  }

  // Headings
  if (html.h1s.length > 0) {
    available.push(`H1: ${html.h1s.map(h => `"${h}"`).join(', ')}`);
  } else {
    missing.push('H1 tag');
  }
  if (html.h2s.length > 0) {
    available.push(`H2s: ${html.h2s.slice(0, 5).map(h => `"${h}"`).join(', ')}`);
  } else {
    missing.push('H2 tags');
  }

  // Schema
  if (html.schemas.length > 0) {
    available.push(`JSON-LD schema (${html.schemas.length} block(s)): ${JSON.stringify(html.schemas[0]).slice(0, 200)}`);
  } else {
    missing.push('JSON-LD schema markup');
    constraints.push('No schema markup found — this is a confirmed finding, not an assumption.');
  }

  // Body text
  if (html.wordCount > 50) {
    available.push(`body text (~${html.wordCount} words)`);
    available.push(`body text opening (first 200 chars): "${html.bodyText.slice(0, 200)}"`);
    available.push(`body text sample (chars 200–800): "${html.bodyText.slice(200, 800)}"`);
  } else if (html.isSPALikely) {
    missing.push('body text (site is JavaScript-rendered, content not in HTML source)');
    constraints.push(
      'IMPORTANT: This site is a JavaScript SPA. Body text is empty in the HTML source — this is NOT a content problem per se, ' +
      'but it IS a critical GEO/SEO finding: AI crawlers and some search bots cannot read JS-rendered content. ' +
      'Report this under AI-Friendly Content Structure or Content Depth. Do NOT fabricate what the content might say.'
    );
  } else {
    missing.push('meaningful body text (very thin content found)');
    constraints.push('Body text is extremely thin. Only report content issues based on what is actually present.');
  }

  // Entity mention counts — computed from available data, no inference
  const bodyLower = html.bodyText.toLowerCase();

  // Business name: prefer schema, fall back to text before first title separator
  let businessName = '';
  if (html.schemas.length > 0) {
    const s = html.schemas[0] as any;
    businessName = s.name || s['@graph']?.[0]?.name || '';
  }
  if (!businessName && html.title) {
    businessName = html.title.split(/[|\-–—]/)[0].trim();
  }
  if (businessName && bodyLower.length > 0) {
    const escaped = businessName.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const nameCount = (bodyLower.match(new RegExp(escaped, 'g')) || []).length;
    available.push(`entity: business name "${businessName}" appears ${nameCount} time(s) in body text`);
  }

  // City/location: from schema address
  if (html.schemas.length > 0) {
    const s = html.schemas[0] as any;
    const city = s.address?.addressLocality || s.address?.['addressLocality'] || '';
    if (city && bodyLower.length > 0) {
      const escaped = city.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const cityCount = (bodyLower.match(new RegExp(escaped, 'g')) || []).length;
      available.push(`entity: city name "${city}" appears ${cityCount} time(s) in body text`);
    } else if (!city) {
      missing.push('city/location name in schema address');
    }
  }

  // HTML-computable performance signals (always available, no API dependency)
  available.push(`viewport meta: ${html.viewportMeta ? `"${html.viewportMeta}"` : 'ABSENT'}`);

  if (html.renderBlockingScripts > 0) {
    available.push(`render-blocking scripts in <head>: ${html.renderBlockingScripts} script tag(s) without async or defer`);
  } else {
    available.push('render-blocking scripts in <head>: 0 (all scripts use async or defer, or no external scripts in head)');
  }

  if (html.imagesWithoutAlt.length > 0) {
    const sample = html.imagesWithoutAlt.slice(0, 5).map(i => i.src || '[no src]').join(', ');
    available.push(`images missing alt text: ${html.imagesWithoutAlt.length} image(s) — srcs: ${sample}`);
  } else {
    available.push('images missing alt text: 0 (all images have alt attributes)');
  }

  // PageSpeed as bonus context if available
  if (pageSpeed && pageSpeed.performanceScore !== null) {
    available.push(`PageSpeed mobile score: ${pageSpeed.performanceScore}/100`);
    if (pageSpeed.lcp) available.push(`LCP: ${(pageSpeed.lcp / 1000).toFixed(1)}s`);
    if (pageSpeed.cls !== null) available.push(`CLS: ${pageSpeed.cls.toFixed(3)}`);
  }

  // HTML lang
  if (html.htmlLang) {
    available.push(`HTML lang: "${html.htmlLang}"`);
  } else {
    missing.push('HTML lang attribute');
  }

  // Canonical
  if (html.canonical) {
    available.push(`canonical URL: "${html.canonical}"`);
  } else {
    missing.push('canonical tag');
  }

  // OG tags
  if (html.ogTitle || html.ogDescription) {
    available.push(`OG tags: title="${html.ogTitle}", description="${html.ogDescription}"`);
  } else {
    missing.push('Open Graph tags');
  }

  // Mode-specific context
  const spaNoteForMode = html.isSPALikely
    ? mode === 'geo'
      ? 'The site is JS-rendered. AI engines (ChatGPT, Perplexity, Gemini) crawl HTML source — they will see an empty page. This is a top finding.'
      : 'The site is JS-rendered. Googlebot can render JavaScript but it adds indexing delay and risk. This is a notable SEO concern.'
    : '';

  const qualityNote = html.isSPALikely
    ? `⚠️ JavaScript-rendered SPA detected. Most content is only visible after JS executes. ${spaNoteForMode}`
    : html.wordCount < 150
    ? '⚠️ Very thin HTML content detected. Analysis is limited to available signals.'
    : `✓ Good data quality. ${html.wordCount} words extracted.`;

  // Master constraint always present
  constraints.unshift(
    'GROUND TRUTH RULE: Every finding you report MUST be based on data explicitly listed in "Available signals" below. ' +
    'If a signal is in the "Missing" list, you may report its absence as a finding. ' +
    'Never invent or assume content, tag values, or scores that are not in the data.'
  );

  return {
    availableSignals: available,
    missingSignals: missing,
    constraints,
    isSPALikely: html.isSPALikely,
    qualityNote,
  };
}

/**
 * After getting the AI response, verify the free insights reference
 * real data from the extraction. Flags suspicious fabrications.
 */
export function validateInsights(
  freeInsights: { category: string; issue: { observed_value: string; problem: string }; score: number }[],
  html: ExtractedHTML
): { valid: boolean; warnings: string[] } {
  const warnings: string[] = [];

  for (const insight of freeInsights) {
    const issue = `${insight.issue.observed_value} ${insight.issue.problem}`.toLowerCase();

    // Flag: claims to analyze body content when body is empty
    if (
      html.isSPALikely &&
      (issue.includes('content says') || issue.includes('the text') || issue.includes('the copy') ||
        issue.includes('opening paragraph') || issue.includes('first paragraph'))
    ) {
      warnings.push(
        `Insight "${insight.category}" may be fabricating body content analysis on a SPA site.`
      );
    }

    // Flag: mentions specific heading text that doesn't exist
    if (issue.includes('"') && html.h1s.length === 0 && html.h2s.length === 0) {
      const quoted = issue.match(/"([^"]+)"/g);
      if (quoted && !quoted.some(q => html.title.includes(q.replace(/"/g, '')))) {
        warnings.push(
          `Insight "${insight.category}" quotes heading text but no headings were found.`
        );
      }
    }

    // Flag: mentions PageSpeed score when PageSpeed is unavailable
    if (
      issue.match(/\d+\s*(\/100|%|score)/) &&
      insight.category.toLowerCase().includes('performance')
    ) {
      warnings.push(
        `Insight "${insight.category}" mentions a specific score but PageSpeed data may be unavailable.`
      );
    }
  }

  return { valid: warnings.length === 0, warnings };
}
