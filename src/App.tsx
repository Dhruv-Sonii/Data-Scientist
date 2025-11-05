// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
// Import the necessary pages
import Landing from "./pages/Landing"; 
import Recruiter from "./pages/Recruiter"; // Renamed from Index.tsx
import Freelance from "./pages/Freelance"; // New page created
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Routes>
      {/* FIX: Use relative paths. The basename in main.tsx handles the /Data-Scientist/ prefix */}
      <Route path="/" element={<Landing />} /> 
      
      {/* Recruiter view will now correctly resolve to /recruiter (locally) or /Data-Scientist/recruiter (production) */}
      <Route path="/recruiter" element={<Recruiter />} /> 
      
      {/* Freelance view */}
      <Route path="/freelance" element={<Freelance />} /> 
      
      {/* Catch-all for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </TooltipProvider>
);

export default App;