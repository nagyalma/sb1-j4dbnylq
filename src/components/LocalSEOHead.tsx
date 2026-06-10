import React from 'react';

interface LocalSEOHeadProps {
  language: 'hu' | 'en';
}

const LocalSEOHead: React.FC<LocalSEOHeadProps> = ({ language }) => {
  const seoData = {
    hu: {
      title: "Nagy Levi Marketing - Több ügyfél. Több bevétel. Garantáltan. | Budapest",
      description: "Performance marketing ügynökség Budapesten. Facebook hirdetések, Google Ads, SEO szolgáltatások helyi vállalkozásoknak. 14 napos garancia.",
      keywords: "marketing ügynökség Budapest, Facebook hirdetések, Google Ads, SEO Budapest, weboldal készítés, performance marketing",
      businessName: "Nagy Levi Marketing"
    },
    en: {
      title: "Levi Nagy Marketing - More Clients. More Revenue. Guaranteed. | Budapest",
      description: "Performance marketing agency in Budapest. Facebook ads, Google Ads, SEO services for local businesses. 14-day guarantee.",
      keywords: "marketing agency Budapest, Facebook ads, Google Ads, SEO Budapest, website design, performance marketing",
      businessName: "Levi Nagy Marketing"
    }
  };

  const data = seoData[language];

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta name="author" content={data.businessName} />
      
      {/* Local Business Meta Tags */}
      <meta name="geo.region" content="HU-BU" />
      <meta name="geo.placename" content="Budapest" />
      <meta name="geo.position" content="47.4979;19.0402" />
      <meta name="ICBM" content="47.4979, 19.0402" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content="https://nagylevimaketing.hu" />
      <meta property="og:site_name" content={data.businessName} />
      <meta property="og:locale" content={language === 'hu' ? 'hu_HU' : 'en_US'} />
      <meta property="business:contact_data:street_address" content="Példa utca 123" />
      <meta property="business:contact_data:locality" content="Budapest" />
      <meta property="business:contact_data:postal_code" content="1234" />
      <meta property="business:contact_data:country_name" content="Hungary" />
      <meta property="business:contact_data:phone_number" content="+36-30-123-4567" />
      <meta property="business:contact_data:email" content="info@nagylevimaketing.hu" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://nagylevimaketing.hu${language === 'en' ? '/en' : ''}`} />
      
      {/* Hreflang for Multi-language */}
      <link rel="alternate" hrefLang="hu" href="https://nagylevimaketing.hu" />
      <link rel="alternate" hrefLang="en" href="https://nagylevimaketing.hu/en" />
      <link rel="alternate" hrefLang="x-default" href="https://nagylevimaketing.hu" />
    </>
  );
};

export default LocalSEOHead;