import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import ShareButton from './ShareButton';

export default function ShareSection() {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const url = window.location.href;

  const shareLinks = {
    twitter: `https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent('Check out this ultimate position size calculator for trading!')}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent('Ultimate Position Size Calculator')}`
  };

  const handleShare = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-6">
            <Share2 className="w-8 h-8 text-blue-600" />
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Share This Tool
          </h3>
          
          <p className="text-lg text-gray-600 mb-8">
            Found this calculator helpful? Share it with your fellow traders!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <ShareButton platform="twitter" onClick={() => handleShare('twitter')} />
            <ShareButton platform="facebook" onClick={() => handleShare('facebook')} />
            <ShareButton platform="linkedin" onClick={() => handleShare('linkedin')} />
            <ShareButton platform="copy" onClick={handleCopy} />
          </div>

          {showCopyMessage && (
            <p className="mt-4 text-green-600 font-medium animate-fade-in">
              Link copied to clipboard!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}