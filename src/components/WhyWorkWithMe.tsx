// src/components/WhyWorkWithMe.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Award, DollarSign, Zap } from "lucide-react";

interface WhyWorkWithMeProps {
  mode: "recruiter" | "freelance";
}

const WhyWorkWithMe = ({ mode }: WhyWorkWithMeProps) => {
  // --- Content for Recruiter Mode (Focus: Career, Ethics, Collaboration) ---
  const recruiterContent = {
    heading: "Why You Should Hire Me (Recruiter Focus)",
    strengths: [
      { title: "Deep ML/AI Expertise", desc: "Advanced knowledge in machine learning algorithms and AI implementations" },
      { title: "Strong Ethics", desc: "Committed to data privacy, ethical AI practices, and responsible analytics" },
      { title: "Collaboration Mindset", desc: "Excellent communication skills and ability to work in cross-functional teams" },
      { title: "Practical Problem-Solving", desc: "Focus on delivering real-world solutions that drive business value" },
    ],
    quote:
      "\"Eager to contribute my data science and ML skills to impactful, data-driven business solutions and grow within a structured team.\"",
    goals: [
      {
        icon: Target,
        stage: "Immediate",
        title: "Entry-Level Data Scientist",
        description: "Secure a position to apply and grow my ML/AI expertise",
      },
      {
        icon: TrendingUp,
        stage: "Short-term",
        title: "Domain SME",
        description: "Become a subject matter expert in NLP or Computer Vision",
      },
      {
        icon: Award,
        stage: "Long-term",
        title: "Senior Data Scientist",
        description: "Lead ML projects and drive impactful business solutions",
      },
    ],
    goalTitle: "Career Goals & Ambition"
  };

  // --- Content for Freelance Mode (Focus: ROI, Delivery, Transparency) ---
  const freelanceContent = {
    heading: "Why Hire Me For Your Project (Client Focus)",
    strengths: [
      { title: "ROI-Focused Delivery", desc: "Projects are scoped and delivered based on maximizing your measurable Return on Investment (ROI)." },
      { title: "Transparent Communication", desc: "Clear, constant updates and simplified explanations of complex data work." },
      { title: "Fast, Reliable Turnaround", desc: "Dedicated, project-based focus ensures efficiency and meeting deadlines." },
      { title: "Post-Delivery Support", desc: "Assistance available for integration and initial use of the solution or dashboard." },
    ],
    quote:
      "\"My value isn't just in code; it's in delivering clear, automated systems that give you confidence in your data and decision-making.\"",
    goals: [
        {
            icon: DollarSign,
            stage: "Deliverable 1",
            title: "Profitability Insights",
            description: "Identify key data points for profit optimization and waste reduction.",
          },
          {
            icon: Zap,
            stage: "Deliverable 2",
            title: "Automated Reporting",
            description: "Replace manual, slow reporting with instant, dynamic Power BI dashboards.",
          },
          {
            icon: Target,
            stage: "Deliverable 3",
            title: "Predictive Advantage",
            description: "Implement ML models to forecast trends (sales, risk) ahead of the competition.",
          },
    ],
    goalTitle: "Project Deliverables Focus"
  };

  const activeContent = mode === "recruiter" ? recruiterContent : freelanceContent;

  return (
    <section id="why-me" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">{activeContent.heading}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Strengths / Key Selling Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in mb-12">
            {activeContent.strengths.map((strength, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <h4 className="text-lg font-bold text-primary mb-2">{strength.title}</h4>
                <p className="text-sm text-muted-foreground">{strength.desc}</p>
              </Card>
            ))}
          </div>

          {/* Central Quote */}
          <Card className="p-8 md:p-12 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed text-center italic">
              {activeContent.quote}
            </p>
          </Card>

          {/* Career Goals / Project Deliverables */}
          <div className="space-y-4 animate-fade-in-delayed">
            <h3 className="text-2xl font-bold text-center mb-8">{activeContent.goalTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeContent.goals.map((goal, index) => (
                <Card
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 hover:shadow-[var(--glow-gold)] transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <goal.icon className="w-8 h-8 text-primary group-hover:animate-float" />
                    </div>
                    <Badge className="bg-primary/20 text-primary border-none">{goal.stage}</Badge>
                    <h4 className="text-lg font-bold text-foreground">{goal.title}</h4>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;