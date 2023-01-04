import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3006
  },
  base: "./",
  plugins: [svelte()],
  build: {
    outDir: "./michaelusantiago.github.io"
  },
  resolve: {
    alias: {
      "@": __dirname + "/src"
    }
  }
})