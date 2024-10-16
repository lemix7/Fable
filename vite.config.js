import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip', // Using GZIP compression
      ext: '.gz', // Extension for GZIP compressed files
      threshold: 10240, // Only compress files larger than 10kb
    }),
    // Optional: Add Brotli compression as well for more efficient compression
    viteCompression({
      algorithm: 'brotliCompress', // Adding Brotli compression
      ext: '.br', // Extension for Brotli compressed files
      threshold: 10240, // Only compress files larger than 10kb
    }),
  ],
});
