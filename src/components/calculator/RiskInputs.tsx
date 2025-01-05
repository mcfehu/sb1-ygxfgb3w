import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import NumberInput from '../NumberInput';

interface RiskInputsProps {
  riskPercentage: string;
  riskAmount: string;
  showPercentage: boolean;
  onRiskPercentageChange: (value: string) => void;
  onRiskAmountChange: (value: string) => void;
  onToggleRiskType: () => void;
}

export default function RiskInputs({
  riskPercentage,
  riskAmount,
  showPercentage,
  onRiskPercentageChange,
  onRiskAmountChange,
  onToggleRiskType
}: RiskInputsProps) {
  return (
    <div className="flex items-start gap-2">
      {showPercentage ? (
        <NumberInput
          label="Risk Percentage (%)"
          value={riskPercentage}
          onChange={onRiskPercentageChange}
          step="0.1"
          min="0.1"
          max="100"
          required
        />
      ) : (
        <NumberInput
          label="Risk Amount"
          value={riskAmount}
          onChange={onRiskAmountChange}
          step="0.01"
          min="0.01"
          required
        />
      )}
      <button
        type="button"
        onClick={onToggleRiskType}
        className="mt-8 p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        title="Swap Risk Parameters"
      >
        <ArrowUpDown className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}