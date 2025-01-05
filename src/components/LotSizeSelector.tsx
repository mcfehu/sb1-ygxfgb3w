import React from 'react';
import { LotSize } from '../types';
import { lotSizes } from '../utils/lotSize';
import { FormControl, baseInputStyles } from './ui/FormControl';

interface LotSizeSelectorProps {
  lotSize: LotSize;
  onLotSizeChange: (size: LotSize) => void;
  tooltip?: string;
}

export default function LotSizeSelector({
  lotSize,
  onLotSizeChange,
  tooltip
}: LotSizeSelectorProps) {
  return (
    <FormControl label="Lot Size" tooltip={tooltip}>
      <select
        value={lotSize}
        onChange={(e) => onLotSizeChange(e.target.value as LotSize)}
        className={baseInputStyles}
      >
        {lotSizes.map((config) => (
          <option key={config.type} value={config.type}>
            {config.label}
          </option>
        ))}
      </select>
    </FormControl>
  );
}