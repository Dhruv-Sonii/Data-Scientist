// src/components/FreelanceHero.tsx
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg"; // Re-use the existing background

const FreelanceHero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact-freelance");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero-freelance" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Data Visualization Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-primary">Data Science</span> on Demand
            <br />
            For Your Next Project
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delayed">
            **Stop Guessing, Start Growing.** Get clear, profitable insights with an expert Data Scientist specializing in **Power BI & ML Implementations**.
            <br />
            <span className="text-primary/80">Affordable, fast, and results-focused.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in-delayed">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--glow-gold)] hover:shadow-[var(--glow-gold)] hover:scale-105 transition-all duration-300 group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToContact()}
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <MessageSquare className="mr-2" />
              Discuss Scope
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceHero;