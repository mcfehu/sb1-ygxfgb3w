import React from 'react';
import { Calculator } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#001f3f] via-[#14467c] to-[#f0f8ff]">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      {/* Reduce padding to make hero section more compact */}
      <div className="relative max-w-4xl mx-auto px-4 pt-12 pb-8 sm:pt-16 sm:pb-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
            <Calculator 
              className="w-12 h-12 text-white"
              aria-label="Calculator icon for forex and futures trading"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Ultimate Position Size Calculator
        </h1>
        
        <h2 className="text-xl text-blue-100">
          Calculate your optimal position size for forex & futures trading
        </h2>
      </div>
    </section>
  );
}