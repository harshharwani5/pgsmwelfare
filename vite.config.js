import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy 3D libraries into their own chunk
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // Split animation libraries
          'animation-vendor': ['gsap', 'framer-motion'],
          // Split React core
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
