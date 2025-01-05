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

export default function CalculatorForm() {
  // Form state
  const [marketType, setMarketType] = useState<MarketType>('spot');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [accountSize, setAccountSize] = useState('10000');
  const [riskPercentage, setRiskPercentage] = useState('1');
  const [riskAmount, setRiskAmount] = useState('100');
  const [showRiskPercentage, setShowRiskPercentage] = useState(true);
  const [stopLossDistance, setStopLossDistance] = useState('10');
  
  // Market specific state
  const [forexPair, setForexPair] = useState<ForexPair>('EUR/USD');
  const [lotSize, setLotSize] = useState<LotSize>('STANDARD');
  const [numberOfLots, setNumberOfLots] = useState('1');
  const [futuresContract, setFuturesContract] = useState('NQ');
  const [tickValue, setTickValue] = useState('5');

  // Calculation result state
  const [result, setResult] = useState<ReturnType<typeof calculatePositionSize> | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const calculationInput = {
      accountSize: Number(accountSize),
      riskPercentage: Number(riskPercentage),
      stopLossDistance: Number(stopLossDistance),
      marketType,
      currency,
      forexPair,
      lotSize,
      numberOfLots: Number(numberOfLots),
      tickValue: marketType === 'futures' ? Number(tickValue) : undefined
    };

    const calculationResult = calculatePositionSize(calculationInput);
    setResult(calculationResult);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <MarketTypeSelector
        marketType={marketType}
        onMarketTypeChange={setMarketType}
      />

      <CurrencySelector
        currency={currency}
        onCurrencyChange={setCurrency}
        marketType={marketType}
      />

      <NumberInput
        label="Account Size"
        value={accountSize}
        onChange={setAccountSize}
        min="0"
        required
      />

      <RiskInputs
        riskPercentage={riskPercentage}
        riskAmount={riskAmount}
        showPercentage={showRiskPercentage}
        onRiskPercentageChange={setRiskPercentage}
        onRiskAmountChange={setRiskAmount}
        onToggleRiskType={() => setShowRiskPercentage(!showRiskPercentage)}
      />

      <NumberInput
        label="Stop-Loss Distance (pips/ticks)"
        value={stopLossDistance}
        onChange={setStopLossDistance}
        min="0.1"
        step="0.1"
        required
      />

      {marketType === 'spot' ? (
        <>
          <ForexPairSelector
            pair={forexPair}
            onPairChange={setForexPair}
          />
          <LotSizeSelector
            lotSize={lotSize}
            onLotSizeChange={setLotSize}
          />
          <NumberOfLotsInput
            value={numberOfLots}
            onChange={setNumberOfLots}
          />
        </>
      ) : (
        <>
          <FuturesContractSelector
            value={futuresContract}
            onChange={setFuturesContract}
            onTickValueChange={(value) => setTickValue(value.toString())}
          />
          <TickValueInput
            value={tickValue}
            onChange={setTickValue}
            contract={futuresContract}
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