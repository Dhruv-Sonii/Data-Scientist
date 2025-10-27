import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// REMOVED: QueryClient, QueryClientProvider import
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// REMOVED: const queryClient = new QueryClient();

// NOTE: All Providers (Theme, QueryClient) and the BrowserRouter are now in main.tsx.
// This component only contains the UI providers and the Routes.

const App = () => (
  // REMOVED: <QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <Toaster />
    <Sonner />
    {/* REMOVED: <BrowserRouter> tag */}
    <Routes>
      <Route path="/" element={<Index />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </TooltipProvider>
  // REMOVED: </QueryClientProvider>
);

export default App;