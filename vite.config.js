import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import staticFallback from "./build/static-fallback.js";

export default defineConfig({
  base: "./",
  // staticFallback writes a readable catalogue of the collection into #root
  // at build time (see build/static-fallback.js); React replaces it when it
  // mounts.
  plugins: [react(), staticFallback()],
});
