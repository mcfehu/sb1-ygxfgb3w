import Parser from 'rss-parser';

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source?: string;
}

// RSS feed sources
const FEEDS = [
  {
    url: 'https://www.forexlive.com/feed',
    source: 'ForexLive'
  },
  {
    url: 'https://www.investing.com/rss/news_commodities.rss',
    source: 'Investing.com'
  }
];

// Fallback static news data
const STATIC_NEWS: NewsItem[] = [
  {
    title: "USD/JPY hits new highs as Bank of Japan maintains ultra-loose policy",
    link: "https://www.forexlive.com/",
    pubDate: new Date().toISOString(),
    source: "ForexLive"
  },
  {
    title: "Gold steadies near $2,000 as traders await Fed decision",
    link: "https://www.investing.com/",
    pubDate: new Date().toISOString(),
    source: "Investing.com"
  },
  {
    title: "EUR/USD consolidates ahead of ECB meeting",
    link: "https://www.forexlive.com/",
    pubDate: new Date().toISOString(),
    source: "ForexLive"
  }
];

function filterDuplicates(headlines: NewsItem[]): NewsItem[] {
  const seen = new Set<string>();
  return headlines.filter(item => {
    const normalized = item.title.toLowerCase().trim();
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

export async function fetchNews(): Promise<NewsItem[]> {
  try {
    const parser = new Parser();
    const allNews: NewsItem[] = [];

    await Promise.all(FEEDS.map(async ({ url, source }) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Feed ${source} unavailable`);
        
        const feed = await parser.parseString(await response.text());
        const items = feed.items.map(item => ({
          title: item.title || '',
          link: item.link || '',
          pubDate: item.pubDate || new Date().toISOString(),
          source
        }));
        
        allNews.push(...items);
      } catch (error) {
        console.warn(`Error fetching ${source} feed:`, error);
      }
    }));

    // If we got any news items, filter duplicates and sort by date
    if (allNews.length > 0) {
      return filterDuplicates(allNews).sort((a, b) => 
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      );
    }

    // Fallback to static news if all feeds fail
    return STATIC_NEWS;
  } catch (error) {
    console.warn('Using static news fallback:', error);
    return STATIC_NEWS;
  }
}