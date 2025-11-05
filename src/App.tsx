// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import { AnimatePresence, motion } from "framer-motion"; // NOTE: We will need to install 'framer-motion'
// Import the necessary pages
import Landing from "./pages/Landing"; 
import Recruiter from "./pages/Recruiter"; 
import Freelance from "./pages/Freelance"; 
import NotFound from "./pages/NotFound";

// Component to wrap the route content with a transition
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // AnimatePresence allows components that are removed from the tree to animate out
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Wrap each Route element in the motion.div for animation */}
        <Route path="/" element={<MotionPage><Landing /></MotionPage>} /> 
        <Route path="/recruiter" element={<MotionPage><Recruiter /></MotionPage>} /> 
        <Route path="/freelance" element={<MotionPage><Freelance /></MotionPage>} /> 
        <Route path="*" element={<MotionPage><NotFound /></MotionPage>} />
      </Routes>
    </AnimatePresence>
  );
};

// Motion wrapper for reusable page transition
const MotionPage = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {children}
    </motion.div>
);


const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <AnimatedRoutes /> {/* Use the new AnimatedRoutes component */}
  </TooltipProvider>
);

export default App;