export type ForexPair = 
  // Metals
  | 'XAU/USD' | 'XAG/USD' | 'XPD/USD' | 'XPT/USD'
  | 'XAU/EUR' | 'XAU/AUD' | 'XAG/EUR' | 'XAG/AUD'
  // Major Pairs
  | 'EUR/USD' | 'GBP/USD' | 'USD/JPY' | 'USD/CHF'
  | 'USD/CAD' | 'AUD/USD' | 'NZD/USD'
  // Cross Pairs
  | 'EUR/GBP' | 'EUR/JPY' | 'GBP/JPY' | 'CHF/JPY'
  | 'EUR/AUD' | 'GBP/AUD'
  // Custom
  | 'CUSTOM';

export interface ForexPairConfig {
  pair: ForexPair;
  pipValue: number;
  label: string;
  category: 'Metals' | 'Major' | 'Cross' | 'Custom';
}