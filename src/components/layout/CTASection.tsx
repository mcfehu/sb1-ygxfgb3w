import React from 'react';
import { Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />
          
          <div className="relative flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-6">
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Take Your Trading to the Next Level
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Trade Reversals is launching soon! Get ready for real-time signals, 
              market insights, and expert strategies.
            </p>

            <button
              disabled
              className="
                px-8 py-3 rounded-xl
                bg-gray-100 text-gray-500
                font-medium text-lg
                cursor-not-allowed
                transition-all duration-200
                border border-gray-200
                flex items-center gap-2
              "
            >
              Learn More
              <span className="text-sm">(Coming Soon)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}