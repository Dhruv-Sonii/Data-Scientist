import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // <-- NEW IMPORT
import App from "./App.tsx";
import "./index.css";
import React from "react"; // Added to use <React.StrictMode>

// This function wraps the main component with the necessary router configuration.
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* CRITICAL FIX: We wrap the App with BrowserRouter and set the basename.
      The basename tells the router that all links should be relative to 
      the GitHub repository path '/dhruvsonii/'.
    */}
    <BrowserRouter basename="/dhruvsonii/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
