// src/pages/Freelance.tsx
import About from "@/components/About";
import Competencies from "@/components/Competencies";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import FreelanceContact from "@/components/FreelanceContact"; 
import FreelanceHero from "@/components/FreelanceHero"; 
import Services from "@/components/Services"; // <-- RE-ENABLED

const Freelance = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation mode="freelance" /> 
      
      <FreelanceHero /> 
      <About mode="freelance" />
      <Competencies />
      <Services /> {/* <-- RE-ENABLED COMPONENT */}
      <Projects mode="freelance" />
      <Skills mode="freelance" />
      <Education /> 
      <FreelanceContact />
      
      <Footer />
    </div>
  );
};

export default Freelance;