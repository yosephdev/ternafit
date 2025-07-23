
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogPosts';
import { useLanguage } from "@/contexts/LanguageContext";

interface RelatedPostsProps {
  currentPostId: number;
  posts: BlogPost[];
}

const RelatedPosts = ({ currentPostId, posts }: RelatedPostsProps) => {
  const { t, language } = useLanguage();
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { // Assuming English for related posts date format
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <div className="mt-10">
      <h3 className="text-xl font-serif font-semibold mb-6">
        Related Posts
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts
          .filter(relatedPost => relatedPost.id !== currentPostId)
          .slice(0, 2)
          .map(relatedPost => (
            <Link 
              key={relatedPost.id} 
              to={`${t("path.blogPost")}${relatedPost.slug[language]}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={relatedPost.imageUrl}
                alt={relatedPost.title[language]}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium mb-2">
                  {relatedPost.title[language]}
                </h4>
                <div className="text-xs text-muted-foreground">
                  {formatDate(relatedPost.date)}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
