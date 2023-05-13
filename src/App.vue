/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
const route = useRoute()
const router = useRouter()
const store = useStore()
const state = reactive({})
store.dispatch('initContract') // *初始化挂在合约
store.dispatch('initUsdtContract') // *初始化挂在合约
</script>
<template>
    <div class="app">
        <Header />
        <router-view class="router-views"></router-view>
        <Footer v-if="route.path != '/trade'" />
    </div>
</template>
<style lang="scss">
@import './assets/iconfont/iconfont.css';
</style>
