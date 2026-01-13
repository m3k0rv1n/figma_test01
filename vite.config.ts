import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Get repository name from environment or default to 'figma_test01'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'figma_test01';
const base = process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base,
  build: {
    outDir: 'dist',
  },
});
