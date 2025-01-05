import { ForexPair, ForexPairConfig } from '../types/forex';

export const forexPairs: ForexPairConfig[] = [
  // Metals in USD
  { pair: 'XAU/USD', pipValue: 1, label: 'Gold/USD (XAU/USD)', category: 'Metals' },
  { pair: 'XAG/USD', pipValue: 50, label: 'Silver/USD (XAG/USD)', category: 'Metals' },
  { pair: 'XPD/USD', pipValue: 1, label: 'Palladium/USD (XPD/USD)', category: 'Metals' },
  { pair: 'XPT/USD', pipValue: 1, label: 'Platinum/USD (XPT/USD)', category: 'Metals' },

  // Metals in Other Currencies
  { pair: 'XAU/EUR', pipValue: 1.1, label: 'Gold/EUR (XAU/EUR)', category: 'Metals' },
  { pair: 'XAU/AUD', pipValue: 1.5, label: 'Gold/AUD (XAU/AUD)', category: 'Metals' },
  { pair: 'XAG/EUR', pipValue: 55, label: 'Silver/EUR (XAG/EUR)', category: 'Metals' },
  { pair: 'XAG/AUD', pipValue: 75, label: 'Silver/AUD (XAG/AUD)', category: 'Metals' },

  // Major Currency Pairs
  { pair: 'EUR/USD', pipValue: 10, label: 'EUR/USD (€/US$)', category: 'Major' },
  { pair: 'GBP/USD', pipValue: 10, label: 'GBP/USD (£/US$)', category: 'Major' },
  { pair: 'USD/JPY', pipValue: 10, label: 'USD/JPY (US$/¥)', category: 'Major' },
  { pair: 'USD/CHF', pipValue: 10, label: 'USD/CHF (US$/CHF)', category: 'Major' },
  { pair: 'USD/CAD', pipValue: 10, label: 'USD/CAD (US$/C$)', category: 'Major' },
  { pair: 'AUD/USD', pipValue: 10, label: 'AUD/USD (A$/US$)', category: 'Major' },
  { pair: 'NZD/USD', pipValue: 10, label: 'NZD/USD (NZ$/US$)', category: 'Major' },

  // Cross Pairs
  { pair: 'EUR/GBP', pipValue: 10, label: 'EUR/GBP (€/£)', category: 'Cross' },
  { pair: 'EUR/JPY', pipValue: 10, label: 'EUR/JPY (€/¥)', category: 'Cross' },
  { pair: 'GBP/JPY', pipValue: 10, label: 'GBP/JPY (£/¥)', category: 'Cross' },
  { pair: 'CHF/JPY', pipValue: 10, label: 'CHF/JPY (CHF/¥)', category: 'Cross' },
  { pair: 'EUR/AUD', pipValue: 10, label: 'EUR/AUD (€/A$)', category: 'Cross' },
  { pair: 'GBP/AUD', pipValue: 10, label: 'GBP/AUD (£/A$)', category: 'Cross' },

  // Custom Option
  { pair: 'CUSTOM', pipValue: 0, label: 'Custom Pair', category: 'Custom' }
];

export const getForexPairsByCategory = () => {
  const categories = new Map<string, ForexPairConfig[]>();
  
  forexPairs.forEach(pair => {
    if (!categories.has(pair.category)) {
      categories.set(pair.category, []);
    }
    categories.get(pair.category)?.push(pair);
  });
  
  return categories;
};

export const getForexPairConfig = (pair: ForexPair): ForexPairConfig => {
  return forexPairs.find(p => p.pair === pair) || forexPairs[0];
};