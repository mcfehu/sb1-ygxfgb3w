import Parser from 'rss-parser';
import { retry } from '../retry';

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source?: string;
}

// Fallback news data
const FALLBACK_NEWS: NewsItem[] = [
  {
    title: "USD/JPY holds steady as markets await key economic data",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Market Update"
  },
  {
    title: "Gold prices consolidate near recent highs",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Market Update"
  },
  {
    title: "EUR/USD trading within established range",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Market Update"
  }
];

export async function fetchNews(): Promise<NewsItem[]> {
  try {
    // Simulate news fetch since RSS feeds are blocked in WebContainer
    // In production, replace this with actual RSS feed fetching
    return FALLBACK_NEWS;
  } catch (error) {
    console.warn('Error fetching news, using fallback:', error);
    return FALLBACK_NEWS;
  }
}