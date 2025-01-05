import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function BrokerDisclaimer() {
  return (
    <div className="mt-12 flex items-start gap-3 justify-center">
      <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-gray-500 italic max-w-2xl text-center">
        Disclaimer: We may earn a commission from our partners at no extra cost to you. 
        Always choose a broker that fits your trading needs and conduct your own due diligence.
      </p>
    </div>
  );
}