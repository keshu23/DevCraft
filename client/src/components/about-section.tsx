import { Check } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    bio: "Full-stack expert with 8+ years in React and Node.js",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    roleColor: "text-primary"
  },
  {
    name: "Sarah Chen",
    role: "UX Designer", 
    bio: "Creative designer focused on user-centered experiences",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    roleColor: "text-secondary"
  },
  {
    name: "Mike Rodriguez", 
    role: "Project Manager",
    bio: "Agile expert ensuring projects deliver on time and budget",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    roleColor: "text-accent"
  }
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on code quality and user experience.",
    color: "bg-primary"
  },
  {
    title: "Agile Approach", 
    description: "Fast iterations and continuous improvement for better results.",
    color: "bg-secondary"
  },
  {
    title: "Client Partnership",
    description: "Your success is our success. We work as an extension of your team.",
    color: "bg-accent"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              About <span className="gradient-text">DevCraft</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="about-description">
              We're a passionate team of developers, designers, and digital strategists 
              dedicated to creating exceptional digital experiences that drive business growth.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed" data-testid="about-history">
              Founded in 2019, DevCraft has grown from a small startup to a trusted 
              development partner for businesses of all sizes. Our expertise spans modern 
              web technologies, mobile development, and cloud solutions.
            </p>
            
            {/* Key Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`value-item-${index}`}>
                  <div className={`w-6 h-6 ${value.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    <Check className="text-white text-xs w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1" data-testid={`value-title-${index}`}>
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm" data-testid={`value-description-${index}`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold" data-testid="meet-team-button">
              Meet Our Team
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="DevCraft team working together" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="team-image"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-card rounded-xl p-6 shadow-lg border border-border" data-testid="experience-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
            
            {/* Floating Success Card */}
            <div className="absolute -top-8 -right-8 bg-card rounded-xl p-6 shadow-lg border border-border" data-testid="satisfaction-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Members */}
        <div className="mt-20">
          <h3 className="font-display font-bold text-3xl text-center mb-12" data-testid="team-heading">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center" data-testid={`team-member-${index}`}>
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  data-testid={`team-member-image-${index}`}
                />
                <h4 className="font-semibold text-lg mb-1" data-testid={`team-member-name-${index}`}>
                  {member.name}
                </h4>
                <p className={`${member.roleColor} font-medium mb-2`} data-testid={`team-member-role-${index}`}>
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm" data-testid={`team-member-bio-${index}`}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
