import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Caminhos relativos facilitam a futura publicação no GitHub Pages.
  base: "./",
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
