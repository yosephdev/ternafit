import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import DonateBox from "@/components/shared/DonateBox";
import { Calendar, User, Tag, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import BlogSidebar from "@/components/blog/BlogSidebar";

// Featured internal blog stories for Ternafit; can easily add more here!
const featuredStories = [
  {
    id: 1,
    date: "2024-05-10",
    title: "Building Hope: Why Ternafit Started a Blog",
    author: "Yoseph Berhane (Founder)",
    excerpt: "When we founded Ternafit, we were determined to do more than deliver aid—we wanted to elevate the voices and stories of Tigray. This blog is a place for resilience, hope, and the power of global solidarity.",
    imageUrl: "/images/projects/terna-featured-1.jpg",
    tags: ["Ternafit", "Founders"],
    content:
      "After a year of advocacy, this blog will document the struggles, hopes and achievements of Ternafit and our wider Tigrayan community. We invite you to read, share, and be a part of this journey with us."
  },
  {
    id: 2,
    date: "2024-09-27",
    title: "Milestones: A Year of Resilience",
    author: "Ternafit Stories Team",
    excerpt: "From launching social media campaigns to reporting from the field, our first year as Ternafit showed what's possible even without big partners. Here's a summary of wins, challenges, and what comes next.",
    imageUrl: "/images/projects/terna-featured-2.jpg",
    tags: ["Milestones", "Impact"],
    content:
      "Your support made all this possible. This piece summarizes where we've been and where we're going, highlighting people and communities at the heart of our mission."
  },
];

const BlogPage: React.FC = () => {
  const { t, language } = useLanguage();

  type BlogPost =
    | {
        // Internal story
        id: number;
        date: string;
        title: string;
        author: string;
        excerpt: string;
        imageUrl: string;
        tags: string[];
        content: string;
        url?: string; // Added for linking and deduplication
        internal?: true;
      }
    | {
        // External fetched
        id: number;
        date: string;
        title: string | { en: string; sv: string };
        author: string;
        excerpt: string | { en: string; sv: string } | undefined;
        imageUrl: string;
        tags: string[];
        url?: string; // Added for linking and deduplication
        internal?: false;
      };

  const [externalPosts, setExternalPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Fetch external blog/news articles about Tigray
  useEffect(() => {
    setLoading(true);
    setFetchError(null);

    const fetchGNews = fetch(
      `https://gnews.io/api/v4/search?q=Tigray&lang=en&country=et&max=10&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`
    ).then((res) => {
      if (!res.ok) throw new Error(`GNews API request failed: ${res.statusText}`);
      return res.json();
    });

    const fetchMediastack = fetch(
      `https://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_MEDIASTACK_API_KEY}&keywords=Tigray&countries=et&languages=en&limit=10`
    ).then((res) => {
      if (!res.ok) throw new Error(`Mediastack API request failed: ${res.statusText}`);
      return res.json();
    });

    const fetchNewsData = fetch(
      `https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&q=Tigray&country=et&language=en&size=10`
    ).then((res) => {
      if (!res.ok) throw new Error(`NewsData.io API request failed: ${res.statusText}`);
      return res.json();
    });

    Promise.allSettled([fetchGNews, fetchMediastack, fetchNewsData])
      .then((results) => {
        const combinedPosts: BlogPost[] = [];
        const errorMessages: string[] = [];

        results.forEach((result, index) => {
          if (result.status === "fulfilled") {
            const sourceName = ["GNews", "Mediastack", "NewsData.io"][index];
            interface ExternalArticle {
              content: string;
              url?: string;
              link?: string; // For NewsData.io
              publishedAt?: string; // For GNews
              published_at?: string; // For Mediastack
              pubDate?: string; // For NewsData.io
              title?: string;
              source?: { name?: string }; // For GNews
              author?: string | null; // For Mediastack (can be null)
              creator?: string[] | null; // For NewsData.io (can be array or null)
              description?: string | null;
              image?: string | null; // For GNews & Mediastack
              image_url?: string | null; // For NewsData.io
            }
            let articles: ExternalArticle[] = [];
            if (sourceName === "GNews" && result.value.articles) {
              articles = result.value.articles;
            } else if (sourceName === "Mediastack" && result.value.data) {
              articles = result.value.data;
            } else if (sourceName === "NewsData.io" && result.value.results) {
              articles = result.value.results;
            }

            const formatted = articles.map((article: ExternalArticle, i: number): BlogPost => {
              let post: BlogPost = {
                id: 0, // Placeholder, will be overwritten
                date: new Date().toISOString(),
                title: "No title available",
                author: sourceName, // Default author to source name
                excerpt: "",
                imageUrl: "/images/default.jpg",
                tags: ["Tigray", "External", sourceName],
                internal: false,
                url: article.url || article.link || "#" // Use article URL if available
              };
              if (sourceName === "GNews") {
                post = {
                  ...post,
                  id: i,
                  date: article.publishedAt || new Date().toISOString(),
                  title: article.title || "No title available",
                  author: article.source?.name || sourceName,
                  excerpt: article.description || article.content || "",
                  imageUrl: article.image || "/images/default.jpg",
                  url: article.url,
                };
              } else if (sourceName === "Mediastack") {
                post = {
                  ...post,
                  id: i,
                  date: article.published_at || new Date().toISOString(),
                  title: article.title || "No title available",
                  author: article.author || sourceName,
                  excerpt: article.description || "",
                  imageUrl: article.image || "/images/default.jpg",
                  url: article.url,
                };
              } else if (sourceName === "NewsData.io") {
                post = {
                  ...post,
                  id: i,
                  date: article.pubDate || new Date().toISOString(),
                  title: article.title || "No title available",
                  author: (article.creator && article.creator.join(", ")) || (typeof article.source === 'object' ? article.source.name || sourceName : article.source) || sourceName,
                  excerpt: article.description || article.content || "",
                  imageUrl: article.image_url || "/images/default.jpg",
                  url: article.link,
                };
              }
              return post;
            });
            combinedPosts.push(...formatted);
          } else {
            console.error(`API Error (${["GNews", "Mediastack", "NewsData.io"][index]}):`, result.reason);
            errorMessages.push(result.reason.message || `Failed to fetch from ${["GNews", "Mediastack", "NewsData.io"][index]}`);
          }
        });

        // Deduplicate based on URL
        const uniquePosts = Array.from(new Map(combinedPosts.map(post => [post.url, post])).values())
                                .filter(post => post.url && post.url !== "#") // Ensure valid URL for deduplication
                                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date, newest first
        
        // Re-assign simple numeric IDs for React keys after deduplication and sorting
        const finalPosts = uniquePosts.map((post, i) => ({ ...post, id: i + 100 }));

        setExternalPosts(finalPosts);

        if (errorMessages.length > 0 && finalPosts.length === 0) {
          setFetchError(`Could not load any external stories. Errors: ${errorMessages.join("; ")}`);
        } else if (errorMessages.length > 0) {
          console.warn("Some news sources failed to load:", errorMessages.join("; "));
        }
      })
      .catch((err) => {
        console.error("Critical error in fetching news:", err);
        setFetchError("A critical error occurred while fetching news. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "sv" ? "sv-SE" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  /**
   * Safely render string or translation object as string.
   */
  const renderText = (text: string | { en: string; sv: string }): string => {
    if (typeof text === "string") return text;
    if (text && (text.en || text.sv)) return text[language] || text.en || "";
    return "";
  };

  // Pagination for external posts
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(externalPosts.length / itemsPerPage);
  const paginatedExternal = externalPosts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-terracotta to-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">
            {t("nav.blog")}
          </h1>
          <p className="text-lg text-white max-w-xl mx-auto">
            Stories of resilience, hope, and progress. Real stories by Ternafit and the Tigrayan community—read, share, and join the voice for Tigray.
          </p>
        </div>
      </section>
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Featured Internal Ternafit Blog Posts */}
              <section>
                <h2 className="text-2xl font-serif font-bold mb-6">Featured Ternafit Stories</h2>
                <div className="space-y-7">
                  {featuredStories.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md border"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
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
                          <h2 className="text-xl font-serif font-bold mb-3">
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt}
                          </p>
                          <div className="prose">
                            {post.content.split('\n').map((para, i) => (
                              para.trim() !== "" ? <p key={i}>{para}</p> : <br key={i} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <hr className="my-10" />

              {/* External Community Stories/Articles */}
              <section>
                <h2 className="text-xl font-serif font-bold mb-6">More Stories & News from the Community</h2>
                {loading && (
                  <div className="mb-6 text-center">Loading stories…</div>
                )}
                {fetchError && (
                  <div className="mb-6 text-center text-red-600">{fetchError}</div>
                )}
                {!loading && !fetchError && paginatedExternal.length === 0 && (
                  <div className="mb-6 text-center">No external stories found.</div>
                )}
                <div className="space-y-8">
                  {paginatedExternal.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img
                            src={post.imageUrl}
                            alt={renderText(post.title)}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <h2 className="text-xl font-serif font-bold mb-3">
                            {renderText(post.title)}
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
                            {post.excerpt ? renderText(post.excerpt) : "No excerpt available"}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-10">
                    <nav className="flex items-center space-x-2">
                      <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors"
                        aria-label="Previous page"
                      >
                        &larr;
                      </button>
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setPage(i + 1)}
                          className={`px-3 py-1 rounded ${page === i + 1
                            ? "bg-terracotta text-white"
                            : "border border-muted hover:bg-muted"
                            }`}
                          aria-label={`Page ${i + 1}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className="px-3 py-1 rounded border border-muted hover:bg-muted transition-colors"
                        aria-label="Next page"
                      >
                        &rarr;
                      </button>
                    </nav>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              <DonateBox compact sticky />
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;