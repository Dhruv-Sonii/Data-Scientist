import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App.tsx";
import "./index.css";
import React from "react"; 
// NEW IMPORTS FOR TANSTACK QUERY
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 

// 1. Initialize the Query Client outside the component
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 2. Wrap everything in the QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
        {/* Router Fix (Already done) */}
        <BrowserRouter basename="/dhruvsonii/">
          <App />
        </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
