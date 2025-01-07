import React, { useState } from 'react';
import { AlertCircle, Copy, Check, Save, Download, Printer } from 'lucide-react';
import type { CalculationResult } from '../../types/calculator';
import { formatCurrency } from '../../utils/currency/format';
import { exchangeRates } from '../../utils/currency/exchangeRates';
import { saveCalculation } from '../../utils/calculations/storage';

interface CalculatorResultProps {
  result: CalculationResult;
}

export default function CalculatorResult({ result }: CalculatorResultProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    await saveCalculation(result);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleExport = () => {
    const data = {
      positionSize: `${result.positionSize} ${result.unit}`,
      riskAmount: formatCurrency(result.riskAmount, result.currency),
      potentialLoss: formatCurrency(result.potentialLoss, result.currency),
      timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `position-size-calculation-${new Date().toISOString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mt-8 overflow-hidden bg-white border border-blue-100 rounded-xl shadow-sm animate-fade-scale print:shadow-none">
      <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-50/50 flex justify-between items-center print:bg-white">
        <h3 className="text-xl font-semibold text-gray-900">Results</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            className={`
              inline-flex items-center gap-2 px-3 py-1.5 
              text-sm font-medium transition-all duration-200
              ${saved 
                ? 'text-green-600 bg-green-50 rounded-lg' 
                : 'text-blue-600 hover:text-blue-700'
              }
            `}
            title="Save calculation"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4 animate-check" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline">Save</span>
              </>
            )}
          </button>

          <button
            onClick={handleExport}
            className="inline-flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
            title="Export as JSON"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 print:hidden"
            title="Print results"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </div>

      {/* Rest of the component remains the same */}
    </div>
  );
}