import { motion } from 'framer-motion';
import type { ScoreColor, AuditMode, Lang } from '../../lib/auditTypes';
import { tr } from '../../lib/auditTranslations';

interface Props {
  score: number;
  color: ScoreColor;
  headline: string;
  mode: AuditMode;
  lang: Lang;
}

const COLOR_MAP: Record<ScoreColor, { text: string; ring: string; bg: string }> = {
  red:    { text: 'text-red-400',    ring: '#F87171', bg: 'bg-red-400/10' },
  yellow: { text: 'text-yellow-400', ring: '#FBBF24', bg: 'bg-yellow-400/10' },
  green:  { text: 'text-teal-400',   ring: '#00BFA6', bg: 'bg-teal-400/10' },
};

const CIRCUMFERENCE = 2 * Math.PI * 54;

export default function ScoreHero({ score, color, headline, mode, lang }: Props) {
  const { text, ring, bg } = COLOR_MAP[color];
  const dashOffset = CIRCUMFERENCE * (1 - score / 10);

  return (
    <div className={`rounded-2xl ${bg} border border-white/5 p-8 md:p-12 text-center mb-8`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        <div className="relative w-36 h-36 mb-6">
          <svg className="w-36 h-36 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="#1E293B" strokeWidth="8" />
            <motion.circle
              cx="60" cy="60" r="54"
              fill="none" stroke={ring} strokeWidth="8" strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: CIRCUMFERENCE }}
              animate={{ strokeDashoffset: dashOffset }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-4xl font-bold ${text}`}>{score.toFixed(1)}</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-3">
          {mode === 'geo' ? tr('score_label_geo', lang) : tr('score_label_seo', lang)}
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white text-xl md:text-2xl font-semibold max-w-lg"
        >
          {headline}
        </motion.h2>
      </motion.div>
    </div>
  );
}
