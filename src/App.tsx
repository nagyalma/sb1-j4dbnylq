import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, Instagram, Globe, Search, TrendingUp, Facebook, MessageCircle, CheckCircle, Star, Clock, Shield, ArrowRight, ChevronRight } from 'lucide-react';
import LocalSEOHead from './components/LocalSEOHead';
import PrivacyPolicy from './components/PrivacyPolicy';

// ── Animation utilities ────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(end: number, active: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [end, active, duration]);
  return val;
}

function CountUp({ end, suffix = '', active }: { end: number; suffix?: string; active: boolean }) {
  const n = useCountUp(end, active);
  return <>{n}{suffix}</>;
}

const fadeUp = (v: boolean, d = 0): React.CSSProperties => ({
  opacity: v ? 1 : 0,
  transform: v ? 'translateY(0)' : 'translateY(24px)',
  transition: `opacity .6s ease ${d}ms, transform .6s ease ${d}ms`,
});

const slideLeft = (v: boolean, d = 0): React.CSSProperties => ({
  opacity: v ? 1 : 0,
  transform: v ? 'translateX(0)' : 'translateX(-28px)',
  transition: `opacity .65s ease ${d}ms, transform .65s ease ${d}ms`,
});

const slideRight = (v: boolean, d = 0): React.CSSProperties => ({
  opacity: v ? 1 : 0,
  transform: v ? 'translateX(0)' : 'translateX(28px)',
  transition: `opacity .65s ease ${d}ms, transform .65s ease ${d}ms`,
});

// ── Schema builder ─────────────────────────────────────────────────────────

function buildSchemas(language: 'hu' | 'en') {
  const baseUrl = 'https://levinagymarketing.com';

  const organization = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${baseUrl}/#organization`,
    name: 'Nagy Levi Marketing',
    alternateName: 'NLM',
    description: language === 'hu'
      ? 'Marketing ügynökség Budapestről. Facebook hirdetések, Google Ads, TikTok hirdetések, SEO optimalizálás és weboldal készítés – több ügyfelet, több bevételt garantálunk 30 napon belül.'
      : 'Budapest-based marketing agency. Facebook Ads, Google Ads, TikTok advertising, SEO, and website design – we guarantee more clients and more revenue within 30 days.',
    url: baseUrl,
    image: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754826429/Win_tdgauq.png',
    telephone: '+36706339977',
    email: 'nlevi@levinagymarketing.com',
    foundingDate: '2021',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Budapest',
      addressRegion: 'Budapest',
      addressCountry: 'HU',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 47.4979, longitude: 19.0402 },
    areaServed: [
      { '@type': 'Country', name: 'Hungary' },
      { '@type': 'Country', name: 'Slovakia' },
      { '@type': 'City', name: 'Budapest' },
    ],
    sameAs: ['https://www.instagram.com/nagylevi_marketing/'],
    founder: { '@type': 'Person', '@id': `${baseUrl}/#person-nagylevi`, name: 'Nagy Levi' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '4', bestRating: '5', worstRating: '1' },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Csendes Balázs' },
        reviewBody: 'Levivel az együttműködés nagyon gördülékenyen ment. Az ügyfelek száma 6 hónap alatt megötszöröződött. Mindenkinek ajánlom, még azoknak is, akik ezen a területen tapasztalatlanok!',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Magyar Zsuzsa' },
        reviewBody: 'Az érdeklődők száma jelentősen megnőtt, és a potenciális ügyfelek megszerzése is jóval költséghatékonyabbá vált – kb. 40%-os megtakarítás.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Organization', name: 'Gatier Hungary' },
        reviewBody: 'Az online kampányaink teljes körű tervezése új szintre emelkedett. Jelentősen növekedett az ügyfél-elérésünk és a kampányok hatékonysága.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Organization', name: 'Kolpa San Kft.' },
        reviewBody: 'Jelentős változást tapasztaltunk az online jelenlétünkben. Levi mindig rugalmas és gyors.',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'hu' ? 'Marketing Szolgáltatások' : 'Marketing Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'hu' ? 'Facebook Hirdetések' : 'Facebook Ads', description: language === 'hu' ? 'Célzott Facebook kampányok helyi vállalkozásoknak.' : 'Targeted Facebook ad campaigns for local businesses.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'hu' ? 'Google Hirdetések' : 'Google Ads', description: language === 'hu' ? 'Google Ads kampányok potenciális ügyfelekért.' : 'Google Ads campaigns that bring potential clients.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'hu' ? 'TikTok Hirdetések' : 'TikTok Ads', description: language === 'hu' ? 'Kreatív TikTok hirdetések fiatal célközönség eléréséhez.' : 'Creative TikTok campaigns to reach younger audiences.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'hu' ? 'SEO Optimalizálás' : 'SEO Optimization', description: language === 'hu' ? 'Google első oldalra juttatjuk a weboldalad 90 napon belül, vagy visszaadjuk a pénzed.' : "We get your website to Google's first page within 90 days, or your money back." } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'hu' ? 'Email Marketing' : 'Email Marketing', description: language === 'hu' ? 'Automatizált email kampányok az ügyfélmegtartáshoz.' : 'Automated email campaigns for client retention.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: language === 'hu' ? 'Weboldal és Landing Page Készítés' : 'Website & Landing Page Design', description: language === 'hu' ? 'Konverzióra optimalizált weboldal 14 nap alatt.' : 'Conversion-optimized website in 14 days.' } },
      ],
    },
    knowsAbout: ['Facebook Advertising', 'Google Ads', 'TikTok Advertising', 'Search Engine Optimization', 'Email Marketing', 'Landing Page Design', 'Lead Generation', 'Digital Marketing', 'Marketing Budapest', 'Hirdetéskezelés', 'Weboldal készítés Budapest'],
  };

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#person-nagylevi`,
    name: 'Nagy Levi',
    givenName: 'Levi',
    familyName: 'Nagy',
    jobTitle: language === 'hu' ? 'Marketing Specialista' : 'Marketing Specialist',
    description: language === 'hu'
      ? '2021 óta segíti a helyi vállalkozásokat több ügyfél megszerzésében Facebook, Google és TikTok hirdetésekkel, SEO-val és weboldal készítéssel Budapestről.'
      : 'Helping local businesses get more clients since 2021 through Facebook, Google, and TikTok advertising, SEO, and website design, based in Budapest.',
    url: baseUrl,
    email: 'nlevi@levinagymarketing.com',
    telephone: '+36706339977',
    image: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754826429/Win_tdgauq.png',
    sameAs: ['https://www.instagram.com/nagylevi_marketing/'],
    worksFor: { '@type': 'Organization', '@id': `${baseUrl}/#organization`, name: 'Nagy Levi Marketing' },
    address: { '@type': 'PostalAddress', addressLocality: 'Budapest', addressCountry: 'HU' },
    knowsAbout: ['Facebook Advertising', 'Google Ads', 'TikTok Advertising', 'SEO Optimization', 'Lead Generation', 'Digital Marketing', 'Email Marketing'],
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: language === 'hu' ? [
      { '@type': 'Question', name: 'Mennyi kerül egy Facebook hirdetés Budapesten?', acceptedAnswer: { '@type': 'Answer', text: 'A Facebook hirdetések ára Magyarországon általában havi 50 000–500 000 Ft között mozog a hirdetési büdzsére vonatkozóan. A Nagy Levi Marketingnél átlátható árazással és 30 napos garanciával dolgozunk – ha 30 napon belül nem látod az eredményt, visszaadjuk a kezelési díjat.' } },
      { '@type': 'Question', name: 'Mennyi idő alatt látok eredményt a Google Ads hirdetéseimből?', acceptedAnswer: { '@type': 'Answer', text: 'Google Ads kampányoknál általában 1–2 héten belül megjelennek az első megkeresések. SEO esetén 90 napon belül garantáljuk a TOP 10 helyezést Google-n, vagy visszaadjuk a pénzed.' } },
      { '@type': 'Question', name: 'Mit jelent a 30 napos garancia?', acceptedAnswer: { '@type': 'Answer', text: 'Ha 30 napon belül nem látod a megbeszélt eredményeket a kampányodban, visszatérítjük a teljes kezelési díjat. Ez a garancia minden új ügyfelünkre vonatkozik, kötelezettség nélkül.' } },
      { '@type': 'Question', name: 'Milyen vállalkozásoknak ajánlott a Nagy Levi Marketing?', acceptedAnswer: { '@type': 'Answer', text: 'Főként helyi szolgáltatóknak segítünk: szépségszalonoknak, fogászatoknak, autósiskoláknak, fitnesztermeknek és online vállalkozásoknak. Ügyfeleinknél az első hónapban átlagosan 181 megkeresést értünk el.' } },
      { '@type': 'Question', name: 'Hogyan lehet felvenni a kapcsolatot a Nagy Levi Marketinggel?', acceptedAnswer: { '@type': 'Answer', text: 'Telefonon a +36 70 633 9977-es számon, emailben az nlevi@levinagymarketing.com címen, vagy a weboldalon lévő kapcsolatfelvételi űrlapon. Válasz 24 órán belül garantált, kötelezettség nélkül.' } },
      { '@type': 'Question', name: 'Kell-e már meglévő weboldal a hirdetések futtatásához?', acceptedAnswer: { '@type': 'Answer', text: 'Nem szükséges. Weboldalt és landing page-t is készítünk 14 napon belül, konverzióra optimalizálva, hogy a hirdetések a lehető legtöbb ügyfelet hozzák.' } },
    ] : [
      { '@type': 'Question', name: 'How much does Facebook advertising cost in Budapest?', acceptedAnswer: { '@type': 'Answer', text: "Facebook advertising in Hungary typically costs between 50,000–500,000 HUF per month in ad spend. At Nagy Levi Marketing we offer transparent pricing with a 30-day guarantee — if you don't see results within 30 days, we refund the management fee." } },
      { '@type': 'Question', name: 'How quickly will I see results from Google Ads?', acceptedAnswer: { '@type': 'Answer', text: 'Google Ads campaigns typically show initial inquiries within 1–2 weeks. For SEO, we guarantee a TOP 10 Google ranking within 90 days, or your money back.' } },
      { '@type': 'Question', name: 'What does the 30-day guarantee mean?', acceptedAnswer: { '@type': 'Answer', text: "If you don't see the agreed results within 30 days of your campaign launch, we refund the full management fee. This guarantee applies to all new clients with no strings attached." } },
      { '@type': 'Question', name: 'What types of businesses does Nagy Levi Marketing work with?', acceptedAnswer: { '@type': 'Answer', text: 'We primarily help local service providers: beauty salons, dental clinics, driving schools, gyms, and online businesses. Our clients average 181 leads in their first month.' } },
      { '@type': 'Question', name: 'How can I contact Nagy Levi Marketing?', acceptedAnswer: { '@type': 'Answer', text: 'By phone at +36 70 633 9977, by email at nlevi@levinagymarketing.com, or through the contact form on the website. Response within 24 hours is guaranteed, with no obligation.' } },
      { '@type': 'Question', name: 'Do I need an existing website to run ads?', acceptedAnswer: { '@type': 'Answer', text: 'No. We build conversion-optimized websites and landing pages within 14 days so your ads have the best possible foundation to generate clients.' } },
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Nagy Levi Marketing',
    description: language === 'hu'
      ? 'Marketing ügynökség Budapest – Facebook hirdetések, Google Ads, SEO, weboldal készítés'
      : 'Marketing agency Budapest – Facebook Ads, Google Ads, SEO, website design',
    inLanguage: ['hu', 'en'],
    publisher: { '@id': `${baseUrl}/#organization` },
  };

  return [organization, person, faq, website];
}

// ── App ────────────────────────────────────────────────────────────────────

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    runningAds: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Section refs
  const { ref: statsRef, inView: statsInView } = useInView(0.4);
  const { ref: logosRef, inView: logosInView } = useInView();
  const { ref: seoRef, inView: seoInView } = useInView();
  const { ref: servRef, inView: servInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();
  const { ref: whyRef, inView: whyInView } = useInView();
  const { ref: testRef, inView: testInView } = useInView();
  const { ref: resRef, inView: resInView } = useInView();
  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { ref: contactRef, inView: contactInView } = useInView();

  const cursorRef = useRef<HTMLDivElement>(null);

  const isEnglish = location.pathname.startsWith('/en');
  const language: 'hu' | 'en' = isEnglish ? 'en' : 'hu';
  const schemas = buildSchemas(language);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 600);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let tid: ReturnType<typeof setTimeout>;
    const move = (e: MouseEvent) => {
      const el = cursorRef.current;
      if (!el) return;
      el.style.left = `${e.clientX - 200}px`;
      el.style.top = `${e.clientY - 200}px`;
      el.style.opacity = '1';
      clearTimeout(tid);
      tid = setTimeout(() => { if (cursorRef.current) cursorRef.current.style.opacity = '0'; }, 1500);
    };
    window.addEventListener('mousemove', move);
    return () => { window.removeEventListener('mousemove', move); clearTimeout(tid); };
  }, []);


  useEffect(() => {
    const timer = setInterval(() => { setActiveTestimonial(prev => (prev + 1) % 4); }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleLanguage = () => { language === 'hu' ? navigate('/en') : navigate('/'); };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const payload = { ...formData, language, submittedAt: new Date().toLocaleString() };
      const response = await fetch('https://hook.eu2.make.com/k5gix4ck8fcnsnx8lymv6p10kf29n9wc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', website: '', runningAds: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = {
    hu: {
      nav: { services: 'Szolgáltatások', results: 'Eredmények', about: 'Rólam', contact: 'Kapcsolat' },
      hero: {
        badge: '🟢 Elérhető új ügyfeleknek',
        title: 'Megtöltjük a naptáradat új ügyfelekkel 30 nap alatt',
        titleHighlight: '— Garantáltan',
        subtitle: 'Hirdetéseket és weboldalakat készítünk, amik tényleg működnek. Több megkeresés, több bevétel, kevesebb stressz.',
        ctaAds: 'Több ügyfelet szeretnék hirdetéssel',
        ctaAI:  'Automatizálni szeretném a vállalkozásom',
        ctaSub: 'Válasz 24 órán belül • Kötelezettség nélkül',
        stats: [{ num: '181+', label: 'Megkeresés / hó' }, { num: '3.5×', label: 'Több eredmény' }, { num: '730', label: 'Regisztráció 19 nap alatt' }]
      },
      services: {
        title: 'Szolgáltatásaink, amik ügyfeleket hoznak neked',
        items: [
          { title: 'Facebook Hirdetések', description: 'Célzott Facebook kampányokkal elérjük azokat, akik valóban érdeklődnek a szolgáltatásaid iránt.' },
          { title: 'Google Hirdetések', description: 'Google Ads kampányokkal akkor jelenünk meg, amikor potenciális ügyfeleid rád keresnek.' },
          { title: 'TikTok Hirdetések', description: 'Fiatal célközönséget érünk el kreatív TikTok kampányokkal, amelyek növelik a márkaismertséged.' },
          { title: 'SEO/AI Optimalizálás', description: 'Weboldaladat a Google első oldalára és az AI első ajánlására juttatjuk, hogy organikusan találjanak meg téged.' },
          { title: 'Email Marketing', description: 'Automatizált email kampányokkal tartjuk a kapcsolatot ügyfelekkel és növeljük az eladásokat.' },
          { title: 'Landing Page / Funnel Tervezés', description: 'Konverzióra optimalizált oldalakat készítünk, amelyek látogatókat ügyfelekké alakítanak.' }
        ]
      },
      why: {
        title: 'Miért válaszd a', subtitle: 'más ügynökségek helyett?',
        otherAgencies: 'Más ügynökségek', us: 'Nagy Levi Marketing',
        otherItems: ['Hónapokig tartó szerződések', 'Nincs garancia', 'Lassú kommunikáció', 'Általános megoldások', 'Nincs garantált eredmény'],
        ourItems: ['Rugalmas együttműködés', 'Átlátható árazás', 'Gyors válaszidő', 'Személyre szabott stratégia', '30 napos garancia']
      },
      testimonials: {
        title: 'Mit mondanak rólunk ügyfeleink',
        items: [
          { text: 'Levivel az együttműködés nagyon gördülékenyen ment. Pontos visszajelzéseket adott a kampány eredményéről, hasznos tanácsokat adott a kampányok sikeresebbé tételéhez. Az ügyfelek száma 6 hónap alatt megötszöröződött, nem hittem volna, hogy ennyi idő alatt ez lehetséges. Mindenkinek ajánlom, még azoknak is, akik ezen a területen tapasztalatlanok!', author: 'Csendes Balázs', role: 'Route11 Autósiskola', initials: 'CB' },
          { text: 'Mióta Levire bíztam a marketinges tevékenységeim kezelését, az érdeklődők száma jelentősen megnőtt, és a potenciális ügyfelek megszerzése is jóval költséghatékonyabbá vált (kb. 40%-os megtakarítás). Levi folyamatosan figyelemmel kíséri az online kampányok teljesítését, és amikor szükséges, azonnal reagál.', author: 'Magyar Zsuzsa', role: 'Sminktetoválás', initials: 'MZ' },
          { text: 'Levi közreműködésével az online kampányaink teljes körű tervezése új szintre emelkedett. A kampányok során Levi rugalmasan alkalmazkodik az igényeinkhez. Az együttműködésünk eredményeképp jelentősen növekedett az ügyfél-elérésünk és a kampányok hatékonysága.', author: 'Gatier Hungary', role: 'Reklámügynökség', initials: 'GH' },
          { text: 'Amióta Levi készíti a közösségi média felületeink tartalmait, jelentős változást tapasztaltunk az online jelenlétünkben. A tartalomgyártás során Levi mindig rugalmas és gyors, így időben és a legmagasabb minőségben kapjuk meg a szükséges anyagokat.', author: 'Kolpa San Kft.', role: 'Vállalkozás', initials: 'KS' }
        ]
      },
      clients: { title: 'Ügyfeleink' },
      guarantee: {
        title: '14 nap alatt elkészítjük a saját, profi weboldalad.',
        subtitle: 'Elkészítjük a profi weboldalad 14 nap alatt ami több bevételt fog neked generálni.',
        cta: 'Felveszem a kapcsolatot', portfolioTitle: 'Nézd meg a portfóliónkat:',
        links: [
          { text: 'Oxford Nyelviskola', url: 'https://oxford.hu/' },
          { text: 'Denti Implant Center', url: 'https://dentiimplantcenter.hu/' },
          { text: 'Földmérő Iroda', url: 'https://foldmero.org/' },
          { text: 'G7 Influence', url: 'https://g7influence.com/' },
          { text: 'Domati', url: 'https://domati.sk/hu/fooldal/' },
          { text: 'Fiori Beauty', url: 'https://fioribeauty.sk/' },
          { text: 'MHL Geo', url: 'https://mhlgeo.sk/fooldal/' },
          { text: 'Baráth Kinga', url: 'https://barathkinga.sk/' },
          { text: 'Gyermekfejlesztés', url: 'https://gyermekfejlesztes.sk/' },
          { text: 'Szilani Beauty', url: 'https://szilani-beauty.hu/' },
          { text: 'Kónya Csilla', url: 'https://konyacsilla.hu/' },
          { text: 'Győre Norbert', url: 'https://gyorenorbert.hu/' }
        ]
      },
      about: { title: 'Rólam', text: 'Több éve segítek helyi vállalkozóknak több ügyfelet szerezni és növelni a bevételüket online hirdetési stratégiákkal. Ha te is szeretnéd fellendíteni a vállalkozásod, írj nekem és beszéljük meg, hogy hogyan tudjuk megvalósítani.' },
      contact: {
        title: 'Kapcsolat', subtitle: 'Készen állsz a növekedésre?',
        trustItems: ['Válasz 24 órán belül', 'Ingyenes konzultáció', 'Kötelezettség nélkül'],
        form: { name: 'Név', email: 'Email', phone: 'Telefon', website: 'Weboldal URL', runningAds: 'Jelenleg futtatsz hirdetéseket?', runningAdsYes: 'Igen', runningAdsNo: 'Nem', message: 'Üzenet', submit: 'Ingyenes konzultációt kérek →' }
      },
      midCTA: { title: 'Készen állsz több ügyfélre?', subtitle: 'Több száz vállalkozásnak segítettünk növekedni. Te lehetsz a következő.', cta: 'Ingyenes konzultáció →' },
      seo: { title: 'Szeretnél több ügyfelet szerezni a Google-n keresztül anélkül, hogy hirdetéseket futtatnál?', highlight: 'TOP 10 közé 90 napon belül', cta: 'Érdekel!' }
    },
    en: {
      nav: { services: 'Services', results: 'Results', about: 'About', contact: 'Contact' },
      hero: {
        badge: '🟢 Available for new clients',
        title: "We'll Fill Your Calendar with New Customers in 30 Days",
        titleHighlight: '— Guaranteed',
        subtitle: 'We create ads and websites that actually work. More leads, more revenue, less stress.',
        ctaAds: 'I want more clients with ads',
        ctaAI:  'I want to automate my business',
        ctaSub: 'Response within 24 hours • No obligation',
        stats: [{ num: '181+', label: 'Leads per month' }, { num: '3.5×', label: 'More results' }, { num: '730', label: 'Registrations in 19 days' }]
      },
      services: {
        title: 'Our services that bring you clients',
        items: [
          { title: 'Facebook Ads', description: 'Targeted Facebook campaigns reach those who are genuinely interested in your services.' },
          { title: 'Google Ads', description: 'Google Ads campaigns appear when potential clients are searching for you.' },
          { title: 'TikTok Ads', description: 'Reach young audiences with creative TikTok campaigns that increase brand awareness.' },
          { title: 'SEO Optimization', description: "Get your website to Google's first page so clients find you organically." },
          { title: 'Email Marketing', description: 'Automated email campaigns maintain client relationships and increase sales.' },
          { title: 'Landing Page / Funnel Design', description: 'Conversion-optimized pages that turn visitors into customers.' }
        ]
      },
      why: {
        title: 'Why choose', subtitle: 'instead of other agencies?',
        otherAgencies: 'Other Agencies', us: 'Nagy Levi Marketing',
        otherItems: ['Long-term contracts', 'High initial costs', 'Slow communication', 'Generic solutions', 'No guaranteed results'],
        ourItems: ['Flexible cooperation', 'Transparent pricing', 'Fast response time', 'Personalized strategy', '30-day guarantee']
      },
      testimonials: {
        title: 'What our clients say about us',
        items: [
          { text: 'Working with Levi went very smoothly. He gave precise feedback on campaign results and useful advice on how to make campaigns more successful. Our client numbers quintupled in 6 months — I wouldn\'t have believed it was possible in that time. I recommend him to everyone, even those with no experience in online marketing!', author: 'Csendes Balázs', role: 'Route11 Driving School', initials: 'CB' },
          { text: 'Since I entrusted Levi with managing my marketing activities, the number of inquiries has increased significantly, and acquiring potential customers has become much more cost-effective (about 40% savings). Levi continuously monitors the performance of online campaigns and responds immediately when necessary.', author: 'Magyar Zsuzsa', role: 'Permanent Makeup', initials: 'MZ' },
          { text: "With Levi's involvement, the comprehensive planning of our online campaigns has reached a new level. During the campaigns, Levi flexibly adapts to our needs. As a result of our cooperation, our client reach and campaign efficiency have increased significantly.", author: 'Gatier Hungary', role: 'Advertising Agency', initials: 'GH' },
          { text: "Since Levi has been creating content for our social media platforms, we have experienced a significant change in our online presence. During content production, Levi is always flexible and fast, so we receive the necessary materials on time and in the highest quality.", author: 'Kolpa San Kft.', role: 'Business', initials: 'KS' }
        ]
      },
      clients: { title: 'Our Clients' },
      guarantee: {
        title: 'We create your own professional website in 14 days.',
        subtitle: 'We create your professional website in 14 days that will generate more revenue for you.',
        cta: 'Reach Out To Me', portfolioTitle: 'Check out our portfolio:',
        links: [
          { text: 'Oxford Language School', url: 'https://oxford.hu/' },
          { text: 'Denti Implant Center', url: 'https://dentiimplantcenter.hu/' },
          { text: 'Surveyor Office', url: 'https://foldmero.org/' },
          { text: 'G7 Influence', url: 'https://g7influence.com/' },
          { text: 'Domati', url: 'https://domati.sk/hu/fooldal/' },
          { text: 'Fiori Beauty', url: 'https://fioribeauty.sk/' },
          { text: 'MHL Geo', url: 'https://mhlgeo.sk/fooldal/' },
          { text: 'Baráth Kinga', url: 'https://barathkinga.sk/' },
          { text: 'Child Development', url: 'https://gyermekfejlesztes.sk/' },
          { text: 'Szilani Beauty', url: 'https://szilani-beauty.hu/' },
          { text: 'Kónya Csilla', url: 'https://konyacsilla.hu/' },
          { text: 'Győre Norbert', url: 'https://gyorenorbert.hu/' }
        ]
      },
      about: { title: 'About Me', text: "For years, I've been helping local entrepreneurs get more clients and increase their revenue with online advertising strategies. If you also want to boost your business, write to me and let's discuss how we can make it happen." },
      contact: {
        title: 'Contact', subtitle: 'Ready for growth?',
        trustItems: ['Response within 24 hours', 'Free consultation', 'No obligation'],
        form: { name: 'Name', email: 'Email', phone: 'Phone', website: 'Website URL', runningAds: 'Are you currently running ads?', runningAdsYes: 'Yes', runningAdsNo: 'No', message: 'Message', submit: 'Get My Free Consultation →' }
      },
      midCTA: { title: 'Ready for more clients?', subtitle: "We've helped hundreds of businesses grow. You could be next.", cta: 'Free Consultation →' },
      seo: { title: 'Want to get more clients through Google without running ads?', highlight: 'TOP 10 within 90 days', cta: "I'm Interested!" }
    }
  };

  const t = content[language];

  if (showPrivacyPolicy) {
    return <PrivacyPolicy language={language} onBack={() => setShowPrivacyPolicy(false)} />;
  }

  const serviceIcons = [
    { icon: <Facebook className="w-6 h-6 text-blue-400" />, hoverBorder: 'hover:border-blue-500/50', bg: 'bg-blue-500/10', hoverBg: 'group-hover:bg-blue-500/20' },
    { icon: <Search className="w-6 h-6 text-green-400" />, hoverBorder: 'hover:border-green-500/50', bg: 'bg-green-500/10', hoverBg: 'group-hover:bg-green-500/20' },
    { icon: <MessageCircle className="w-6 h-6 text-pink-400" />, hoverBorder: 'hover:border-pink-500/50', bg: 'bg-pink-500/10', hoverBg: 'group-hover:bg-pink-500/20' },
    { icon: <TrendingUp className="w-6 h-6 text-purple-400" />, hoverBorder: 'hover:border-purple-500/50', bg: 'bg-purple-500/10', hoverBg: 'group-hover:bg-purple-500/20' },
    { icon: <Mail className="w-6 h-6 text-violet-400" />, hoverBorder: 'hover:border-violet-500/50', bg: 'bg-violet-500/10', hoverBg: 'group-hover:bg-violet-500/20' },
    { icon: <Globe className="w-6 h-6 text-violet-400" />, hoverBorder: 'hover:border-violet-500/50', bg: 'bg-violet-500/10', hoverBg: 'group-hover:bg-violet-500/20' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">

      {/* ── JSON-LD Schema ── */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes blob-float-1 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-22px) scale(1.04); }
        }
        @keyframes blob-float-2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-14px) scale(1.03); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes fade-in-cta {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .blob-1 { animation: blob-float-1 7s ease-in-out infinite; }
        .blob-2 { animation: blob-float-2 9s ease-in-out infinite 1.5s; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .floating-cta-enter { animation: fade-in-cta 0.4s ease forwards; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 28s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      {/* ── Scroll progress bar ── */}
      <div
        className="fixed top-0 left-0 z-[60] h-[3px] bg-gradient-to-r from-violet-400 to-violet-500 pointer-events-none"
        style={{ width: `${scrollProgress}%`, transition: 'width 0.12s ease' }}
      />

      {/* ── Cursor glow (desktop only) ── */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-20 hidden lg:block rounded-full"
        style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', opacity: 0, transition: 'opacity 0.5s ease', top: -200, left: -200 }}
      />

      <LocalSEOHead language={language} />

      {/* ── Floating CTA ── */}
      {showFloatingCTA && (
        <div className="fixed bottom-6 right-6 z-50 floating-cta-enter">
          <a href="#contact" className="flex items-center gap-2 px-5 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-full shadow-2xl shadow-violet-500/30 transition-all hover:scale-105 text-sm animate-bounce-slow">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            {language === 'hu' ? 'Ingyenes konzultáció' : 'Free Consultation'}
          </a>
        </div>
      )}

      {/* ── Header ── */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 shadow-xl shadow-black/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white tracking-tight">Nagy Levi <span className="text-violet-400">Marketing</span></div>
            <nav className="hidden md:flex items-center space-x-8">
              {([['services','01'],['results','02'],['about','03'],['contact','04']] as const).map(([key, num]) => (
                <a key={key} href={`#${key}`} className="group flex items-baseline gap-1.5 text-slate-400 hover:text-white transition-colors text-sm">
                  <span className="text-violet-500/60 text-[10px] font-bold group-hover:text-violet-400 transition-colors">{num}</span>
                  {t.nav[key]}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4 text-sm">
                <a href="tel:+36706339977" className="flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /><span>+36 70 633 9977</span>
                </a>
              </div>
              <a href="https://www.instagram.com/nagylevi_marketing/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61555347550023" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <button onClick={toggleLanguage} className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors text-sm">
                <span>{language === 'hu' ? '🇺🇸' : '🇭🇺'}</span>
                <span className="font-medium">{language === 'hu' ? 'EN' : 'HU'}</span>
              </button>
              <a href="#contact" className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-violet-500/25">
                {language === 'hu' ? 'Kapcsolat' : 'Contact'}<ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none blob-1" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/6 rounded-full blur-3xl pointer-events-none blob-2" />
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)',backgroundSize:'60px 60px'}} />
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-24">
          <div className="max-w-3xl">
            <div style={fadeUp(mounted, 0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />{t.hero.badge}
            </div>
            <h1 style={fadeUp(mounted, 100)} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 tracking-tight">{t.hero.title}</h1>
            <h1 style={fadeUp(mounted, 200)} className="text-4xl md:text-5xl lg:text-6xl font-black text-violet-400 leading-tight mb-6 tracking-tight">{t.hero.titleHighlight}</h1>
            <p style={fadeUp(mounted, 300)} className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">{t.hero.subtitle}</p>
            <div style={fadeUp(mounted, 400)} className="flex flex-col gap-3 mb-12 max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={language === 'hu' ? '/fizetett-hirdetesek' : '/en/paid-ads'}
                  className="group inline-flex items-center justify-center px-6 py-4 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg transition-all shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02] text-sm sm:text-base"
                >
                  <span className="mr-2">📣</span>{t.hero.ctaAds}<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
                <a
                  href={language === 'hu' ? '/ai-automatizalas' : '/en/ai-automation'}
                  className="group inline-flex items-center justify-center px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-violet-500/50 text-white font-semibold rounded-lg transition-all hover:scale-[1.02] text-sm sm:text-base"
                >
                  <span className="mr-2">🤖</span>{t.hero.ctaAI}<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </div>
              <p className="text-slate-500 text-sm">{t.hero.ctaSub}</p>
            </div>
            {/* ── Social proof row ── */}
            <div style={fadeUp(mounted, 500)} className="pt-8 border-t border-slate-700/50 space-y-4 max-w-xl">

              {/* Client avatars + trust line */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    'https://res.cloudinary.com/dduros3xw/image/upload/v1754251170/Zsuzsa_ceqg0n.png',
                    'https://res.cloudinary.com/dduros3xw/image/upload/v1754251142/Denti_sctzvf.png',
                    'https://res.cloudinary.com/dduros3xw/image/upload/v1754251162/Krono_rtau8a.png',
                    'https://res.cloudinary.com/dduros3xw/image/upload/v1754251206/be-3_s_pkesu2.png',
                  ].map((src, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden flex-shrink-0">
                      <img src={src} alt="client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-violet-400 text-violet-400" />)}
                  </div>
                  <p className="text-slate-400 text-xs">
                    {language === 'hu' ? '20+ vállalkozás bízik bennünk Magyarországon' : '20+ businesses trust us in Hungary'}
                  </p>
                </div>
              </div>

              {/* Guarantee badge + stat */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/25 rounded-full">
                  <Shield className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                  <span className="text-violet-300 text-xs font-semibold">
                    {language === 'hu' ? '30 napos garancia vagy visszaadjuk a pénzed' : '30-day guarantee or your money back'}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                  <span className="text-slate-300 text-xs font-semibold">
                    {language === 'hu' ? '3× megtérülés minden kampánynál' : '3× ROI on every campaign'}
                  </span>
                </div>
              </div>

              {/* Service pills */}
              <div className="flex flex-wrap gap-2">
                {(language === 'hu'
                  ? ['Facebook Ads', 'Google Ads', 'TikTok Ads', 'SEO', 'Weboldal']
                  : ['Facebook Ads', 'Google Ads', 'TikTok Ads', 'SEO', 'Website']
                ).map(pill => (
                  <span key={pill} className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs text-slate-400 hover:text-violet-400 hover:border-violet-500/40 transition-colors cursor-default">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="overflow-hidden bg-slate-950 border-y border-white/5 py-4 select-none">
        <div className="marquee-track flex whitespace-nowrap w-max gap-0">
          {[0, 1].map(copy => (
            <div key={copy} className="flex items-center gap-0">
              {(language === 'hu'
                ? ['Több ügyfél', 'Facebook Ads', 'Több bevétel', 'Google Ads', '30 napos garancia', 'TikTok Ads', 'Garantált eredmény', 'SEO', '3× megtérülés', 'Weboldal készítés']
                : ['More Clients', 'Facebook Ads', 'More Revenue', 'Google Ads', '30-Day Guarantee', 'TikTok Ads', 'Guaranteed Results', 'SEO', '3× ROI', 'Website Design']
              ).map((word, i) => (
                <span key={i} className="flex items-center">
                  <span className="text-sm font-semibold tracking-wide px-6 text-slate-400 hover:text-violet-400 transition-colors">{word}</span>
                  <span className="text-violet-500/40 text-lg">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Client Logos ── */}
      <section ref={logosRef} className="py-16 bg-slate-800/50 border-y border-slate-700/40">
        <div className="container mx-auto px-4 md:px-6">
          <p style={fadeUp(logosInView)} className="text-center text-slate-500 text-xs font-medium uppercase tracking-widest mb-8">{t.clients.title}</p>
          <div className="max-w-5xl mx-auto" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4 items-center">
            {[
              { src: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251206/be-3_s_pkesu2.png', alt: 'BE-3' },
              { src: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251142/Denti_sctzvf.png', alt: 'Denti' },
              { src: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251162/Krono_rtau8a.png', alt: 'Krono' },
              { src: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251142/Auto%CC%81_Motor_okswoo.png', alt: 'Autó Motor' },
              { src: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251170/Zsuzsa_ceqg0n.png', alt: 'Zsuzsa' },
              { src: 'https://res.cloudinary.com/dduros3xw/image/upload/v1773170825/Ke%CC%81pernyo%CC%8Bfoto%CC%81_2026-03-10_-_20.17.55_nyfny7.png', alt: 'Client' },
              { src: 'https://res.cloudinary.com/dduros3xw/image/upload/v1773170884/Ke%CC%81pernyo%CC%8Bfoto%CC%81_2026-03-10_-_20.27.52_axkwlh.png', alt: 'Client' },
            ].map((logo, i) => (
              <div key={i} style={fadeUp(logosInView, i * 60)} className="bg-white/5 hover:bg-white/10 transition-colors p-3 rounded-lg flex items-center justify-center h-16">
                <img src={logo.src} alt={logo.alt} className="max-h-10 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ── SEO Strip ── */}
      <section ref={seoRef} className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 style={fadeUp(seoInView)} className="text-2xl md:text-3xl font-bold text-white mb-4">{t.seo.title}</h2>
            <p style={fadeUp(seoInView, 100)} className="text-lg text-slate-300 mb-6">
              {language === 'hu'
                ? <span>Segítek neked a Google első oldalán rangsorolni a <span className="bg-violet-500 text-white px-2 py-0.5 rounded font-semibold">{t.seo.highlight}</span> vagy vissza kapod a pénzed</span>
                : <span>I help you rank in the <span className="bg-violet-500 text-white px-2 py-0.5 rounded font-semibold">{t.seo.highlight}</span> on Google's first page or you get your money back</span>
              }
            </p>
            <div style={fadeUp(seoInView, 200)}>
              <a href="#contact" className="inline-flex items-center px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-violet-500/25">
                {t.seo.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" ref={servRef} className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div style={fadeUp(servInView)} className="text-center mb-14">
            <p className="text-violet-400/40 text-6xl font-black tracking-tighter leading-none mb-2 select-none">01</p>
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">{language === 'hu' ? 'Amit kínálunk' : 'What we offer'}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.services.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.services.items.map((item, i) => (
              <div key={i} style={fadeUp(servInView, 100 + i * 80)} className={`relative bg-slate-800/60 p-7 rounded-2xl border border-slate-700/60 ${serviceIcons[i].hoverBorder} transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/5`}>
                <div className={`w-12 h-12 ${serviceIcons[i].bg} ${serviceIcons[i].hoverBg} rounded-xl flex items-center justify-center mb-5 transition-colors`}>{serviceIcons[i].icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div style={fadeUp(servInView, 600)} className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-violet-500/10 to-slate-700/30 border border-violet-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">{language === 'hu' ? '14 nap alatt elkészítjük a saját, profi weboldalad.' : 'We create your professional website in 14 days.'}</h3>
            <p className="text-slate-400 text-sm mb-5">{language === 'hu' ? 'Konverzióra optimalizált oldal, ami több bevételt generál.' : 'Conversion-optimized site that generates more revenue.'}</p>
            <button onClick={() => setShowPortfolioModal(true)} className="inline-flex items-center px-5 py-2.5 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 hover:text-teal-200 border border-violet-500/30 rounded-lg transition-all text-sm font-medium gap-2">
              {language === 'hu' ? 'Nézd meg a portfóliónkat' : 'See our portfolio'}<ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section ref={ctaRef} className="py-16 bg-gradient-to-r from-violet-600 to-violet-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)',backgroundSize:'40px 40px'}} />
        <div style={fadeUp(ctaInView)} className="relative container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t.midCTA.title}</h2>
          <p className="text-teal-100 mb-6 text-lg">{t.midCTA.subtitle}</p>
          <a href="#contact" className="inline-flex items-center px-8 py-4 bg-white text-violet-600 font-bold rounded-lg hover:bg-teal-50 transition-all shadow-xl text-lg">{t.midCTA.cta}</a>
        </div>
      </section>

      {/* ── Oversized Proof Stats ── */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-slate-600 text-xs font-semibold uppercase tracking-widest mb-16">
            {language === 'hu' ? 'Valós eredmények, valós ügyfelek' : 'Real results, real clients'}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-800">
            {(language === 'hu'
              ? [
                  { num: '181+', label: 'megkeresés', sub: 'az első hónapban', accent: false },
                  { num: '3.5×', label: 'több eredmény', sub: 'az előző kampányhoz képest', accent: true },
                  { num: '730', label: 'regisztráció', sub: '19 nap alatt', accent: false },
                  { num: '40%', label: 'megtakarítás', sub: 'ügyfelszerzési költségben', accent: false },
                ]
              : [
                  { num: '181+', label: 'leads', sub: 'in the first month', accent: false },
                  { num: '3.5×', label: 'more results', sub: 'vs. previous campaigns', accent: true },
                  { num: '730', label: 'registrations', sub: 'in 19 days', accent: false },
                  { num: '40%', label: 'cost savings', sub: 'on client acquisition', accent: false },
                ]
            ).map((stat, i) => (
              <div key={i} className={`flex flex-col items-center justify-center py-12 px-6 text-center ${stat.accent ? 'bg-violet-500/8' : 'bg-slate-900'}`}>
                <div className={`text-5xl md:text-7xl font-black tracking-tighter mb-2 ${stat.accent ? 'text-violet-400' : 'text-white'}`}>
                  {stat.num}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500 leading-snug">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section ref={whyRef} className="py-20 bg-slate-700">
        <div className="container mx-auto px-4 md:px-6">
          <div style={fadeUp(whyInView)} className="text-center mb-14">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">{language === 'hu' ? 'A különbség' : 'The difference'}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t.why.title} <span className="text-violet-400">Nagy Levi Marketing</span> <span className="font-light italic text-slate-300">{t.why.subtitle}</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-6">
            <div style={slideLeft(whyInView, 100)} className="bg-red-950/30 border border-red-500/15 rounded-2xl p-8">
              <h3 className="text-base font-semibold text-red-400 mb-6 flex items-center gap-2">
                <span className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-xs">✕</span>{t.why.otherAgencies}
              </h3>
              <div className="space-y-4">
                {t.why.otherItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <p className="text-slate-400 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={slideRight(whyInView, 200)} className="bg-teal-950/40 border border-violet-500/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full -translate-y-8 translate-x-8" />
              <h3 className="text-base font-semibold text-violet-400 mb-6 flex items-center gap-2">
                <span className="w-5 h-5 bg-violet-500/20 rounded-full flex items-center justify-center text-violet-400 text-xs">✓</span>{t.why.us}
              </h3>
              <div className="space-y-4">
                {t.why.ourItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-white font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section ref={testRef} className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div style={fadeUp(testInView)} className="text-center mb-14">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">{language === 'hu' ? 'Vélemények' : 'Testimonials'}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.testimonials.title}</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[0, 1, 2].map((offset) => {
              const item = t.testimonials.items[(activeTestimonial + offset) % t.testimonials.items.length];
              return (
                <div key={`${activeTestimonial}-${offset}`} className="animate-fade-in">
                  <div className={`bg-slate-700/40 p-7 rounded-2xl border transition-all duration-500 h-full flex flex-col ${offset === 0 ? 'border-violet-500/40 shadow-lg shadow-violet-500/5 -translate-y-1' : 'border-slate-600/50'}`}>
                    <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">"{item.text}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-600/50">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-teal-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{item.initials}</div>
                      <div>
                        <p className="font-semibold text-white text-sm">{item.author}</p>
                        <p className="text-violet-400 text-xs">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {t.testimonials.items.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'bg-violet-400 w-6' : 'bg-slate-600 w-2'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section id="results" ref={resRef} className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div style={fadeUp(resInView)} className="text-center mb-14">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">{language === 'hu' ? 'Bizonyított eredmények' : 'Proven results'}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{language === 'hu' ? 'Ügyfél Eredmények' : 'Client Results'}</h2>
            <p className="text-slate-400 max-w-xl mx-auto">{language === 'hu' ? 'Nézd meg, milyen eredményeket értünk el ügyfeleinknek' : 'See the results we achieved for our clients'}</p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              { logo: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251170/Zsuzsa_ceqg0n.png', name: 'Magyar Zsuzsa Sminktetoválás', tag: language === 'hu' ? 'FB hirdetés + landing oldal' : 'FB Ads + Landing Page', stat: '181', statLabel: language === 'hu' ? 'megkeresés az első hónapban' : 'leads in the first month', statSub: language === 'hu' ? '3.5× több eredmény' : '3.5× more results', statNum: 181, text: language === 'hu' ? 'Zsuzsa több marketingcsapattal is dolgozott, akik nagy eredményeket ígértek neki, viszont egyik se hozta a várt eredményt. Miután elkezdtem neki futtatni a hirdetéseket, már az első hónapban 181 megkeresést kapott, amelyből jelentős részük ügyfél is lett.' : 'Zsuzsa worked with several marketing teams that promised big results, but none delivered. After launching the campaigns, 181 leads came in the first month alone, with many becoming clients.', img: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754390996/FB_Ads_Leads_nlvuvh.png' },
              { logo: 'https://res.cloudinary.com/dduros3xw/image/upload/v1771584388/Ke%CC%81pernyo%CC%8Bfoto%CC%81_2025-12-10_-_20.28.03_kznufm.png', name: 'Route 11 Autósiskola', tag: language === 'hu' ? 'Google hirdetés' : 'Google Ads', stat: '#1', statLabel: language === 'hu' ? 'teljesítő autósiskola lett' : 'performing driving school', statSub: language === 'hu' ? 'Legjobb a 3 közül' : 'Best of 3 schools', statNum: null, text: language === 'hu' ? 'Balázsnak 3 autósiskolája is van, amiből az egyik gyengébben teljesített. Miután elkezdtem futtatni a Google-hirdetéseket, már az első hónapban jelentősen több megkeresés érkezett, és több hónap után már túlszárnyalta a legjobban teljesítő autósiskoláját.' : "Balázs has 3 driving schools, one underperforming. After launching Google Ads, significantly more inquiries came in the first month, and it eventually surpassed his best-performing school.", img: 'https://res.cloudinary.com/dduros3xw/image/upload/v1771582094/Route_11_Results_fuormi.png' },
              { logo: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251142/Denti_sctzvf.png', name: 'Denti Implant Center', tag: language === 'hu' ? 'Google hirdetés + új weboldal + landing oldal' : 'Google Ads + New Website + Landing Page', stat: '53', statLabel: language === 'hu' ? 'űrlapos megkeresés az 1. hónapban' : 'form leads in month 1', statSub: language === 'hu' ? 'Több millió forint bevétel' : 'Millions in revenue', statNum: 53, text: language === 'hu' ? 'A Denti Implant Center elavult weboldala a megkeresések csökkenésében volt látható. Felépítettünk egy teljesen új, modern weboldalt és elkezdtünk futtatni Google hirdetéseket — már az első hónap után 53 megkeresést szereztünk.' : "Denti's outdated website was causing declining inquiries. We built a new modern website and launched Google Ads — getting 53 form submissions in the first month, resulting in millions in revenue.", img: 'https://res.cloudinary.com/dduros3xw/image/upload/v1771684673/Ke%CC%81pernyo%CC%8Bfoto%CC%81_2026-02-21_-_15.37.08_glrzsg.png' },
              { logo: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251162/Krono_rtau8a.png', name: 'Kronobiológia', tag: language === 'hu' ? 'Facebook hirdetés — online webinár' : 'Facebook Ads — Online Webinar', stat: '730', statLabel: language === 'hu' ? 'regisztráló 19 nap alatt' : 'registrations in 19 days', statSub: language === 'hu' ? 'Cél 250-300 volt' : 'Goal was 250-300', statNum: 730, text: language === 'hu' ? 'Zsuzsi és Ildi online webinárra készültek, és legfeljebb 250-300 jelentkezőre számítottak. A 19 napig tartó kampány összesen 730 jelentkezőt hozott, ami több mint 3-szor annyi volt, mint amire számítottak.' : 'Zsuzsi and Ildi prepared an online webinar and hoped for 250-300 registrations. The 19-day campaign brought 730 registrations — more than 3 times their goal.', img: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251201/Webinar_Ads_uevalc.png' },
              { logo: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251206/be-3_s_pkesu2.png', name: 'Bepretty Studio', tag: language === 'hu' ? 'Facebook hirdetések' : 'Facebook Ads', stat: '235', statLabel: language === 'hu' ? 'érdeklődő az 1. hónapban' : 'leads in month 1', statSub: language === 'hu' ? 'Sok visszatérő vendég' : 'Many returning clients', statNum: 235, text: language === 'hu' ? 'Erika lézeres szőrtelenítésre keresett ügyfeleket, de az előző marketingcsapat alig hozott eredményt. Egy alapos piackutatás után az első hónap végére 235 érdeklődőt sikerült szerezni, amelyből jelentős része visszatérő vendég lett.' : "Erika needed clients for laser hair removal but her previous marketing team barely delivered. After thorough market research, we got 235 inquiries in the first month, many becoming returning clients.", img: 'https://res.cloudinary.com/dduros3xw/image/upload/v1754251188/Aesthetic_Clinic_FB_Ads_xwgn1w.png' },
            ].map((client, i) => (
              <div key={i} style={fadeUp(resInView, i * 80)} className="bg-slate-800/60 rounded-2xl border border-slate-700/50 hover:border-violet-500/30 transition-all overflow-hidden group">
                <div className="p-7 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4">
                      <img src={client.logo} alt={client.name} className="w-14 h-14 object-contain bg-white/10 rounded-xl p-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{client.name}</h3>
                        <span className="inline-flex items-center px-2.5 py-1 bg-violet-500/10 text-violet-400 text-xs rounded-full border border-violet-500/20 mt-1">{client.tag}</span>
                      </div>
                    </div>
                    <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl px-5 py-3 text-center flex-shrink-0">
                      <div className="text-3xl font-bold text-violet-400">{client.statNum !== null ? <CountUp end={client.statNum} active={resInView} /> : client.stat}</div>
                      <div className="text-xs text-slate-400 mt-0.5 max-w-[120px]">{client.statLabel}</div>
                      <div className="text-xs text-violet-500 font-medium mt-0.5">{client.statSub}</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{client.text}</p>
                  <img src={client.img} alt={`${client.name} results`} className="w-full rounded-xl border border-slate-700/50 group-hover:border-violet-500/20 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" ref={aboutRef} className="relative overflow-hidden bg-slate-900" style={{ minHeight: '580px' }}>
        {/* Photo — right side, diagonal fade into bg */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-3/5"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dduros3xw/image/upload/v1779627671/IMG_9853_wy8bwq.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            WebkitMaskImage: 'linear-gradient(115deg, transparent 28%, black 58%)',
            maskImage: 'linear-gradient(115deg, transparent 28%, black 58%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-24">
          <div className="max-w-lg" style={slideLeft(aboutInView)}>
            <p className="text-violet-400/40 text-6xl font-black tracking-tighter leading-none mb-2 select-none">03</p>
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
              {language === 'hu' ? 'A csapat mögött' : 'Behind the team'}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">{t.about.title}</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">{t.about.text}</p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg transition-all gap-2 shadow-lg shadow-violet-500/20"
            >
              {language === 'hu' ? 'Vedd fel a kapcsolatot' : 'Get in touch'}<ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">{language === 'hu' ? 'Gyakori kérdések' : 'FAQ'}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{language === 'hu' ? 'Amit a legtöbben kérdeznek' : 'What people ask most'}</h2>
            </div>
            <div className="space-y-4">
              {(language === 'hu' ? [
                { q: 'Mennyi kerül egy Facebook hirdetés Budapesten?', a: 'A Facebook hirdetések ára Magyarországon általában havi 50 000–500 000 Ft között mozog a hirdetési büdzsére vonatkozóan. A Nagy Levi Marketingnél átlátható árazással és 30 napos garanciával dolgozunk – ha 30 napon belül nem látod az eredményt, visszaadjuk a kezelési díjat.' },
                { q: 'Mennyi idő alatt látok eredményt a Google Ads hirdetéseimből?', a: 'Google Ads kampányoknál általában 1–2 héten belül megjelennek az első megkeresések. SEO esetén 90 napon belül garantáljuk a TOP 10 helyezést Google-n, vagy visszaadjuk a pénzed.' },
                { q: 'Mit jelent a 30 napos garancia?', a: 'Ha 30 napon belül nem látod a megbeszélt eredményeket a kampányodban, visszatérítjük a teljes kezelési díjat. Ez a garancia minden új ügyfelünkre vonatkozik, kötelezettség nélkül.' },
                { q: 'Milyen vállalkozásoknak ajánlott a Nagy Levi Marketing?', a: 'Főként helyi szolgáltatóknak segítünk: szépségszalonoknak, fogászatoknak, autósiskoláknak, fitnesztermeknek és online vállalkozásoknak. Ügyfeleinknél az első hónapban átlagosan 181 megkeresést értünk el.' },
              ] : [
                { q: 'How much does Facebook advertising cost in Budapest?', a: "Facebook advertising in Hungary typically costs between 50,000–500,000 HUF per month in ad spend. At Nagy Levi Marketing we offer transparent pricing with a 30-day guarantee — if you don't see results within 30 days, we refund the management fee." },
                { q: 'How quickly will I see results from Google Ads?', a: 'Google Ads campaigns typically show initial inquiries within 1–2 weeks. For SEO, we guarantee a TOP 10 Google ranking within 90 days, or your money back.' },
                { q: 'What does the 30-day guarantee mean?', a: "If you don't see the agreed results within 30 days of your campaign launch, we refund the full management fee. This guarantee applies to all new clients with no strings attached." },
                { q: 'What types of businesses does Nagy Levi Marketing work with?', a: 'We primarily help local service providers: beauty salons, dental clinics, driving schools, gyms, and online businesses. Our clients average 181 leads in their first month.' },
              ]).map((item, i) => (
                <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
                  <h3 className="font-bold text-white mb-3">{item.q}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" ref={contactRef} className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div style={fadeUp(contactInView)} className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3">{language === 'hu' ? 'Lépj velünk kapcsolatba' : 'Get in touch'}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t.contact.title}</h2>
              <p className="text-xl text-slate-300">{t.contact.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-4 mt-5">
                {[
                  { icon: <Clock className="w-3.5 h-3.5" />, label: t.contact.trustItems[0] },
                  { icon: <CheckCircle className="w-3.5 h-3.5" />, label: t.contact.trustItems[1] },
                  { icon: <Shield className="w-3.5 h-3.5" />, label: t.contact.trustItems[2] },
                ].map((trust, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-violet-400 text-xs font-medium bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20">
                    {trust.icon} {trust.label}
                  </div>
                ))}
              </div>
            </div>
            <form className="space-y-5 bg-slate-700/30 border border-slate-600/50 rounded-2xl p-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">{t.contact.form.name}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">{t.contact.form.email}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">{t.contact.form.phone}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">{t.contact.form.website}</label>
                  <input type="url" name="website" value={formData.website} onChange={handleInputChange} placeholder="example.com" className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wide">{t.contact.form.runningAds}</label>
                <div className="flex gap-4">
                  {(['yes', 'no'] as const).map(val => (
                    <label key={val} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer transition-all text-sm ${formData.runningAds === val ? 'border-violet-500 bg-violet-500/10 text-white' : 'border-slate-600 text-slate-400 hover:border-slate-500'}`}>
                      <input type="radio" name="runningAds" value={val} checked={formData.runningAds === val} onChange={handleInputChange} className="hidden" />
                      {val === 'yes' ? t.contact.form.runningAdsYes : t.contact.form.runningAdsNo}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">{t.contact.form.message}</label>
                <textarea rows={5} name="message" value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm resize-none" required />
              </div>
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  {language === 'hu' ? 'Köszönjük! Az üzeneted elküldésre került. Hamarosan felveszük veled a kapcsolatot.' : 'Thank you! Your message has been sent. We will contact you soon.'}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                  {language === 'hu' ? 'Hiba történt. Kérjük, próbálja újra.' : 'An error occurred. Please try again.'}
                </div>
              )}
              <button type="submit" disabled={isSubmitting} className="w-full bg-violet-500 hover:bg-violet-400 disabled:bg-violet-500/40 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all hover:shadow-xl hover:shadow-violet-500/20 text-base">
                {isSubmitting ? (language === 'hu' ? 'Küldés...' : 'Sending...') : t.contact.form.submit}
              </button>
              <p className="text-center text-slate-500 text-xs">{language === 'hu' ? 'Adataid biztonságban vannak. Nem küldünk spamt.' : 'Your data is safe. We do not send spam.'}</p>
            </form>
          </div>
        </div>
      </section>

      {/* ── Portfolio Modal ── */}
      {showPortfolioModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">{language === 'hu' ? 'Az előző munkáink' : 'Our Previous Works'}</h3>
              <button onClick={() => setShowPortfolioModal(false)} className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-3">
              {t.guarantee.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-slate-700/50 border border-slate-600 hover:border-violet-500/50 rounded-xl text-violet-400 hover:text-violet-300 transition-all group">
                  <span className="font-medium text-sm">{link.text}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-xl font-bold text-white mb-1">Nagy Levi <span className="text-violet-400">Marketing</span></div>
                <p className="text-slate-500 text-sm mb-4">{language === 'hu' ? 'Több ügyfél. Több bevétel. Garantáltan.' : 'More Clients. More Revenue. Guaranteed.'}</p>
                <div className="flex gap-4">
                  <a href="tel:+36706339977" className="text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-1.5"><Phone className="w-4 h-4" /> +36 70 633 9977</a>
                </div>
                <div className="flex gap-4 mt-2">
                  <a href="mailto:nlevi@levinagymarketing.com" className="text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-1.5"><Mail className="w-4 h-4" /> nlevi@levinagymarketing.com</a>
                </div>
                <div className="flex gap-4 mt-2">
                  <a href="https://www.instagram.com/nagylevi_marketing/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="https://www.facebook.com/profile.php?id=61555347550023" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">{language === 'hu' ? 'Szolgáltatások' : 'Services'}</h4>
                <ul className="space-y-2">
                  <li><a href={language === 'hu' ? '/fizetett-hirdetesek' : '/en/paid-ads'} className="text-slate-500 hover:text-violet-400 transition-colors text-sm">{language === 'hu' ? 'Fizetett Hirdetések' : 'Paid Ads'}</a></li>
                  <li><a href={language === 'hu' ? '/ai-automatizalas' : '/en/ai-automation'} className="text-slate-500 hover:text-violet-400 transition-colors text-sm">{language === 'hu' ? 'AI Automatizálás' : 'AI Automation'}</a></li>
                  <li><a href="/rolunk" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">{language === 'hu' ? 'Rólunk' : 'About'}</a></li>
                  <li><a href={language === 'hu' ? '/blog' : '/en/blog'} className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">{language === 'hu' ? 'Iparágak' : 'Industries'}</h4>
                <ul className="space-y-2">
                  <li><a href="/szepsegszalon-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Szépségszalon Marketing</a></li>
                  <li><a href="/fogorvos-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Fogorvos Marketing</a></li>
                  <li><a href="/autoskola-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Autósiskola Marketing</a></li>
                  <li><a href="/webaruhaz-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Webáruház Marketing</a></li>
                  <li><a href="/edzoterm-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Edzőterem Marketing</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-600 text-xs">© {new Date().getFullYear()} Nagy Levi Marketing. {language === 'hu' ? 'Minden jog fenntartva.' : 'All rights reserved.'}</p>
              <button onClick={() => setShowPrivacyPolicy(true)} className="text-xs text-slate-600 hover:text-slate-500 transition-colors underline">
                {language === 'hu' ? 'Adatvédelmi Nyilatkozat' : 'Privacy Policy'}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
