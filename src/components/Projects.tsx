// src/components/Projects.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectsProps {
  mode: "recruiter" | "freelance";
}

const Projects = ({ mode }: ProjectsProps) => {
  const allProjects = [
    {
      title: "Mortgage Fraud Detection",
      domain: "Finance & Risk",
      // Recruiter focus: specific tools, deployment structure
      recruiterDescription:
        "Engineered and deployed an advanced data-driven system for credit risk management. Utilized **AWS S3** for data storage, performed extensive data engineering with **Pandas/NumPy**, and exposed the model via a **Flask API** for real-time scoring.",
      // Freelancer focus: value, benefit, immediate deliverable
      freelanceDescription:
        "Developed a **Credit Risk Assessment dashboard** and ML model, providing clear classification of high-risk cases. Deliverable included a fully functional **Flask API** ready for integration into client platforms.",
      keyFeatures: [
        "Credit Risk Assessment",
        "Real-time Fraud Detection",
        "API Integration",
      ],
      technologies: ["AWS S3", "Python", "Flask", "Pandas", "Matplotlib", "Seaborn"],
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "NLP for Pharmacovigilance",
      domain: "Healthcare & NLP",
      // Recruiter focus: ML techniques, specific libraries
      recruiterDescription:
        "Applied **Natural Language Processing (NLP)** techniques, including **Word2Vec** and **TF-IDF**, to analyze large volumes of patient reports. Developed a clustering model to identify novel Adverse Drug Events (ADE) patterns.",
      // Freelancer focus: problem solved, type of deliverable
      freelanceDescription:
        "Solved the challenge of manual text analysis by deploying a **Sentiment Analysis model**. The solution automatically flags critical adverse drug events and summarizes key topics from patient feedback for faster compliance.",
      keyFeatures: [
        "Sentiment Analysis",
        "Text Preprocessing",
        "Adverse Event Detection",
      ],
      technologies: ["NLP", "Word2Vec", "TF-IDF", "Clustering", "Python", "Scikit-learn"],
      color: "from-green-500/20 to-teal-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">{mode === "recruiter" ? "Featured Projects & Technical Scope" : "Case Studies: Results Delivered"}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            {mode === "freelance" && (
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    See how past projects have delivered automated insights and robust risk management for clients.
                </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-delayed">
            {allProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-gold)]"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="mt-2 border-primary/50 text-primary">
                        {project.domain}
                      </Badge>
                    </div>
                    {/* Placeholder link for project details/live demo */}
                    <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {mode === "recruiter" ? project.recruiterDescription : project.freelanceDescription}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-secondary hover:bg-primary/20 text-foreground border border-border transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;