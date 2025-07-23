import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/data/blogPosts";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const { t, language } = useLanguage();

  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg flex flex-col h-full">
      <CardHeader>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img src={post.imageUrl} alt={post.title[language]} className="object-cover w-full h-full rounded-t-lg" />
        </div>
        <CardTitle className="text-xl font-serif leading-tight">
          <Link to={`${t("path.blogPost")}${post.slug[language]}`} className="hover:text-terracotta transition-colors duration-200">
            {post.title[language]}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt[language]}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
        <span>{post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </CardFooter>
    </Card>
  );
};
