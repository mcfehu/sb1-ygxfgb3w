// Add to existing types
export interface CalculatorInputs {
  // ... existing fields ...
  numberOfLots: number;
}

export interface CalculationResult {
  // ... existing fields ...
  numberOfLots?: number;
  lotType?: LotSize;
}