// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup'; 

export default defineConfig({
  plugins: [react()],
  base: '/website/', // <--- THIS IS CRUCIAL if deployed to a subfolder named 'website'
  build: {
    outDir: 'dist', // Default output directory for the build
  },
});