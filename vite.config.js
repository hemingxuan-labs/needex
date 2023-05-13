import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            web3: resolve(__dirname, './node_modules/web3/dist/web3.min.js'),
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
            '~element-plus': resolve(__dirname, 'node_modules/element-plus'),
        },
    },
    // base: './',
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => {
                        return tag.startsWith('ion-') // (return true)
                    },
                },
            },
        }),
    ],
    server: {
        hmr: true,
        host: '0.0.0.0',
        proxy: {
            '/api': {
                // target: 'http://192.168.0.15:10888',
                target: 'http://needex.io:10888',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `@use "@/assets/css/style.scss" as *;`,
                additionalData: `@import "@/assets/css/style.scss";`,
            },
        },
    },
})
