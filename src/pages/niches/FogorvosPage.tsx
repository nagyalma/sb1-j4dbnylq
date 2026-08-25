import React, { useEffect } from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import PageFooter from '../../components/PageFooter';

const BASE_URL = 'https://levinagymarketing.com';

const FogorvosPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Fogorvos Marketing Budapest | Nagy Levi Marketing';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Meta és Google hirdetések fogorvosi praxisoknak Budapesten. Több páciens szűrővizsgálatra, fogfehérítésre, fogszabályozásra. 30 napos garancia. Ingyenes hívás.';

    const service = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Fogorvos Marketing',
      provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Nagy Levi Marketing' },
      url: `${BASE_URL}/fogorvos-marketing`,
      description: 'Célzott Meta és Google hirdetési kampányok fogorvosoknak — szűrővizsgálatokra, fogfehérítésre, fogszabályozásra specializálva.',
      areaServed: { '@type': 'City', name: 'Budapest' },
      serviceType: 'Digital Advertising for Dental Practices',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Mennyi fogorvosi marketing kerül Budapesten?', acceptedAnswer: { '@type': 'Answer', text: 'Fogorvosi praxisok számára a kampánykezelési díj általában havi 80 000–200 000 Ft. Ez tartalmazza a Meta és/vagy Google kampányok teljes kezelését, optimalizálását. 30 napos garanciával dolgozunk.' } },
        { '@type': 'Question', name: 'Milyen fogászati szolgáltatásokra lehet hirdetni?', acceptedAnswer: { '@type': 'Answer', text: 'Szűrővizsgálatokra, fogfehérítésre, fogszabályozásra (clear aligner), fogimplantátumra, fogkőeltávolításra és egyéb fogászati kezelésekre futtatunk célzott kampányokat.' } },
        { '@type': 'Question', name: 'Mennyi új pácienst hoznak a hirdetések?', acceptedAnswer: { '@type': 'Answer', text: 'A Denti Implant Center esetén az első hónapban 53 űrlapos megkeresést értünk el Google hirdetésekkel. Az eredmény a praxis típusától és a kampány büdzsétől függ.' } },
        { '@type': 'Question', name: 'Hogyan működik a 30 napos garancia fogorvosoknak?', acceptedAnswer: { '@type': 'Answer', text: 'Ha 30 napon belül nem látod a megbeszélt eredményeket, visszaadjuk a teljes kezelési díjat. Kötelezettség nélkül, minden új ügyfelünkre vonatkozik.' } },
      ],
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Főoldal', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Fizetett Hirdetések', item: `${BASE_URL}/fizetett-hirdetesek` },
        { '@type': 'ListItem', position: 3, name: 'Fogorvos Marketing', item: `${BASE_URL}/fogorvos-marketing` },
      ],
    };

    ['#fog-service', '#fog-faq', '#fog-breadcrumb'].forEach(id => document.querySelector(id)?.remove());
    const s1 = document.createElement('script'); s1.id = 'fog-service'; s1.type = 'application/ld+json'; s1.textContent = JSON.stringify(service); document.head.appendChild(s1);
    const s2 = document.createElement('script'); s2.id = 'fog-faq'; s2.type = 'application/ld+json'; s2.textContent = JSON.stringify(faqSchema); document.head.appendChild(s2);
    const s3 = document.createElement('script'); s3.id = 'fog-breadcrumb'; s3.type = 'application/ld+json'; s3.textContent = JSON.stringify(breadcrumb); document.head.appendChild(s3);
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
          <span className="text-slate-300">Fogorvos Marketing</span>
        </nav>
      </div>

      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8">
          🦷 Fogorvos Marketing
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white">Több páciens.</h1>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400">Kevesebb üres időpont.</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Célzott Meta és Google kampányok fogorvosoknak — szűrővizsgálatokra, fogfehérítésre, fogszabályozásra specializálva.
        </p>
        <a href="/#contact" className="group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]">
          Ingyenes stratégiai hívás<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">A fogorvosi marketing kihívásai</h2>
        <div className="space-y-5">
          <p className="text-slate-300 leading-relaxed text-lg">Fogorvosi praxisok esetén az új páciens megszerzése drága és nehéz. A Google Ads versenyes — mindenki licitál ugyanazokra a kulcsszavakra. A szájhagyomány pedig lassú.</p>
          <p className="text-slate-300 leading-relaxed text-lg">Ráadásul a páciensek döntése előtt általában sok összehasonlítás van — ár, elhelyezkedés, vélemények. Ha a te praxisod nincs jelen a megfelelő pillanatban, más fogja megkapni az új pácienst.</p>
          <p className="text-slate-300 leading-relaxed text-lg">Ügyfeleink egyike, a Denti Implant Center, az első hónapban 53 űrlapos megkeresést kapott. Több millió forint bevétel az első negyedévben.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="border-l-4 border-violet-500 pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Hogyan hozzuk az új pácienseket</h2>
          <div className="space-y-5">
            <p className="text-slate-300 leading-relaxed text-lg">Célzott Meta és Google kampányokat futtatunk, amelyek a te ideális pácienseidet — az adott kezelés iránt érdeklődőket a közeledben — pontosan rátereli a bejelentkezésre.</p>
            <p className="text-slate-300 leading-relaxed text-lg">Szűrővizsgálatokra, fogfehérítésre és fogszabályozásra specializált kampányok más üzenetet igényelnek. Mi ezt pontosan tudjuk.</p>
            <p className="text-slate-300 leading-relaxed text-lg">A landing page, az ajánlat és a hirdetés szövege mind arra van optimalizálva, hogy megkeresésre ösztönözzön — nem csak kattintásra.</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Hogyan működik</h2>
        <div className="space-y-10">
          {[
            { n: '01', title: 'Megismerjük a praxisodat', body: 'Melyik kezelésre vár a legtöbb páciens? Melyik a legjövedelmezőbb? Milyen területen szeretnéd növelni a forgalmat? Egy hívás alatt kiderül.' },
            { n: '02', title: 'Megépítjük a kampányokat', body: 'Meta és/vagy Google kampányok, a praxisodra szabott szöveggel és célzással. Te jóváhagyod, mi elindítjuk.' },
            { n: '03', title: 'Érkeznek a megkeresések', body: 'Az első bejelentkezések általában 1–2 héten belül megjelennek. Folyamatosan optimalizálunk az egyre jobb eredményért.' },
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
          <p className="text-xl font-bold text-white mb-4">"Ha 30 napon belül nem látod a megbeszélt eredményeket, visszaadjuk a kezelési díjat."</p>
          <p className="text-slate-400 leading-relaxed">Más marketingcég ezt nem vállalja. Mi igen.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-slate-800">
        <p className="text-slate-500 text-sm mb-4 uppercase tracking-wide">Kapcsolódó iparágak</p>
        <div className="flex flex-wrap gap-3">
          <a href="/fizetett-hirdetesek" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Fizetett Hirdetések →</a>
          <a href="/szepsegszalon-marketing" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Szépségszalon Marketing →</a>
          <a href="/autoskola-marketing" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Autósiskola Marketing →</a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-8">Gyakori kérdések</h2>
        <div className="space-y-6">
          {[
            { q: 'Mennyi fogorvosi marketing kerül Budapesten?', a: 'A kezelési díj általában havi 80 000–200 000 Ft, a kampány terjedelmétől és büdzsétől függően. Átlátható árazással dolgozunk.' },
            { q: 'Milyen fogászati szolgáltatásokra lehet hirdetni?', a: 'Szűrővizsgálatokra, fogfehérítésre, fogszabályozásra (clear aligner), fogimplantátumra, fogkőeltávolításra és bármely fogászati kezelésre.' },
            { q: 'Mennyi új pácienst hoznak a hirdetések?', a: 'A Denti Implant Center esetén az első hónapban 53 űrlapos megkeresést értünk el. Az eredmény a praxis típusától és büdzsétől függ.' },
            { q: 'Hogyan működik a 30 napos garancia fogorvosoknak?', a: 'Ha 30 napon belül nem látod a megbeszélt eredményeket, visszaadjuk a teljes kezelési díjat. Kötelezettség nélkül.' },
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Kész vagy több páciensre?</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">Foglalj egy ingyenes stratégiai hívást. Megnézzük a jelenlegi helyzetedet és megmutatjuk, mit tudnánk tenni a praxisodért.</p>
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

export default FogorvosPage;
