
import { useLanguage } from "@/contexts/LanguageContext";
import DonateBox from "@/components/shared/DonateBox";
import { Calendar, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const formatDate = (dateString: string, language: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogPage = () => {
  const { t, language } = useLanguage();

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
                {blogPosts.map((post) => (
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
                          {post.title[language as keyof typeof post.title] || post.title.en}
                        </h2>
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
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors">
                    &larr;
                  </button>
                  <button className="px-3 py-1 rounded bg-terracotta text-white">1</button>
                  <button className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors">2</button>
                  <button className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors">3</button>
                  <button className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors">
                    &rarr;
                  </button>
                </nav>
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

export default BlogPage;
