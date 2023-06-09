import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const proxyOptions = {
  target: 'dev server host...',
  changeOrigin: true,
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    proxy: {
      '/dailyb': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
