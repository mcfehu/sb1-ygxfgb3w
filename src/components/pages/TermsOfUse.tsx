import React from 'react';
import { Scale, ArrowLeft } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back button */}
        <a
          href="/"
          className="
            inline-flex items-center gap-2 mb-8
            text-gray-600 hover:text-gray-900
            transition-colors duration-200
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Calculator
        </a>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-6">
            <Scale className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Terms of Use</h1>
          <p className="mt-4 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Rest of the Terms content remains the same */}
        {/* ... */}
      </div>
    </div>
  );
}