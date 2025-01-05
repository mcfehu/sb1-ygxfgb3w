import React from 'react';
import { Info } from 'lucide-react';

export default function FuturesNotification() {
  return (
    <div className="flex items-start gap-2 text-gray-500 text-sm italic">
      <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
      <p>
        Futures calculations are displayed in USD by default. Please manually adjust for other currencies if needed.
      </p>
    </div>
  );
}