import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';

// Define the Vite configuration
export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/frontend',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react()],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    rollupOptions: {
      plugins: [
        {
          name: 'tsc-check',
          buildStart() {
            try {
              // Run TypeScript check before building
              execSync('tsc --noEmit', { stdio: 'inherit' });
            } catch (error) {
              console.error('TypeScript check failed!', error); // In case of any TypeScript error
              process.exit(1); // This will fail the build
            }
          },
        },
      ],
    },
  },
});
