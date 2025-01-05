import React from 'react';
import { HelpCircle } from 'lucide-react';

export const baseInputStyles = `
  w-full px-4 py-3
  text-base
  rounded-lg 
  border border-gray-300
  bg-white
  transition-all duration-200
  hover:border-blue-400
  focus:ring-2 focus:ring-blue-500 focus:border-blue-500
  disabled:bg-gray-100 disabled:cursor-not-allowed
  disabled:hover:border-gray-300
`;

interface FormControlProps {
  children: React.ReactNode;
  label: string;
  tooltip?: string;
}

export function FormControl({ children, label, tooltip }: FormControlProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <label className="text-base font-medium text-gray-700">
          {label}
        </label>
        {tooltip && (
          <div className="group relative">
            <HelpCircle className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors cursor-help" />
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-10">
              <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg max-w-xs whitespace-normal">
                {tooltip}
                <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1">
                  <div className="border-4 border-transparent border-t-gray-900" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}