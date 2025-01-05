import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export default function SectionHeader({ icon: Icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      
      <h3 className="text-3xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}