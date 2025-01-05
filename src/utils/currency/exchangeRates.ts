// Static exchange rates for demonstration
export const exchangeRates: Record<string, number> = {
  USD: 1.0,
  CAD: 1.30, // Updated: 1 USD = 1.30 CAD
  EUR: 0.92,
  GBP: 0.79,
  JPY: 148.50,
  AUD: 1.52,
  CHF: 0.87
};

export const convertToAccountCurrency = (
  amountInUSD: number,
  accountCurrency: string
): number => {
  const rate = exchangeRates[accountCurrency] || 1;
  return amountInUSD * rate;
};

export const convertFromAccountCurrency = (
  amount: number,
  accountCurrency: string
): number => {
  const rate = exchangeRates[accountCurrency] || 1;
  return amount / rate;
};