import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],
  optimizeDeps: {
    // This forces Vite to process these libraries correctly
    include: ['@pixi/react', 'pixi.js'],
  },
  resolve: {
    alias: {
      // If you are using v7, this ensures the correct entry point
      '@pixi/react': '@pixi/react',
    },
  },

  theme: {
    extend: {
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        }
      },
      animation: {
        scan: 'scan 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  }
})
