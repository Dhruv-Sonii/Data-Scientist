// src/components/About.tsx
import { Award, BookOpen, TrendingUp, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AboutProps {
    mode: "recruiter" | "freelance";
}

const About = ({ mode }: AboutProps) => {
  const values = [
    { icon: Award, label: "Commitment to Excellence" },
    { icon: BookOpen, label: "Continuous Learning" },
    { icon: TrendingUp, label: "Strong Work Ethic" },
    { icon: Lightbulb, label: "Problem Solving Mindset" },
  ];

  const content = {
    recruiter: (
      <>
        A results-driven <span className="text-primary font-semibold">Data Scientist</span> with a Post Graduate Diploma in Machine Learning and Artificial Intelligence. 
        I transform complex datasets into clear, automated solutions and user-friendly dashboards using ML, NLP, Python, and Power BI. 
        I'm committed to continuous learning, excellence, and delivering measurable business results to support organizational goals.
      </>
    ),
    freelance: (
      <>
        I provide **on-demand Data Science consulting** to businesses looking for rapid, measurable results. Specializing in **Data Cleaning** and building production-ready **Power BI Dashboards**, 
        I help you cut through data complexity to find profitable insights. My focus is efficiency, clear communication, and delivering projects that immediately impact your bottom line.
      </>
    ),
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">{mode === "recruiter" ? "About Me & My Background" : "Focused on Your Business Value"}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content[mode]}
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-delayed">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 hover:shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-2 group"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:animate-float" />
                <h3 className="font-semibold text-foreground">{value.label}</h3>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;