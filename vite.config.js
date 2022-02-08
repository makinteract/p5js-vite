// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        single: resolve(__dirname, 'single_sketch.html'),
        multi: resolve(__dirname, 'multi_sketch.html')
      }
    }
  }
})