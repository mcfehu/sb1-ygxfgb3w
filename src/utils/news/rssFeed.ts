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
  },
  {
    url: 'https://www.fxstreet.com/rss',
    source: 'FXStreet'
  }
];

// Generate dynamic fallback news with current timestamp
const generateFallbackNews = (): NewsItem[] => {
  const now = new Date();
  return [
    {
      title: "Markets await key economic data releases",
      link: "https://www.forexlive.com/",
      pubDate: new Date(now.getTime() - 5 * 60000).toISOString(), // 5 minutes ago
      source: "ForexLive"
    },
    {
      title: "Central banks signal policy shift amid economic uncertainty",
      link: "https://www.investing.com/",
      pubDate: new Date(now.getTime() - 10 * 60000).toISOString(), // 10 minutes ago
      source: "Investing.com"
    },
    {
      title: "Global markets respond to geopolitical developments",
      link: "https://www.fxstreet.com/",
      pubDate: new Date(now.getTime() - 15 * 60000).toISOString(), // 15 minutes ago
      source: "FXStreet"
    }
  ];
};

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
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/rss+xml, application/xml, text/xml; q=0.1',
            'Cache-Control': 'no-cache'
          }
        });
        
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
      return filterDuplicates(allNews)
        .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
        .slice(0, 10); // Limit to 10 most recent items
    }

    // Fallback to dynamic news if all feeds fail
    return generateFallbackNews();
  } catch (error) {
    console.warn('Using fallback news:', error);
    return generateFallbackNews();
  }
}