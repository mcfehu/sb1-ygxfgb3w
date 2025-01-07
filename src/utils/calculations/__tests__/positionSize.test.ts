import { describe, it, expect } from 'vitest';
import { calculatePositionSize } from '../positionSize';

describe('calculatePositionSize', () => {
  it('calculates spot position size correctly', () => {
    const input = {
      accountSize: 10000,
      riskPercentage: 1,
      stopLossDistance: 10,
      marketType: 'spot',
      currency: 'USD',
      forexPair: 'EUR/USD',
      lotSize: 'STANDARD',
      numberOfLots: 1
    } as const;

    const result = calculatePositionSize(input);

    expect(result.positionSize).toBeGreaterThan(0);
    expect(result.riskAmount).toBe(100); // 1% of 10000
    expect(result.unit).toBe('lots');
    expect(result.currency).toBe('USD');
  });

  it('calculates futures position size correctly', () => {
    const input = {
      accountSize: 10000,
      riskPercentage: 1,
      stopLossDistance: 10,
      marketType: 'futures',
      currency: 'USD',
      tickValue: 5
    } as const;

    const result = calculatePositionSize(input);

    expect(result.positionSize).toBeGreaterThan(0);
    expect(result.riskAmount).toBe(100);
    expect(result.unit).toBe('contracts');
    expect(result.currency).toBe('USD');
  });

  it('handles zero and negative inputs gracefully', () => {
    const input = {
      accountSize: 0,
      riskPercentage: 0,
      stopLossDistance: 0,
      marketType: 'spot',
      currency: 'USD',
      forexPair: 'EUR/USD',
      lotSize: 'STANDARD',
      numberOfLots: 1
    } as const;

    const result = calculatePositionSize(input);

    expect(result.positionSize).toBe(0);
    expect(result.riskAmount).toBe(0);
  });
});