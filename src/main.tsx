import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App.tsx";
import "./index.css";
import React from "react"; 

// Provider for theming (required by shadcn/ui and next-themes)
import { ThemeProvider } from "next-themes";
// 1. Initialize the Query Client
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  // 3. Wrap application in necessary providers
  <ThemeProvider defaultTheme="system" attribute="class" enableSystem disableTransitionOnChange>
    {/* Wrap everything in the QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        {/* Router Fix: Basename must match the repository name EXACTLY */}
        <BrowserRouter basename="/Data-Scientist/">
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </QueryClientProvider>
  </ThemeProvider>
);
