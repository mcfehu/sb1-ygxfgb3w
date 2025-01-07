import React, { useEffect, useState, useCallback } from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { NewsItem, fetchNews } from '../../utils/news/rssFeed';

function formatTimeAgo(pubDate: string): string {
  const date = new Date(pubDate);
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return `${Math.floor(diffInMinutes / 1440)}d ago`;
}

export default function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateNewsTicker = useCallback(async () => {
    try {
      setIsLoading(true);
      const headlines = await fetchNews();
      setNews(headlines);
    } catch (error) {
      console.error('Error updating news ticker:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    updateNewsTicker();
    const interval = setInterval(updateNewsTicker, 5 * 60 * 1000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, [updateNewsTicker]);

  if (isLoading) {
    return (
      <div className="bg-blue-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm">Loading latest headlines...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 text-white py-3 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="animate-ticker inline-flex items-center">
          {[...news, ...news].map((item, index) => (
            <React.Fragment key={`${item.title}-${index}`}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 hover:text-blue-200 transition-colors"
              >
                {item.source && (
                  <span className="text-xs font-medium px-2 py-0.5 bg-blue-800 rounded">
                    {item.source}
                  </span>
                )}
                <span>{item.title}</span>
                {item.pubDate && (
                  <span className="inline-flex items-center text-blue-300 text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {formatTimeAgo(item.pubDate)}
                  </span>
                )}
                <ExternalLink className="w-3 h-3 flex-shrink-0" />
              </a>
              <span className="px-3 text-blue-400">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}