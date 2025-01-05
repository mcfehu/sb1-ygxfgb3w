import React from 'react';
import { Currency } from '../../types';
import { FormControl, baseInputStyles } from '../ui/FormControl';
import FuturesNotification from '../FuturesNotification';

interface CurrencySelectorProps {
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  marketType: 'spot' | 'futures';
  tooltip?: string;
}

export default function CurrencySelector({
  currency,
  onCurrencyChange,
  marketType,
  tooltip
}: CurrencySelectorProps) {
  return (
    <div className="space-y-2">
      <FormControl label="Account Currency" tooltip={tooltip}>
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value as Currency)}
          className={`${baseInputStyles} ${marketType === 'futures' ? 'bg-gray-50' : ''}`}
          disabled={marketType === 'futures'}
        >
          <option value="USD">USD (US Dollar)</option>
          <option value="EUR">EUR (Euro)</option>
          <option value="GBP">GBP (British Pound)</option>
          <option value="JPY">JPY (Japanese Yen)</option>
          <option value="AUD">AUD (Australian Dollar)</option>
          <option value="CAD">CAD (Canadian Dollar)</option>
          <option value="CHF">CHF (Swiss Franc)</option>
        </select>
      </FormControl>
      
      {marketType === 'futures' && <FuturesNotification />}
    </div>
  );
}