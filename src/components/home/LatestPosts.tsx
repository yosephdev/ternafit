import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { BlogPostCard } from "./BlogPostCard";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LatestPosts = () => {
  const { t } = useLanguage();
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-8">From the Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to={t("path.blog")}>
            <Button variant="outline">View All Posts</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
