import React from 'react';
import { FormControl } from '../../ui/FormControl';
import { FuturesContract } from '../../../types/futures';
import { futuresContracts, getContractsByCategory } from '../../../data/futuresContracts';

interface FuturesContractSelectorProps {
  value: string;
  onChange: (contract: string) => void;
  onTickValueChange: (value: number) => void;
  tooltip?: string;
}

export default function FuturesContractSelector({
  value,
  onChange,
  onTickValueChange,
  tooltip
}: FuturesContractSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const contract = e.target.value;
    onChange(contract);
    
    const selectedContract = futuresContracts.find(c => c.symbol === contract);
    if (selectedContract && contract !== 'CUSTOM') {
      onTickValueChange(selectedContract.tickValue);
    }
  };

  const categories = getContractsByCategory();

  return (
    <FormControl 
      label="Futures Contract" 
      tooltip={tooltip || "Select the futures contract you want to trade"}
    >
      <select
        value={value}
        onChange={handleChange}
        className="
          w-full px-4 py-3 text-base
          rounded-lg border border-gray-300
          bg-white
          transition-all duration-200
          hover:border-blue-400
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        "
      >
        {Array.from(categories.entries()).map(([category, contracts]) => (
          <optgroup key={category} label={category}>
            {contracts.map(({ symbol, name, exchange }) => (
              <option key={symbol} value={symbol}>
                {name} ({symbol}) {exchange ? `- ${exchange}` : ''}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </FormControl>
  );
}