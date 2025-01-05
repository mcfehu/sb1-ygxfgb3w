import React from 'react';
import { HelpCircle } from 'lucide-react';
import { FuturesContract } from '../types/futures';
import { futuresContracts } from '../utils/futures';

interface FuturesContractSelectorProps {
  contract: FuturesContract;
  onContractChange: (contract: FuturesContract) => void;
  tickValue: string;
  tickSize: string;
  onTickValueChange: (value: string) => void;
  onTickSizeChange: (value: string) => void;
}

export default function FuturesContractSelector({
  contract,
  onContractChange,
  tickValue,
  tickSize,
  onTickValueChange,
  onTickSizeChange
}: FuturesContractSelectorProps) {
  const handleContractChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newContract = e.target.value as FuturesContract;
    onContractChange(newContract);
    
    if (newContract !== 'CUSTOM') {
      const config = futuresContracts.find(c => c.symbol === newContract);
      if (config) {
        onTickValueChange(config.tickValue.toString());
        onTickSizeChange(config.tickSize.toString());
      }
    }
  };

  const selectedContract = futuresContracts.find(c => c.symbol === contract);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Futures Contract
        </label>
        <div className="relative">
          <select
            value={contract}
            onChange={handleContractChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {futuresContracts.map(({ symbol, label, tooltip }) => (
              <option key={symbol} value={symbol} title={tooltip}>
                {label} {symbol !== 'CUSTOM' && `- ${futuresContracts.find(c => c.symbol === symbol)?.exchange}`}
              </option>
            ))}
          </select>
          {selectedContract && selectedContract.symbol !== 'CUSTOM' && (
            <div className="absolute right-10 top-1/2 -translate-y-1/2">
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400" />
                <div className="hidden group-hover:block absolute right-0 bottom-full mb-2 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-pre">
                  {selectedContract.tooltip}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Tick Value
            </label>
            <div className="group relative">
              <HelpCircle className="w-4 h-4 text-gray-400" />
              <div className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap">
                Dollar value per tick for the selected contract
              </div>
            </div>
          </div>
          <input
            type="number"
            value={tickValue}
            onChange={(e) => onTickValueChange(e.target.value)}
            step="0.00001"
            min="0.00001"
            required
            disabled={contract !== 'CUSTOM'}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Tick Size
            </label>
            <div className="group relative">
              <HelpCircle className="w-4 h-4 text-gray-400" />
              <div className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap">
                Minimum price movement for the selected contract
              </div>
            </div>
          </div>
          <input
            type="number"
            value={tickSize}
            onChange={(e) => onTickSizeChange(e.target.value)}
            step="0.00001"
            min="0.00001"
            required
            disabled={contract !== 'CUSTOM'}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}