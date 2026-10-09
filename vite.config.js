import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: { plugins: [] }, // ignore any stray postcss.config.* files
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})