import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Props { language: 'hu' | 'en'; }

const BASE_URL = 'https://levinagymarketing.com';

const copy = {
  hu: {
    metaTitle: 'AI Automatizálás Vállalkozásoknak Budapest | Nagy Levi Marketing',
    metaDesc:  'AI rendszerek, amelyek elvégzik az ismétlődő munkát. Több lead, kevesebb elveszett ügyfél — automatikusan. Ingyenes hívás.',
    back: '← Főoldal',
    badge: '🤖 AI Automatizálás',
    hero: {
      title: 'A vállalkozásod. Dolgozik.',
      titleHighlight: 'Akkor is, ha te nem.',
      sub: 'AI rendszereket építünk, amelyek elvégzik az ismétlődő munkát — hogy ne veszíts el több érdeklődőt, ne pazarold az idődet, és növekedj anélkül, hogy kiégj.',
      cta: 'Ingyenes stratégiai hívás',
    },
    problem: {
      title: 'Nem azért indítottál vállalkozást, hogy a napod nagy részét ugyanazoknak a kérdéseknek a megválaszolásával töltsd.',
      body: [
        'Vagy azért, hogy hidegre ment érdeklődők után szaladgálj, mert elfoglalt voltál, és nem értél rá visszahívni.',
        'Vagy hogy potenciális ügyfeleid elhagyják a weboldaladat, mert senki nem reagált elég gyorsan.',
        'Mégis pontosan ez történik.',
      ],
      bullets: [
        'Minden megválaszolatlan üzenet egy elvesztett ügyfél.',
        'Minden lassú visszajelzés azt jelenti, hogy valaki a versenytársadat választja.',
        'Minden óra, amit a csapatod ismétlődő feladatokra pazarol, egy óra, amit nem a növekedésre fordít.',
      ],
      closing: 'A legrosszabb az egészben? Ennek nagy része csendben, a háttérben zajlik — és általában nem is látod, mennyibe kerül.',
    },
    solution: {
      title: 'Olyan rendszereket építünk, amelyek mindezzel automatikusan foglalkoznak.',
      body: [
        'A weboldalad az óra minden szakában reagál az érdeklődőkre és minősíti a leadeket — még éjjel 2-kor is, amikor alszol.',
        'Ha valaki érdeklődik, azonnal és következetesen kap visszajelzést — anélkül, hogy neked erre gondolnod kellene.',
        'A telefonod kezelve van, a beérkező üzeneteid rendezve vannak, és a csapatod által naponta elvégzett ismétlődő feladatokat egy rendszer végzi el, amely soha nem felejt, soha nem fárad el, és soha nem vesz ki betegszabadságot.',
        'Nem veszel fel több embert. Nem dolgozol több órát. Csak több dolgot intézel el.',
      ],
    },
    steps: {
      title: 'Hogyan működik',
      items: [
        { n: '01', title: 'Megkeressük, ahol időt és pénzt veszítesz', body: 'Megnézzük, hogyan kezeli jelenleg a vállalkozásod az érdeklődőket, az utókövetéseket és az ügyfélkommunikációt. Megtaláljuk a réseket — azokat a pillanatokat, ahol a dolgok elvesznek.' },
        { n: '02', title: 'Egy rendszert építünk a te vállalkozásodhoz', body: 'Nem egy általános eszköz. Egy egyedi megoldás, amely illeszkedik ahhoz, ahogy te dolgozol, és amit az ügyfeleid elvárnak.' },
        { n: '03', title: 'Fut a háttérben. Te látod az eredményeket.', body: 'Amint él, csendesen dolgozik a háttérben. Csak azt veszed észre, hogy kevesebb érdeklődő hűl le, kevesebb feladat halmozódik fel, és a csapatodnak több ideje van a fontos munkára.' },
      ],
    },
    finalCTA: {
      title: 'Szeretnéd látni, hol változtathatna az automatizálás a te vállalkozásodban?',
      body: 'Foglalj egy ingyenes hívást. Megnézzük a jelenlegi folyamataidat, és megmutatjuk pontosan, hol hozna egy ilyen rendszer változást — és mit érne ez számodra.',
      cta: 'Foglalj ingyenes hívást',
      sub: 'Semmi zsargon. Semmi bonyolult értékesítési prezentáció. Csak egy egyenes beszélgetés.',
    },
  },
  en: {
    metaTitle: 'AI Automation — Nagy Levi Marketing',
    metaDesc:  'AI systems that handle the repetitive work — stop losing leads, save time, and grow without burning out.',
    back: '← Home',
    badge: '🤖 AI Automation',
    hero: {
      title: 'Your Business. Working.',
      titleHighlight: 'Even When You\'re Not.',
      sub: 'We build AI systems that handle the repetitive work — so you stop losing leads, stop wasting time, and start growing without burning out.',
      cta: 'Get a Free Strategy Call',
    },
    problem: {
      title: "You didn't start a business to spend your day answering the same questions over and over.",
      body: [
        "Or chasing leads that went cold because you were too busy to follow up.",
        "Or watching potential customers leave your website because nobody got back to them fast enough.",
        "But that's exactly what's happening.",
      ],
      bullets: [
        "Every unanswered message is a lost customer.",
        "Every slow follow-up is someone choosing your competitor.",
        "Every hour your team spends on repetitive tasks is an hour not spent on work that actually grows the business.",
      ],
      closing: "And the worst part? Most of this is happening quietly, in the background — and you don't even see how much it's costing you.",
    },
    solution: {
      title: 'We build systems that handle all of this automatically.',
      body: [
        "Your website responds to visitor questions and qualifies leads around the clock — including at 2am when you're asleep.",
        "When someone shows interest, they get followed up with immediately and consistently — without you having to think about it.",
        "Your phone gets handled, your inbox gets managed, and the repetitive tasks your team does every day get done by a system that never forgets, never gets tired, and never calls in sick.",
        "You don't hire more people. You don't work more hours. You just get more done.",
      ],
    },
    steps: {
      title: 'How it works',
      items: [
        { n: '01', title: "We find where you're losing time and money", body: "We look at how your business currently handles leads, follow-ups, and customer communication. We spot the gaps — the moments where things fall through the cracks." },
        { n: '02', title: 'We build a system made for your business', body: "Not a generic tool. A custom setup that fits how you work and what your customers expect." },
        { n: '03', title: 'It runs in the background. You see the results.', body: "Once it's live, it works quietly behind the scenes. You just notice that fewer leads go cold, fewer tasks pile up, and your team has more time for the work that matters." },
      ],
    },
    finalCTA: {
      title: 'Want to see where automation could change things in your business?',
      body: "Book a free call. We'll take a look at your current setup and show you specifically where a system like this would make a difference — and what it would be worth to you.",
      cta: 'Book Your Free Call',
      sub: 'No jargon. No complicated pitch. Just a straight conversation.',
    },
  },
};

const AIAutomationPage: React.FC<Props> = ({ language }) => {
  const navigate = useNavigate();
  const t = copy[language];
  const contactUrl = language === 'en' ? '/en#contact' : '/#contact';
  const homeUrl    = language === 'en' ? '/en' : '/';
  const altUrl     = language === 'en' ? '/ai-automatizalas' : '/en/ai-automation';

  useEffect(() => {
    document.title = t.metaTitle;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = t.metaDesc;

    const schema = {
      '@context': 'https://schema.org', '@type': 'Service',
      name: language === 'hu' ? 'AI Automatizálás' : 'AI Automation',
      provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Nagy Levi Marketing' },
      url: `${BASE_URL}${language === 'en' ? '/en/ai-automation' : '/ai-automatizalas'}`,
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
        <div className="space-y-5 mb-8">
          {t.problem.body.map((p, i) => <p key={i} className="text-slate-300 leading-relaxed text-lg">{p}</p>)}
        </div>
        <div className="space-y-3 mb-8 pl-4 border-l-2 border-violet-500/30">
          {t.problem.bullets.map((b, i) => (
            <p key={i} className="text-slate-200 font-medium text-lg">{b}</p>
          ))}
        </div>
        <p className="text-slate-400 leading-relaxed text-lg italic">{t.problem.closing}</p>
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

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.finalCTA.title}</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">{t.finalCTA.sub}</p>
          <a href={contactUrl} className="group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02] mb-4">
            {t.finalCTA.cta}<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-slate-500 text-sm mt-4">{t.finalCTA.body}</p>
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

export default AIAutomationPage;
