
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogPosts';

interface RelatedPostsProps {
  currentPostId: number;
  posts: BlogPost[];
  language: string;
}

const RelatedPosts = ({ currentPostId, posts, language }: RelatedPostsProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <div className="mt-10">
      <h3 className="text-xl font-serif font-semibold mb-6">
        {language === 'sv' ? 'Relaterade inlägg' : 'Related Posts'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts
          .filter(relatedPost => relatedPost.id !== currentPostId)
          .slice(0, 2)
          .map(relatedPost => (
            <Link 
              key={relatedPost.id} 
              to={`/blog/${relatedPost.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={relatedPost.imageUrl}
                alt={relatedPost.title[language as keyof typeof relatedPost.title] || relatedPost.title.en}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium mb-2">
                  {relatedPost.title[language as keyof typeof relatedPost.title] || relatedPost.title.en}
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
