// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// FINAL IMPORTS: Import motion and related hooks
import { Routes, Route, useLocation } from "react-router-dom"; 
import { AnimatePresence, motion } from "framer-motion";

// Import the necessary pages
import Landing from "./pages/Landing"; 
import Recruiter from "./pages/Recruiter"; 
import Freelance from "./pages/Freelance"; 
import NotFound from "./pages/NotFound";


// Define a simple page animation variant for clean, fast fade-in/out
const pageVariants = {
    initial: { opacity: 0, x: -10 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 10 }
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // AnimatePresence allows components that are removed from the tree to animate out
    <AnimatePresence mode="wait">
      {/* The key tells framer-motion that the component tree has changed */}
      <motion.div
        key={location.pathname} 
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.3 }}
        className="min-h-screen" // Ensure the div takes up space
      >
        <Routes location={location}>
          {/* Use simple element rendering, the motion.div wrapper handles the animation */}
          <Route path="/" element={<Landing />} /> 
          <Route path="/recruiter" element={<Recruiter />} /> 
          <Route path="/freelance" element={<Freelance />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};


const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <AnimatedRoutes /> 
  </TooltipProvider>
);

export default App;