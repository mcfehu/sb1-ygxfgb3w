import React from 'react';

export default function CopyrightBar() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm">
            Built with ❤️ for traders worldwide
          </p>
          <p className="text-sm">
            © {currentYear} positioncalc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}