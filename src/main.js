import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { web3Init, metaMaskAccountsChanged } from '@/utils/web3.js'
// import dark from 'element-plus/theme-chalk/dark/css-vars.css'

// console.log(dark) // 需使用下，否则会被 tree shaking
web3Init() // web3初始化
metaMaskAccountsChanged() // 监听切链操作
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
