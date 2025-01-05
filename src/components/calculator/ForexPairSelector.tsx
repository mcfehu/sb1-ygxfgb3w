import React from 'react';
import { ForexPair } from '../../types/forex';
import { forexPairs, getForexPairsByCategory } from '../../data/forexPairs';
import { FormControl, baseInputStyles } from '../ui/FormControl';

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
  const categories = getForexPairsByCategory();

  return (
    <FormControl 
      label="Trading Instrument" 
      tooltip={tooltip}
    >
      <select
        value={pair}
        onChange={(e) => onPairChange(e.target.value as ForexPair)}
        className={baseInputStyles}
      >
        {Array.from(categories.entries()).map(([category, pairs]) => (
          <optgroup key={category} label={category}>
            {pairs.map(({ pair, label }) => (
              <option key={pair} value={pair}>{label}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </FormControl>
  );
}