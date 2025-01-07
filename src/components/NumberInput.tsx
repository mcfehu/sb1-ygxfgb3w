import React from 'react';
import { FormControl, baseInputStyles } from './ui/FormControl';

interface NumberInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  step?: string;
  min?: string;
  max?: string;
  required?: boolean;
  disabled?: boolean;
  tooltip?: string;
  inputMode?: 'numeric' | 'decimal';
  pattern?: string;
}

export default function NumberInput({
  label,
  value,
  onChange,
  step,
  min,
  max,
  required = false,
  disabled = false,
  tooltip,
  inputMode = 'numeric',
  pattern
}: NumberInputProps) {
  return (
    <FormControl label={label} tooltip={tooltip}>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        step={step}
        min={min}
        max={max}
        required={required}
        disabled={disabled}
        className={baseInputStyles}
        inputMode={inputMode}
        pattern={pattern}
      />
    </FormControl>
  );
}