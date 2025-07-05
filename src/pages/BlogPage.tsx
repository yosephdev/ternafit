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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "sv" ? "sv-SE" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              {/* <DonateBox compact sticky /> */}
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;