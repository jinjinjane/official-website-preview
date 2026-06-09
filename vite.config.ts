import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base:
    process.env.CI_PROJECT_PATH === "janie/official_website_preview"
      ? "/official_website_preview/"
      : "/",
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".loca.lt"],
    hmr: {
      overlay: false,
    },
  },
  preview: {
    allowedHosts: [".lhr.life", ".serveousercontent.com", ".trycloudflare.com"],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
}));
