import React, { useEffect } from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import PageFooter from '../../components/PageFooter';

const BASE_URL = 'https://levinagymarketing.com';

const EdzoTermPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Edzőterem Marketing Budapest | Nagy Levi Marketing';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Facebook hirdetések és AI automatizálás edzőtermeknek Budapesten. Több tag, alacsonyabb lemorzsolódás — 30 napos garanciával. Ingyenes stratégiai hívás.';

    const service = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Edzőterem Marketing',
      provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Nagy Levi Marketing' },
      url: `${BASE_URL}/edzoterm-marketing`,
      description: 'Facebook hirdetési kampányok és AI automatizálás edzőtermeknek, amelyek több tagot hoznak és csökkentik a lemorzsolódást.',
      areaServed: { '@type': 'City', name: 'Budapest' },
      serviceType: 'Social Media Advertising',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Mennyi kerül az edzőterem marketingje Budapesten?', acceptedAnswer: { '@type': 'Answer', text: 'Az edzőtermek számára futtatott Facebook kampányok kezelési díja általában havi 60 000–180 000 Ft, a hirdetési büdzsétől és a szolgáltatások körétől függően. Nagy Levi Marketingnél 30 napos garanciával dolgozunk.' } },
        { '@type': 'Question', name: 'Hogyan csökkenthetők a lemorzsolódók száma hirdetésekkel?', acceptedAnswer: { '@type': 'Answer', text: 'A lemorzsolódás csökkentéséhez AI automatizált utókövetési rendszert építünk — amely az érdeklődők után megy, emlékeztetőket küld, és gondoskodik arról, hogy az érdeklődő ténylegesen megjelenjen az edzőteremben.' } },
        { '@type': 'Question', name: 'Mit jelent a 30 napos garancia edzőtermeknek?', acceptedAnswer: { '@type': 'Answer', text: 'Ha 30 napon belül nem hozunk több tagjelöltet a te edzőtermedbe, visszaadjuk a teljes kezelési díjat. Kötelezettség nélkül.' } },
        { '@type': 'Question', name: 'Milyen edzőtermeknek ajánlott a Nagy Levi Marketing?', acceptedAnswer: { '@type': 'Answer', text: 'Crossfit dobozoknak, személyi edzőknek, fitneszkluboknak, box edzőtermeknek, yoga stúdióknak és bármely edzőteremnek, amely folyamatos tagszerzéssel és alacsonyabb lemorzsolódással szeretne növekedni.' } },
      ],
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Főoldal', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Fizetett Hirdetések', item: `${BASE_URL}/fizetett-hirdetesek` },
        { '@type': 'ListItem', position: 3, name: 'Edzőterem Marketing', item: `${BASE_URL}/edzoterm-marketing` },
      ],
    };

    ['#edzoterm-service', '#edzoterm-faq', '#edzoterm-breadcrumb'].forEach(id => document.querySelector(id)?.remove());
    const s1 = document.createElement('script'); s1.id = 'edzoterm-service'; s1.type = 'application/ld+json'; s1.textContent = JSON.stringify(service); document.head.appendChild(s1);
    const s2 = document.createElement('script'); s2.id = 'edzoterm-faq'; s2.type = 'application/ld+json'; s2.textContent = JSON.stringify(faqSchema); document.head.appendChild(s2);
    const s3 = document.createElement('script'); s3.id = 'edzoterm-breadcrumb'; s3.type = 'application/ld+json'; s3.textContent = JSON.stringify(breadcrumb); document.head.appendChild(s3);
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

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <nav className="text-sm text-slate-500">
          <a href="/" className="hover:text-violet-400 transition-colors">Főoldal</a>
          <span className="mx-2">›</span>
          <a href="/fizetett-hirdetesek" className="hover:text-violet-400 transition-colors">Fizetett Hirdetések</a>
          <span className="mx-2">›</span>
          <span className="text-slate-300">Edzőterem Marketing</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8">
          🏋️ Edzőterem Marketing
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white">Több tag.</h1>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400">Alacsonyabb lemorzsolódás.</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Meta hirdetések és AI automatizálás edzőtermeknek — amelyek nem csak behozzák az érdeklődőt, de gondoskodnak arról, hogy el is jöjjön.
        </p>
        <a href="/#contact" className="group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]">
          Ingyenes stratégiai hívás<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

      {/* Problem */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Ismerős a helyzet?</h2>
        <div className="space-y-5">
          <p className="text-slate-300 leading-relaxed text-lg">Edzőtermek januárban tele vannak, márciusban kiürülnek. Az új tagok megszerzése drága, megtartásuk még drágább. Érdeklődők érkeznek, megkérdeznek mindent — aztán eltűnnek.</p>
          <p className="text-slate-300 leading-relaxed text-lg">A probléma ritkán maga az edzőterem. Általában az utókövetés hiányzik. Egy érdeklődő, akit nem hívnak vissza 24 órán belül, a konkurenshez megy.</p>
          <p className="text-slate-300 leading-relaxed text-lg">Ráadásul a legtöbb edzőterem-hirdetés rossz embereket ér el — olcsó tagságot keresőket, akik 3 hónap után lemondanak. A megfelelő célzással más típusú tagokat lehet vonzani.</p>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="border-l-4 border-violet-500 pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Ezt javítjuk ki.</h2>
          <div className="space-y-5">
            <p className="text-slate-300 leading-relaxed text-lg">Meta hirdetéseket futtatunk, amelyek a te ideális tagjaidat hozzák — elkötelezett sportolókat, akik hosszú távon maradnak, nem csak az akció miatt jönnek.</p>
            <p className="text-slate-300 leading-relaxed text-lg">AI automatizált utókövetési rendszert is építünk: minden érdeklődő azonnal kap visszajelzést, emlékeztetőt, és egy rendszer követi nyomon, hogy be is lépjen a tagságba.</p>
            <p className="text-slate-300 leading-relaxed text-lg">Nem kell többet az elveszett érdeklődők után futni. A rendszer elvégzi helyetted.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Hogyan működik</h2>
        <div className="space-y-10">
          {[
            { n: '01', title: 'Megismerjük az edzőtermed', body: 'Egy rövid hívás: milyen típusú tagokat szeretnél, melyik szolgáltatásra van a legnagyobb kapacitás, és mi különböztet meg a konkurenciától.' },
            { n: '02', title: 'Hirdetés + automatizálás egyszerre', body: 'Megépítjük a Meta kampányt és az AI utókövetési rendszert párhuzamosan. Az érdeklődő befut — a rendszer gondoskodik a többiről.' },
            { n: '03', title: 'Több tag, kevesebb elveszett érdeklődő', body: 'Az első megkeresések 1–2 héten belül megjelennek. A lemorzsolódás csökken, mert az utókövetés következetes — nem függ attól, hogy épp ráérsz-e.' },
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

      {/* Guarantee */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-violet-500/5 border border-violet-500/20 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-violet-400 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-white">30 napos garancia</h2>
          </div>
          <p className="text-slate-400 mb-4 leading-relaxed">Annyira biztosak vagyunk az eredményben, hogy egyszerű garanciát kínálunk:</p>
          <p className="text-xl font-bold text-white mb-4">"Ha 30 napon belül nem hozunk több tagjelöltet, visszaadjuk a kezelési díjat."</p>
          <p className="text-slate-400 leading-relaxed">Más marketingcég ezt nem vállalja. Mi igen, mert tudjuk, hogy működik.</p>
        </div>
      </section>

      {/* Related pages */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-slate-800">
        <p className="text-slate-500 text-sm mb-4 uppercase tracking-wide">Kapcsolódó iparágak</p>
        <div className="flex flex-wrap gap-3">
          <a href="/fizetett-hirdetesek" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Fizetett Hirdetések →</a>
          <a href="/ai-automatizalas" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">AI Automatizálás →</a>
          <a href="/szepsegszalon-marketing" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Szépségszalon Marketing →</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-8">Gyakori kérdések</h2>
        <div className="space-y-6">
          {[
            { q: 'Mennyi kerül az edzőterem marketingje Budapesten?', a: 'Az edzőtermek számára futtatott Facebook kampányok kezelési díja általában havi 60 000–180 000 Ft, a hirdetési büdzsétől és a szolgáltatások körétől függően. Átlátható árazással és 30 napos garanciával dolgozunk.' },
            { q: 'Hogyan csökkenthetők a lemorzsolódók száma hirdetésekkel?', a: 'A lemorzsolódás csökkentéséhez AI automatizált utókövetési rendszert építünk — amely az érdeklődők után megy, emlékeztetőket küld, és gondoskodik arról, hogy az érdeklődő ténylegesen megjelenjen.' },
            { q: 'Mit jelent a 30 napos garancia edzőtermeknek?', a: 'Ha 30 napon belül nem hozunk több tagjelöltet a te edzőtermedbe, visszaadjuk a teljes kezelési díjat. Kötelezettség nélkül.' },
            { q: 'Milyen edzőtermeknek ajánlott a Nagy Levi Marketing?', a: 'Crossfit dobozoknak, személyi edzőknek, fitneszkluboknak, box edzőtermeknek, yoga stúdióknak és bármely edzőteremnek, amely folyamatos tagszerzéssel és alacsonyabb lemorzsolódással szeretne növekedni.' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h3 className="font-bold text-white mb-3">{item.q}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Kész vagy több tagra?</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">Foglalj egy ingyenes stratégiai hívást. 30 percben átnézzük a jelenlegi helyzetedet és megmutatjuk, mit tudnánk tenni az edzőtermedért.</p>
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

export default EdzoTermPage;
