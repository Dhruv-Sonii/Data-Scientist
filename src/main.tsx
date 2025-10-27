import { createRoot } from "react-dom/client";
// 1. Keep BrowserRouter for deployment fix
import { BrowserRouter } from "react-router-dom"; 
import App from "./App.tsx";
import "./index.css";
import React from "react"; 
// REMOVED: QueryClient and QueryClientProvider imports
import { ThemeProvider } from "next-themes";

// REMOVED: QueryClient initialization

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* ThemeProvider (Kept) */}
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* REMOVED QueryClientProvider */}
      
        {/* Router Fix (Kept) */}
        <BrowserRouter basename="/dhruvsonii/">
          <App />
        </BrowserRouter>
        
      {/* REMOVED QueryClientProvider closing tag */}
    </ThemeProvider>
  </React.StrictMode>
);
