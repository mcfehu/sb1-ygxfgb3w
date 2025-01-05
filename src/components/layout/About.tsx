import React from 'react';

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          About the Tool
        </h2>
        <div className="prose prose-lg mx-auto text-gray-600">
          <p>
            Our position size calculator helps traders determine the optimal position 
            size based on their account balance and risk tolerance. Whether you're 
            trading futures or spot markets, this tool ensures you maintain consistent 
            risk management across all your trades.
          </p>
          <p>
            Built with precision and ease of use in mind, it supports multiple 
            contract types and currency pairs, making it suitable for both beginners 
            and experienced traders.
          </p>
        </div>
      </div>
    </section>
  );
}