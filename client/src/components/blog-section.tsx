import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "wouter";
import type { BlogPost } from "@shared/schema";

export default function BlogSection() {
  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return (
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from our development experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border animate-pulse">
                <div className="h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="h-6 bg-muted rounded mb-4"></div>
                  <div className="h-16 bg-muted rounded mb-4"></div>
                  <div className="h-4 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our development experts.
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No blog posts available yet. Check back soon!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.slice(0, 3).map((post, index) => (
                <article key={post.id} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover" data-testid={`blog-post-${index}`}>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span data-testid={`post-author-${index}`}>{post.author}</span>
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      <span data-testid={`post-date-${index}`}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-semibold text-xl mb-3 line-clamp-2" data-testid={`post-title-${index}`}>
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`post-excerpt-${index}`}>
                      {post.excerpt}
                    </p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded" data-testid={`post-tag-${index}-${tagIndex}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>5 min read</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <button className="text-primary font-semibold hover:text-secondary transition-colors duration-200 flex items-center gap-1" data-testid={`post-read-more-${index}`}>
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {posts.length > 3 && (
              <div className="text-center">
                <Link href="/blog">
                  <button className="btn-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto" data-testid="view-all-posts">
                    View All Posts
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}