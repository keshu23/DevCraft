import { ExternalLink, Calendar, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Fashion Forward Store",
    description: "A modern e-commerce platform built for a fashion retailer, featuring advanced filtering, wishlist functionality, and seamless checkout experience.",
    category: "E-commerce",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    categoryColor: "text-accent bg-accent/10"
  },
  {
    title: "FitTrack Pro",
    description: "Cross-platform fitness tracking app with real-time workout monitoring, social features, and personalized training plans for health enthusiasts.",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "HealthKit", "Charts"],
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    categoryColor: "text-secondary bg-secondary/10"
  },
  {
    title: "Analytics Pro",
    description: "Comprehensive business analytics platform with real-time data visualization, custom reporting, and predictive insights for enterprise clients.",
    category: "SaaS Platform", 
    technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    categoryColor: "text-primary bg-primary/10"
  },
  {
    title: "PropertyHub",
    description: "Modern real estate platform with advanced search filters, virtual tours, and integrated CRM system for property management companies.",
    category: "Real Estate",
    technologies: ["Angular", "AWS", "Maps API", "WebRTC"],
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    categoryColor: "text-success bg-success/10"
  }
];

export default function PortfolioSection() {
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
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover" data-testid={`portfolio-card-${index}`}>
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
                  <button className="text-primary font-semibold hover:text-secondary transition-colors duration-200 flex items-center gap-1" data-testid={`project-view-case-${index}`}>
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center">
          <button className="btn-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto" data-testid="view-all-projects">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
