import { FuturesContract, FuturesContractConfig } from '../types/futures';

export const futuresContracts: FuturesContractConfig[] = [
  // Equities
  {
    symbol: 'ES',
    name: 'E-mini S&P 500',
    category: 'Equities',
    exchange: 'CME',
    tickValue: 12.50,
    tickSize: 0.25
  },
  {
    symbol: 'MES',
    name: 'Micro E-mini S&P 500',
    category: 'Equities',
    exchange: 'CME',
    tickValue: 1.25,
    tickSize: 0.25
  },
  {
    symbol: 'NQ',
    name: 'E-mini NASDAQ 100',
    category: 'Equities',
    exchange: 'CME',
    tickValue: 5.00,
    tickSize: 0.25
  },
  {
    symbol: 'MNQ',
    name: 'Micro E-mini NASDAQ 100',
    category: 'Equities',
    exchange: 'CME',
    tickValue: 0.50,
    tickSize: 0.25
  },
  {
    symbol: 'RTY',
    name: 'E-mini Russell 2000',
    category: 'Equities',
    exchange: 'CME',
    tickValue: 10.00,
    tickSize: 0.10
  },
  {
    symbol: 'M2K',
    name: 'Micro E-mini Russell 2000',
    category: 'Equities',
    exchange: 'CME',
    tickValue: 1.00,
    tickSize: 0.10
  },

  // Energy
  {
    symbol: 'CL',
    name: 'Crude Oil',
    category: 'Energy',
    exchange: 'NYMEX',
    tickValue: 10.00,
    tickSize: 0.01
  },
  {
    symbol: 'MCL',
    name: 'Micro Crude Oil',
    category: 'Energy',
    exchange: 'NYMEX',
    tickValue: 1.00,
    tickSize: 0.01
  },
  {
    symbol: 'NG',
    name: 'Natural Gas',
    category: 'Energy',
    exchange: 'NYMEX',
    tickValue: 10.00,
    tickSize: 0.001
  },
  {
    symbol: 'MNG',
    name: 'Micro Natural Gas',
    category: 'Energy',
    exchange: 'NYMEX',
    tickValue: 1.00,
    tickSize: 0.001
  },

  // Metals
  {
    symbol: 'GC',
    name: 'Gold',
    category: 'Metals',
    exchange: 'COMEX',
    tickValue: 10.00,
    tickSize: 0.10
  },
  {
    symbol: 'MGC',
    name: 'Micro Gold',
    category: 'Metals',
    exchange: 'COMEX',
    tickValue: 1.00,
    tickSize: 0.10
  },
  {
    symbol: 'SI',
    name: 'Silver',
    category: 'Metals',
    exchange: 'COMEX',
    tickValue: 25.00,
    tickSize: 0.005
  },
  {
    symbol: 'SIL',
    name: 'Micro Silver',
    category: 'Metals',
    exchange: 'COMEX',
    tickValue: 2.50,
    tickSize: 0.005
  },

  // Currencies
  {
    symbol: '6E',
    name: 'Euro FX',
    category: 'Currencies',
    exchange: 'CME',
    tickValue: 12.50,
    tickSize: 0.0001
  },
  {
    symbol: 'M6E',
    name: 'Micro Euro FX',
    category: 'Currencies',
    exchange: 'CME',
    tickValue: 1.25,
    tickSize: 0.0001
  },
  {
    symbol: '6B',
    name: 'British Pound',
    category: 'Currencies',
    exchange: 'CME',
    tickValue: 6.25,
    tickSize: 0.0001
  },
  {
    symbol: '6J',
    name: 'Japanese Yen',
    category: 'Currencies',
    exchange: 'CME',
    tickValue: 6.25,
    tickSize: 0.0000005
  },

  // Interest Rates
  {
    symbol: 'ZN',
    name: '10-Year Note',
    category: 'Interest Rates',
    exchange: 'CBOT',
    tickValue: 15.625,
    tickSize: 0.015625
  },
  {
    symbol: 'ZB',
    name: '30-Year Bond',
    category: 'Interest Rates',
    exchange: 'CBOT',
    tickValue: 31.25,
    tickSize: 0.03125
  },
  {
    symbol: 'UB',
    name: 'Ultra Bond',
    category: 'Interest Rates',
    exchange: 'CBOT',
    tickValue: 31.25,
    tickSize: 0.03125
  },

  // Agriculture
  {
    symbol: 'ZC',
    name: 'Corn',
    category: 'Agriculture',
    exchange: 'CBOT',
    tickValue: 12.50,
    tickSize: 0.25
  },
  {
    symbol: 'ZW',
    name: 'Wheat',
    category: 'Agriculture',
    exchange: 'CBOT',
    tickValue: 12.50,
    tickSize: 0.25
  },

  // Custom
  {
    symbol: 'CUSTOM',
    name: 'Custom Contract',
    category: 'Custom',
    exchange: '',
    tickValue: 0,
    tickSize: 0
  }
];

export const getContractConfig = (symbol: FuturesContract): FuturesContractConfig => {
  return futuresContracts.find(c => c.symbol === symbol) || futuresContracts[0];
};

export const getContractsByCategory = () => {
  const categories = new Map<string, FuturesContractConfig[]>();
  
  futuresContracts.forEach(contract => {
    if (!categories.has(contract.category)) {
      categories.set(contract.category, []);
    }
    categories.get(contract.category)?.push(contract);
  });
  
  return categories;
};