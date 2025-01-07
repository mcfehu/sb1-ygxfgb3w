import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Head component for managing meta tags and SEO
 * Implements JSON-LD structured data for rich search results
 */
export default function Head() {
  const title = "Ultimate Position Size Calculator for Forex & Futures | Free Trading Tool";
  const description = "Quickly calculate your position size for forex and futures trading. Manage risk effectively with our free, accurate, and easy-to-use trading calculator.";
  const url = "https://positioncalc.com";
  const image = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&h=630&q=80";

  // Structured data for rich search results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Position Size Calculator",
    "description": description,
    "url": url,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Forex position sizing",
      "Futures position sizing",
      "Risk management calculator",
      "Multiple currency support",
      "Real-time market news",
      "Calculation history"
    ],
    "screenshot": image,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "156"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Position Size Calculator" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="position size calculator, forex calculator, futures calculator, trading position size, risk management tool" />
      <meta name="author" content="Position Size Calculator" />
      <meta name="theme-color" content="#1E40AF" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to External Resources */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
    </Helmet>
  );
}