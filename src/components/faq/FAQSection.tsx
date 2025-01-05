import React from 'react';
import { HelpCircle } from 'lucide-react';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: 'What is a position size calculator?',
    answer: 'A position size calculator helps you determine the optimal trade size based on your account size, risk percentage, and stop-loss distance.'
  },
  {
    question: 'How do I use this calculator?',
    answer: `Enter your account size, desired risk percentage, and stop-loss distance. Select the market type (Forex or Futures) and the asset you're trading. Click "Calculate Position Size" to get the results.`
  },
  {
    question: 'Can I use this calculator for both Forex and Futures?',
    answer: 'Yes, this calculator supports both Forex and Futures trading markets.'
  },
  {
    question: 'Why is position sizing important?',
    answer: 'Proper position sizing helps manage risk, avoid over-leveraging, and protect your trading account.'
  },
  {
    question: 'Is this tool free to use?',
    answer: 'Yes, this calculator is completely free to use for all traders.'
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          
          <p className="text-lg text-gray-600">
            Get answers to common questions about our position size calculator
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}