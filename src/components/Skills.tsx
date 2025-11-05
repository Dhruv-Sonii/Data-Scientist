// src/components/Skills.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  mode: "recruiter" | "freelance";
}

const Skills = ({ mode }: SkillsProps) => {
  // Full list of skills for the Recruiter (broad, detailed stack)
  const recruiterSkillCategories = [
    {
      category: "Python & Libraries",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    },
    {
      category: "Machine Learning",
      skills: ["Feature Engineering", "Classification", "Model Evaluation", "Regression"],
    },
    {
      category: "NLP",
      skills: ["Sentiment Analysis", "Keyphrase Extraction", "Text Preprocessing", "Word2Vec", "TF-IDF"],
    },
    {
      category: "Visualization",
      skills: ["Power BI", "Tableau", "Data Storytelling"],
    },
    {
      category: "Cloud & MLOps",
      skills: ["AWS S3", "Flask", "Postman", "Git", "Hadoop", "Spark", "SQL"],
    },
    {
      category: "Deep Learning",
      skills: ["TensorFlow", "Neural Networks"],
    },
  ];

  // Curated, marketable skills for the Freelancer (focus on immediate value & delivery)
  const freelanceSkillCategories = [
    {
      category: "Core Project Delivery",
      skills: ["Power BI (Advanced)", "Data Cleaning", "Data Modeling (Star/Snowflake)", "SQL Query Optimization"],
    },
    {
      category: "Machine Learning / Automation",
      skills: ["Classification", "Regression", "Scikit-learn", "Flask API Development", "Deployment & Testing (Postman)"],
    },
    {
      category: "Python & Data Handling",
      skills: ["Pandas", "NumPy", "Jupyter", "AWS S3 (Data Access)"],
    },
  ];
  
  const skillCategories = mode === "recruiter" ? recruiterSkillCategories : freelanceSkillCategories;
  
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">{mode === "recruiter" ? "Technical Skill Matrix" : "Project Technology Stack"}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            {mode === "freelance" && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    These are the core tools I use to deliver client projects efficiently and reliably.
                </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-delayed">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary/20 text-foreground border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;