export type Lang = 'en' | 'hu';

export const t = {
  // AuditForm
  badge: { en: 'Free Website Audit', hu: 'Ingyenes Weboldal Audit' },
  headline_geo: { en: 'Is Your Website Invisible to AI Search?', hu: 'Láthatatlan a weboldalad az AI keresők számára?' },
  headline_seo: { en: 'Is Your Website Invisible to Google?', hu: 'Láthatatlan a weboldalad a Google-n?' },
  sub_geo: { en: 'Find out why AI engines skip your site — in 60 seconds, no signup.', hu: 'Tudd meg, miért hagyják ki az AI keresők az oldaladat — 60 másodperc alatt, regisztráció nélkül.' },
  sub_seo: { en: "Find out what's stopping Google from ranking your site — in 60 seconds, no signup.", hu: 'Tudd meg, mi akadályoz a Google rangsorolásban — 60 másodperc alatt, regisztráció nélkül.' },
  toggle_geo: { en: 'AI Search', hu: 'AI Keresés' },
  toggle_geo_sub: { en: 'ChatGPT, Perplexity, Gemini', hu: 'ChatGPT, Perplexity, Gemini' },
  toggle_seo: { en: 'Google Search', hu: 'Google Keresés' },
  toggle_seo_sub: { en: 'Rankings & organic traffic', hu: 'Rangsorolás & organikus forgalom' },
  placeholder: { en: 'https://yourwebsite.com', hu: 'https://weboldalad.hu' },
  btn_geo: { en: 'Run My Free AI-Readiness Audit →', hu: 'Ingyenes AI Audit Futtatása →' },
  btn_seo: { en: 'Run My Free SEO Audit →', hu: 'Ingyenes SEO Audit Futtatása →' },
  trust: { en: 'AI-powered analysis · Free · ~60 seconds', hu: 'AI-alapú elemzés · Ingyenes · ~60 másodperc' },
  url_required: { en: 'Please enter your website URL.', hu: 'Kérjük, add meg a weboldalad URL-jét.' },

  // LoadingState
  loading_geo: {
    en: ['Loading your website...', 'Extracting content + structure...', 'Running PageSpeed analysis...', 'Asking AI to evaluate your site...', 'Building your report...'],
    hu: ['Weboldalad betöltése...', 'Tartalom és struktúra elemzése...', 'PageSpeed elemzés futtatása...', 'AI értékeli az oldaladat...', 'Jelentés elkészítése...'],
  },
  loading_seo: {
    en: ['Loading your website...', 'Extracting content + structure...', 'Running PageSpeed analysis...', 'Analysing your Google SEO signals...', 'Building your report...'],
    hu: ['Weboldalad betöltése...', 'Tartalom és struktúra elemzése...', 'PageSpeed elemzés futtatása...', 'Google SEO jelek elemzése...', 'Jelentés elkészítése...'],
  },
  loading_footer: { en: 'This takes about 60 seconds', hu: 'Ez körülbelül 60 másodpercet vesz igénybe' },

  // ScoreHero
  score_label_geo: { en: 'AI-Readiness Score', hu: 'AI-Felkészültségi Pontszám' },
  score_label_seo: { en: 'SEO Score', hu: 'SEO Pontszám' },

  // AuditReport
  badge_geo: { en: '⚡ AI Search (GEO) Audit', hu: '⚡ AI Keresés (GEO) Audit' },
  badge_seo: { en: '🔍 Google Search (SEO) Audit', hu: '🔍 Google Keresés (SEO) Audit' },
  found_preview: { en: 'What we found (preview)', hu: 'Mit találtunk (előnézet)' },
  found_sub: { en: '3 issues from your audit — the full report has', hu: '3 probléma az auditodból — a teljes jelentés tartalmaz' },
  found_more: { en: 'more', hu: 'további problémát' },
  audit_another: { en: 'Audit a different site', hu: 'Másik oldal auditálása' },
  footer_text: { en: 'Powered by AI · Free for first audit · Built by Levi Nagy Marketing', hu: 'AI által működtetve · Első audit ingyenes · Készítette: Levi Nagy Marketing' },

  // InsightCard
  directional_fix: { en: 'Directional Fix', hu: 'Javítási Irány' },

  // LockedSection
  full_report_ready: { en: 'Full Report Ready', hu: 'Teljes Jelentés Kész' },
  locked_title: { en: 'Your 3 Most Critical Issues Are Locked', hu: 'A 3 Legkritikusabb Problémád Zárolva Van' },
  locked_sub1: { en: "You've seen 3 issues. The full audit found", hu: 'Láttál 3 problémát. A teljes audit összesen' },
  locked_sub2: { en: 'total — including the 3 that matter most:', hu: 'problémát talált — beleértve a 3 legfontosabbat:' },
  fix_revealed: { en: 'Fix revealed in walkthrough', hu: 'A megoldás az áttekintésben derül ki' },
  walkthrough_title: { en: 'What you get in the free walkthrough:', hu: 'Mit kapsz az ingyenes áttekintésben:' },
  no_pitch: { en: 'No pitch, no pressure.', hu: 'Nincs nyomulás, nincs nyomás.' },
  no_pitch_sub: { en: 'You leave with a clear action plan whether you work with us or not.', hu: 'Egyértelmű cselekvési tervvel távozol, akár dolgozunk együtt, akár nem.' },
  book_btn: { en: 'Book My Free Walkthrough →', hu: 'Foglalj Ingyenes Áttekintést →' },
  perks_geo: {
    en: ['Exact rewrites for each issue', 'Copy-paste schema markup tailored to your site', 'Priority order — what to fix first for max AI visibility', 'A 30-day action plan'],
    hu: ['Pontos átírások minden problémához', 'Másolható schema markup az oldaladhoz', 'Prioritási sorrend — mit javíts először a maximális AI láthatóságért', '30 napos cselekvési terv'],
  },
  perks_seo: {
    en: ['Exact rewrites for title, meta & headings', 'Copy-paste schema markup for Google', 'Priority order — what to fix first for max rankings', 'A 30-day SEO action plan'],
    hu: ['Pontos átírások a cím, meta és fejlécekhez', 'Másolható schema markup a Google-hoz', 'Prioritási sorrend — mit javíts először a legjobb rangsorolásért', '30 napos SEO cselekvési terv'],
  },

  // Calendly section
  book_title: { en: 'Pick a time that works for you', hu: 'Válassz egy számodra megfelelő időpontot' },
  book_label: { en: 'Book Your Call', hu: 'Időpont Foglalás' },
  back: { en: '← Back', hu: '← Vissza' },

  // Booked state
  booked_title: { en: "You're booked!", hu: 'Az időpontod lefoglalva!' },
  booked_sub: { en: "Check your email for the confirmation. We'll review your full audit before the call.", hu: 'Ellenőrizd az e-mailedben a visszaigazolást. Az áttekintés előtt átnézzük a teljes auditot.' },
  booked_footer: { en: "We'll go through all", hu: 'Végigmegyünk mind a' },
  booked_footer2: { en: 'issues — starting with the ones that matter most.', hu: 'problémán — a legfontosabbakkal kezdve.' },
} as const;

export function tr(key: keyof typeof t, lang: Lang): string {
  const entry = t[key];
  if (typeof entry === 'object' && 'en' in entry && 'hu' in entry) {
    const val = entry[lang];
    return typeof val === 'string' ? val : '';
  }
  return '';
}

export function trArr(key: keyof typeof t, lang: Lang): string[] {
  const entry = t[key];
  if (typeof entry === 'object' && 'en' in entry) {
    const val = entry[lang];
    return Array.isArray(val) ? val : [];
  }
  return [];
}
