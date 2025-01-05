import { Currency } from '../../types/currency';
import { ForexPair } from '../../types/forex';
import { getExchangeRate } from '../../data/exchangeRates';
import { getForexPairConfig } from '../../data/forexPairs';

export const calculatePipValue = (
  pair: ForexPair,
  accountCurrency: Currency,
  lotSize: 'STANDARD' | 'MINI' | 'MICRO' = 'STANDARD'
): number => {
  const pairConfig = getForexPairConfig(pair);
  let pipValue = pairConfig.pipValue;

  // Get base currency and quote currency from the pair
  const [base, quote] = pair.split('/') as [string, string];

  // Adjust pip value based on lot size
  const lotSizeMultiplier = lotSize === 'MINI' ? 0.1 : lotSize === 'MICRO' ? 0.01 : 1;
  pipValue *= lotSizeMultiplier;

  // Convert pip value to account currency
  if (quote !== accountCurrency) {
    const conversionRate = getExchangeRate(quote, accountCurrency);
    pipValue *= conversionRate;
  }

  return Number(pipValue.toFixed(2));
};