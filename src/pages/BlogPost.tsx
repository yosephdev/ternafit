import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, User, Tag, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "./BlogPage";

const BlogPost = () => {
  const { t, language } = useLanguage();
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">{t("blog.notFound")}</h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-terracotta hover:underline"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t("blog.backToBlog")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main>
      {/* Article Header */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-terracotta hover:underline mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t("blog.backToBlog")}
            </Link>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(post.date, language)}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>{post.tags.join(", ")}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime} {t("blog.minRead")}</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-serif font-bold mb-6">{post.title[language]}</h1>
            <p className="text-xl text-muted-foreground">{post.excerpt[language]}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <article className="md:col-span-2">
              <div className="prose max-w-none">
                <img 
                  src={post.imageUrl} 
                  alt={post.title[language]} 
                  className="w-full h-auto rounded-lg mb-8"
                />
                <div dangerouslySetInnerHTML={{ __html: post.content[language] }} />
              </div>

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-muted">
                <h3 className="text-lg font-serif font-semibold mb-4">{t("blog.sharePost")}</h3>
                <div className="flex gap-4">
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title[language])}&url=${encodeURIComponent(window.location.href)}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Twitter
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Facebook
                  </a>
                  <a href={`mailto:?subject=${encodeURIComponent(post.title[language])}&body=${encodeURIComponent(`Check out this post: ${window.location.href}`)}`}
                     className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="space-y-6 sticky top-6">
                <DonateBox compact sticky />

                {/* Related Posts */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-serif font-semibold mb-4">{t("blog.relatedPosts")}</h3>
                  <ul className="space-y-4">
                    {blogPosts
                      .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
                      .slice(0, 3)
                      .map(relatedPost => (
                        <li key={relatedPost.id} className="border-b border-muted pb-4 last:border-0 last:pb-0">
                          <Link to={`/blog/${relatedPost.id}`} className="block hover:text-terracotta transition-colors">
                            <h4 className="font-medium">{relatedPost.title[language]}</h4>
                            <p className="text-sm text-muted-foreground">{formatDate(relatedPost.date, language)}</p>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const formatDate = (dateString: string, language: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default BlogPost;
