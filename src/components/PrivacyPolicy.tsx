import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  language: 'hu' | 'en';
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ language, onBack }) => {
  const content = {
    hu: {
      title: 'Adatvédelmi Nyilatkozat',
      backButton: 'Vissza a főoldalra'
    },
    en: {
      title: 'Privacy Policy',
      backButton: 'Back to homepage'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backButton}</span>
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {t.title}
        </h1>

        <div className="bg-slate-800 p-8 rounded-xl text-white space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-teal-400">
              ADATKEZELÉSI TÁJÉKOZTATÓ RÉSZLET: B2B OUTREACH
            </h2>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">1. Az Adatkezelő adatai</h3>
            <div className="space-y-2 text-slate-300">
              <p><strong>Név:</strong> Nagy Levente Attila E.V.</p>
              <p><strong>Székhely:</strong> 2095 Pilisszántó, Tanya utca 34.</p>
              <p><strong>Adószám:</strong> 90377749-1-33</p>
              <p><strong>Kapcsolati e-mail:</strong> nlevi@levinagymarketing.com</p>
              <p><strong>Weboldal:</strong> levinagymarketing.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">2. Az adatkezelés részletei</h3>
            <div className="space-y-4 text-slate-300">
              <div>
                <p><strong>Az adatkezelés célja:</strong> Közvetlen üzletszerzés (direct marketing), szakmai kapcsolatépítés, valamint a Nagy Levente Attila E.V. által kínált marketing szolgáltatások bemutatása potenciális üzleti partnerek számára.</p>
              </div>
              
              <div>
                <p><strong>A kezelt adatok köre:</strong> Név, e-mail cím, beosztás (amennyiben elérhető).</p>
              </div>
              
              <div>
                <p><strong>Az adatkezelés jogalapja:</strong> Az Adatkezelő jogos érdeke [GDPR 6. cikk (1) bek. f) pont].</p>
              </div>
              
              <div>
                <p><strong>A jogos érdek bemutatása:</strong> Az Adatkezelőnek alapvető gazdasági érdeke fűződik szolgáltatásai népszerűsítéséhez. Mivel a megkeresés kizárólag üzleti jellegű (B2B), és a címzett szakmai tevékenységéhez szorosan kapcsolódó marketing megoldásokra vonatkozik, az adatkezelés nem korlátozza aránytalanul az érintett magánszféráját. A címzett észszerűen számíthat arra, hogy üzleti minőségében ilyen jellegű megkereséseket kap.</p>
              </div>
              
              <div>
                <p><strong>Az adatok forrása:</strong> Az adatok kizárólag nyilvánosan elérhető forrásból, az érintett által képviselt gazdasági társaság hivatalos weboldaláról származnak.</p>
              </div>
              
              <div>
                <p><strong>Az adatkezelés időtartama:</strong> A tiltakozásig (leiratkozásig), vagy a kapcsolatfelvételtől számított 1 évig, amennyiben nem jön létre üzleti kapcsolat.</p>
              </div>
              
              <div>
                <p><strong>Adattovábbítás:</strong> Az adatokat harmadik félnek nem adjuk át, kivéve az e-mail kiküldéséhez használt technikai szolgáltatót (adatfeldolgozót).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;