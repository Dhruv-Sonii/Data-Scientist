// src/components/Contact.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, MapPin } from "lucide-react";

interface ContactProps {
  mode: "recruiter" | "freelance";
}

const Contact = ({ mode }: ContactProps) => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7057582471",
      link: "tel:+917057582471",
    },
    {
      icon: Mail,
      label: "Email",
      value: "dhruvsonii1999@gmail.com",
      link: "mailto:dhruvsonii1999@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Dhruvsoniiii",
      link: "https://github.com/Dhruvsoniiii",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra, India",
      link: null,
    },
  ];

  const contactContent = {
    recruiter: {
      intro: "I am actively seeking a full-time Data Scientist role and welcome discussions regarding my application, resume, or interview scheduling.",
      title: "Let's Connect",
      buttonText: "Schedule an Interview",
      buttonLink: "mailto:dhruvsonii1999@gmail.com?subject=Interview%20Request%20-%20Data%20Scientist",
      availableForTitle: "Seeking Roles:",
      availableFor: [
        "Full-time Data Scientist Roles",
        "Junior ML Engineer Positions",
        "Data Analyst (Advanced)",
        "BI Developer Roles",
      ]
    },
    freelance: {
      intro: "Let's discuss how I can deliver impactful, data-driven solutions for your business. I offer affordable and focused project delivery.",
      title: "Start Your Project",
      buttonText: "Discuss Your Project",
      buttonLink: "/freelance#contact-freelance", // Links to the form on the freelance page
      availableForTitle: "Available For:",
      availableFor: [
        "Freelance Data Science Projects",
        "ML Consulting & Advisory",
        "Power BI Dashboard Development",
        "Advanced Data Cleaning & ETL",
      ]
    }
  };

  const activeContent = contactContent[mode];

  // If in freelance mode, we assume the user already navigated to the dedicated page,
  // so we skip the contact section here to avoid redundancy with FreelanceContact.tsx.
  if (mode === "freelance") {
      // NOTE: The dedicated contact form (FreelanceContact.tsx) is used instead.
      return null; 
  }
  
  // Only Recruiter mode renders this section (Freelance mode uses FreelanceContact.tsx)
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">{activeContent.title}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {activeContent.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 hover:shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-1 group"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <h3 className="text-xl font-bold text-center mb-6">{activeContent.availableForTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {activeContent.availableFor.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center pt-8 animate-fade-in-delayed">
            <Button
              size="lg"
              onClick={() => window.location.href = activeContent.buttonLink}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--glow-gold)] hover:shadow-[var(--glow-gold)] hover:scale-105 transition-all duration-300"
            >
              {activeContent.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;