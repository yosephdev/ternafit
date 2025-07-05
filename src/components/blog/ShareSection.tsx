
import React from 'react';
import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const ShareSection = () => {
  const { t } = useLanguage();
  return (
    <div className="border-t border-b border-muted py-6 my-8">
      <div className="flex items-center justify-between">
        <span className="font-medium">{t('blog.sharePost')}</span>
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
