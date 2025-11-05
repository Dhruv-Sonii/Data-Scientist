// src/pages/Recruiter.tsx (Formerly Index.tsx)
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero"; // Does not take 'mode' prop (kept simple)
import About from "@/components/About"; 
import Competencies from "@/components/Competencies"; // Does not take 'mode' prop (kept simple)
import Skills from "@/components/Skills"; 
import Projects from "@/components/Projects"; 
import WhyWorkWithMe from "@/components/WhyWorkWithMe"; 
import Education from "@/components/Education"; // Does not take 'mode' prop (kept simple)
import Contact from "@/components/Contact"; // Does not take 'mode' prop (kept simple)
import Footer from "@/components/Footer"; // Does not take 'mode' prop (kept simple)

const Recruiter = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation mode="recruiter" /> {/* PASSING MODE */}
      <Hero />
      <About mode="recruiter" /> {/* PASSING MODE */}
      <Competencies /> 
      <Skills mode="recruiter" /> {/* PASSING MODE */}
      <Projects mode="recruiter" /> {/* PASSING MODE */}
          <WhyWorkWithMe mode="recruiter" /> 
          <Education />
          <Contact mode="recruiter" /> {/* ADDED mode prop */}
          <Footer />
    </div>
  );
};

export default Recruiter;