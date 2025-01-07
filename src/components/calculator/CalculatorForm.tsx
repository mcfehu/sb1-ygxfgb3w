import React, { memo, useState } from 'react';
import { MarketType, Currency, ForexPair, LotSize } from '../../types';
import { calculatePositionSize } from '../../utils/calculations/positionSize';
import { sanitizeNumber, validateCalculatorInputs } from '../../utils/sanitize';
import { calculationRateLimiter } from '../../utils/rateLimiter';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { analytics } from '../../services/analytics';
import MarketTypeSelector from '../MarketTypeSelector';
import CurrencySelector from './CurrencySelector';
import RiskInputs from './RiskInputs';
import NumberInput from '../NumberInput';
import ForexPairSelector from './ForexPairSelector';
import LotSizeSelector from './LotSizeSelector';
import NumberOfLotsInput from './NumberOfLotsInput';
import FuturesContractSelector from './futures/FuturesContractSelector';
import TickValueInput from './futures/TickValueInput';
import CalculatorResult from './CalculatorResult';
import CalculationHistory from './CalculationHistory';
import { submitButtonStyles } from '../ui/ButtonStyles';
import { RotateCcw } from 'lucide-react';

// Memoize child components for performance
const MemoizedMarketTypeSelector = memo(MarketTypeSelector);
const MemoizedCurrencySelector = memo(CurrencySelector);
const MemoizedForexPairSelector = memo(ForexPairSelector);
const MemoizedLotSizeSelector = memo(LotSizeSelector);
const MemoizedFuturesContractSelector = memo(FuturesContractSelector);

const initialState = {
  marketType: 'spot' as MarketType,
  currency: 'USD' as Currency,
  accountSize: '10000',
  riskPercentage: '1',
  riskAmount: '100',
  showRiskPercentage: true,
  stopLossDistance: '10',
  forexPair: 'EUR/USD' as ForexPair,
  lotSize: 'STANDARD' as LotSize,
  numberOfLots: '1',
  futuresContract: 'NQ',
  tickValue: '5'
};

export default function CalculatorForm() {
  // Use localStorage for form state persistence
  const [formState, setFormState] = useLocalStorage('calculator-form', initialState);
  const [result, setResult] = useState<ReturnType<typeof calculatePositionSize> | null>(null);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setFormState(initialState);
    setResult(null);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Rate limiting
    if (!calculationRateLimiter.canProceed()) {
      setError('Too many calculations. Please wait a moment.');
      return;
    }

    // Input sanitization and validation
    const calculationInput = {
      accountSize: sanitizeNumber(formState.accountSize),
      riskPercentage: sanitizeNumber(formState.riskPercentage),
      stopLossDistance: sanitizeNumber(formState.stopLossDistance),
      marketType: formState.marketType,
      currency: formState.currency,
      forexPair: formState.forexPair,
      lotSize: formState.lotSize,
      numberOfLots: sanitizeNumber(formState.numberOfLots),
      tickValue: formState.marketType === 'futures' ? sanitizeNumber(formState.tickValue) : undefined
    };

    if (!validateCalculatorInputs(calculationInput)) {
      setError('Please check your inputs. All values must be positive numbers.');
      return;
    }

    try {
      const calculationResult = calculatePositionSize(calculationInput);
      setResult(calculationResult);
      analytics.trackCalculation(calculationInput);
    } catch (err) {
      setError('An error occurred during calculation. Please try again.');
      console.error('Calculation error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8" aria-label="Position Size Calculator">
      {/* Rest of the JSX remains the same, but use memoized components */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600" role="alert">
          {error}
        </div>
      )}
      {/* ... rest of the component ... */}
    </form>
  );
}