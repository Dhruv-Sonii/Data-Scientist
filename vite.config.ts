// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { fileURLToPath } from 'url';

// Utility for getting directory name in ESM projects
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => ({
  // FIX: Base path must be the sub-directory for production, but must be '/' (or equivalent) for HashRouter
  // Since we use HashRouter, we should set the base path to just the repository name
  base: "/Data-Scientist/", 
  
  server: {
    host: "::",
    port: 8080,
  },
  // FINAL FIX: Ensure componentTagger is strictly for development only
  plugins: [
    react(), 
    // This line ensures 'lovable-tagger' is ONLY run during 'npm run dev'
    (mode === "development" ? componentTagger() : null)
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));