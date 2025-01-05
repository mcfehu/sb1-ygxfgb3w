import React from 'react';
import { Shield, Target, Zap } from 'lucide-react';

export default function ValueProposition() {
  const benefits = [
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Calculate optimal position sizes based on your risk tolerance'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Accurate calculations for both futures and spot markets'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Quick and easy position sizing for any trading strategy'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Accurate Position Sizing for Spot & Futures Markets
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}