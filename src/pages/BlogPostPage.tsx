
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ShareSection from '@/components/blog/ShareSection';
import BlogSidebar from '@/components/blog/BlogSidebar';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  
  // Find the blog post by slug or fallback to ID for backward compatibility
  const post = blogPosts.find(post => 
    post.slug[language] === id || post.id === parseInt(id || '0')
  );

  // If no post is found, show a simple not found message
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link to={t("path.blog")} className="text-terracotta hover:underline">← Back to blog</Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center mb-4">
            {post.title[language]}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              <span>{post.tags.join(", ")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src={post.imageUrl}
                  alt={post.title[language]}
                  className="w-full h-auto"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl mb-6">
                  {post.excerpt[language]}
                </p>
                
                {/* Display content paragraphs */}
                {post.content[language]
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                  ))}
              </div>

              {/* Share Section */}
              <ShareSection />

              {/* Author Bio */}
              <AuthorBio author={post.author} />

              {/* Related Posts */}
              <RelatedPosts currentPostId={post.id} posts={blogPosts} />
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;
