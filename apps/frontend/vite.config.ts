import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';
import path from 'path';

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
          name: 'pre-checks',
          buildStart() {
            try {
              console.log('🔍 Running ESLint...');
              // Fix the path to ensure it finds the files
              execSync('eslint "src/**/*.{ts,tsx}" --max-warnings=0', {
                stdio: 'inherit',
                cwd: path.resolve(__dirname), // Ensure correct working directory
              });

              console.log('🔍 Running TypeScript...');
              execSync('tsc --noEmit', {
                stdio: 'inherit',
                cwd: path.resolve(__dirname), // Ensure correct working directory
              });
            } catch (error) {
              console.error('❌ Pre-checks failed!', error);
              process.exit(1);
            }
          },
        },
      ],
    },
  },
});
