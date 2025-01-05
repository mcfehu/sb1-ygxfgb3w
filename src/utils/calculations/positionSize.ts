import { CalculatorInputs, CalculationResult } from '../../types';
import { calculatePipValue } from '../currency/pipValue';
import { getExchangeRate } from '../../data/exchangeRates';

export const calculatePositionSize = ({
  accountSize,
  riskPercentage,
  stopLossDistance,
  marketType,
  currency,
  forexPair,
  lotSize,
  numberOfLots = 1,
  tickValue
}: CalculatorInputs): CalculationResult => {
  // Calculate risk amount in account currency
  const riskAmount = (accountSize * riskPercentage) / 100;

  if (marketType === 'futures') {
    // Futures calculation
    const positionSize = riskAmount / (tickValue * stopLossDistance);
    const potentialLoss = stopLossDistance * tickValue * positionSize;

    return {
      positionSize: Number(positionSize.toFixed(4)),
      riskAmount: Number(riskAmount.toFixed(2)),
      potentialLoss: Number(potentialLoss.toFixed(2)),
      unit: 'contracts',
      currency
    };
  } else {
    // Spot forex calculation
    const pipValue = calculatePipValue(forexPair, currency, lotSize);
    
    // Calculate position size using the formula:
    // Position Size = Risk Amount / (Pip Value × Stop Loss Distance)
    const adjustedPipValue = pipValue * numberOfLots;
    const positionSize = riskAmount / (adjustedPipValue * stopLossDistance);
    
    // Calculate potential loss
    const potentialLoss = stopLossDistance * adjustedPipValue * positionSize;

    return {
      positionSize: Number(positionSize.toFixed(4)),
      riskAmount: Number(riskAmount.toFixed(2)),
      potentialLoss: Number(potentialLoss.toFixed(2)),
      unit: 'lots',
      currency,
      numberOfLots,
      lotType: lotSize
    };
  }
};