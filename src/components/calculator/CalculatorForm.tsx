import React, { useState } from 'react';
import { MarketType, Currency, ForexPair, LotSize } from '../../types';
import { calculatePositionSize } from '../../utils/calculations/positionSize';
import MarketTypeSelector from './MarketTypeSelector';
import CurrencySelector from './CurrencySelector';
import RiskInputs from './RiskInputs';
import NumberInput from '../NumberInput';
import ForexPairSelector from './ForexPairSelector';
import LotSizeSelector from './LotSizeSelector';
import NumberOfLotsInput from './NumberOfLotsInput';
import FuturesContractSelector from './futures/FuturesContractSelector';
import TickValueInput from './futures/TickValueInput';
import CalculatorResult from './CalculatorResult';
import { submitButtonStyles } from '../ui/ButtonStyles';
import { RotateCcw } from 'lucide-react';

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
  const [formState, setFormState] = useState(initialState);
  const [result, setResult] = useState<ReturnType<typeof calculatePositionSize> | null>(null);

  const resetForm = () => {
    setFormState(initialState);
    setResult(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const calculationInput = {
      accountSize: Number(formState.accountSize),
      riskPercentage: Number(formState.riskPercentage),
      stopLossDistance: Number(formState.stopLossDistance),
      marketType: formState.marketType,
      currency: formState.currency,
      forexPair: formState.forexPair,
      lotSize: formState.lotSize,
      numberOfLots: Number(formState.numberOfLots),
      tickValue: formState.marketType === 'futures' ? Number(formState.tickValue) : undefined
    };

    const calculationResult = calculatePositionSize(calculationInput);
    setResult(calculationResult);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex justify-between items-center">
        <MarketTypeSelector
          marketType={formState.marketType}
          onMarketTypeChange={(type) => setFormState(prev => ({ ...prev, marketType: type }))}
        />
        <button
          type="button"
          onClick={resetForm}
          className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          title="Reset calculator"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      <CurrencySelector
        currency={formState.currency}
        onCurrencyChange={(currency) => setFormState(prev => ({ ...prev, currency }))}
        marketType={formState.marketType}
        tooltip="Select your trading account's base currency"
      />

      <NumberInput
        label="Account Size"
        value={formState.accountSize}
        onChange={(value) => setFormState(prev => ({ ...prev, accountSize: value }))}
        min="0"
        required
        tooltip="Enter your total trading account balance"
        inputMode="decimal"
        pattern="[0-9]*"
      />

      <RiskInputs
        riskPercentage={formState.riskPercentage}
        riskAmount={formState.riskAmount}
        showPercentage={formState.showRiskPercentage}
        onRiskPercentageChange={(value) => setFormState(prev => ({ ...prev, riskPercentage: value }))}
        onRiskAmountChange={(value) => setFormState(prev => ({ ...prev, riskAmount: value }))}
        onToggleRiskType={() => setFormState(prev => ({ ...prev, showRiskPercentage: !prev.showRiskPercentage }))}
        tooltip="Set your risk per trade as a percentage or fixed amount"
      />

      <NumberInput
        label="Stop-Loss Distance (pips/ticks)"
        value={formState.stopLossDistance}
        onChange={(value) => setFormState(prev => ({ ...prev, stopLossDistance: value }))}
        min="0.1"
        step="0.1"
        required
        tooltip="Enter the distance to your stop-loss in pips (forex) or ticks (futures)"
        inputMode="decimal"
        pattern="[0-9]*"
      />

      {formState.marketType === 'spot' ? (
        <>
          <ForexPairSelector
            pair={formState.forexPair}
            onPairChange={(pair) => setFormState(prev => ({ ...prev, forexPair: pair }))}
            tooltip="Select the currency pair you want to trade"
          />
          <LotSizeSelector
            lotSize={formState.lotSize}
            onLotSizeChange={(size) => setFormState(prev => ({ ...prev, lotSize: size }))}
            tooltip="Choose your preferred lot size (Standard: 100,000, Mini: 10,000, Micro: 1,000)"
          />
          <NumberOfLotsInput
            value={formState.numberOfLots}
            onChange={(value) => setFormState(prev => ({ ...prev, numberOfLots: value }))}
            tooltip="Enter the number of lots you want to trade"
          />
        </>
      ) : (
        <>
          <FuturesContractSelector
            value={formState.futuresContract}
            onChange={(contract) => setFormState(prev => ({ ...prev, futuresContract: contract }))}
            onTickValueChange={(value) => setFormState(prev => ({ ...prev, tickValue: value.toString() }))}
            tooltip="Select the futures contract you want to trade"
          />
          <TickValueInput
            value={formState.tickValue}
            onChange={(value) => setFormState(prev => ({ ...prev, tickValue: value }))}
            contract={formState.futuresContract}
          />
        </>
      )}

      <button type="submit" className={submitButtonStyles}>
        Calculate Position Size
      </button>

      {result && <CalculatorResult result={result} />}
    </form>
  );
}