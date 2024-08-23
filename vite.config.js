import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import VitePluginHtmlEnv from 'vite-plugin-html-env'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), VitePluginHtmlEnv({
    compiler: true
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
