import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App.tsx";
import "./index.css";
import React from "react"; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
// NEW IMPORT: ThemeProvider from next-themes
import { ThemeProvider } from "next-themes";

// 1. Initialize the Query Client outside the component
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 3. FINAL WRAPPER: ThemeProvider */}
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* 2. TanStack Query Provider */}
      <QueryClientProvider client={queryClient}>
          {/* Router Fix (Already done) */}
          <BrowserRouter basename="/dhruvsonii/">
            <App />
          </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
