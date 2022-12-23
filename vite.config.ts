import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-bun-vite/',
  plugins: [
    react()
  ]
})