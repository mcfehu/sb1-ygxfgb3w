import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="flex-1 min-w-[250px] text-center">
      <h3 className="text-lg font-semibold text-white mb-6">
        {title}
      </h3>
      {children}
    </div>
  );
}