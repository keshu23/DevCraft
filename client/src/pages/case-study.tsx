import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar, ExternalLink, Tag, CheckCircle } from "lucide-react";
import { Link, useParams } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import type { Project } from "@shared/schema";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: project, isLoading, error } = useQuery<Project>({
    queryKey: [`/api/projects/${slug}`],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="animate-pulse">
              <div className="h-4 bg-muted rounded mb-8 w-32"></div>
              <div className="h-12 bg-muted rounded mb-6"></div>
              <div className="h-64 bg-muted rounded mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="h-6 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="font-display font-bold text-4xl mb-6">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find the case study you're looking for.</p>
            <Link href="/">
              <button className="btn-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/#portfolio">
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2" data-testid="back-to-portfolio">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </button>
            </Link>
          </div>

          {/* Project Header */}
          <header className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${project.categoryColor}`} data-testid="project-category">
                    {project.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span data-testid="project-date">{project.date}</span>
                  </div>
                </div>
                
                <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight" data-testid="project-title">
                  {project.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="project-description">
                  {project.detailedDescription || project.description}
                </p>

                {project.projectUrl && (
                  <a 
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    data-testid="project-link"
                  >
                    View Live Project
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Project Details Sidebar */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
                  {project.clientName && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Client</h3>
                      <p className="text-muted-foreground" data-testid="project-client">{project.clientName}</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded" data-testid={`project-tech-${index}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Project Type</h3>
                    <p className="text-muted-foreground">{project.category}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Completion</h3>
                    <p className="text-muted-foreground">{project.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Project Image */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
                data-testid="project-image"
              />
            </div>
          </div>

          {/* Project Details Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Challenge Section */}
              {project.challenge && (
                <section>
                  <h2 className="font-display font-bold text-3xl mb-6">The Challenge</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed" data-testid="project-challenge">
                      {project.challenge}
                    </p>
                  </div>
                </section>
              )}

              {/* Solution Section */}
              {project.solution && (
                <section>
                  <h2 className="font-display font-bold text-3xl mb-6">Our Solution</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed" data-testid="project-solution">
                      {project.solution}
                    </p>
                  </div>
                </section>
              )}

              {/* Additional Images */}
              {project.images && project.images.length > 1 && (
                <section>
                  <h2 className="font-display font-bold text-3xl mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full h-64 object-cover"
                          data-testid={`project-gallery-image-${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Results Section */}
              {project.results && (
                <section>
                  <h2 className="font-display font-bold text-3xl mb-6">Results & Impact</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed" data-testid="project-results">
                      {project.results}
                    </p>
                  </div>
                </section>
              )}
            </div>

            {/* Related Projects Sidebar */}
            <div className="lg:sticky lg:top-24">
              <RelatedProjects currentProjectId={project.id} currentCategory={project.category} />
            </div>
          </div>

          {/* Call to Action */}
          <section className="mt-20 pt-16 border-t border-border text-center">
            <h2 className="font-display font-bold text-3xl mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with the same level of excellence and attention to detail.
            </p>
            <Link href="/#contact">
              <button className="btn-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg" data-testid="project-cta">
                Start Your Project
              </button>
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function RelatedProjects({ currentProjectId, currentCategory }: { currentProjectId: number; currentCategory: string }) {
  const { data: projects = [] } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const relatedProjects = projects
    .filter(project => project.id !== currentProjectId && project.category === currentCategory)
    .slice(0, 3);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-display font-bold text-xl mb-6">Related Projects</h3>
      <div className="space-y-4">
        {relatedProjects.map((project, index) => (
          <Link key={project.id} href={`/case-study/${project.slug}`}>
            <div className="group cursor-pointer" data-testid={`related-project-${index}`}>
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}