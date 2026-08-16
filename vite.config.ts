import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Served from https://golisrikanth1989.github.io/MyPerWB/ (GitHub Pages
  // project page). If you switch to a custom domain or a user/org root page
  // (username.github.io repo), change this back to "/".
  base: "/MyPerWB/",
  plugins: [react()],
});
