import React from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  content: string;
}

export default function Tooltip({ content }: TooltipProps) {
  return (
    <div className="group relative inline-block ml-2">
      <HelpCircle className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-1/2 bottom-full mb-2 -translate-x-1/2">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg max-w-xs">
          {content}
          <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1">
            <div className="border-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
}