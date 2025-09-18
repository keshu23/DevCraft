import { Laptop, Smartphone, Palette, ShoppingCart, Cloud, Handshake, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Web Development",
    description: "Custom web applications built with modern technologies. Responsive design, blazing-fast performance, and seamless user experiences across all devices.",
    technologies: ["React, Vue, Angular", "Node.js, Python, PHP", "Cloud Deployment"],
    gradient: "from-primary to-secondary"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android platforms with optimal performance.",
    technologies: ["React Native, Flutter", "iOS & Android Native", "App Store Deployment"],
    gradient: "from-secondary to-accent"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines beautiful aesthetics with intuitive functionality. We create designs that users love and businesses trust.",
    technologies: ["User Research & Testing", "Wireframing & Prototyping", "Design Systems"],
    gradient: "from-accent to-primary"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms that drive sales. From catalog management to payment processing, we build stores that convert visitors to customers.",
    technologies: ["Shopify, WooCommerce", "Payment Integration", "Inventory Management"],
    gradient: "from-success to-accent"
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Scalable cloud infrastructure and automated deployment pipelines. Keep your applications running smoothly with our DevOps expertise.",
    technologies: ["AWS, Google Cloud, Azure", "CI/CD Pipelines", "Monitoring & Security"],
    gradient: "from-primary to-accent"
  },
  {
    icon: Handshake,
    title: "Technical Consultation",
    description: "Strategic technology consulting to help you make informed decisions. From architecture planning to technology stack selection.",
    technologies: ["Technology Assessment", "Architecture Planning", "Code Review"],
    gradient: "from-secondary to-primary"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive development solutions tailored to your business needs, 
            from responsive websites to native mobile applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg card-hover border border-border" data-testid={`service-card-${index}`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className="text-white text-2xl w-8 h-8" />
              </div>
              <h3 className="font-display font-semibold text-2xl mb-4" data-testid={`service-title-${index}`}>{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <div className="space-y-2 mb-6">
                {service.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center text-sm text-muted-foreground">
                    <Check className="text-success mr-2 w-4 h-4" />
                    {tech}
                  </div>
                ))}
              </div>
              <button className="text-primary font-semibold hover:text-secondary transition-colors duration-200 flex items-center gap-1" data-testid={`service-learn-more-${index}`}>
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
