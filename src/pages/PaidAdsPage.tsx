import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';

interface Props { language: 'hu' | 'en'; }

const BASE_URL = 'https://levinagymarketing.com';

const copy = {
  hu: {
    metaTitle: 'Facebook & Google Hirdetések Budapest | Nagy Levi Marketing',
    metaDesc:  'Meta hirdetési kampányok, amelyek fizető ügyfeleket hoznak. Szépségszalonok, fogorvosok, autósiskolák. 30 napos garancia. Ingyenes stratégiai hívás.',
    back: '← Főoldal',
    badge: '📣 Fizetett Hirdetések',
    hero: {
      title: 'Több ügyfél. Több bevétel.',
      titleHighlight: 'Minden hónapban.',
      sub: 'Meta hirdetéseket futtatunk, amelyek fizető ügyfeleket hoznak a vállalkozásodba — nem csak lájkokat és megtekintéseket, amelyek sehova sem vezetnek.',
      cta: 'Ingyenes stratégiai hívás',
    },
    problem: {
      title: 'Valószínűleg már próbáltál hirdetéseket futtatni.',
      body: [
        'Talán boostoltál néhány posztot. Talán csinálta már valaki neked. Akárhogy is, az eredmény csalódást keltő volt, és most nem vagy biztos benne, hogy a hirdetések egyáltalán működnek a te típusú vállalkozásodban.',
        'Az igazság az: a hirdetések működnek. A mögöttük lévő stratégia az esetek nagy részében nem.',
        'A legtöbb vállalkozás olyan hirdetéseket futtat, amelyek rossz embereket érnek el. Az üzenet nem talál célba. A büdzsét elaprózzák olyan kattintások, amelyek soha nem válnak valódi ügyféllé.',
        'Közben valaki a környékeden a megfelelő hirdetéssel, a megfelelő embereket éri el — és azokat az ügyfeleket szerzi meg, akik elvileg hozzád jöhetnének.',
      ],
    },
    solution: {
      title: 'Pontosan ezt javítjuk ki.',
      body: [
        'Meta hirdetési kampányokat építünk, amelyek a vállalkozásodat azok elé teszik, akik a legnagyobb valószínűséggel vásárolnak tőled. Nem véletlenszerű görgetők. Nem versenytársak. A valódi célügyfeleid.',
        'Majd gondoskodunk arról, hogy a hirdetés a megfelelő dolgot mondja, a megfelelő időben — hogy cselekedjenek.',
        'Nem kell értened, hogyan működik. Csak az eredményeket kell látnod.',
      ],
    },
    steps: {
      title: 'Hogyan működik',
      items: [
        { n: '01', title: 'Megismerjük a vállalkozásodat', body: 'Egy hívás. Lényegre törően. A megfelelő kérdéseket tesszük fel, hogy megértsük, kik a legjobb ügyfeleid, és mi tesz téged az egyértelmű választássá.' },
        { n: '02', title: 'Megépítjük és elindítjuk a kampányodat', body: 'Mindent mi intézünk — a célzást, a kreatívokat, a szövegeket. Te jóváhagyod, mi elindítjuk.' },
        { n: '03', title: 'Jönnek a megkeresések. Mi folyamatosan javítjuk.', body: 'Amint él a kampány, nyomon követjük, mi működik, és levágjuk, ami nem. Az eredmények idővel összeadódnak.' },
      ],
    },
    results: {
      title: 'Eredmények',
      body: 'Ne csak a szavainkat nézd — tekintsd meg az ügyfeleink eredményeit ezen az oldalon. Ezek valódi vállalkozások, valódi iparágakban, amelyek a kiszámíthatatlan ügyfélszerzésből eljutottak a megbízható, havi szintű növekedéshez.',
    },
    guarantee: {
      title: 'Garancia',
      body: 'Annyira biztosak vagyunk abban, amit csinálunk, hogy egyszerű garanciát kínálunk:',
      highlight: 'Felülmúljuk a jelenlegi hirdetési eredményeidet — vagy nem fizetsz nekünk semmit.',
      sub: 'Más marketingcég ezt nem vállalja. Mi igen, mert tudjuk, hogy működik.',
    },
    finalCTA: {
      title: 'Szeretnéd tudni, mit tudnánk tenni a vállalkozásodért?',
      body: 'Foglalj egy ingyenes stratégiai hívást. Semmi nyomás, semmi erőltetett értékesítés — csak egy őszinte áttekintés arról, hol tartasz most, és mi lehetséges.',
      cta: 'Foglalj ingyenes hívást',
      sub: 'Semmibe sem kerül, és kevesebb mint 30 percet vesz igénybe.',
    },
  },
  en: {
    metaTitle: 'Paid Ads — Nagy Levi Marketing',
    metaDesc:  'Meta ad campaigns that bring paying customers to your business. Guaranteed results.',
    back: '← Home',
    badge: '📣 Paid Ads',
    hero: {
      title: 'More Clients. More Revenue.',
      titleHighlight: 'Every Single Month.',
      sub: 'We run Meta ads that bring paying customers to your business — not just likes and views that go nowhere.',
      cta: 'Get a Free Strategy Call',
    },
    problem: {
      title: "You've probably tried ads before.",
      body: [
        "Maybe you boosted a few posts. Maybe you handed it off to someone. Either way, the results were disappointing — and you're not sure if ads even work for your type of business.",
        "Here's the truth: ads work. The strategy behind most of them doesn't.",
        "Most businesses run ads that reach the wrong people. The message doesn't land. The budget gets eaten up by clicks that never turn into customers.",
        "Meanwhile, someone in your area is running the right ad, reaching the right people, and getting the customers that should have been yours.",
      ],
    },
    solution: {
      title: "That's exactly what we fix.",
      body: [
        "We build Meta ad campaigns that put your business in front of the people who are most likely to buy from you. Not random scrollers. Not competitors. Your actual target customers.",
        "Then we make sure the ad says the right thing, at the right time, so they take action.",
        "You don't have to understand how any of it works. You just have to see the results.",
      ],
    },
    steps: {
      title: 'How it works',
      items: [
        { n: '01', title: 'We learn your business', body: 'One call. No fluff. We ask the right questions to understand who your best customers are and what makes you the obvious choice.' },
        { n: '02', title: 'We build and launch your campaign', body: 'We handle everything — the targeting, the creative, the copy. You approve it, we launch it.' },
        { n: '03', title: 'Leads come in. We keep improving.', body: "Once it's live, we track what's working and cut what isn't. The results compound over time." },
      ],
    },
    results: {
      title: 'Results',
      body: "Don't take our word for it — check the results from our clients on this page. These are real businesses, in real industries, that went from inconsistent lead flow to a steady stream of paying customers.",
    },
    guarantee: {
      title: 'Guarantee',
      body: "We're so confident in what we do that we offer a simple guarantee:",
      highlight: "We beat your current ad results — or you don't pay us anything.",
      sub: "No other marketing company offers this. We do, because we know it works.",
    },
    finalCTA: {
      title: 'Ready to find out what we could do for your business?',
      body: 'Book a free strategy call. No pressure, no hard sell — just an honest look at where you are and what\'s possible.',
      cta: 'Book Your Free Call',
      sub: "It won't cost you anything and takes less than 30 minutes.",
    },
  },
};

const PaidAdsPage: React.FC<Props> = ({ language }) => {
  const navigate = useNavigate();
  const t = copy[language];
  const contactUrl = language === 'en' ? '/en#contact' : '/#contact';
  const homeUrl    = language === 'en' ? '/en' : '/';
  const altUrl     = language === 'en' ? '/fizetett-hirdetesek' : '/en/paid-ads';

  useEffect(() => {
    document.title = t.metaTitle;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = t.metaDesc;

    const schema = {
      '@context': 'https://schema.org', '@type': 'Service',
      name: language === 'hu' ? 'Meta Hirdetések' : 'Meta Ads Management',
      provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Nagy Levi Marketing' },
      url: `${BASE_URL}${language === 'en' ? '/en/paid-ads' : '/fizetett-hirdetesek'}`,
      description: t.metaDesc,
    };
    let s = document.querySelector<HTMLScriptElement>('#service-schema');
    if (!s) { s = document.createElement('script'); s.id = 'service-schema'; s.type = 'application/ld+json'; document.head.appendChild(s); }
    s.textContent = JSON.stringify(schema);
  }, [language]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Nav */}
      <header className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => navigate(homeUrl)} className="text-xl font-bold text-white hover:text-violet-400 transition-colors">
              Nagy Levi Marketing
            </button>
            <div className="flex items-center gap-6">
              <button onClick={() => navigate(homeUrl)} className="text-slate-300 hover:text-white transition-colors text-sm">{t.back}</button>
              <button onClick={() => navigate(altUrl)} className="text-slate-300 hover:text-white transition-colors text-sm">
                {language === 'hu' ? '🇺🇸 English' : '🇭🇺 Magyar'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8">
          {t.badge}
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white">{t.hero.title}</h1>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400">{t.hero.titleHighlight}</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">{t.hero.sub}</p>
        <a href={contactUrl} className="group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02]">
          {t.hero.cta}<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

      {/* Problem */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{t.problem.title}</h2>
        <div className="space-y-5">
          {t.problem.body.map((p, i) => <p key={i} className="text-slate-300 leading-relaxed text-lg">{p}</p>)}
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="border-l-4 border-violet-500 pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{t.solution.title}</h2>
          <div className="space-y-5">
            {t.solution.body.map((p, i) => <p key={i} className="text-slate-300 leading-relaxed text-lg">{p}</p>)}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">{t.steps.title}</h2>
        <div className="space-y-10">
          {t.steps.items.map((step) => (
            <div key={step.n} className="flex gap-6">
              <span className="text-5xl font-black text-violet-500/20 leading-none select-none flex-shrink-0 w-14">{step.n}</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t.results.title}</h2>
        <p className="text-slate-300 leading-relaxed text-lg">{t.results.body}</p>
      </section>

      {/* Guarantee */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-violet-500/5 border border-violet-500/20 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-violet-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">{t.guarantee.title}</h2>
          </div>
          <p className="text-slate-400 mb-4 leading-relaxed">{t.guarantee.body}</p>
          <p className="text-xl font-bold text-white mb-4">"{t.guarantee.highlight}"</p>
          <p className="text-slate-400 leading-relaxed">{t.guarantee.sub}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.finalCTA.title}</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">{t.finalCTA.body}</p>
          <a href={contactUrl} className="group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02] mb-4">
            {t.finalCTA.cta}<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-slate-500 text-sm mt-4">{t.finalCTA.sub}</p>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-lg font-bold text-white mb-2">Nagy Levi <span className="text-violet-400">Marketing</span></div>
                <p className="text-slate-500 text-sm mb-3">Több ügyfél. Több bevétel. Garantáltan.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Szolgáltatások</h4>
                <ul className="space-y-2">
                  <li><a href="/fizetett-hirdetesek" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Fizetett Hirdetések</a></li>
                  <li><a href="/ai-automatizalas" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">AI Automatizálás</a></li>
                  <li><a href="/rolunk" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Rólunk</a></li>
                  <li><a href="/blog" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Iparágak</h4>
                <ul className="space-y-2">
                  <li><a href="/szepsegszalon-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Szépségszalon Marketing</a></li>
                  <li><a href="/fogorvos-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Fogorvos Marketing</a></li>
                  <li><a href="/autoskola-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Autósiskola Marketing</a></li>
<li><a href="/webaruhaz-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Webáruház Marketing</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-6 text-center">
              <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Nagy Levi Marketing. Minden jog fenntartva.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaidAdsPage;
