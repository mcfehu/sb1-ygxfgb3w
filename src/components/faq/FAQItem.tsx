import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 text-left flex justify-between items-center gap-4"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
          {question}
        </h4>
        <ChevronDown 
          className={`
            w-5 h-5 flex-shrink-0 text-gray-500
            transition-transform duration-200
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>
      <div
        className={`
          grid transition-all duration-200 ease-in-out
          ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
        `}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}