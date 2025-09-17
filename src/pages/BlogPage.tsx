import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";

import DonateBox from "@/components/shared/DonateBox";
import { Calendar, User, Tag, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { Helmet } from "react-helmet-async";

// Featured internal blog stories for Ternafit; can easily add more here!
const featuredStories = [
  {
    id: 1,
    date: "2024-05-10",
    title: {
      en: "Building Hope: Why Ternafit Started a Blog",
      sv: "Bygger hopp: Varför Ternafit startade en blogg"
    },
    author: "Yoseph Berhane (Founder)",
    excerpt: {
      en: "When we founded Ternafit, we were determined to do more than deliver aid—we wanted to elevate the voices and stories of Tigray. This blog is a place for resilience, hope, and the power of global solidarity.",
      sv: "När vi grundade Ternafit var vi fast beslutna att göra mer än att leverera bistånd – vi ville lyfta fram Tigrays röster och berättelser. Denna blogg är en plats för motståndskraft, hopp och kraften i global solidaritet."
    },
    imageUrl: "/images/projects/terna-featured-1.webp",
    tags: ["Ternafit", "Founders"],
    content: {
      en: "After a year of advocacy, this blog will document the struggles, hopes and achievements of Ternafit and our wider Tigrayan community. We invite you to read, share, and be a part of this journey with us.",
      sv: "Efter ett år av påverkansarbete kommer denna blogg att dokumentera Ternafits och vårt bredare tigreanska samhälles kamp, förhoppningar och framgångar. Vi inbjuder dig att läsa, dela och vara en del av denna resa med oss."
    }
  },
  {
    id: 2,
    date: "2024-09-27",
    title: {
      en: "Milestones: A Year of Resilience",
      sv: "Milstolpar: Ett år av motståndskraft"
    },
    author: "Ternafit Stories Team",
    excerpt: {
      en: "From launching social media campaigns to reporting from the field, our first year as Ternafit showed what's possible even without big partners. Here's a summary of wins, challenges, and what comes next.",
      sv: "Från att lansera sociala mediekampanjer till att rapportera från fältet, vårt första år som Ternafit visade vad som är möjligt även utan stora partners. Här är en sammanfattning av framgångar, utmaningar och vad som kommer härnäst."
    },
    imageUrl: "/images/projects/support-ternafit.webp",
    tags: ["Milestones", "Impact"],
    content: {
      en: "Your support made all this possible. This piece summarizes where we've been and where we're going, highlighting people and communities at the heart of our mission.",
      sv: "Ditt stöd gjorde allt detta möjligt. Denna text sammanfattar var vi har varit och vart vi är på väg, och lyfter fram människor och samhällen som är kärnan i vårt uppdrag."
    }
  },
];

const BlogPage: React.FC = () => {
  const { t, language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "sv" ? "sv-SE" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Ternafit Blog",
            "description": "Stories, insights, and updates from Ternafit's humanitarian work in Tigray",
            "url": "https://ternafit.org/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Ternafit",
              "url": "https://ternafit.org"
            },
            "blogPost": [
              ...featuredStories.map(story => ({
                "@type": "BlogPosting",
                "headline": story.title[language],
                "description": story.excerpt[language],
                "datePublished": story.date,
                "author": {
                  "@type": "Person",
                  "name": story.author
                },
                "image": story.imageUrl,
                "keywords": story.tags.join(", ")
              })),
              ...blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title[language],
                "description": post.excerpt[language],
                "datePublished": post.date,
                "author": {
                  "@type": "Person",
                  "name": post.author
                },
                "image": post.imageUrl,
                "keywords": post.tags.join(", ")
              }))
            ]
          })}
        </script>
      </Helmet>
      <main>
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/blog/blog-hero.png)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl font-serif font-bold mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t('blog.hero.subtitle')}
            </p>
          </div>
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
                <h2 className="text-2xl font-serif font-bold mb-6">{t('blog.featuredStories')}</h2>
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
                            alt={post.title[language]}
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
                            {post.title[language]}
                          </h2>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt[language]}
                          </p>
                          <div className="prose">
                            {post.content[language].split('\n').map((para, i) => (
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

              {/* Blog Posts from Data */}
              <section>
                <h2 className="text-2xl font-serif font-bold mb-6">{t('blog.latestArticles')}</h2>
                <div className="space-y-7">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md border"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.imageUrl}
                            alt={post.title[language]}
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
                            {post.title[language]}
                          </h2>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt[language]}
                          </p>
                          <Link
                            to={`/blog/${post.slug[language]}`}
                            className="text-terracotta hover:underline font-medium"
                          >
                            Read Full Article →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <hr className="my-10" />
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-1 space-y-6" aria-label="Blog sidebar">
              {/* <DonateBox compact sticky /> */}
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </section>
      </main>
    </>
  );
};

export default BlogPage;