import React from 'react';
import { InfoIcon } from 'lucide-react';

export default function FuturesNote() {
  return (
    <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
      <InfoIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <p>
        All futures calculations are displayed in USD. If your account currency differs, 
        please adjust manually.
      </p>
    </div>
  );
}