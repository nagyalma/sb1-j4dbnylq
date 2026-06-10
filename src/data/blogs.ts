// ── Blog data ──────────────────────────────────────────────────────────────
// To add a new blog: append one object to the `blogs` array.
// Schema markup is auto-generated from this data in BlogPost.tsx.

export interface BlogSection {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'callout' | 'cta';
  content?: string;
  items?: string[];
}

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  sections: BlogSection[];
  faqs: BlogFAQ[];
}

export interface Blog {
  slug: string;
  datePublished: string;
  dateModified: string;
  coverImage: string;
  readTime: number;
  category: 'Facebook Ads' | 'Google Ads' | 'SEO' | 'Marketing';
  hu: BlogContent;
  en: BlogContent;
}

export const blogs: Blog[] = [
  // ── Blog 1: Facebook Ads vs Google Ads ──────────────────────────────────
  {
    slug: 'facebook-ads-vs-google-ads',
    datePublished: '2025-05-20',
    dateModified: '2025-05-20',
    coverImage: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754826429/Win_tdgauq.png',
    readTime: 6,
    category: 'Facebook Ads',
    hu: {
      title: 'Facebook Hirdetések vs Google Ads: Melyiket Válaszd 2025-ben?',
      metaTitle: 'Facebook Hirdetések vs Google Ads 2025 | Nagy Levi Marketing',
      metaDescription: 'Részletes összehasonlítás: mikor futtass Facebook hirdetést, és mikor Google Ads kampányt? Valós eredmények budapesti vállalkozásoknak.',
      keywords: ['facebook hirdetés', 'google ads', 'facebook vs google', 'online hirdetés budapest', 'marketing ügynökség budapest'],
      intro: 'Magyarországon az egyik leggyakoribb kérdés, amit kisvállalkozóktól kapok: "Levi, melyikbe fektessek — Facebookba vagy Google-ba?" A válasz nem egyszerű igen vagy nem — mindkét platform más-más helyzetben teljesít legjobban. Ebben az útmutatóban megmutatom, mikor melyiket érdemes választani, és hogyan hoztuk ki a legtöbbet ügyfeleink büdzséjéből.',
      sections: [
        {
          type: 'h2',
          content: 'Mi a különbség a Facebook hirdetések és a Google Ads között?',
        },
        {
          type: 'p',
          content: 'A két platform alapvetően különböző logika szerint működik. A Facebook hirdetések push marketing eszközök: az embereket érdeklődésük és viselkedésük alapján éred el — akkor is, ha nem keresnek aktívan semmit. Te hozod el az ajánlatot hozzájuk. A Google Ads ezzel szemben pull marketing: azokat éred el, akik aktívan keresnek valamit — és te ott vagy az első helyen, amikor szükségük van rád.',
        },
        {
          type: 'h2',
          content: 'Mikor éri meg Facebook hirdetést futtatni?',
        },
        {
          type: 'p',
          content: 'Facebook hirdetések akkor a legerősebbek, ha a következő feltételek teljesülnek:',
        },
        {
          type: 'ul',
          items: [
            'Vizuális szolgáltatást kínálsz (szépségipar, étterem, fitness, ingatlan)',
            'Új márkát vagy ajánlatot akarsz megismertetni a célközönségeddel',
            'Szűk demográfiai csoportot célzol (pl. 30-45 éves anyák Budapest V. kerületéből)',
            'Remarketing kampányt futtatsz — visszahozod a korábban érdeklődőket',
            'Relatíve alacsonyabb büdzsével indulsz (50-100 ezer Ft/hó is elegendő lehet)',
          ],
        },
        {
          type: 'callout',
          content: '💡 Valós eredmény: Magyar Zsuzsa sminktetoválás stúdiójánál Facebook hirdetésekkel 181 megkeresést szereztünk az első hónapban — 3,5× többet, mint a korábbi kampányokkal. A siker kulcsa: pontos célzás és konverzióra optimalizált landing oldal.',
        },
        {
          type: 'h2',
          content: 'Mikor éri meg Google Ads kampányt futtatni?',
        },
        {
          type: 'p',
          content: 'Google Ads kampányok ott igazán hatékonyak, ahol az azonnali vásárlási szándék magas:',
        },
        {
          type: 'ul',
          items: [
            'Helyi szolgáltatást nyújtasz (fogászat, ügyvéd, autószerelő, vízszerelő)',
            'Azonnali megkereséseket szeretnél — Google Ads-nél 1-2 héten belül jönnek az első leadek',
            'Konkrét kulcsszavakra akarsz megjelenni a versenytársak előtt',
            'Pontosan mérhető ROI-t szeretnél rövid távon',
          ],
        },
        {
          type: 'callout',
          content: '💡 Valós eredmény: A Denti Implant Center esetében Google Ads-szel és új weboldallal 53 form kitöltést szereztünk az első hónapban — ez több millió forint bevételt jelentett.',
        },
        {
          type: 'h2',
          content: 'Facebook Ads vs Google Ads — mikor melyiket?',
        },
        {
          type: 'ul',
          items: [
            'Facebook Ads: brand building, vizuális iparágak, érdeklődők generálása, remarketing',
            'Google Ads: azonnali keresési igény, helyi szolgáltatók, gyors konverzió',
            'Mindkettő: hosszú távú növekedés, skálázható kampányok, teljes tölcsér lefedés',
          ],
        },
        {
          type: 'h2',
          content: 'A legjobb stratégia: kombináld a kettőt',
        },
        {
          type: 'p',
          content: 'A legeredményesebb ügyfeleinknél mindkét platform fut egyszerre — de különböző célokra. A Google Ads hozza az azonnali megkereséseket (magas keresési szándékú embereket), a Facebook Ads pedig tudatosítja a márkát, és retargetinggel visszahozza azokat, akik már érdeklődtek. Ha csak eggyel kezdesz, válaszd azt, amelyik az iparágadban bizonyítottan jobban teljesít — és bővítsd fokozatosan.',
        },
        {
          type: 'cta',
          content: 'Nem tudod, melyikkel érdemes kezdened? Kérj ingyenes konzultációt — megmutatjuk, melyik stratégia illik legjobban a vállalkozásodhoz.',
        },
      ],
      faqs: [
        {
          q: 'Mennyibe kerül havonta a Facebook hirdetés Magyarországon?',
          a: 'A hirdetési büdzsé általában 50 000–300 000 Ft/hó között mozog kisvállalkozások esetén. Ebbe nem számít bele a kezelési díj. A Nagy Levi Marketingnél átlátható, rugalmas csomagokkal dolgozunk, hosszú szerződés nélkül.',
        },
        {
          q: 'Melyik platform hoz gyorsabb eredményt — Facebook vagy Google?',
          a: 'Google Ads általában gyorsabban hoz megkereséseket (1-2 hét), mivel azokat éri el, akik aktívan keresnek. Facebook Ads-nél az optimalizáláshoz 2-4 hét kell, de hosszú távon rendkívül hatékony.',
        },
        {
          q: 'Lehet egyszerre mindkét platformon hirdetni?',
          a: 'Igen, sőt ez az ideális stratégia. A Google Ads a keresési szándékot ragadja meg, a Facebook Ads a tudatosságot és remarketing célokat szolgálja. A legjobb eredményeket kombinált kampányokkal érjük el.',
        },
        {
          q: 'Melyik iparágban működik jobban a Facebook hirdetés?',
          a: 'Szépségipar, wellness, éttermipar, fitness, ingatlan és e-commerce területeken különösen hatékony a Facebook Ads, ahol a vizualitás és az érzelmek erős szerepet játszanak.',
        },
      ],
    },
    en: {
      title: 'Facebook Ads vs Google Ads: Which Should You Choose in 2025?',
      metaTitle: 'Facebook Ads vs Google Ads 2025 | Nagy Levi Marketing Budapest',
      metaDescription: 'Detailed comparison: when should you run Facebook ads vs Google Ads? Real results and examples for Budapest businesses.',
      keywords: ['facebook ads', 'google ads', 'facebook vs google ads', 'marketing budapest', 'online advertising hungary'],
      intro: "One of the most common questions I get from business owners in Hungary: \"Levi, should I invest in Facebook or Google?\" The answer is not a simple yes or no — both platforms excel in different situations. In this guide, I'll show you when to choose each, based on real results from our clients.",
      sections: [
        {
          type: 'h2',
          content: 'What is the difference between Facebook Ads and Google Ads?',
        },
        {
          type: 'p',
          content: 'The two platforms operate on fundamentally different logic. Facebook Ads are push marketing: you reach people based on their interests and behavior — even when they are not actively searching for anything. You bring the offer to them. Google Ads, on the other hand, is pull marketing: you reach people who are actively searching for a solution, and you appear at the top when they need you most.',
        },
        {
          type: 'h2',
          content: 'When should you run Facebook Ads?',
        },
        {
          type: 'p',
          content: 'Facebook Ads are most powerful when:',
        },
        {
          type: 'ul',
          items: [
            'You offer a visual service (beauty, restaurants, fitness, real estate)',
            'You want to introduce a new brand or offer to your audience',
            'You target a narrow demographic (e.g. women aged 30-45 in Budapest)',
            'You run remarketing campaigns — bringing back previous visitors',
            'You are starting with a lower budget (50,000–100,000 HUF/month can work)',
          ],
        },
        {
          type: 'callout',
          content: '💡 Real result: At Magyar Zsuzsa\'s permanent makeup studio, Facebook Ads delivered 181 leads in the first month — 3.5× more than previous campaigns. Key: precise targeting + conversion-optimized landing page.',
        },
        {
          type: 'h2',
          content: 'When should you run Google Ads?',
        },
        {
          type: 'p',
          content: 'Google Ads campaigns excel where immediate purchase intent is high:',
        },
        {
          type: 'ul',
          items: [
            'You provide local services (dental, legal, auto repair, plumbing)',
            'You want fast results — Google Ads typically shows leads within 1-2 weeks',
            'You want to appear above competitors for specific keywords',
            'You want measurable ROI in the short term',
          ],
        },
        {
          type: 'callout',
          content: '💡 Real result: Denti Implant Center received 53 form submissions in their first month using Google Ads + a new website — generating millions in revenue.',
        },
        {
          type: 'h2',
          content: 'Facebook Ads vs Google Ads — a quick decision guide',
        },
        {
          type: 'ul',
          items: [
            'Facebook Ads: brand building, visual industries, lead generation, remarketing',
            'Google Ads: high-intent search, local services, fast conversions',
            'Both: long-term growth, scalable campaigns, full funnel coverage',
          ],
        },
        {
          type: 'h2',
          content: 'The smartest strategy: combine both',
        },
        {
          type: 'p',
          content: 'Our most successful clients run both platforms simultaneously — but for different purposes. Google Ads captures immediate demand (people already searching), while Facebook Ads builds brand awareness and retargets previous visitors. If you are just starting, choose the one that works best in your industry and scale from there.',
        },
        {
          type: 'cta',
          content: 'Not sure which platform is right for you? Get a free consultation — we\'ll show you the exact strategy that fits your business.',
        },
      ],
      faqs: [
        {
          q: 'How much does Facebook advertising cost per month in Hungary?',
          a: 'Ad spend for small businesses in Hungary typically ranges from 50,000–300,000 HUF per month. Management fees are separate. At Nagy Levi Marketing, we work with transparent, flexible packages and no long-term contracts.',
        },
        {
          q: 'Which platform delivers faster results — Facebook or Google?',
          a: 'Google Ads typically delivers leads faster (within 1-2 weeks) since it targets people actively searching. Facebook Ads requires 2-4 weeks to optimize, but is highly effective long-term.',
        },
        {
          q: 'Can I run both platforms at the same time?',
          a: 'Yes — and that is the ideal strategy. Google Ads captures search intent, while Facebook Ads handles brand awareness and remarketing. The best results come from combined campaigns.',
        },
        {
          q: 'Which industries work best with Facebook Ads?',
          a: 'Beauty, wellness, restaurants, fitness, real estate, and e-commerce perform especially well on Facebook, where visuals and emotions play a strong role.',
        },
      ],
    },
  },

  // ── Blog 2: Facebook Ads cost in Hungary ────────────────────────────────
  {
    slug: 'mennyibe-kerul-a-facebook-hirdetes',
    datePublished: '2025-05-22',
    dateModified: '2025-05-22',
    coverImage: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251188/Aesthetic_Clinic_FB_Ads_xwgn1w.png',
    readTime: 5,
    category: 'Facebook Ads',
    hu: {
      title: 'Mennyibe Kerül a Facebook Hirdetés Magyarországon? (2025-ös Útmutató)',
      metaTitle: 'Facebook Hirdetés Ár Magyarország 2025 | Nagy Levi Marketing',
      metaDescription: 'Pontos árak, átlagos CPC és CPM értékek Magyarországon 2025-ben. Mekkora büdzsével érdemes elkezdeni? Valós adatok és példák.',
      keywords: ['facebook hirdetés ár', 'facebook ads költség', 'facebook reklám ár', 'hirdetés budapest', 'facebook marketing'],
      intro: 'Ha Facebook hirdetést tervezel, az első kérdés szinte mindig ez: "Mennyibe fog kerülni?" Ebben az útmutatóban pontos számokat és valós példákat mutatok — nem elméletet, hanem azt, amit mi ténylegesen tapasztalunk ügyfeleinkkel Magyarországon nap mint nap.',
      sections: [
        {
          type: 'h2',
          content: 'Hogyan számolja fel a Facebook a hirdetések árát?',
        },
        {
          type: 'p',
          content: 'A Facebook aukciós rendszerben áraz. Nem fizetsz fix összeget — az ár attól függ, ki más versenyez ugyanazért a célközönségért, milyen minőségű a hirdetésed, és mi a kampány célkitűzése. Ez azt jelenti, hogy két azonos büdzsével futó kampány teljesen eltérő eredményt hozhat, attól függően, hogyan van felépítve.',
        },
        {
          type: 'h2',
          content: 'Átlagos Facebook hirdetési költségek Magyarországon (2025)',
        },
        {
          type: 'ul',
          items: [
            'CPC (kattintásonkénti ár): 30–120 Ft',
            'CPM (1000 megjelenésenként): 300–800 Ft',
            'CPL (érdeklődőnként, Lead Ads): 500–3 000 Ft',
            'Konverzió (pl. időpontfoglalás, vásárlás): 800–5 000 Ft',
          ],
        },
        {
          type: 'callout',
          content: '⚠️ Fontos: ezek iparági átlagok. Egy szépségszalon esetén 400 Ft/lead is elérhető, míg ingatlaniparban vagy orvosi területen ez 3-5× magasabb lehet. Az ár erősen függ a célzástól, a hirdetés minőségétől és a versenytől.',
        },
        {
          type: 'h2',
          content: 'Mi befolyásolja leginkább a Facebook hirdetések árát?',
        },
        {
          type: 'ul',
          items: [
            'Célközönség mérete és verseny — minél szűkebb, annál drágább',
            'A hirdetés minősége és relevanciapontszáma',
            'Kampány célkitűzés (elérés, forgalom, lead gen, konverzió)',
            'Iparág — egészségügy és ingatlan drágább, mint szórakoztatás',
            'Időszak — ünnepeknél, Black Friday-nél akár 2-3× drágább',
            'Landing oldal minősége — jobb oldal = jobb konverziós arány = olcsóbb eredmény',
          ],
        },
        {
          type: 'h2',
          content: 'Mekkora büdzsével érdemes elkezdeni?',
        },
        {
          type: 'p',
          content: 'Ez a leggyakrabban feltett kérdés. A válasz az üzleti célodtól függ:',
        },
        {
          type: 'ul',
          items: [
            'Brand awareness (ismertség építés): 30–50 ezer Ft/hó elegendő',
            'Leadgenerálás (érdeklődők szerzése): minimum 80–150 ezer Ft/hó ajánlott',
            'Webshop konverziók: 150–300+ ezer Ft/hó',
            'Gyors, komoly növekedés: 300 ezer Ft/hó felett',
          ],
        },
        {
          type: 'callout',
          content: '💡 Valós példa: Bepretty Studio 235 érdeklődőt szerzett az első hónapban 150 ezer Ft büdzsével — ez kb. 640 Ft/érdeklődő volt. Ez az iparági átlagnál lényegesen jobb eredmény a precíz célzásnak köszönhetően.',
        },
        {
          type: 'h2',
          content: 'Hogyan csökkentsd a Facebook hirdetési költségeidet?',
        },
        {
          type: 'ul',
          items: [
            'A/B tesztelj folyamatosan — próbálj ki több képet, szöveget, CTA-t',
            'Szűkítsd a célközönséget a legértékesebb szegmensre (ne hirdessk mindenkinek)',
            'Optimalizáld a landing oldalt — egy jobb oldal drasztikusan csökkenti a konverziós költségeket',
            'Használj Lookalike közönségeket — a Facebook hasonló embereket keres a legjobb ügyfeleidhez',
            'Rendszeresen figyelj: állítsd le a rosszul teljesítő hirdetéseket, ne hagyd futni',
            'Remarketing kampányokkal érd el újra az érdeklődőket — ezek általában olcsóbbak',
          ],
        },
        {
          type: 'h2',
          content: 'Hirdetési büdzsé + kezelési díj: mivel számolj valójában?',
        },
        {
          type: 'p',
          content: 'A hirdetési büdzsén felül az ügynökség kezelési díjával is számolnod kell. Fontos: a hirdetési büdzséd közvetlenül a Facebooknak megy — az ügynökség csak a kampányok tervezéséért és kezeléséért számít fel díjat. A Nagy Levi Marketingnél átlátható árazással dolgozunk: nincsenek rejtett költségek, nincsenek hosszú szerződések. 30 napos garanciával.',
        },
        {
          type: 'cta',
          content: 'Szeretnéd tudni, pontosan mennyibe kerülne a te vállalkozásodnak? Kérj ingyenes konzultációt — megmutatjuk a várható büdzsét és az elérhető eredményeket.',
        },
      ],
      faqs: [
        {
          q: 'Mi az abszolút minimum büdzsé, amivel érdemes elkezdeni Facebook hirdetést?',
          a: 'Napi minimum 1 500–2 000 Ft hirdetési büdzsé (havi kb. 50 000 Ft) szükséges ahhoz, hogy a Facebook elegendő adatot gyűjtsön a kampány optimalizálásához. Ennél kevesebb esetén a tanulási fázis nem tud megfelelően lefutni.',
        },
        {
          q: 'Mikor látom az eredményeket a Facebook hirdetésekből?',
          a: 'Az első 1-2 hétben a Facebook tanulási fázisban van — ekkor gyűjt adatokat. Az optimális teljesítményt általában 3-4 hét után éri el a kampány. Mi 30 napos garanciával dolgozunk: ha nem látod a megbeszélt eredményeket, visszaadjuk a kezelési díjat.',
        },
        {
          q: 'Van különbség a Facebook és az Instagram hirdetések ára között?',
          a: 'Ugyanazon Meta Ads Manager rendszeren keresztül futnak, de az Instagram általában magasabb CPM-mel jár, cserébe magasabb engagement rátát hozhat. A legjobb eredményért mindkét felületen érdemes hirdetni és az adatok alapján optimalizálni.',
        },
        {
          q: 'Mennyibe kerül egy Facebook hirdetés kezelése ügynökségnél?',
          a: 'Magyarországon az ügynökségi kezelési díjak általában 50 000–200 000 Ft/hó között mozognak, a kampányok méretétől és összetettségétől függően. A Nagy Levi Marketingnél átlátható, rugalmas csomagokat kínálunk — érdeklődjél ingyenes konzultáción.',
        },
      ],
    },
    en: {
      title: 'How Much Do Facebook Ads Cost in Hungary? (2025 Guide)',
      metaTitle: 'Facebook Ads Cost Hungary 2025 | Nagy Levi Marketing Budapest',
      metaDescription: 'Exact prices, average CPC and CPM values in Hungary for 2025. How much budget do you need to start? Real data and examples from live campaigns.',
      keywords: ['facebook ads cost hungary', 'facebook advertising price', 'facebook ads budget', 'marketing budapest', 'facebook ads 2025'],
      intro: 'If you are planning to run Facebook ads, the first question is almost always: "How much will it cost?" In this guide, I will share exact numbers and real examples — not theory, but what we actually see running campaigns for clients across Hungary every day.',
      sections: [
        {
          type: 'h2',
          content: 'How does Facebook charge for ads?',
        },
        {
          type: 'p',
          content: 'Facebook uses an auction-based pricing system. You do not pay a fixed amount — the price depends on how many other advertisers are competing for the same audience, the quality of your ad, and your campaign objective. Two campaigns with identical budgets can deliver very different results depending on how they are built.',
        },
        {
          type: 'h2',
          content: 'Average Facebook advertising costs in Hungary (2025)',
        },
        {
          type: 'ul',
          items: [
            'CPC (cost per click): 0.08–0.32 EUR',
            'CPM (cost per 1,000 impressions): 0.80–2.20 EUR',
            'CPL (cost per lead, Lead Ads): 1.30–8.00 EUR',
            'Conversion (e.g. appointment booking): 2.20–13.50 EUR',
          ],
        },
        {
          type: 'callout',
          content: '⚠️ Important: these are industry averages. A beauty salon can achieve leads at 1.00 EUR, while real estate or medical sectors may be 3-5× higher. Costs are heavily influenced by targeting, ad quality, and competition.',
        },
        {
          type: 'h2',
          content: 'What factors affect Facebook ad costs most?',
        },
        {
          type: 'ul',
          items: [
            'Audience size and competition — narrower audiences cost more per person reached',
            'Ad quality and relevance score',
            'Campaign objective (reach, traffic, lead gen, conversions)',
            'Industry — healthcare and real estate are pricier than entertainment',
            'Season — costs can spike 2-3× during holidays and Black Friday',
            'Landing page quality — a better page means better conversion rates and lower cost per result',
          ],
        },
        {
          type: 'h2',
          content: 'How much budget do you need to start?',
        },
        {
          type: 'ul',
          items: [
            'Brand awareness: 130–270 EUR/month is sufficient',
            'Lead generation: minimum 215–400 EUR/month recommended',
            'E-commerce conversions: 400–800+ EUR/month',
            'Aggressive growth: 800+ EUR/month',
          ],
        },
        {
          type: 'callout',
          content: '💡 Real example: Bepretty Studio got 235 leads in the first month with ~400 EUR in ad spend — approximately 1.70 EUR per lead. This is well below industry average thanks to precise targeting.',
        },
        {
          type: 'h2',
          content: 'How to reduce your Facebook advertising costs',
        },
        {
          type: 'ul',
          items: [
            'Continuously A/B test — try multiple images, copy variations, and CTAs',
            'Narrow your audience to the highest-value segment',
            'Optimize your landing page — a better page drastically cuts cost per conversion',
            'Use Lookalike Audiences — Facebook finds people similar to your best customers',
            'Monitor regularly: pause underperforming ads before they drain your budget',
            'Leverage retargeting — reaching warm audiences is almost always cheaper',
          ],
        },
        {
          type: 'h2',
          content: 'Ad budget vs management fee: what to budget for',
        },
        {
          type: 'p',
          content: 'Beyond ad spend, you need to account for the agency management fee. Important: your ad budget goes directly to Facebook — the agency charges separately for campaign strategy and management. At Nagy Levi Marketing we operate with full pricing transparency: no hidden fees, no long contracts, and a 30-day money-back guarantee.',
        },
        {
          type: 'cta',
          content: 'Want to know exactly how much it would cost for your business? Get a free consultation — we\'ll show you the expected budget and realistic results.',
        },
      ],
      faqs: [
        {
          q: 'What is the absolute minimum budget to start Facebook advertising?',
          a: 'A daily minimum of ~4–5 EUR (roughly 130 EUR/month) is needed for Facebook to gather enough data to optimize the campaign. Below this, the learning phase cannot complete properly.',
        },
        {
          q: 'How quickly will I see results from Facebook ads?',
          a: 'The first 1-2 weeks are the learning phase — Facebook is gathering data. Optimal performance is typically reached after 3-4 weeks. We work with a 30-day guarantee: if you do not see the agreed results, we refund the management fee.',
        },
        {
          q: 'Is there a difference in cost between Facebook and Instagram ads?',
          a: 'Both run through the same Meta Ads Manager, but Instagram typically has a higher CPM, though often with higher engagement rates. For best results, running on both placements and optimizing based on data is recommended.',
        },
        {
          q: 'How much does agency management of Facebook ads cost in Hungary?',
          a: 'Agency management fees in Hungary typically range from 130–540 EUR/month depending on campaign size and complexity. At Nagy Levi Marketing, we offer transparent, flexible packages — ask about pricing in a free consultation.',
        },
      ],
    },
  },

  // ── Blog 3: 7 Google Ads mistakes ───────────────────────────────────────
  {
    slug: '7-google-ads-hiba',
    datePublished: '2025-05-24',
    dateModified: '2025-05-24',
    coverImage: 'https://res.cloudinary.com/dduros3xw/image/upload/v1771582094/Route_11_Results_fuormi.png',
    readTime: 7,
    category: 'Google Ads',
    hu: {
      title: '7 Google Ads Hiba, Ami Feleslegesen Emészti a Büdzsét (és Hogyan Kerüld El)',
      metaTitle: '7 Google Ads Hiba 2025 | Nagy Levi Marketing Budapest',
      metaDescription: 'A 7 leggyakoribb Google Ads hiba, amit magyar kisvállalkozók elkövetnek — és a konkrét megoldás minden egyes esethez. Valós kampánytapasztalatok alapján.',
      keywords: ['google ads hiba', 'google ads optimalizálás', 'google ads tippek', 'google hirdetés budapest', 'ppc hibák'],
      intro: 'Az ügyfeleink többsége, mielőtt hozzám kerül, már futtatott Google Ads kampányokat — de az eredmények nem feleltek meg a várakozásoknak. A probléma általában nem a platform, hanem néhány jól azonosítható, javítható hiba. Ebben a cikkben összegyűjtöttem a 7 leggyakoribb hibát, amelyeket valódi kampányokban látunk rendszeresen.',
      sections: [
        {
          type: 'h2',
          content: '1. Hiba: Túl széles egyezési típusok használata',
        },
        {
          type: 'p',
          content: 'Ha "fogorvos" kulcsszóval broad match-ben hirdetsz, megjelenhetsz arra is, hogy "fogorvos tanulmányok", "fogorvos fizetés" vagy "fogorvos vicc". Ezek az emberek nem fognak ügyfeled lenni. Megoldás: használj pontos egyezést (exact match) és kifejezés egyezést (phrase match), és rendszeresen ellenőrizd a keresési kifejezések jelentését.',
        },
        {
          type: 'h2',
          content: '2. Hiba: Negatív kulcsszavak teljes elhanyagolása',
        },
        {
          type: 'p',
          content: 'A negatív kulcsszavak megakadályozzák, hogy irreleváns keresések esetén megjelenjen a hirdetésed — és fizess értük. Ha ügyvéd vagy, érdemes kizárni: "ingyenes", "önképviselet", "jogi tanácsadás ingyen". Egy jól összeállított negatív listával 20-30%-kal csökkentheted a felesleges kiadásokat.',
        },
        {
          type: 'h2',
          content: '3. Hiba: A landing oldal nem egyezik a hirdetéssel',
        },
        {
          type: 'p',
          content: 'Ha a hirdetés "fogimplantátum Budapest 2 nap alatt" témájú, de az oldalad általános fogászati kezdőoldal, a felhasználó elvész — és a Google Minőségi Pontszámod is csökken. Alacsonyabb pontszám = drágább kattintások. Minden hirdetéscsoporthoz dedikált, célzott landing page-t érdemes készíteni.',
        },
        {
          type: 'callout',
          content: '💡 Valós eredmény: A Denti Implant Center esetében az új, dedikált landing oldal bevezetése után a konverziós arány megduplázódott, miközben a kattintási költség csökkent.',
        },
        {
          type: 'h2',
          content: '4. Hiba: Nincs konverziókövetés',
        },
        {
          type: 'p',
          content: 'Ha nem méred, hogy ki töltött ki egy formot, ki hívott fel, vagy ki foglalt időpontot — nem tudhatod, melyik kulcsszó és hirdetés hozza valójában az ügyfeleket. Konverziókövetés nélkül vakrepülésben vagy. A Google Ads konverziókövetés beállítása ingyenes és elengedhetetlen.',
        },
        {
          type: 'h2',
          content: '5. Hiba: Hirdetési menetrend figyelmen kívül hagyása',
        },
        {
          type: 'p',
          content: 'A kampányok alapból 24/7 futnak. Ha a célközönséged hétköznap délelőtt 9 és este 7 között keres, akkor az éjszakai és hétvégi megjelenések csak büdzsét égetnek. Elemezd az adataid, és állítsd be az időzítést: melyik napon és napszakban konvertál a legjobban a kampányod?',
        },
        {
          type: 'h2',
          content: '6. Hiba: Csak egy hirdetési variánst futtatnak',
        },
        {
          type: 'p',
          content: 'Minden hirdetéscsoportban legalább 2-3 hirdetési variánst érdemes futtatni egyszerre. Különböző headline-ok, description-ök, CTA-k — a Google Ads maga optimalizálja, melyiket mutassa többet. Ha csak egy hirdetésed van, sohasem tudod meg, mi működik jobban.',
        },
        {
          type: 'h2',
          content: '7. Hiba: A kampányt beállítják és elfelejtik',
        },
        {
          type: 'p',
          content: 'A Google Ads nem egy "set and forget" eszköz. A versenytársak változtatnak a licitjeiken, új kulcsszavak jelennek meg, a szezonalitás változik. Hetente legalább egyszer érdemes ellenőrizni a keresési kifejezések jelentését, a hirdetések teljesítményét és a büdzsé felhasználást.',
        },
        {
          type: 'callout',
          content: '💡 Valós eredmény: A Route 11 Autósiskola esetében ezeket a hibákat korrigálva az alulteljesítő iskola 3 hónap alatt a három iskola közül a legjobban teljesítővé vált — anélkül, hogy a büdzsét növeltük volna.',
        },
        {
          type: 'cta',
          content: 'Fut már Google Ads kampányod, de nem hozza a várt eredményt? Kérj ingyenes kampányauditot — megvizsgáljuk és konkrét javaslatokat adunk, kötelezettség nélkül.',
        },
      ],
      faqs: [
        {
          q: 'Hogyan tudom ellenőrizni, hogy jól teljesít-e a Google Ads kampányom?',
          a: 'A legfontosabb mutatók: CTR (click-through rate) — ideálisan 5%+ keresési kampányoknál; Minőségi Pontszám (Quality Score) — 7+ az optimális; konverziós ráta; és költség/konverzió. Ha az utóbbi magasabb, mint az ügyfél életértéke, a kampány veszteséges.',
        },
        {
          q: 'Mennyi idő szükséges a Google Ads optimalizálásához hetente?',
          a: 'Alapszintű kampányokhoz heti 1-2 óra elegendő. Komplexebb, több hirdetéscsoportos kampányoknál 4-6 óra is szükséges lehet. Ez az egyik oka, amiért megéri ügynökséggel dolgozni — mi ezt proaktívan, folyamatosan végezzük.',
        },
        {
          q: 'Mikor érdemes Google Ads ügynökségre bízni a kampányokat?',
          a: 'Ha a havi büdzsé meghaladja a 100 000 Ft-ot, és nincs dedikált, tapasztalt PPC specialistád, megéri ügynökséget bevonni. A kezelési díj általában hamar megtérül a jobb optimalizálás révén.',
        },
        {
          q: 'Mennyibe kerül egy Google Ads audit?',
          a: 'A Nagy Levi Marketingnél az első audit ingyenes. Megnézzük a kampányodat, azonosítjuk a problémákat, és konkrét javaslatokat adunk — teljesen ingyen, kötelezettség nélkül.',
        },
      ],
    },
    en: {
      title: '7 Google Ads Mistakes That Are Wasting Your Budget (And How to Fix Them)',
      metaTitle: '7 Google Ads Mistakes 2025 | Nagy Levi Marketing Budapest',
      metaDescription: 'The 7 most common Google Ads mistakes small businesses make — and the exact fix for each one. Based on real campaign experience.',
      keywords: ['google ads mistakes', 'google ads optimization', 'google ads tips', 'google advertising budapest', 'ppc mistakes'],
      intro: 'Most clients who come to us have already been running Google Ads campaigns — but results did not meet expectations. The problem is rarely the platform itself; it is almost always a handful of identifiable, fixable mistakes. Here are the 7 most common ones we see in real campaigns.',
      sections: [
        {
          type: 'h2',
          content: 'Mistake #1: Using broad match keywords without control',
        },
        {
          type: 'p',
          content: 'If you bid on "dentist" in broad match, you may appear for "dentist salary", "dentist jokes", or "become a dentist". None of those people will become your client. Fix: use exact match and phrase match, and regularly review your search terms report to catch irrelevant traffic.',
        },
        {
          type: 'h2',
          content: 'Mistake #2: Ignoring negative keywords entirely',
        },
        {
          type: 'p',
          content: 'Negative keywords prevent your ad from showing for irrelevant searches — and costing you money. If you are a lawyer, exclude: "free", "self-representation", "free legal advice". A well-built negative keyword list can cut wasted spend by 20-30% immediately.',
        },
        {
          type: 'h2',
          content: 'Mistake #3: Sending traffic to a generic homepage',
        },
        {
          type: 'p',
          content: 'If your ad says "Dental implants Budapest in 2 days" but the landing page is a generic dental homepage, visitors leave immediately — and your Quality Score drops. A lower Quality Score means higher cost per click. Every ad group deserves a dedicated, targeted landing page.',
        },
        {
          type: 'callout',
          content: '💡 Real result: At Denti Implant Center, introducing a dedicated landing page doubled the conversion rate while reducing cost per click.',
        },
        {
          type: 'h2',
          content: 'Mistake #4: No conversion tracking',
        },
        {
          type: 'p',
          content: 'If you do not track who fills out a form, calls you, or books an appointment — you have no idea which keywords and ads are actually generating clients. Without conversion tracking, you are flying blind. Setting up Google Ads conversion tracking is free and non-negotiable.',
        },
        {
          type: 'h2',
          content: 'Mistake #5: Not using ad scheduling',
        },
        {
          type: 'p',
          content: 'By default, campaigns run 24/7. If your audience searches primarily on weekdays between 9am and 7pm, night-time and weekend impressions are burning budget with no return. Analyze your data and set a schedule based on when your campaign actually converts.',
        },
        {
          type: 'h2',
          content: 'Mistake #6: Running only one ad variant',
        },
        {
          type: 'p',
          content: 'Run at least 2-3 ad variations per ad group simultaneously — different headlines, descriptions, and CTAs. Google Ads will automatically show the better-performing ones more often. With a single ad, you never learn what works better.',
        },
        {
          type: 'h2',
          content: 'Mistake #7: Setting it and forgetting it',
        },
        {
          type: 'p',
          content: 'Google Ads is not a "set and forget" tool. Competitors adjust their bids, new search terms emerge, and seasonality changes. Check your search terms report, ad performance, and budget utilization at least once per week.',
        },
        {
          type: 'callout',
          content: '💡 Real result: After fixing these mistakes for Route 11 Driving School, the underperforming location became the best-performing of their three schools — without increasing the budget.',
        },
        {
          type: 'cta',
          content: 'Already running Google Ads but not getting expected results? Request a free campaign audit — we\'ll identify the issues and give you specific recommendations, no strings attached.',
        },
      ],
      faqs: [
        {
          q: 'How do I know if my Google Ads campaign is performing well?',
          a: 'Key metrics to watch: CTR (click-through rate) — ideally 5%+ for search campaigns; Quality Score — 7+ is optimal; conversion rate; and cost per conversion. If cost per conversion is higher than your customer lifetime value, the campaign is losing money.',
        },
        {
          q: 'How much time does Google Ads optimization require per week?',
          a: 'Basic campaigns need 1-2 hours per week. More complex, multi-ad-group campaigns can require 4-6 hours. This is one reason working with an agency pays off — we handle this proactively and continuously.',
        },
        {
          q: 'When should I hire an agency to manage Google Ads?',
          a: 'If your monthly budget exceeds 270 EUR and you do not have a dedicated, experienced PPC specialist, it is worth bringing in an agency. The management fee typically pays for itself quickly through better optimization.',
        },
        {
          q: 'How much does a Google Ads audit cost?',
          a: 'At Nagy Levi Marketing, the first audit is completely free. We review your campaign, identify the problems, and give you specific recommendations — with no obligation.',
        },
      ],
    },
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find(b => b.slug === slug);
}

export function getBlogsByCategory(category: Blog['category']): Blog[] {
  return blogs.filter(b => b.category === category);
}
