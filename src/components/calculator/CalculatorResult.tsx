import React, { useState } from 'react';
import { analytics } from '../../services/analytics';
// ... other imports remain the same

export default function CalculatorResult({ result }: CalculatorResultProps) {
  // ... existing state declarations

  const handleSave = async () => {
    await saveCalculation(result);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    analytics.trackSaveCalculation();
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
    
    analytics.trackExportCalculation('json');
  };

  const handlePrint = () => {
    window.print();
    analytics.trackExportCalculation('print');
  };

  // ... rest of the component remains the same
}