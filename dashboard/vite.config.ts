import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The bridge serves the built bundle from dashboard/dist, so asset paths must
// be relative. In dev, the WebSocket and /healthz are proxied to the Python
// bridge on 8787 so the page can be served by Vite and still talk to the sim.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: { outDir: "dist", sourcemap: true, chunkSizeWarningLimit: 1200 },
  server: {
    port: 5173,
    proxy: {
      "/ws": { target: "ws://127.0.0.1:8787", ws: true },
      "/healthz": { target: "http://127.0.0.1:8787" },
      "/api": { target: "http://127.0.0.1:8787" },
    },
  },
});
