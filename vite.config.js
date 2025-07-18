import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  base: './' // Rất quan trọng để relative path hoạt động đúng trên Vercel
});
