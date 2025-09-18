import { db } from "./db";
import { blogPosts, projects, teamMembers, services } from "@shared/schema";

async function seedDatabase() {
  console.log("🌱 Seeding database...");

  // Seed blog posts
  await db.insert(blogPosts).values([
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      slug: "future-web-development-trends-2024",
      content: "As we move through 2024, the web development landscape continues to evolve at a rapid pace. In this post, we'll explore the key trends that are shaping the future of web development and how businesses can leverage them to stay competitive.\n\n## Progressive Web Apps (PWAs) Take Center Stage\n\nPWAs continue to gain traction as they bridge the gap between web and mobile applications. They offer native app-like experiences while maintaining the accessibility and reach of web applications.\n\n## AI Integration Becomes Standard\n\nArtificial Intelligence is no longer a luxury but a necessity. From chatbots to personalized user experiences, AI integration is becoming standard practice in modern web development.\n\n## Performance Optimization Remains Critical\n\nWith Core Web Vitals becoming increasingly important for SEO, performance optimization techniques like lazy loading, code splitting, and efficient caching strategies are more crucial than ever.",
      excerpt: "Explore the key trends shaping web development in 2024, from Progressive Web Apps to AI integration and performance optimization strategies.",
      author: "Alex Johnson",
      isPublished: true,
      tags: ["web development", "trends", "2024", "pwa", "ai"],
      metaTitle: "Future of Web Development: 2024 Trends | DevCraft Blog",
      metaDescription: "Discover the latest web development trends for 2024 including PWAs, AI integration, and performance optimization. Stay ahead with DevCraft insights."
    },
    {
      title: "Building Scalable Mobile Apps: A Complete Guide",
      slug: "building-scalable-mobile-apps-guide",
      content: "Creating mobile applications that can scale effectively is crucial for long-term success. This comprehensive guide covers everything you need to know about building scalable mobile apps from the ground up.\n\n## Architecture Considerations\n\nThe foundation of any scalable mobile app lies in its architecture. We'll explore various architectural patterns including Clean Architecture, MVVM, and Redux patterns.\n\n## Database Design for Scale\n\nEfficient database design is crucial for mobile app performance. Learn about local storage strategies, data synchronization, and offline-first approaches.\n\n## Performance Optimization Techniques\n\nFrom image optimization to efficient API calls, discover the techniques that will keep your app running smoothly as your user base grows.",
      excerpt: "A comprehensive guide to building mobile applications that can scale effectively, covering architecture, database design, and performance optimization.",
      author: "Sarah Chen",
      isPublished: true,
      tags: ["mobile development", "scalability", "architecture", "performance"],
      metaTitle: "Building Scalable Mobile Apps: Complete Guide | DevCraft",
      metaDescription: "Learn how to build scalable mobile applications with our comprehensive guide covering architecture, database design, and performance optimization."
    },
    {
      title: "UI/UX Design Principles That Drive Conversions",
      slug: "ui-ux-design-principles-conversions",
      content: "Great design isn't just about aesthetics—it's about creating experiences that convert visitors into customers. Let's explore the UI/UX design principles that can significantly boost your conversion rates.\n\n## The Psychology of Color in Design\n\nColors evoke emotions and influence decisions. Understanding color psychology can help you design interfaces that guide users toward desired actions.\n\n## Simplicity Wins Every Time\n\nThe best interfaces are invisible. Users shouldn't have to think about how to use your product—it should be intuitive and effortless.\n\n## Data-Driven Design Decisions\n\nLearn how to use analytics and user testing to inform your design decisions and continuously improve your conversion rates.",
      excerpt: "Discover the UI/UX design principles that can significantly boost your conversion rates and create better user experiences.",
      author: "Sarah Chen",
      isPublished: true,
      tags: ["ui design", "ux design", "conversions", "psychology"],
      metaTitle: "UI/UX Design Principles for Higher Conversions | DevCraft",
      metaDescription: "Learn UI/UX design principles that drive conversions. Boost your website's performance with expert design strategies from DevCraft."
    }
  ]);

  // Seed projects with detailed case studies
  await db.insert(projects).values([
    {
      title: "Fashion Forward Store",
      slug: "fashion-forward-store",
      description: "A modern e-commerce platform built for a fashion retailer, featuring advanced filtering, wishlist functionality, and seamless checkout experience.",
      detailedDescription: "Fashion Forward Store represents a complete digital transformation for a growing fashion retailer. This project involved building a custom e-commerce platform from the ground up, focusing on user experience and conversion optimization.",
      category: "E-commerce",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
      ],
      categoryColor: "text-accent bg-accent/10",
      clientName: "Fashion Forward Inc.",
      projectUrl: "https://fashionforward.example.com",
      challenge: "The client needed a modern e-commerce platform that could handle their growing inventory while providing an exceptional user experience. Their existing platform was outdated and couldn't scale with their business needs.",
      solution: "We built a custom React-based e-commerce platform with advanced filtering capabilities, real-time inventory management, and an optimized checkout process. The platform includes wishlist functionality, product recommendations, and seamless payment integration with Stripe.",
      results: "The new platform resulted in a 40% increase in conversion rates and a 60% reduction in cart abandonment. Load times improved by 70%, and the client reported significantly improved customer satisfaction scores.",
      isPublished: true
    },
    {
      title: "FitTrack Pro",
      slug: "fittrack-pro",
      description: "Cross-platform fitness tracking app with real-time workout monitoring, social features, and personalized training plans for health enthusiasts.",
      detailedDescription: "FitTrack Pro is a comprehensive fitness tracking application that combines real-time workout monitoring with social features and AI-powered personalized training recommendations.",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "HealthKit", "Charts"],
      date: "February 2024",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
      ],
      categoryColor: "text-secondary bg-secondary/10",
      clientName: "FitTech Solutions",
      challenge: "The fitness industry needed a comprehensive app that could track workouts, provide personalized training plans, and foster community engagement among users.",
      solution: "We developed a cross-platform mobile app using React Native that integrates with HealthKit and Google Fit. The app features real-time workout tracking, AI-powered training recommendations, social features for community building, and comprehensive progress analytics.",
      results: "The app achieved over 50,000 downloads in the first three months and maintains a 4.8-star rating. User engagement metrics show 85% weekly retention and an average session time of 25 minutes.",
      isPublished: true
    },
    {
      title: "Analytics Pro",
      slug: "analytics-pro",
      description: "Comprehensive business analytics platform with real-time data visualization, custom reporting, and predictive insights for enterprise clients.",
      detailedDescription: "Analytics Pro is an enterprise-grade business intelligence platform that transforms complex data into actionable insights through advanced visualization and predictive analytics.",
      category: "SaaS Platform",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
      ],
      categoryColor: "text-primary bg-primary/10",
      clientName: "DataCorp Enterprise",
      challenge: "Enterprise clients needed a unified platform to visualize complex business data from multiple sources and generate actionable insights for strategic decision-making.",
      solution: "We built a comprehensive analytics platform using Vue.js and Python that integrates with multiple data sources. The platform features real-time dashboards, custom report generation, predictive analytics powered by machine learning, and collaborative tools for team insights.",
      results: "The platform processes over 1TB of data daily across 50+ enterprise clients. It has reduced report generation time by 80% and improved data-driven decision making efficiency by 65%.",
      isPublished: true
    },
    {
      title: "PropertyHub",
      slug: "propertyhub",
      description: "Modern real estate platform with advanced search filters, virtual tours, and integrated CRM system for property management companies.",
      detailedDescription: "PropertyHub revolutionizes the real estate industry with an all-in-one platform that combines property listings, virtual tours, and comprehensive CRM functionality.",
      category: "Real Estate",
      technologies: ["Angular", "AWS", "Maps API", "WebRTC"],
      date: "December 2023",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
      ],
      categoryColor: "text-success bg-success/10",
      clientName: "Premier Properties Group",
      challenge: "Real estate companies needed a modern platform that could showcase properties effectively while managing leads and client relationships in one integrated system.",
      solution: "We developed a comprehensive real estate platform using Angular and AWS that includes advanced property search with map integration, 360° virtual tours using WebRTC, and a complete CRM system for lead management and client communication.",
      results: "The platform increased lead conversion rates by 35% and reduced time-to-close by 20%. Virtual tours reduced unnecessary property visits by 45%, saving time for both agents and clients.",
      isPublished: true
    }
  ]);

  // Seed team members
  await db.insert(teamMembers).values([
    {
      name: "Alex Johnson",
      slug: "alex-johnson",
      role: "Lead Developer",
      bio: "Full-stack expert with 8+ years in React and Node.js",
      detailedBio: "Alex is a seasoned full-stack developer with over 8 years of experience building scalable web applications. He specializes in React, Node.js, and cloud architecture. Alex has led development teams on projects ranging from startup MVPs to enterprise-scale applications. He's passionate about clean code, performance optimization, and mentoring junior developers.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      roleColor: "text-primary",
      skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "GraphQL"],
      experience: "8+ years",
      email: "alex@devcraft.agency",
      linkedinUrl: "https://linkedin.com/in/alexjohnson",
      githubUrl: "https://github.com/alexjohnson",
      isActive: true
    },
    {
      name: "Sarah Chen",
      slug: "sarah-chen",
      role: "UX Designer",
      bio: "Creative designer focused on user-centered experiences",
      detailedBio: "Sarah is a talented UX designer with a background in psychology and design thinking. She has 6+ years of experience creating user-centered designs for both web and mobile applications. Sarah specializes in user research, prototyping, and design systems. Her work has helped increase conversion rates and user satisfaction across numerous projects.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      roleColor: "text-secondary",
      skills: ["User Research", "Figma", "Design Systems", "Prototyping", "A/B Testing", "Accessibility"],
      experience: "6+ years",
      email: "sarah@devcraft.agency",
      linkedinUrl: "https://linkedin.com/in/sarahchen",
      isActive: true
    },
    {
      name: "Mike Rodriguez",
      slug: "mike-rodriguez",
      role: "Project Manager",
      bio: "Agile expert ensuring projects deliver on time and budget",
      detailedBio: "Mike is a certified Project Management Professional (PMP) with over 7 years of experience managing complex software development projects. He specializes in Agile methodologies and has successfully delivered projects ranging from $50K to $2M+. Mike ensures clear communication between clients and development teams while maintaining project timelines and quality standards.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
      roleColor: "text-accent",
      skills: ["Agile/Scrum", "Risk Management", "Stakeholder Communication", "Budget Management", "Quality Assurance"],
      experience: "7+ years",
      email: "mike@devcraft.agency",
      linkedinUrl: "https://linkedin.com/in/mikerodriguez",
      isActive: true
    }
  ]);

  // Seed services
  await db.insert(services).values([
    {
      title: "Web Development",
      slug: "web-development",
      description: "Custom web applications built with modern technologies. Responsive design, blazing-fast performance, and seamless user experiences across all devices.",
      detailedDescription: "Our web development services cover the full spectrum of modern web application development. We build custom solutions using cutting-edge technologies like React, Vue.js, and Angular for the frontend, paired with robust backend technologies including Node.js, Python, and PHP. Every project includes responsive design, performance optimization, SEO implementation, and comprehensive testing to ensure your web application delivers exceptional user experiences across all devices and browsers.",
      technologies: ["React, Vue, Angular", "Node.js, Python, PHP", "Cloud Deployment"],
      gradient: "from-primary to-secondary",
      icon: "Laptop",
      features: ["Responsive Design", "Performance Optimization", "SEO Implementation", "Cross-browser Compatibility", "Progressive Web Apps", "API Integration"],
      startingPrice: "$5,000",
      deliveryTime: "4-8 weeks",
      isActive: true,
      metaTitle: "Professional Web Development Services | DevCraft",
      metaDescription: "Custom web development services with modern technologies. We build responsive, fast, and user-friendly web applications that drive business growth."
    },
    {
      title: "Mobile App Development",
      slug: "mobile-app-development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android platforms with optimal performance.",
      detailedDescription: "Transform your ideas into powerful mobile applications with our comprehensive mobile development services. We specialize in both native development (Swift for iOS, Kotlin for Android) and cross-platform solutions using React Native and Flutter. Our mobile apps are designed for performance, user engagement, and scalability, including features like offline functionality, push notifications, and seamless integration with device capabilities.",
      technologies: ["React Native, Flutter", "iOS & Android Native", "App Store Deployment"],
      gradient: "from-secondary to-accent",
      icon: "Smartphone",
      features: ["Cross-platform Development", "Native Performance", "App Store Optimization", "Push Notifications", "Offline Functionality", "Device Integration"],
      startingPrice: "$8,000",
      deliveryTime: "6-12 weeks",
      isActive: true,
      metaTitle: "Mobile App Development Services | iOS & Android | DevCraft",
      metaDescription: "Expert mobile app development for iOS and Android. Native and cross-platform solutions with exceptional user experiences and optimal performance."
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "User-centered design that combines beautiful aesthetics with intuitive functionality. We create designs that users love and businesses trust.",
      detailedDescription: "Our UI/UX design services focus on creating exceptional user experiences that drive engagement and conversions. We combine user research, design thinking, and industry best practices to create intuitive interfaces that delight users. Our process includes user journey mapping, wireframing, prototyping, and comprehensive design systems that ensure consistency across all touchpoints.",
      technologies: ["User Research & Testing", "Wireframing & Prototyping", "Design Systems"],
      gradient: "from-accent to-primary",
      icon: "Palette",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing", "Brand Integration", "Accessibility Design"],
      startingPrice: "$3,000",
      deliveryTime: "3-6 weeks",
      isActive: true,
      metaTitle: "Professional UI/UX Design Services | DevCraft",
      metaDescription: "User-centered UI/UX design services that combine beautiful aesthetics with intuitive functionality. Create designs that users love and drive conversions."
    },
    {
      title: "E-commerce Solutions",
      slug: "ecommerce-solutions",
      description: "Complete e-commerce platforms that drive sales. From catalog management to payment processing, we build stores that convert visitors to customers.",
      detailedDescription: "Launch and scale your online business with our comprehensive e-commerce solutions. We build custom e-commerce platforms and integrate with popular platforms like Shopify and WooCommerce. Our solutions include inventory management, payment processing, order fulfillment, customer management, and analytics. We focus on conversion optimization and user experience to maximize your online sales.",
      technologies: ["Shopify, WooCommerce", "Payment Integration", "Inventory Management"],
      gradient: "from-success to-accent",
      icon: "ShoppingCart",
      features: ["Custom E-commerce Development", "Payment Gateway Integration", "Inventory Management", "Order Fulfillment", "Customer Management", "Analytics & Reporting"],
      startingPrice: "$7,000",
      deliveryTime: "6-10 weeks",
      isActive: true,
      metaTitle: "E-commerce Development Services | Online Store Solutions | DevCraft",
      metaDescription: "Complete e-commerce solutions that drive sales. Custom online stores with payment processing, inventory management, and conversion optimization."
    },
    {
      title: "DevOps & Cloud",
      slug: "devops-cloud",
      description: "Scalable cloud infrastructure and automated deployment pipelines. Keep your applications running smoothly with our DevOps expertise.",
      detailedDescription: "Optimize your development workflow and scale your applications with our DevOps and cloud services. We help businesses migrate to the cloud, implement CI/CD pipelines, and establish robust infrastructure that scales with growth. Our services include cloud architecture design, automated deployment, monitoring, security implementation, and cost optimization across AWS, Google Cloud, and Azure platforms.",
      technologies: ["AWS, Google Cloud, Azure", "CI/CD Pipelines", "Monitoring & Security"],
      gradient: "from-primary to-accent",
      icon: "Cloud",
      features: ["Cloud Migration", "CI/CD Implementation", "Infrastructure as Code", "Monitoring & Alerting", "Security Implementation", "Cost Optimization"],
      startingPrice: "$4,000",
      deliveryTime: "4-8 weeks",
      isActive: true,
      metaTitle: "DevOps & Cloud Services | AWS, Google Cloud, Azure | DevCraft",
      metaDescription: "Professional DevOps and cloud services. Scalable infrastructure, automated deployments, and cloud migration expertise for modern applications."
    },
    {
      title: "Technical Consultation",
      slug: "technical-consultation",
      description: "Strategic technology consulting to help you make informed decisions. From architecture planning to technology stack selection.",
      detailedDescription: "Make informed technology decisions with our expert technical consultation services. Our experienced consultants help businesses evaluate technology options, plan system architecture, conduct code reviews, and develop technology roadmaps. Whether you're starting a new project, optimizing existing systems, or planning for scale, our consultation services provide the strategic guidance you need.",
      technologies: ["Technology Assessment", "Architecture Planning", "Code Review"],
      gradient: "from-secondary to-primary",
      icon: "Handshake",
      features: ["Technology Assessment", "Architecture Planning", "Code Review", "Performance Optimization", "Security Audit", "Technology Roadmap"],
      startingPrice: "$200/hour",
      deliveryTime: "1-4 weeks",
      isActive: true,
      metaTitle: "Technical Consultation Services | Technology Strategy | DevCraft",
      metaDescription: "Strategic technology consulting services. Expert guidance on architecture planning, technology selection, and code review for informed decisions."
    }
  ]);

  console.log("✅ Database seeded successfully!");
}

// Run seed if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
    .then(() => {
      console.log("Seeding completed!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Seeding failed:", error);
      process.exit(1);
    });
}

export { seedDatabase };