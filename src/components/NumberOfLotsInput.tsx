import React from 'react';
import { HelpCircle } from 'lucide-react';

interface NumberOfLotsInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function NumberOfLotsInput({
  value,
  onChange
}: NumberOfLotsInputProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <label className="block text-sm font-medium text-gray-700">
          Number of Lots
        </label>
        <div className="group relative">
          <HelpCircle className="w-4 h-4 text-gray-400" />
          <div className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap">
            Enter the number of lots you want to trade (e.g., 1 for 1 lot)
          </div>
        </div>
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min="0.01"
        step="0.01"
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
}