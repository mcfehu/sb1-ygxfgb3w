import React from 'react';
import { FormControl, baseInputStyles } from '../ui/FormControl';

interface NumberOfLotsInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function NumberOfLotsInput({
  value,
  onChange
}: NumberOfLotsInputProps) {
  return (
    <FormControl 
      label="Number of Lots"
      tooltip="Enter the number of lots you want to trade"
    >
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min="0.01"
        step="0.01"
        required
        className={baseInputStyles}
      />
    </FormControl>
  );
}