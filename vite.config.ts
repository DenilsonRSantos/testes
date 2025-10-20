/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  }
})
// vite.config.ts
// ✅ GARANTE que o Next ignore isso em produção
if (process.env.NEXT_PHASE === 'production-build') {
  throw new Error("vite.config.ts should not be loaded in Next build");
}
