import { defineConfig } from "astro/config"

import { readFile } from "node:fs/promises"

// Astro integration imports
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import AstroPWA from "@vite-pwa/astro"

// Helper imports
import { manifest } from "./utils/seoConfig"

import tailwindcss from "@tailwindcss/vite"

import cloudflare from "@astrojs/cloudflare"

import react from "@astrojs/react"

const isDev = import.meta.env.DEV

export default defineConfig({
  output: "server",
  // experimental: {
  //   csp: true,
  // },
  //   site: seoConfig.baseURL,
  integrations: [
    sitemap(),
    compress(),
    AstroPWA({
      devOptions: {
        enabled: isDev,
        type: "module",
      },
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.ts",
      manifest,
      workbox: {
        globDirectory: "dist",
        globPatterns: [
          "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
        ],
      },
    }),
    react(),
  ],

  vite: {
    ssr: {
      external: [],
    },
    server: {
      https: {
        key: await readFile("./certificates/localhost-key.pem"),
        cert: await readFile("./certificates/localhost.pem"),
      },
    },
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
})
