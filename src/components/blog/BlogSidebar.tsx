
import React from 'react';
import DonateBox from '@/components/shared/DonateBox';
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogSidebarProps {
  compact?: boolean;
}

const BlogSidebar = ({ compact = false }: BlogSidebarProps) => {
  const { t } = useLanguage();
  return (
    <div className="space-y-6">
      <DonateBox compact sticky />

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h3 className="text-lg font-serif font-semibold mb-4">{t("blog.sidebar.categories.title")}</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <a href="#" className="text-muted-foreground hover:text-terracotta">{t("blog.sidebar.categories.education")}</a>
            <span className="bg-muted text-xs px-2 py-1 rounded-full">8</span>
          </li>
          <li className="flex justify-between items-center">
            <a href="#" className="text-muted-foreground hover:text-terracotta">{t("blog.sidebar.categories.healthcare")}</a>
            <span className="bg-muted text-xs px-2 py-1 rounded-full">12</span>
          </li>
          <li className="flex justify-between items-center">
            <a href="#" className="text-muted-foreground hover:text-terracotta">{t("blog.sidebar.categories.emergencyRelief")}</a>
            <span className="bg-muted text-xs px-2 py-1 rounded-full">15</span>
          </li>
          <li className="flex justify-between items-center">
            <a href="#" className="text-muted-foreground hover:text-terracotta">{t("blog.sidebar.categories.communityDevelopment")}</a>
            <span className="bg-muted text-xs px-2 py-1 rounded-full">6</span>
          </li>
          <li className="flex justify-between items-center">
            <a href="#" className="text-muted-foreground hover:text-terracotta">{t("blog.sidebar.categories.advocacy")}</a>
            <span className="bg-muted text-xs px-2 py-1 rounded-full">9</span>
          </li>
        </ul>
      </div>

      {!compact && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-serif font-semibold mb-4">{t("blog.sidebar.tags.title")}</h3>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">{t("blog.sidebar.tags.education")}</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">{t("blog.sidebar.tags.healthcare")}</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">{t("blog.sidebar.tags.children")}</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">{t("blog.sidebar.tags.women")}</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">{t("blog.sidebar.tags.water")}</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">{t("blog.sidebar.tags.food")}</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">{t("blog.sidebar.tags.sustainability")}</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">{t("blog.sidebar.tags.community")}</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSidebar;
