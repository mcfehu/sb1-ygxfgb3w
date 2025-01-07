import React from 'react';
import { Calculator } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

const LINKS = {
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
    { href: '/disclaimer', label: 'Disclaimer' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Calculator Link */}
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
          >
            <Calculator className="w-4 h-4" />
            <span className="text-base font-medium">Position Size Calculator</span>
          </a>

          {/* Notice */}
          <p className="text-xs text-gray-400 leading-relaxed max-w-2xl">
            This calculator is for informational purposes only. Always verify 
            calculations and consult with a financial advisor before making 
            trading decisions.
          </p>

          {/* Legal Links */}
          <ul className="flex flex-wrap justify-center gap-4 text-xs">
            {LINKS.legal.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-800 w-full">
            <p className="text-xs text-gray-500">
              © {CURRENT_YEAR} positioncalc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}