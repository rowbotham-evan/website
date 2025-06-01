// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    react(),
    mdx({
      providerImportSource: '@mdx-js/react',
      jsxRuntime: 'automatic'
    })
  ],
  // Add this line to specify the base path for deployment
  base: '/website/', // <--- THIS IS THE CRUCIAL CHANGE
});