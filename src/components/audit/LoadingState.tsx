import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AuditMode, Lang } from '../../lib/auditTypes';
import { trArr, tr } from '../../lib/auditTranslations';

interface Props {
  mode: AuditMode;
  lang: Lang;
}

export default function LoadingState({ mode, lang }: Props) {
  const [index, setIndex] = useState(0);
  const messages = mode === 'geo' ? trArr('loading_geo', lang) : trArr('loading_seo', lang);

  useEffect(() => {
    setIndex(0);
    const interval = setInterval(() => {
      setIndex(prev => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 10000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="relative w-20 h-20 mx-auto mb-8">
          <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="34" fill="none" stroke="#1E293B" strokeWidth="6" />
            <circle
              cx="40" cy="40" r="34"
              fill="none" stroke="#00BFA6" strokeWidth="6"
              strokeLinecap="round" strokeDasharray="213.6" strokeDashoffset="53.4"
              className="animate-spin" style={{ animationDuration: '2s' }}
            />
          </svg>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="text-white text-xl font-medium"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>

        <div className="flex justify-center gap-1.5 mt-6">
          {messages.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i <= index ? 'bg-teal-500 w-6' : 'bg-slate-700 w-1.5'}`} />
          ))}
        </div>

        <p className="text-slate-500 text-sm mt-6">{tr('loading_footer', lang)}</p>
      </div>
    </div>
  );
}
