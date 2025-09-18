import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import { Link, useParams } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${slug}`],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="animate-pulse">
              <div className="h-4 bg-muted rounded mb-8 w-32"></div>
              <div className="h-12 bg-muted rounded mb-6"></div>
              <div className="h-4 bg-muted rounded mb-8 w-64"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="font-display font-bold text-4xl mb-6">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
            <Link href="/blog">
              <button className="btn-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto">
                <ArrowLeft className="w-5 h-5" />
                Back to Blog
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/blog">
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2" data-testid="back-to-blog">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight" data-testid="post-title">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span data-testid="post-author">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span data-testid="post-date">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 min read</span>
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2 mb-8">
                <Tag className="w-5 h-5 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full" data-testid={`post-tag-${index}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none" data-testid="post-content">
            {post.content.split('\\n\\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-display font-semibold text-2xl mt-8 mb-4 text-foreground">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-display font-semibold text-xl mt-6 mb-3 text-foreground">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={index} className="mb-6 leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Enjoyed this article? Check out our other insights and stay updated with the latest in development.
              </p>
              <Link href="/blog">
                <button className="btn-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold" data-testid="more-articles">
                  More Articles
                </button>
              </Link>
            </div>
          </footer>
        </article>
      </div>
      <Footer />
    </div>
  );
}