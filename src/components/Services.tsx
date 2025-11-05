// src/components/Services.tsx
import { Card } from "@/components/ui/card";
import { Zap, LayoutDashboard, Code, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: LayoutDashboard,
      title: "Power BI Dashboarding",
      description: "From raw SQL data to interactive, stunning dashboards that drive business decisions and track KPIs.",
      tags: ["Data Modeling", "DAX Formulas", "Visual Storytelling"],
    },
    {
      icon: Zap,
      title: "Machine Learning Solutions",
      description: "Implement predictive models (Classification/Regression) to automate forecasting or risk assessment.",
      tags: ["Scikit-learn", "Flask API", "Model Deployment"],
    },
    {
      icon: Code,
      title: "Advanced Data Wrangling (ETL)",
      description: "Custom Python scripts for complex data cleaning, transformation (ETL), and feature engineering.",
      tags: ["Pandas/NumPy", "AWS S3 Integration", "Data Quality Checks"],
    },
    {
      icon: Shield,
      title: "NLP & Text Analysis",
      description: "Extract insights from unstructured text (customer reviews, documents) for sentiment or key topic analysis.",
      tags: ["Sentiment Analysis", "TF-IDF", "Clustering"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">My Service Offerings</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Focused on delivering tangible **Return on Investment (ROI)** for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-fade-in-delayed">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 space-y-4 bg-gradient-to-br from-card to-secondary border-border hover:border-primary/50 hover:shadow-[var(--glow-gold)] transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:animate-float" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {tag}
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

export default Services;