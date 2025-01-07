import React from 'react';
import Tooltip from './Tooltip';

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
  tooltipUrl?: string;
  tooltipLearnMore?: string;
}

export function FormControl({ 
  children, 
  label, 
  tooltip,
  tooltipUrl,
  tooltipLearnMore 
}: FormControlProps) {
  const id = React.useId();

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <label 
          htmlFor={id}
          className="text-base font-medium text-gray-700"
        >
          {label}
        </label>
        {tooltip && (
          <Tooltip 
            content={tooltip}
            learnMoreUrl={tooltipUrl}
            learnMoreText={tooltipLearnMore}
          />
        )}
      </div>
      {React.cloneElement(children as React.ReactElement, { id })}
    </div>
  );
}