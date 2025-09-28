import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || "/Portfolio_V1",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})


