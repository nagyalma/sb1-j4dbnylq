import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageFooter from '../components/PageFooter';

const BASE_URL = 'https://levinagymarketing.com';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Rólunk — Nagy Levi Marketing Ügynökség Budapest';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Nagy Levi Marketing — performance marketing ügynökség Budapest. Ismerd meg a csapatot, a szakértelmet és azt a missziót, ami miatt minden nap dolgozunk.';

    const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${BASE_URL}/#person-nagylevi`,
      name: 'Nagy Levi',
      givenName: 'Levi',
      familyName: 'Nagy',
      jobTitle: 'Marketing Specialista',
      description: '2021 óta segíti a helyi vállalkozásokat több ügyfél megszerzésében Facebook, Google és TikTok hirdetésekkel, SEO-val és AI automatizálással Budapestről.',
      url: `${BASE_URL}/rolunk`,
      email: 'nlevi@levinagymarketing.com',
      telephone: '+36706339977',
      image: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754826429/Win_tdgauq.png',
      sameAs: ['https://www.instagram.com/nagylevi_marketing/'],
      worksFor: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Nagy Levi Marketing' },
      address: { '@type': 'PostalAddress', addressLocality: 'Budapest', addressCountry: 'HU' },
      knowsAbout: ['Facebook Advertising', 'Google Ads', 'TikTok Advertising', 'SEO Optimization', 'AI Automation', 'Lead Generation', 'Digital Marketing'],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Google Ads Certified' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Meta Blueprint Certified' },
      ],
    };

    const org = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${BASE_URL}/#organization`,
      name: 'Nagy Levi Marketing',
      url: BASE_URL,
      foundingDate: '2021',
      founder: { '@type': 'Person', '@id': `${BASE_URL}/#person-nagylevi`, name: 'Nagy Levi' },
      address: { '@type': 'PostalAddress', addressLocality: 'Budapest', addressCountry: 'HU' },
      telephone: '+36706339977',
      email: 'nlevi@levinagymarketing.com',
      sameAs: ['https://www.instagram.com/nagylevi_marketing/'],
    };

    const breadcrumb = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Főoldal', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Rólunk', item: `${BASE_URL}/rolunk` },
      ],
    };

    ['#about-person-schema', '#about-org-schema', '#about-breadcrumb'].forEach(id => {
      document.querySelector(id)?.remove();
    });
    const s1 = document.createElement('script'); s1.id = 'about-person-schema'; s1.type = 'application/ld+json'; s1.textContent = JSON.stringify(person); document.head.appendChild(s1);
    const s2 = document.createElement('script'); s2.id = 'about-org-schema'; s2.type = 'application/ld+json'; s2.textContent = JSON.stringify(org); document.head.appendChild(s2);
    const s3 = document.createElement('script'); s3.id = 'about-breadcrumb'; s3.type = 'application/ld+json'; s3.textContent = JSON.stringify(breadcrumb); document.head.appendChild(s3);
  }, []);

  const services = [
    { name: 'Fizetett Hirdetések', url: '/fizetett-hirdetesek', desc: 'Facebook, Instagram és Google hirdetések, amelyek fizető ügyfeleket hoznak.' },
    { name: 'AI Automatizálás', url: '/ai-automatizalas', desc: 'Ismétlődő folyamatok automatizálása AI rendszerekkel — több idő, kevesebb munka.' },
    { name: 'Szépségszalon Marketing', url: '/szepsegszalon-marketing', desc: 'Célzott kampányok szépségszalonoknak, amelyek tele töltik a naptárat.' },
    { name: 'Fogorvos Marketing', url: '/fogorvos-marketing', desc: 'Meta és Google kampányok fogorvosi praxisoknak új páciensekért.' },
    { name: 'Autósiskola Marketing', url: '/autoskola-marketing', desc: 'Facebook és TikTok kampányok folyamatos tanulói bejelentkezésért.' },
    { name: 'Edzőterem Marketing', url: '/edzoterm-marketing', desc: 'Meta hirdetések + AI utókövetés edzőtermeknek és fitneszstúdióknak.' },
    { name: 'Webáruház Marketing', url: '/webaruhaz-marketing', desc: 'Meta + Google Shopping kampányok + remarketing webáruházaknak.' },
  ];

  const skills = [
    'Facebook & Instagram Ads',
    'Google Ads (Search, Display, Shopping)',
    'TikTok Ads',
    'SEO Optimalizálás',
    'AI Automatizálás',
    'Landing Page Tervezés',
    'Email Marketing',
    'Funnel Stratégia',
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Nav */}
      <header className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold text-white hover:text-violet-400 transition-colors">
              Nagy Levi <span className="text-violet-400">Marketing</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="text-slate-300 hover:text-white transition-colors text-sm">← Főoldal</a>
              <a href="/#contact" className="px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-lg transition-all">
                Kapcsolat
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <nav className="text-sm text-slate-500">
          <a href="/" className="hover:text-violet-400 transition-colors">Főoldal</a>
          <span className="mx-2">›</span>
          <span className="text-slate-300">Rólunk</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8">
          👋 Ismerd meg a csapatot
        </div>
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 text-white">
          Rólunk — Nagy Levi Marketing
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
          Budapest alapú performance marketing ügynökség. 2021 óta segítjük a helyi vállalkozásokat több ügyfél megszerzésében — garantáltan.
        </p>
      </section>

      {/* Founder */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-6">
              Az alapító
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Nagy Levi</h2>
            <p className="text-slate-400 text-sm uppercase tracking-widest mb-6">Marketing Specialista · Budapest · 2021 óta</p>
            <p className="text-slate-300 leading-relaxed mb-6">
              2021-ben indítottam el a Nagy Levi Marketinget azzal a céllal, hogy a helyi vállalkozásoknak ugyanolyan profi marketingeszközök álljanak rendelkezésére, mint a nagy márkáknak — de mérhető eredményekkel és garanciával.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Azóta több mint 20 vállalkozásnak segítettünk Magyarországon és Szlovákiában. Az ügyfeleinknél az első hónapban átlagosan 181 megkeresést értünk el.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Google Ads Certified', 'Meta Blueprint Certified'].map(cert => (
                <span key={cert} className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs rounded-full">
                  <CheckCircle className="w-3 h-3" /> {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
            <img
              src="https://res.cloudinary.com/dduros3xw/image/upload/v1779627671/IMG_9853_wy8bwq.jpg"
              alt="Nagy Levi — Marketing Specialista Budapest"
              className="w-full h-80 object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-8">Szaktudás</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {skills.map(skill => (
            <div key={skill} className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-center">
              <p className="text-slate-300 text-sm font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="border-l-4 border-violet-500 pl-6">
          <h2 className="text-2xl font-bold text-white mb-6">A misszióm</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-4">
            "Azért csináljuk, amit csinálunk, mert látjuk, hogy a legtöbb helyi vállalkozás elveszíti az ügyfeleit olyan problémák miatt, amelyek megoldhatók."
          </p>
          <p className="text-slate-400 leading-relaxed">
            Nem hisszük, hogy a jó marketing csak a nagy cégek privilégiuma. Egy fogorvos, egy szépségszalon, egy autósiskola ugyanolyan jogosan számíthat mérhető eredményekre — és mi ezt biztosítjuk, garanciával.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-8">Szolgáltatásaink</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map(s => (
            <a key={s.url} href={s.url} className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-violet-500/40 rounded-xl p-5 transition-all">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">{s.name}</h3>
                <ArrowRight className="w-4 h-4 text-violet-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-slate-800">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Dolgozzunk együtt?</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Foglalj egy ingyenes stratégiai hívást. Semmi nyomás, semmi erőltetett értékesítés — csak egy őszinte áttekintés arról, hogyan tudunk segíteni.
          </p>
          <a href="/#contact" className="group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]">
            Ingyenes konzultáció<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default AboutPage;
