import React from 'react';
import { ForexPair } from '../types/forex';
import { forexPairs, getForexPairsByCategory } from '../data/forexPairs';
import { FormControl } from './ui/FormControl';

interface ForexPairSelectorProps {
  pair: ForexPair;
  onPairChange: (pair: ForexPair) => void;
  tooltip?: string;
}

export default function ForexPairSelector({
  pair,
  onPairChange,
  tooltip
}: ForexPairSelectorProps) {
  const pairsByCategory = getForexPairsByCategory();

  return (
    <div className="space-y-2">
      <FormControl 
        label="Trading Instrument" 
        tooltip={tooltip}
      >
        <select
          value={pair}
          onChange={(e) => onPairChange(e.target.value as ForexPair)}
          className="
            w-full px-4 py-3 text-base
            rounded-lg border border-gray-300
            bg-white
            transition-all duration-200
            hover:border-blue-400
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          "
        >
          {Array.from(pairsByCategory.entries()).map(([category, pairs]) => (
            <optgroup key={category} label={category}>
              {pairs.map(({ pair, label }) => (
                <option key={pair} value={pair}>{label}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </FormControl>

      <div className="space-y-1">
        <p className="text-sm text-gray-500 italic">
          Pip values are based on standard market conventions. Please verify with your broker if needed.
        </p>
        {pair.startsWith('X') && !pair.endsWith('USD') && (
          <p className="text-sm text-amber-600 italic">
            Note: Pip values for non-USD metals depend on the USD to quoted currency rate.
          </p>
        )}
      </div>
    </div>
  );
}