import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@shared/schema";

export default function PortfolioSection() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our recent projects and see how we've helped businesses transform 
              their digital presence and achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border animate-pulse">
                <div className="h-64 bg-muted"></div>
                <div className="p-8">
                  <div className="h-4 bg-muted rounded mb-4 w-20"></div>
                  <div className="h-6 bg-muted rounded mb-4"></div>
                  <div className="h-16 bg-muted rounded mb-6"></div>
                  <div className="flex gap-2 mb-6">
                    <div className="h-4 bg-muted rounded w-16"></div>
                    <div className="h-4 bg-muted rounded w-20"></div>
                    <div className="h-4 bg-muted rounded w-14"></div>
                  </div>
                  <div className="h-4 bg-muted rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform 
            their digital presence and achieve their goals.
          </p>
        </div>
        
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects available yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {projects.slice(0, 4).map((project, index) => (
                <div key={project.id} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover" data-testid={`portfolio-card-${index}`}>
                  <img 
                    src={project.image} 
                    alt={`${project.title} interface`} 
                    className="w-full h-64 object-cover" 
                  />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${project.categoryColor}`} data-testid={`project-category-${index}`}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-2xl mb-3" data-testid={`project-title-${index}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6" data-testid={`project-description-${index}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded" data-testid={`project-tech-${index}-${techIndex}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span data-testid={`project-date-${index}`}>{project.date}</span>
                      </div>
                      <Link href={`/case-study/${project.slug}`}>
                        <button className="text-primary font-semibold hover:text-secondary transition-colors duration-200 flex items-center gap-1" data-testid={`project-link-${index}`}>
                          View Case Study
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        
        {/* View All Projects Button */}
        {projects.length > 4 && (
          <div className="text-center">
            <button className="btn-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto" data-testid="view-all-projects">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
