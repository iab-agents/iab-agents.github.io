import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    // One HTML entry per page; each sub page builds to <name>/index.html.
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        acceptedPapers: resolve(import.meta.dirname, 'accepted-papers/index.html'),
        committee: resolve(import.meta.dirname, 'committee/index.html'),
      },
    },
  },
});
