import { ForexPair, ForexPairConfig } from '../types/forex';

export const forexPairs: ForexPairConfig[] = [
  { pair: 'EUR/USD', pipValue: 10, label: 'EUR/USD (€/US$)' },
  { pair: 'GBP/USD', pipValue: 10, label: 'GBP/USD (£/US$)' },
  { pair: 'USD/JPY', pipValue: 8.5, label: 'USD/JPY (US$/¥)' },
  { pair: 'AUD/USD', pipValue: 10, label: 'AUD/USD (A$/US$)' },
  { pair: 'USD/CHF', pipValue: 10, label: 'USD/CHF (US$/CHF)' },
  { pair: 'USD/CAD', pipValue: 10, label: 'USD/CAD (US$/C$)' },
  { pair: 'NZD/USD', pipValue: 10, label: 'NZD/USD (NZ$/US$)' },
  { pair: 'EUR/GBP', pipValue: 13, label: 'EUR/GBP (€/£)' },
  { pair: 'EUR/JPY', pipValue: 8.5, label: 'EUR/JPY (€/¥)' },
  { pair: 'GBP/JPY', pipValue: 8.5, label: 'GBP/JPY (£/¥)' },
  { pair: 'AUD/JPY', pipValue: 8.5, label: 'AUD/JPY (A$/¥)' },
  { pair: 'CHF/JPY', pipValue: 8.5, label: 'CHF/JPY (CHF/¥)' },
  { pair: 'NZD/JPY', pipValue: 8.5, label: 'NZD/JPY (NZ$/¥)' },
  { pair: 'EUR/AUD', pipValue: 10, label: 'EUR/AUD (€/A$)' },
  { pair: 'GBP/AUD', pipValue: 10, label: 'GBP/AUD (£/A$)' },
  // Add precious metals
  { pair: 'XAU/USD', pipValue: 1, label: 'Gold (XAU/USD)' },
  { pair: 'XAG/USD', pipValue: 0.5, label: 'Silver (XAG/USD)' },
  { pair: 'CUSTOM', pipValue: 0, label: 'Custom Pair' }
];

export const getForexPairPipValue = (pair: ForexPair): number => {
  const config = forexPairs.find(p => p.pair === pair);
  return config?.pipValue || 0;
};