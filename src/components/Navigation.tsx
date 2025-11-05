// src/components/Navigation.tsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import dsLogo from "@/assets/ds-logo.png";
import { Link } from "react-router-dom"; 

interface NavigationProps {
    mode: "recruiter" | "freelance"; // Define the new prop
}

interface NavLink {
    label: string;
    id: string;
    external?: boolean; 
    link?: string;      
}

// Helper function to handle the correct absolute path in a sub-directory
const getPath = (path: string) => {
    // Check if we are running in development mode locally
    const isProduction = import.meta.env.PROD;
    
    // If not production, paths start from root '/'
    if (!isProduction) {
        return path;
    }
    
    // If production, prepend the base path for GitHub Pages
    return `/Data-Scientist${path}`;
}


const Navigation = ({ mode }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rootPath = getPath("/");
  const basePath = mode === "recruiter" ? getPath("/recruiter") : getPath("/freelance");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const internalLinks: NavLink[] = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const recruiterLinks: NavLink[] = [
    ...internalLinks,
    // Resume link: Now correctly using your file name.
    { label: "Download Resume", id: "resume", external: true, link: "/Data-Scientist/DS_DHRUV SONI.pdf" } 
  ];

  const freelanceLinks: NavLink[] = [
    ...internalLinks,
    { label: "Services & Pricing", id: "services", external: false, link: "#services" } 
  ];
  
  const activeLinks = mode === "recruiter" ? recruiterLinks : freelanceLinks;


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to={rootPath} 
            className="flex items-center gap-3 group"
          >
            <img src={dsLogo} alt="DS Logo" className="w-10 h-10 group-hover:animate-float" />
            <span className="text-xl font-bold text-primary">DHRUV SONI ({mode.toUpperCase()})</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to={basePath} 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
                Home
            </Link>
            {activeLinks.map((link) => (
              // FIX: Use <a> for external/download links, and style them like buttons.
              link.external ? ( 
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors font-medium" // Same style as other links
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
             <Link 
              to={rootPath} 
              className="block w-full text-left py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
                Home
            </Link>
            {activeLinks.map((link) => (
              // FIX: Use <a> for external/download links in mobile menu too.
              link.external ? ( 
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </button>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;