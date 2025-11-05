// src/pages/Freelance.tsx
import About from "@/components/About";
import Competencies from "@/components/Competencies";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import FreelanceContact from "@/components/FreelanceContact"; 
// import FreelanceHero from "@/components/FreelanceHero"; // DEBUG: Temporarily commented out
// import Services from "@/components/Services";           // DEBUG: Temporarily commented out

const Freelance = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation mode="freelance" /> 
      
      {/* <FreelanceHero /> */} {/* DEBUG: Temporarily commented out */}
      <About mode="freelance" />
      <Competencies />
      {/* <Services /> */} {/* DEBUG: Temporarily commented out */}
      <Projects mode="freelance" />
      <Skills mode="freelance" />
      <Education /> 
      {/* The original Contact component will return null when mode="freelance" */}
      {/* The FreelanceContact component is being used instead, so we keep it */}
      <FreelanceContact />
      
      <Footer />
    </div>
  );
};

export default Freelance;