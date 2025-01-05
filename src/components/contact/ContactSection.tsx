import React from 'react';
import { MessageSquare, Mail, ExternalLink } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-6">
            <MessageSquare className="w-8 h-8 text-blue-600" />
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help or Have Questions?
          </h3>
          
          <p className="text-lg text-gray-600">
            Feel free to reach out to us with any questions or feedback about the tool
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Direct Contact
              </h4>
              <a
                href="mailto:positioncalc@gmail.com"
                className="
                  inline-flex items-center gap-2 
                  text-blue-600 hover:text-blue-700
                  font-medium
                "
              >
                <Mail className="w-5 h-5" />
                positioncalc@gmail.com
              </a>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Support Hours
              </h4>
              <p className="text-gray-600">
                Monday - Friday<br />
                9:00 AM - 5:00 PM EST
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Additional Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#faq"
                    className="
                      inline-flex items-center gap-2
                      text-blue-600 hover:text-blue-700
                      font-medium
                    "
                  >
                    View FAQ
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="#calculator"
                    className="
                      inline-flex items-center gap-2
                      text-blue-600 hover:text-blue-700
                      font-medium
                    "
                  >
                    Try the Calculator
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}