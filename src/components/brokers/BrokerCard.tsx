import React from 'react';
import { ExternalLink, Check } from 'lucide-react';

interface BrokerCardProps {
  name: string;
  description: string;
  features: string[];
  link: string;
  linkText: string;
  logoUrl: string;
}

export default function BrokerCard({
  name,
  description,
  features,
  link,
  linkText,
  logoUrl
}: BrokerCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gray-100 p-2">
            <img 
              src={logoUrl} 
              alt={`${name} logo`} 
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 w-full
            justify-center px-4 py-2.5 rounded-lg
            bg-blue-50 text-blue-600 font-medium
            hover:bg-blue-100 transition-colors
            group-hover:bg-blue-600 group-hover:text-white
          "
        >
          {linkText}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}