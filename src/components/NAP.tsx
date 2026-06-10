import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface NAPProps {
  language: 'hu' | 'en';
  variant?: 'header' | 'footer' | 'contact';
}

const NAP: React.FC<NAPProps> = ({ language, variant = 'footer' }) => {
  const businessInfo = {
    hu: {
      name: "Nagy Levi Marketing",
      address: "Budapest, Példa utca 123, 1234",
      phone: "+36-30-123-4567",
      email: "info@nagylevimaketing.hu"
    },
    en: {
      name: "Levi Nagy Marketing", 
      address: "Budapest, Example Street 123, 1234",
      phone: "+36-30-123-4567",
      email: "info@nagylevimaketing.hu"
    }
  };

  const info = businessInfo[language];

  if (variant === 'header') {
    return (
      <div className="hidden lg:flex items-center space-x-6 text-sm">
        <a href={`tel:${info.phone}`} className="flex items-center space-x-2 hover:text-teal-400 transition-colors">
          <Phone className="w-4 h-4" />
          <span>{info.phone}</span>
        </a>
        <a href={`mailto:${info.email}`} className="flex items-center space-x-2 hover:text-teal-400 transition-colors">
          <Mail className="w-4 h-4" />
          <span>{info.email}</span>
        </a>
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-teal-400" />
          <span>{info.address}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-teal-400" />
          <a href={`tel:${info.phone}`} className="hover:text-teal-400 transition-colors">
            {info.phone}
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-teal-400" />
          <a href={`mailto:${info.email}`} className="hover:text-teal-400 transition-colors">
            {info.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center space-y-2">
      <h3 className="font-semibold text-lg">{info.name}</h3>
      <p className="text-slate-400">{info.address}</p>
      <div className="flex justify-center space-x-4">
        <a href={`tel:${info.phone}`} className="text-slate-400 hover:text-teal-400 transition-colors">
          {info.phone}
        </a>
        <a href={`mailto:${info.email}`} className="text-slate-400 hover:text-teal-400 transition-colors">
          {info.email}
        </a>
      </div>
    </div>
  );
};

export default NAP;