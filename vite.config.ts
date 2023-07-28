import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import VueRouter from 'unplugin-vue-router/vite'
import { getPascalCaseRouteName } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Portfolio-With-Vue/' : '/',
  plugins: [
    vue(),
    VueRouter({
      routesFolder: 'src/views',
      getRouteName: (routeNode) => getPascalCaseRouteName(routeNode)
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/app.scss";'
      }
    }
  }
})
