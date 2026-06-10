# DELIVERY AUDIT — Output Validity & Specificity Assessment

**Date:** 2026-05-14  
**Purpose:** Honest technical assessment of output quality. No padding.

---

## SECTION 1 — THE RAW MATERIAL

### Q1. What data is currently extracted from the HTML and sent to OpenAI? List every field, exactly.

From `htmlExtractor.ts`, the `ExtractedHTML` object contains:

| Field | What it contains |
|---|---|
| `title` | Full text of `<title>` tag |
| `metaDescription` | `content` of `<meta name="description">` |
| `metaRobots` | `content` of `<meta name="robots">` |
| `canonical` | `href` of `<link rel="canonical">` |
| `h1s` | Array of all H1 text strings |
| `h2s` | Array of all H2 text strings |
| `h3s` | Array of all H3 text strings |
| `headings` | Combined array of `{level, text}` for H1–H3 only |
| `schemas` | Array of parsed JSON-LD blocks (full objects) |
| `bodyText` | Visible body text, nav/footer/header/script/style removed, trimmed to **6000 chars** |
| `wordCount` | Word count of bodyText (words > 2 chars) |
| `ogTitle` | OG title tag |
| `ogDescription` | OG description tag |
| `ogImage` | OG image URL |
| `htmlLang` | `lang` attribute on `<html>` |
| `hasMain` | Boolean — `<main>` element present? |
| `hasArticle` | Boolean — `<article>` element present? |
| `isSPALikely` | Boolean — wordCount < 30 AND no `<main>` |
| `allMetaTags` | Array of `{name, content}` for all meta tags |
| `linkTags` | Array of `{rel, href}` for all `<link>` tags |

This entire object is serialized via `JSON.stringify({ html, pageSpeed }, null, 2).slice(0, 8000)` and sent in the user message. The `dataValidator` also builds a human-readable summary (available/missing signals) that is prepended to the same message.

---

### Q2. For each field — is it enough for a SPECIFIC observation or only a generic one?

| Field | Specificity verdict | Reason |
|---|---|---|
| `title` | **ENOUGH for specific** | Full text sent. OpenAI can cite "your title reads 'Welcome to Joe's' (18 chars)" |
| `metaDescription` | **ENOUGH for specific** | Full text + char count passed via dataValidator. Used correctly in live tests. |
| `h1s` / `h2s` / `h3s` | **ENOUGH for specific** | Full text sent. Live test correctly cited `'Classic CHICAGO barbering since 1968'` |
| `schemas` | **PARTIALLY enough** | Full parsed JSON objects are in the raw data. However the dataValidator summary truncates schema preview to **200 chars**. OpenAI sees the full schema in the 8000-char JSON dump but only a preview in the structured context. |
| `bodyText` | **ENOUGH if site is static; NOT ENOUGH if SPA** | 6000-char cap is reasonable for static sites. For JS SPAs the field is empty, which is handled correctly. |
| `pageSpeed` | **NOT ENOUGH — see Q11** | In all 4 live tests, PageSpeed API returned no data. The Performance insight is therefore always "couldn't be measured" for every single site. |
| `ogTitle / ogDescription` | **ENOUGH for specific** | Full text available. Not consistently cited in output. |
| `htmlLang` | **ENOUGH** | Boolean-level: either present or not. Correct. |
| `canonical` | **ENOUGH** | Full URL. Can be cited if wrong or missing. |
| `allMetaTags` | **MOSTLY WASTED** | Sent raw in the 8000-char dump but OpenAI rarely references these. No structured context is built around them. |
| `linkTags` | **MOSTLY WASTED** | Same — sent but no structured context. OpenAI ignores it. |
| `hasMain / hasArticle` | **CONTEXT ONLY** | Used in SPA detection. Not granular enough for meaningful standalone finding. |

---

### Q3. What is NOT being extracted that would meaningfully improve specificity?

1. **Image alt text** — Not extracted at all. A missing or empty alt tag on the hero image is a real finding. Currently invisible to the tool.
2. **H4/H5/H6 headings** — Not captured. Heading hierarchy analysis stops at H3.
3. **Internal link count / anchor text** — No link structure analysis. Internal linking is a real SEO signal.
4. **Page load URL vs canonical mismatch** — Not checked. The tool fetches `url` and extracts canonical but never compares them programmatically before sending to OpenAI.
5. **Viewport meta tag** — Not extracted. `<meta name="viewport">` is a basic mobile signal. Not in the data.
6. **Multiple schema blocks evaluated individually** — `schemas[0]` gets the dataValidator preview. If there are 3 schema blocks, only the first is summarized. All are in the raw JSON dump but OpenAI may or may not dig into them.
7. **Actual body text paragraphs vs navigation remnants** — Despite removing `nav/footer/header`, `<ul>/<li>` navigation items inside `<div>` containers (common on modern sites) are not stripped. OpenAI may analyze navigation link text as "page content."
8. **Twitter Card tags** — `twitter:title`, `twitter:description` not extracted.
9. **robots.txt** — Not fetched. The tool only checks the meta robots tag, not the actual robots.txt file.
10. **HTTP status code of fetched URL** — Not retained. A 200 vs 301 chain is invisible.
11. **Favicon presence** — Minor, but detectable.
12. **Full schema type hierarchy** — Only `schemas[0]` type is surfaced. A site with both `WebSite` and `LocalBusiness` schemas — the second is invisible in context.

---

### Q4. How much of the page body text is being sent?

- **Cap:** 6000 characters (enforced in `htmlExtractor.ts` line 90: `.slice(0, 6000)`)
- **Nav/footer stripping:** Yes — `$('nav, footer, header, script, style, noscript, iframe, svg').remove()` runs before body text extraction. This is correct.
- **Problem:** Nav/sidebar inside generic `<div>` containers (which is most modern sites) is NOT stripped. For sites using component-based layouts with no semantic HTML, the "body text" will contain navigation, sidebar, and footer content that happens to be in `<div>` wrappers. OpenAI may analyze link labels ("Home", "Services", "Contact") as content.
- **Further truncation in prompt:** The raw JSON dump sent to OpenAI is `.slice(0, 8000)` characters total. This covers the entire `html` object plus `pageSpeed`. If the bodyText alone is 6000 chars, the schema, headings, and other fields get the remaining ~2000 chars and may be cut off.
- **SPA sites:** bodyText is empty and the SPA flag is handled correctly — the tool reports the crawlability finding rather than fabricating content analysis.

---

### Q5. Are JSON-LD schema blocks sent as parsed JSON or raw strings?

**Parsed JSON.** The extractor runs `JSON.parse($(el).html())` on each `<script type="application/ld+json">` block and pushes the result as a JavaScript object. The full parsed objects are in the raw data sent to OpenAI.

**However:** The dataValidator context (the human-readable "Available signals" section OpenAI reads first) truncates the schema preview to `JSON.stringify(html.schemas[0]).slice(0, 200)`. For a LocalBusiness schema with address, phone, hours, and multiple services, 200 chars is not enough to show all fields. OpenAI may not realize which specific required fields are missing unless it digs into the raw JSON dump further down in the message.

**Verdict:** Structure is correct, but the practical signal density for schema evaluation is lower than it should be because of the 200-char preview truncation.

---

## SECTION 2 — THE PROMPT QUALITY

### Q6. Paste the exact OpenAI prompt being used right now.

**System prompt (GEO mode — `auditPrompt.ts` + language instruction):**

```
You are an SEO + GEO (Generative Engine Optimization) expert auditing a website for AI search visibility (ChatGPT, Perplexity, Gemini, etc.).

════════════════════════════════════════
ACCURACY RULES — MANDATORY
════════════════════════════════════════
1. Every finding MUST reference data listed in the "Available signals" section.
2. Missing signals: report the ABSENCE as the finding. Do not invent what the content might say.
3. NEVER estimate or infer Core Web Vitals (LCP, CLS, FCP) without measured PageSpeed data.
4. If body text is empty (JS SPA): the finding is "Content is not crawlable by AI engines" — not a fabricated content critique.
5. Only quote text that appears verbatim in the extracted data.
6. Scores must reflect the actual signals: don't score 2/10 for a missing field if other signals are strong.

════════════════════════════════════════
ANALYZE THESE 6 CATEGORIES
════════════════════════════════════════

1. TITLE + META TAGS
   - Title: descriptive, 50–60 chars, includes business focus?
   - Meta description: compelling, 150–160 chars, has a hook?
   - Issues: missing, generic copy, wrong length, no value prop

2. HEADING HIERARCHY
   - Single H1? Logical H2/H3 structure?
   - Do headings describe content or are they marketing fluff?
   - Issues: multiple H1s, no headings found, skipped levels, vague text

3. SCHEMA MARKUP
   - JSON-LD present? Correct type for the business?
   - Required fields present (name, description, address for local)?
   - Issues: missing schema, wrong type, incomplete fields

4. AI-FRIENDLY CONTENT STRUCTURE (GEO-critical)
   - Can AI crawlers read the page at all? (JS SPA = invisible to AI)
   - Are services/offers stated as extractable facts in the HTML source?
   - FAQ-style sections or clear definitions?
   - Issues: JS-rendered content, vague brand copy, no direct answers

5. ENTITY CLARITY (GEO-critical)
   - Could an AI engine confidently describe this business from the source HTML?
   - Name, location, services stated clearly in meta/visible HTML?
   - Issues: ambiguous positioning, missing location, unclear service description

6. PERFORMANCE
   - Use ONLY measured PageSpeed data. If unavailable: report that performance could not be measured — this is itself a finding.
   - LCP < 2.5s? CLS < 0.1? Mobile score > 70?

════════════════════════════════════════
PRIORITY ASSIGNMENT
════════════════════════════════════════
Medium (shown free): 3 issues that demonstrate expertise but aren't the most critical. User thinks "useful, but I sense there's more."
High (locked): 3 issues with biggest AI-visibility impact. User must be curious enough to book a call.

════════════════════════════════════════
ICON HINT GUIDE
════════════════════════════════════════
"search"   → title/meta/discovery issues
"heading"  → heading structure issues
"code"     → schema/markup issues
"sparkles" → AI-readiness/GEO-specific issues
"target"   → entity clarity / positioning issues
"gauge"    → performance / speed issues

════════════════════════════════════════
OUTPUT — JSON ONLY, NO MARKDOWN
════════════════════════════════════════
{
  "overall_score": 4.2,
  "score_color": "red",
  "headline": "Blunt 20-word max summary. No fluff.",
  "free_insights": [
    {
      "category": "Title + Meta Tags",
      "score": 5,
      "issue": "Cite exact tag value or confirmed absence. 1-2 sentences.",
      "surface_fix": "Directional fix. 1 sentence.",
      "icon_hint": "search"
    }
  ],
  "locked_insights": [
    {
      "category": "Category name",
      "score": 3,
      "teaser": "Hint at what's wrong without the fix. 1 curiosity-inducing sentence.",
      "icon_hint": "target"
    }
  ],
  "additional_issues_count": 5
}

RULES:
- overall_score: average of all 6 scores, 1 decimal
- score_color: "red" <5 | "yellow" 5–7 | "green" >7
- additional_issues_count: count of real issues found beyond the 6 reported (0–10; use 0 if no others found)
- Exactly 3 free_insights and 3 locked_insights
- All scores must be integers 1–10
- Return ONLY valid JSON

LANGUAGE REQUIREMENT — MANDATORY: [Hungarian or English instruction appended here]
```

---

### Q7. Does the prompt explicitly instruct OpenAI to CITE specific text/values it sees in the data?

**Partially.** Rule 5 says "Only quote text that appears verbatim in the extracted data." The output format template says "Cite exact tag value or confirmed absence."

**But the instruction says what NOT to do, not what TO do.** It doesn't say "You MUST quote the exact title tag text in your finding." It says don't fabricate quotes. This is a passive constraint, not an active citation requirement.

**Result in practice:** OpenAI sometimes cites values (Joe's Barbershop H1 text was quoted correctly) and sometimes doesn't (Stripe's title was not quoted despite being available). The instruction is inconsistently followed because it's framed as a prohibition rather than a requirement.

---

### Q8. Does the prompt give OpenAI examples of specific vs generic output?

**NO.** There are no examples of good vs bad insight text in either prompt. The format template shows structural placeholders ("Cite exact tag value or confirmed absence. 1-2 sentences.") but no concrete before/after example.

Without an example like:

> **Bad:** "Your title tag could be improved."  
> **Good:** "Your title tag reads 'Welcome | Home' (14 chars) — it contains no keywords, no service name, and no location. At less than a quarter of the recommended 50–60 character limit, it is almost completely invisible to keyword-targeted searches."

OpenAI defaults to its training distribution, which skews toward the generic phrasing that appears most frequently in SEO content online.

---

### Q9. Does the prompt enforce the medium/high priority split reliably?

**Weakly.** The priority description reads:

- Free: "3 issues that demonstrate expertise but aren't the most critical"
- Locked: "3 issues with biggest AI-visibility impact"

This is conceptually correct but practically vague. "Most critical" is not defined. OpenAI decides unilaterally which 3 are bigger.

**Observed failure:** In the Stripe audit, the locked insights include "Performance could not be measured" — which is not high-priority, it's just unknown. And "Business name and services are present, but location details are missing" is in the locked section despite being a relatively minor observation for a global SaaS company. The split is not reliably enforced.

There is no instruction preventing OpenAI from putting a genuinely critical finding in the free section if it judges that finding to be "medium" priority.

---

### Q10. Is there anything in the prompt that could cause OpenAI to hallucinate issues not present in the data?

**Yes — two specific risks:**

1. **The category structure forces 6 findings.** OpenAI must produce exactly 3 free and 3 locked insights across 6 named categories. If a site only has 2 real problems, OpenAI will fabricate or over-generalize to fill the remaining slots. The prompt has no path for "this category is fine — nothing to report here."

2. **The "additional_issues_count" field** is described as "count of real issues found beyond the 6 reported." For a well-built site, the honest answer is 0. But because this number appears in the UI as social proof of the audit's value ("12 additional issues found"), OpenAI tends to inflate it. There is no validation that this number reflects real additional findings.

---

### Q11. What is the current temperature setting? Is it appropriate?

- **Attempt 1:** `temperature: 0.3`
- **Attempts 2–3 (retry):** `temperature: 0.1`

**0.3 is too high for structured, factual output.** For a task where the correct answer is directly derivable from input data (the title tag IS a specific string, it IS a specific length), temperature should be `0.0` or `0.1`. At 0.3, OpenAI introduces variation in wording and occasionally varies which signals it decides to cite or ignore. This is the primary reason the same title tag gets quoted in one audit and omitted in another.

---

## SECTION 3 — THE OUTPUT VALIDATION

### Q12. After OpenAI returns its response, what validation happens?

The following IS validated (in `geminiAudit.ts`):
- Valid JSON parse — yes
- `free_insights` is an array with exactly 3 items — yes
- `locked_insights` is an array with exactly 3 items — yes
- Each free insight has `category`, `issue`, `surface_fix` fields — yes (presence only)
- Data accuracy cross-check via `validateInsights()` — partial (see below)

`validateInsights()` checks for:
- Body content claims on a confirmed SPA site
- Quoted heading text when no headings were found
- Specific performance scores when PageSpeed is unavailable

**What is NOT validated:**
- Whether the `issue` text actually cites any specific value from the site (e.g., the actual title text)
- Whether the `surface_fix` is site-specific or generic boilerplate
- Whether the `teaser` hints at a fix without revealing it (no check for fix-revealing teasers)
- Whether the `overall_score` is mathematically consistent with the 6 individual scores
- Whether `additional_issues_count` is plausible given the signals available
- Minimum text length — an issue field that says "improve your SEO" (17 chars) would pass validation

---

### Q13. What happens if OpenAI returns generic or wrong output?

| Scenario | What happens |
|---|---|
| Generic advice not specific to the site | **Goes straight to the user.** No specificity check exists. |
| Issue field says "improve your SEO" | **Goes straight to the user.** Only structure is validated, not content quality. |
| Teaser reveals the fix | **Goes straight to the user.** No teaser quality check. |
| Score inconsistent with severity | **Goes straight to the user.** No rubric enforcement post-generation. |
| `additional_issues_count` is inflated | **Goes straight to the user.** Value is accepted as-is. |
| Accuracy warning on final attempt | **Goes straight to the user** with a console.warn logged. The code explicitly falls through on attempt 3 with imperfect data rather than failing. |

---

### Q14. Raw JSON output for 3 live tests

**Test 1: joesbarbershopchicago.com (simple local business)**
```json
{
  "overall_score": 4,
  "score_color": "red",
  "headline": "Significant issues impact AI search visibility.",
  "free_insights": [
    {
      "category": "Title + Meta Tags",
      "score": 6,
      "issue": "Meta description is 226 chars, exceeding the ideal length of 150–160 chars.",
      "surface_fix": "Shorten the meta description to fit within the recommended length.",
      "icon_hint": "search"
    },
    {
      "category": "Heading Hierarchy",
      "score": 4,
      "issue": "Multiple H1s found: 'Classic  CHICAGO barbering  since   1968' and '- NOW  OPEN  MONDAYs -'.",
      "surface_fix": "Consolidate to a single H1 for better clarity.",
      "icon_hint": "heading"
    },
    {
      "category": "Schema Markup",
      "score": 5,
      "issue": "Missing required fields in LocalBusiness schema, such as address and opening hours.",
      "surface_fix": "Add address and opening hours to the LocalBusiness schema.",
      "icon_hint": "code"
    }
  ],
  "locked_insights": [
    {
      "category": "AI-Friendly Content Structure",
      "score": 3,
      "teaser": "Content is not crawlable by AI engines due to thin HTML.",
      "icon_hint": "sparkles"
    },
    {
      "category": "Entity Clarity",
      "score": 4,
      "teaser": "Business location and services are not clearly defined in the visible HTML.",
      "icon_hint": "target"
    },
    {
      "category": "Performance",
      "score": 1,
      "teaser": "Performance could not be measured due to absence of PageSpeed data.",
      "icon_hint": "gauge"
    }
  ],
  "additional_issues_count": 2
}
```

**Test 2: freshbooks.com (mid-size business, JS-heavy)**
```json
{
  "overall_score": 4,
  "score_color": "red",
  "headline": "Significant issues impacting AI search visibility.",
  "free_insights": [
    {
      "category": "Title + Meta Tags",
      "score": 6,
      "issue": "Title tag is 65 characters long, exceeding the recommended length of 50-60 characters.",
      "surface_fix": "Consider shortening the title to improve SEO effectiveness.",
      "icon_hint": "search"
    },
    {
      "category": "Heading Hierarchy",
      "score": 5,
      "issue": "Multiple H2s with repetitive content, specifically 'Use FreshBooksyour way'.",
      "surface_fix": "Consolidate headings to improve clarity and structure.",
      "icon_hint": "heading"
    },
    {
      "category": "AI-Friendly Content Structure",
      "score": 4,
      "issue": "Content is not crawlable by AI engines due to potential JS rendering.",
      "surface_fix": "Ensure that content is accessible in plain HTML for better indexing.",
      "icon_hint": "sparkles"
    }
  ],
  "locked_insights": [
    {
      "category": "Schema Markup",
      "score": 2,
      "teaser": "Absence of JSON-LD schema markup limits search engine understanding.",
      "icon_hint": "code"
    },
    {
      "category": "Entity Clarity",
      "score": 3,
      "teaser": "Business name and services are not clearly defined in the visible HTML.",
      "icon_hint": "target"
    },
    {
      "category": "Performance",
      "score": 1,
      "teaser": "PageSpeed data is unavailable, preventing performance measurement.",
      "icon_hint": "gauge"
    }
  ],
  "additional_issues_count": 2
}
```

**Test 3: stripe.com (well-built enterprise site)**
```json
{
  "overall_score": 6.7,
  "score_color": "yellow",
  "headline": "Solid foundation but needs refinement for AI visibility.",
  "free_insights": [
    {
      "category": "Title + Meta Tags",
      "score": 8,
      "issue": "Title tag is descriptive and within the correct length, but could be more compelling.",
      "surface_fix": "Consider adding a unique value proposition to enhance engagement.",
      "icon_hint": "search"
    },
    {
      "category": "Heading Hierarchy",
      "score": 5,
      "issue": "Multiple H1s found, which can confuse search engines.",
      "surface_fix": "Ensure only one H1 is used for clarity.",
      "icon_hint": "heading"
    },
    {
      "category": "Schema Markup",
      "score": 7,
      "issue": "JSON-LD schema is present but could benefit from additional required fields.",
      "surface_fix": "Add missing fields like address for local SEO.",
      "icon_hint": "code"
    }
  ],
  "locked_insights": [
    {
      "category": "AI-Friendly Content Structure",
      "score": 4,
      "teaser": "Content is not crawlable by AI engines due to potential JS rendering issues.",
      "icon_hint": "sparkles"
    },
    {
      "category": "Entity Clarity",
      "score": 6,
      "teaser": "Business name and services are present, but location details are missing.",
      "icon_hint": "target"
    },
    {
      "category": "Performance",
      "score": 1,
      "teaser": "Performance could not be measured due to absence of PageSpeed data.",
      "icon_hint": "gauge"
    }
  ],
  "additional_issues_count": 2
}
```

---

## SECTION 4 — THE SPECIFICITY GAP

### Q15. For each insight across the 3 tests — does it cite actual text? Could it appear on a different site?

**Test 1 — joesbarbershopchicago.com**

| Insight | Cites actual site text | Could appear on any site | Assessment |
|---|---|---|---|
| Meta description 226 chars | No (char count only, actual text not quoted) | Yes, any site with a long meta desc | Specific finding, generic phrasing |
| Multiple H1s with actual quoted text | **YES** — quotes both H1s verbatim | No | **Genuinely site-specific** |
| LocalBusiness schema missing address/hours | Partially (knows schema type) | Yes, any LocalBusiness with missing fields | Semi-specific |
| Content not crawlable due to thin HTML | No | **Yes — identical to FreshBooks and Stripe** | **Generic template** |
| Business location not clearly defined | No | **Yes — identical wording to FreshBooks and Stripe** | **Generic template** |
| Performance couldn't be measured | No | **Yes — IDENTICAL across all 3 tests** | **Pure template** |

**Test 2 — freshbooks.com**

| Insight | Cites actual site text | Could appear on any site | Assessment |
|---|---|---|---|
| Title tag 65 chars | No (count only, actual title "FreshBooks: Small Business Accounting Software" not quoted) | Yes | Specific finding, generic phrasing |
| Multiple H2s, cites 'Use FreshBooksyour way' | **YES** (note: the merge artifact "FreshBooksyour" is a real rendering glitch — accurately captured) | No | **Genuinely site-specific** |
| Content not crawlable, JS rendering | No | **Yes — same sentence as Joe's and Stripe** | **Generic template** |
| No JSON-LD schema | No (accurate finding, but generic) | Yes, any site without schema | Accurate, generic |
| Business name/services not clearly defined | No | **Yes — identical wording to Joe's and Stripe** | **Generic template** |
| PageSpeed unavailable | No | **Yes — IDENTICAL across all 3 tests** | **Pure template** |

**Test 3 — stripe.com**

| Insight | Cites actual site text | Could appear on any site | Assessment |
|---|---|---|---|
| Title tag "descriptive but could be more compelling" | **NO** — title text not quoted at all | Yes | **Entirely generic** |
| Multiple H1s | No — H1 text not quoted | Yes | Generic |
| Schema present but missing fields | No — which fields? Not stated. "Add address for local SEO" is nonsensical for Stripe | Yes | **Generic and arguably wrong** |
| Content not crawlable, JS rendering | No | **Yes — same sentence as Joe's and FreshBooks** | **Generic template** |
| Location details missing | No | Yes | Generic |
| Performance couldn't be measured | No | **Yes — IDENTICAL across all 3 tests** | **Pure template** |

---

### Q16. What percentage of insights across the 3 tests are genuinely site-specific?

Total insights across 3 tests: 18 (6 per site)

Genuinely site-specific (cites actual extracted text, could not appear verbatim on a different site):
- Joe's: H1 quotes = 1 insight
- FreshBooks: H2 quote = 1 insight
- Stripe: 0 insights

**Truly site-specific: 2 out of 18 = ~11%**

Semi-specific (correct finding, no cited text, but finding is accurate to this site's actual state):
- Joe's: meta description length, schema type
- FreshBooks: title length, no schema
- Stripe: schema present (correct)

**Semi-specific: ~5–6 out of 18 = ~28–33%**

Copy-paste template across sites (identical or near-identical wording regardless of site):
- "Content is not crawlable by AI engines due to [thin HTML / potential JS rendering]"
- "Business location and services are not clearly defined in the visible HTML"
- "Performance could not be measured due to absence of PageSpeed data"

**These 3 locked insights appear in every single audit with near-identical wording.**

**Conservative honest estimate: 10–15% genuinely site-specific, 50–60% generic template, 30% semi-specific.**

---

### Q17. Is the overall score derived from meaningful analysis or is it a number OpenAI made up?

**It is a number OpenAI made up within a loosely constrained framework.**

The prompt says "overall_score: average of all 6 scores" and provides a scoring rubric at the category level. However:

1. There is no post-generation check that the `overall_score` actually equals the average of the 6 category scores. In Test 1 (Joe's), the free scores are 6, 4, 5 and locked scores are 3, 4, 1 — average = 3.83. Returned score: 4.0. Close but rounded without disclosure.
2. The individual category scores have no rubric. "Score 5 if meta description is X chars" is not defined. OpenAI picks numbers that "feel right" for the situation described.
3. Test 1 and Test 2 both returned `overall_score: 4` despite having meaningfully different site quality. FreshBooks is objectively a better-built site than a small barbershop.
4. `score_color` is derived from `overall_score` (red <5, yellow 5–7, green >7) — this part is at least consistently applied.

**The score reflects OpenAI's qualitative judgment expressed as a number, not a computed metric. It is not meaningless, but it is not rigorous.**

---

## SECTION 5 — THE SINGLE BIGGEST PROBLEM

### Q18. In one paragraph, what is the single biggest reason this tool produces output that feels generic?

The Performance locked insight is identical across every single audit: "Performance could not be measured due to absence of PageSpeed data." This happens because the PageSpeed API is not returning data for any tested site (either rate limiting, API quota, or timeout), which means one of the six analyzed categories always produces the same canned observation. More broadly, the three locked insights follow a fixed template across every run: JS rendering concern, entity clarity concern, performance unknown. The locked section — which is supposed to be the most compelling part that drives Calendly bookings — is actually the least site-specific part of the entire output. A technically aware user reading the locked teasers will immediately notice they read like they were pre-written.

---

### Q19. What is the single highest-leverage change to improve output specificity?

**Force citation by restructuring the prompt's output schema.**

Change the `issue` field to a two-part structure:

```json
"issue": {
  "observed_value": "The exact value extracted — e.g. title text, char count, quoted heading",
  "problem": "Why this is a problem"
}
```

And add this instruction to the prompt:

> `observed_value` MUST be filled with the exact text, number, or tag content you saw in the Available signals. If you cannot fill this with a specific value from the data, you must not report this finding. Never write generic advice in `observed_value`.

This single change makes it structurally impossible to produce a generic insight — OpenAI must anchor every finding to a specific extracted value or the finding fails its own format requirements. The frontend can then display it as: `"Title tag reads: '[actual text]' — [why it's a problem]"`.

This requires: a prompt change, a type change in `AuditReport`, and a minor frontend render update. Roughly 2 hours of work.

---

### Q20. If a technically sophisticated prospect ran this, would they be impressed or see through it?

**They would see through it in under 60 seconds.**

The three locked insights are dead giveaways. "Performance could not be measured" appearing on every single audit tells a technically literate user that the Performance slot is not analyzed — it's a fallback message. "Business location and services are not clearly defined" appearing verbatim for a Chicago barbershop AND for Stripe.com AND for FreshBooks tells them the output is templated. The free insights for Stripe — where the title is not quoted, the H1 text is not quoted, and the schema advice ("add address for local SEO") is nonsensical for a global payments processor — would confirm it immediately.

A non-technical prospect (the intended audience) will likely find it compelling. The score, the color coding, and the 2 genuinely specific insights (quoted heading text) are enough to create the impression of a real analysis. The tool works for its intended audience. It does not work as a demonstration of technical depth to a technical audience.

---

*End of audit.*
