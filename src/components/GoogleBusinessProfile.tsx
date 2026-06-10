import React from 'react';

interface GoogleBusinessProfileProps {
  language: 'hu' | 'en';
}

const GoogleBusinessProfile: React.FC<GoogleBusinessProfileProps> = ({ language }) => {
  const content = {
    hu: {
      title: 'Találj meg minket Google-n',
      description: 'Látogass el Google Business profilunkra értékelésekért és további információkért.',
      buttonText: 'Google Business Profil megtekintése'
    },
    en: {
      title: 'Find us on Google',
      description: 'Visit our Google Business profile for reviews and more information.',
      buttonText: 'View Google Business Profile'
    }
  };

  const t = content[language];

  // Google Business Profile integration suggestions:
  // 1. Replace the URL below with your actual Google Business Profile URL
  // 2. Ensure your Google Business Profile is claimed and verified
  // 3. Regularly update business hours, photos, and respond to reviews
  // 4. Use Google Posts to share updates and offers
  // 5. Enable messaging to allow customers to contact you directly

  const googleBusinessUrl = "https://www.google.com/maps/place/Your+Business+Name";

  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">{t.title}</h3>
      <p className="text-slate-300 mb-6">{t.description}</p>
      
      <a
        href={googleBusinessUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 14.999c-1.657 0-3.001-1.343-3.001-3s1.344-3 3.001-3c1.656 0 2.999 1.343 2.999 3s-1.343 3-2.999 3zM12.017 7.999c-2.209 0-4.001 1.791-4.001 4s1.792 4 4.001 4c2.208 0 3.999-1.791 3.999-4s-1.791-4-3.999-4zM12.017 0C7.582 0 4.017 3.564 4.017 7.999c0 6.999 7.999 15.999 7.999 15.999s8.001-9 8.001-15.999C20.017 3.564 16.451 0 12.017 0z"/>
        </svg>
        <span>{t.buttonText}</span>
      </a>
      
      {/* Google Reviews Widget Placeholder */}
      <div className="mt-6 p-4 bg-slate-700 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span className="text-sm text-slate-300">4.9 (47 {language === 'hu' ? 'értékelés' : 'reviews'})</span>
        </div>
        <p className="text-sm text-slate-400">
          {language === 'hu' 
            ? 'Lásd az összes értékelést Google-n'
            : 'See all reviews on Google'
          }
        </p>
      </div>
    </div>
  );
};

export default GoogleBusinessProfile;