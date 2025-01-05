import React from 'react';
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react';

interface ShareButtonProps {
  platform: 'twitter' | 'facebook' | 'linkedin' | 'copy';
  onClick: () => void;
}

const platformConfig = {
  twitter: {
    icon: Twitter,
    label: 'Share on Twitter',
    bgColor: 'bg-[#1DA1F2] hover:bg-[#1a8cd8]'
  },
  facebook: {
    icon: Facebook,
    label: 'Share on Facebook',
    bgColor: 'bg-[#1877F2] hover:bg-[#166fe5]'
  },
  linkedin: {
    icon: Linkedin,
    label: 'Share on LinkedIn',
    bgColor: 'bg-[#0A66C2] hover:bg-[#095196]'
  },
  copy: {
    icon: Link,
    label: 'Copy Link',
    bgColor: 'bg-gray-600 hover:bg-gray-700'
  }
};

export default function ShareButton({ platform, onClick }: ShareButtonProps) {
  const config = platformConfig[platform];
  const Icon = config.icon;

  return (
    <button
      onClick={onClick}
      className={`
        ${config.bgColor}
        text-white
        px-4 py-2.5
        rounded-lg
        flex items-center gap-2
        transition-all duration-200
        transform hover:-translate-y-0.5
        shadow-sm hover:shadow-md
      `}
      aria-label={config.label}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{config.label}</span>
    </button>
  );
}