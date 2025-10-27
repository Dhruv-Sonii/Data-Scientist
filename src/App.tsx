import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// REMOVED: BrowserRouter (it is now in main.tsx)
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// NOTE: Since the providers are now split between main.tsx and App.tsx, 
// we will KEEP the QueryClientProvider here, but we MUST DELETE the 
// duplicate one from main.tsx in the next step to prevent nested providers.

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* REMOVED: <BrowserRouter> tag */}
      <Routes>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* REMOVED: </BrowserRouter> tag */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
