import React from 'react';
import { AlertCircle } from 'lucide-react';
import type { CalculationResult } from '../../types/calculator';
import { formatCurrency } from '../../utils/currency/format';
import { exchangeRates } from '../../utils/currency/exchangeRates';

interface CalculatorResultProps {
  result: CalculationResult;
}

export default function CalculatorResult({ result }: CalculatorResultProps) {
  const showExchangeRateNote = result.currency !== 'USD';

  return (
    <div className="mt-8 overflow-hidden bg-white border border-blue-100 rounded-xl shadow-sm">
      <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-50/50">
        <h3 className="text-xl font-semibold text-gray-900">Results</h3>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Position Size</p>
          <p className="text-2xl font-bold text-gray-900">
            {result.positionSize.toFixed(2)} {result.unit}
            {result.lotType && (
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({result.lotType.toLowerCase()})
              </span>
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Risk Amount</p>
            <p className="text-xl font-semibold text-gray-900">
              {formatCurrency(result.riskAmount, result.currency)}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Potential Loss</p>
            <p className="text-xl font-semibold text-red-600">
              {formatCurrency(result.potentialLoss, result.currency)}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2 p-3 mt-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p>
              This is a suggested position size based on your risk parameters.
              Always verify calculations and adjust according to your strategy.
            </p>
            {showExchangeRateNote && (
              <p className="text-amber-600">
                Exchange rate for USD/{result.currency} is assumed to be {exchangeRates[result.currency]}. 
                Please verify with your broker.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}