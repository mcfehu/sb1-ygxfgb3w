import { Currency } from './currency';
import { ForexPair } from './forex';
import { FuturesContract } from './futures';
import { LotSize } from './lot';

export interface CalculatorInputs {
  accountSize: number;
  riskPercentage: number;
  stopLossDistance: number;
  marketType: 'spot' | 'futures';
  currency: Currency;
  // Spot market specific
  forexPair?: ForexPair;
  lotSize?: LotSize;
  numberOfLots?: number;
  // Futures market specific
  futuresContract?: FuturesContract;
}

export interface CalculationResult {
  positionSize: number;
  riskAmount: number;
  potentialLoss: number;
  unit: 'contracts' | 'lots';
  currency: Currency;
  // Additional details for spot market
  numberOfLots?: number;
  lotType?: LotSize;
}