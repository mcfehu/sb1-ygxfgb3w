import { AnalyticsEvent } from '../types/analytics';

// Replace with your actual Google Analytics ID
const GA_TRACKING_ID = 'G-XXXXXXXXXX';

class Analytics {
  private isInitialized = false;

  init() {
    if (this.isInitialized) return;

    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);

    this.isInitialized = true;
  }

  trackEvent({ category, action, label }: AnalyticsEvent) {
    if (!this.isInitialized) return;

    window.gtag?.('event', action, {
      event_category: category,
      event_label: label
    });
  }

  trackCalculation(inputs: Record<string, any>) {
    this.trackEvent({
      category: 'Calculator',
      action: 'calculate_position',
      label: JSON.stringify(inputs)
    });
  }

  trackMarketTypeChange(marketType: string) {
    this.trackEvent({
      category: 'Calculator',
      action: 'change_market_type',
      label: marketType
    });
  }
}

export const analytics = new Analytics();