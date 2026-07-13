import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./",
  server: {
    port: 8090,
    host: true,
    strictPort: true,
    open: false,
    watch: {
      usePolling: process.env.CHOKIDAR_USEPOLLING === "true",
    },
    hmr: {
      host: "localhost",
      clientPort: 8090,
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "GeoStudium — Geografie, kartografie & Antarktida",
        short_name: "GeoStudium",
        description:
          "Studijní portál pro geografii a kartografii, fyzickou geografii a Antarktidu.",
        lang: "cs",
        theme_color: "#eef5f0",
        background_color: "#eef5f0",
        display: "standalone",
        orientation: "portrait",
        start_url: "./",
        scope: "./",
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
        navigateFallbackDenylist: [/^\/materials\//],
      },
    }),
  ],
});
