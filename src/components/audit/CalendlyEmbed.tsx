import { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface Props {
  url: string;
  onBooked: () => void;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: object;
        utm?: object;
      }) => void;
    };
  }
}

export default function CalendlyEmbed({ url, onBooked }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    const init = () => {
      if (containerRef.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
          prefill: {},
          utm: { utmSource: 'audit-tool' },
        });
        setLoading(false);
      }
    };

    // Load Calendly script if not already loaded
    if (!window.Calendly) {
      script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = init;
      document.head.appendChild(script);
    } else {
      init();
    }

    // Listen for booking confirmation
    const handleMessage = (e: MessageEvent) => {
      if (
        e.origin === 'https://calendly.com' &&
        e.data?.event === 'calendly.event_scheduled'
      ) {
        onBooked();
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [url, onBooked]);

  return (
    <div className="relative rounded-xl overflow-hidden border border-slate-700">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
          <Loader2 className="w-6 h-6 text-teal-400 animate-spin" />
        </div>
      )}
      <div
        ref={containerRef}
        style={{ minWidth: '280px', height: 'min(660px, 80vh)' }}
      />
    </div>
  );
}
