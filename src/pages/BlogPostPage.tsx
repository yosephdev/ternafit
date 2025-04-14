
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import DonateBox from '@/components/shared/DonateBox';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  // Find the blog post by ID
  const post = blogPosts.find(post => post.id === parseInt(id || '0'));

  // If no post is found, show a simple not found message
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link to="/blog" className="text-terracotta hover:underline">← Back to blog</Link>
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
            {post.title[language as keyof typeof post.title] || post.title.en}
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
                  alt={post.title[language as keyof typeof post.title] || post.title.en}
                  className="w-full h-auto"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl mb-6">
                  {post.excerpt[language as keyof typeof post.excerpt] || post.excerpt.en}
                </p>
                
                <p>
                  {language === 'sv' 
                    ? 'Detta är en platshållartext för blogginlägget. I en produktionsmiljö skulle detta innehåll komma från en databas eller CMS-system.'
                    : 'This is placeholder text for the blog post. In a production environment, this content would come from a database or CMS.'}
                </p>
                
                <p>
                  {language === 'sv'
                    ? 'Vårt arbete i Tigray fortsätter att fokusera på att ge stöd till samhällen som påverkats av konflikten. Genom dessa initiativ ser vi hur lokalsamhällen bygger upp motståndskraft och börjar återhämta sig.'
                    : 'Our work in Tigray continues to focus on providing support to communities affected by the conflict. Through these initiatives, we are seeing how local communities are building resilience and beginning to recover.'}
                </p>
              </div>

              {/* Share Section */}
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

              {/* Author Bio */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-serif font-semibold mb-4">
                  {language === 'sv' ? 'Om författaren' : 'About the Author'}
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-muted rounded-full overflow-hidden mr-4">
                    <img 
                      src={`/images/team/${post.author === 'Yoseph Berhane' ? 'yoseph.jpg' : 'julian.jpg'}`} 
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{post.author}</h4>
                    <p className="text-sm text-muted-foreground">
                      {post.author === 'Yoseph Berhane' 
                        ? (language === 'sv' ? 'Grundare & Programdirektör' : 'Founder & Program Director')
                        : (language === 'sv' ? 'Fältkoordinator' : 'Field Coordinator')}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {post.author === 'Yoseph Berhane'
                    ? (language === 'sv' 
                      ? 'Yoseph har arbetat med humanitära insatser i Tigray i över ett decennium och leder Ternafits program för utbildning och påverkansarbete.'
                      : 'Yoseph has worked in humanitarian response in Tigray for over a decade and leads Ternafit\'s education and advocacy programs.')
                    : (language === 'sv'
                      ? 'Med erfarenhet från lokala och internationella NGOs är författaren dedikerad till att dokumentera verkliga berättelser från samhällen påverkade av konflikten.'
                      : 'With experience in local and international NGOs, the author is dedicated to documenting real stories from communities affected by the conflict.')}
                </p>
              </div>

              {/* Related Posts */}
              <div className="mt-10">
                <h3 className="text-xl font-serif font-semibold mb-6">
                  {language === 'sv' ? 'Relaterade inlägg' : 'Related Posts'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter(relatedPost => relatedPost.id !== post.id)
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
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
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

                {/* Tags */}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;
