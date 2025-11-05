import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // CHANGED FROM BrowserRouter to HashRouter
import App from "./App.tsx";
import "./index.css";
import React from "react"; 

// Provider for theming (required by shadcn/ui and next-themes)
import { ThemeProvider } from "next-themes";
// 1. Initialize the Query Client
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
const queryClient = new QueryClient();

// FIX: Removed dynamic basePath logic, as HashRouter does not need it.

createRoot(document.getElementById("root")!).render(
  // 3. Wrap application in necessary providers
  <ThemeProvider defaultTheme="system" attribute="class" enableSystem disableTransitionOnChange>
    {/* Wrap everything in the QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        {/* Router Fix: Using HashRouter eliminates 404 issues on GitHub Pages sub-routes */}
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>
    </QueryClientProvider>
  </ThemeProvider>
);