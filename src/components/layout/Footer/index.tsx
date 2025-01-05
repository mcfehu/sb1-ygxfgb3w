import React from 'react';
import { Calculator, HelpCircle, MessageSquare } from 'lucide-react';
import FooterSection from './FooterSection';
import QuickLink from './QuickLink';
import CopyrightBar from './CopyrightBar';

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
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 place-items-center">
          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <QuickLink {...link} />
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Important Notice */}
          <FooterSection title="Important Notice">
            <p className="text-sm leading-relaxed mx-auto max-w-[280px]">
              This calculator is for informational purposes only. Always verify 
              calculations and consult with a financial advisor before making 
              trading decisions. Past performance does not guarantee future results.
            </p>
          </FooterSection>

          {/* Legal Links */}
          <FooterSection title="Legal">
            <ul className="space-y-4">
              {legalLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      text-gray-400 hover:text-white
                      transition-colors duration-200
                    "
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>
        </div>
      </div>

      <CopyrightBar />
    </footer>
  );
}