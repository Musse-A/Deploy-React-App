
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  root: './vite-project', // Set this to where index.html lives
  base: process.env.VITE_BASE_PATH || "/Portfolio_V1",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './vite-project/src'), // Adjust alias to src inside vite-project
    },
  },
  build: {
    outDir: '../dist', // Output the build outside vite-project to the dist folder
    emptyOutDir: true, // Clean output directory before build
  },
})
