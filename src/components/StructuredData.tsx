import React from 'react';

interface StructuredDataProps {
  language: 'hu' | 'en';
}

const StructuredData: React.FC<StructuredDataProps> = ({ language }) => {
  const businessData = {
    hu: {
      name: "Nagy Levi Marketing",
      description: "Performance marketing ügynökség helyi vállalkozásoknak. Hirdetések és weboldalak, amik tényleg működnek.",
      address: {
        streetAddress: "Példa utca 123",
        addressLocality: "Budapest",
        postalCode: "1234",
        addressCountry: "HU"
      }
    },
    en: {
      name: "Levi Nagy Marketing",
      description: "Performance marketing agency for local businesses. Ads and websites that actually work.",
      address: {
        streetAddress: "Example Street 123",
        addressLocality: "Budapest",
        postalCode: "1234",
        addressCountry: "HU"
      }
    }
  };

  const data = businessData[language];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nagylevimaketing.hu",
    "name": data.name,
    "description": data.description,
    "url": "https://nagylevimaketing.hu",
    "telephone": "+36-30-123-4567",
    "email": "info@nagylevimaketing.hu",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.streetAddress,
      "addressLocality": data.address.addressLocality,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.4979",
      "longitude": "19.0402"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00"
    ],
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "47.4979",
        "longitude": "19.0402"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": language === 'hu' ? "Marketing Szolgáltatások" : "Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'hu' ? "Facebook Hirdetések" : "Facebook Ads",
            "description": language === 'hu' ? "Professzionális Facebook hirdetési kampányok" : "Professional Facebook advertising campaigns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'hu' ? "Google Hirdetések" : "Google Ads",
            "description": language === 'hu' ? "Google Ads kampányok és optimalizálás" : "Google Ads campaigns and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO",
            "description": language === 'hu' ? "Keresőoptimalizálás helyi vállalkozásoknak" : "Search engine optimization for local businesses"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": language === 'hu' ? "Kovács Péter" : "Peter Smith"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": language === 'hu' 
          ? "A Nagy Levi Marketing csapata fantasztikus munkát végzett. 3 hónap alatt 300%-kal nőtt a forgalmunk."
          : "The Levi Nagy Marketing team did fantastic work. Our traffic increased by 300% in 3 months."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;