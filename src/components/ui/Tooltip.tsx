import React, { useState } from 'react';
import { HelpCircle, ExternalLink } from 'lucide-react';

interface TooltipProps {
  content: string;
  learnMoreUrl?: string;
  learnMoreText?: string;
}

export default function Tooltip({ content, learnMoreUrl, learnMoreText }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = React.useId();

  return (
    <div 
      className="group relative inline-block ml-2"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <button
        type="button"
        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        aria-describedby={tooltipId}
        aria-expanded={isVisible}
      >
        <HelpCircle className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
        <span className="sr-only">Help</span>
      </button>

      <div
        id={tooltipId}
        role="tooltip"
        className={`
          absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-50
          transition-all duration-200
          ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'}
        `}
      >
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg max-w-xs">
          <p>{content}</p>
          
          {learnMoreUrl && (
            <a
              href={learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-blue-300 hover:text-blue-200 transition-colors text-xs"
            >
              {learnMoreText || 'Learn more'}
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1">
            <div className="border-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
}