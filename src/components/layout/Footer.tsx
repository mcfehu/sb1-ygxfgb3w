import React from 'react';
import { Calculator, HelpCircle, MessageSquare } from 'lucide-react';

const quickLinks = [
  { href: '#calculator', label: 'Calculator', icon: Calculator },
  { href: '#faq', label: 'FAQs', icon: HelpCircle },
  { href: '#contact', label: 'Contact Us', icon: MessageSquare }
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/disclaimer', label: 'Disclaimer' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      group inline-flex items-center gap-2
                      text-gray-400 hover:text-white
                      transition-colors duration-200
                    "
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-6">
              Important Notice
            </h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto">
              This calculator is for informational purposes only. Always verify 
              calculations and consult with a financial advisor before making 
              trading decisions. Past performance does not guarantee future results.
            </p>
          </div>

          {/* Legal Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              {legalLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      inline-block
                      text-gray-400 hover:text-white
                      transition-colors duration-200
                    "
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm">
              Built with ❤️ for traders worldwide
            </p>
            <p className="text-sm">
              © {currentYear} positioncalc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}