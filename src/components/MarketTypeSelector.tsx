import React from 'react';
import { MarketType } from '../types';
import { marketTypeButtonStyles } from './ui/ButtonStyles';

interface MarketTypeSelectorProps {
  marketType: MarketType;
  onMarketTypeChange: (type: MarketType) => void;
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
        aria-label="Select spot market"
        aria-pressed={marketType === 'spot'}
        className={marketTypeButtonStyles(marketType === 'spot')}
      >
        Spot
      </button>
      <button
        type="button"
        onClick={() => onMarketTypeChange('futures')}
        aria-label="Select futures market"
        aria-pressed={marketType === 'futures'}
        className={marketTypeButtonStyles(marketType === 'futures')}
      >
        Futures
      </button>
    </div>
  );
}