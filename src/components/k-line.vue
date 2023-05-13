<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import TradingView from '@/components/trading-view.vue'
const searchInput = ref('')
const bShow = ref('ETH / USDC')
const bList = ref([
    {
        title: 'ETH / USDC',
        price: '12.231',
        increase: '+1.44%',
    },
    {
        title: 'ETH / USDS',
        price: '556.231',
        increase: '+4.44%',
    },
    {
        title: 'ETH / USDV',
        price: '234.231',
        increase: '+1.44%',
    },
    {
        title: 'ETH / USDE',
        price: '125.231',
        increase: '+4.44%',
    },
])
const onBListClick = (item) => {
    bShow.value = item.title
}
const visibleChangeShow = ref(false)
const visibleChange = (jude) => {
    visibleChangeShow.value = jude
}
</script>

<template>
    <div class="chart-container d-flex flex-column" style="width: 100%; height: 100%">
        <!-- 顶部条 -->
        <div class="d-flex-align-center" style="height: 64px; border-left: 1px solid #2c2d30">
            <el-dropdown trigger="click" class="ml-3" @visible-change="visibleChange">
                <div class="d-flex-center" style="width: 140px; height: 100%; user-select: none">
                    <img
                        src="https://storage.googleapis.com/needex/image/ethico.png"
                        style="width: 18px; height: 18px; position: relative" />
                    <img
                        src="https://storage.googleapis.com/needex/image/usdc.png"
                        style="width: 18px; height: 18px; margin-left: -8px" />
                    <p class="text-white fs-7 ml-2">{{ bShow }}</p>
                    <i
                        class="iconfont icon-sanjiaoxia fs-6 ml-1"
                        :class="{ revolve: visibleChangeShow }"
                        style="transition: 0.3s"></i>
                </div>
                <template #dropdown>
                    <div class="px-2 mt-2">
                        <el-input
                            v-model="searchInput"
                            class="w-100"
                            placeholder="Search"
                            :prefix-icon="Search" />
                    </div>
                    <div class="d-flex-between-center mt-3" style="padding: 5px 16px">
                        <p class="text-color-grey" style="width: 40%">Pairs</p>
                        <p class="text-color-grey text-center" style="width: 30%">
                            real-time price
                        </p>
                        <p class="text-color-grey text-center" style="width: 30%">24h %</p>
                    </div>
                    <el-dropdown-menu class="mt-1">
                        <el-dropdown-item v-for="item in bList" @click="onBListClick(item)">
                            <div class="d-flex-between-center" style="width: 300px; height: 100%">
                                <div class="d-flex-align-center" style="width: 40%">
                                    <img
                                        src="https://storage.googleapis.com/needex/image/logo.png"
                                        style="width: 18px; height: 18px; position: relative" />
                                    <img
                                        src="https://storage.googleapis.com/needex/image/ethico.png"
                                        style="width: 18px; height: 18px; margin-left: -8px" />
                                    <p class="text-white fs-7 ml-2">{{ item.title }}</p>
                                </div>

                                <p
                                    class="fs-8 text-center"
                                    style="color: rgb(12, 186, 113); width: 30%">
                                    {{ item.price }}
                                </p>
                                <p
                                    class="fs-8 text-center"
                                    style="color: rgb(12, 186, 113); width: 30%">
                                    {{ item.increase }}
                                </p>
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <div class="overflow-x flex-1 pr-1" style="overflow-x: auto; width: 10px">
                <div class="d-flex d-flex-between-center ml-4" style="width: 480px">
                    <div>
                        <p class="text-white fs-7">1830 USDC</p>
                        <p class="fs-8 text-color-999">Last Swap Price</p>
                    </div>
                    <div class="">
                        <p class="text-white fs-7">$1828</p>
                        <p class="fs-8 text-color-999">USD</p>
                    </div>
                    <div class="">
                        <p class="fs-7" style="color: rgb(12, 186, 113)">5.06%</p>
                        <p class="fs-8 text-color-999">24h Change</p>
                    </div>
                    <div class="">
                        <p class="text-white fs-7">34,915.5 USDC</p>
                        <p class="fs-8 text-color-999">24h Volume</p>
                    </div>
                    <div class="">
                        <p class="fs-7" style="color: rgb(253, 211, 61)">0x8b5...ceaa</p>
                        <p class="fs-8 text-color-999">Contract</p>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%" class="flex-1">
            <TradingView />
        </div>
    </div>
</template>
<style scoped lang="scss">
.overflow-x {
    &::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important;
    }
}
.el-dropdown-menu {
    padding-left: 0;
    .el-dropdown-menu__item {
        padding: 5px 10px;
    }
}
.revolve {
    transform: rotate(180deg) !important;
}
</style>
