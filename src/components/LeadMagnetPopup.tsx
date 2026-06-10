import React, { useState } from 'react';
import { Download, X, CheckCircle, Mail } from 'lucide-react';

const BASE_URL = 'https://levinagymarketing.com';

interface Props {
  language: 'hu' | 'en';
  onClose: () => void;
}

const copy = {
  hu: {
    badge:           '🎁 Ingyenes útmutató',
    title:           'Szerezz több ügyfelet Meta hirdetésekkel',
    subtitle:        '12 oldalas útmutató: miért a Meta hirdetések a legnagyobb marketing lehetőség – és hogyan használd ki.',
    bullets:         [
      'Miért éri el hirdetésed pontosan a megfelelő embereket',
      'A legfontosabb hibák, amik elvéreznek a Facebook-on',
      'Konkrét stratégia, amivel azonnal elindulhatsz',
    ],
    namePlaceholder: 'A neved...',
    placeholder:     'Az e-mail címed...',
    cta:             'Letöltöm díjmentesen →',
    sending:         'Küldés...',
    successTitle:    (name: string) => `✅ Megvan, ${name}! Ellenőrizd az e-mailedet.`,
    successSubtitle: 'Az útmutató letöltése hamarosan elindul, és e-mailen is elküldjük.',
    skip:            'Nem szeretnék több ügyfelet',
    pdfUrl:          `${BASE_URL}/leadmagnet-hu.pdf`,
  },
  en: {
    badge:           '🎁 Free guide',
    title:           'Get more clients with Meta Ads',
    subtitle:        '6-page guide: why Meta Ads are the biggest marketing opportunity — and how to use them.',
    bullets:         [
      'Why your ads can reach exactly the right people',
      'The biggest mistakes killing Facebook campaigns',
      'A concrete strategy you can start using today',
    ],
    namePlaceholder: 'Your name...',
    placeholder:     'Your email address...',
    cta:             'Download for free →',
    sending:         'Sending...',
    successTitle:    (name: string) => `✅ Got it, ${name}! Check your inbox.`,
    successSubtitle: "Your guide will download now and we'll also send it to your email.",
    skip:            'No thanks',
    pdfUrl:          `${BASE_URL}/leadmagnet-us.pdf`,
  },
};

const LeadMagnetPopup: React.FC<Props> = ({ language, onClose }) => {
  const [name, setName]     = useState('');
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const t = copy[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg(language === 'hu' ? 'Kérjük, add meg a neved.' : 'Please enter your name.');
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg(language === 'hu' ? 'Kérjük, adj meg egy érvényes e-mail címet.' : 'Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setStatus('sending');

    // 1. Trigger immediate browser download
    const link = document.createElement('a');
    link.href = t.pdfUrl;
    link.download = language === 'hu' ? 'meta-hirdetesek-utmutato.pdf' : 'meta-ads-guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Send personalised email via our SMTP Netlify function
    try {
      await fetch('/.netlify/functions/send-leadmagnet', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name: name.trim(), email, language }),
      });
    } catch (err) {
      console.warn('send-leadmagnet function failed:', err);
      // Non-blocking — download already happened
    }

    // 3. Capture lead in Netlify Forms (dashboard backup)
    try {
      const fd = new FormData();
      fd.append('form-name', 'lead-magnet');
      fd.append('name',      name.trim());
      fd.append('email',     email);
      fd.append('language',  language);
      await fetch('/', { method: 'POST', body: fd });
    } catch (err) {
      console.warn('Netlify form submit failed:', err);
    }

    setStatus('success');
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
      {/* Hidden Netlify form detector */}
      <form name="lead-magnet" data-netlify="true" hidden>
        <input type="text"  name="name" />
        <input type="email" name="email" />
        <input type="text"  name="language" />
      </form>

      <div className="relative bg-slate-800 border border-slate-700 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600" />

        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        <div className="p-7 sm:p-8">
          {status === 'success' ? (
            /* ── Success ── */
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.successTitle(name.trim())}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{t.successSubtitle}</p>
              <button onClick={onClose} className="px-6 py-2.5 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-xl transition-colors text-sm">
                {language === 'hu' ? 'Rendben, köszönöm!' : 'Great, thanks!'}
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full mb-5">
                <Download className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-violet-300 text-xs font-semibold uppercase tracking-wide">{t.badge}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{t.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{t.subtitle}</p>

              <ul className="space-y-2.5 mb-6">
                {t.bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <div className="w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <div className="relative">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <input
                    type="text"
                    value={name}
                    onChange={e => { setName(e.target.value); setErrorMsg(''); }}
                    placeholder={t.namePlaceholder}
                    className="w-full bg-slate-900 border border-slate-600 hover:border-slate-500 focus:border-violet-500 outline-none rounded-xl pl-10 pr-4 py-3.5 text-white text-sm placeholder-slate-500 transition-colors"
                    disabled={status === 'sending'}
                    autoComplete="name"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setErrorMsg(''); }}
                    placeholder={t.placeholder}
                    className="w-full bg-slate-900 border border-slate-600 hover:border-slate-500 focus:border-violet-500 outline-none rounded-xl pl-10 pr-4 py-3.5 text-white text-sm placeholder-slate-500 transition-colors"
                    disabled={status === 'sending'}
                    autoComplete="email"
                  />
                </div>

                {errorMsg && <p className="text-red-400 text-xs pl-1">{errorMsg}</p>}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-violet-500 hover:bg-violet-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25 text-base"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      {t.sending}
                    </>
                  ) : (
                    <><Download className="w-4 h-4" />{t.cta}</>
                  )}
                </button>
              </form>

              <button onClick={onClose} className="w-full text-center text-slate-600 hover:text-slate-400 text-xs transition-colors py-2 mt-1">
                {t.skip}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetPopup;
