import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const PageFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-lg font-bold text-white mb-2">
                Nagy Levi <span className="text-violet-400">Marketing</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">Több ügyfél. Több bevétel. Garantáltan.</p>
              <div className="flex gap-4">
                <a href="tel:+36706339977" className="text-slate-500 hover:text-white transition-colors" aria-label="Telefon">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="mailto:nlevi@levinagymarketing.com" className="text-slate-500 hover:text-white transition-colors" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/nagylevi_marketing/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Szolgáltatások</h4>
              <ul className="space-y-2">
                <li><a href="/fizetett-hirdetesek" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Fizetett Hirdetések</a></li>
                <li><a href="/ai-automatizalas" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">AI Automatizálás</a></li>
                <li><a href="/rolunk" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Rólunk</a></li>
                <li><a href="/blog" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Iparágak</h4>
              <ul className="space-y-2">
                <li><a href="/szepsegszalon-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Szépségszalon Marketing</a></li>
                <li><a href="/fogorvos-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Fogorvos Marketing</a></li>
                <li><a href="/autoskola-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Autósiskola Marketing</a></li>
<li><a href="/webaruhaz-marketing" className="text-slate-500 hover:text-violet-400 transition-colors text-sm">Webáruház Marketing</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center">
            <p className="text-slate-600 text-xs">© {year} Nagy Levi Marketing. Minden jog fenntartva.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
