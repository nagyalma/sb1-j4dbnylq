import React, { useEffect } from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import PageFooter from '../../components/PageFooter';

const BASE_URL = 'https://levinagymarketing.com';

const WebaruhazPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Webáruház Marketing Budapest | Nagy Levi Marketing';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Meta + Google Shopping kampányok + remarketing webáruházaknak. Több eladás, jobb ROAS, alacsonyabb kosárelhagyás. 30 napos garancia. Ingyenes hívás.';

    const service = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Webáruház Marketing',
      provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Nagy Levi Marketing' },
      url: `${BASE_URL}/webaruhaz-marketing`,
      description: 'Meta + Google Shopping kampányok + remarketing rendszerek webáruházaknak — amelyek profitábilis növekedést hoznak.',
      areaServed: { '@type': 'Country', name: 'Hungary' },
      serviceType: 'E-commerce Advertising',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Mennyi kerül a webáruház marketing Magyarországon?', acceptedAnswer: { '@type': 'Answer', text: 'A webáruházak számára futtatott kampányok kezelési díja általában havi 80 000–250 000 Ft, az árbevételtől és a kampány terjedelmétől függően. Meta + Google Shopping + remarketing csomagokkal dolgozunk.' } },
        { '@type': 'Question', name: 'Hogyan lehet javítani a ROAS-t (hirdetési megtérülést)?', acceptedAnswer: { '@type': 'Answer', text: 'Pontosabb célzással, jobb kreatívokkal és remarketing rendszerekkel. A kosárelhagyókat automatikusan visszahívjuk, a legjobb vásárlókat lookalike célközönségekkel szorozzuk meg.' } },
        { '@type': 'Question', name: 'Mi a különbség a Meta és a Google Shopping között webáruháznál?', acceptedAnswer: { '@type': 'Answer', text: 'A Google Shopping azokat éri el, akik aktívan keresnek egy terméket. A Meta a tudatosság előtti fázisban éri el az ideális vásárlókat. A legjobb eredményt a kettő kombinációja hozza.' } },
        { '@type': 'Question', name: 'Hogyan csökkenthető a kosárelhagyás?', acceptedAnswer: { '@type': 'Answer', text: 'Dinamikus remarketing hirdetésekkel és automatizált email/SMS szekvenciákkal. A kosárelhagyók 30–40%-a visszahozható megfelelő utókövetéssel.' } },
      ],
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Főoldal', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Fizetett Hirdetések', item: `${BASE_URL}/fizetett-hirdetesek` },
        { '@type': 'ListItem', position: 3, name: 'Webáruház Marketing', item: `${BASE_URL}/webaruhaz-marketing` },
      ],
    };

    ['#web-service', '#web-faq', '#web-breadcrumb'].forEach(id => document.querySelector(id)?.remove());
    const s1 = document.createElement('script'); s1.id = 'web-service'; s1.type = 'application/ld+json'; s1.textContent = JSON.stringify(service); document.head.appendChild(s1);
    const s2 = document.createElement('script'); s2.id = 'web-faq'; s2.type = 'application/ld+json'; s2.textContent = JSON.stringify(faqSchema); document.head.appendChild(s2);
    const s3 = document.createElement('script'); s3.id = 'web-breadcrumb'; s3.type = 'application/ld+json'; s3.textContent = JSON.stringify(breadcrumb); document.head.appendChild(s3);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold text-white hover:text-violet-400 transition-colors">
              Nagy Levi <span className="text-violet-400">Marketing</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-slate-300 hover:text-white transition-colors text-sm">← Főoldal</a>
              <a href="/#contact" className="px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-lg transition-all">Ingyenes hívás</a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pt-6">
        <nav className="text-sm text-slate-500">
          <a href="/" className="hover:text-violet-400 transition-colors">Főoldal</a>
          <span className="mx-2">›</span>
          <a href="/fizetett-hirdetesek" className="hover:text-violet-400 transition-colors">Fizetett Hirdetések</a>
          <span className="mx-2">›</span>
          <span className="text-slate-300">Webáruház Marketing</span>
        </nav>
      </div>

      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8">
          🛒 Webáruház Marketing
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white">Több eladás.</h1>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400">Jobb ROAS.</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Meta + Google Shopping kampányok + remarketing rendszerek webáruházaknak — amelyek profitábilis növekedést hoznak.
        </p>
        <a href="/#contact" className="group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]">
          Ingyenes stratégiai hívás<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">A webáruház marketing csapdái</h2>
        <div className="space-y-5">
          <p className="text-slate-300 leading-relaxed text-lg">A webáruházak rengeteg pénzt öntenek hirdetésekbe, de a ROAS lassan romlik, a kosárelhagyás magas, a visszatérő vásárlók száma alacsony. Ismerős?</p>
          <p className="text-slate-300 leading-relaxed text-lg">A legtöbb webáruház hibája: csak a megszerzésre koncentrál, miközben az elveszett vásárlók és az alacsony visszatérési arány lassan felemészti a profitot.</p>
          <p className="text-slate-300 leading-relaxed text-lg">Egy átlagos webáruháznál a látogatók 70–80%-a elhagyja a kosarat vásárlás nélkül. Ez rengeteg elveszett bevétel — amelynek nagy részét vissza lehet hozni.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="border-l-4 border-violet-500 pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">A teljes e-commerce marketing rendszer</h2>
          <div className="space-y-5">
            <p className="text-slate-300 leading-relaxed text-lg">Meta hirdetések az ideális vásárlók megszerzéséhez. Google Shopping az aktívan kereső vásárlókhoz. Remarketing a kosárelhagyókhoz és a visszatérők megszerzéséhez.</p>
            <p className="text-slate-300 leading-relaxed text-lg">A három rendszer együtt dolgozik — minden fázisban ott vagyunk, ahol a vásárlód jár a döntési folyamatban.</p>
            <p className="text-slate-300 leading-relaxed text-lg">Nem csak forgalmat hozunk — profitábilis forgalmat hozunk. A ROAS javítása és a lemorzsolódás csökkentése egyenlő arányban fontos.</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Hogyan működik</h2>
        <div className="space-y-10">
          {[
            { n: '01', title: 'Audit és stratégia', body: 'Megnézzük a jelenlegi kampányokat, a ROAS-t, a kosárelhagyási rátát és a visszatérő vásárlói arányt. Megtaláljuk a legnagyobb veszteségpontokat.' },
            { n: '02', title: 'Kampányok felépítése', body: 'Meta + Google Shopping + dinamikus remarketing — minden a webáruházodra és termékkategóriáidra szabva. Preci célzás, optimalizált szöveg, vonzó kreatívok.' },
            { n: '03', title: 'Folyamatos optimalizálás', body: 'Minden héten nyomon követjük a ROAS-t, a konverziós rátát és a visszatérő vásárlók számát. Folyamatosan javítjuk, ami nem teljesít elég jól.' },
          ].map(step => (
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

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-violet-500/5 border border-violet-500/20 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-violet-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">30 napos garancia</h2>
          </div>
          <p className="text-slate-400 mb-4 leading-relaxed">Biztosak vagyunk az eredményben:</p>
          <p className="text-xl font-bold text-white mb-4">"Ha 30 napon belül nem javul a ROAS és nem látod a megbeszélt eredményeket, visszaadjuk a kezelési díjat."</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-slate-800">
        <p className="text-slate-500 text-sm mb-4 uppercase tracking-wide">Kapcsolódó iparágak</p>
        <div className="flex flex-wrap gap-3">
          <a href="/fizetett-hirdetesek" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Fizetett Hirdetések →</a>
          <a href="/ai-automatizalas" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">AI Automatizálás →</a>
          <a href="/autoskola-marketing" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Autósiskola Marketing →</a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-8">Gyakori kérdések</h2>
        <div className="space-y-6">
          {[
            { q: 'Mennyi kerül a webáruház marketing Magyarországon?', a: 'A kampányok kezelési díja általában havi 80 000–250 000 Ft, az árbevételtől és a kampány terjedelmétől függően. Meta + Google Shopping + remarketing csomagokkal dolgozunk.' },
            { q: 'Hogyan lehet javítani a ROAS-t?', a: 'Pontosabb célzással, jobb kreatívokkal és remarketing rendszerekkel. A kosárelhagyókat automatikusan visszahívjuk, a legjobb vásárlókat lookalike célközönségekkel szorozzuk meg.' },
            { q: 'Mi a különbség a Meta és a Google Shopping között webáruháznál?', a: 'A Google Shopping azokat éri el, akik aktívan keresnek egy terméket. A Meta a tudatosság előtti fázisban éri el az ideális vásárlókat. A legjobb eredményt a kettő kombinációja hozza.' },
            { q: 'Hogyan csökkenthető a kosárelhagyás?', a: 'Dinamikus remarketing hirdetésekkel és automatizált email/SMS szekvenciákkal. A kosárelhagyók 30–40%-a visszahozható megfelelő utókövetéssel.' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-white mb-3">{item.q}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Jobb ROAS-t szeretnél?</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">Foglalj egy ingyenes stratégiai hívást. Megnézzük a jelenlegi kampányaidat és megmutatjuk, hol van a legnagyobb fejlődési lehetőség.</p>
          <a href="/#contact" className="group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]">
            Ingyenes stratégiai hívás<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-slate-500 text-sm mt-4">Semmibe sem kerül. Kötelezettség nélkül.</p>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default WebaruhazPage;
