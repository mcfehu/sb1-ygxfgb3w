export type FuturesContract = 
  // Equities
  | 'ES' | 'MES' | 'NQ' | 'MNQ' | 'RTY' | 'M2K'
  // Energy
  | 'CL' | 'MCL' | 'NG' | 'MNG'
  // Metals
  | 'GC' | 'MGC' | 'SI' | 'SIL'
  // Currencies
  | '6E' | 'M6E' | '6B' | '6J'
  // Interest Rates
  | 'ZN' | 'ZB' | 'UB'
  // Agriculture
  | 'ZC' | 'ZW'
  // Custom
  | 'CUSTOM';

export interface FuturesContractConfig {
  symbol: FuturesContract;
  name: string;
  category: 'Equities' | 'Energy' | 'Metals' | 'Currencies' | 'Interest Rates' | 'Agriculture' | 'Custom';
  exchange: string;
  tickValue: number;
  tickSize: number;
  description?: string;
}