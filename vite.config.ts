import path from "path"
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      usePolling: true, // 開啟輪詢監控
      interval: 100,
    },
    host: '0.0.0.0',
    port: 3000,
  },
  base: "/react-tenfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
