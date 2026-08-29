import React, { useState } from 'react';
import { ArrowRight, Eye, Banknote, TrendingUp } from 'lucide-react';

/* ── dot grid helpers ── */
const GRID_COLS = 11;
const GRID_ROWS = 9;

const inCircle = (c: number, r: number) => {
  const cx = (GRID_COLS - 1) / 2;
  const cy = (GRID_ROWS - 1) / 2;
  return ((c - cx) / (cx + 0.5)) ** 2 + ((r - cy) / (cy + 0.5)) ** 2 <= 1;
};

const beforeNum = (c: number, r: number) => {
  if (c === 5 && r === 7) return 3;
  if (c === 5 && r === 8) return 11;
  if (c === 4 && r === 7) return 19;
  return 20;
};

const dotBg = (n: number, mode: 'before' | 'after') => {
  if (mode === 'after') return { bg: '#22c55e', border: '#15803d', color: '#fff' };
  if (n <= 3)           return { bg: '#facc15', border: '#ca8a04', color: '#1c1c1c' };
  if (n <= 10)          return { bg: '#f97316', border: '#c2410c', color: '#fff' };
  return                       { bg: '#dc2626', border: '#991b1b', color: '#fff' };
};

const MapGrid: React.FC<{ mode: 'before' | 'after' }> = ({ mode }) => (
  <div
    className="relative rounded-xl overflow-hidden"
    style={{ backgroundImage: "url('/budapest-map.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
        gap: '3px',
        padding: '10px',
      }}
    >
      {Array.from({ length: GRID_ROWS }).map((_, r) =>
        Array.from({ length: GRID_COLS }).map((_, c) => {
          if (!inCircle(c, r)) return <div key={`${r}-${c}`} style={{ aspectRatio: '1' }} />;
          const n = mode === 'after' ? 1 : beforeNum(c, r);
          const { bg, border, color } = dotBg(n, mode);
          return (
            <div
              key={`${r}-${c}`}
              style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: '50%',
                backgroundColor: bg,
                border: `2.5px solid ${border}`,
                color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'clamp(9px, 1.6vw, 14px)',
                fontWeight: 900,
                lineHeight: 1,
                boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
                transition: 'background-color 0.4s ease, border-color 0.4s ease',
                userSelect: 'none',
              }}
            >
              {n}
            </div>
          );
        })
      )}
    </div>
  </div>
);

/* ── stats ── */
const beforeStats = [
  { label: 'Átlagos helyezés', value: '86', bad: true },
  { label: 'Piaci részesedés', value: '1%', bad: true },
  { label: 'Kattintás / hó', value: '5', bad: true },
  { label: 'Ügyfél / hó', value: '1-2', bad: true },
];
const afterStats = [
  { label: 'Átlagos helyezés', value: '2', bad: false },
  { label: 'Piaci részesedés', value: '82%', bad: false },
  { label: 'Kattintás / hó', value: '80', bad: false },
  { label: 'Ügyfél / hó', value: '15+', bad: false },
];

const DijmentesAuditPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', website: '', company: '', mapsUrl: '', timeline: 'asap', city: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [mapsError, setMapsError] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [view, setView] = useState<'before' | 'after'>('before');

  const set = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const isValidMapsUrl = (url: string) =>
    url.includes('google.com/maps') || url.includes('maps.app.goo.gl') || url.includes('maps.google') || url.includes('share.google');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidMapsUrl(form.mapsUrl)) { setMapsError(true); return; }
    if (!form.city) return;
    setMapsError(false);
    setStatus('loading');
    try {
      const res = await fetch('/.netlify/functions/send-audit-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-transparent border-b border-slate-600 focus:border-violet-400 outline-none py-3 text-white placeholder-slate-500 transition-colors text-base";
  const timelineOptions = [
    { value: 'asap', label: 'Minél hamarabb' },
    { value: 'weeks', label: '1-2 héten belül' },
    { value: 'month', label: '1 hónapon belül' },
  ];

  const stats = view === 'before' ? beforeStats : afterStats;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Nav */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-white hover:text-violet-400 transition-colors">
            Nagy Levi <span className="text-violet-400">Marketing</span>
          </a>
          <a href="/#contact" className="px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-lg transition-all">
            Kapcsolatfelvétel
          </a>
        </div>
      </header>

      {/* Hero + Form */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="md:sticky md:top-24">
            <span className="inline-block px-3 py-1 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold rounded-full uppercase tracking-widest mb-8">
              Díjmentes
            </span>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-8 text-white">
              Kérj egy díjmentes elemzést a Google cégprofilodról
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Töltsd ki az űrlapot, és egy személyre szabott elemzést készítek neked. Ebben az elemzésben megmutatok 3 konkrét tanácsot, amivel magasabban fogsz rangsorolni, mint jelenleg.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Nincs költség, nincs kötelezettség, nincs tolakodó értékesítési nyomás.<br />
              <span className="text-white font-semibold">Garantáltan.</span>
            </p>
          </div>

          {/* Right — Form */}
          <div>
            {status === 'success' ? (
              <div className="bg-slate-800 border border-violet-500/30 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✅</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Megkaptuk a kérésedet!</h2>
                <p className="text-slate-400 leading-relaxed">
                  24 órán belül visszajelzünk az elemzéssel.
                </p>
                <a href="/blog" className="inline-flex items-center mt-6 px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg transition-all text-sm">
                  Blog megtekintése <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="text" required placeholder="Teljes neved *" value={form.name} onChange={e => set('name', e.target.value)} className={inputClass} />
                <input type="email" required placeholder="Email *" value={form.email} onChange={e => set('email', e.target.value)} className={inputClass} />
                <input type="tel" required placeholder="Telefonszám *" value={form.phone} onChange={e => set('phone', e.target.value)} className={inputClass} />
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" required placeholder="Weboldal *" value={form.website} onChange={e => set('website', e.target.value)} className={inputClass} />
                  <input type="text" required placeholder="Cégnév *" value={form.company} onChange={e => set('company', e.target.value)} className={inputClass} />
                </div>
                <div>
                  <input type="text" required placeholder="Google Maps link *" value={form.mapsUrl}
                    onChange={e => { set('mapsUrl', e.target.value); setMapsError(false); }}
                    className={`${inputClass} ${mapsError ? 'border-red-500' : ''}`} />
                  {mapsError
                    ? <p className="text-red-400 text-xs mt-2">Kérlek adj meg egy érvényes Google Maps linket (google.com/maps vagy maps.app.goo.gl)</p>
                    : <p className="text-slate-600 text-xs mt-2">Keresd meg a céged a Google Térképen, kattints a "Megosztás" gombra, és másold be a linket.</p>
                  }
                </div>

                <div>
                  <p className="text-slate-300 text-sm font-medium mb-4">Melyik városban működik a vállalkozásod? *</p>
                  <div className="flex gap-3 flex-wrap">
                    {['Budapest', 'Pest megye', 'Egyéb'].map(city => (
                      <button key={city} type="button" onClick={() => set('city', city)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${form.city === city ? 'bg-violet-500 border-violet-500 text-white' : 'bg-transparent border-slate-600 text-slate-400 hover:border-slate-400 hover:text-white'}`}>
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-slate-300 text-sm font-medium mb-4">Mikor szeretnéd megoldani ezt a problémát? *</p>
                  <div className="flex gap-3 flex-wrap">
                    {timelineOptions.map(opt => (
                      <button key={opt.value} type="button" onClick={() => set('timeline', opt.value)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${form.timeline === opt.value ? 'bg-violet-500 border-violet-500 text-white' : 'bg-transparent border-slate-600 text-slate-400 hover:border-slate-400 hover:text-white'}`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={e => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-violet-500 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-slate-400 text-sm leading-relaxed">
                    Elolvastam és elfogadom az{' '}
                    <button type="button" onClick={() => setPrivacyOpen(true)} className="text-violet-400 hover:text-violet-300 underline">
                      adatvédelmi szabályzatot
                    </button>
                    . *
                  </span>
                </label>

                <button type="submit" disabled={status === 'loading' || !privacyAccepted}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl transition-all text-base disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Küldés...' : <> Elemzést kérek <ArrowRight className="w-5 h-5" /></>}
                </button>

                {status === 'error' && <p className="text-red-400 text-sm text-center">Hiba történt. Írj emailt: nlevi@levinagymarketing.com</p>}
                <p className="text-slate-600 text-xs text-center">Az adataidat bizalmasan kezeljük. Spam garantáltan nulla.</p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Advantage section ── */}
      <section className="border-t border-slate-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
              ✓ Az előny
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Miért éri meg ezt csinálni?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Eye className="w-6 h-6 text-violet-400" />,
                title: 'Láthatóság',
                body: 'A keresések 72%-a az első 3 találat valamelyikére kattint. Ha nem vagy ott, gyakorlatilag nem is vesznek észre az emberek.',
              },
              {
                icon: <Banknote className="w-6 h-6 text-violet-400" />,
                title: 'Ingyenes forgalom',
                body: 'Nincs kattintásonkénti díj, nincs havi hirdetési büdzsé — ellentétben a Google Ads vagy Meta kampányokkal.',
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-violet-400" />,
                title: 'Hosszú távú stratégia',
                body: 'Ha egyszer az első 3 közé kerülsz, ott is maradsz évekig — havonta ismétlődő plusz-költség nélkül.',
              },
            ].map((card, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After section ── */}
      <section className="border-t border-slate-800 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
              ✓ Előtte / Utána
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A <em className="text-violet-400 not-italic">különbség</em>
            </h2>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
            {/* Toggle */}
            <div className="flex gap-2 mb-8">
              {(['before', 'after'] as const).map(v => (
                <button key={v} onClick={() => setView(v)}
                  className={`px-6 py-2 rounded-lg text-sm font-semibold border transition-all ${view === v ? 'bg-violet-500 border-violet-500 text-white' : 'bg-transparent border-slate-600 text-slate-400 hover:text-white'}`}>
                  {v === 'before' ? 'Előtte' : 'Utána'}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Stats */}
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-600 flex items-center justify-center text-lg">🏢</div>
                  <div>
                    <p className="text-white font-semibold text-sm">A te vállalkozásod</p>
                    <p className="text-slate-400 text-xs">Budapest, Magyarország</p>
                  </div>
                </div>

                {stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm">{s.label}</span>
                    <span className={`px-3 py-1 rounded-md text-sm font-bold ${s.bad ? 'bg-red-600/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Map */}
              <MapGrid mode={view} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-800 py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Hol tartasz most?</h2>
          <p className="text-slate-400 mb-8">Kérj egy ingyenes elemzést, és 24 órán belül megmutatjuk a pontos képet a Google-on elfoglalt helyedről.</p>
          <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-violet-500 hover:bg-violet-400 text-white font-bold rounded-xl transition-all text-base shadow-xl shadow-violet-500/20 hover:scale-[1.02]">
            Ingyenes elemzést kérek <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm space-y-2">
        <div>© {new Date().getFullYear()} Nagy Levi Marketing</div>
        <button onClick={() => setPrivacyOpen(true)} className="text-slate-500 hover:text-slate-300 underline text-xs transition-colors">
          Adatvédelmi szabályzat
        </button>
      </footer>

      {/* Privacy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setPrivacyOpen(false)}>
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-bold text-xl">Adatvédelmi szabályzat</h2>
              <button onClick={() => setPrivacyOpen(false)} className="text-slate-400 hover:text-white text-2xl leading-none">&times;</button>
            </div>
            <div className="text-slate-300 text-sm leading-relaxed space-y-4">
              <p><strong className="text-white">Adatkezelő:</strong> Nagy Levi Marketing (nlevi@levinagymarketing.com)</p>
              <p><strong className="text-white">Kezelt adatok:</strong> Név, email cím, telefonszám, weboldal, cégnév, Google Maps link, város, időtáv.</p>
              <p><strong className="text-white">Az adatkezelés célja:</strong> Az ingyenes elemzés elkészítése és kapcsolatfelvétel a kért szolgáltatással kapcsolatban.</p>
              <p><strong className="text-white">Az adatkezelés jogalapja:</strong> Az érintett önkéntes hozzájárulása (GDPR 6. cikk (1) a) pont).</p>
              <p><strong className="text-white">Adatmegőrzési idő:</strong> Az adatokat az elemzés elvégzéséig, illetve hozzájárulás visszavonásáig kezeljük.</p>
              <p><strong className="text-white">Adattovábbítás:</strong> Az adatokat harmadik félnek nem adjuk át, kizárólag a szolgáltatás nyújtásához szükséges mértékben kezeljük.</p>
              <p><strong className="text-white">Jogok:</strong> Bármikor kérheted adataid törlését, módosítását vagy az adatkezelés korlátozását az nlevi@levinagymarketing.com emailcímen.</p>
            </div>
            <button onClick={() => setPrivacyOpen(false)} className="mt-8 w-full py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-xl transition-all text-sm">
              Bezárás
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DijmentesAuditPage;
