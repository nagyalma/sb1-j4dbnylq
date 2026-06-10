import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { AuditReport, AuditState, AuditMode, Lang } from '../lib/auditTypes';
import AuditForm from '../components/audit/AuditForm';
import LoadingState from '../components/audit/LoadingState';
import AuditReportView from '../components/audit/AuditReport';

const TIMEOUT_MS = 120_000;

export default function AuditPage() {
  const location = useLocation();
  const lang: Lang = location.pathname.startsWith('/en') ? 'en' : 'hu';

  const [state, setState] = useState<AuditState>('idle');
  const [report, setReport] = useState<AuditReport | null>(null);
  const [mode, setMode] = useState<AuditMode>('geo');
  const [auditUrl, setAuditUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const runAudit = async (url: string, selectedMode: AuditMode) => {
    setState('loading');
    setMode(selectedMode);
    setAuditUrl(url);
    setErrorMsg('');
    setReport(null);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const res = await fetch('/.netlify/functions/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, mode: selectedMode, lang }),
        signal: controller.signal,
      });

      clearTimeout(timer);
      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorMsg(data.error || (lang === 'hu' ? 'Valami hiba történt. Kérjük, próbáld újra.' : 'Something went wrong. Please try again.'));
        setState('error');
        return;
      }

      // Basic shape validation
      if (!data.report?.free_insights || !data.report?.locked_insights) {
        setErrorMsg(lang === 'hu' ? 'Érvénytelen válasz. Kérjük, próbáld újra.' : 'Invalid response. Please try again.');
        setState('error');
        return;
      }

      setReport(data.report);
      setState('done');
    } catch (err: any) {
      clearTimeout(timer);
      if (err.name === 'AbortError') {
        setErrorMsg(lang === 'hu' ? 'Az elemzés túl sokáig tartott. Kérjük, próbáld újra.' : 'The analysis took too long. Please try again.');
      } else {
        setErrorMsg(lang === 'hu' ? 'Hálózati hiba — ellenőrizd a kapcsolatot.' : 'Network error — please check your connection.');
      }
      setState('error');
    }
  };

  const reset = () => {
    setState('idle');
    setReport(null);
    setAuditUrl('');
    setErrorMsg('');
  };

  if (state === 'loading') return <LoadingState mode={mode} lang={lang} />;

  if (state === 'done' && report) {
    return <AuditReportView report={report} mode={mode} auditUrl={auditUrl} lang={lang} onReset={reset} />;
  }

  return (
    <div>
      <AuditForm onSubmit={runAudit} isLoading={false} lang={lang} />
      {state === 'error' && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-800 border border-red-500/40 text-red-300 px-6 py-4 rounded-xl text-sm max-w-md text-center shadow-xl">
          <p className="mb-3">{errorMsg}</p>
          <button
            onClick={reset}
            className="bg-red-500/20 hover:bg-red-500/30 text-red-200 px-4 py-1.5 rounded-lg text-xs font-semibold transition"
          >
            {lang === 'hu' ? 'Újra próbálom' : 'Try Again'}
          </button>
        </div>
      )}
    </div>
  );
}
