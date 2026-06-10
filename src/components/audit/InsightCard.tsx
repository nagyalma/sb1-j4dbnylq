import { Search, Heading1, Code2, Sparkles, Target, Gauge } from 'lucide-react';
import type { FreeInsight, IconHint, Lang } from '../../lib/auditTypes';
import { tr } from '../../lib/auditTranslations';

const ICONS: Record<IconHint, React.ComponentType<{ className?: string }>> = {
  search: Search, heading: Heading1, code: Code2,
  sparkles: Sparkles, target: Target, gauge: Gauge,
};

const SCORE_COLOR = (score: number) => {
  if (score < 5) return 'text-red-400 bg-red-400/10';
  if (score <= 7) return 'text-yellow-400 bg-yellow-400/10';
  return 'text-teal-400 bg-teal-400/10';
};

interface Props {
  insight: FreeInsight;
  index: number;
  lang: Lang;
}

export default function InsightCard({ insight, index, lang }: Props) {
  const Icon = ICONS[insight.icon_hint] ?? Search;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-slate-700 rounded-xl">
            <Icon className="w-5 h-5 text-teal-400" />
          </div>
          <span className="text-slate-300 font-semibold">{insight.category}</span>
        </div>
        <span className={`text-sm font-bold px-2.5 py-1 rounded-lg ${SCORE_COLOR(insight.score)}`}>
          {insight.score}/10
        </span>
      </div>

      <div className="mb-3">
        <p className="text-teal-300 text-sm font-mono bg-slate-700/60 border border-slate-600 rounded-lg px-3 py-2 mb-2 leading-relaxed break-words">
          {insight.issue.observed_value}
        </p>
        <p className="text-white leading-relaxed">{insight.issue.problem}</p>
      </div>

      <div className="border-t border-slate-700 pt-4">
        <p className="text-xs text-teal-400 font-semibold uppercase tracking-wider mb-1.5">
          {tr('directional_fix', lang)}
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">{insight.surface_fix}</p>
      </div>
    </div>
  );
}
