/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
})
