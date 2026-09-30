import { defineConfig } from 'vite'
import path from 'node:path'
import { router } from './router.js'

export default defineConfig({
  appType: 'mpa',
  plugins: [router()],

  build: {
    rollupOptions: {
      input: {
        index: path.resolve(import.meta.dirname, 'index.html'),
        cardapio: path.resolve(import.meta.dirname, 'cardapio.html'),
        pedido: path.resolve(import.meta.dirname, 'pedido.html'),
        404: path.resolve(import.meta.dirname, '404.html')
      }
    }
  },

  server: {
    host: true
  },
  preview: {
    host: true
  }
})
