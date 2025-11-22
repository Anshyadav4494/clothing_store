import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: ".",                      // project root
  plugins: [react()],             // React plugin
  base: '/clothing_store/',       // GitHub repo name (IMPORTANT)
  build: {
    outDir: "dist",               // build folder
  },
});
