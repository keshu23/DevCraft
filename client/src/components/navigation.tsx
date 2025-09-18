import { useState, useEffect } from "react";
import { Code } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? "bg-card/90 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code className="text-white text-sm" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">DevCraft</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleSmoothScroll("services")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => handleSmoothScroll("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => handleSmoothScroll("about")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => handleSmoothScroll("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <button 
              onClick={() => handleSmoothScroll("contact")}
              className="btn-primary text-primary-foreground px-6 py-2 rounded-lg font-medium"
              data-testid="nav-get-started"
            >
              Get Started
            </button>
          </div>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleSmoothScroll("services")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => handleSmoothScroll("portfolio")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="mobile-nav-portfolio"
              >
                Portfolio
              </button>
              <button
                onClick={() => handleSmoothScroll("about")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => handleSmoothScroll("contact")}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <button
                onClick={() => handleSmoothScroll("contact")}
                className="block w-full mt-2 btn-primary text-primary-foreground px-6 py-2 rounded-lg font-medium"
                data-testid="mobile-nav-get-started"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
