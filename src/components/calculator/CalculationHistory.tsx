import React, { useState, useEffect } from 'react';
import { History, Trash2, ChevronDown } from 'lucide-react';
import { getCalculationHistory, clearCalculationHistory, SavedCalculation } from '../../utils/calculations/storage';
import { formatCurrency } from '../../utils/currency/format';

export default function CalculationHistory() {
  const [history, setHistory] = useState<SavedCalculation[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadHistory = async () => {
    setIsLoading(true);
    try {
      const calculations = await getCalculationHistory();
      setHistory(calculations);
    } catch (error) {
      console.error('Error loading history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const handleClear = async () => {
    if (window.confirm('Are you sure you want to clear all calculation history?')) {
      await clearCalculationHistory();
      setHistory([]);
    }
  };

  if (history.length === 0 && !isLoading) {
    return null;
  }

  return (
    <div className="mt-8 bg-white border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-900">Calculation History</span>
          <span className="text-sm text-gray-500">({history.length})</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div className={`transition-all duration-200 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        {isLoading ? (
          <div className="p-6 text-center text-gray-500">Loading history...</div>
        ) : (
          <>
            <div className="p-4 max-h-96 overflow-y-auto">
              {history.map((calc) => (
                <div
                  key={calc.id}
                  className="p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-lg font-semibold text-gray-900">
                      {calc.positionSize} {calc.unit}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(calc.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Risk Amount: </span>
                      <span className="text-gray-900">{formatCurrency(calc.riskAmount, calc.currency)}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Potential Loss: </span>
                      <span className="text-red-600">{formatCurrency(calc.potentialLoss, calc.currency)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={handleClear}
                className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear History
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}