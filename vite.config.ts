import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example: Move all `node_modules` imports into a `vendor` chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Example: Separate out React and React-DOM into their own chunks
          if (id.includes('node_modules/react')) {
            return 'react';
          }
          if (id.includes('node_modules/react-dom')) {
            return 'react-dom';
          }
          // Example: Separate specific libraries into separate chunks
          if (id.includes('node_modules/lodash')) {
            return 'lodash';
          }
        },
      },
    },
  },
})
