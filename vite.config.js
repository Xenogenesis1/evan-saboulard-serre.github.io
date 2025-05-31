import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/evan-saboulard-serre.github.io/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
  server: {
    open: true
  }
});