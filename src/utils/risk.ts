export const calculateRiskAmount = (accountSize: number, riskPercentage: number): number => {
  return (accountSize * riskPercentage) / 100;
};

export const calculateRiskPercentage = (accountSize: number, riskAmount: number): number => {
  return (riskAmount / accountSize) * 100;
};