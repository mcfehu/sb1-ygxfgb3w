import React from 'react';
import { LotSize } from '../../types';
import { FormControl, baseInputStyles } from '../ui/FormControl';

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
    <FormControl 
      label="Lot Size" 
      tooltip={tooltip || "Select the size of each lot"}
    >
      <select
        value={lotSize}
        onChange={(e) => onLotSizeChange(e.target.value as LotSize)}
        className={baseInputStyles}
      >
        <option value="STANDARD">Standard Lot (100,000 units)</option>
        <option value="MINI">Mini Lot (10,000 units)</option>
        <option value="MICRO">Micro Lot (1,000 units)</option>
      </select>
    </FormControl>
  );
}