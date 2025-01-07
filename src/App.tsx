import React, { useEffect } from 'react';
import { analytics } from './services/analytics';
import Head from './components/layout/Head';
import Hero from './components/layout/Hero';
import NewsTicker from './components/news/NewsTicker';
import CalculatorForm from './components/calculator/CalculatorForm';
import BrokerRecommendations from './components/brokers/BrokerRecommendations';
import ShareSection from './components/share/ShareSection';
import CTASection from './components/layout/CTASection';
import FAQSection from './components/faq/FAQSection';
import ContactSection from './components/contact/ContactSection';
import ValueProposition from './components/layout/ValueProposition';
import About from './components/layout/About';
import Footer from './components/layout/Footer';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfUse from './components/pages/TermsOfUse';
import Disclaimer from './components/pages/Disclaimer';

function App() {
  useEffect(() => {
    // Initialize analytics
    analytics.init();
    
    // Track initial page view
    analytics.trackPageView(window.location.pathname);

    // Track page views on route changes
    const handleRouteChange = () => {
      analytics.trackPageView(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const path = window.location.pathname;

  if (path === '/privacy') {
    return (
      <>
        <Head />
        <PrivacyPolicy />
        <Footer />
      </>
    );
  }

  if (path === '/terms') {
    return (
      <>
        <Head />
        <TermsOfUse />
        <Footer />
      </>
    );
  }

  if (path === '/disclaimer') {
    return (
      <>
        <Head />
        <Disclaimer />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head />
      <div className="min-h-screen bg-gray-50">
        <Hero />
        <NewsTicker />
        
        <section id="calculator" className="py-8">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <CalculatorForm />
            </div>
          </div>
        </section>

        <BrokerRecommendations />
        <ValueProposition />
        <ShareSection />
        <CTASection />
        <About />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;