import { motion } from 'framer-motion';
import type { AuditReport as Report, AuditMode, Lang } from '../../lib/auditTypes';
import { tr } from '../../lib/auditTranslations';
import ScoreHero from './ScoreHero';
import InsightCard from './InsightCard';
import LockedSection from './LockedSection';

interface Props {
  report: Report;
  mode: AuditMode;
  auditUrl: string;
  lang: Lang;
  onReset: () => void;
}

export default function AuditReport({ report, mode, auditUrl, lang, onReset }: Props) {
  const extra = report.locked_insights.length + report.additional_issues_count;

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {mode === 'geo' ? tr('badge_geo', lang) : tr('badge_seo', lang)}
            </span>
          </div>

          <ScoreHero score={report.overall_score} color={report.score_color} headline={report.headline} mode={mode} lang={lang} />

          <div className="mb-8">
            <h2 className="text-white text-xl font-bold mb-2">{tr('found_preview', lang)}</h2>
            <p className="text-slate-400 text-sm mb-6">
              {tr('found_sub', lang)}{' '}
              <span className="text-white font-semibold">{extra}</span>{' '}
              {tr('found_more', lang)}
            </p>
            <div className="space-y-4">
              {report.free_insights.map((insight, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.12 }}>
                  <InsightCard insight={insight} index={i} lang={lang} />
                </motion.div>
              ))}
            </div>
          </div>

          <LockedSection
            insights={report.locked_insights}
            additionalCount={report.additional_issues_count}
            freeCount={report.free_insights.length}
            mode={mode}
            lang={lang}
            auditUrl={auditUrl}
            report={report}
          />

          <div className="text-center mt-10">
            <p className="text-slate-600 text-xs mb-4">{tr('footer_text', lang)}</p>
            <button onClick={onReset} className="text-slate-500 hover:text-slate-300 text-sm transition underline">
              {tr('audit_another', lang)}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
