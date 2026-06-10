import { useState, useCallback } from 'react';
import { Lock, Search, Heading1, Code2, Sparkles, Target, Gauge, Check, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LockedInsight, IconHint, AuditMode, AuditReport, Lang } from '../../lib/auditTypes';
import { tr, trArr } from '../../lib/auditTranslations';
import CalendlyEmbed from './CalendlyEmbed';

const ICONS: Record<IconHint, React.ComponentType<{ className?: string }>> = {
  search: Search, heading: Heading1, code: Code2,
  sparkles: Sparkles, target: Target, gauge: Gauge,
};

interface Props {
  insights: LockedInsight[];
  additionalCount: number;
  freeCount: number;
  mode: AuditMode;
  lang: Lang;
  auditUrl: string;
  report: AuditReport;
}

export default function LockedSection({ insights, additionalCount, freeCount, mode, lang, auditUrl, report }: Props) {
  const [view, setView] = useState<'cta' | 'calendly' | 'booked'>('cta');
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/levinagy2323/discovery-call';
  const total = freeCount + insights.length + additionalCount;
  const perks = mode === 'geo' ? trArr('perks_geo', lang) : trArr('perks_seo', lang);

  const handleBooked = useCallback(async () => {
    setView('booked');
    try {
      await fetch('/.netlify/functions/save-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: auditUrl, mode, report }),
      });
    } catch {
      // non-fatal
    }
  }, [auditUrl, mode, report]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-slate-800 to-slate-900 border border-teal-500/30 rounded-2xl p-8 md:p-10"
    >
      <AnimatePresence mode="wait">

        {/* ── CTA ── */}
        {view === 'cta' && (
          <motion.div key="cta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-teal-500/10 rounded-xl border border-teal-500/20">
                <Lock className="w-5 h-5 text-teal-400" />
              </div>
              <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest">{tr('full_report_ready', lang)}</p>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">{tr('locked_title', lang)}</h3>
            <p className="text-slate-400 mb-7">
              {tr('locked_sub1', lang)}{' '}
              <span className="text-white font-semibold">{total}</span>{' '}
              {tr('locked_sub2', lang)}
            </p>

            <div className="space-y-3 mb-8">
              {insights.map((insight, i) => {
                const Icon = ICONS[insight.icon_hint] ?? Target;
                return (
                  <div key={i} className="bg-slate-900/70 border border-slate-700/60 rounded-xl p-4">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-slate-500 flex-shrink-0" />
                        <span className="text-slate-300 font-semibold text-sm">{insight.category}</span>
                      </div>
                      <span className="text-xs font-bold text-red-400 bg-red-400/10 px-2.5 py-0.5 rounded-md flex-shrink-0">
                        {insight.score}/10
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm italic leading-relaxed">"{insight.teaser}"</p>
                    <div className="mt-3 pt-3 border-t border-slate-700/50 flex items-center gap-2">
                      <Lock className="w-3 h-3 text-slate-600" />
                      <span className="text-slate-600 text-xs">{tr('fix_revealed', lang)}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-slate-900/50 rounded-xl p-5 mb-7">
              <p className="text-white font-semibold mb-3 text-sm">{tr('walkthrough_title', lang)}</p>
              <ul className="space-y-2.5">
                {perks.map(perk => (
                  <li key={perk} className="flex items-center gap-2.5 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-slate-400 text-sm mb-6">
              <span className="text-white font-semibold">{tr('no_pitch', lang)}</span>{' '}
              {tr('no_pitch_sub', lang)}
            </p>

            <button
              onClick={() => setView('calendly')}
              className="block w-full bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-900 font-bold text-lg py-4 rounded-xl text-center transition"
            >
              {tr('book_btn', lang)}
            </button>
          </motion.div>
        )}

        {/* ── CALENDLY EMBED ── */}
        {view === 'calendly' && (
          <motion.div key="calendly" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-1">{tr('book_label', lang)}</p>
                <h3 className="text-white text-xl font-bold">{tr('book_title', lang)}</h3>
              </div>
              <button onClick={() => setView('cta')} className="text-slate-500 hover:text-slate-300 text-sm transition">
                {tr('back', lang)}
              </button>
            </div>
            <CalendlyEmbed url={calendlyUrl} onBooked={handleBooked} />
          </motion.div>
        )}

        {/* ── BOOKED ── */}
        {view === 'booked' && (
          <motion.div key="booked" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/10 border border-teal-500/20 rounded-full mb-5">
              <CalendarCheck className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">{tr('booked_title', lang)}</h3>
            <p className="text-slate-400 mb-2">{tr('booked_sub', lang)}</p>
            <p className="text-slate-500 text-sm">
              {tr('booked_footer', lang)}{' '}
              <span className="text-white font-semibold">{total}</span>{' '}
              {tr('booked_footer2', lang)}
            </p>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
}
