
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import BlogSidebar from "@/components/blog/BlogSidebar";

const BlogPage = () => {
  const { t, language } = useLanguage();

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
      {/* Page Header */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center">{t("nav.blog")}</h1>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="space-y-10">
                {blogPosts.length > 0 ? (
                  blogPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={post.imageUrl}
                            alt={post.title[language as keyof typeof post.title] || post.title.en}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <h2 className="text-xl font-serif font-bold mb-3">
                            <Link to={`/blog/${post.id}`} className="hover:text-terracotta">
                              {post.title[language as keyof typeof post.title] || post.title.en}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
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
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt[language as keyof typeof post.excerpt] || post.excerpt.en}
                          </p>
                          <Link to={`/blog/${post.id}`} className="text-terracotta font-medium hover:underline">
                            {t("common.readMore")}
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-muted-foreground">No blog posts available.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {blogPosts.length > 0 && (
                <div className="flex justify-center mt-10">
                  <nav className="flex items-center space-x-2">
                    <button className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors">
                      &larr;
                    </button>
                    <button className="px-3 py-1 rounded bg-terracotta text-white">1</button>
                    <button className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors">
                      &rarr;
                    </button>
                  </nav>
                </div>
              )}
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

export default BlogPage;
