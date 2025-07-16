import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';

const SocialShare = () => {
  const shareUrl = window.location.href;
  const shareText = "Help Tigray: 5.4M people need urgent humanitarian aid. Every donation saves lives. #TigrayNeedsHelp #Ternafit";

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center mb-3">
        <Share2 className="h-5 w-5 mr-2" />
        <span className="font-medium">Share to Help More People</span>
      </div>
      <div className="flex space-x-2">
        <button onClick={shareOnFacebook} className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          <Facebook className="h-4 w-4" />
        </button>
        <button onClick={shareOnTwitter} className="p-2 bg-blue-400 text-white rounded hover:bg-blue-500">
          <Twitter className="h-4 w-4" />
        </button>
        <button onClick={shareOnLinkedIn} className="p-2 bg-blue-800 text-white rounded hover:bg-blue-900">
          <Linkedin className="h-4 w-4" />
        </button>
        <button onClick={copyToClipboard} className="p-2 bg-gray-600 text-white rounded hover:bg-gray-700">
          <Copy className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SocialShare;