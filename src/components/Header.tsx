import React from 'react';
import { Calculator } from 'lucide-react';

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Calculator className="w-10 h-10 text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-900">
          Position Size Calculator
        </h1>
      </div>
      <p className="text-lg text-gray-600">
        Calculate your optimal position size for futures and spot markets
      </p>
    </div>
  );
}