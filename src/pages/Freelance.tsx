// src/pages/Freelance.tsx
import About from "@/components/About";
import Competencies from "@/components/Competencies";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
// These next components still need to be created, but we import them here
import FreelanceHero from "@/components/FreelanceHero"; 
import FreelanceContact from "@/components/FreelanceContact"; 
import Services from "@/components/Services"; 

const Freelance = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation mode="freelance" /> 
      
      <FreelanceHero />
      <About mode="freelance" />
      <Competencies />
      <Services /> 
      <Projects mode="freelance" />
      <Skills mode="freelance" />
      <Education /> 
      <Contact mode="freelance" /> {/* ADDED mode prop - will render null, but keeps structure */}
      <FreelanceContact /> {/* This is the dedicated form */}
      <Footer />
      
      <Footer />
    </div>
  );
};

export default Freelance;