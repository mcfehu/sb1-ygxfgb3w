export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}