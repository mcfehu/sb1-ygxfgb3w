import React from 'react';
import { FormControl, baseInputStyles } from '../ui/FormControl';

interface TickValueInputProps {
  value: string;
  onChange: (value: string) => void;
  contract: string;
}

export default function TickValueInput({
  value,
  onChange,
  contract
}: TickValueInputProps) {
  return (
    <FormControl 
      label="Tick Value" 
      tooltip="The dollar value of one tick movement"
    >
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        step="0.01"
        min="0.01"
        required
        disabled={contract !== 'CUSTOM'}
        className={`
          ${baseInputStyles}
          ${contract !== 'CUSTOM' ? 'bg-gray-50' : ''}
        `}
      />
    </FormControl>
  );
}