import React from 'react';
import { marketTypeButtonStyles } from '../ui/ButtonStyles';

interface MarketTypeSelectorProps {
  marketType: 'spot' | 'futures';
  onMarketTypeChange: (type: 'spot' | 'futures') => void;
}

export default function MarketTypeSelector({ 
  marketType, 
  onMarketTypeChange 
}: MarketTypeSelectorProps) {
  return (
    <div className="flex gap-4" role="group" aria-label="Market type selection">
      <button
        type="button"
        onClick={() => onMarketTypeChange('spot')}
        aria-pressed={marketType === 'spot'}
        className={marketTypeButtonStyles(marketType === 'spot')}
      >
        Spot
      </button>
      <button
        type="button"
        onClick={() => onMarketTypeChange('futures')}
        aria-pressed={marketType === 'futures'}
        className={marketTypeButtonStyles(marketType === 'futures')}
      >
        Futures
      </button>
    </div>
  );
}