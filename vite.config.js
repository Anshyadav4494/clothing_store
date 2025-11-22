import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/clothing_store/',     // MUST MATCH EXACT REPO NAME
  build: {
    outDir: 'dist',
    emptyOutDir: true,          // prevents old broken assets
  },
});
