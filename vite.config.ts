import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        preprocessOptions: {
          pug: {
            // Enable Pug preprocessing
          }
        }
      }
    })
  ],
  base: '/Y&A-story/', // Replace with your GitHub repo name
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
