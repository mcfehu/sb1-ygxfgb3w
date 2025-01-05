import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface QuickLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

export default function QuickLink({ href, label, icon: Icon }: QuickLinkProps) {
  return (
    <a
      href={href}
      className="
        group flex items-center justify-center gap-2
        text-gray-400 hover:text-white
        transition-colors duration-200
      "
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
      <ExternalLink className="
        w-3 h-3 opacity-0 -translate-x-2
        group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-200
      " />
    </a>
  );
}