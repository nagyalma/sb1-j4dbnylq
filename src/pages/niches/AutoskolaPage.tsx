import React, { useEffect } from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import PageFooter from '../../components/PageFooter';

const BASE_URL = 'https://levinagymarketing.com';

const AutoskolaPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Autósiskola Marketing Budapest | Nagy Levi Marketing';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Facebook és TikTok hirdetések autósiskoláknak Budapesten. Több tanuló egész évben, nem csak szezonban. Garantált eredmények. Ingyenes stratégiai hívás.';

    const service = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Autósiskola Marketing',
      provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Nagy Levi Marketing' },
      url: `${BASE_URL}/autoskola-marketing`,
      description: 'Facebook és TikTok kampányok autósiskoláknak — amelyek folyamatos tanulói bejelentkezést hoznak egész évben.',
      areaServed: { '@type': 'City', name: 'Budapest' },
      serviceType: 'Social Media Advertising for Driving Schools',
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Mennyi kerül az autósiskola marketing Budapesten?', acceptedAnswer: { '@type': 'Answer', text: 'Az autósiskolák számára futtatott kampányok kezelési díja általában havi 60 000–120 000 Ft. Ez tartalmazza a Facebook, Instagram és/vagy TikTok kampányok kezelését 30 napos garanciával.' } },
        { '@type': 'Question', name: 'Hogyan lehet megoldani a szezonális ingadozást?', acceptedAnswer: { '@type': 'Answer', text: 'Folyamatos, egész éves kampányokkal és szezonális akciókkal. Nyáron fiatalabb célközönséget érünk el TikTok-on, míg télen más életkori csoportokat Facebook-on.' } },
        { '@type': 'Question', name: 'Milyen eredményeket értek el autósiskoláknak?', acceptedAnswer: { '@type': 'Answer', text: 'Route 11 autósiskola esetén a 3 iskola közül az első hónapban a kampányolt iskola lett a legjobban teljesítő, túlszárnyalva a már sikeres iskolákat is.' } },
        { '@type': 'Question', name: 'Működik a TikTok hirdetés autósiskoláknak?', acceptedAnswer: { '@type': 'Answer', text: 'Igen. A 17–24 éves korosztály — a legfőbb autósiskola célcsoport — a TikTok-on érhető el a leghatékonyabban. Kreatív, rövid videós hirdetésekkel kiváló eredményeket érünk el.' } },
      ],
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Főoldal', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Fizetett Hirdetések', item: `${BASE_URL}/fizetett-hirdetesek` },
        { '@type': 'ListItem', position: 3, name: 'Autósiskola Marketing', item: `${BASE_URL}/autoskola-marketing` },
      ],
    };

    ['#auto-service', '#auto-faq', '#auto-breadcrumb'].forEach(id => document.querySelector(id)?.remove());
    const s1 = document.createElement('script'); s1.id = 'auto-service'; s1.type = 'application/ld+json'; s1.textContent = JSON.stringify(service); document.head.appendChild(s1);
    const s2 = document.createElement('script'); s2.id = 'auto-faq'; s2.type = 'application/ld+json'; s2.textContent = JSON.stringify(faqSchema); document.head.appendChild(s2);
    const s3 = document.createElement('script'); s3.id = 'auto-breadcrumb'; s3.type = 'application/ld+json'; s3.textContent = JSON.stringify(breadcrumb); document.head.appendChild(s3);
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
          <span className="text-slate-300">Autósiskola Marketing</span>
        </nav>
      </div>

      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8">
          🚗 Autósiskola Marketing
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white">Több tanuló.</h1>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400">Kevesebb üres férőhely.</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Facebook és TikTok kampányok autósiskoláknak — amelyek folyamatos tanulói bejelentkezést hoznak egész évben.
        </p>
        <a href="/#contact" className="group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]">
          Ingyenes stratégiai hívás<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">A szezonalitás csapdája</h2>
        <div className="space-y-5">
          <p className="text-slate-300 leading-relaxed text-lg">Az autósiskolák jellemzően szezonálisan küzdenek: tél végén és tavasz elején tele vannak, nyáron kiürülnek. Ez bevételi ingadozáshoz, kapacitásproblémákhoz és stresszhez vezet.</p>
          <p className="text-slate-300 leading-relaxed text-lg">A hagyományos megoldások — szórólapok, Google-hirdetések — egyre drágábbak és kevésbé hatékonyak. A fiatal célcsoport (17–24 év) már nem ott van, ahol régen.</p>
          <p className="text-slate-300 leading-relaxed text-lg">Ügyfeleink egyike, a Route 11 Autósiskola, az első kampányhónapban megelőzte a már jól teljesítő testvériskolát — kizárólag Google-hirdetésekkel.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="border-l-4 border-violet-500 pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Folyamatos bejelentkezés egész évben</h2>
          <div className="space-y-5">
            <p className="text-slate-300 leading-relaxed text-lg">Facebook és TikTok kampányokat futtatunk, amelyek a 17–24 éves korosztályt érik el ott, ahol valóban vannak — a telefonjaikon.</p>
            <p className="text-slate-300 leading-relaxed text-lg">Szezonális ajánlatokkal, kreatív videós tartalommal és precíz célzással biztosítjuk, hogy az iskola ne csak tél végén legyen tele.</p>
            <p className="text-slate-300 leading-relaxed text-lg">Google Ads kampányokkal azokat fogjuk el, akik aktívan keresnek autósiskolát — és versenytársaid előtt jelennek meg a te hirdetéseid.</p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Hogyan működik</h2>
        <div className="space-y-10">
          {[
            { n: '01', title: 'Felméréssel kezdünk', body: 'Melyik hónapokban van a legtöbb üres férőhely? Melyik célcsoport a legértékesebb? Milyen platformokon érdemes hirdetni? Ezekre válaszolunk az első hívásban.' },
            { n: '02', title: 'Kampányok indítása', body: 'Facebook, Instagram vagy TikTok — a célcsoportnak megfelelő platformon futtatjuk a hirdetéseket, gondosan optimalizált szöveggel és kreatívokkal.' },
            { n: '03', title: 'Folyamatos feltöltés', body: 'Hétről hétre nyomon követjük a bejelentkezéseket és optimalizáljuk a kampányokat. Az eredmény összeadódik.' },
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
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-slate-800">
        <p className="text-slate-500 text-sm mb-4 uppercase tracking-wide">Kapcsolódó iparágak</p>
        <div className="flex flex-wrap gap-3">
          <a href="/fizetett-hirdetesek" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Fizetett Hirdetések →</a>
          <a href="/fogorvos-marketing" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Fogorvos Marketing →</a>
          <a href="/webaruhaz-marketing" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all">Webáruház Marketing →</a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-8">Gyakori kérdések</h2>
        <div className="space-y-6">
          {[
            { q: 'Mennyi kerül az autósiskola marketing Budapesten?', a: 'Az autósiskolák számára futtatott kampányok kezelési díja általában havi 60 000–120 000 Ft. 30 napos garanciával dolgozunk.' },
            { q: 'Hogyan lehet megoldani a szezonális ingadozást?', a: 'Folyamatos, egész éves kampányokkal és szezonális akciókkal. Nyáron fiatalabb célközönséget érünk el TikTok-on, míg télen más csoportokat Facebook-on.' },
            { q: 'Milyen eredményeket értek el autósiskoláknak?', a: 'Route 11 autósiskola esetén az első hónapban a kampányolt iskola lett a legjobban teljesítő a 3 testvériskola közül.' },
            { q: 'Működik a TikTok hirdetés autósiskoláknak?', a: 'Igen. A 17–24 éves korosztály TikTok-on érhető el a leghatékonyabban. Kreatív, rövid videós hirdetésekkel kiváló eredményeket érünk el.' },
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Tele legyen az iskola?</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">Foglalj egy ingyenes stratégiai hívást. Megnézzük az iskolád jelenlegi helyzetét és megmutatjuk, mit tudnánk tenni érte.</p>
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

export default AutoskolaPage;
