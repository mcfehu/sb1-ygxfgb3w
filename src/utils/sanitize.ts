export const sanitizeNumber = (value: string): number => {
  // Remove any non-numeric characters except decimal point and minus sign
  const sanitized = value.replace(/[^\d.-]/g, '');
  const number = parseFloat(sanitized);
  return isNaN(number) ? 0 : number;
};

export const sanitizeString = (value: string): string => {
  // Remove any potentially dangerous characters
  return value.replace(/[<>]/g, '').trim();
};

export const validateCalculatorInputs = (inputs: Record<string, any>): boolean => {
  const { accountSize, riskPercentage, stopLossDistance } = inputs;
  
  if (accountSize <= 0) return false;
  if (riskPercentage <= 0 || riskPercentage > 100) return false;
  if (stopLossDistance <= 0) return false;
  
  return true;
};