import OpenAI from 'openai';
import { AUDIT_PROMPT } from './auditPrompt';
import { SEO_PROMPT } from './seoPrompt';
import { buildDataContext, validateInsights } from './dataValidator';
import type { ExtractedHTML } from './htmlExtractor';
import type { PageSpeedData } from './pageSpeed';

export type AuditMode = 'geo' | 'seo';

export interface AuditReport {
  overall_score: number;
  score_color: 'red' | 'yellow' | 'green';
  headline: string;
  free_insights: {
    category: string;
    score: number;
    issue: { observed_value: string; problem: string };
    surface_fix: string;
    icon_hint: string;
  }[];
  locked_insights: {
    category: string;
    score: number;
    teaser: string;
    icon_hint: string;
  }[];
  additional_issues_count: number;
}

export async function runGeminiAudit(
  html: ExtractedHTML,
  pageSpeed: PageSpeedData | null,
  mode: AuditMode = 'geo',
  lang: 'en' | 'hu' = 'en'
): Promise<AuditReport> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY is not set');

  const client = new OpenAI({ apiKey });
  const basePrompt = mode === 'seo' ? SEO_PROMPT : AUDIT_PROMPT;
  const langInstruction = lang === 'hu'
    ? '\n\nLANGUAGE REQUIREMENT — MANDATORY: You MUST respond entirely in Hungarian (Magyar). Every field in the JSON — headline, category names, issue descriptions, surface_fix, teaser — must be written in Hungarian. Do not use English in any field.'
    : '\n\nLANGUAGE REQUIREMENT: Respond in English.';
  const systemPrompt = basePrompt + langInstruction;

  // Build data context — tells AI exactly what's real vs missing
  const context = buildDataContext(html, pageSpeed, mode);

  const h1Line = html.h1s.length > 0
    ? `${html.h1s.join(' | ')}`
    : 'NONE';
  const h2Line = html.h2s.length > 0
    ? `${html.h2s.slice(0, 10).join(' | ')}`
    : 'NONE';
  const h3Line = html.h3s.length > 0
    ? `${html.h3s.slice(0, 5).join(' | ')}`
    : 'NONE';
  const schemaText = html.schemas.length > 0
    ? JSON.stringify(html.schemas, null, 2).slice(0, 1500)
    : 'NONE';
  const altMissing = html.imagesWithoutAlt.length > 0
    ? `${html.imagesWithoutAlt.length} image(s) — srcs: ${html.imagesWithoutAlt.slice(0, 5).map(i => i.src || '[no src]').join(', ')}`
    : '0 (all images have alt text)';

  const userContent = `
DATA CONTEXT (follow the constraints below strictly):

Quality note: ${context.qualityNote}

Available signals:
${context.availableSignals.map(s => `• ${s}`).join('\n')}

Missing signals (report absence as finding where relevant):
${context.missingSignals.map(s => `• ${s}`).join('\n')}

Constraints:
${context.constraints.map((c, i) => `${i + 1}. ${c}`).join('\n')}

════════════════════════════════════════
RAW SITE DATA — treat as ground truth
════════════════════════════════════════

TITLE TAG: ${html.title || 'MISSING'}
META DESCRIPTION: ${html.metaDescription || 'MISSING'}
CANONICAL: ${html.canonical || 'MISSING'}
HTML LANG: ${html.htmlLang || 'MISSING'}
META ROBOTS: ${html.metaRobots || 'not set'}
OG TITLE: ${html.ogTitle || 'MISSING'}
OG DESCRIPTION: ${html.ogDescription || 'MISSING'}

H1 TAGS (${html.h1s.length}): ${h1Line}
H2 TAGS (${html.h2s.length} total, first 10): ${h2Line}
H3 TAGS (${html.h3s.length} total, first 5): ${h3Line}

SCHEMA (${html.schemas.length} block(s)):
${schemaText}

BODY TEXT OPENING (first 500 chars):
"${html.bodyText.slice(0, 500)}"

BODY TEXT SAMPLE (chars 500–2500):
"${html.bodyText.slice(500, 2500)}"

COMPUTED PERFORMANCE SIGNALS:
- Viewport meta: ${html.viewportMeta ? `"${html.viewportMeta}"` : 'ABSENT'}
- Images missing alt text: ${altMissing}
- Render-blocking scripts in <head>: ${html.renderBlockingScripts}
`.trim();

  let lastError = '';

  for (let attempt = 1; attempt <= 3; attempt++) {
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userContent },
    ];

    // On retry 2+, add an explicit correction message
    if (attempt > 1) {
      messages.push({
        role: 'user',
        content: `Your previous response had issues: ${lastError}. Please provide a corrected JSON response. Remember: only report on data that is explicitly listed in the Available signals above.`,
      });
    }

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: attempt === 1 ? 0.3 : 0.1, // lower temp on retry
      max_tokens: 2048,
      response_format: { type: 'json_object' },
      messages,
    });

    const raw = response.choices[0]?.message?.content || '';

    let parsed: AuditReport;
    try {
      parsed = JSON.parse(raw) as AuditReport;
    } catch {
      lastError = 'Response was not valid JSON';
      if (attempt === 3) throw new Error('OpenAI returned invalid JSON after 3 attempts');
      continue;
    }

    // Structural validation
    if (
      !Array.isArray(parsed.free_insights) ||
      !Array.isArray(parsed.locked_insights) ||
      parsed.free_insights.length !== 3 ||
      parsed.locked_insights.length !== 3
    ) {
      lastError = `Expected exactly 3 free insights and 3 locked insights. Got ${parsed.free_insights?.length} free and ${parsed.locked_insights?.length} locked.`;
      if (attempt === 3) throw new Error(`Structural validation failed: ${lastError}`);
      continue;
    }

    // Validate all required fields are present on each insight
    for (const insight of parsed.free_insights) {
      if (!insight.category || !insight.issue?.observed_value || !insight.issue?.problem || !insight.surface_fix) {
        lastError = `Free insight missing required fields: ${JSON.stringify(insight)}`;
        if (attempt === 3) throw new Error(`Insight validation failed: ${lastError}`);
        continue;
      }
    }

    // Data accuracy check
    const { warnings } = validateInsights(parsed.free_insights, html);
    if (warnings.length > 0) {
      lastError = `Accuracy warnings: ${warnings.join('; ')}`;
      if (attempt === 3) {
        // On final attempt, log warnings but still return — better to show imperfect data than crash
        console.warn('[audit] Accuracy warnings on final attempt:', warnings);
      } else {
        continue;
      }
    }

    // Flatten any locked teaser that came back as an object (model error)
    for (const insight of parsed.locked_insights) {
      if (typeof insight.teaser === 'object' && insight.teaser !== null) {
        const t = insight.teaser as any;
        insight.teaser = [t.observed_value, t.problem].filter(Boolean).join(' — ');
      }
    }

    // Clamp score
    parsed.overall_score = Math.round(parsed.overall_score * 10) / 10;
    if (parsed.overall_score > 10) parsed.overall_score = 10;
    if (parsed.overall_score < 0) parsed.overall_score = 0;

    return parsed;
  }

  throw new Error('Audit failed after 3 attempts');
}
