import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { ViteReactSSG } from "vite-react-ssg";
import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, X, CheckCircle, Download, Mail, Phone, Instagram, ArrowRight, Star, Shield, TrendingUp, ChevronRight, Clock, Facebook, Search, MessageCircle, Globe, Sparkles, Heading1, Code2, Target, Gauge, Loader2, Lock, Check, CalendarCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const LocalSEOHead = ({ language }) => {
  const seoData = {
    hu: {
      title: "Nagy Levi Marketing - Több ügyfél. Több bevétel. Garantáltan. | Budapest",
      description: "Performance marketing ügynökség Budapesten. Facebook hirdetések, Google Ads, SEO szolgáltatások helyi vállalkozásoknak. 14 napos garancia.",
      keywords: "marketing ügynökség Budapest, Facebook hirdetések, Google Ads, SEO Budapest, weboldal készítés, performance marketing",
      businessName: "Nagy Levi Marketing"
    },
    en: {
      title: "Levi Nagy Marketing - More Clients. More Revenue. Guaranteed. | Budapest",
      description: "Performance marketing agency in Budapest. Facebook ads, Google Ads, SEO services for local businesses. 14-day guarantee.",
      keywords: "marketing agency Budapest, Facebook ads, Google Ads, SEO Budapest, website design, performance marketing",
      businessName: "Levi Nagy Marketing"
    }
  };
  const data = seoData[language];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("title", { children: data.title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: data.description }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: data.keywords }),
    /* @__PURE__ */ jsx("meta", { name: "author", content: data.businessName }),
    /* @__PURE__ */ jsx("meta", { name: "geo.region", content: "HU-BU" }),
    /* @__PURE__ */ jsx("meta", { name: "geo.placename", content: "Budapest" }),
    /* @__PURE__ */ jsx("meta", { name: "geo.position", content: "47.4979;19.0402" }),
    /* @__PURE__ */ jsx("meta", { name: "ICBM", content: "47.4979, 19.0402" }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "business.business" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: data.title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: data.description }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://nagylevimaketing.hu" }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: data.businessName }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: language === "hu" ? "hu_HU" : "en_US" }),
    /* @__PURE__ */ jsx("meta", { property: "business:contact_data:street_address", content: "Példa utca 123" }),
    /* @__PURE__ */ jsx("meta", { property: "business:contact_data:locality", content: "Budapest" }),
    /* @__PURE__ */ jsx("meta", { property: "business:contact_data:postal_code", content: "1234" }),
    /* @__PURE__ */ jsx("meta", { property: "business:contact_data:country_name", content: "Hungary" }),
    /* @__PURE__ */ jsx("meta", { property: "business:contact_data:phone_number", content: "+36-30-123-4567" }),
    /* @__PURE__ */ jsx("meta", { property: "business:contact_data:email", content: "info@nagylevimaketing.hu" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: data.title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: data.description }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: `https://nagylevimaketing.hu${language === "en" ? "/en" : ""}` }),
    /* @__PURE__ */ jsx("link", { rel: "alternate", hrefLang: "hu", href: "https://nagylevimaketing.hu" }),
    /* @__PURE__ */ jsx("link", { rel: "alternate", hrefLang: "en", href: "https://nagylevimaketing.hu/en" }),
    /* @__PURE__ */ jsx("link", { rel: "alternate", hrefLang: "x-default", href: "https://nagylevimaketing.hu" })
  ] });
};
const PrivacyPolicy = ({ language, onBack }) => {
  const content = {
    hu: {
      title: "Adatvédelmi Nyilatkozat",
      backButton: "Vissza a főoldalra"
    },
    en: {
      title: "Privacy Policy",
      backButton: "Back to homepage"
    }
  };
  const t2 = content[language];
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-slate-900 py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6 max-w-4xl", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: onBack,
        className: "flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors mb-8",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: t2.backButton })
        ]
      }
    ),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-8", children: t2.title }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 p-8 rounded-xl text-white space-y-6", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4 text-teal-400", children: "ADATKEZELÉSI TÁJÉKOZTATÓ RÉSZLET: B2B OUTREACH" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3", children: "1. Az Adatkezelő adatai" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-slate-300", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Név:" }),
            " Nagy Levente Attila E.V."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Székhely:" }),
            " 2095 Pilisszántó, Tanya utca 34."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Adószám:" }),
            " 90377749-1-33"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Kapcsolati e-mail:" }),
            " nlevi@levinagymarketing.com"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Weboldal:" }),
            " levinagymarketing.com"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3", children: "2. Az adatkezelés részletei" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Az adatkezelés célja:" }),
            " Közvetlen üzletszerzés (direct marketing), szakmai kapcsolatépítés, valamint a Nagy Levente Attila E.V. által kínált marketing szolgáltatások bemutatása potenciális üzleti partnerek számára."
          ] }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "A kezelt adatok köre:" }),
            " Név, e-mail cím, beosztás (amennyiben elérhető)."
          ] }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Az adatkezelés jogalapja:" }),
            " Az Adatkezelő jogos érdeke [GDPR 6. cikk (1) bek. f) pont]."
          ] }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "A jogos érdek bemutatása:" }),
            " Az Adatkezelőnek alapvető gazdasági érdeke fűződik szolgáltatásai népszerűsítéséhez. Mivel a megkeresés kizárólag üzleti jellegű (B2B), és a címzett szakmai tevékenységéhez szorosan kapcsolódó marketing megoldásokra vonatkozik, az adatkezelés nem korlátozza aránytalanul az érintett magánszféráját. A címzett észszerűen számíthat arra, hogy üzleti minőségében ilyen jellegű megkereséseket kap."
          ] }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Az adatok forrása:" }),
            " Az adatok kizárólag nyilvánosan elérhető forrásból, az érintett által képviselt gazdasági társaság hivatalos weboldaláról származnak."
          ] }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Az adatkezelés időtartama:" }),
            " A tiltakozásig (leiratkozásig), vagy a kapcsolatfelvételtől számított 1 évig, amennyiben nem jön létre üzleti kapcsolat."
          ] }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Adattovábbítás:" }),
            " Az adatokat harmadik félnek nem adjuk át, kivéve az e-mail kiküldéséhez használt technikai szolgáltatót (adatfeldolgozót)."
          ] }) })
        ] })
      ] })
    ] })
  ] }) });
};
const BASE_URL$8 = "https://levinagymarketing.com";
const copy$2 = {
  hu: {
    badge: "🎁 Ingyenes útmutató",
    title: "Szerezz több ügyfelet Meta hirdetésekkel",
    subtitle: "12 oldalas útmutató: miért a Meta hirdetések a legnagyobb marketing lehetőség – és hogyan használd ki.",
    bullets: [
      "Miért éri el hirdetésed pontosan a megfelelő embereket",
      "A legfontosabb hibák, amik elvéreznek a Facebook-on",
      "Konkrét stratégia, amivel azonnal elindulhatsz"
    ],
    namePlaceholder: "A neved...",
    placeholder: "Az e-mail címed...",
    cta: "Letöltöm díjmentesen →",
    sending: "Küldés...",
    successTitle: (name) => `✅ Megvan, ${name}! Ellenőrizd az e-mailedet.`,
    successSubtitle: "Az útmutató letöltése hamarosan elindul, és e-mailen is elküldjük.",
    skip: "Nem szeretnék több ügyfelet",
    pdfUrl: `${BASE_URL$8}/leadmagnet-hu.pdf`
  },
  en: {
    badge: "🎁 Free guide",
    title: "Get more clients with Meta Ads",
    subtitle: "6-page guide: why Meta Ads are the biggest marketing opportunity — and how to use them.",
    bullets: [
      "Why your ads can reach exactly the right people",
      "The biggest mistakes killing Facebook campaigns",
      "A concrete strategy you can start using today"
    ],
    namePlaceholder: "Your name...",
    placeholder: "Your email address...",
    cta: "Download for free →",
    sending: "Sending...",
    successTitle: (name) => `✅ Got it, ${name}! Check your inbox.`,
    successSubtitle: "Your guide will download now and we'll also send it to your email.",
    skip: "No thanks",
    pdfUrl: `${BASE_URL$8}/leadmagnet-us.pdf`
  }
};
const LeadMagnetPopup = ({ language, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const t2 = copy$2[language];
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg(language === "hu" ? "Kérjük, add meg a neved." : "Please enter your name.");
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg(language === "hu" ? "Kérjük, adj meg egy érvényes e-mail címet." : "Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setStatus("sending");
    const link = document.createElement("a");
    link.href = t2.pdfUrl;
    link.download = language === "hu" ? "meta-hirdetesek-utmutato.pdf" : "meta-ads-guide.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    try {
      await fetch("/.netlify/functions/send-leadmagnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email, language })
      });
    } catch (err) {
      console.warn("send-leadmagnet function failed:", err);
    }
    try {
      const fd = new FormData();
      fd.append("form-name", "lead-magnet");
      fd.append("name", name.trim());
      fd.append("email", email);
      fd.append("language", language);
      await fetch("/", { method: "POST", body: fd });
    } catch (err) {
      console.warn("Netlify form submit failed:", err);
    }
    setStatus("success");
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4", children: [
    /* @__PURE__ */ jsxs("form", { name: "lead-magnet", "data-netlify": "true", hidden: true, children: [
      /* @__PURE__ */ jsx("input", { type: "text", name: "name" }),
      /* @__PURE__ */ jsx("input", { type: "email", name: "email" }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "language" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative bg-slate-800 border border-slate-700 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "h-1 w-full bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600" }),
      /* @__PURE__ */ jsx("button", { onClick: onClose, className: "absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10", "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsx("div", { className: "p-7 sm:p-8", children: status === "success" ? (
        /* ── Success ── */
        /* @__PURE__ */ jsxs("div", { className: "text-center py-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-8 h-8 text-green-400" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: t2.successTitle(name.trim()) }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed mb-6", children: t2.successSubtitle }),
          /* @__PURE__ */ jsx("button", { onClick: onClose, className: "px-6 py-2.5 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-xl transition-colors text-sm", children: language === "hu" ? "Rendben, köszönöm!" : "Great, thanks!" })
        ] })
      ) : (
        /* ── Form ── */
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full mb-5", children: [
            /* @__PURE__ */ jsx(Download, { className: "w-3.5 h-3.5 text-violet-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-violet-300 text-xs font-semibold uppercase tracking-wide", children: t2.badge })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-2 leading-tight", children: t2.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed mb-5", children: t2.subtitle }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5 mb-6", children: t2.bullets.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm text-slate-300", children: [
            /* @__PURE__ */ jsx("div", { className: "w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx("svg", { className: "w-2.5 h-2.5 text-violet-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M5 13l4 4L19 7" }) }) }),
            item
          ] }, i)) }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("svg", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: name,
                  onChange: (e) => {
                    setName(e.target.value);
                    setErrorMsg("");
                  },
                  placeholder: t2.namePlaceholder,
                  className: "w-full bg-slate-900 border border-slate-600 hover:border-slate-500 focus:border-violet-500 outline-none rounded-xl pl-10 pr-4 py-3.5 text-white text-sm placeholder-slate-500 transition-colors",
                  disabled: status === "sending",
                  autoComplete: "name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(Mail, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  value: email,
                  onChange: (e) => {
                    setEmail(e.target.value);
                    setErrorMsg("");
                  },
                  placeholder: t2.placeholder,
                  className: "w-full bg-slate-900 border border-slate-600 hover:border-slate-500 focus:border-violet-500 outline-none rounded-xl pl-10 pr-4 py-3.5 text-white text-sm placeholder-slate-500 transition-colors",
                  disabled: status === "sending",
                  autoComplete: "email"
                }
              )
            ] }),
            errorMsg && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-xs pl-1", children: errorMsg }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: status === "sending",
                className: "flex items-center justify-center gap-2 w-full py-4 bg-violet-500 hover:bg-violet-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25 text-base",
                children: status === "sending" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4 animate-spin", viewBox: "0 0 24 24", fill: "none", children: [
                    /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                    /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v8H4z" })
                  ] }),
                  t2.sending
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                  t2.cta
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: onClose, className: "w-full text-center text-slate-600 hover:text-slate-400 text-xs transition-colors py-2 mt-1", children: t2.skip })
        ] })
      ) })
    ] })
  ] });
};
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}
function useCountUp(end, active, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t0 = performance.now();
    const tick = (t2) => {
      const p = Math.min((t2 - t0) / duration, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [end, active, duration]);
  return val;
}
function CountUp({ end, suffix = "", active }) {
  const n = useCountUp(end, active);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    n,
    suffix
  ] });
}
const fadeUp = (v, d = 0) => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(24px)",
  transition: `opacity .6s ease ${d}ms, transform .6s ease ${d}ms`
});
const slideLeft = (v, d = 0) => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateX(0)" : "translateX(-28px)",
  transition: `opacity .65s ease ${d}ms, transform .65s ease ${d}ms`
});
const slideRight = (v, d = 0) => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateX(0)" : "translateX(28px)",
  transition: `opacity .65s ease ${d}ms, transform .65s ease ${d}ms`
});
function buildSchemas(language) {
  const baseUrl = "https://levinagymarketing.com";
  const organization = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${baseUrl}/#organization`,
    name: "Nagy Levi Marketing",
    alternateName: "NLM",
    description: language === "hu" ? "Marketing ügynökség Budapestről. Facebook hirdetések, Google Ads, TikTok hirdetések, SEO optimalizálás és weboldal készítés – több ügyfelet, több bevételt garantálunk 30 napon belül." : "Budapest-based marketing agency. Facebook Ads, Google Ads, TikTok advertising, SEO, and website design – we guarantee more clients and more revenue within 30 days.",
    url: baseUrl,
    image: "https://res.cloudinary.com/dduros3xw/image/upload/v1754826429/Win_tdgauq.png",
    telephone: "+36706339977",
    email: "nlevi@levinagymarketing.com",
    foundingDate: "2021",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Budapest",
      addressRegion: "Budapest",
      addressCountry: "HU"
    },
    geo: { "@type": "GeoCoordinates", latitude: 47.4979, longitude: 19.0402 },
    areaServed: [
      { "@type": "Country", name: "Hungary" },
      { "@type": "Country", name: "Slovakia" },
      { "@type": "City", name: "Budapest" }
    ],
    sameAs: ["https://www.instagram.com/nagylevi_marketing/"],
    founder: { "@type": "Person", "@id": `${baseUrl}/#person-nagylevi`, name: "Nagy Levi" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "3", bestRating: "5", worstRating: "1" },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Magyar Zsuzsa" },
        reviewBody: "Az érdeklődők száma jelentősen megnőtt, és a potenciális ügyfelek megszerzése is jóval költséghatékonyabbá vált – kb. 40%-os megtakarítás."
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Organization", name: "Gatier Hungary" },
        reviewBody: "Az online kampányaink teljes körű tervezése új szintre emelkedett. Jelentősen növekedett az ügyfél-elérésünk és a kampányok hatékonysága."
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Organization", name: "Kolpa San Kft." },
        reviewBody: "Jelentős változást tapasztaltunk az online jelenlétünkben. Levi mindig rugalmas és gyors."
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: language === "hu" ? "Marketing Szolgáltatások" : "Marketing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: language === "hu" ? "Facebook Hirdetések" : "Facebook Ads", description: language === "hu" ? "Célzott Facebook kampányok helyi vállalkozásoknak." : "Targeted Facebook ad campaigns for local businesses." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: language === "hu" ? "Google Hirdetések" : "Google Ads", description: language === "hu" ? "Google Ads kampányok potenciális ügyfelekért." : "Google Ads campaigns that bring potential clients." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: language === "hu" ? "TikTok Hirdetések" : "TikTok Ads", description: language === "hu" ? "Kreatív TikTok hirdetések fiatal célközönség eléréséhez." : "Creative TikTok campaigns to reach younger audiences." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: language === "hu" ? "SEO Optimalizálás" : "SEO Optimization", description: language === "hu" ? "Google első oldalra juttatjuk a weboldalad 90 napon belül, vagy visszaadjuk a pénzed." : "We get your website to Google's first page within 90 days, or your money back." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: language === "hu" ? "Email Marketing" : "Email Marketing", description: language === "hu" ? "Automatizált email kampányok az ügyfélmegtartáshoz." : "Automated email campaigns for client retention." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: language === "hu" ? "Weboldal és Landing Page Készítés" : "Website & Landing Page Design", description: language === "hu" ? "Konverzióra optimalizált weboldal 14 nap alatt." : "Conversion-optimized website in 14 days." } }
      ]
    },
    knowsAbout: ["Facebook Advertising", "Google Ads", "TikTok Advertising", "Search Engine Optimization", "Email Marketing", "Landing Page Design", "Lead Generation", "Digital Marketing", "Marketing Budapest", "Hirdetéskezelés", "Weboldal készítés Budapest"]
  };
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person-nagylevi`,
    name: "Nagy Levi",
    givenName: "Levi",
    familyName: "Nagy",
    jobTitle: language === "hu" ? "Marketing Specialista" : "Marketing Specialist",
    description: language === "hu" ? "2021 óta segíti a helyi vállalkozásokat több ügyfél megszerzésében Facebook, Google és TikTok hirdetésekkel, SEO-val és weboldal készítéssel Budapestről." : "Helping local businesses get more clients since 2021 through Facebook, Google, and TikTok advertising, SEO, and website design, based in Budapest.",
    url: baseUrl,
    email: "nlevi@levinagymarketing.com",
    telephone: "+36706339977",
    image: "https://res.cloudinary.com/dduros3xw/image/upload/v1754826429/Win_tdgauq.png",
    sameAs: ["https://www.instagram.com/nagylevi_marketing/"],
    worksFor: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "Nagy Levi Marketing" },
    address: { "@type": "PostalAddress", addressLocality: "Budapest", addressCountry: "HU" },
    knowsAbout: ["Facebook Advertising", "Google Ads", "TikTok Advertising", "SEO Optimization", "Lead Generation", "Digital Marketing", "Email Marketing"]
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: language === "hu" ? [
      { "@type": "Question", name: "Mennyi kerül egy Facebook hirdetés Budapesten?", acceptedAnswer: { "@type": "Answer", text: "A Facebook hirdetések ára Magyarországon általában havi 50 000–500 000 Ft között mozog a hirdetési büdzsére vonatkozóan. A Nagy Levi Marketingnél átlátható árazással és 30 napos garanciával dolgozunk – ha 30 napon belül nem látod az eredményt, visszaadjuk a kezelési díjat." } },
      { "@type": "Question", name: "Mennyi idő alatt látok eredményt a Google Ads hirdetéseimből?", acceptedAnswer: { "@type": "Answer", text: "Google Ads kampányoknál általában 1–2 héten belül megjelennek az első megkeresések. SEO esetén 90 napon belül garantáljuk a TOP 10 helyezést Google-n, vagy visszaadjuk a pénzed." } },
      { "@type": "Question", name: "Mit jelent a 30 napos garancia?", acceptedAnswer: { "@type": "Answer", text: "Ha 30 napon belül nem látod a megbeszélt eredményeket a kampányodban, visszatérítjük a teljes kezelési díjat. Ez a garancia minden új ügyfelünkre vonatkozik, kötelezettség nélkül." } },
      { "@type": "Question", name: "Milyen vállalkozásoknak ajánlott a Nagy Levi Marketing?", acceptedAnswer: { "@type": "Answer", text: "Főként helyi szolgáltatóknak segítünk: szépségszalonoknak, fogászatoknak, autósiskoláknak, fitnesztermeknek és online vállalkozásoknak. Ügyfeleinknél az első hónapban átlagosan 181 megkeresést értünk el." } },
      { "@type": "Question", name: "Hogyan lehet felvenni a kapcsolatot a Nagy Levi Marketinggel?", acceptedAnswer: { "@type": "Answer", text: "Telefonon a +36 70 633 9977-es számon, emailben az nlevi@levinagymarketing.com címen, vagy a weboldalon lévő kapcsolatfelvételi űrlapon. Válasz 24 órán belül garantált, kötelezettség nélkül." } },
      { "@type": "Question", name: "Kell-e már meglévő weboldal a hirdetések futtatásához?", acceptedAnswer: { "@type": "Answer", text: "Nem szükséges. Weboldalt és landing page-t is készítünk 14 napon belül, konverzióra optimalizálva, hogy a hirdetések a lehető legtöbb ügyfelet hozzák." } }
    ] : [
      { "@type": "Question", name: "How much does Facebook advertising cost in Budapest?", acceptedAnswer: { "@type": "Answer", text: "Facebook advertising in Hungary typically costs between 50,000–500,000 HUF per month in ad spend. At Nagy Levi Marketing we offer transparent pricing with a 30-day guarantee — if you don't see results within 30 days, we refund the management fee." } },
      { "@type": "Question", name: "How quickly will I see results from Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Google Ads campaigns typically show initial inquiries within 1–2 weeks. For SEO, we guarantee a TOP 10 Google ranking within 90 days, or your money back." } },
      { "@type": "Question", name: "What does the 30-day guarantee mean?", acceptedAnswer: { "@type": "Answer", text: "If you don't see the agreed results within 30 days of your campaign launch, we refund the full management fee. This guarantee applies to all new clients with no strings attached." } },
      { "@type": "Question", name: "What types of businesses does Nagy Levi Marketing work with?", acceptedAnswer: { "@type": "Answer", text: "We primarily help local service providers: beauty salons, dental clinics, driving schools, gyms, and online businesses. Our clients average 181 leads in their first month." } },
      { "@type": "Question", name: "How can I contact Nagy Levi Marketing?", acceptedAnswer: { "@type": "Answer", text: "By phone at +36 70 633 9977, by email at nlevi@levinagymarketing.com, or through the contact form on the website. Response within 24 hours is guaranteed, with no obligation." } },
      { "@type": "Question", name: "Do I need an existing website to run ads?", acceptedAnswer: { "@type": "Answer", text: "No. We build conversion-optimized websites and landing pages within 14 days so your ads have the best possible foundation to generate clients." } }
    ]
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Nagy Levi Marketing",
    description: language === "hu" ? "Marketing ügynökség Budapest – Facebook hirdetések, Google Ads, SEO, weboldal készítés" : "Marketing agency Budapest – Facebook Ads, Google Ads, SEO, website design",
    inLanguage: ["hu", "en"],
    publisher: { "@id": `${baseUrl}/#organization` }
  };
  return [organization, person, faq, website];
}
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    runningAds: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const [leadMagnetDismissed, setLeadMagnetDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useInView(0.4);
  const { ref: logosRef, inView: logosInView } = useInView();
  const { ref: seoRef, inView: seoInView } = useInView();
  const { ref: servRef, inView: servInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();
  const { ref: whyRef, inView: whyInView } = useInView();
  const { ref: testRef, inView: testInView } = useInView();
  const { ref: resRef, inView: resInView } = useInView();
  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { ref: contactRef, inView: contactInView } = useInView();
  const cursorRef = useRef(null);
  const isEnglish = location.pathname.startsWith("/en");
  const language = isEnglish ? "en" : "hu";
  const schemas = buildSchemas(language);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 600);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    let tid;
    const move = (e) => {
      const el = cursorRef.current;
      if (!el) return;
      el.style.left = `${e.clientX - 200}px`;
      el.style.top = `${e.clientY - 200}px`;
      el.style.opacity = "1";
      clearTimeout(tid);
      tid = setTimeout(() => {
        if (cursorRef.current) cursorRef.current.style.opacity = "0";
      }, 1500);
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      clearTimeout(tid);
    };
  }, []);
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 10 && !leadMagnetDismissed) setShowLeadMagnet(true);
    };
    const timer = setTimeout(() => {
      if (!leadMagnetDismissed) setShowLeadMagnet(true);
    }, 5e3);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [leadMagnetDismissed]);
  const dismissLeadMagnet = () => {
    setShowLeadMagnet(false);
    setLeadMagnetDismissed(true);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
  const toggleLanguage = () => {
    language === "hu" ? navigate("/en") : navigate("/");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const payload = { ...formData, language, submittedAt: (/* @__PURE__ */ new Date()).toLocaleString() };
      const response = await fetch("https://hook.eu2.make.com/k5gix4ck8fcnsnx8lymv6p10kf29n9wc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", website: "", runningAds: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const content = {
    hu: {
      nav: { services: "Szolgáltatások", results: "Eredmények", about: "Rólam", contact: "Kapcsolat" },
      hero: {
        badge: "🟢 Elérhető új ügyfeleknek",
        title: "Megtöltjük a naptáradat új ügyfelekkel 30 nap alatt",
        titleHighlight: "— Garantáltan",
        subtitle: "Hirdetéseket és weboldalakat készítünk, amik tényleg működnek. Több megkeresés, több bevétel, kevesebb stressz.",
        ctaAds: "Több ügyfelet szeretnék hirdetéssel",
        ctaAI: "Automatizálni szeretném a vállalkozásom",
        ctaSub: "Válasz 24 órán belül • Kötelezettség nélkül",
        stats: [{ num: "181+", label: "Megkeresés / hó" }, { num: "3.5×", label: "Több eredmény" }, { num: "730", label: "Regisztráció 19 nap alatt" }]
      },
      services: {
        title: "Szolgáltatásaink, amik ügyfeleket hoznak neked",
        items: [
          { title: "Facebook Hirdetések", description: "Célzott Facebook kampányokkal elérjük azokat, akik valóban érdeklődnek a szolgáltatásaid iránt." },
          { title: "Google Hirdetések", description: "Google Ads kampányokkal akkor jelenünk meg, amikor potenciális ügyfeleid rád keresnek." },
          { title: "TikTok Hirdetések", description: "Fiatal célközönséget érünk el kreatív TikTok kampányokkal, amelyek növelik a márkaismertséged." },
          { title: "SEO/AI Optimalizálás", description: "Weboldaladat a Google első oldalára és az AI első ajánlására juttatjuk, hogy organikusan találjanak meg téged." },
          { title: "Email Marketing", description: "Automatizált email kampányokkal tartjuk a kapcsolatot ügyfelekkel és növeljük az eladásokat." },
          { title: "Landing Page / Funnel Tervezés", description: "Konverzióra optimalizált oldalakat készítünk, amelyek látogatókat ügyfelekké alakítanak." }
        ]
      },
      why: {
        title: "Miért válaszd a",
        subtitle: "más ügynökségek helyett?",
        otherAgencies: "Más ügynökségek",
        us: "Nagy Levi Marketing",
        otherItems: ["Hónapokig tartó szerződések", "Nincs garancia", "Lassú kommunikáció", "Általános megoldások", "Nincs garantált eredmény"],
        ourItems: ["Rugalmas együttműködés", "Átlátható árazás", "Gyors válaszidő", "Személyre szabott stratégia", "30 napos garancia"]
      },
      testimonials: {
        title: "Mit mondanak rólunk ügyfeleink",
        items: [
          { text: "Mióta Levire bíztam a marketinges tevékenységeim kezelését, az érdeklődők száma jelentősen megnőtt, és a potenciális ügyfelek megszerzése is jóval költséghatékonyabbá vált (kb. 40%-os megtakarítás). Levi folyamatosan figyelemmel kíséri az online kampányok teljesítését, és amikor szükséges, azonnal reagál.", author: "Magyar Zsuzsa", role: "Sminktetoválás", initials: "MZ" },
          { text: "Levi közreműködésével az online kampányaink teljes körű tervezése új szintre emelkedett. A kampányok során Levi rugalmasan alkalmazkodik az igényeinkhez. Az együttműködésünk eredményeképp jelentősen növekedett az ügyfél-elérésünk és a kampányok hatékonysága.", author: "Gatier Hungary", role: "Reklámügynökség", initials: "GH" },
          { text: "Amióta Levi készíti a közösségi média felületeink tartalmait, jelentős változást tapasztaltunk az online jelenlétünkben. A tartalomgyártás során Levi mindig rugalmas és gyors, így időben és a legmagasabb minőségben kapjuk meg a szükséges anyagokat.", author: "Kolpa San Kft.", role: "Vállalkozás", initials: "KS" }
        ]
      },
      clients: { title: "Ügyfeleink" },
      guarantee: {
        title: "14 nap alatt elkészítjük a saját, profi weboldalad.",
        subtitle: "Elkészítjük a profi weboldalad 14 nap alatt ami több bevételt fog neked generálni.",
        cta: "Felveszem a kapcsolatot",
        portfolioTitle: "Nézd meg a portfóliónkat:",
        links: [
          { text: "Oxford Nyelviskola", url: "https://oxford.hu/" },
          { text: "Denti Implant Center", url: "https://dentiimplantcenter.hu/" },
          { text: "Földmérő Iroda", url: "https://foldmero.org/" },
          { text: "G7 Influence", url: "https://g7influence.com/" },
          { text: "Domati", url: "https://domati.sk/hu/fooldal/" },
          { text: "Fiori Beauty", url: "https://fioribeauty.sk/" },
          { text: "MHL Geo", url: "https://mhlgeo.sk/fooldal/" },
          { text: "Baráth Kinga", url: "https://barathkinga.sk/" },
          { text: "Gyermekfejlesztés", url: "https://gyermekfejlesztes.sk/" },
          { text: "Szilani Beauty", url: "https://szilani-beauty.hu/" },
          { text: "Kónya Csilla", url: "https://konyacsilla.hu/" },
          { text: "Győre Norbert", url: "https://gyorenorbert.hu/" }
        ]
      },
      about: { title: "Rólam", text: "Több éve segítek helyi vállalkozóknak több ügyfelet szerezni és növelni a bevételüket online hirdetési stratégiákkal. Ha te is szeretnéd fellendíteni a vállalkozásod, írj nekem és beszéljük meg, hogy hogyan tudjuk megvalósítani." },
      contact: {
        title: "Kapcsolat",
        subtitle: "Készen állsz a növekedésre?",
        trustItems: ["Válasz 24 órán belül", "Ingyenes konzultáció", "Kötelezettség nélkül"],
        form: { name: "Név", email: "Email", phone: "Telefon", website: "Weboldal URL", runningAds: "Jelenleg futtatsz hirdetéseket?", runningAdsYes: "Igen", runningAdsNo: "Nem", message: "Üzenet", submit: "Ingyenes konzultációt kérek →" }
      },
      midCTA: { title: "Készen állsz több ügyfélre?", subtitle: "Több száz vállalkozásnak segítettünk növekedni. Te lehetsz a következő.", cta: "Ingyenes konzultáció →" },
      seo: { title: "Szeretnél több ügyfelet szerezni a Google-n keresztül anélkül, hogy hirdetéseket futtatnál?", highlight: "TOP 10 közé 90 napon belül", cta: "Érdekel!" }
    },
    en: {
      nav: { services: "Services", results: "Results", about: "About", contact: "Contact" },
      hero: {
        badge: "🟢 Available for new clients",
        title: "We'll Fill Your Calendar with New Customers in 30 Days",
        titleHighlight: "— Guaranteed",
        subtitle: "We create ads and websites that actually work. More leads, more revenue, less stress.",
        ctaAds: "I want more clients with ads",
        ctaAI: "I want to automate my business",
        ctaSub: "Response within 24 hours • No obligation",
        stats: [{ num: "181+", label: "Leads per month" }, { num: "3.5×", label: "More results" }, { num: "730", label: "Registrations in 19 days" }]
      },
      services: {
        title: "Our services that bring you clients",
        items: [
          { title: "Facebook Ads", description: "Targeted Facebook campaigns reach those who are genuinely interested in your services." },
          { title: "Google Ads", description: "Google Ads campaigns appear when potential clients are searching for you." },
          { title: "TikTok Ads", description: "Reach young audiences with creative TikTok campaigns that increase brand awareness." },
          { title: "SEO Optimization", description: "Get your website to Google's first page so clients find you organically." },
          { title: "Email Marketing", description: "Automated email campaigns maintain client relationships and increase sales." },
          { title: "Landing Page / Funnel Design", description: "Conversion-optimized pages that turn visitors into customers." }
        ]
      },
      why: {
        title: "Why choose",
        subtitle: "instead of other agencies?",
        otherAgencies: "Other Agencies",
        us: "Nagy Levi Marketing",
        otherItems: ["Long-term contracts", "High initial costs", "Slow communication", "Generic solutions", "No guaranteed results"],
        ourItems: ["Flexible cooperation", "Transparent pricing", "Fast response time", "Personalized strategy", "30-day guarantee"]
      },
      testimonials: {
        title: "What our clients say about us",
        items: [
          { text: "Since I entrusted Levi with managing my marketing activities, the number of inquiries has increased significantly, and acquiring potential customers has become much more cost-effective (about 40% savings). Levi continuously monitors the performance of online campaigns and responds immediately when necessary.", author: "Magyar Zsuzsa", role: "Permanent Makeup", initials: "MZ" },
          { text: "With Levi's involvement, the comprehensive planning of our online campaigns has reached a new level. During the campaigns, Levi flexibly adapts to our needs. As a result of our cooperation, our client reach and campaign efficiency have increased significantly.", author: "Gatier Hungary", role: "Advertising Agency", initials: "GH" },
          { text: "Since Levi has been creating content for our social media platforms, we have experienced a significant change in our online presence. During content production, Levi is always flexible and fast, so we receive the necessary materials on time and in the highest quality.", author: "Kolpa San Kft.", role: "Business", initials: "KS" }
        ]
      },
      clients: { title: "Our Clients" },
      guarantee: {
        title: "We create your own professional website in 14 days.",
        subtitle: "We create your professional website in 14 days that will generate more revenue for you.",
        cta: "Reach Out To Me",
        portfolioTitle: "Check out our portfolio:",
        links: [
          { text: "Oxford Language School", url: "https://oxford.hu/" },
          { text: "Denti Implant Center", url: "https://dentiimplantcenter.hu/" },
          { text: "Surveyor Office", url: "https://foldmero.org/" },
          { text: "G7 Influence", url: "https://g7influence.com/" },
          { text: "Domati", url: "https://domati.sk/hu/fooldal/" },
          { text: "Fiori Beauty", url: "https://fioribeauty.sk/" },
          { text: "MHL Geo", url: "https://mhlgeo.sk/fooldal/" },
          { text: "Baráth Kinga", url: "https://barathkinga.sk/" },
          { text: "Child Development", url: "https://gyermekfejlesztes.sk/" },
          { text: "Szilani Beauty", url: "https://szilani-beauty.hu/" },
          { text: "Kónya Csilla", url: "https://konyacsilla.hu/" },
          { text: "Győre Norbert", url: "https://gyorenorbert.hu/" }
        ]
      },
      about: { title: "About Me", text: "For years, I've been helping local entrepreneurs get more clients and increase their revenue with online advertising strategies. If you also want to boost your business, write to me and let's discuss how we can make it happen." },
      contact: {
        title: "Contact",
        subtitle: "Ready for growth?",
        trustItems: ["Response within 24 hours", "Free consultation", "No obligation"],
        form: { name: "Name", email: "Email", phone: "Phone", website: "Website URL", runningAds: "Are you currently running ads?", runningAdsYes: "Yes", runningAdsNo: "No", message: "Message", submit: "Get My Free Consultation →" }
      },
      midCTA: { title: "Ready for more clients?", subtitle: "We've helped hundreds of businesses grow. You could be next.", cta: "Free Consultation →" },
      seo: { title: "Want to get more clients through Google without running ads?", highlight: "TOP 10 within 90 days", cta: "I'm Interested!" }
    }
  };
  const t2 = content[language];
  if (showPrivacyPolicy) {
    return /* @__PURE__ */ jsx(PrivacyPolicy, { language, onBack: () => setShowPrivacyPolicy(false) });
  }
  const serviceIcons = [
    { icon: /* @__PURE__ */ jsx(Facebook, { className: "w-6 h-6 text-blue-400" }), hoverBorder: "hover:border-blue-500/50", bg: "bg-blue-500/10", hoverBg: "group-hover:bg-blue-500/20" },
    { icon: /* @__PURE__ */ jsx(Search, { className: "w-6 h-6 text-green-400" }), hoverBorder: "hover:border-green-500/50", bg: "bg-green-500/10", hoverBg: "group-hover:bg-green-500/20" },
    { icon: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6 text-pink-400" }), hoverBorder: "hover:border-pink-500/50", bg: "bg-pink-500/10", hoverBg: "group-hover:bg-pink-500/20" },
    { icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-purple-400" }), hoverBorder: "hover:border-purple-500/50", bg: "bg-purple-500/10", hoverBg: "group-hover:bg-purple-500/20" },
    { icon: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-violet-400" }), hoverBorder: "hover:border-violet-500/50", bg: "bg-violet-500/10", hoverBg: "group-hover:bg-violet-500/20" },
    { icon: /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6 text-violet-400" }), hoverBorder: "hover:border-violet-500/50", bg: "bg-violet-500/10", hoverBg: "group-hover:bg-violet-500/20" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-900", children: [
    schemas.map((schema, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(schema) } }, i)),
    /* @__PURE__ */ jsx("style", { children: `
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
      ` }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed top-0 left-0 z-[60] h-[3px] bg-gradient-to-r from-violet-400 to-violet-500 pointer-events-none",
        style: { width: `${scrollProgress}%`, transition: "width 0.12s ease" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: cursorRef,
        className: "fixed pointer-events-none z-20 hidden lg:block rounded-full",
        style: { width: 400, height: 400, background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", opacity: 0, transition: "opacity 0.5s ease", top: -200, left: -200 }
      }
    ),
    /* @__PURE__ */ jsx(LocalSEOHead, { language }),
    showLeadMagnet && /* @__PURE__ */ jsx(LeadMagnetPopup, { language, onClose: dismissLeadMagnet }),
    showFloatingCTA && /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-6 z-50 floating-cta-enter", children: /* @__PURE__ */ jsxs("a", { href: "#contact", className: "flex items-center gap-2 px-5 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-full shadow-2xl shadow-violet-500/30 transition-all hover:scale-105 text-sm animate-bounce-slow", children: [
      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full animate-pulse" }),
      language === "hu" ? "Ingyenes konzultáció" : "Free Consultation"
    ] }) }),
    /* @__PURE__ */ jsx("header", { className: "bg-slate-900/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 shadow-xl shadow-black/20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold text-white tracking-tight", children: [
        "Nagy Levi ",
        /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Marketing" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center space-x-8", children: [["services", "01"], ["results", "02"], ["about", "03"], ["contact", "04"]].map(([key, num]) => /* @__PURE__ */ jsxs("a", { href: `#${key}`, className: "group flex items-baseline gap-1.5 text-slate-400 hover:text-white transition-colors text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-violet-500/60 text-[10px] font-bold group-hover:text-violet-400 transition-colors", children: num }),
        t2.nav[key]
      ] }, key)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center space-x-4 text-sm", children: /* @__PURE__ */ jsxs("a", { href: "tel:+36706339977", className: "flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors", children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "+36 70 633 9977" })
        ] }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/nagylevi_marketing/", target: "_blank", rel: "noopener noreferrer", className: "text-slate-400 hover:text-white transition-colors", children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxs("button", { onClick: toggleLanguage, className: "flex items-center space-x-1 text-slate-400 hover:text-white transition-colors text-sm", children: [
          /* @__PURE__ */ jsx("span", { children: language === "hu" ? "🇺🇸" : "🇭🇺" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: language === "hu" ? "EN" : "HU" })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#contact", className: "hidden md:flex items-center gap-1.5 px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-violet-500/25", children: [
          language === "hu" ? "Kapcsolat" : "Contact",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none blob-1" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/6 rounded-full blur-3xl pointer-events-none blob-2" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: { backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" } }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 md:px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxs("div", { style: fadeUp(mounted, 0), className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-violet-400 rounded-full animate-pulse" }),
          t2.hero.badge
        ] }),
        /* @__PURE__ */ jsx("h1", { style: fadeUp(mounted, 100), className: "text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 tracking-tight", children: t2.hero.title }),
        /* @__PURE__ */ jsx("h1", { style: fadeUp(mounted, 200), className: "text-4xl md:text-5xl lg:text-6xl font-black text-violet-400 leading-tight mb-6 tracking-tight", children: t2.hero.titleHighlight }),
        /* @__PURE__ */ jsx("p", { style: fadeUp(mounted, 300), className: "text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl", children: t2.hero.subtitle }),
        /* @__PURE__ */ jsxs("div", { style: fadeUp(mounted, 400), className: "flex flex-col gap-3 mb-12 max-w-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: language === "hu" ? "/fizetett-hirdetesek" : "/en/paid-ads",
                className: "group inline-flex items-center justify-center px-6 py-4 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg transition-all shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02] text-sm sm:text-base",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mr-2", children: "📣" }),
                  t2.hero.ctaAds,
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: language === "hu" ? "/ai-automatizalas" : "/en/ai-automation",
                className: "group inline-flex items-center justify-center px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-violet-500/50 text-white font-semibold rounded-lg transition-all hover:scale-[1.02] text-sm sm:text-base",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mr-2", children: "🤖" }),
                  t2.hero.ctaAI,
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm", children: t2.hero.ctaSub })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: fadeUp(mounted, 500), className: "pt-8 border-t border-slate-700/50 space-y-4 max-w-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex -space-x-2", children: [
              "https://res.cloudinary.com/dduros3xw/image/upload/v1754251170/Zsuzsa_ceqg0n.png",
              "https://res.cloudinary.com/dduros3xw/image/upload/v1754251142/Denti_sctzvf.png",
              "https://res.cloudinary.com/dduros3xw/image/upload/v1754251162/Krono_rtau8a.png",
              "https://res.cloudinary.com/dduros3xw/image/upload/v1754251206/be-3_s_pkesu2.png"
            ].map((src, i) => /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsx("img", { src, alt: "client", className: "w-full h-full object-cover" }) }, i)) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mb-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-violet-400 text-violet-400" }, i)) }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-xs", children: language === "hu" ? "20+ vállalkozás bízik bennünk Magyarországon" : "20+ businesses trust us in Hungary" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/25 rounded-full", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-3.5 h-3.5 text-violet-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-violet-300 text-xs font-semibold", children: language === "hu" ? "30 napos garancia vagy visszaadjuk a pénzed" : "30-day guarantee or your money back" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "w-3.5 h-3.5 text-violet-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-xs font-semibold", children: language === "hu" ? "3× megtérülés minden kampánynál" : "3× ROI on every campaign" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: (language === "hu" ? ["Facebook Ads", "Google Ads", "TikTok Ads", "SEO", "Weboldal"] : ["Facebook Ads", "Google Ads", "TikTok Ads", "SEO", "Website"]).map((pill) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs text-slate-400 hover:text-violet-400 hover:border-violet-500/40 transition-colors cursor-default", children: pill }, pill)) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-slate-950 border-y border-white/5 py-4 select-none", children: /* @__PURE__ */ jsx("div", { className: "marquee-track flex whitespace-nowrap w-max gap-0", children: [0, 1].map((copy2) => /* @__PURE__ */ jsx("div", { className: "flex items-center gap-0", children: (language === "hu" ? ["Több ügyfél", "Facebook Ads", "Több bevétel", "Google Ads", "30 napos garancia", "TikTok Ads", "Garantált eredmény", "SEO", "3× megtérülés", "Weboldal készítés"] : ["More Clients", "Facebook Ads", "More Revenue", "Google Ads", "30-Day Guarantee", "TikTok Ads", "Guaranteed Results", "SEO", "3× ROI", "Website Design"]).map((word, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold tracking-wide px-6 text-slate-400 hover:text-violet-400 transition-colors", children: word }),
      /* @__PURE__ */ jsx("span", { className: "text-violet-500/40 text-lg", children: "·" })
    ] }, i)) }, copy2)) }) }),
    /* @__PURE__ */ jsx("section", { ref: logosRef, className: "py-16 bg-slate-800/50 border-y border-slate-700/40", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsx("p", { style: fadeUp(logosInView), className: "text-center text-slate-500 text-xs font-medium uppercase tracking-widest mb-8", children: t2.clients.title }),
      /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", style: { WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 md:grid-cols-7 gap-4 items-center", children: [
        { src: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251206/be-3_s_pkesu2.png", alt: "BE-3" },
        { src: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251142/Denti_sctzvf.png", alt: "Denti" },
        { src: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251162/Krono_rtau8a.png", alt: "Krono" },
        { src: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251142/Auto%CC%81_Motor_okswoo.png", alt: "Autó Motor" },
        { src: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251170/Zsuzsa_ceqg0n.png", alt: "Zsuzsa" },
        { src: "https://res.cloudinary.com/dduros3xw/image/upload/v1773170825/Ke%CC%81pernyo%CC%8Bfoto%CC%81_2026-03-10_-_20.17.55_nyfny7.png", alt: "Client" },
        { src: "https://res.cloudinary.com/dduros3xw/image/upload/v1773170884/Ke%CC%81pernyo%CC%8Bfoto%CC%81_2026-03-10_-_20.27.52_axkwlh.png", alt: "Client" }
      ].map((logo, i) => /* @__PURE__ */ jsx("div", { style: fadeUp(logosInView, i * 60), className: "bg-white/5 hover:bg-white/10 transition-colors p-3 rounded-lg flex items-center justify-center h-16", children: /* @__PURE__ */ jsx("img", { src: logo.src, alt: logo.alt, className: "max-h-10 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity" }) }, i)) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { ref: seoRef, className: "py-16 bg-slate-900", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { style: fadeUp(seoInView), className: "text-2xl md:text-3xl font-bold text-white mb-4", children: t2.seo.title }),
      /* @__PURE__ */ jsx("p", { style: fadeUp(seoInView, 100), className: "text-lg text-slate-300 mb-6", children: language === "hu" ? /* @__PURE__ */ jsxs("span", { children: [
        "Segítek neked a Google első oldalán rangsorolni a ",
        /* @__PURE__ */ jsx("span", { className: "bg-violet-500 text-white px-2 py-0.5 rounded font-semibold", children: t2.seo.highlight }),
        " vagy vissza kapod a pénzed"
      ] }) : /* @__PURE__ */ jsxs("span", { children: [
        "I help you rank in the ",
        /* @__PURE__ */ jsx("span", { className: "bg-violet-500 text-white px-2 py-0.5 rounded font-semibold", children: t2.seo.highlight }),
        " on Google's first page or you get your money back"
      ] }) }),
      /* @__PURE__ */ jsx("div", { style: fadeUp(seoInView, 200), children: /* @__PURE__ */ jsxs("a", { href: "#contact", className: "inline-flex items-center px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-violet-500/25", children: [
        t2.seo.cta,
        " ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "services", ref: servRef, className: "py-20 bg-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxs("div", { style: fadeUp(servInView), className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "text-violet-400/40 text-6xl font-black tracking-tighter leading-none mb-2 select-none", children: "01" }),
        /* @__PURE__ */ jsx("p", { className: "text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3", children: language === "hu" ? "Amit kínálunk" : "What we offer" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: t2.services.title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: t2.services.items.map((item, i) => /* @__PURE__ */ jsxs("div", { style: fadeUp(servInView, 100 + i * 80), className: `relative bg-slate-800/60 p-7 rounded-2xl border border-slate-700/60 ${serviceIcons[i].hoverBorder} transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/5`, children: [
        /* @__PURE__ */ jsx("div", { className: `w-12 h-12 ${serviceIcons[i].bg} ${serviceIcons[i].hoverBg} rounded-xl flex items-center justify-center mb-5 transition-colors`, children: serviceIcons[i].icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: item.description })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { style: fadeUp(servInView, 600), className: "mt-12 max-w-3xl mx-auto bg-gradient-to-r from-violet-500/10 to-slate-700/30 border border-violet-500/20 rounded-2xl p-8 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: language === "hu" ? "14 nap alatt elkészítjük a saját, profi weboldalad." : "We create your professional website in 14 days." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mb-5", children: language === "hu" ? "Konverzióra optimalizált oldal, ami több bevételt generál." : "Conversion-optimized site that generates more revenue." }),
        /* @__PURE__ */ jsxs("button", { onClick: () => setShowPortfolioModal(true), className: "inline-flex items-center px-5 py-2.5 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 hover:text-teal-200 border border-violet-500/30 rounded-lg transition-all text-sm font-medium gap-2", children: [
          language === "hu" ? "Nézd meg a portfóliónkat" : "See our portfolio",
          /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { ref: ctaRef, className: "py-16 bg-gradient-to-r from-violet-600 to-violet-500 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: { backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "40px 40px" } }),
      /* @__PURE__ */ jsxs("div", { style: fadeUp(ctaInView), className: "relative container mx-auto px-4 md:px-6 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-2", children: t2.midCTA.title }),
        /* @__PURE__ */ jsx("p", { className: "text-teal-100 mb-6 text-lg", children: t2.midCTA.subtitle }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "inline-flex items-center px-8 py-4 bg-white text-violet-600 font-bold rounded-lg hover:bg-teal-50 transition-all shadow-xl text-lg", children: t2.midCTA.cta })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-950", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center text-slate-600 text-xs font-semibold uppercase tracking-widest mb-16", children: language === "hu" ? "Valós eredmények, valós ügyfelek" : "Real results, real clients" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-800", children: (language === "hu" ? [
        { num: "181+", label: "megkeresés", sub: "az első hónapban", accent: false },
        { num: "3.5×", label: "több eredmény", sub: "az előző kampányhoz képest", accent: true },
        { num: "730", label: "regisztráció", sub: "19 nap alatt", accent: false },
        { num: "40%", label: "megtakarítás", sub: "ügyfelszerzési költségben", accent: false }
      ] : [
        { num: "181+", label: "leads", sub: "in the first month", accent: false },
        { num: "3.5×", label: "more results", sub: "vs. previous campaigns", accent: true },
        { num: "730", label: "registrations", sub: "in 19 days", accent: false },
        { num: "40%", label: "cost savings", sub: "on client acquisition", accent: false }
      ]).map((stat, i) => /* @__PURE__ */ jsxs("div", { className: `flex flex-col items-center justify-center py-12 px-6 text-center ${stat.accent ? "bg-violet-500/8" : "bg-slate-900"}`, children: [
        /* @__PURE__ */ jsx("div", { className: `text-5xl md:text-7xl font-black tracking-tighter mb-2 ${stat.accent ? "text-violet-400" : "text-white"}`, children: stat.num }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white mb-1", children: stat.label }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-500 leading-snug", children: stat.sub })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { ref: whyRef, className: "py-20 bg-slate-700", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxs("div", { style: fadeUp(whyInView), className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3", children: language === "hu" ? "A különbség" : "The difference" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-white", children: [
          t2.why.title,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Nagy Levi Marketing" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-light italic text-slate-300", children: t2.why.subtitle })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto grid lg:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { style: slideLeft(whyInView, 100), className: "bg-red-950/30 border border-red-500/15 rounded-2xl p-8", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-base font-semibold text-red-400 mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 text-xs", children: "✕" }),
            t2.why.otherAgencies
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: t2.why.otherItems.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-red-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: item })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: slideRight(whyInView, 200), className: "bg-teal-950/40 border border-violet-500/20 rounded-2xl p-8 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full -translate-y-8 translate-x-8" }),
          /* @__PURE__ */ jsxs("h3", { className: "text-base font-semibold text-violet-400 mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "w-5 h-5 bg-violet-500/20 rounded-full flex items-center justify-center text-violet-400 text-xs", children: "✓" }),
            t2.why.us
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: t2.why.ourItems.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-violet-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
            /* @__PURE__ */ jsx("p", { className: "text-white font-medium text-sm", children: item })
          ] }, i)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { ref: testRef, className: "py-20 bg-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxs("div", { style: fadeUp(testInView), className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3", children: language === "hu" ? "Vélemények" : "Testimonials" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white", children: t2.testimonials.title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: t2.testimonials.items.map((item, i) => /* @__PURE__ */ jsx("div", { style: fadeUp(testInView, 100 + i * 100), children: /* @__PURE__ */ jsxs("div", { className: `bg-slate-700/40 p-7 rounded-2xl border transition-all duration-300 ${activeTestimonial === i ? "border-violet-500/40 shadow-lg shadow-violet-500/5 -translate-y-1" : "border-slate-600/50"}`, children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 mb-4", children: [...Array(5)].map((_, s) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-amber-400 text-amber-400" }, s)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-300 text-sm leading-relaxed mb-6", children: [
          '"',
          item.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-slate-600/50", children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-teal-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0", children: item.initials }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-white text-sm", children: item.author }),
            /* @__PURE__ */ jsx("p", { className: "text-violet-400 text-xs", children: item.role })
          ] })
        ] })
      ] }) }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-8", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsx("button", { onClick: () => setActiveTestimonial(i), className: `h-2 rounded-full transition-all duration-300 ${activeTestimonial === i ? "bg-violet-400 w-6" : "bg-slate-600 w-2"}` }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "results", ref: resRef, className: "py-20 bg-slate-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxs("div", { style: fadeUp(resInView), className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("p", { className: "text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3", children: language === "hu" ? "Bizonyított eredmények" : "Proven results" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: language === "hu" ? "Ügyfél Eredmények" : "Client Results" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 max-w-xl mx-auto", children: language === "hu" ? "Nézd meg, milyen eredményeket értünk el ügyfeleinknek" : "See the results we achieved for our clients" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto space-y-6", children: [
        { logo: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251170/Zsuzsa_ceqg0n.png", name: "Magyar Zsuzsa Sminktetoválás", tag: language === "hu" ? "FB hirdetés + landing oldal" : "FB Ads + Landing Page", stat: "181", statLabel: language === "hu" ? "megkeresés az első hónapban" : "leads in the first month", statSub: language === "hu" ? "3.5× több eredmény" : "3.5× more results", statNum: 181, text: language === "hu" ? "Zsuzsa több marketingcsapattal is dolgozott, akik nagy eredményeket ígértek neki, viszont egyik se hozta a várt eredményt. Miután elkezdtem neki futtatni a hirdetéseket, már az első hónapban 181 megkeresést kapott, amelyből jelentős részük ügyfél is lett." : "Zsuzsa worked with several marketing teams that promised big results, but none delivered. After launching the campaigns, 181 leads came in the first month alone, with many becoming clients.", img: "https://res.cloudinary.com/dduros3xw/image/upload/v1754390996/FB_Ads_Leads_nlvuvh.png" },
        { logo: "https://res.cloudinary.com/dduros3xw/image/upload/v1771584388/Ke%CC%81pernyo%CC%8Bfoto%CC%81_2025-12-10_-_20.28.03_kznufm.png", name: "Route 11 Autósiskola", tag: language === "hu" ? "Google hirdetés" : "Google Ads", stat: "#1", statLabel: language === "hu" ? "teljesítő autósiskola lett" : "performing driving school", statSub: language === "hu" ? "Legjobb a 3 közül" : "Best of 3 schools", statNum: null, text: language === "hu" ? "Balázsnak 3 autósiskolája is van, amiből az egyik gyengébben teljesített. Miután elkezdtem futtatni a Google-hirdetéseket, már az első hónapban jelentősen több megkeresés érkezett, és több hónap után már túlszárnyalta a legjobban teljesítő autósiskoláját." : "Balázs has 3 driving schools, one underperforming. After launching Google Ads, significantly more inquiries came in the first month, and it eventually surpassed his best-performing school.", img: "https://res.cloudinary.com/dduros3xw/image/upload/v1771582094/Route_11_Results_fuormi.png" },
        { logo: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251142/Denti_sctzvf.png", name: "Denti Implant Center", tag: language === "hu" ? "Google hirdetés + új weboldal + landing oldal" : "Google Ads + New Website + Landing Page", stat: "53", statLabel: language === "hu" ? "űrlapos megkeresés az 1. hónapban" : "form leads in month 1", statSub: language === "hu" ? "Több millió forint bevétel" : "Millions in revenue", statNum: 53, text: language === "hu" ? "A Denti Implant Center elavult weboldala a megkeresések csökkenésében volt látható. Felépítettünk egy teljesen új, modern weboldalt és elkezdtünk futtatni Google hirdetéseket — már az első hónap után 53 megkeresést szereztünk." : "Denti's outdated website was causing declining inquiries. We built a new modern website and launched Google Ads — getting 53 form submissions in the first month, resulting in millions in revenue.", img: "https://res.cloudinary.com/dduros3xw/image/upload/v1771684673/Ke%CC%81pernyo%CC%8Bfoto%CC%81_2026-02-21_-_15.37.08_glrzsg.png" },
        { logo: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251162/Krono_rtau8a.png", name: "Kronobiológia", tag: language === "hu" ? "Facebook hirdetés — online webinár" : "Facebook Ads — Online Webinar", stat: "730", statLabel: language === "hu" ? "regisztráló 19 nap alatt" : "registrations in 19 days", statSub: language === "hu" ? "Cél 250-300 volt" : "Goal was 250-300", statNum: 730, text: language === "hu" ? "Zsuzsi és Ildi online webinárra készültek, és legfeljebb 250-300 jelentkezőre számítottak. A 19 napig tartó kampány összesen 730 jelentkezőt hozott, ami több mint 3-szor annyi volt, mint amire számítottak." : "Zsuzsi and Ildi prepared an online webinar and hoped for 250-300 registrations. The 19-day campaign brought 730 registrations — more than 3 times their goal.", img: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251201/Webinar_Ads_uevalc.png" },
        { logo: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251206/be-3_s_pkesu2.png", name: "Bepretty Studio", tag: language === "hu" ? "Facebook hirdetések" : "Facebook Ads", stat: "235", statLabel: language === "hu" ? "érdeklődő az 1. hónapban" : "leads in month 1", statSub: language === "hu" ? "Sok visszatérő vendég" : "Many returning clients", statNum: 235, text: language === "hu" ? "Erika lézeres szőrtelenítésre keresett ügyfeleket, de az előző marketingcsapat alig hozott eredményt. Egy alapos piackutatás után az első hónap végére 235 érdeklődőt sikerült szerezni, amelyből jelentős része visszatérő vendég lett." : "Erika needed clients for laser hair removal but her previous marketing team barely delivered. After thorough market research, we got 235 inquiries in the first month, many becoming returning clients.", img: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251188/Aesthetic_Clinic_FB_Ads_xwgn1w.png" }
      ].map((client, i) => /* @__PURE__ */ jsx("div", { style: fadeUp(resInView, i * 80), className: "bg-slate-800/60 rounded-2xl border border-slate-700/50 hover:border-violet-500/30 transition-all overflow-hidden group", children: /* @__PURE__ */ jsxs("div", { className: "p-7 md:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: client.logo, alt: client.name, className: "w-14 h-14 object-contain bg-white/10 rounded-xl p-2 flex-shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: client.name }),
              /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-1 bg-violet-500/10 text-violet-400 text-xs rounded-full border border-violet-500/20 mt-1", children: client.tag })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-violet-500/10 border border-violet-500/20 rounded-xl px-5 py-3 text-center flex-shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-violet-400", children: client.statNum !== null ? /* @__PURE__ */ jsx(CountUp, { end: client.statNum, active: resInView }) : client.stat }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400 mt-0.5 max-w-[120px]", children: client.statLabel }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-violet-500 font-medium mt-0.5", children: client.statSub })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed mb-6", children: client.text }),
        /* @__PURE__ */ jsx("img", { src: client.img, alt: `${client.name} results`, className: "w-full rounded-xl border border-slate-700/50 group-hover:border-violet-500/20 transition-colors" })
      ] }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "about", ref: aboutRef, className: "relative overflow-hidden bg-slate-900", style: { minHeight: "580px" }, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-y-0 right-0 w-full lg:w-3/5",
          style: {
            backgroundImage: "url(https://res.cloudinary.com/dduros3xw/image/upload/v1779627671/IMG_9853_wy8bwq.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            WebkitMaskImage: "linear-gradient(115deg, transparent 28%, black 58%)",
            maskImage: "linear-gradient(115deg, transparent 28%, black 58%)"
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 md:px-6 py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-lg", style: slideLeft(aboutInView), children: [
        /* @__PURE__ */ jsx("p", { className: "text-violet-400/40 text-6xl font-black tracking-tighter leading-none mb-2 select-none", children: "03" }),
        /* @__PURE__ */ jsx("p", { className: "text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4", children: language === "hu" ? "A csapat mögött" : "Behind the team" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-black text-white mb-6 tracking-tight", children: t2.about.title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300 leading-relaxed mb-8", children: t2.about.text }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#contact",
            className: "inline-flex items-center px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg transition-all gap-2 shadow-lg shadow-violet-500/20",
            children: [
              language === "hu" ? "Vedd fel a kapcsolatot" : "Get in touch",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-900", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3", children: language === "hu" ? "Gyakori kérdések" : "FAQ" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white", children: language === "hu" ? "Amit a legtöbben kérdeznek" : "What people ask most" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: (language === "hu" ? [
        { q: "Mennyi kerül egy Facebook hirdetés Budapesten?", a: "A Facebook hirdetések ára Magyarországon általában havi 50 000–500 000 Ft között mozog a hirdetési büdzsére vonatkozóan. A Nagy Levi Marketingnél átlátható árazással és 30 napos garanciával dolgozunk – ha 30 napon belül nem látod az eredményt, visszaadjuk a kezelési díjat." },
        { q: "Mennyi idő alatt látok eredményt a Google Ads hirdetéseimből?", a: "Google Ads kampányoknál általában 1–2 héten belül megjelennek az első megkeresések. SEO esetén 90 napon belül garantáljuk a TOP 10 helyezést Google-n, vagy visszaadjuk a pénzed." },
        { q: "Mit jelent a 30 napos garancia?", a: "Ha 30 napon belül nem látod a megbeszélt eredményeket a kampányodban, visszatérítjük a teljes kezelési díjat. Ez a garancia minden új ügyfelünkre vonatkozik, kötelezettség nélkül." },
        { q: "Milyen vállalkozásoknak ajánlott a Nagy Levi Marketing?", a: "Főként helyi szolgáltatóknak segítünk: szépségszalonoknak, fogászatoknak, autósiskoláknak, fitnesztermeknek és online vállalkozásoknak. Ügyfeleinknél az első hónapban átlagosan 181 megkeresést értünk el." }
      ] : [
        { q: "How much does Facebook advertising cost in Budapest?", a: "Facebook advertising in Hungary typically costs between 50,000–500,000 HUF per month in ad spend. At Nagy Levi Marketing we offer transparent pricing with a 30-day guarantee — if you don't see results within 30 days, we refund the management fee." },
        { q: "How quickly will I see results from Google Ads?", a: "Google Ads campaigns typically show initial inquiries within 1–2 weeks. For SEO, we guarantee a TOP 10 Google ranking within 90 days, or your money back." },
        { q: "What does the 30-day guarantee mean?", a: "If you don't see the agreed results within 30 days of your campaign launch, we refund the full management fee. This guarantee applies to all new clients with no strings attached." },
        { q: "What types of businesses does Nagy Levi Marketing work with?", a: "We primarily help local service providers: beauty salons, dental clinics, driving schools, gyms, and online businesses. Our clients average 181 leads in their first month." }
      ]).map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/60 border border-slate-700 rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-3", children: item.q }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed text-sm", children: item.a })
      ] }, i)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "contact", ref: contactRef, className: "py-20 bg-slate-800", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { style: fadeUp(contactInView), className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("p", { className: "text-violet-400 text-xs font-semibold uppercase tracking-widest mb-3", children: language === "hu" ? "Lépj velünk kapcsolatba" : "Get in touch" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-3", children: t2.contact.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: t2.contact.subtitle }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mt-5", children: [
          { icon: /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5" }), label: t2.contact.trustItems[0] },
          { icon: /* @__PURE__ */ jsx(CheckCircle, { className: "w-3.5 h-3.5" }), label: t2.contact.trustItems[1] },
          { icon: /* @__PURE__ */ jsx(Shield, { className: "w-3.5 h-3.5" }), label: t2.contact.trustItems[2] }
        ].map((trust, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-violet-400 text-xs font-medium bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20", children: [
          trust.icon,
          " ",
          trust.label
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-5 bg-slate-700/30 border border-slate-600/50 rounded-2xl p-8", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide", children: t2.contact.form.name }),
            /* @__PURE__ */ jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleInputChange, className: "w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm", required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide", children: t2.contact.form.email }),
            /* @__PURE__ */ jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleInputChange, className: "w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm", required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide", children: t2.contact.form.phone }),
            /* @__PURE__ */ jsx("input", { type: "tel", name: "phone", value: formData.phone, onChange: handleInputChange, className: "w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide", children: t2.contact.form.website }),
            /* @__PURE__ */ jsx("input", { type: "url", name: "website", value: formData.website, onChange: handleInputChange, placeholder: "example.com", className: "w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wide", children: t2.contact.form.runningAds }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: ["yes", "no"].map((val) => /* @__PURE__ */ jsxs("label", { className: `flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer transition-all text-sm ${formData.runningAds === val ? "border-violet-500 bg-violet-500/10 text-white" : "border-slate-600 text-slate-400 hover:border-slate-500"}`, children: [
            /* @__PURE__ */ jsx("input", { type: "radio", name: "runningAds", value: val, checked: formData.runningAds === val, onChange: handleInputChange, className: "hidden" }),
            val === "yes" ? t2.contact.form.runningAdsYes : t2.contact.form.runningAdsNo
          ] }, val)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide", children: t2.contact.form.message }),
          /* @__PURE__ */ jsx("textarea", { rows: 5, name: "message", value: formData.message, onChange: handleInputChange, className: "w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm resize-none", required: true })
        ] }),
        submitStatus === "success" && /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 flex-shrink-0" }),
          language === "hu" ? "Köszönjük! Az üzeneted elküldésre került. Hamarosan felveszük veled a kapcsolatot." : "Thank you! Your message has been sent. We will contact you soon."
        ] }),
        submitStatus === "error" && /* @__PURE__ */ jsx("div", { className: "p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm", children: language === "hu" ? "Hiba történt. Kérjük, próbálja újra." : "An error occurred. Please try again." }),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full bg-violet-500 hover:bg-violet-400 disabled:bg-violet-500/40 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all hover:shadow-xl hover:shadow-violet-500/20 text-base", children: isSubmitting ? language === "hu" ? "Küldés..." : "Sending..." : t2.contact.form.submit }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-slate-500 text-xs", children: language === "hu" ? "Adataid biztonságban vannak. Nem küldünk spamt." : "Your data is safe. We do not send spam." })
      ] })
    ] }) }) }),
    showPortfolioModal && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700", children: [
      /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: language === "hu" ? "Az előző munkáink" : "Our Previous Works" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setShowPortfolioModal(false), className: "text-slate-400 hover:text-white transition-colors", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-6 grid md:grid-cols-2 gap-3", children: t2.guarantee.links.map((link, i) => /* @__PURE__ */ jsxs("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "flex items-center justify-between p-4 bg-slate-700/50 border border-slate-600 hover:border-violet-500/50 rounded-xl text-violet-400 hover:text-violet-300 transition-all group", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: link.text }),
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-slate-900 border-t border-slate-800 py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold text-white mb-1", children: [
            "Nagy Levi ",
            /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Marketing" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mb-4", children: language === "hu" ? "Több ügyfél. Több bevétel. Garantáltan." : "More Clients. More Revenue. Guaranteed." }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: /* @__PURE__ */ jsxs("a", { href: "tel:+36706339977", className: "text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
            " +36 70 633 9977"
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-4 mt-2", children: /* @__PURE__ */ jsxs("a", { href: "mailto:nlevi@levinagymarketing.com", className: "text-slate-500 hover:text-white transition-colors text-sm flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
            " nlevi@levinagymarketing.com"
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-4 mt-2", children: /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/nagylevi_marketing/", target: "_blank", rel: "noopener noreferrer", className: "text-slate-500 hover:text-white transition-colors", children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-3 uppercase tracking-wide", children: language === "hu" ? "Szolgáltatások" : "Services" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: language === "hu" ? "/fizetett-hirdetesek" : "/en/paid-ads", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: language === "hu" ? "Fizetett Hirdetések" : "Paid Ads" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: language === "hu" ? "/ai-automatizalas" : "/en/ai-automation", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: language === "hu" ? "AI Automatizálás" : "AI Automation" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/rolunk", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: language === "hu" ? "Rólunk" : "About" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: language === "hu" ? "/blog" : "/en/blog", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Blog" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-3 uppercase tracking-wide", children: language === "hu" ? "Iparágak" : "Industries" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/szepsegszalon-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Szépségszalon Marketing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/fogorvos-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Fogorvos Marketing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/autoskola-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Autósiskola Marketing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/webaruhaz-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Webáruház Marketing" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-xs", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Nagy Levi Marketing. ",
          language === "hu" ? "Minden jog fenntartva." : "All rights reserved."
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setShowPrivacyPolicy(true), className: "text-xs text-slate-600 hover:text-slate-500 transition-colors underline", children: language === "hu" ? "Adatvédelmi Nyilatkozat" : "Privacy Policy" })
      ] })
    ] }) }) })
  ] });
}
const t = {
  // AuditForm
  badge: { en: "Free Website Audit", hu: "Ingyenes Weboldal Audit" },
  headline_geo: { en: "Is Your Website Invisible to AI Search?", hu: "Láthatatlan a weboldalad az AI keresők számára?" },
  headline_seo: { en: "Is Your Website Invisible to Google?", hu: "Láthatatlan a weboldalad a Google-n?" },
  sub_geo: { en: "Find out why AI engines skip your site — in 60 seconds, no signup.", hu: "Tudd meg, miért hagyják ki az AI keresők az oldaladat — 60 másodperc alatt, regisztráció nélkül." },
  sub_seo: { en: "Find out what's stopping Google from ranking your site — in 60 seconds, no signup.", hu: "Tudd meg, mi akadályoz a Google rangsorolásban — 60 másodperc alatt, regisztráció nélkül." },
  toggle_geo: { en: "AI Search", hu: "AI Keresés" },
  toggle_geo_sub: { en: "ChatGPT, Perplexity, Gemini", hu: "ChatGPT, Perplexity, Gemini" },
  toggle_seo: { en: "Google Search", hu: "Google Keresés" },
  toggle_seo_sub: { en: "Rankings & organic traffic", hu: "Rangsorolás & organikus forgalom" },
  placeholder: { en: "https://yourwebsite.com", hu: "https://weboldalad.hu" },
  btn_geo: { en: "Run My Free AI-Readiness Audit →", hu: "Ingyenes AI Audit Futtatása →" },
  btn_seo: { en: "Run My Free SEO Audit →", hu: "Ingyenes SEO Audit Futtatása →" },
  trust: { en: "AI-powered analysis · Free · ~60 seconds", hu: "AI-alapú elemzés · Ingyenes · ~60 másodperc" },
  url_required: { en: "Please enter your website URL.", hu: "Kérjük, add meg a weboldalad URL-jét." },
  // LoadingState
  loading_geo: {
    en: ["Loading your website...", "Extracting content + structure...", "Running PageSpeed analysis...", "Asking AI to evaluate your site...", "Building your report..."],
    hu: ["Weboldalad betöltése...", "Tartalom és struktúra elemzése...", "PageSpeed elemzés futtatása...", "AI értékeli az oldaladat...", "Jelentés elkészítése..."]
  },
  loading_seo: {
    en: ["Loading your website...", "Extracting content + structure...", "Running PageSpeed analysis...", "Analysing your Google SEO signals...", "Building your report..."],
    hu: ["Weboldalad betöltése...", "Tartalom és struktúra elemzése...", "PageSpeed elemzés futtatása...", "Google SEO jelek elemzése...", "Jelentés elkészítése..."]
  },
  loading_footer: { en: "This takes about 60 seconds", hu: "Ez körülbelül 60 másodpercet vesz igénybe" },
  // ScoreHero
  score_label_geo: { en: "AI-Readiness Score", hu: "AI-Felkészültségi Pontszám" },
  score_label_seo: { en: "SEO Score", hu: "SEO Pontszám" },
  // AuditReport
  badge_geo: { en: "⚡ AI Search (GEO) Audit", hu: "⚡ AI Keresés (GEO) Audit" },
  badge_seo: { en: "🔍 Google Search (SEO) Audit", hu: "🔍 Google Keresés (SEO) Audit" },
  found_preview: { en: "What we found (preview)", hu: "Mit találtunk (előnézet)" },
  found_sub: { en: "3 issues from your audit — the full report has", hu: "3 probléma az auditodból — a teljes jelentés tartalmaz" },
  found_more: { en: "more", hu: "további problémát" },
  audit_another: { en: "Audit a different site", hu: "Másik oldal auditálása" },
  footer_text: { en: "Powered by AI · Free for first audit · Built by Levi Nagy Marketing", hu: "AI által működtetve · Első audit ingyenes · Készítette: Levi Nagy Marketing" },
  // InsightCard
  directional_fix: { en: "Directional Fix", hu: "Javítási Irány" },
  // LockedSection
  full_report_ready: { en: "Full Report Ready", hu: "Teljes Jelentés Kész" },
  locked_title: { en: "Your 3 Most Critical Issues Are Locked", hu: "A 3 Legkritikusabb Problémád Zárolva Van" },
  locked_sub1: { en: "You've seen 3 issues. The full audit found", hu: "Láttál 3 problémát. A teljes audit összesen" },
  locked_sub2: { en: "total — including the 3 that matter most:", hu: "problémát talált — beleértve a 3 legfontosabbat:" },
  fix_revealed: { en: "Fix revealed in walkthrough", hu: "A megoldás az áttekintésben derül ki" },
  walkthrough_title: { en: "What you get in the free walkthrough:", hu: "Mit kapsz az ingyenes áttekintésben:" },
  no_pitch: { en: "No pitch, no pressure.", hu: "Nincs nyomulás, nincs nyomás." },
  no_pitch_sub: { en: "You leave with a clear action plan whether you work with us or not.", hu: "Egyértelmű cselekvési tervvel távozol, akár dolgozunk együtt, akár nem." },
  book_btn: { en: "Book My Free Walkthrough →", hu: "Foglalj Ingyenes Áttekintést →" },
  perks_geo: {
    en: ["Exact rewrites for each issue", "Copy-paste schema markup tailored to your site", "Priority order — what to fix first for max AI visibility", "A 30-day action plan"],
    hu: ["Pontos átírások minden problémához", "Másolható schema markup az oldaladhoz", "Prioritási sorrend — mit javíts először a maximális AI láthatóságért", "30 napos cselekvési terv"]
  },
  perks_seo: {
    en: ["Exact rewrites for title, meta & headings", "Copy-paste schema markup for Google", "Priority order — what to fix first for max rankings", "A 30-day SEO action plan"],
    hu: ["Pontos átírások a cím, meta és fejlécekhez", "Másolható schema markup a Google-hoz", "Prioritási sorrend — mit javíts először a legjobb rangsorolásért", "30 napos SEO cselekvési terv"]
  },
  // Calendly section
  book_title: { en: "Pick a time that works for you", hu: "Válassz egy számodra megfelelő időpontot" },
  book_label: { en: "Book Your Call", hu: "Időpont Foglalás" },
  back: { en: "← Back", hu: "← Vissza" },
  // Booked state
  booked_title: { en: "You're booked!", hu: "Az időpontod lefoglalva!" },
  booked_sub: { en: "Check your email for the confirmation. We'll review your full audit before the call.", hu: "Ellenőrizd az e-mailedben a visszaigazolást. Az áttekintés előtt átnézzük a teljes auditot." },
  booked_footer: { en: "We'll go through all", hu: "Végigmegyünk mind a" },
  booked_footer2: { en: "issues — starting with the ones that matter most.", hu: "problémán — a legfontosabbakkal kezdve." }
};
function tr(key, lang) {
  const entry = t[key];
  if (typeof entry === "object" && "en" in entry && "hu" in entry) {
    const val = entry[lang];
    return typeof val === "string" ? val : "";
  }
  return "";
}
function trArr(key, lang) {
  const entry = t[key];
  if (typeof entry === "object" && "en" in entry) {
    const val = entry[lang];
    return Array.isArray(val) ? val : [];
  }
  return [];
}
function AuditForm({ onSubmit, isLoading, lang }) {
  const [url, setUrl] = useState("");
  const [mode, setMode] = useState("geo");
  const [error, setError] = useState("");
  const modes = [
    { id: "geo", label: tr("toggle_geo", lang), sublabel: tr("toggle_geo_sub", lang), icon: Sparkles },
    { id: "seo", label: tr("toggle_seo", lang), sublabel: tr("toggle_seo_sub", lang), icon: Search }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) {
      setError(tr("url_required", lang));
      return;
    }
    setError("");
    onSubmit(trimmed, mode);
  };
  const ActiveIcon = mode === "geo" ? Sparkles : Search;
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-slate-900 flex items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-xl text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-teal-500/20", children: [
      /* @__PURE__ */ jsx(ActiveIcon, { className: "w-3.5 h-3.5" }),
      tr("badge", lang)
    ] }),
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-4 leading-tight", children: mode === "geo" ? tr("headline_geo", lang) : tr("headline_seo", lang) }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-lg mb-8", children: mode === "geo" ? tr("sub_geo", lang) : tr("sub_seo", lang) }),
    /* @__PURE__ */ jsx("div", { className: "flex bg-slate-800 rounded-xl p-1 mb-8 border border-slate-700", children: modes.map((m) => {
      const Icon = m.icon;
      const active = mode === m.id;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setMode(m.id),
          className: `flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${active ? "bg-teal-500 text-slate-900 shadow" : "text-slate-400 hover:text-white"}`,
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4 flex-shrink-0" }),
            /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-start leading-tight", children: [
              /* @__PURE__ */ jsx("span", { children: m.label }),
              /* @__PURE__ */ jsx("span", { className: `text-xs font-normal ${active ? "text-slate-700" : "text-slate-500"}`, children: m.sublabel })
            ] })
          ]
        },
        m.id
      );
    }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: url,
          onChange: (e) => {
            setUrl(e.target.value);
            setError("");
          },
          placeholder: tr("placeholder", lang),
          disabled: isLoading,
          className: "w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-5 py-4 text-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition disabled:opacity-50"
        }
      ),
      error && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm", children: error }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: isLoading,
          className: "w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold text-lg py-4 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed",
          children: mode === "geo" ? tr("btn_geo", lang) : tr("btn_seo", lang)
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-4", children: tr("trust", lang) })
  ] }) });
}
function LoadingState({ mode, lang }) {
  const [index, setIndex] = useState(0);
  const messages = mode === "geo" ? trArr("loading_geo", lang) : trArr("loading_seo", lang);
  useEffect(() => {
    setIndex(0);
    const interval = setInterval(() => {
      setIndex((prev) => prev < messages.length - 1 ? prev + 1 : prev);
    }, 1e4);
    return () => clearInterval(interval);
  }, [messages.length]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-slate-900 flex items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-md", children: [
    /* @__PURE__ */ jsx("div", { className: "relative w-20 h-20 mx-auto mb-8", children: /* @__PURE__ */ jsxs("svg", { className: "w-20 h-20 -rotate-90", viewBox: "0 0 80 80", children: [
      /* @__PURE__ */ jsx("circle", { cx: "40", cy: "40", r: "34", fill: "none", stroke: "#1E293B", strokeWidth: "6" }),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "40",
          cy: "40",
          r: "34",
          fill: "none",
          stroke: "#00BFA6",
          strokeWidth: "6",
          strokeLinecap: "round",
          strokeDasharray: "213.6",
          strokeDashoffset: "53.4",
          className: "animate-spin",
          style: { animationDuration: "2s" }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.4 },
        className: "text-white text-xl font-medium",
        children: messages[index]
      },
      index
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1.5 mt-6", children: messages.map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-1.5 rounded-full transition-all duration-500 ${i <= index ? "bg-teal-500 w-6" : "bg-slate-700 w-1.5"}` }, i)) }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-6", children: tr("loading_footer", lang) })
  ] }) });
}
const COLOR_MAP = {
  red: { text: "text-red-400", ring: "#F87171", bg: "bg-red-400/10" },
  yellow: { text: "text-yellow-400", ring: "#FBBF24", bg: "bg-yellow-400/10" },
  green: { text: "text-teal-400", ring: "#00BFA6", bg: "bg-teal-400/10" }
};
const CIRCUMFERENCE = 2 * Math.PI * 54;
function ScoreHero({ score, color, headline, mode, lang }) {
  const { text, ring, bg } = COLOR_MAP[color];
  const dashOffset = CIRCUMFERENCE * (1 - score / 10);
  return /* @__PURE__ */ jsx("div", { className: `rounded-2xl ${bg} border border-white/5 p-8 md:p-12 text-center mb-8`, children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: "flex flex-col items-center",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-36 h-36 mb-6", children: [
          /* @__PURE__ */ jsxs("svg", { className: "w-36 h-36 -rotate-90", viewBox: "0 0 120 120", children: [
            /* @__PURE__ */ jsx("circle", { cx: "60", cy: "60", r: "54", fill: "none", stroke: "#1E293B", strokeWidth: "8" }),
            /* @__PURE__ */ jsx(
              motion.circle,
              {
                cx: "60",
                cy: "60",
                r: "54",
                fill: "none",
                stroke: ring,
                strokeWidth: "8",
                strokeLinecap: "round",
                strokeDasharray: CIRCUMFERENCE,
                initial: { strokeDashoffset: CIRCUMFERENCE },
                animate: { strokeDashoffset: dashOffset },
                transition: { duration: 1.2, ease: "easeOut", delay: 0.3 }
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: `text-4xl font-bold ${text}`, children: score.toFixed(1) }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm font-medium uppercase tracking-widest mb-3", children: mode === "geo" ? tr("score_label_geo", lang) : tr("score_label_seo", lang) }),
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.5 },
            className: "text-white text-xl md:text-2xl font-semibold max-w-lg",
            children: headline
          }
        )
      ]
    }
  ) });
}
const ICONS$1 = {
  search: Search,
  heading: Heading1,
  code: Code2,
  sparkles: Sparkles,
  target: Target,
  gauge: Gauge
};
const SCORE_COLOR = (score) => {
  if (score < 5) return "text-red-400 bg-red-400/10";
  if (score <= 7) return "text-yellow-400 bg-yellow-400/10";
  return "text-teal-400 bg-teal-400/10";
};
function InsightCard({ insight, index, lang }) {
  const Icon = ICONS$1[insight.icon_hint] ?? Search;
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8", style: { animationDelay: `${index * 100}ms` }, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-slate-700 rounded-xl", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-teal-400" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-300 font-semibold", children: insight.category })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: `text-sm font-bold px-2.5 py-1 rounded-lg ${SCORE_COLOR(insight.score)}`, children: [
        insight.score,
        "/10"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-teal-300 text-sm font-mono bg-slate-700/60 border border-slate-600 rounded-lg px-3 py-2 mb-2 leading-relaxed break-words", children: insight.issue.observed_value }),
      /* @__PURE__ */ jsx("p", { className: "text-white leading-relaxed", children: insight.issue.problem })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-700 pt-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-teal-400 font-semibold uppercase tracking-wider mb-1.5", children: tr("directional_fix", lang) }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm leading-relaxed", children: insight.surface_fix })
    ] })
  ] });
}
function CalendlyEmbed({ url, onBooked }) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let script = null;
    const init = () => {
      if (containerRef.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill: {},
          utm: { utmSource: "audit-tool" }
        });
        setLoading(false);
      }
    };
    if (!window.Calendly) {
      script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = init;
      document.head.appendChild(script);
    } else {
      init();
    }
    const handleMessage = (e) => {
      var _a;
      if (e.origin === "https://calendly.com" && ((_a = e.data) == null ? void 0 : _a.event) === "calendly.event_scheduled") {
        onBooked();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [url, onBooked]);
  return /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl overflow-hidden border border-slate-700", children: [
    loading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-slate-900 z-10", children: /* @__PURE__ */ jsx(Loader2, { className: "w-6 h-6 text-teal-400 animate-spin" }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: containerRef,
        style: { minWidth: "280px", height: "min(660px, 80vh)" }
      }
    )
  ] });
}
const ICONS = {
  search: Search,
  heading: Heading1,
  code: Code2,
  sparkles: Sparkles,
  target: Target,
  gauge: Gauge
};
function LockedSection({ insights, additionalCount, freeCount, mode, lang, auditUrl, report }) {
  const [view, setView] = useState("cta");
  const calendlyUrl = "https://calendly.com/levinagy2323/discovery-call";
  const total = freeCount + insights.length + additionalCount;
  const perks = mode === "geo" ? trArr("perks_geo", lang) : trArr("perks_seo", lang);
  const handleBooked = useCallback(async () => {
    setView("booked");
    try {
      await fetch("/.netlify/functions/save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: auditUrl, mode, report })
      });
    } catch {
    }
  }, [auditUrl, mode, report]);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6 },
      className: "bg-gradient-to-br from-slate-800 to-slate-900 border border-teal-500/30 rounded-2xl p-8 md:p-10",
      children: /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
        view === "cta" && /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-teal-500/10 rounded-xl border border-teal-500/20", children: /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5 text-teal-400" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-teal-400 text-xs font-semibold uppercase tracking-widest", children: tr("full_report_ready", lang) })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-white text-2xl font-bold mb-3", children: tr("locked_title", lang) }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-400 mb-7", children: [
            tr("locked_sub1", lang),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: total }),
            " ",
            tr("locked_sub2", lang)
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-8", children: insights.map((insight, i) => {
            const Icon = ICONS[insight.icon_hint] ?? Target;
            return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/70 border border-slate-700/60 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mb-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4 text-slate-500 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 font-semibold text-sm", children: insight.category })
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold text-red-400 bg-red-400/10 px-2.5 py-0.5 rounded-md flex-shrink-0", children: [
                  insight.score,
                  "/10"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-slate-400 text-sm italic leading-relaxed", children: [
                '"',
                insight.teaser,
                '"'
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-slate-700/50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-3 h-3 text-slate-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-600 text-xs", children: tr("fix_revealed", lang) })
              ] })
            ] }, i);
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-xl p-5 mb-7", children: [
            /* @__PURE__ */ jsx("p", { className: "text-white font-semibold mb-3 text-sm", children: tr("walkthrough_title", lang) }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: perks.map((perk) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5 text-slate-300 text-sm", children: [
              /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-teal-400 flex-shrink-0" }),
              perk
            ] }, perk)) })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-400 text-sm mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: tr("no_pitch", lang) }),
            " ",
            tr("no_pitch_sub", lang)
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setView("calendly"),
              className: "block w-full bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-900 font-bold text-lg py-4 rounded-xl text-center transition",
              children: tr("book_btn", lang)
            }
          )
        ] }, "cta"),
        view === "calendly" && /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-teal-400 text-xs font-semibold uppercase tracking-widest mb-1", children: tr("book_label", lang) }),
              /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-bold", children: tr("book_title", lang) })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: () => setView("cta"), className: "text-slate-500 hover:text-slate-300 text-sm transition", children: tr("back", lang) })
          ] }),
          /* @__PURE__ */ jsx(CalendlyEmbed, { url: calendlyUrl, onBooked: handleBooked })
        ] }, "calendly"),
        view === "booked" && /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "text-center py-8", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-teal-500/10 border border-teal-500/20 rounded-full mb-5", children: /* @__PURE__ */ jsx(CalendarCheck, { className: "w-8 h-8 text-teal-400" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-white text-2xl font-bold mb-3", children: tr("booked_title", lang) }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-2", children: tr("booked_sub", lang) }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-500 text-sm", children: [
            tr("booked_footer", lang),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: total }),
            " ",
            tr("booked_footer2", lang)
          ] })
        ] }, "booked")
      ] })
    }
  );
}
function AuditReport({ report, mode, auditUrl, lang, onReset }) {
  const extra = report.locked_insights.length + report.additional_issues_count;
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-slate-900 py-12 px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-6", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider", children: mode === "geo" ? tr("badge_geo", lang) : tr("badge_seo", lang) }) }),
    /* @__PURE__ */ jsx(ScoreHero, { score: report.overall_score, color: report.score_color, headline: report.headline, mode, lang }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-white text-xl font-bold mb-2", children: tr("found_preview", lang) }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-400 text-sm mb-6", children: [
        tr("found_sub", lang),
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: extra }),
        " ",
        tr("found_more", lang)
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: report.free_insights.map((insight, i) => /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 + i * 0.12 }, children: /* @__PURE__ */ jsx(InsightCard, { insight, index: i, lang }) }, i)) })
    ] }),
    /* @__PURE__ */ jsx(
      LockedSection,
      {
        insights: report.locked_insights,
        additionalCount: report.additional_issues_count,
        freeCount: report.free_insights.length,
        mode,
        lang,
        auditUrl,
        report
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "text-center mt-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-xs mb-4", children: tr("footer_text", lang) }),
      /* @__PURE__ */ jsx("button", { onClick: onReset, className: "text-slate-500 hover:text-slate-300 text-sm transition underline", children: tr("audit_another", lang) })
    ] })
  ] }) }) });
}
const TIMEOUT_MS = 12e4;
function AuditPage() {
  const location = useLocation();
  const lang = location.pathname.startsWith("/en") ? "en" : "hu";
  const [state, setState] = useState("idle");
  const [report, setReport] = useState(null);
  const [mode, setMode] = useState("geo");
  const [auditUrl, setAuditUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const runAudit = async (url, selectedMode) => {
    var _a, _b;
    setState("loading");
    setMode(selectedMode);
    setAuditUrl(url);
    setErrorMsg("");
    setReport(null);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch("/.netlify/functions/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, mode: selectedMode, lang }),
        signal: controller.signal
      });
      clearTimeout(timer);
      const data = await res.json();
      if (!res.ok || data.error) {
        setErrorMsg(data.error || (lang === "hu" ? "Valami hiba történt. Kérjük, próbáld újra." : "Something went wrong. Please try again."));
        setState("error");
        return;
      }
      if (!((_a = data.report) == null ? void 0 : _a.free_insights) || !((_b = data.report) == null ? void 0 : _b.locked_insights)) {
        setErrorMsg(lang === "hu" ? "Érvénytelen válasz. Kérjük, próbáld újra." : "Invalid response. Please try again.");
        setState("error");
        return;
      }
      setReport(data.report);
      setState("done");
    } catch (err) {
      clearTimeout(timer);
      if (err.name === "AbortError") {
        setErrorMsg(lang === "hu" ? "Az elemzés túl sokáig tartott. Kérjük, próbáld újra." : "The analysis took too long. Please try again.");
      } else {
        setErrorMsg(lang === "hu" ? "Hálózati hiba — ellenőrizd a kapcsolatot." : "Network error — please check your connection.");
      }
      setState("error");
    }
  };
  const reset = () => {
    setState("idle");
    setReport(null);
    setAuditUrl("");
    setErrorMsg("");
  };
  if (state === "loading") return /* @__PURE__ */ jsx(LoadingState, { mode, lang });
  if (state === "done" && report) {
    return /* @__PURE__ */ jsx(AuditReport, { report, mode, auditUrl, lang, onReset: reset });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(AuditForm, { onSubmit: runAudit, isLoading: false, lang }),
    state === "error" && /* @__PURE__ */ jsxs("div", { className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-800 border border-red-500/40 text-red-300 px-6 py-4 rounded-xl text-sm max-w-md text-center shadow-xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3", children: errorMsg }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: reset,
          className: "bg-red-500/20 hover:bg-red-500/30 text-red-200 px-4 py-1.5 rounded-lg text-xs font-semibold transition",
          children: lang === "hu" ? "Újra próbálom" : "Try Again"
        }
      )
    ] })
  ] });
}
const blogs = [
  // ── Blog 1: Facebook Ads vs Google Ads ──────────────────────────────────
  {
    slug: "facebook-ads-vs-google-ads",
    datePublished: "2025-05-20",
    dateModified: "2025-05-20",
    coverImage: "https://res.cloudinary.com/dduros3xw/image/upload/v1754826429/Win_tdgauq.png",
    readTime: 6,
    category: "Facebook Ads",
    hu: {
      title: "Facebook Hirdetések vs Google Ads: Melyiket Válaszd 2025-ben?",
      metaTitle: "Facebook Hirdetések vs Google Ads 2025 | Nagy Levi Marketing",
      metaDescription: "Részletes összehasonlítás: mikor futtass Facebook hirdetést, és mikor Google Ads kampányt? Valós eredmények budapesti vállalkozásoknak.",
      keywords: ["facebook hirdetés", "google ads", "facebook vs google", "online hirdetés budapest", "marketing ügynökség budapest"],
      intro: 'Magyarországon az egyik leggyakoribb kérdés, amit kisvállalkozóktól kapok: "Levi, melyikbe fektessek — Facebookba vagy Google-ba?" A válasz nem egyszerű igen vagy nem — mindkét platform más-más helyzetben teljesít legjobban. Ebben az útmutatóban megmutatom, mikor melyiket érdemes választani, és hogyan hoztuk ki a legtöbbet ügyfeleink büdzséjéből.',
      sections: [
        {
          type: "h2",
          content: "Mi a különbség a Facebook hirdetések és a Google Ads között?"
        },
        {
          type: "p",
          content: "A két platform alapvetően különböző logika szerint működik. A Facebook hirdetések push marketing eszközök: az embereket érdeklődésük és viselkedésük alapján éred el — akkor is, ha nem keresnek aktívan semmit. Te hozod el az ajánlatot hozzájuk. A Google Ads ezzel szemben pull marketing: azokat éred el, akik aktívan keresnek valamit — és te ott vagy az első helyen, amikor szükségük van rád."
        },
        {
          type: "h2",
          content: "Mikor éri meg Facebook hirdetést futtatni?"
        },
        {
          type: "p",
          content: "Facebook hirdetések akkor a legerősebbek, ha a következő feltételek teljesülnek:"
        },
        {
          type: "ul",
          items: [
            "Vizuális szolgáltatást kínálsz (szépségipar, étterem, fitness, ingatlan)",
            "Új márkát vagy ajánlatot akarsz megismertetni a célközönségeddel",
            "Szűk demográfiai csoportot célzol (pl. 30-45 éves anyák Budapest V. kerületéből)",
            "Remarketing kampányt futtatsz — visszahozod a korábban érdeklődőket",
            "Relatíve alacsonyabb büdzsével indulsz (50-100 ezer Ft/hó is elegendő lehet)"
          ]
        },
        {
          type: "callout",
          content: "💡 Valós eredmény: Magyar Zsuzsa sminktetoválás stúdiójánál Facebook hirdetésekkel 181 megkeresést szereztünk az első hónapban — 3,5× többet, mint a korábbi kampányokkal. A siker kulcsa: pontos célzás és konverzióra optimalizált landing oldal."
        },
        {
          type: "h2",
          content: "Mikor éri meg Google Ads kampányt futtatni?"
        },
        {
          type: "p",
          content: "Google Ads kampányok ott igazán hatékonyak, ahol az azonnali vásárlási szándék magas:"
        },
        {
          type: "ul",
          items: [
            "Helyi szolgáltatást nyújtasz (fogászat, ügyvéd, autószerelő, vízszerelő)",
            "Azonnali megkereséseket szeretnél — Google Ads-nél 1-2 héten belül jönnek az első leadek",
            "Konkrét kulcsszavakra akarsz megjelenni a versenytársak előtt",
            "Pontosan mérhető ROI-t szeretnél rövid távon"
          ]
        },
        {
          type: "callout",
          content: "💡 Valós eredmény: A Denti Implant Center esetében Google Ads-szel és új weboldallal 53 form kitöltést szereztünk az első hónapban — ez több millió forint bevételt jelentett."
        },
        {
          type: "h2",
          content: "Facebook Ads vs Google Ads — mikor melyiket?"
        },
        {
          type: "ul",
          items: [
            "Facebook Ads: brand building, vizuális iparágak, érdeklődők generálása, remarketing",
            "Google Ads: azonnali keresési igény, helyi szolgáltatók, gyors konverzió",
            "Mindkettő: hosszú távú növekedés, skálázható kampányok, teljes tölcsér lefedés"
          ]
        },
        {
          type: "h2",
          content: "A legjobb stratégia: kombináld a kettőt"
        },
        {
          type: "p",
          content: "A legeredményesebb ügyfeleinknél mindkét platform fut egyszerre — de különböző célokra. A Google Ads hozza az azonnali megkereséseket (magas keresési szándékú embereket), a Facebook Ads pedig tudatosítja a márkát, és retargetinggel visszahozza azokat, akik már érdeklődtek. Ha csak eggyel kezdesz, válaszd azt, amelyik az iparágadban bizonyítottan jobban teljesít — és bővítsd fokozatosan."
        },
        {
          type: "cta",
          content: "Nem tudod, melyikkel érdemes kezdened? Kérj ingyenes konzultációt — megmutatjuk, melyik stratégia illik legjobban a vállalkozásodhoz."
        }
      ],
      faqs: [
        {
          q: "Mennyibe kerül havonta a Facebook hirdetés Magyarországon?",
          a: "A hirdetési büdzsé általában 50 000–300 000 Ft/hó között mozog kisvállalkozások esetén. Ebbe nem számít bele a kezelési díj. A Nagy Levi Marketingnél átlátható, rugalmas csomagokkal dolgozunk, hosszú szerződés nélkül."
        },
        {
          q: "Melyik platform hoz gyorsabb eredményt — Facebook vagy Google?",
          a: "Google Ads általában gyorsabban hoz megkereséseket (1-2 hét), mivel azokat éri el, akik aktívan keresnek. Facebook Ads-nél az optimalizáláshoz 2-4 hét kell, de hosszú távon rendkívül hatékony."
        },
        {
          q: "Lehet egyszerre mindkét platformon hirdetni?",
          a: "Igen, sőt ez az ideális stratégia. A Google Ads a keresési szándékot ragadja meg, a Facebook Ads a tudatosságot és remarketing célokat szolgálja. A legjobb eredményeket kombinált kampányokkal érjük el."
        },
        {
          q: "Melyik iparágban működik jobban a Facebook hirdetés?",
          a: "Szépségipar, wellness, éttermipar, fitness, ingatlan és e-commerce területeken különösen hatékony a Facebook Ads, ahol a vizualitás és az érzelmek erős szerepet játszanak."
        }
      ]
    },
    en: {
      title: "Facebook Ads vs Google Ads: Which Should You Choose in 2025?",
      metaTitle: "Facebook Ads vs Google Ads 2025 | Nagy Levi Marketing Budapest",
      metaDescription: "Detailed comparison: when should you run Facebook ads vs Google Ads? Real results and examples for Budapest businesses.",
      keywords: ["facebook ads", "google ads", "facebook vs google ads", "marketing budapest", "online advertising hungary"],
      intro: `One of the most common questions I get from business owners in Hungary: "Levi, should I invest in Facebook or Google?" The answer is not a simple yes or no — both platforms excel in different situations. In this guide, I'll show you when to choose each, based on real results from our clients.`,
      sections: [
        {
          type: "h2",
          content: "What is the difference between Facebook Ads and Google Ads?"
        },
        {
          type: "p",
          content: "The two platforms operate on fundamentally different logic. Facebook Ads are push marketing: you reach people based on their interests and behavior — even when they are not actively searching for anything. You bring the offer to them. Google Ads, on the other hand, is pull marketing: you reach people who are actively searching for a solution, and you appear at the top when they need you most."
        },
        {
          type: "h2",
          content: "When should you run Facebook Ads?"
        },
        {
          type: "p",
          content: "Facebook Ads are most powerful when:"
        },
        {
          type: "ul",
          items: [
            "You offer a visual service (beauty, restaurants, fitness, real estate)",
            "You want to introduce a new brand or offer to your audience",
            "You target a narrow demographic (e.g. women aged 30-45 in Budapest)",
            "You run remarketing campaigns — bringing back previous visitors",
            "You are starting with a lower budget (50,000–100,000 HUF/month can work)"
          ]
        },
        {
          type: "callout",
          content: "💡 Real result: At Magyar Zsuzsa's permanent makeup studio, Facebook Ads delivered 181 leads in the first month — 3.5× more than previous campaigns. Key: precise targeting + conversion-optimized landing page."
        },
        {
          type: "h2",
          content: "When should you run Google Ads?"
        },
        {
          type: "p",
          content: "Google Ads campaigns excel where immediate purchase intent is high:"
        },
        {
          type: "ul",
          items: [
            "You provide local services (dental, legal, auto repair, plumbing)",
            "You want fast results — Google Ads typically shows leads within 1-2 weeks",
            "You want to appear above competitors for specific keywords",
            "You want measurable ROI in the short term"
          ]
        },
        {
          type: "callout",
          content: "💡 Real result: Denti Implant Center received 53 form submissions in their first month using Google Ads + a new website — generating millions in revenue."
        },
        {
          type: "h2",
          content: "Facebook Ads vs Google Ads — a quick decision guide"
        },
        {
          type: "ul",
          items: [
            "Facebook Ads: brand building, visual industries, lead generation, remarketing",
            "Google Ads: high-intent search, local services, fast conversions",
            "Both: long-term growth, scalable campaigns, full funnel coverage"
          ]
        },
        {
          type: "h2",
          content: "The smartest strategy: combine both"
        },
        {
          type: "p",
          content: "Our most successful clients run both platforms simultaneously — but for different purposes. Google Ads captures immediate demand (people already searching), while Facebook Ads builds brand awareness and retargets previous visitors. If you are just starting, choose the one that works best in your industry and scale from there."
        },
        {
          type: "cta",
          content: "Not sure which platform is right for you? Get a free consultation — we'll show you the exact strategy that fits your business."
        }
      ],
      faqs: [
        {
          q: "How much does Facebook advertising cost per month in Hungary?",
          a: "Ad spend for small businesses in Hungary typically ranges from 50,000–300,000 HUF per month. Management fees are separate. At Nagy Levi Marketing, we work with transparent, flexible packages and no long-term contracts."
        },
        {
          q: "Which platform delivers faster results — Facebook or Google?",
          a: "Google Ads typically delivers leads faster (within 1-2 weeks) since it targets people actively searching. Facebook Ads requires 2-4 weeks to optimize, but is highly effective long-term."
        },
        {
          q: "Can I run both platforms at the same time?",
          a: "Yes — and that is the ideal strategy. Google Ads captures search intent, while Facebook Ads handles brand awareness and remarketing. The best results come from combined campaigns."
        },
        {
          q: "Which industries work best with Facebook Ads?",
          a: "Beauty, wellness, restaurants, fitness, real estate, and e-commerce perform especially well on Facebook, where visuals and emotions play a strong role."
        }
      ]
    }
  },
  // ── Blog 2: Facebook Ads cost in Hungary ────────────────────────────────
  {
    slug: "mennyibe-kerul-a-facebook-hirdetes",
    datePublished: "2025-05-22",
    dateModified: "2025-05-22",
    coverImage: "https://res.cloudinary.com/dduros3xw/image/upload/v1754251188/Aesthetic_Clinic_FB_Ads_xwgn1w.png",
    readTime: 5,
    category: "Facebook Ads",
    hu: {
      title: "Mennyibe Kerül a Facebook Hirdetés Magyarországon? (2025-ös Útmutató)",
      metaTitle: "Facebook Hirdetés Ár Magyarország 2025 | Nagy Levi Marketing",
      metaDescription: "Pontos árak, átlagos CPC és CPM értékek Magyarországon 2025-ben. Mekkora büdzsével érdemes elkezdeni? Valós adatok és példák.",
      keywords: ["facebook hirdetés ár", "facebook ads költség", "facebook reklám ár", "hirdetés budapest", "facebook marketing"],
      intro: 'Ha Facebook hirdetést tervezel, az első kérdés szinte mindig ez: "Mennyibe fog kerülni?" Ebben az útmutatóban pontos számokat és valós példákat mutatok — nem elméletet, hanem azt, amit mi ténylegesen tapasztalunk ügyfeleinkkel Magyarországon nap mint nap.',
      sections: [
        {
          type: "h2",
          content: "Hogyan számolja fel a Facebook a hirdetések árát?"
        },
        {
          type: "p",
          content: "A Facebook aukciós rendszerben áraz. Nem fizetsz fix összeget — az ár attól függ, ki más versenyez ugyanazért a célközönségért, milyen minőségű a hirdetésed, és mi a kampány célkitűzése. Ez azt jelenti, hogy két azonos büdzsével futó kampány teljesen eltérő eredményt hozhat, attól függően, hogyan van felépítve."
        },
        {
          type: "h2",
          content: "Átlagos Facebook hirdetési költségek Magyarországon (2025)"
        },
        {
          type: "ul",
          items: [
            "CPC (kattintásonkénti ár): 30–120 Ft",
            "CPM (1000 megjelenésenként): 300–800 Ft",
            "CPL (érdeklődőnként, Lead Ads): 500–3 000 Ft",
            "Konverzió (pl. időpontfoglalás, vásárlás): 800–5 000 Ft"
          ]
        },
        {
          type: "callout",
          content: "⚠️ Fontos: ezek iparági átlagok. Egy szépségszalon esetén 400 Ft/lead is elérhető, míg ingatlaniparban vagy orvosi területen ez 3-5× magasabb lehet. Az ár erősen függ a célzástól, a hirdetés minőségétől és a versenytől."
        },
        {
          type: "h2",
          content: "Mi befolyásolja leginkább a Facebook hirdetések árát?"
        },
        {
          type: "ul",
          items: [
            "Célközönség mérete és verseny — minél szűkebb, annál drágább",
            "A hirdetés minősége és relevanciapontszáma",
            "Kampány célkitűzés (elérés, forgalom, lead gen, konverzió)",
            "Iparág — egészségügy és ingatlan drágább, mint szórakoztatás",
            "Időszak — ünnepeknél, Black Friday-nél akár 2-3× drágább",
            "Landing oldal minősége — jobb oldal = jobb konverziós arány = olcsóbb eredmény"
          ]
        },
        {
          type: "h2",
          content: "Mekkora büdzsével érdemes elkezdeni?"
        },
        {
          type: "p",
          content: "Ez a leggyakrabban feltett kérdés. A válasz az üzleti célodtól függ:"
        },
        {
          type: "ul",
          items: [
            "Brand awareness (ismertség építés): 30–50 ezer Ft/hó elegendő",
            "Leadgenerálás (érdeklődők szerzése): minimum 80–150 ezer Ft/hó ajánlott",
            "Webshop konverziók: 150–300+ ezer Ft/hó",
            "Gyors, komoly növekedés: 300 ezer Ft/hó felett"
          ]
        },
        {
          type: "callout",
          content: "💡 Valós példa: Bepretty Studio 235 érdeklődőt szerzett az első hónapban 150 ezer Ft büdzsével — ez kb. 640 Ft/érdeklődő volt. Ez az iparági átlagnál lényegesen jobb eredmény a precíz célzásnak köszönhetően."
        },
        {
          type: "h2",
          content: "Hogyan csökkentsd a Facebook hirdetési költségeidet?"
        },
        {
          type: "ul",
          items: [
            "A/B tesztelj folyamatosan — próbálj ki több képet, szöveget, CTA-t",
            "Szűkítsd a célközönséget a legértékesebb szegmensre (ne hirdessk mindenkinek)",
            "Optimalizáld a landing oldalt — egy jobb oldal drasztikusan csökkenti a konverziós költségeket",
            "Használj Lookalike közönségeket — a Facebook hasonló embereket keres a legjobb ügyfeleidhez",
            "Rendszeresen figyelj: állítsd le a rosszul teljesítő hirdetéseket, ne hagyd futni",
            "Remarketing kampányokkal érd el újra az érdeklődőket — ezek általában olcsóbbak"
          ]
        },
        {
          type: "h2",
          content: "Hirdetési büdzsé + kezelési díj: mivel számolj valójában?"
        },
        {
          type: "p",
          content: "A hirdetési büdzsén felül az ügynökség kezelési díjával is számolnod kell. Fontos: a hirdetési büdzséd közvetlenül a Facebooknak megy — az ügynökség csak a kampányok tervezéséért és kezeléséért számít fel díjat. A Nagy Levi Marketingnél átlátható árazással dolgozunk: nincsenek rejtett költségek, nincsenek hosszú szerződések. 30 napos garanciával."
        },
        {
          type: "cta",
          content: "Szeretnéd tudni, pontosan mennyibe kerülne a te vállalkozásodnak? Kérj ingyenes konzultációt — megmutatjuk a várható büdzsét és az elérhető eredményeket."
        }
      ],
      faqs: [
        {
          q: "Mi az abszolút minimum büdzsé, amivel érdemes elkezdeni Facebook hirdetést?",
          a: "Napi minimum 1 500–2 000 Ft hirdetési büdzsé (havi kb. 50 000 Ft) szükséges ahhoz, hogy a Facebook elegendő adatot gyűjtsön a kampány optimalizálásához. Ennél kevesebb esetén a tanulási fázis nem tud megfelelően lefutni."
        },
        {
          q: "Mikor látom az eredményeket a Facebook hirdetésekből?",
          a: "Az első 1-2 hétben a Facebook tanulási fázisban van — ekkor gyűjt adatokat. Az optimális teljesítményt általában 3-4 hét után éri el a kampány. Mi 30 napos garanciával dolgozunk: ha nem látod a megbeszélt eredményeket, visszaadjuk a kezelési díjat."
        },
        {
          q: "Van különbség a Facebook és az Instagram hirdetések ára között?",
          a: "Ugyanazon Meta Ads Manager rendszeren keresztül futnak, de az Instagram általában magasabb CPM-mel jár, cserébe magasabb engagement rátát hozhat. A legjobb eredményért mindkét felületen érdemes hirdetni és az adatok alapján optimalizálni."
        },
        {
          q: "Mennyibe kerül egy Facebook hirdetés kezelése ügynökségnél?",
          a: "Magyarországon az ügynökségi kezelési díjak általában 50 000–200 000 Ft/hó között mozognak, a kampányok méretétől és összetettségétől függően. A Nagy Levi Marketingnél átlátható, rugalmas csomagokat kínálunk — érdeklődjél ingyenes konzultáción."
        }
      ]
    },
    en: {
      title: "How Much Do Facebook Ads Cost in Hungary? (2025 Guide)",
      metaTitle: "Facebook Ads Cost Hungary 2025 | Nagy Levi Marketing Budapest",
      metaDescription: "Exact prices, average CPC and CPM values in Hungary for 2025. How much budget do you need to start? Real data and examples from live campaigns.",
      keywords: ["facebook ads cost hungary", "facebook advertising price", "facebook ads budget", "marketing budapest", "facebook ads 2025"],
      intro: 'If you are planning to run Facebook ads, the first question is almost always: "How much will it cost?" In this guide, I will share exact numbers and real examples — not theory, but what we actually see running campaigns for clients across Hungary every day.',
      sections: [
        {
          type: "h2",
          content: "How does Facebook charge for ads?"
        },
        {
          type: "p",
          content: "Facebook uses an auction-based pricing system. You do not pay a fixed amount — the price depends on how many other advertisers are competing for the same audience, the quality of your ad, and your campaign objective. Two campaigns with identical budgets can deliver very different results depending on how they are built."
        },
        {
          type: "h2",
          content: "Average Facebook advertising costs in Hungary (2025)"
        },
        {
          type: "ul",
          items: [
            "CPC (cost per click): 0.08–0.32 EUR",
            "CPM (cost per 1,000 impressions): 0.80–2.20 EUR",
            "CPL (cost per lead, Lead Ads): 1.30–8.00 EUR",
            "Conversion (e.g. appointment booking): 2.20–13.50 EUR"
          ]
        },
        {
          type: "callout",
          content: "⚠️ Important: these are industry averages. A beauty salon can achieve leads at 1.00 EUR, while real estate or medical sectors may be 3-5× higher. Costs are heavily influenced by targeting, ad quality, and competition."
        },
        {
          type: "h2",
          content: "What factors affect Facebook ad costs most?"
        },
        {
          type: "ul",
          items: [
            "Audience size and competition — narrower audiences cost more per person reached",
            "Ad quality and relevance score",
            "Campaign objective (reach, traffic, lead gen, conversions)",
            "Industry — healthcare and real estate are pricier than entertainment",
            "Season — costs can spike 2-3× during holidays and Black Friday",
            "Landing page quality — a better page means better conversion rates and lower cost per result"
          ]
        },
        {
          type: "h2",
          content: "How much budget do you need to start?"
        },
        {
          type: "ul",
          items: [
            "Brand awareness: 130–270 EUR/month is sufficient",
            "Lead generation: minimum 215–400 EUR/month recommended",
            "E-commerce conversions: 400–800+ EUR/month",
            "Aggressive growth: 800+ EUR/month"
          ]
        },
        {
          type: "callout",
          content: "💡 Real example: Bepretty Studio got 235 leads in the first month with ~400 EUR in ad spend — approximately 1.70 EUR per lead. This is well below industry average thanks to precise targeting."
        },
        {
          type: "h2",
          content: "How to reduce your Facebook advertising costs"
        },
        {
          type: "ul",
          items: [
            "Continuously A/B test — try multiple images, copy variations, and CTAs",
            "Narrow your audience to the highest-value segment",
            "Optimize your landing page — a better page drastically cuts cost per conversion",
            "Use Lookalike Audiences — Facebook finds people similar to your best customers",
            "Monitor regularly: pause underperforming ads before they drain your budget",
            "Leverage retargeting — reaching warm audiences is almost always cheaper"
          ]
        },
        {
          type: "h2",
          content: "Ad budget vs management fee: what to budget for"
        },
        {
          type: "p",
          content: "Beyond ad spend, you need to account for the agency management fee. Important: your ad budget goes directly to Facebook — the agency charges separately for campaign strategy and management. At Nagy Levi Marketing we operate with full pricing transparency: no hidden fees, no long contracts, and a 30-day money-back guarantee."
        },
        {
          type: "cta",
          content: "Want to know exactly how much it would cost for your business? Get a free consultation — we'll show you the expected budget and realistic results."
        }
      ],
      faqs: [
        {
          q: "What is the absolute minimum budget to start Facebook advertising?",
          a: "A daily minimum of ~4–5 EUR (roughly 130 EUR/month) is needed for Facebook to gather enough data to optimize the campaign. Below this, the learning phase cannot complete properly."
        },
        {
          q: "How quickly will I see results from Facebook ads?",
          a: "The first 1-2 weeks are the learning phase — Facebook is gathering data. Optimal performance is typically reached after 3-4 weeks. We work with a 30-day guarantee: if you do not see the agreed results, we refund the management fee."
        },
        {
          q: "Is there a difference in cost between Facebook and Instagram ads?",
          a: "Both run through the same Meta Ads Manager, but Instagram typically has a higher CPM, though often with higher engagement rates. For best results, running on both placements and optimizing based on data is recommended."
        },
        {
          q: "How much does agency management of Facebook ads cost in Hungary?",
          a: "Agency management fees in Hungary typically range from 130–540 EUR/month depending on campaign size and complexity. At Nagy Levi Marketing, we offer transparent, flexible packages — ask about pricing in a free consultation."
        }
      ]
    }
  },
  // ── Blog 3: 7 Google Ads mistakes ───────────────────────────────────────
  {
    slug: "7-google-ads-hiba",
    datePublished: "2025-05-24",
    dateModified: "2025-05-24",
    coverImage: "https://res.cloudinary.com/dduros3xw/image/upload/v1771582094/Route_11_Results_fuormi.png",
    readTime: 7,
    category: "Google Ads",
    hu: {
      title: "7 Google Ads Hiba, Ami Feleslegesen Emészti a Büdzsét (és Hogyan Kerüld El)",
      metaTitle: "7 Google Ads Hiba 2025 | Nagy Levi Marketing Budapest",
      metaDescription: "A 7 leggyakoribb Google Ads hiba, amit magyar kisvállalkozók elkövetnek — és a konkrét megoldás minden egyes esethez. Valós kampánytapasztalatok alapján.",
      keywords: ["google ads hiba", "google ads optimalizálás", "google ads tippek", "google hirdetés budapest", "ppc hibák"],
      intro: "Az ügyfeleink többsége, mielőtt hozzám kerül, már futtatott Google Ads kampányokat — de az eredmények nem feleltek meg a várakozásoknak. A probléma általában nem a platform, hanem néhány jól azonosítható, javítható hiba. Ebben a cikkben összegyűjtöttem a 7 leggyakoribb hibát, amelyeket valódi kampányokban látunk rendszeresen.",
      sections: [
        {
          type: "h2",
          content: "1. Hiba: Túl széles egyezési típusok használata"
        },
        {
          type: "p",
          content: 'Ha "fogorvos" kulcsszóval broad match-ben hirdetsz, megjelenhetsz arra is, hogy "fogorvos tanulmányok", "fogorvos fizetés" vagy "fogorvos vicc". Ezek az emberek nem fognak ügyfeled lenni. Megoldás: használj pontos egyezést (exact match) és kifejezés egyezést (phrase match), és rendszeresen ellenőrizd a keresési kifejezések jelentését.'
        },
        {
          type: "h2",
          content: "2. Hiba: Negatív kulcsszavak teljes elhanyagolása"
        },
        {
          type: "p",
          content: 'A negatív kulcsszavak megakadályozzák, hogy irreleváns keresések esetén megjelenjen a hirdetésed — és fizess értük. Ha ügyvéd vagy, érdemes kizárni: "ingyenes", "önképviselet", "jogi tanácsadás ingyen". Egy jól összeállított negatív listával 20-30%-kal csökkentheted a felesleges kiadásokat.'
        },
        {
          type: "h2",
          content: "3. Hiba: A landing oldal nem egyezik a hirdetéssel"
        },
        {
          type: "p",
          content: 'Ha a hirdetés "fogimplantátum Budapest 2 nap alatt" témájú, de az oldalad általános fogászati kezdőoldal, a felhasználó elvész — és a Google Minőségi Pontszámod is csökken. Alacsonyabb pontszám = drágább kattintások. Minden hirdetéscsoporthoz dedikált, célzott landing page-t érdemes készíteni.'
        },
        {
          type: "callout",
          content: "💡 Valós eredmény: A Denti Implant Center esetében az új, dedikált landing oldal bevezetése után a konverziós arány megduplázódott, miközben a kattintási költség csökkent."
        },
        {
          type: "h2",
          content: "4. Hiba: Nincs konverziókövetés"
        },
        {
          type: "p",
          content: "Ha nem méred, hogy ki töltött ki egy formot, ki hívott fel, vagy ki foglalt időpontot — nem tudhatod, melyik kulcsszó és hirdetés hozza valójában az ügyfeleket. Konverziókövetés nélkül vakrepülésben vagy. A Google Ads konverziókövetés beállítása ingyenes és elengedhetetlen."
        },
        {
          type: "h2",
          content: "5. Hiba: Hirdetési menetrend figyelmen kívül hagyása"
        },
        {
          type: "p",
          content: "A kampányok alapból 24/7 futnak. Ha a célközönséged hétköznap délelőtt 9 és este 7 között keres, akkor az éjszakai és hétvégi megjelenések csak büdzsét égetnek. Elemezd az adataid, és állítsd be az időzítést: melyik napon és napszakban konvertál a legjobban a kampányod?"
        },
        {
          type: "h2",
          content: "6. Hiba: Csak egy hirdetési variánst futtatnak"
        },
        {
          type: "p",
          content: "Minden hirdetéscsoportban legalább 2-3 hirdetési variánst érdemes futtatni egyszerre. Különböző headline-ok, description-ök, CTA-k — a Google Ads maga optimalizálja, melyiket mutassa többet. Ha csak egy hirdetésed van, sohasem tudod meg, mi működik jobban."
        },
        {
          type: "h2",
          content: "7. Hiba: A kampányt beállítják és elfelejtik"
        },
        {
          type: "p",
          content: 'A Google Ads nem egy "set and forget" eszköz. A versenytársak változtatnak a licitjeiken, új kulcsszavak jelennek meg, a szezonalitás változik. Hetente legalább egyszer érdemes ellenőrizni a keresési kifejezések jelentését, a hirdetések teljesítményét és a büdzsé felhasználást.'
        },
        {
          type: "callout",
          content: "💡 Valós eredmény: A Route 11 Autósiskola esetében ezeket a hibákat korrigálva az alulteljesítő iskola 3 hónap alatt a három iskola közül a legjobban teljesítővé vált — anélkül, hogy a büdzsét növeltük volna."
        },
        {
          type: "cta",
          content: "Fut már Google Ads kampányod, de nem hozza a várt eredményt? Kérj ingyenes kampányauditot — megvizsgáljuk és konkrét javaslatokat adunk, kötelezettség nélkül."
        }
      ],
      faqs: [
        {
          q: "Hogyan tudom ellenőrizni, hogy jól teljesít-e a Google Ads kampányom?",
          a: "A legfontosabb mutatók: CTR (click-through rate) — ideálisan 5%+ keresési kampányoknál; Minőségi Pontszám (Quality Score) — 7+ az optimális; konverziós ráta; és költség/konverzió. Ha az utóbbi magasabb, mint az ügyfél életértéke, a kampány veszteséges."
        },
        {
          q: "Mennyi idő szükséges a Google Ads optimalizálásához hetente?",
          a: "Alapszintű kampányokhoz heti 1-2 óra elegendő. Komplexebb, több hirdetéscsoportos kampányoknál 4-6 óra is szükséges lehet. Ez az egyik oka, amiért megéri ügynökséggel dolgozni — mi ezt proaktívan, folyamatosan végezzük."
        },
        {
          q: "Mikor érdemes Google Ads ügynökségre bízni a kampányokat?",
          a: "Ha a havi büdzsé meghaladja a 100 000 Ft-ot, és nincs dedikált, tapasztalt PPC specialistád, megéri ügynökséget bevonni. A kezelési díj általában hamar megtérül a jobb optimalizálás révén."
        },
        {
          q: "Mennyibe kerül egy Google Ads audit?",
          a: "A Nagy Levi Marketingnél az első audit ingyenes. Megnézzük a kampányodat, azonosítjuk a problémákat, és konkrét javaslatokat adunk — teljesen ingyen, kötelezettség nélkül."
        }
      ]
    },
    en: {
      title: "7 Google Ads Mistakes That Are Wasting Your Budget (And How to Fix Them)",
      metaTitle: "7 Google Ads Mistakes 2025 | Nagy Levi Marketing Budapest",
      metaDescription: "The 7 most common Google Ads mistakes small businesses make — and the exact fix for each one. Based on real campaign experience.",
      keywords: ["google ads mistakes", "google ads optimization", "google ads tips", "google advertising budapest", "ppc mistakes"],
      intro: "Most clients who come to us have already been running Google Ads campaigns — but results did not meet expectations. The problem is rarely the platform itself; it is almost always a handful of identifiable, fixable mistakes. Here are the 7 most common ones we see in real campaigns.",
      sections: [
        {
          type: "h2",
          content: "Mistake #1: Using broad match keywords without control"
        },
        {
          type: "p",
          content: 'If you bid on "dentist" in broad match, you may appear for "dentist salary", "dentist jokes", or "become a dentist". None of those people will become your client. Fix: use exact match and phrase match, and regularly review your search terms report to catch irrelevant traffic.'
        },
        {
          type: "h2",
          content: "Mistake #2: Ignoring negative keywords entirely"
        },
        {
          type: "p",
          content: 'Negative keywords prevent your ad from showing for irrelevant searches — and costing you money. If you are a lawyer, exclude: "free", "self-representation", "free legal advice". A well-built negative keyword list can cut wasted spend by 20-30% immediately.'
        },
        {
          type: "h2",
          content: "Mistake #3: Sending traffic to a generic homepage"
        },
        {
          type: "p",
          content: 'If your ad says "Dental implants Budapest in 2 days" but the landing page is a generic dental homepage, visitors leave immediately — and your Quality Score drops. A lower Quality Score means higher cost per click. Every ad group deserves a dedicated, targeted landing page.'
        },
        {
          type: "callout",
          content: "💡 Real result: At Denti Implant Center, introducing a dedicated landing page doubled the conversion rate while reducing cost per click."
        },
        {
          type: "h2",
          content: "Mistake #4: No conversion tracking"
        },
        {
          type: "p",
          content: "If you do not track who fills out a form, calls you, or books an appointment — you have no idea which keywords and ads are actually generating clients. Without conversion tracking, you are flying blind. Setting up Google Ads conversion tracking is free and non-negotiable."
        },
        {
          type: "h2",
          content: "Mistake #5: Not using ad scheduling"
        },
        {
          type: "p",
          content: "By default, campaigns run 24/7. If your audience searches primarily on weekdays between 9am and 7pm, night-time and weekend impressions are burning budget with no return. Analyze your data and set a schedule based on when your campaign actually converts."
        },
        {
          type: "h2",
          content: "Mistake #6: Running only one ad variant"
        },
        {
          type: "p",
          content: "Run at least 2-3 ad variations per ad group simultaneously — different headlines, descriptions, and CTAs. Google Ads will automatically show the better-performing ones more often. With a single ad, you never learn what works better."
        },
        {
          type: "h2",
          content: "Mistake #7: Setting it and forgetting it"
        },
        {
          type: "p",
          content: 'Google Ads is not a "set and forget" tool. Competitors adjust their bids, new search terms emerge, and seasonality changes. Check your search terms report, ad performance, and budget utilization at least once per week.'
        },
        {
          type: "callout",
          content: "💡 Real result: After fixing these mistakes for Route 11 Driving School, the underperforming location became the best-performing of their three schools — without increasing the budget."
        },
        {
          type: "cta",
          content: "Already running Google Ads but not getting expected results? Request a free campaign audit — we'll identify the issues and give you specific recommendations, no strings attached."
        }
      ],
      faqs: [
        {
          q: "How do I know if my Google Ads campaign is performing well?",
          a: "Key metrics to watch: CTR (click-through rate) — ideally 5%+ for search campaigns; Quality Score — 7+ is optimal; conversion rate; and cost per conversion. If cost per conversion is higher than your customer lifetime value, the campaign is losing money."
        },
        {
          q: "How much time does Google Ads optimization require per week?",
          a: "Basic campaigns need 1-2 hours per week. More complex, multi-ad-group campaigns can require 4-6 hours. This is one reason working with an agency pays off — we handle this proactively and continuously."
        },
        {
          q: "When should I hire an agency to manage Google Ads?",
          a: "If your monthly budget exceeds 270 EUR and you do not have a dedicated, experienced PPC specialist, it is worth bringing in an agency. The management fee typically pays for itself quickly through better optimization."
        },
        {
          q: "How much does a Google Ads audit cost?",
          a: "At Nagy Levi Marketing, the first audit is completely free. We review your campaign, identify the problems, and give you specific recommendations — with no obligation."
        }
      ]
    }
  }
];
function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}
const categoryColors = {
  "Facebook Ads": "bg-blue-500/20 text-blue-400",
  "Google Ads": "bg-green-500/20 text-green-400",
  "SEO": "bg-purple-500/20 text-purple-400",
  "Marketing": "bg-violet-500/20 text-violet-400"
};
const BlogList = ({ language }) => {
  const navigate = useNavigate();
  const labels = language === "hu" ? { heading: "Blog", sub: "Tippek, stratégiák és valós eredmények helyi vállalkozásoknak.", readMore: "Elolvasom →", minRead: "perces olvasás", metaTitle: "Blog | Nagy Levi Marketing", metaDesc: "Marketing tippek és stratégiák helyi vállalkozásoknak Budapestről." } : { heading: "Blog", sub: "Tips, strategies, and real results for local businesses.", readMore: "Read more →", minRead: "min read", metaTitle: "Blog | Nagy Levi Marketing", metaDesc: "Marketing tips and strategies for local businesses from Budapest." };
  function goToPost(slug) {
    navigate(language === "en" ? `/en/blog/${slug}` : `/blog/${slug}`);
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-900 text-white", children: [
    /* @__PURE__ */ jsx("title", { children: labels.metaTitle }),
    /* @__PURE__ */ jsx("header", { className: "bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => navigate(language === "en" ? "/en" : "/"),
          className: "text-xl font-bold text-white hover:text-violet-400 transition-colors",
          children: "Nagy Levi Marketing"
        }
      ),
      /* @__PURE__ */ jsxs("nav", { className: "flex items-center space-x-6", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => navigate(language === "en" ? "/en" : "/"),
            className: "text-slate-300 hover:text-white transition-colors text-sm",
            children: language === "hu" ? "← Főoldal" : "← Home"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => navigate(language === "hu" ? "/en/blog" : "/blog"),
            className: "text-slate-300 hover:text-white transition-colors text-sm",
            children: language === "hu" ? "🇺🇸 English" : "🇭🇺 Magyar"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 pt-16 pb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: labels.heading }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-lg", children: labels.sub })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 pb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: blogs.map((blog) => {
      const content = blog[language];
      return /* @__PURE__ */ jsxs(
        "article",
        {
          onClick: () => goToPost(blog.slug),
          className: "group cursor-pointer bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10",
          children: [
            /* @__PURE__ */ jsx("div", { className: "px-5 pt-5", children: /* @__PURE__ */ jsx("span", { className: `text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[blog.category]}`, children: blog.category }) }),
            /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-500 mb-3", children: [
                /* @__PURE__ */ jsx("span", { children: blog.datePublished }),
                /* @__PURE__ */ jsx("span", { children: "·" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  blog.readTime,
                  " ",
                  labels.minRead
                ] })
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold leading-snug mb-3 group-hover:text-violet-400 transition-colors line-clamp-3 text-white", children: content.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm line-clamp-3 mb-4", children: content.intro }),
              /* @__PURE__ */ jsx("span", { className: "text-violet-400 text-sm font-medium", children: labels.readMore })
            ] })
          ]
        },
        blog.slug
      );
    }) }),
    /* @__PURE__ */ jsxs("footer", { className: "border-t border-slate-800 py-8 text-center text-slate-500 text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Nagy Levi Marketing"
    ] })
  ] });
};
const BASE_URL$7 = "https://levinagymarketing.com";
function buildBlogPostingSchema(blog, language) {
  if (!blog) return null;
  const content = blog[language];
  const url = `${BASE_URL$7}${language === "en" ? "/en" : ""}/blog/${blog.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: content.title,
    description: content.metaDescription,
    keywords: content.keywords.join(", "),
    datePublished: blog.datePublished,
    dateModified: blog.dateModified,
    inLanguage: language === "hu" ? "hu-HU" : "en-US",
    url,
    image: blog.coverImage,
    author: { "@type": "Person", "@id": `${BASE_URL$7}/#person-nagylevi`, name: "Nagy Levi" },
    publisher: { "@type": "Organization", "@id": `${BASE_URL$7}/#organization`, name: "Nagy Levi Marketing" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url }
  };
}
function buildBreadcrumbSchema(blog, language) {
  if (!blog) return null;
  const content = blog[language];
  const homeUrl = `${BASE_URL$7}${language === "en" ? "/en" : ""}`;
  const blogListUrl = `${homeUrl}/blog`;
  const postUrl = `${blogListUrl}/${blog.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: language === "hu" ? "Főoldal" : "Home", item: homeUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: blogListUrl },
      { "@type": "ListItem", position: 3, name: content.title, item: postUrl }
    ]
  };
}
function buildFAQSchema(faqs) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };
}
function renderSection(section, idx) {
  var _a, _b, _c;
  switch (section.type) {
    case "h2":
      return /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mt-10 mb-4 text-white", children: section.content }, idx);
    case "h3":
      return /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mt-7 mb-3 text-white", children: section.content }, idx);
    case "p":
      return /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed mb-4", children: section.content }, idx);
    case "ul":
      return /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-2 mb-5 text-slate-300", children: (_a = section.items) == null ? void 0 : _a.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i)) }, idx);
    case "ol":
      return /* @__PURE__ */ jsx("ol", { className: "list-decimal list-inside space-y-2 mb-5 text-slate-300", children: (_b = section.items) == null ? void 0 : _b.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i)) }, idx);
    case "callout":
      return /* @__PURE__ */ jsx("div", { className: "border-l-4 border-violet-500 bg-violet-500/10 rounded-r-xl px-5 py-4 mb-5", children: /* @__PURE__ */ jsx("p", { className: "text-violet-200 font-medium", children: section.content }) }, idx);
    case "cta":
      return /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 border border-violet-500/30 rounded-2xl px-6 py-6 my-8 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-white font-semibold mb-4", children: section.content }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/#contact",
            className: "inline-flex items-center px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-lg transition-colors",
            children: ((_c = section.items) == null ? void 0 : _c[0]) ?? "Kapcsolatfelvétel"
          }
        )
      ] }, idx);
    default:
      return null;
  }
}
const BlogPost = ({ language }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = slug ? getBlogBySlug(slug) : void 0;
  useEffect(() => {
    if (!blog) return;
    const content2 = blog[language];
    document.title = content2.metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = content2.metaDescription;
  }, [blog, language]);
  if (!blog) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-slate-900 text-white flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold mb-4", children: "404 – Blog post not found" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => navigate(language === "en" ? "/en/blog" : "/blog"),
          className: "text-violet-400 hover:underline",
          children: language === "hu" ? "← Vissza a bloghoz" : "← Back to blog"
        }
      )
    ] }) });
  }
  const content = blog[language];
  const schemas = [
    buildBlogPostingSchema(blog, language),
    buildBreadcrumbSchema(blog, language),
    buildFAQSchema(content.faqs)
  ].filter(Boolean);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-900 text-white", children: [
    schemas.map((schema, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(schema) } }, i)),
    /* @__PURE__ */ jsx("header", { className: "bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => navigate(language === "en" ? "/en" : "/"),
          className: "text-xl font-bold text-white hover:text-violet-400 transition-colors",
          children: "Nagy Levi Marketing"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => navigate(language === "en" ? "/en/blog" : "/blog"),
            className: "text-slate-300 hover:text-white transition-colors text-sm",
            children: language === "hu" ? "← Blog" : "← Blog"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              const otherLang = language === "hu" ? "en" : "hu";
              navigate(otherLang === "en" ? `/en/blog/${blog.slug}` : `/blog/${blog.slug}`);
            },
            className: "text-slate-300 hover:text-white transition-colors text-sm",
            children: language === "hu" ? "🇺🇸 English" : "🇭🇺 Magyar"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-6 pt-12 pb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-5 text-sm text-slate-500", children: [
        /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full font-medium text-xs ${blog.category === "Facebook Ads" ? "bg-blue-500/20 text-blue-400" : blog.category === "Google Ads" ? "bg-green-500/20 text-green-400" : blog.category === "SEO" ? "bg-purple-500/20 text-purple-400" : "bg-violet-500/20 text-violet-400"}`, children: blog.category }),
        /* @__PURE__ */ jsx("span", { children: blog.datePublished }),
        /* @__PURE__ */ jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxs("span", { children: [
          blog.readTime,
          " ",
          language === "hu" ? "perces olvasás" : "min read"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold leading-tight mb-6 text-white", children: content.title }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-lg leading-relaxed mb-8", children: content.intro })
    ] }),
    /* @__PURE__ */ jsxs("article", { className: "max-w-3xl mx-auto px-6 pb-16", children: [
      content.sections.map((section, idx) => renderSection(section, idx)),
      content.faqs.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-white", children: language === "hu" ? "Gyakori kérdések" : "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: content.faqs.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "border border-slate-700 rounded-xl p-5 bg-slate-800", children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-white mb-2", children: faq.q }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: faq.a })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 bg-slate-800 border border-violet-500/30 rounded-2xl p-8 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: language === "hu" ? "Készen állsz több ügyfélre?" : "Ready for more clients?" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-6", children: language === "hu" ? "30 napos garanciával segítünk több ügyfelet szerezni Facebook, Google és TikTok hirdetésekkel." : "We help you get more clients with Facebook, Google, and TikTok ads — 30-day guarantee." }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: language === "en" ? "/en#contact" : "/#contact",
            className: "inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-lg transition-colors",
            children: [
              language === "hu" ? "Felveszem a kapcsolatot" : "Reach Out To Me",
              /* @__PURE__ */ jsx("svg", { className: "ml-2 w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center gap-4 border-t border-slate-700 pt-8", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://res.cloudinary.com/dduros3xw/image/upload/v1754826429/Win_tdgauq.png",
            alt: "Nagy Levi",
            className: "w-14 h-14 rounded-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: "Nagy Levi" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: language === "hu" ? "Marketing Specialista, Budapest" : "Marketing Specialist, Budapest" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "border-t border-slate-800 py-8 text-center text-slate-500 text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Nagy Levi Marketing"
    ] })
  ] });
};
const BASE_URL$6 = "https://levinagymarketing.com";
const copy$1 = {
  hu: {
    metaTitle: "Facebook & Google Hirdetések Budapest | Nagy Levi Marketing",
    metaDesc: "Meta hirdetési kampányok, amelyek fizető ügyfeleket hoznak. Szépségszalonok, fogorvosok, autósiskolák. 30 napos garancia. Ingyenes stratégiai hívás.",
    back: "← Főoldal",
    badge: "📣 Fizetett Hirdetések",
    hero: {
      title: "Több ügyfél. Több bevétel.",
      titleHighlight: "Minden hónapban.",
      sub: "Meta hirdetéseket futtatunk, amelyek fizető ügyfeleket hoznak a vállalkozásodba — nem csak lájkokat és megtekintéseket, amelyek sehova sem vezetnek.",
      cta: "Ingyenes stratégiai hívás"
    },
    problem: {
      title: "Valószínűleg már próbáltál hirdetéseket futtatni.",
      body: [
        "Talán boostoltál néhány posztot. Talán csinálta már valaki neked. Akárhogy is, az eredmény csalódást keltő volt, és most nem vagy biztos benne, hogy a hirdetések egyáltalán működnek a te típusú vállalkozásodban.",
        "Az igazság az: a hirdetések működnek. A mögöttük lévő stratégia az esetek nagy részében nem.",
        "A legtöbb vállalkozás olyan hirdetéseket futtat, amelyek rossz embereket érnek el. Az üzenet nem talál célba. A büdzsét elaprózzák olyan kattintások, amelyek soha nem válnak valódi ügyféllé.",
        "Közben valaki a környékeden a megfelelő hirdetéssel, a megfelelő embereket éri el — és azokat az ügyfeleket szerzi meg, akik elvileg hozzád jöhetnének."
      ]
    },
    solution: {
      title: "Pontosan ezt javítjuk ki.",
      body: [
        "Meta hirdetési kampányokat építünk, amelyek a vállalkozásodat azok elé teszik, akik a legnagyobb valószínűséggel vásárolnak tőled. Nem véletlenszerű görgetők. Nem versenytársak. A valódi célügyfeleid.",
        "Majd gondoskodunk arról, hogy a hirdetés a megfelelő dolgot mondja, a megfelelő időben — hogy cselekedjenek.",
        "Nem kell értened, hogyan működik. Csak az eredményeket kell látnod."
      ]
    },
    steps: {
      title: "Hogyan működik",
      items: [
        { n: "01", title: "Megismerjük a vállalkozásodat", body: "Egy hívás. Lényegre törően. A megfelelő kérdéseket tesszük fel, hogy megértsük, kik a legjobb ügyfeleid, és mi tesz téged az egyértelmű választássá." },
        { n: "02", title: "Megépítjük és elindítjuk a kampányodat", body: "Mindent mi intézünk — a célzást, a kreatívokat, a szövegeket. Te jóváhagyod, mi elindítjuk." },
        { n: "03", title: "Jönnek a megkeresések. Mi folyamatosan javítjuk.", body: "Amint él a kampány, nyomon követjük, mi működik, és levágjuk, ami nem. Az eredmények idővel összeadódnak." }
      ]
    },
    results: {
      title: "Eredmények",
      body: "Ne csak a szavainkat nézd — tekintsd meg az ügyfeleink eredményeit ezen az oldalon. Ezek valódi vállalkozások, valódi iparágakban, amelyek a kiszámíthatatlan ügyfélszerzésből eljutottak a megbízható, havi szintű növekedéshez."
    },
    guarantee: {
      title: "Garancia",
      body: "Annyira biztosak vagyunk abban, amit csinálunk, hogy egyszerű garanciát kínálunk:",
      highlight: "Felülmúljuk a jelenlegi hirdetési eredményeidet — vagy nem fizetsz nekünk semmit.",
      sub: "Más marketingcég ezt nem vállalja. Mi igen, mert tudjuk, hogy működik."
    },
    finalCTA: {
      title: "Szeretnéd tudni, mit tudnánk tenni a vállalkozásodért?",
      body: "Foglalj egy ingyenes stratégiai hívást. Semmi nyomás, semmi erőltetett értékesítés — csak egy őszinte áttekintés arról, hol tartasz most, és mi lehetséges.",
      cta: "Foglalj ingyenes hívást",
      sub: "Semmibe sem kerül, és kevesebb mint 30 percet vesz igénybe."
    }
  },
  en: {
    metaTitle: "Paid Ads — Nagy Levi Marketing",
    metaDesc: "Meta ad campaigns that bring paying customers to your business. Guaranteed results.",
    back: "← Home",
    badge: "📣 Paid Ads",
    hero: {
      title: "More Clients. More Revenue.",
      titleHighlight: "Every Single Month.",
      sub: "We run Meta ads that bring paying customers to your business — not just likes and views that go nowhere.",
      cta: "Get a Free Strategy Call"
    },
    problem: {
      title: "You've probably tried ads before.",
      body: [
        "Maybe you boosted a few posts. Maybe you handed it off to someone. Either way, the results were disappointing — and you're not sure if ads even work for your type of business.",
        "Here's the truth: ads work. The strategy behind most of them doesn't.",
        "Most businesses run ads that reach the wrong people. The message doesn't land. The budget gets eaten up by clicks that never turn into customers.",
        "Meanwhile, someone in your area is running the right ad, reaching the right people, and getting the customers that should have been yours."
      ]
    },
    solution: {
      title: "That's exactly what we fix.",
      body: [
        "We build Meta ad campaigns that put your business in front of the people who are most likely to buy from you. Not random scrollers. Not competitors. Your actual target customers.",
        "Then we make sure the ad says the right thing, at the right time, so they take action.",
        "You don't have to understand how any of it works. You just have to see the results."
      ]
    },
    steps: {
      title: "How it works",
      items: [
        { n: "01", title: "We learn your business", body: "One call. No fluff. We ask the right questions to understand who your best customers are and what makes you the obvious choice." },
        { n: "02", title: "We build and launch your campaign", body: "We handle everything — the targeting, the creative, the copy. You approve it, we launch it." },
        { n: "03", title: "Leads come in. We keep improving.", body: "Once it's live, we track what's working and cut what isn't. The results compound over time." }
      ]
    },
    results: {
      title: "Results",
      body: "Don't take our word for it — check the results from our clients on this page. These are real businesses, in real industries, that went from inconsistent lead flow to a steady stream of paying customers."
    },
    guarantee: {
      title: "Guarantee",
      body: "We're so confident in what we do that we offer a simple guarantee:",
      highlight: "We beat your current ad results — or you don't pay us anything.",
      sub: "No other marketing company offers this. We do, because we know it works."
    },
    finalCTA: {
      title: "Ready to find out what we could do for your business?",
      body: "Book a free strategy call. No pressure, no hard sell — just an honest look at where you are and what's possible.",
      cta: "Book Your Free Call",
      sub: "It won't cost you anything and takes less than 30 minutes."
    }
  }
};
const PaidAdsPage = ({ language }) => {
  const navigate = useNavigate();
  const t2 = copy$1[language];
  const contactUrl = language === "en" ? "/en#contact" : "/#contact";
  const homeUrl = language === "en" ? "/en" : "/";
  const altUrl = language === "en" ? "/fizetett-hirdetesek" : "/en/paid-ads";
  useEffect(() => {
    document.title = t2.metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = t2.metaDesc;
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: language === "hu" ? "Meta Hirdetések" : "Meta Ads Management",
      provider: { "@type": "Organization", "@id": `${BASE_URL$6}/#organization`, name: "Nagy Levi Marketing" },
      url: `${BASE_URL$6}${language === "en" ? "/en/paid-ads" : "/fizetett-hirdetesek"}`,
      description: t2.metaDesc
    };
    let s = document.querySelector("#service-schema");
    if (!s) {
      s = document.createElement("script");
      s.id = "service-schema";
      s.type = "application/ld+json";
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify(schema);
  }, [language]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-900 text-white", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => navigate(homeUrl), className: "text-xl font-bold text-white hover:text-violet-400 transition-colors", children: "Nagy Levi Marketing" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => navigate(homeUrl), className: "text-slate-300 hover:text-white transition-colors text-sm", children: t2.back }),
        /* @__PURE__ */ jsx("button", { onClick: () => navigate(altUrl), className: "text-slate-300 hover:text-white transition-colors text-sm", children: language === "hu" ? "🇺🇸 English" : "🇭🇺 Magyar" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 pt-20 pb-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8", children: t2.badge }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white", children: t2.hero.title }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400", children: t2.hero.titleHighlight }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto", children: t2.hero.sub }),
      /* @__PURE__ */ jsxs("a", { href: contactUrl, className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02]", children: [
        t2.hero.cta,
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: t2.problem.title }),
      /* @__PURE__ */ jsx("div", { className: "space-y-5", children: t2.problem.body.map((p, i) => /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: p }, i)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-violet-500 pl-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: t2.solution.title }),
      /* @__PURE__ */ jsx("div", { className: "space-y-5", children: t2.solution.body.map((p, i) => /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: p }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-12", children: t2.steps.title }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: t2.steps.items.map((step) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-5xl font-black text-violet-500/20 leading-none select-none flex-shrink-0 w-14", children: step.n }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: step.body })
        ] })
      ] }, step.n)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-6", children: t2.results.title }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: t2.results.body })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-violet-500/5 border border-violet-500/20 rounded-2xl p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-violet-400 flex-shrink-0" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: t2.guarantee.title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-4 leading-relaxed", children: t2.guarantee.body }),
      /* @__PURE__ */ jsxs("p", { className: "text-xl font-bold text-white mb-4", children: [
        '"',
        t2.guarantee.highlight,
        '"'
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: t2.guarantee.sub })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: t2.finalCTA.title }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto", children: t2.finalCTA.body }),
      /* @__PURE__ */ jsxs("a", { href: contactUrl, className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02] mb-4", children: [
        t2.finalCTA.cta,
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-4", children: t2.finalCTA.sub })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-slate-900 border-t border-slate-800 py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-white mb-2", children: [
            "Nagy Levi ",
            /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Marketing" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mb-3", children: "Több ügyfél. Több bevétel. Garantáltan." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-3 uppercase tracking-wide", children: "Szolgáltatások" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Fizetett Hirdetések" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ai-automatizalas", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "AI Automatizálás" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/rolunk", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Rólunk" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Blog" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-3 uppercase tracking-wide", children: "Iparágak" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/szepsegszalon-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Szépségszalon Marketing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/fogorvos-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Fogorvos Marketing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/autoskola-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Autósiskola Marketing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/webaruhaz-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Webáruház Marketing" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-slate-800 pt-6 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-xs", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Nagy Levi Marketing. Minden jog fenntartva."
      ] }) })
    ] }) }) })
  ] });
};
const BASE_URL$5 = "https://levinagymarketing.com";
const copy = {
  hu: {
    metaTitle: "AI Automatizálás Vállalkozásoknak Budapest | Nagy Levi Marketing",
    metaDesc: "AI rendszerek, amelyek elvégzik az ismétlődő munkát. Több lead, kevesebb elveszett ügyfél — automatikusan. Ingyenes hívás.",
    back: "← Főoldal",
    badge: "🤖 AI Automatizálás",
    hero: {
      title: "A vállalkozásod. Dolgozik.",
      titleHighlight: "Akkor is, ha te nem.",
      sub: "AI rendszereket építünk, amelyek elvégzik az ismétlődő munkát — hogy ne veszíts el több érdeklődőt, ne pazarold az idődet, és növekedj anélkül, hogy kiégj.",
      cta: "Ingyenes stratégiai hívás"
    },
    problem: {
      title: "Nem azért indítottál vállalkozást, hogy a napod nagy részét ugyanazoknak a kérdéseknek a megválaszolásával töltsd.",
      body: [
        "Vagy azért, hogy hidegre ment érdeklődők után szaladgálj, mert elfoglalt voltál, és nem értél rá visszahívni.",
        "Vagy hogy potenciális ügyfeleid elhagyják a weboldaladat, mert senki nem reagált elég gyorsan.",
        "Mégis pontosan ez történik."
      ],
      bullets: [
        "Minden megválaszolatlan üzenet egy elvesztett ügyfél.",
        "Minden lassú visszajelzés azt jelenti, hogy valaki a versenytársadat választja.",
        "Minden óra, amit a csapatod ismétlődő feladatokra pazarol, egy óra, amit nem a növekedésre fordít."
      ],
      closing: "A legrosszabb az egészben? Ennek nagy része csendben, a háttérben zajlik — és általában nem is látod, mennyibe kerül."
    },
    solution: {
      title: "Olyan rendszereket építünk, amelyek mindezzel automatikusan foglalkoznak.",
      body: [
        "A weboldalad az óra minden szakában reagál az érdeklődőkre és minősíti a leadeket — még éjjel 2-kor is, amikor alszol.",
        "Ha valaki érdeklődik, azonnal és következetesen kap visszajelzést — anélkül, hogy neked erre gondolnod kellene.",
        "A telefonod kezelve van, a beérkező üzeneteid rendezve vannak, és a csapatod által naponta elvégzett ismétlődő feladatokat egy rendszer végzi el, amely soha nem felejt, soha nem fárad el, és soha nem vesz ki betegszabadságot.",
        "Nem veszel fel több embert. Nem dolgozol több órát. Csak több dolgot intézel el."
      ]
    },
    steps: {
      title: "Hogyan működik",
      items: [
        { n: "01", title: "Megkeressük, ahol időt és pénzt veszítesz", body: "Megnézzük, hogyan kezeli jelenleg a vállalkozásod az érdeklődőket, az utókövetéseket és az ügyfélkommunikációt. Megtaláljuk a réseket — azokat a pillanatokat, ahol a dolgok elvesznek." },
        { n: "02", title: "Egy rendszert építünk a te vállalkozásodhoz", body: "Nem egy általános eszköz. Egy egyedi megoldás, amely illeszkedik ahhoz, ahogy te dolgozol, és amit az ügyfeleid elvárnak." },
        { n: "03", title: "Fut a háttérben. Te látod az eredményeket.", body: "Amint él, csendesen dolgozik a háttérben. Csak azt veszed észre, hogy kevesebb érdeklődő hűl le, kevesebb feladat halmozódik fel, és a csapatodnak több ideje van a fontos munkára." }
      ]
    },
    finalCTA: {
      title: "Szeretnéd látni, hol változtathatna az automatizálás a te vállalkozásodban?",
      body: "Foglalj egy ingyenes hívást. Megnézzük a jelenlegi folyamataidat, és megmutatjuk pontosan, hol hozna egy ilyen rendszer változást — és mit érne ez számodra.",
      cta: "Foglalj ingyenes hívást",
      sub: "Semmi zsargon. Semmi bonyolult értékesítési prezentáció. Csak egy egyenes beszélgetés."
    }
  },
  en: {
    metaTitle: "AI Automation — Nagy Levi Marketing",
    metaDesc: "AI systems that handle the repetitive work — stop losing leads, save time, and grow without burning out.",
    back: "← Home",
    badge: "🤖 AI Automation",
    hero: {
      title: "Your Business. Working.",
      titleHighlight: "Even When You're Not.",
      sub: "We build AI systems that handle the repetitive work — so you stop losing leads, stop wasting time, and start growing without burning out.",
      cta: "Get a Free Strategy Call"
    },
    problem: {
      title: "You didn't start a business to spend your day answering the same questions over and over.",
      body: [
        "Or chasing leads that went cold because you were too busy to follow up.",
        "Or watching potential customers leave your website because nobody got back to them fast enough.",
        "But that's exactly what's happening."
      ],
      bullets: [
        "Every unanswered message is a lost customer.",
        "Every slow follow-up is someone choosing your competitor.",
        "Every hour your team spends on repetitive tasks is an hour not spent on work that actually grows the business."
      ],
      closing: "And the worst part? Most of this is happening quietly, in the background — and you don't even see how much it's costing you."
    },
    solution: {
      title: "We build systems that handle all of this automatically.",
      body: [
        "Your website responds to visitor questions and qualifies leads around the clock — including at 2am when you're asleep.",
        "When someone shows interest, they get followed up with immediately and consistently — without you having to think about it.",
        "Your phone gets handled, your inbox gets managed, and the repetitive tasks your team does every day get done by a system that never forgets, never gets tired, and never calls in sick.",
        "You don't hire more people. You don't work more hours. You just get more done."
      ]
    },
    steps: {
      title: "How it works",
      items: [
        { n: "01", title: "We find where you're losing time and money", body: "We look at how your business currently handles leads, follow-ups, and customer communication. We spot the gaps — the moments where things fall through the cracks." },
        { n: "02", title: "We build a system made for your business", body: "Not a generic tool. A custom setup that fits how you work and what your customers expect." },
        { n: "03", title: "It runs in the background. You see the results.", body: "Once it's live, it works quietly behind the scenes. You just notice that fewer leads go cold, fewer tasks pile up, and your team has more time for the work that matters." }
      ]
    },
    finalCTA: {
      title: "Want to see where automation could change things in your business?",
      body: "Book a free call. We'll take a look at your current setup and show you specifically where a system like this would make a difference — and what it would be worth to you.",
      cta: "Book Your Free Call",
      sub: "No jargon. No complicated pitch. Just a straight conversation."
    }
  }
};
const AIAutomationPage = ({ language }) => {
  const navigate = useNavigate();
  const t2 = copy[language];
  const contactUrl = language === "en" ? "/en#contact" : "/#contact";
  const homeUrl = language === "en" ? "/en" : "/";
  const altUrl = language === "en" ? "/ai-automatizalas" : "/en/ai-automation";
  useEffect(() => {
    document.title = t2.metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = t2.metaDesc;
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: language === "hu" ? "AI Automatizálás" : "AI Automation",
      provider: { "@type": "Organization", "@id": `${BASE_URL$5}/#organization`, name: "Nagy Levi Marketing" },
      url: `${BASE_URL$5}${language === "en" ? "/en/ai-automation" : "/ai-automatizalas"}`,
      description: t2.metaDesc
    };
    let s = document.querySelector("#service-schema");
    if (!s) {
      s = document.createElement("script");
      s.id = "service-schema";
      s.type = "application/ld+json";
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify(schema);
  }, [language]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-900 text-white", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => navigate(homeUrl), className: "text-xl font-bold text-white hover:text-violet-400 transition-colors", children: "Nagy Levi Marketing" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => navigate(homeUrl), className: "text-slate-300 hover:text-white transition-colors text-sm", children: t2.back }),
        /* @__PURE__ */ jsx("button", { onClick: () => navigate(altUrl), className: "text-slate-300 hover:text-white transition-colors text-sm", children: language === "hu" ? "🇺🇸 English" : "🇭🇺 Magyar" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 pt-20 pb-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8", children: t2.badge }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white", children: t2.hero.title }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400", children: t2.hero.titleHighlight }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto", children: t2.hero.sub }),
      /* @__PURE__ */ jsxs("a", { href: contactUrl, className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02]", children: [
        t2.hero.cta,
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: t2.problem.title }),
      /* @__PURE__ */ jsx("div", { className: "space-y-5 mb-8", children: t2.problem.body.map((p, i) => /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: p }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-8 pl-4 border-l-2 border-violet-500/30", children: t2.problem.bullets.map((b, i) => /* @__PURE__ */ jsx("p", { className: "text-slate-200 font-medium text-lg", children: b }, i)) }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed text-lg italic", children: t2.problem.closing })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-violet-500 pl-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: t2.solution.title }),
      /* @__PURE__ */ jsx("div", { className: "space-y-5", children: t2.solution.body.map((p, i) => /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: p }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-12", children: t2.steps.title }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: t2.steps.items.map((step) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-5xl font-black text-violet-500/20 leading-none select-none flex-shrink-0 w-14", children: step.n }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: step.body })
        ] })
      ] }, step.n)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: t2.finalCTA.title }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto", children: t2.finalCTA.sub }),
      /* @__PURE__ */ jsxs("a", { href: contactUrl, className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02] mb-4", children: [
        t2.finalCTA.cta,
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-4", children: t2.finalCTA.body })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-slate-900 border-t border-slate-800 py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-white mb-2", children: [
            "Nagy Levi ",
            /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Marketing" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mb-3", children: "Több ügyfél. Több bevétel. Garantáltan." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-3 uppercase tracking-wide", children: "Szolgáltatások" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Fizetett Hirdetések" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ai-automatizalas", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "AI Automatizálás" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/rolunk", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Rólunk" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Blog" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-3 uppercase tracking-wide", children: "Iparágak" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/szepsegszalon-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Szépségszalon Marketing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/fogorvos-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Fogorvos Marketing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/autoskola-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Autósiskola Marketing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/webaruhaz-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Webáruház Marketing" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-slate-800 pt-6 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-xs", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Nagy Levi Marketing. Minden jog fenntartva."
      ] }) })
    ] }) }) })
  ] });
};
const PageFooter = () => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-slate-900 border-t border-slate-800 py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-white mb-2", children: [
          "Nagy Levi ",
          /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Marketing" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mb-4", children: "Több ügyfél. Több bevétel. Garantáltan." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: "tel:+36706339977", className: "text-slate-500 hover:text-white transition-colors", "aria-label": "Telefon", children: /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "mailto:nlevi@levinagymarketing.com", className: "text-slate-500 hover:text-white transition-colors", "aria-label": "Email", children: /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/nagylevi_marketing/", target: "_blank", rel: "noopener noreferrer", className: "text-slate-500 hover:text-white transition-colors", "aria-label": "Instagram", children: /* @__PURE__ */ jsx(Instagram, { className: "w-4 h-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-3 uppercase tracking-wide", children: "Szolgáltatások" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Fizetett Hirdetések" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ai-automatizalas", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "AI Automatizálás" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/rolunk", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Rólunk" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blog", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Blog" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold text-sm mb-3 uppercase tracking-wide", children: "Iparágak" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/szepsegszalon-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Szépségszalon Marketing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/fogorvos-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Fogorvos Marketing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/autoskola-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Autósiskola Marketing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/webaruhaz-marketing", className: "text-slate-500 hover:text-violet-400 transition-colors text-sm", children: "Webáruház Marketing" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-slate-800 pt-6 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-xs", children: [
      "© ",
      year,
      " Nagy Levi Marketing. Minden jog fenntartva."
    ] }) })
  ] }) }) });
};
const BASE_URL$4 = "https://levinagymarketing.com";
const AboutPage = () => {
  useEffect(() => {
    document.title = "Rólunk — Nagy Levi Marketing Ügynökség Budapest";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Nagy Levi Marketing — performance marketing ügynökség Budapest. Ismerd meg a csapatot, a szakértelmet és azt a missziót, ami miatt minden nap dolgozunk.";
    const person = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${BASE_URL$4}/#person-nagylevi`,
      name: "Nagy Levi",
      givenName: "Levi",
      familyName: "Nagy",
      jobTitle: "Marketing Specialista",
      description: "2021 óta segíti a helyi vállalkozásokat több ügyfél megszerzésében Facebook, Google és TikTok hirdetésekkel, SEO-val és AI automatizálással Budapestről.",
      url: `${BASE_URL$4}/rolunk`,
      email: "nlevi@levinagymarketing.com",
      telephone: "+36706339977",
      image: "https://res.cloudinary.com/dduros3xw/image/upload/v1754826429/Win_tdgauq.png",
      sameAs: ["https://www.instagram.com/nagylevi_marketing/"],
      worksFor: { "@type": "Organization", "@id": `${BASE_URL$4}/#organization`, name: "Nagy Levi Marketing" },
      address: { "@type": "PostalAddress", addressLocality: "Budapest", addressCountry: "HU" },
      knowsAbout: ["Facebook Advertising", "Google Ads", "TikTok Advertising", "SEO Optimization", "AI Automation", "Lead Generation", "Digital Marketing"],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Google Ads Certified" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Meta Blueprint Certified" }
      ]
    };
    const org = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${BASE_URL$4}/#organization`,
      name: "Nagy Levi Marketing",
      url: BASE_URL$4,
      foundingDate: "2021",
      founder: { "@type": "Person", "@id": `${BASE_URL$4}/#person-nagylevi`, name: "Nagy Levi" },
      address: { "@type": "PostalAddress", addressLocality: "Budapest", addressCountry: "HU" },
      telephone: "+36706339977",
      email: "nlevi@levinagymarketing.com",
      sameAs: ["https://www.instagram.com/nagylevi_marketing/"]
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Főoldal", item: BASE_URL$4 },
        { "@type": "ListItem", position: 2, name: "Rólunk", item: `${BASE_URL$4}/rolunk` }
      ]
    };
    ["#about-person-schema", "#about-org-schema", "#about-breadcrumb"].forEach((id) => {
      var _a;
      (_a = document.querySelector(id)) == null ? void 0 : _a.remove();
    });
    const s1 = document.createElement("script");
    s1.id = "about-person-schema";
    s1.type = "application/ld+json";
    s1.textContent = JSON.stringify(person);
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.id = "about-org-schema";
    s2.type = "application/ld+json";
    s2.textContent = JSON.stringify(org);
    document.head.appendChild(s2);
    const s3 = document.createElement("script");
    s3.id = "about-breadcrumb";
    s3.type = "application/ld+json";
    s3.textContent = JSON.stringify(breadcrumb);
    document.head.appendChild(s3);
  }, []);
  const services = [
    { name: "Fizetett Hirdetések", url: "/fizetett-hirdetesek", desc: "Facebook, Instagram és Google hirdetések, amelyek fizető ügyfeleket hoznak." },
    { name: "AI Automatizálás", url: "/ai-automatizalas", desc: "Ismétlődő folyamatok automatizálása AI rendszerekkel — több idő, kevesebb munka." },
    { name: "Szépségszalon Marketing", url: "/szepsegszalon-marketing", desc: "Célzott kampányok szépségszalonoknak, amelyek tele töltik a naptárat." },
    { name: "Fogorvos Marketing", url: "/fogorvos-marketing", desc: "Meta és Google kampányok fogorvosi praxisoknak új páciensekért." },
    { name: "Autósiskola Marketing", url: "/autoskola-marketing", desc: "Facebook és TikTok kampányok folyamatos tanulói bejelentkezésért." },
    { name: "Edzőterem Marketing", url: "/edzoterm-marketing", desc: "Meta hirdetések + AI utókövetés edzőtermeknek és fitneszstúdióknak." },
    { name: "Webáruház Marketing", url: "/webaruhaz-marketing", desc: "Meta + Google Shopping kampányok + remarketing webáruházaknak." }
  ];
  const skills = [
    "Facebook & Instagram Ads",
    "Google Ads (Search, Display, Shopping)",
    "TikTok Ads",
    "SEO Optimalizálás",
    "AI Automatizálás",
    "Landing Page Tervezés",
    "Email Marketing",
    "Funnel Stratégia"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-900 text-white", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "text-xl font-bold text-white hover:text-violet-400 transition-colors", children: [
        "Nagy Levi ",
        /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Marketing" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "text-slate-300 hover:text-white transition-colors text-sm", children: "← Főoldal" }),
        /* @__PURE__ */ jsx("a", { href: "/#contact", className: "px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-lg transition-all", children: "Kapcsolat" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-6 pt-6", children: /* @__PURE__ */ jsxs("nav", { className: "text-sm text-slate-500", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-violet-400 transition-colors", children: "Főoldal" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "›" }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Rólunk" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 pt-12 pb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8", children: "👋 Ismerd meg a csapatot" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4 text-white", children: "Rólunk — Nagy Levi Marketing" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300 leading-relaxed max-w-2xl", children: "Budapest alapú performance marketing ügynökség. 2021 óta segítjük a helyi vállalkozásokat több ügyfél megszerzésében — garantáltan." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-6", children: "Az alapító" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Nagy Levi" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm uppercase tracking-widest mb-6", children: "Marketing Specialista · Budapest · 2021 óta" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed mb-6", children: "2021-ben indítottam el a Nagy Levi Marketinget azzal a céllal, hogy a helyi vállalkozásoknak ugyanolyan profi marketingeszközök álljanak rendelkezésére, mint a nagy márkáknak — de mérhető eredményekkel és garanciával." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed mb-8", children: "Azóta több mint 20 vállalkozásnak segítettünk Magyarországon és Szlovákiában. Az ügyfeleinknél az első hónapban átlagosan 181 megkeresést értünk el." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["Google Ads Certified", "Meta Blueprint Certified"].map((cert) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs rounded-full", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-3 h-3" }),
          " ",
          cert
        ] }, cert)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-slate-800 rounded-2xl overflow-hidden border border-slate-700", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://res.cloudinary.com/dduros3xw/image/upload/v1779627671/IMG_9853_wy8bwq.jpg",
          alt: "Nagy Levi — Marketing Specialista Budapest",
          className: "w-full h-80 object-cover object-top"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-8", children: "Szaktudás" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: skills.map((skill) => /* @__PURE__ */ jsx("div", { className: "bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm font-medium", children: skill }) }, skill)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-violet-500 pl-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "A misszióm" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300 leading-relaxed mb-4", children: '"Azért csináljuk, amit csinálunk, mert látjuk, hogy a legtöbb helyi vállalkozás elveszíti az ügyfeleit olyan problémák miatt, amelyek megoldhatók."' }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: "Nem hisszük, hogy a jó marketing csak a nagy cégek privilégiuma. Egy fogorvos, egy szépségszalon, egy autósiskola ugyanolyan jogosan számíthat mérhető eredményekre — és mi ezt biztosítjuk, garanciával." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-8", children: "Szolgáltatásaink" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: services.map((s) => /* @__PURE__ */ jsxs("a", { href: s.url, className: "group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-violet-500/40 rounded-xl p-5 transition-all", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold", children: s.name }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-violet-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm leading-relaxed", children: s.desc })
      ] }, s.url)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: "Dolgozzunk együtt?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto", children: "Foglalj egy ingyenes stratégiai hívást. Semmi nyomás, semmi erőltetett értékesítés — csak egy őszinte áttekintés arról, hogyan tudunk segíteni." }),
      /* @__PURE__ */ jsxs("a", { href: "/#contact", className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]", children: [
        "Ingyenes konzultáció",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(PageFooter, {})
  ] });
};
const BASE_URL$3 = "https://levinagymarketing.com";
const SzepsegszalonPage = () => {
  useEffect(() => {
    document.title = "Szépségszalon Marketing Budapest | Nagy Levi Marketing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Facebook és Instagram hirdetések szépségszalonoknak Budapesten. 30 napos garancia — ha nem töltjük fel a naptáradat, visszaadjuk a kezelési díjat. Ingyenes hívás.";
    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Szépségszalon Marketing",
      provider: { "@type": "Organization", "@id": `${BASE_URL$3}/#organization`, name: "Nagy Levi Marketing" },
      url: `${BASE_URL$3}/szepsegszalon-marketing`,
      description: "Facebook és Instagram hirdetési kampányok szépségszalonoknak, amelyek valódi foglalásokat hoznak.",
      areaServed: { "@type": "City", name: "Budapest" },
      serviceType: "Social Media Advertising"
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Mennyi kerül a szépségszalon marketingje Budapesten?", acceptedAnswer: { "@type": "Answer", text: "A szépségszalonok számára futtatott Facebook és Instagram kampányok kezelési díja általában havi 60 000–150 000 Ft, a hirdetési büdzsétől függően. Nagy Levi Marketingnél 30 napos garanciával dolgozunk." } },
        { "@type": "Question", name: "Mennyi idő alatt látok foglalásokat a hirdetésekből?", acceptedAnswer: { "@type": "Answer", text: "Az első megkeresések általában az indítástól számított 1–2 héten belül megjelennek. A naptár feltöltése jellemzően 3–4 hét alatt érhető el a megfelelő célzással és kreatívokkal." } },
        { "@type": "Question", name: "Mit jelent a 30 napos garancia szépségszalonoknak?", acceptedAnswer: { "@type": "Answer", text: "Ha 30 napon belül nem töltjük fel a naptáradat új ügyfelekkel, visszaadjuk a teljes kezelési díjat. Ez a garancia minden új ügyfelünkre vonatkozik, kötelezettség nélkül." } },
        { "@type": "Question", name: "Milyen szépségszalonoknak ajánlott a Nagy Levi Marketing?", acceptedAnswer: { "@type": "Answer", text: "Szépségszalonoknak, körömlakkozóknak, sminktetoválás stúdióknak, lézeres szőrtelenítő szalonoknak és bármely szépségipari vállalkozásnak, amely online szeretne új ügyfeleket szerezni Budapesten és környékén." } }
      ]
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Főoldal", item: BASE_URL$3 },
        { "@type": "ListItem", position: 2, name: "Fizetett Hirdetések", item: `${BASE_URL$3}/fizetett-hirdetesek` },
        { "@type": "ListItem", position: 3, name: "Szépségszalon Marketing", item: `${BASE_URL$3}/szepsegszalon-marketing` }
      ]
    };
    ["#szepseg-service", "#szepseg-faq", "#szepseg-breadcrumb"].forEach((id) => {
      var _a;
      return (_a = document.querySelector(id)) == null ? void 0 : _a.remove();
    });
    const s1 = document.createElement("script");
    s1.id = "szepseg-service";
    s1.type = "application/ld+json";
    s1.textContent = JSON.stringify(service);
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.id = "szepseg-faq";
    s2.type = "application/ld+json";
    s2.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(s2);
    const s3 = document.createElement("script");
    s3.id = "szepseg-breadcrumb";
    s3.type = "application/ld+json";
    s3.textContent = JSON.stringify(breadcrumb);
    document.head.appendChild(s3);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-900 text-white", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "text-xl font-bold text-white hover:text-violet-400 transition-colors", children: [
        "Nagy Levi ",
        /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Marketing" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "text-slate-300 hover:text-white transition-colors text-sm", children: "← Főoldal" }),
        /* @__PURE__ */ jsx("a", { href: "/#contact", className: "px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-lg transition-all", children: "Ingyenes hívás" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-6 pt-6", children: /* @__PURE__ */ jsxs("nav", { className: "text-sm text-slate-500", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-violet-400 transition-colors", children: "Főoldal" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "›" }),
      /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "hover:text-violet-400 transition-colors", children: "Fizetett Hirdetések" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "›" }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Szépségszalon Marketing" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 pt-12 pb-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8", children: "💅 Szépségszalon Marketing" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white", children: "Több foglaló." }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400", children: "Minden héten." }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto", children: "Facebook és Instagram hirdetések szépségszalonoknak — amelyek valódi ügyfeleket hoznak, nem csak lájkokat." }),
      /* @__PURE__ */ jsxs("a", { href: "/#contact", className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]", children: [
        "Ingyenes stratégiai hívás",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: "Ismerős a helyzet?" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Szépségszalonok tele vannak tehetséges szakemberekkel — de az újakat megszerezni nehéz. Posztolsz, boosztolsz, de az eredmény kiszámíthatatlan. Egy héten tele van a naptárad, a következőn lyukak vannak." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "A szépségipar versenyes. Mindenki hirdet. A kérdés az, hogy a te hirdetésed eléri-e azokat a nőket, akik valóban foglalnak — vagy csak pénzt éget el a levegőben." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "A legtöbb szalon elvéti a célzást, a kreatívot, vagy a call-to-action-t. Az eredmény: sok megtekintés, kevés valódi ügyfél." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-violet-500 pl-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: "Ezt javítjuk ki." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Olyan Meta kampányokat futtatunk, amelyek az ideális ügyfeledet — nőket 20–45 éves korcsoportban a te környékeden — pontosan rátereli a foglalásra." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Minden kreativot, szöveget és célzást arra optimalizálunk, hogy foglalásra ösztönözzön — nem csak megtekintésre." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Te csak végzed a munkád. Mi gondoskodunk arról, hogy ne hiányozzanak az ügyfelek." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-12", children: "Hogyan működik" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: [
        { n: "01", title: "Megismerjük a szalonod", body: "Egy rövid hívás: kik a legjobb vendégeid, milyen szolgáltatásokra akarsz több foglalást, és mi különböztet meg a konkurenciától." },
        { n: "02", title: "Megépítjük a kampányt", body: "Célzás, kreatívok, szövegek — minden a te szalonodra szabva. Te jóváhagyod, mi elindítjuk." },
        { n: "03", title: "Tele lesz a naptárad", body: "Az első foglalások általában 1–2 héten belül megjelennek. Folyamatosan optimalizálunk, hogy az eredmény egyre jobb legyen." }
      ].map((step) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-5xl font-black text-violet-500/20 leading-none select-none flex-shrink-0 w-14", children: step.n }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: step.body })
        ] })
      ] }, step.n)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-violet-500/5 border border-violet-500/20 rounded-2xl p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-violet-400 flex-shrink-0" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "30 napos garancia" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-4 leading-relaxed", children: "Annyira biztosak vagyunk az eredményben, hogy egyszerű garanciát kínálunk:" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-white mb-4", children: '"Ha 30 napon belül nem töltjük fel a naptáradat, visszaadjuk a kezelési díjat."' }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: "Más marketingcég ezt nem vállalja. Mi igen, mert tudjuk, hogy működik." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-12 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mb-4 uppercase tracking-wide", children: "Kapcsolódó iparágak" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Fizetett Hirdetések →" }),
        /* @__PURE__ */ jsx("a", { href: "/fogorvos-marketing", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Fogorvos Marketing →" }),
        /* @__PURE__ */ jsx("a", { href: "/edzoterm-marketing", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Edzőterem Marketing →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-8", children: "Gyakori kérdések" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
        { q: "Mennyi kerül a szépségszalon marketingje Budapesten?", a: "A szépségszalonok számára futtatott Facebook és Instagram kampányok kezelési díja általában havi 60 000–150 000 Ft, a hirdetési büdzsétől függően. Átlátható árazással és 30 napos garanciával dolgozunk." },
        { q: "Mennyi idő alatt látok foglalásokat a hirdetésekből?", a: "Az első megkeresések általában az indítástól számított 1–2 héten belül megjelennek. A naptár folyamatos feltöltése jellemzően 3–4 hét alatt érhető el." },
        { q: "Mit jelent a 30 napos garancia szépségszalonoknak?", a: "Ha 30 napon belül nem töltjük fel a naptáradat új ügyfelekkel, visszaadjuk a teljes kezelési díjat. Kötelezettség nélkül." },
        { q: "Milyen szépségszalonoknak ajánlott a Nagy Levi Marketing?", a: "Szépségszalonoknak, körömlakkozóknak, sminktetoválás stúdióknak, lézeres szőrtelenítő szalonoknak és bármely szépségipari vállalkozásnak, amely online szeretne új ügyfeleket szerezni." }
      ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-3", children: item.q }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed text-sm", children: item.a })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: "Kész vagy több foglalásra?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto", children: "Foglalj egy ingyenes stratégiai hívást. 30 percben átnézzük a jelenlegi helyzetedet és megmutatjuk, mit tudnánk tenni a szalonodért." }),
      /* @__PURE__ */ jsxs("a", { href: "/#contact", className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]", children: [
        "Ingyenes stratégiai hívás",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-4", children: "Semmibe sem kerül. Kötelezettség nélkül." })
    ] }) }),
    /* @__PURE__ */ jsx(PageFooter, {})
  ] });
};
const BASE_URL$2 = "https://levinagymarketing.com";
const FogorvosPage = () => {
  useEffect(() => {
    document.title = "Fogorvos Marketing Budapest | Nagy Levi Marketing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Meta és Google hirdetések fogorvosi praxisoknak Budapesten. Több páciens szűrővizsgálatra, fogfehérítésre, fogszabályozásra. 30 napos garancia. Ingyenes hívás.";
    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Fogorvos Marketing",
      provider: { "@type": "Organization", "@id": `${BASE_URL$2}/#organization`, name: "Nagy Levi Marketing" },
      url: `${BASE_URL$2}/fogorvos-marketing`,
      description: "Célzott Meta és Google hirdetési kampányok fogorvosoknak — szűrővizsgálatokra, fogfehérítésre, fogszabályozásra specializálva.",
      areaServed: { "@type": "City", name: "Budapest" },
      serviceType: "Digital Advertising for Dental Practices"
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Mennyi fogorvosi marketing kerül Budapesten?", acceptedAnswer: { "@type": "Answer", text: "Fogorvosi praxisok számára a kampánykezelési díj általában havi 80 000–200 000 Ft. Ez tartalmazza a Meta és/vagy Google kampányok teljes kezelését, optimalizálását. 30 napos garanciával dolgozunk." } },
        { "@type": "Question", name: "Milyen fogászati szolgáltatásokra lehet hirdetni?", acceptedAnswer: { "@type": "Answer", text: "Szűrővizsgálatokra, fogfehérítésre, fogszabályozásra (clear aligner), fogimplantátumra, fogkőeltávolításra és egyéb fogászati kezelésekre futtatunk célzott kampányokat." } },
        { "@type": "Question", name: "Mennyi új pácienst hoznak a hirdetések?", acceptedAnswer: { "@type": "Answer", text: "A Denti Implant Center esetén az első hónapban 53 űrlapos megkeresést értünk el Google hirdetésekkel. Az eredmény a praxis típusától és a kampány büdzsétől függ." } },
        { "@type": "Question", name: "Hogyan működik a 30 napos garancia fogorvosoknak?", acceptedAnswer: { "@type": "Answer", text: "Ha 30 napon belül nem látod a megbeszélt eredményeket, visszaadjuk a teljes kezelési díjat. Kötelezettség nélkül, minden új ügyfelünkre vonatkozik." } }
      ]
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Főoldal", item: BASE_URL$2 },
        { "@type": "ListItem", position: 2, name: "Fizetett Hirdetések", item: `${BASE_URL$2}/fizetett-hirdetesek` },
        { "@type": "ListItem", position: 3, name: "Fogorvos Marketing", item: `${BASE_URL$2}/fogorvos-marketing` }
      ]
    };
    ["#fog-service", "#fog-faq", "#fog-breadcrumb"].forEach((id) => {
      var _a;
      return (_a = document.querySelector(id)) == null ? void 0 : _a.remove();
    });
    const s1 = document.createElement("script");
    s1.id = "fog-service";
    s1.type = "application/ld+json";
    s1.textContent = JSON.stringify(service);
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.id = "fog-faq";
    s2.type = "application/ld+json";
    s2.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(s2);
    const s3 = document.createElement("script");
    s3.id = "fog-breadcrumb";
    s3.type = "application/ld+json";
    s3.textContent = JSON.stringify(breadcrumb);
    document.head.appendChild(s3);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-900 text-white", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "text-xl font-bold text-white hover:text-violet-400 transition-colors", children: [
        "Nagy Levi ",
        /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Marketing" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "text-slate-300 hover:text-white transition-colors text-sm", children: "← Főoldal" }),
        /* @__PURE__ */ jsx("a", { href: "/#contact", className: "px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-lg transition-all", children: "Ingyenes hívás" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-6 pt-6", children: /* @__PURE__ */ jsxs("nav", { className: "text-sm text-slate-500", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-violet-400 transition-colors", children: "Főoldal" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "›" }),
      /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "hover:text-violet-400 transition-colors", children: "Fizetett Hirdetések" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "›" }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Fogorvos Marketing" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 pt-12 pb-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8", children: "🦷 Fogorvos Marketing" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white", children: "Több páciens." }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400", children: "Kevesebb üres időpont." }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto", children: "Célzott Meta és Google kampányok fogorvosoknak — szűrővizsgálatokra, fogfehérítésre, fogszabályozásra specializálva." }),
      /* @__PURE__ */ jsxs("a", { href: "/#contact", className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]", children: [
        "Ingyenes stratégiai hívás",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: "A fogorvosi marketing kihívásai" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Fogorvosi praxisok esetén az új páciens megszerzése drága és nehéz. A Google Ads versenyes — mindenki licitál ugyanazokra a kulcsszavakra. A szájhagyomány pedig lassú." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Ráadásul a páciensek döntése előtt általában sok összehasonlítás van — ár, elhelyezkedés, vélemények. Ha a te praxisod nincs jelen a megfelelő pillanatban, más fogja megkapni az új pácienst." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Ügyfeleink egyike, a Denti Implant Center, az első hónapban 53 űrlapos megkeresést kapott. Több millió forint bevétel az első negyedévben." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-violet-500 pl-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: "Hogyan hozzuk az új pácienseket" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Célzott Meta és Google kampányokat futtatunk, amelyek a te ideális pácienseidet — az adott kezelés iránt érdeklődőket a közeledben — pontosan rátereli a bejelentkezésre." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Szűrővizsgálatokra, fogfehérítésre és fogszabályozásra specializált kampányok más üzenetet igényelnek. Mi ezt pontosan tudjuk." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "A landing page, az ajánlat és a hirdetés szövege mind arra van optimalizálva, hogy megkeresésre ösztönözzön — nem csak kattintásra." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-12", children: "Hogyan működik" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: [
        { n: "01", title: "Megismerjük a praxisodat", body: "Melyik kezelésre vár a legtöbb páciens? Melyik a legjövedelmezőbb? Milyen területen szeretnéd növelni a forgalmat? Egy hívás alatt kiderül." },
        { n: "02", title: "Megépítjük a kampányokat", body: "Meta és/vagy Google kampányok, a praxisodra szabott szöveggel és célzással. Te jóváhagyod, mi elindítjuk." },
        { n: "03", title: "Érkeznek a megkeresések", body: "Az első bejelentkezések általában 1–2 héten belül megjelennek. Folyamatosan optimalizálunk az egyre jobb eredményért." }
      ].map((step) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-5xl font-black text-violet-500/20 leading-none select-none flex-shrink-0 w-14", children: step.n }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: step.body })
        ] })
      ] }, step.n)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-violet-500/5 border border-violet-500/20 rounded-2xl p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-violet-400 flex-shrink-0" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "30 napos garancia" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-4 leading-relaxed", children: "Biztosak vagyunk az eredményben:" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-white mb-4", children: '"Ha 30 napon belül nem látod a megbeszélt eredményeket, visszaadjuk a kezelési díjat."' }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: "Más marketingcég ezt nem vállalja. Mi igen." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-12 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mb-4 uppercase tracking-wide", children: "Kapcsolódó iparágak" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Fizetett Hirdetések →" }),
        /* @__PURE__ */ jsx("a", { href: "/szepsegszalon-marketing", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Szépségszalon Marketing →" }),
        /* @__PURE__ */ jsx("a", { href: "/edzoterm-marketing", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Edzőterem Marketing →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-8", children: "Gyakori kérdések" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
        { q: "Mennyi fogorvosi marketing kerül Budapesten?", a: "A kezelési díj általában havi 80 000–200 000 Ft, a kampány terjedelmétől és büdzsétől függően. Átlátható árazással dolgozunk." },
        { q: "Milyen fogászati szolgáltatásokra lehet hirdetni?", a: "Szűrővizsgálatokra, fogfehérítésre, fogszabályozásra (clear aligner), fogimplantátumra, fogkőeltávolításra és bármely fogászati kezelésre." },
        { q: "Mennyi új pácienst hoznak a hirdetések?", a: "A Denti Implant Center esetén az első hónapban 53 űrlapos megkeresést értünk el. Az eredmény a praxis típusától és büdzsétől függ." },
        { q: "Hogyan működik a 30 napos garancia fogorvosoknak?", a: "Ha 30 napon belül nem látod a megbeszélt eredményeket, visszaadjuk a teljes kezelési díjat. Kötelezettség nélkül." }
      ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-3", children: item.q }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed text-sm", children: item.a })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: "Kész vagy több páciensre?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto", children: "Foglalj egy ingyenes stratégiai hívást. Megnézzük a jelenlegi helyzetedet és megmutatjuk, mit tudnánk tenni a praxisodért." }),
      /* @__PURE__ */ jsxs("a", { href: "/#contact", className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]", children: [
        "Ingyenes stratégiai hívás",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-4", children: "Semmibe sem kerül. Kötelezettség nélkül." })
    ] }) }),
    /* @__PURE__ */ jsx(PageFooter, {})
  ] });
};
const BASE_URL$1 = "https://levinagymarketing.com";
const AutoskolaPage = () => {
  useEffect(() => {
    document.title = "Autósiskola Marketing Budapest | Nagy Levi Marketing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Facebook és TikTok hirdetések autósiskoláknak Budapesten. Több tanuló egész évben, nem csak szezonban. Garantált eredmények. Ingyenes stratégiai hívás.";
    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Autósiskola Marketing",
      provider: { "@type": "Organization", "@id": `${BASE_URL$1}/#organization`, name: "Nagy Levi Marketing" },
      url: `${BASE_URL$1}/autoskola-marketing`,
      description: "Facebook és TikTok kampányok autósiskoláknak — amelyek folyamatos tanulói bejelentkezést hoznak egész évben.",
      areaServed: { "@type": "City", name: "Budapest" },
      serviceType: "Social Media Advertising for Driving Schools"
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Mennyi kerül az autósiskola marketing Budapesten?", acceptedAnswer: { "@type": "Answer", text: "Az autósiskolák számára futtatott kampányok kezelési díja általában havi 60 000–120 000 Ft. Ez tartalmazza a Facebook, Instagram és/vagy TikTok kampányok kezelését 30 napos garanciával." } },
        { "@type": "Question", name: "Hogyan lehet megoldani a szezonális ingadozást?", acceptedAnswer: { "@type": "Answer", text: "Folyamatos, egész éves kampányokkal és szezonális akciókkal. Nyáron fiatalabb célközönséget érünk el TikTok-on, míg télen más életkori csoportokat Facebook-on." } },
        { "@type": "Question", name: "Milyen eredményeket értek el autósiskoláknak?", acceptedAnswer: { "@type": "Answer", text: "Route 11 autósiskola esetén a 3 iskola közül az első hónapban a kampányolt iskola lett a legjobban teljesítő, túlszárnyalva a már sikeres iskolákat is." } },
        { "@type": "Question", name: "Működik a TikTok hirdetés autósiskoláknak?", acceptedAnswer: { "@type": "Answer", text: "Igen. A 17–24 éves korosztály — a legfőbb autósiskola célcsoport — a TikTok-on érhető el a leghatékonyabban. Kreatív, rövid videós hirdetésekkel kiváló eredményeket érünk el." } }
      ]
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Főoldal", item: BASE_URL$1 },
        { "@type": "ListItem", position: 2, name: "Fizetett Hirdetések", item: `${BASE_URL$1}/fizetett-hirdetesek` },
        { "@type": "ListItem", position: 3, name: "Autósiskola Marketing", item: `${BASE_URL$1}/autoskola-marketing` }
      ]
    };
    ["#auto-service", "#auto-faq", "#auto-breadcrumb"].forEach((id) => {
      var _a;
      return (_a = document.querySelector(id)) == null ? void 0 : _a.remove();
    });
    const s1 = document.createElement("script");
    s1.id = "auto-service";
    s1.type = "application/ld+json";
    s1.textContent = JSON.stringify(service);
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.id = "auto-faq";
    s2.type = "application/ld+json";
    s2.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(s2);
    const s3 = document.createElement("script");
    s3.id = "auto-breadcrumb";
    s3.type = "application/ld+json";
    s3.textContent = JSON.stringify(breadcrumb);
    document.head.appendChild(s3);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-900 text-white", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "text-xl font-bold text-white hover:text-violet-400 transition-colors", children: [
        "Nagy Levi ",
        /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Marketing" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "text-slate-300 hover:text-white transition-colors text-sm", children: "← Főoldal" }),
        /* @__PURE__ */ jsx("a", { href: "/#contact", className: "px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-lg transition-all", children: "Ingyenes hívás" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-6 pt-6", children: /* @__PURE__ */ jsxs("nav", { className: "text-sm text-slate-500", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-violet-400 transition-colors", children: "Főoldal" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "›" }),
      /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "hover:text-violet-400 transition-colors", children: "Fizetett Hirdetések" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "›" }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Autósiskola Marketing" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 pt-12 pb-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8", children: "🚗 Autósiskola Marketing" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white", children: "Több tanuló." }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400", children: "Kevesebb üres férőhely." }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto", children: "Facebook és TikTok kampányok autósiskoláknak — amelyek folyamatos tanulói bejelentkezést hoznak egész évben." }),
      /* @__PURE__ */ jsxs("a", { href: "/#contact", className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]", children: [
        "Ingyenes stratégiai hívás",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: "A szezonalitás csapdája" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Az autósiskolák jellemzően szezonálisan küzdenek: tél végén és tavasz elején tele vannak, nyáron kiürülnek. Ez bevételi ingadozáshoz, kapacitásproblémákhoz és stresszhez vezet." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "A hagyományos megoldások — szórólapok, Google-hirdetések — egyre drágábbak és kevésbé hatékonyak. A fiatal célcsoport (17–24 év) már nem ott van, ahol régen." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Ügyfeleink egyike, a Route 11 Autósiskola, az első kampányhónapban megelőzte a már jól teljesítő testvériskolát — kizárólag Google-hirdetésekkel." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-violet-500 pl-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: "Folyamatos bejelentkezés egész évben" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Facebook és TikTok kampányokat futtatunk, amelyek a 17–24 éves korosztályt érik el ott, ahol valóban vannak — a telefonjaikon." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Szezonális ajánlatokkal, kreatív videós tartalommal és precíz célzással biztosítjuk, hogy az iskola ne csak tél végén legyen tele." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Google Ads kampányokkal azokat fogjuk el, akik aktívan keresnek autósiskolát — és versenytársaid előtt jelennek meg a te hirdetéseid." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-12", children: "Hogyan működik" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: [
        { n: "01", title: "Felméréssel kezdünk", body: "Melyik hónapokban van a legtöbb üres férőhely? Melyik célcsoport a legértékesebb? Milyen platformokon érdemes hirdetni? Ezekre válaszolunk az első hívásban." },
        { n: "02", title: "Kampányok indítása", body: "Facebook, Instagram vagy TikTok — a célcsoportnak megfelelő platformon futtatjuk a hirdetéseket, gondosan optimalizált szöveggel és kreatívokkal." },
        { n: "03", title: "Folyamatos feltöltés", body: "Hétről hétre nyomon követjük a bejelentkezéseket és optimalizáljuk a kampányokat. Az eredmény összeadódik." }
      ].map((step) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-5xl font-black text-violet-500/20 leading-none select-none flex-shrink-0 w-14", children: step.n }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: step.body })
        ] })
      ] }, step.n)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-violet-500/5 border border-violet-500/20 rounded-2xl p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-violet-400 flex-shrink-0" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "30 napos garancia" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-4 leading-relaxed", children: "Biztosak vagyunk az eredményben:" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-white mb-4", children: '"Ha 30 napon belül nem látod a megbeszélt eredményeket, visszaadjuk a kezelési díjat."' })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-12 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mb-4 uppercase tracking-wide", children: "Kapcsolódó iparágak" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Fizetett Hirdetések →" }),
        /* @__PURE__ */ jsx("a", { href: "/edzoterm-marketing", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Edzőterem Marketing →" }),
        /* @__PURE__ */ jsx("a", { href: "/webaruhaz-marketing", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Webáruház Marketing →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-8", children: "Gyakori kérdések" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
        { q: "Mennyi kerül az autósiskola marketing Budapesten?", a: "Az autósiskolák számára futtatott kampányok kezelési díja általában havi 60 000–120 000 Ft. 30 napos garanciával dolgozunk." },
        { q: "Hogyan lehet megoldani a szezonális ingadozást?", a: "Folyamatos, egész éves kampányokkal és szezonális akciókkal. Nyáron fiatalabb célközönséget érünk el TikTok-on, míg télen más csoportokat Facebook-on." },
        { q: "Milyen eredményeket értek el autósiskoláknak?", a: "Route 11 autósiskola esetén az első hónapban a kampányolt iskola lett a legjobban teljesítő a 3 testvériskola közül." },
        { q: "Működik a TikTok hirdetés autósiskoláknak?", a: "Igen. A 17–24 éves korosztály TikTok-on érhető el a leghatékonyabban. Kreatív, rövid videós hirdetésekkel kiváló eredményeket érünk el." }
      ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-3", children: item.q }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed text-sm", children: item.a })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: "Tele legyen az iskola?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto", children: "Foglalj egy ingyenes stratégiai hívást. Megnézzük az iskolád jelenlegi helyzetét és megmutatjuk, mit tudnánk tenni érte." }),
      /* @__PURE__ */ jsxs("a", { href: "/#contact", className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]", children: [
        "Ingyenes stratégiai hívás",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-4", children: "Semmibe sem kerül. Kötelezettség nélkül." })
    ] }) }),
    /* @__PURE__ */ jsx(PageFooter, {})
  ] });
};
const BASE_URL = "https://levinagymarketing.com";
const WebaruhazPage = () => {
  useEffect(() => {
    document.title = "Webáruház Marketing Budapest | Nagy Levi Marketing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Meta + Google Shopping kampányok + remarketing webáruházaknak. Több eladás, jobb ROAS, alacsonyabb kosárelhagyás. 30 napos garancia. Ingyenes hívás.";
    const service = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Webáruház Marketing",
      provider: { "@type": "Organization", "@id": `${BASE_URL}/#organization`, name: "Nagy Levi Marketing" },
      url: `${BASE_URL}/webaruhaz-marketing`,
      description: "Meta + Google Shopping kampányok + remarketing rendszerek webáruházaknak — amelyek profitábilis növekedést hoznak.",
      areaServed: { "@type": "Country", name: "Hungary" },
      serviceType: "E-commerce Advertising"
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Mennyi kerül a webáruház marketing Magyarországon?", acceptedAnswer: { "@type": "Answer", text: "A webáruházak számára futtatott kampányok kezelési díja általában havi 80 000–250 000 Ft, az árbevételtől és a kampány terjedelmétől függően. Meta + Google Shopping + remarketing csomagokkal dolgozunk." } },
        { "@type": "Question", name: "Hogyan lehet javítani a ROAS-t (hirdetési megtérülést)?", acceptedAnswer: { "@type": "Answer", text: "Pontosabb célzással, jobb kreatívokkal és remarketing rendszerekkel. A kosárelhagyókat automatikusan visszahívjuk, a legjobb vásárlókat lookalike célközönségekkel szorozzuk meg." } },
        { "@type": "Question", name: "Mi a különbség a Meta és a Google Shopping között webáruháznál?", acceptedAnswer: { "@type": "Answer", text: "A Google Shopping azokat éri el, akik aktívan keresnek egy terméket. A Meta a tudatosság előtti fázisban éri el az ideális vásárlókat. A legjobb eredményt a kettő kombinációja hozza." } },
        { "@type": "Question", name: "Hogyan csökkenthető a kosárelhagyás?", acceptedAnswer: { "@type": "Answer", text: "Dinamikus remarketing hirdetésekkel és automatizált email/SMS szekvenciákkal. A kosárelhagyók 30–40%-a visszahozható megfelelő utókövetéssel." } }
      ]
    };
    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Főoldal", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Fizetett Hirdetések", item: `${BASE_URL}/fizetett-hirdetesek` },
        { "@type": "ListItem", position: 3, name: "Webáruház Marketing", item: `${BASE_URL}/webaruhaz-marketing` }
      ]
    };
    ["#web-service", "#web-faq", "#web-breadcrumb"].forEach((id) => {
      var _a;
      return (_a = document.querySelector(id)) == null ? void 0 : _a.remove();
    });
    const s1 = document.createElement("script");
    s1.id = "web-service";
    s1.type = "application/ld+json";
    s1.textContent = JSON.stringify(service);
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.id = "web-faq";
    s2.type = "application/ld+json";
    s2.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(s2);
    const s3 = document.createElement("script");
    s3.id = "web-breadcrumb";
    s3.type = "application/ld+json";
    s3.textContent = JSON.stringify(breadcrumb);
    document.head.appendChild(s3);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-900 text-white", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "text-xl font-bold text-white hover:text-violet-400 transition-colors", children: [
        "Nagy Levi ",
        /* @__PURE__ */ jsx("span", { className: "text-violet-400", children: "Marketing" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "text-slate-300 hover:text-white transition-colors text-sm", children: "← Főoldal" }),
        /* @__PURE__ */ jsx("a", { href: "/#contact", className: "px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-lg transition-all", children: "Ingyenes hívás" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-6 pt-6", children: /* @__PURE__ */ jsxs("nav", { className: "text-sm text-slate-500", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-violet-400 transition-colors", children: "Főoldal" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "›" }),
      /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "hover:text-violet-400 transition-colors", children: "Fizetett Hirdetések" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "›" }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Webáruház Marketing" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 pt-12 pb-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold mb-8", children: "🛒 Webáruház Marketing" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-2 text-white", children: "Több eladás." }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-violet-400", children: "Jobb ROAS." }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto", children: "Meta + Google Shopping kampányok + remarketing rendszerek webáruházaknak — amelyek profitábilis növekedést hoznak." }),
      /* @__PURE__ */ jsxs("a", { href: "/#contact", className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]", children: [
        "Ingyenes stratégiai hívás",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: "A webáruház marketing csapdái" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "A webáruházak rengeteg pénzt öntenek hirdetésekbe, de a ROAS lassan romlik, a kosárelhagyás magas, a visszatérő vásárlók száma alacsony. Ismerős?" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "A legtöbb webáruház hibája: csak a megszerzésre koncentrál, miközben az elveszett vásárlók és az alacsony visszatérési arány lassan felemészti a profitot." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Egy átlagos webáruháznál a látogatók 70–80%-a elhagyja a kosarat vásárlás nélkül. Ez rengeteg elveszett bevétel — amelynek nagy részét vissza lehet hozni." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-violet-500 pl-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-8", children: "A teljes e-commerce marketing rendszer" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Meta hirdetések az ideális vásárlók megszerzéséhez. Google Shopping az aktívan kereső vásárlókhoz. Remarketing a kosárelhagyókhoz és a visszatérők megszerzéséhez." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "A három rendszer együtt dolgozik — minden fázisban ott vagyunk, ahol a vásárlód jár a döntési folyamatban." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed text-lg", children: "Nem csak forgalmat hozunk — profitábilis forgalmat hozunk. A ROAS javítása és a lemorzsolódás csökkentése egyenlő arányban fontos." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-12", children: "Hogyan működik" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: [
        { n: "01", title: "Audit és stratégia", body: "Megnézzük a jelenlegi kampányokat, a ROAS-t, a kosárelhagyási rátát és a visszatérő vásárlói arányt. Megtaláljuk a legnagyobb veszteségpontokat." },
        { n: "02", title: "Kampányok felépítése", body: "Meta + Google Shopping + dinamikus remarketing — minden a webáruházodra és termékkategóriáidra szabva. Preci célzás, optimalizált szöveg, vonzó kreatívok." },
        { n: "03", title: "Folyamatos optimalizálás", body: "Minden héten nyomon követjük a ROAS-t, a konverziós rátát és a visszatérő vásárlók számát. Folyamatosan javítjuk, ami nem teljesít elég jól." }
      ].map((step) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-5xl font-black text-violet-500/20 leading-none select-none flex-shrink-0 w-14", children: step.n }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: step.body })
        ] })
      ] }, step.n)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-violet-500/5 border border-violet-500/20 rounded-2xl p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-violet-400 flex-shrink-0" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: "30 napos garancia" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-4 leading-relaxed", children: "Biztosak vagyunk az eredményben:" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-white mb-4", children: '"Ha 30 napon belül nem javul a ROAS és nem látod a megbeszélt eredményeket, visszaadjuk a kezelési díjat."' })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-12 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mb-4 uppercase tracking-wide", children: "Kapcsolódó iparágak" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx("a", { href: "/fizetett-hirdetesek", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Fizetett Hirdetések →" }),
        /* @__PURE__ */ jsx("a", { href: "/ai-automatizalas", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "AI Automatizálás →" }),
        /* @__PURE__ */ jsx("a", { href: "/autoskola-marketing", className: "px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-violet-400 rounded-lg text-sm transition-all", children: "Autósiskola Marketing →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-8", children: "Gyakori kérdések" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
        { q: "Mennyi kerül a webáruház marketing Magyarországon?", a: "A kampányok kezelési díja általában havi 80 000–250 000 Ft, az árbevételtől és a kampány terjedelmétől függően. Meta + Google Shopping + remarketing csomagokkal dolgozunk." },
        { q: "Hogyan lehet javítani a ROAS-t?", a: "Pontosabb célzással, jobb kreatívokkal és remarketing rendszerekkel. A kosárelhagyókat automatikusan visszahívjuk, a legjobb vásárlókat lookalike célközönségekkel szorozzuk meg." },
        { q: "Mi a különbség a Meta és a Google Shopping között webáruháznál?", a: "A Google Shopping azokat éri el, akik aktívan keresnek egy terméket. A Meta a tudatosság előtti fázisban éri el az ideális vásárlókat. A legjobb eredményt a kettő kombinációja hozza." },
        { q: "Hogyan csökkenthető a kosárelhagyás?", a: "Dinamikus remarketing hirdetésekkel és automatizált email/SMS szekvenciákkal. A kosárelhagyók 30–40%-a visszahozható megfelelő utókövetéssel." }
      ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-3", children: item.q }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed text-sm", children: item.a })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-3xl mx-auto px-6 py-16 border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: "Jobb ROAS-t szeretnél?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto", children: "Foglalj egy ingyenes stratégiai hívást. Megnézzük a jelenlegi kampányaidat és megmutatjuk, hol van a legnagyobb fejlődési lehetőség." }),
      /* @__PURE__ */ jsxs("a", { href: "/#contact", className: "group inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-lg transition-all text-lg shadow-xl shadow-violet-500/20 hover:scale-[1.02]", children: [
        "Ingyenes stratégiai hívás",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mt-4", children: "Semmibe sem kerül. Kötelezettség nélkül." })
    ] }) }),
    /* @__PURE__ */ jsx(PageFooter, {})
  ] });
};
const routes = [
  { path: "/", element: /* @__PURE__ */ jsx(App, {}) },
  { path: "/en", element: /* @__PURE__ */ jsx(App, {}) },
  { path: "/audit", element: /* @__PURE__ */ jsx(AuditPage, {}) },
  { path: "/en/audit", element: /* @__PURE__ */ jsx(AuditPage, {}) },
  { path: "/blog", element: /* @__PURE__ */ jsx(BlogList, { language: "hu" }) },
  { path: "/blog/:slug", element: /* @__PURE__ */ jsx(BlogPost, { language: "hu" }) },
  { path: "/en/blog", element: /* @__PURE__ */ jsx(BlogList, { language: "en" }) },
  { path: "/en/blog/:slug", element: /* @__PURE__ */ jsx(BlogPost, { language: "en" }) },
  { path: "/fizetett-hirdetesek", element: /* @__PURE__ */ jsx(PaidAdsPage, { language: "hu" }) },
  { path: "/en/paid-ads", element: /* @__PURE__ */ jsx(PaidAdsPage, { language: "en" }) },
  { path: "/ai-automatizalas", element: /* @__PURE__ */ jsx(AIAutomationPage, { language: "hu" }) },
  { path: "/en/ai-automation", element: /* @__PURE__ */ jsx(AIAutomationPage, { language: "en" }) },
  { path: "/rolunk", element: /* @__PURE__ */ jsx(AboutPage, {}) },
  { path: "/szepsegszalon-marketing", element: /* @__PURE__ */ jsx(SzepsegszalonPage, {}) },
  { path: "/fogorvos-marketing", element: /* @__PURE__ */ jsx(FogorvosPage, {}) },
  { path: "/autoskola-marketing", element: /* @__PURE__ */ jsx(AutoskolaPage, {}) },
  { path: "/webaruhaz-marketing", element: /* @__PURE__ */ jsx(WebaruhazPage, {}) },
  { path: "*", element: /* @__PURE__ */ jsx(App, {}) }
];
const createRoot = ViteReactSSG({ routes });
export {
  createRoot,
  routes
};
