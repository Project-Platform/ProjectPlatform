import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/auth": {
        target: "http://localhost:3000/",
        changeOrigin: true,
      },
      "/projects": {
        target: "http://localhost:3000/",
        changeOrigin: true,
      },
    },
  },
  define: {
    "process.env": process.env,
  },
});
