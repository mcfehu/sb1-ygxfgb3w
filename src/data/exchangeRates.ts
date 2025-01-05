// Exchange rate matrix for currency conversions
// Rates are expressed as: row currency / column currency
export const exchangeMatrix: Record<string, Record<string, number>> = {
  USD: {
    USD: 1.0000,
    EUR: 0.9200,
    GBP: 0.7900,
    JPY: 148.50,
    AUD: 1.5200,
    CAD: 1.3500,
    CHF: 0.8700
  },
  EUR: {
    USD: 1.0870,
    EUR: 1.0000,
    GBP: 0.8587,
    JPY: 161.41,
    AUD: 1.6522,
    CAD: 1.4674,
    CHF: 0.9457
  },
  GBP: {
    USD: 1.2658,
    EUR: 1.1645,
    GBP: 1.0000,
    JPY: 187.97,
    AUD: 1.9241,
    CAD: 1.7089,
    CHF: 1.1013
  },
  JPY: {
    USD: 0.00673,
    EUR: 0.00620,
    GBP: 0.00532,
    JPY: 1.0000,
    AUD: 0.01023,
    CAD: 0.00909,
    CHF: 0.00586
  },
  AUD: {
    USD: 0.6579,
    EUR: 0.6052,
    GBP: 0.5197,
    JPY: 97.70,
    AUD: 1.0000,
    CAD: 0.8882,
    CHF: 0.5724
  },
  CAD: {
    USD: 0.7407,
    EUR: 0.6815,
    GBP: 0.5852,
    JPY: 110.00,
    AUD: 1.1259,
    CAD: 1.0000,
    CHF: 0.6444
  },
  CHF: {
    USD: 1.1494,
    EUR: 1.0574,
    GBP: 0.9080,
    JPY: 170.69,
    AUD: 1.7471,
    CAD: 1.5518,
    CHF: 1.0000
  }
};

export const getExchangeRate = (from: string, to: string): number => {
  return exchangeMatrix[from]?.[to] ?? 1;
};