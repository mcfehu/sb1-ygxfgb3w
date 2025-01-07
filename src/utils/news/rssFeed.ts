import { retry } from '../retry';

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source?: string;
}

const API_KEY = import.meta.env.VITE_MARKETAUX_API_KEY;
const API_URL = 'https://api.marketaux.com/v1/news/all';

// Cache configuration
const CACHE_KEY = 'news-cache';
const CACHE_DURATION = 10 * 1000; // 10 seconds

interface CacheEntry {
  data: NewsItem[];
  timestamp: number;
}

function getCachedNews(): NewsItem[] | null {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp }: CacheEntry = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) return null;

    return data;
  } catch {
    return null;
  }
}

function cacheNews(news: NewsItem[]): void {
  try {
    const entry: CacheEntry = {
      data: news,
      timestamp: Date.now()
    };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // Ignore cache errors
  }
}

export async function fetchNews(): Promise<NewsItem[]> {
  // Check cache first
  const cached = getCachedNews();
  if (cached) return cached;

  try {
    const response = await retry(
      () => fetch(`${API_URL}?api_token=${API_KEY}&filter_entities=true&language=en&limit=10`),
      { maxAttempts: 3, delayMs: 1000 }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    
    const news: NewsItem[] = data.data.map((item: any) => ({
      title: item.title,
      link: item.url,
      pubDate: item.published_at,
      source: item.source
    }));

    cacheNews(news);
    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}