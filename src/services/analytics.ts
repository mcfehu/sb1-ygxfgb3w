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
    gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
      send_page_view: true
    });

    this.isInitialized = true;
  }

  trackPageView(path: string) {
    if (!this.isInitialized) return;
    window.gtag?.('config', GA_TRACKING_ID, {
      page_path: path
    });
  }

  trackEvent({ category, action, label, value }: AnalyticsEvent) {
    if (!this.isInitialized) return;
    window.gtag?.('event', action, {
      event_category: category,
      event_label: label,
      value
    });
  }

  // Specific event tracking methods
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

  trackSaveCalculation() {
    this.trackEvent({
      category: 'Calculator',
      action: 'save_calculation'
    });
  }

  trackExportCalculation(format: string) {
    this.trackEvent({
      category: 'Calculator',
      action: 'export_calculation',
      label: format
    });
  }

  trackShareCalculation(platform: string) {
    this.trackEvent({
      category: 'Share',
      action: 'share_calculation',
      label: platform
    });
  }

  trackError(error: Error, componentStack?: string) {
    this.trackEvent({
      category: 'Error',
      action: 'error_boundary',
      label: `${error.message}\n${componentStack || ''}`
    });
  }
}

export const analytics = new Analytics();