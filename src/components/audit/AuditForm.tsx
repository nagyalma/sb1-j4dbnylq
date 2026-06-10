import React, { useState } from 'react';
import { Sparkles, Search } from 'lucide-react';
import type { AuditMode, Lang } from '../../lib/auditTypes';
import { tr } from '../../lib/auditTranslations';

interface Props {
  onSubmit: (url: string, mode: AuditMode) => void;
  isLoading: boolean;
  lang: Lang;
}

export default function AuditForm({ onSubmit, isLoading, lang }: Props) {
  const [url, setUrl] = useState('');
  const [mode, setMode] = useState<AuditMode>('geo');
  const [error, setError] = useState('');

  const modes = [
    { id: 'geo' as AuditMode, label: tr('toggle_geo', lang), sublabel: tr('toggle_geo_sub', lang), icon: Sparkles },
    { id: 'seo' as AuditMode, label: tr('toggle_seo', lang), sublabel: tr('toggle_seo_sub', lang), icon: Search },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) { setError(tr('url_required', lang)); return; }
    setError('');
    onSubmit(trimmed, mode);
  };

  const ActiveIcon = mode === 'geo' ? Sparkles : Search;

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center">

        <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-teal-500/20">
          <ActiveIcon className="w-3.5 h-3.5" />
          {tr('badge', lang)}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {mode === 'geo' ? tr('headline_geo', lang) : tr('headline_seo', lang)}
        </h1>

        <p className="text-slate-400 text-lg mb-8">
          {mode === 'geo' ? tr('sub_geo', lang) : tr('sub_seo', lang)}
        </p>

        {/* Mode toggle */}
        <div className="flex bg-slate-800 rounded-xl p-1 mb-8 border border-slate-700">
          {modes.map(m => {
            const Icon = m.icon;
            const active = mode === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                  active ? 'bg-teal-500 text-slate-900 shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="flex flex-col items-start leading-tight">
                  <span>{m.label}</span>
                  <span className={`text-xs font-normal ${active ? 'text-slate-700' : 'text-slate-500'}`}>
                    {m.sublabel}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={url}
            onChange={e => { setUrl(e.target.value); setError(''); }}
            placeholder={tr('placeholder', lang)}
            disabled={isLoading}
            className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-5 py-4 text-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition disabled:opacity-50"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold text-lg py-4 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mode === 'geo' ? tr('btn_geo', lang) : tr('btn_seo', lang)}
          </button>
        </form>

        <p className="text-slate-500 text-sm mt-4">{tr('trust', lang)}</p>
      </div>
    </div>
  );
}
