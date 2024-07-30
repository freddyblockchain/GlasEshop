
import postcss from './postcss.config.js';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss: './postcss.config.js' // Ensure PostCSS configuration file is present if used
  },
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, './src/lib'), // Alias configuration
    },
  },
  build: {
    outDir: 'dist', // Output directory for the build files
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html') // Ensure Vite uses the correct entry point
      }
    }
  },
});