import React, { useEffect } from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import PageFooter from '../../components/PageFooter';

const BASE_URL = 'https://levinagymarketing.com';

const SzepsegszalonPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Szépségszalon Marketing Budapest | Nagy Levi Marketing';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Facebook és Instagram hirdetések szépségszalonoknak Budapesten. 30 napos garancia — ha nem töltjük fel a naptáradat, visszaadjuk a kezelési díjat. Ingyenes hívás.';

    const service = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Szépségszalon Marketing',
      provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Nagy Levi Marketing' },
      url: `${BASE_URL}/szepsegszalon-marketing`,
      description: 'Facebook és Instagram hirdetési kampányok szépségszalonoknak, amelyek valódi foglalásokat hoznak.',
      areaServed: { '@type': 'City', name: 'Budapest' },
      serviceType: 'Social Media Advertising',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Mennyi kerül a szépségszalon marketingje Budapesten?', acceptedAnswer: { '@type': 'Answer', text: 'A szépségszalonok számára futtatott Facebook és Instagram kampányok kezelési díja általában havi 60 000–150 000 Ft, a hirdetési büdzsétől függően. Nagy Levi Marketingnél 30 napos garanciával dolgozunk.' } },
        { '@type': 'Question', name: 'Mennyi idő alatt látok foglalásokat a hirdetésekből?', acceptedAnswer: { '@type': 'Answer', text: 'Az első megkeresések általában az indítástól számított 1–2 héten belül megjelennek. A naptár feltöltése jellemzően 3–4 hét alatt érhető el a megfelelő célzással és kreatívokkal.' } },
        { '@type': 'Question', name: 'Mit jelent a 30 napos garancia szépségszalonoknak?', acceptedAnswer: { '@type': 'Answer', text: 'Ha 30 napon belül nem töltjük fel a naptáradat új ügyfelekkel, visszaadjuk a teljes kezelési díjat. Ez a garancia minden új ügyfelünkre vonatkozik, kötelezettség nélkül.' } },
        { '@type': 'Question', name: 'Milyen szépségszalonoknak ajánlott a Nagy Levi Marketing?', acceptedAnswer: { '@type': 'Answer', text: 'Szépségszalonoknak, körömlakkozóknak, sminktetoválás stúdióknak, lézeres szőrtelenítő szalonoknak és bármely szépségipari vállalkozásnak, amely online szeretne új ügyfeleket szerezni Budapesten és környékén.' } },
      ],
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Főoldal', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Fizetett Hirdetések', item: `${BASE_URL}/fizetett-hirdetesek` },
        { '@type': 'ListItem', position: 3, name: 'Szépségszalon Marketing', item: `${BASE_URL}/szepsegszalon-marketing` },
      ],
    };

    ['#szepseg-service', '#szepseg-faq', '#szepseg-breadcrumb'].forEach(id => document.querySelector(id)?.remove());
    const s1 = document.createElement('script'); s1.id = 'szepseg-service'; s1.type = 'application/ld+json'; s1.textContent = JSON.stringify(service); document.head.appendChild(s1);
    const s2 = document.createElement('script'); s2.id = 'szepseg-faq'; s2.type = 'application/ld+json'; s2.textContent = JSON.stringify(faqSchema); document.head.appendChild(s2);
    const s3 = document.createElement('script'); s3.id = 'szepseg-breadcrumb'; s3.type = 'application/ld+json'; s3.textContent = JSON.stringify(breadcrumb); document.head.appendChild(s3);
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
          <span className="text-slate-300">Szépségszalon Marketing</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8">
          💅 Szépségszalon Marketing
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white">Több foglaló.</h1>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400">Minden héten.</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Facebook és Instagram hirdetések szépségszalonoknak — amelyek valódi ügyfeleket hoznak, nem csak lájkokat.
        </p>
        <a href="/#contact" className="group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]">
          Ingyenes stratégiai hívás<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

      {/* Problem */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Ismerős a helyzet?</h2>
        <div className="space-y-5">
          <p className="text-slate-300 leading-relaxed text-lg">Szépségszalonok tele vannak tehetséges szakemberekkel — de az újakat megszerezni nehéz. Posztolsz, boosztolsz, de az eredmény kiszámíthatatlan. Egy héten tele van a naptárad, a következőn lyukak vannak.</p>
          <p className="text-slate-300 leading-relaxed text-lg">A szépségipar versenyes. Mindenki hirdet. A kérdés az, hogy a te hirdetésed eléri-e azokat a nőket, akik valóban foglalnak — vagy csak pénzt éget el a levegőben.</p>
          <p className="text-slate-300 leading-relaxed text-lg">A legtöbb szalon elvéti a célzást, a kreatívot, vagy a call-to-action-t. Az eredmény: sok megtekintés, kevés valódi ügyfél.</p>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="border-l-4 border-violet-500 pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Ezt javítjuk ki.</h2>
          <div className="space-y-5">
            <p className="text-slate-300 leading-relaxed text-lg">Olyan Meta kampányokat futtatunk, amelyek az ideális ügyfeledet — nőket 20–45 éves korcsoportban a te környékeden — pontosan rátereli a foglalásra.</p>
            <p className="text-slate-300 leading-relaxed text-lg">Minden kreativot, szöveget és célzást arra optimalizálunk, hogy foglalásra ösztönözzön — nem csak megtekintésre.</p>
            <p className="text-slate-300 leading-relaxed text-lg">Te csak végzed a munkád. Mi gondoskodunk arról, hogy ne hiányozzanak az ügyfelek.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Hogyan működik</h2>
        <div className="space-y-10">
          {[
            { n: '01', title: 'Megismerjük a szalonod', body: 'Egy rövid hívás: kik a legjobb vendégeid, milyen szolgáltatásokra akarsz több foglalást, és mi különböztet meg a konkurenciától.' },
            { n: '02', title: 'Megépítjük a kampányt', body: 'Célzás, kreatívok, szövegek — minden a te szalonodra szabva. Te jóváhagyod, mi elindítjuk.' },
            { n: '03', title: 'Tele lesz a naptárad', body: 'Az első foglalások általában 1–2 héten belül megjelennek. Folyamatosan optimalizálunk, hogy az eredmény egyre jobb legyen.' },
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
          <p className="text-xl font-bold text-white mb-4">"Ha 30 napon belül nem töltjük fel a naptáradat, visszaadjuk a kezelési díjat."</p>
          <p className="text-slate-400 leading-relaxed">Más marketingcég ezt nem vállalja. Mi igen, mert tudjuk, hogy működik.</p>
        </div>
      </section>

      {/* Related pages */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-slate-800">
        <p className="text-slate-500 text-sm mb-4 uppercase tracking-wide">Kapcsolódó iparágak</p>
        <div className="flex flex-wrap gap-3">
          <a href="/fizetett-hirdetesek" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Fizetett Hirdetések →</a>
          <a href="/fogorvos-marketing" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Fogorvos Marketing →</a>
          <a href="/autoskola-marketing" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Autósiskola Marketing →</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-8">Gyakori kérdések</h2>
        <div className="space-y-6">
          {[
            { q: 'Mennyi kerül a szépségszalon marketingje Budapesten?', a: 'A szépségszalonok számára futtatott Facebook és Instagram kampányok kezelési díja általában havi 60 000–150 000 Ft, a hirdetési büdzsétől függően. Átlátható árazással és 30 napos garanciával dolgozunk.' },
            { q: 'Mennyi idő alatt látok foglalásokat a hirdetésekből?', a: 'Az első megkeresések általában az indítástól számított 1–2 héten belül megjelennek. A naptár folyamatos feltöltése jellemzően 3–4 hét alatt érhető el.' },
            { q: 'Mit jelent a 30 napos garancia szépségszalonoknak?', a: 'Ha 30 napon belül nem töltjük fel a naptáradat új ügyfelekkel, visszaadjuk a teljes kezelési díjat. Kötelezettség nélkül.' },
            { q: 'Milyen szépségszalonoknak ajánlott a Nagy Levi Marketing?', a: 'Szépségszalonoknak, körömlakkozóknak, sminktetoválás stúdióknak, lézeres szőrtelenítő szalonoknak és bármely szépségipari vállalkozásnak, amely online szeretne új ügyfeleket szerezni.' },
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Kész vagy több foglalásra?</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">Foglalj egy ingyenes stratégiai hívást. 30 percben átnézzük a jelenlegi helyzetedet és megmutatjuk, mit tudnánk tenni a szalonodért.</p>
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

export default SzepsegszalonPage;
