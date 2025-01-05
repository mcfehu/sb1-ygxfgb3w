import { LotSize, LotSizeConfig } from '../types';

export const lotSizes: LotSizeConfig[] = [
  { type: 'STANDARD', units: 100000, label: 'Standard Lot (100,000 units)' },
  { type: 'MINI', units: 10000, label: 'Mini Lot (10,000 units)' },
  { type: 'MICRO', units: 1000, label: 'Micro Lot (1,000 units)' }
];

export const getLotSizeUnits = (lotSize: LotSize): number => {
  const config = lotSizes.find(l => l.type === lotSize);
  return config?.units || 100000;
};

export const adjustPipValueForLotSize = (
  basePipValue: number,
  lotSize: LotSize,
  numberOfLots: number
): number => {
  const units = getLotSizeUnits(lotSize);
  const adjustedForLotSize = (basePipValue * units) / 100000;
  return adjustedForLotSize * numberOfLots;
};