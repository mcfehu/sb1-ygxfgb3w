import React from 'react';
import Head from './components/layout/Head';
import Hero from './components/layout/Hero';
import CalculatorForm from './components/calculator/CalculatorForm';
import BrokerRecommendations from './components/brokers/BrokerRecommendations';
import ShareSection from './components/share/ShareSection';
import CTASection from './components/layout/CTASection';
import FAQSection from './components/faq/FAQSection';
import ContactSection from './components/contact/ContactSection';
import ValueProposition from './components/layout/ValueProposition';
import About from './components/layout/About';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Head />
      <div className="min-h-screen bg-gray-50">
        <Hero />
        
        <section id="calculator" className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <CalculatorForm />
            </div>
          </div>
        </section>

        <BrokerRecommendations />
        <ShareSection />
        <CTASection />
        <ValueProposition />
        <About />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;