
import React from 'react';
import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

interface ShareSectionProps {
  language: string;
}

const ShareSection = ({ language }: ShareSectionProps) => {
  return (
    <div className="border-t border-b border-muted py-6 my-8">
      <div className="flex items-center justify-between">
        <span className="font-medium">{language === 'sv' ? 'Dela detta inlägg:' : 'Share this post:'}</span>
        <div className="flex space-x-4">
          <a href="#" className="text-muted-foreground hover:text-terracotta">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-terracotta">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-terracotta">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-terracotta">
            <Share2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareSection;
