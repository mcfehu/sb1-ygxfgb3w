import React from 'react';
import { Calculator } from 'lucide-react';

export default function Hero() {
  const scrollToCalculator = (e: React.MouseEvent, smooth: boolean) => {
    e.preventDefault();
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#001f3f] via-[#14467c] to-[#f0f8ff]">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-12 sm:pt-20 sm:pb-14 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
            <Calculator 
              className="w-12 h-12 text-white"
              aria-label="Calculator icon for forex and futures trading"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Ultimate Position Size Calculator for Forex & Futures
        </h1>
        
        <h2 className="text-2xl text-blue-100 mb-8">
          Accurate, Fast, and Tailored for Traders
        </h2>

        <div className="flex justify-center">
          <button
            onClick={(e) => scrollToCalculator(e, true)}
            className="
              bg-white text-[#001f3f] 
              px-8 py-3.5 rounded-xl 
              font-semibold text-lg
              shadow-lg hover:shadow-xl
              transition-all duration-300
              transform hover:-translate-y-1
              hover:bg-blue-50
              group
              relative
            "
          >
            Start Calculating Now
            <div className="absolute inset-0 rounded-xl border-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}