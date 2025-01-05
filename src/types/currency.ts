export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD' | 'CHF';

export interface ExchangeRate {
  from: Currency;
  to: Currency;
  rate: number;
}