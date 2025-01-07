import React, { useState, useCallback } from 'react';
import { AlertCircle, Copy, Check, Undo2 } from 'lucide-react';
import type { CalculationResult } from '../../types/calculator';
import { formatCurrency } from '../../utils/currency/format';
import { exchangeRates } from '../../utils/currency/exchangeRates';

interface CalculatorResultProps {
  result: CalculationResult;
}

export default function CalculatorResult({ result }: CalculatorResultProps) {
  const [copied, setCopied] = useState(false);
  const [previousCopy, setPreviousCopy] = useState<string | null>(null);
  const [showUndo, setShowUndo] = useState(false);

  // Add check for non-USD currency
  const showExchangeRateNote = result.currency !== 'USD';

  const formatResults = useCallback(() => `Position Size: ${result.positionSize} ${result.unit}
Risk Amount: ${formatCurrency(result.riskAmount, result.currency)}
Potential Loss: ${formatCurrency(result.potentialLoss, result.currency)}`, [result]);

  const copyResults = async () => {
    const text = formatResults();
    try {
      // Store current clipboard content before copying
      const prevClipboard = await navigator.clipboard.readText();
      setPreviousCopy(prevClipboard);
      
      // Copy new content
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setShowUndo(true);
      
      // Reset copy status after 2 seconds
      setTimeout(() => setCopied(false), 2000);
      
      // Hide undo button after 10 seconds
      setTimeout(() => setShowUndo(false), 10000);
    } catch (err) {
      console.error('Failed to copy results:', err);
    }
  };

  const handleUndo = async () => {
    if (!previousCopy) return;
    
    try {
      await navigator.clipboard.writeText(previousCopy);
      setShowUndo(false);
      // Show brief confirmation
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to restore previous clipboard:', err);
    }
  };

  return (
    <div className="mt-8 overflow-hidden bg-white border border-blue-100 rounded-xl shadow-sm animate-fade-scale">
      <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-50/50 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-900">Results</h3>
        <div className="flex items-center gap-2">
          {showUndo && (
            <button
              onClick={handleUndo}
              className="inline-flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              title="Restore previous clipboard content"
            >
              <Undo2 className="w-4 h-4" />
              <span className="hidden sm:inline">Undo</span>
            </button>
          )}
          <button
            onClick={copyResults}
            className={`
              inline-flex items-center gap-2 px-3 py-1.5 
              text-sm font-medium transition-all duration-200
              ${copied 
                ? 'text-green-600 bg-green-50 rounded-lg' 
                : 'text-blue-600 hover:text-blue-700'
              }
            `}
            title="Copy results to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 animate-check" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Results</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-1 animate-slide-up" style={{ animationDelay: '100ms' }}>
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
          <div className="space-y-1 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <p className="text-sm font-medium text-gray-500">Risk Amount</p>
            <p className="text-xl font-semibold text-gray-900">
              {formatCurrency(result.riskAmount, result.currency)}
            </p>
          </div>

          <div className="space-y-1 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <p className="text-sm font-medium text-gray-500">Potential Loss</p>
            <p className="text-xl font-semibold text-red-600">
              {formatCurrency(result.potentialLoss, result.currency)}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2 p-3 mt-4 bg-gray-50 rounded-lg text-sm text-gray-600 animate-slide-up" style={{ animationDelay: '400ms' }}>
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