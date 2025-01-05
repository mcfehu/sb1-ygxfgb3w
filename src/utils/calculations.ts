import { CalculatorInputs, CalculationResult } from '../types';
import { adjustPipValueForLotSize, getLotSizeUnits } from './lotSize';

export const calculateRiskAmount = (accountSize: number, riskPercentage: number): number => {
  return (accountSize * riskPercentage) / 100;
};

export const calculateFuturesPositionSize = (
  riskAmount: number,
  stopLossDistance: number,
  tickValue: number
): number => {
  return riskAmount / (stopLossDistance * tickValue);
};

export const calculateSpotPositionSize = (
  riskAmount: number,
  stopLossDistance: number,
  pipValue: number,
  lotSize: LotSize,
  numberOfLots: number
): number => {
  const adjustedPipValue = adjustPipValueForLotSize(pipValue, lotSize, numberOfLots);
  return riskAmount / (stopLossDistance * adjustedPipValue);
};

export const calculatePositionSize = ({
  accountSize,
  riskPercentage,
  stopLossDistance,
  tickValue = 0,
  pipValue = 0,
  marketType,
  currency,
  lotSize = 'STANDARD',
  numberOfLots = 1,
  forexPair
}: CalculatorInputs): CalculationResult => {
  const riskAmount = calculateRiskAmount(accountSize, riskPercentage);
  
  const positionSize = marketType === 'futures'
    ? calculateFuturesPositionSize(riskAmount, stopLossDistance, tickValue)
    : calculateSpotPositionSize(riskAmount, stopLossDistance, pipValue, lotSize, numberOfLots);

  const adjustedPipValue = marketType === 'spot' 
    ? adjustPipValueForLotSize(pipValue, lotSize, numberOfLots)
    : pipValue;

  const potentialLoss = marketType === 'futures'
    ? stopLossDistance * tickValue * positionSize
    : stopLossDistance * adjustedPipValue * positionSize;

  const totalUnits = marketType === 'spot' 
    ? positionSize * getLotSizeUnits(lotSize)
    : undefined;

  return {
    positionSize: Number(positionSize.toFixed(4)),
    riskAmount: Number(riskAmount.toFixed(2)),
    potentialLoss: Number(potentialLoss.toFixed(2)),
    unit: marketType === 'futures' ? 'contracts' : 'lots',
    currency,
    totalUnits,
    numberOfLots: marketType === 'spot' ? numberOfLots : undefined,
    lotType: marketType === 'spot' ? lotSize : undefined
  };
}