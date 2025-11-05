// src/pages/Landing.tsx
import { Link } from "react-router-dom";
import { Briefcase, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="max-w-4xl w-full mx-auto text-center space-y-12 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
          Welcome, I'm <span className="text-primary">Dhruv Soni</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Please select the option that best describes your intent. This allows me to provide the most relevant and efficient experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {/* Option 1: Recruiter - FIX: Changed path to just "/recruiter" */}
          <Link to="/recruiter" className="block">
            <Button 
              size="lg" 
              className="w-full h-40 flex flex-col items-center justify-center p-8 space-y-3 
                        bg-card text-card-foreground border-2 border-border 
                        hover:bg-primary/10 hover:border-primary hover:shadow-[var(--glow-gold)] 
                        transition-all duration-300 hover:-translate-y-1"
              variant="outline"
            >
              <Briefcase className="w-10 h-10 text-primary mb-2" />
              <span className="text-2xl font-bold">I'm a Recruiter</span>
              <p className="text-sm text-muted-foreground/80">View my full profile, resume, and experience.</p>
            </Button>
          </Link>

          {/* Option 2: Freelance Client - FIX: Changed path to just "/freelance" */}
          <Link to="/freelance" className="block">
            <Button 
              size="lg" 
              className="w-full h-40 flex flex-col items-center justify-center p-8 space-y-3 
                        bg-card text-card-foreground border-2 border-border 
                        hover:bg-primary/10 hover:border-primary hover:shadow-[var(--glow-gold)] 
                        transition-all duration-300 hover:-translate-y-1"
              variant="outline"
            >
              <DollarSign className="w-10 h-10 text-primary mb-2" />
              <span className="text-2xl font-bold">I Need a Freelancer</span>
              <p className="text-sm text-muted-foreground/80">Explore service offerings, past projects, and contact info.</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;