import React from 'react';
import { Handshake } from 'lucide-react';
import BrokerCard from './BrokerCard';
import SectionHeader from './SectionHeader';
import { brokers } from './brokerData';
import BrokerDisclaimer from './BrokerDisclaimer';

export default function BrokerRecommendations() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={Handshake}
          title="Our Trusted Broker Partners"
          subtitle="Carefully selected brokers offering competitive spreads and reliable execution"
        />
        
        <div className="grid gap-6 md:grid-cols-3 mt-10">
          {brokers.map((broker) => (
            <BrokerCard key={broker.name} {...broker} />
          ))}
        </div>

        <BrokerDisclaimer />
      </div>
    </section>
  );
}