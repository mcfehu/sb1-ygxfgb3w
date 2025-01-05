import { FuturesContract, FuturesContractConfig } from '../types/futures';

export const futuresContracts: FuturesContractConfig[] = [
  { 
    symbol: 'ZN',
    name: '10-Year Treasury Note',
    tickValue: 15.625,
    tickSize: 0.015625,
    label: '10Y T-Note (ZN)',
    exchange: 'CBOT',
    tooltip: 'Tick Value: $15.625\nTick Size: 0.015625\nExchange: CBOT'
  },
  {
    symbol: 'ZF',
    name: '5-Year Treasury Note',
    tickValue: 7.8125,
    tickSize: 0.0078125,
    label: '5Y T-Note (ZF)',
    exchange: 'CBOT',
    tooltip: 'Tick Value: $7.8125\nTick Size: 0.0078125\nExchange: CBOT'
  },
  {
    symbol: 'ZB',
    name: '30-Year Treasury Bond',
    tickValue: 31.25,
    tickSize: 0.03125,
    label: '30Y T-Bond (ZB)',
    exchange: 'CBOT',
    tooltip: 'Tick Value: $31.25\nTick Size: 0.03125\nExchange: CBOT'
  },
  {
    symbol: 'UB',
    name: 'Ultra Treasury Bond',
    tickValue: 31.25,
    tickSize: 0.03125,
    label: 'Ultra T-Bond (UB)',
    exchange: 'CBOT',
    tooltip: 'Tick Value: $31.25\nTick Size: 0.03125\nExchange: CBOT'
  },
  {
    symbol: 'ZT',
    name: '2-Year Treasury Note',
    tickValue: 15.625,
    tickSize: 0.0078125,
    label: '2Y T-Note (ZT)',
    exchange: 'CBOT',
    tooltip: 'Tick Value: $15.625\nTick Size: 0.0078125\nExchange: CBOT'
  },
  {
    symbol: 'CL',
    name: 'Crude Oil',
    tickValue: 10,
    tickSize: 0.01,
    label: 'Crude Oil (CL)',
    exchange: 'NYMEX',
    tooltip: 'Tick Value: $10\nTick Size: 0.01\nExchange: NYMEX'
  },
  {
    symbol: 'GC',
    name: 'Gold',
    tickValue: 10,
    tickSize: 0.1,
    label: 'Gold (GC)',
    exchange: 'COMEX',
    tooltip: 'Tick Value: $10\nTick Size: 0.1\nExchange: COMEX'
  },
  {
    symbol: 'NQ',
    name: 'Nasdaq 100',
    tickValue: 5,
    tickSize: 0.25,
    label: 'Nasdaq 100 (NQ)',
    exchange: 'CME',
    tooltip: 'Tick Value: $5\nTick Size: 0.25\nExchange: CME'
  },
  {
    symbol: 'ES',
    name: 'S&P 500',
    tickValue: 12.50,
    tickSize: 0.25,
    label: 'S&P 500 (ES)',
    exchange: 'CME',
    tooltip: 'Tick Value: $12.50\nTick Size: 0.25\nExchange: CME'
  },
  {
    symbol: 'YM',
    name: 'Dow Jones',
    tickValue: 5,
    tickSize: 1.0,
    label: 'Dow Jones (YM)',
    exchange: 'CBOT',
    tooltip: 'Tick Value: $5\nTick Size: 1.0\nExchange: CBOT'
  },
  {
    symbol: 'CUSTOM',
    name: 'Custom Contract',
    tickValue: 0,
    tickSize: 0,
    label: 'Custom Contract',
    exchange: '',
    tooltip: 'Enter custom tick value and size'
  }
];

export const getContractConfig = (symbol: FuturesContract): FuturesContractConfig => {
  return futuresContracts.find(c => c.symbol === symbol) || futuresContracts[0];
};