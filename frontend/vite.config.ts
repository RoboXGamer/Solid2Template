import { fileRoutes } from "filesystem-routing/vite";
import { defineConfig } from "vite";
import solid from "@solidjs/vite-plugin";

export default defineConfig({
  plugins: [
    solid({ start: true }), // add `ssr: true` for streaming SSR
    fileRoutes({ types: true }),
  ],
  server: {
    host: "127.0.0.1",
    proxy: { "/api": "http://127.0.0.1:3001" },
  },
  build: { target: "esnext" },
});
