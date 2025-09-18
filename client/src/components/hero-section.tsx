import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/10 rounded-full floating-animation"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/10 rounded-full floating-animation" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-accent/10 rounded-full floating-animation" style={{ animationDelay: "-4s" }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Crafting Digital
            <span className="gradient-text block">Experiences</span>
            That Matter
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We build stunning web applications and mobile apps that drive business growth. 
            From concept to deployment, we're your trusted development partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => handleSmoothScroll("contact")}
              className="btn-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg w-full sm:w-auto flex items-center justify-center gap-2"
              data-testid="hero-start-project"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleSmoothScroll("portfolio")}
              className="border-2 border-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary transition-colors duration-200 w-full sm:w-auto"
              data-testid="hero-view-work"
            >
              View Our Work
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="stats-projects">150+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2" data-testid="stats-clients">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2" data-testid="stats-years">5</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2" data-testid="stats-rating">4.9</div>
              <div className="text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
