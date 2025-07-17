import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['antd', '@material-tailwind/react', '@headlessui/react'],
          redux: ['@reduxjs/toolkit', 'react-redux', 'redux-saga'],
          icons: ['@heroicons/react', 'react-icons', 'lucide-react', 'remixicon'],
          animation: ['framer-motion'],
          charts: ['recharts']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
})