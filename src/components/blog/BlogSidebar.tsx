
import React from 'react';
import DonateBox from '@/components/shared/DonateBox';

interface BlogSidebarProps {
  compact?: boolean;
}

const BlogSidebar = ({ compact = false }: BlogSidebarProps) => {
  return (
    <div className="space-y-6">
      <DonateBox compact sticky />

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h3 className="text-lg font-serif font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <a href="#" className="text-muted-foreground hover:text-terracotta">Education</a>
            <span className="bg-muted text-xs px-2 py-1 rounded-full">8</span>
          </li>
          <li className="flex justify-between items-center">
            <a href="#" className="text-muted-foreground hover:text-terracotta">Healthcare</a>
            <span className="bg-muted text-xs px-2 py-1 rounded-full">12</span>
          </li>
          <li className="flex justify-between items-center">
            <a href="#" className="text-muted-foreground hover:text-terracotta">Emergency Relief</a>
            <span className="bg-muted text-xs px-2 py-1 rounded-full">15</span>
          </li>
          <li className="flex justify-between items-center">
            <a href="#" className="text-muted-foreground hover:text-terracotta">Community Development</a>
            <span className="bg-muted text-xs px-2 py-1 rounded-full">6</span>
          </li>
          <li className="flex justify-between items-center">
            <a href="#" className="text-muted-foreground hover:text-terracotta">Advocacy</a>
            <span className="bg-muted text-xs px-2 py-1 rounded-full">9</span>
          </li>
        </ul>
      </div>

      {!compact && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-serif font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">Education</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">Healthcare</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">Children</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">Women</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">Water</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">Food</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">Sustainability</a>
            <a href="#" className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-muted-foreground hover:text-white transition-colors">Community</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSidebar;
