import { CalculationResult } from '../../types/calculator';

const STORAGE_KEY = 'position-calculator-history';
const MAX_HISTORY = 50;

export interface SavedCalculation extends CalculationResult {
  id: string;
  timestamp: string;
}

export const saveCalculation = async (result: CalculationResult): Promise<void> => {
  try {
    const history = await getCalculationHistory();
    
    const newCalculation: SavedCalculation = {
      ...result,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString()
    };

    // Add new calculation to the beginning and limit history size
    const updatedHistory = [newCalculation, ...history].slice(0, MAX_HISTORY);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Error saving calculation:', error);
    throw error;
  }
};

export const getCalculationHistory = async (): Promise<SavedCalculation[]> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error getting calculation history:', error);
    return [];
  }
};

export const clearCalculationHistory = async (): Promise<void> => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing calculation history:', error);
    throw error;
  }
};