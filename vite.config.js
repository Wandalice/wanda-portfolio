import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/wanda-portfolio/',
  plugins: [react()],
  build: {
    sourcemap: true
  }
})