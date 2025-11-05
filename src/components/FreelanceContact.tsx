// src/components/FreelanceContact.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

// --- IMPORTANT: Update this Formspree Endpoint ---
// Your Formspree link: https://formspree.io/f/xrborlej
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrborlej";

const FreelanceContact = () => {
  return (
    <section id="contact-freelance" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Launch Your Project?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to initiate a discussion. I'll get back to you within 24 hours to discuss the scope and a quote.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border shadow-[var(--glow-gold)] animate-fade-in">
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="name" placeholder="Your Name or Company" required className="h-12" />
                <Input type="email" name="_replyto" placeholder="Your Email Address" required className="h-12" />
              </div>
              
              <Input type="text" name="subject" placeholder="Project Title or Goal (e.g., Build Power BI Dashboard)" required className="h-12" />
              
              <Textarea 
                name="message" 
                placeholder="Briefly describe your project, timeline, and budget (optional)." 
                rows={5} 
                required 
              />
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.01] transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Project Inquiry
              </Button>
            </form>
          </Card>

          <div className="text-center pt-4">
            <div className="flex items-center justify-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground text-lg">
                    Or email directly: <a href="mailto:dhruvsonii1999@gmail.com" className="text-primary font-semibold hover:underline">dhruvsonii1999@gmail.com</a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceContact;