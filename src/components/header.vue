/** * @file * @author 何明暄 */
<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { metaMaskVerification, establishAConnection, switchChain } from '@/utils/web3.js'
import { copyMethod } from '@/utils/common.js'
import { userDoLong } from '@/api/index.js'
import anime from 'animejs/lib/anime.es.js'
import Jazzicon from '@/components/jazzicon.vue'
import ComimgSoon from '@/components/comimg-soon.vue'
import { ArrowDown } from '@element-plus/icons-vue'
const router = useRouter()
const route = useRoute()
const store = useStore()

const dappMenuList = [
    {
        title: 'Market',
        router: '/market',
    },
    {
        title: 'Trade',
        router: '/trade',
    },
    {
        title: 'Dashboard',
        router: '/dashboard',
    },
    {
        title: 'AirDrop#1',
        router: '/airdrop',
    },
]
const HomeMenuList = [
    {
        title: 'Market',
        router: '/market',
    },
    {
        title: 'Gonvernance',
        router: '#',
    },
    {
        title: 'Whitepaper',
        router: '#',
    },
    {
        title: 'AirDrop#1',
        router: '/airdrop',
    },
]
const state = reactive({
    switchingChainPop: false,
    walletPopup: false,
    menuCurrent: HomeMenuList,
})
const assets = computed(() => store.state.persistence.assets)
const assetsShow = computed(() => store.state.persistence.assetsShow)
const assetsChina = computed(() => store.state.persistence.assetsChina)
const balanceNumber = computed(() => store.state.balanceNumber)
const isComimgSoonShow = ref(false)
const routerPush = (item) => {
    // if (item == '/whitepaper') {
    //     isComimgSoonShow.value = true
    //     return
    // }
    router.push(item)
}
const loginImg = ref(null)
const loginImgContant = ref(null)
onMounted(() => {})
watch(
    () => router.currentRoute.value,
    (value) => {
        if (value.path == '/') {
            state.menuCurrent = HomeMenuList
        } else {
            state.menuCurrent = dappMenuList
        }
    }
)

const onConnectClick = async () => {
    await onSwitchChina('324')
    await establishAConnection()
    const userDoLongParameter = await metaMaskVerification()
    const res = await userDoLong(userDoLongParameter)
    store.commit('stateUserToken', res.data.result.token) // 存入Token
}
const messageDrop2 = ref(null)
const onStateLogout = async () => {
    // 退出登录
    messageDrop2.value.handleClose()
    store.commit('stateLogout')
}
const messageDrop = ref(null)
const onSwitchChina = async (chinaId) => {
    // 切换链路
    messageDrop.value.handleClose()
    await switchChain(chinaId)
}
const onOpenPop = async (popId) => {
    // 打开弹窗
    state.switchingChainPop = false
    state.walletPopup = false
    if (popId === 'switchingChainPop') state.switchingChainPop = true
    if (popId === 'walletPopup') state.walletPopup = true
}
const pushLink = (link) => {
    window.open(link, '_blank')
}
document.addEventListener('click', (e) => {
    if (state.switchingChainPop == true) state.switchingChainPop = false
    if (state.walletPopup == true) state.walletPopup = false
})
const openAMenu = () => {
    state.menuShow = true
    setTimeout(() => {
        anime({
            targets: '.open-a-menu',
            translateX: ['-300px', '0px'],
            duration: 1000,
        })
    })
}
</script>
<template>
    <!-- <div class="container">
        <h1 class="text-center bg-dark d-block d-sm-none text-white">{{ `>` }} SM</h1>
        <h1 class="text-center bg-primary d-none d-sm-block d-md-none">SM</h1>
        <h1 class="text-center bg-success d-none d-md-block d-lg-none">MD</h1>
        <h1 class="text-center bg-danger d-none d-lg-block d-xl-none">LG</h1>
        <h1 class="text-center bg-warning d-none d-xl-block d-xxl-none">XL</h1>
        <h1 class="text-center bg-info d-none d-xxl-block">XLL</h1>
    </div> -->
    <ComimgSoon :isComimgSoonShow="isComimgSoonShow" @close="isComimgSoonShow = false" />
    <header
        class="width100 position-fixed top-0 start-0 transition"
        style="
            height: 58px;
            z-index: 2;
            background: rgba(0, 0, 0, 0.07);
            backdrop-filter: saturate(50%) blur(4px);
        "
        :class="{ backdark: route.path == '/trade' }">
        <div class="d-flex-between-center px-4" style="height: 60px">
            <div class="d-flex-align-center">
                <img
                    style="height: 42px"
                    class="cursor-pointer"
                    src="https://storage.googleapis.com/needex/image/logo.png"
                    @click="router.push('/')" />
                <div class="ml-3 d-none d-md-block">
                    <span
                        class="menu-items fs-6 text-white ml-4 cursor-pointer"
                        :class="{ menuindex: route.path == item.router }"
                        v-for="item in state.menuCurrent"
                        @click="routerPush(item.router)"
                        >{{ item.title }}</span
                    >
                </div>
                <div class="ml-4 d-block d-md-none cursor-pointer" @click="openAMenu">
                    <i class="iconfont icon-caidan fs-1 text-white"></i>
                </div>
            </div>
            <div class="d-flex-align-center">
                <div class="d-flex-align-center" v-if="route.path != '/'">
                    <el-dropdown trigger="click" class="mr-4" ref="messageDrop">
                        <span class="el-dropdown-link d-flex-center">
                            <span class="d-flex-align-center" v-if="assetsChina == '1'">
                                <img
                                    style="width: 24px"
                                    src="https://storage.googleapis.com/needex/image/ethico.png" />
                                <span class="ml-2 d-none d-sm-block">Ethereum</span>
                            </span>
                            <span class="d-flex-align-center" v-else>
                                <img
                                    style="width: 24px"
                                    src="https://storage.googleapis.com/needex/image/zksync.png" />
                                <span class="ml-2 d-none d-sm-block">zkSync Era</span></span
                            >
                            <el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </span>
                        <template #dropdown>
                            <div class="p-2 text-white" style="width: 180px">
                                <div
                                    class="px-3 py-2 chain-item fs-7 cursor-pointer"
                                    @click="onSwitchChina('1')">
                                    <img
                                        style="width: 22px"
                                        src="https://storage.googleapis.com/needex/image/ethico.png" />
                                    <span class="ml-3">Ethereum</span>
                                </div>
                                <div
                                    class="px-3 py-2 chain-item fs-7 cursor-pointer d-flex-align-center"
                                    @click="onSwitchChina('324')">
                                    <img
                                        style="width: 22px"
                                        src="https://storage.googleapis.com/needex/image/zksync.png" />
                                    <span class="ml-3">zkSync Era</span>
                                </div>
                                <div
                                    class="px-3 py-2 chain-item fs-7 cursor-pointer"
                                    @click="onSwitchChina('56')">
                                    <img
                                        style="width: 22px"
                                        src="https://storage.googleapis.com/needex/image/bian.png" />
                                    <span class="ml-3">Binance Chain</span>
                                </div>
                            </div>
                        </template>
                    </el-dropdown>
                    <div
                        class="cursor-pointer"
                        style="color: #cfd3dc; font-size: 14px"
                        v-if="!assets">
                        <span class="d-flex-center px-2" @click="onConnectClick">
                            <span class="d-none d-sm-block">Connect Wallet</span>
                            <span class="d-sm-none">Connect</span>
                        </span>
                    </div>
                    <el-dropdown trigger="click" ref="messageDrop2" v-else>
                        <span class="el-dropdown-link d-flex-center">
                            <span class="d-flex-center">
                                <div class="mr-2 d-block">
                                    <Jazzicon :address="assets" :diameter="24" />
                                </div>
                                <span class="assets-show-hide">{{ assetsShow }}</span>
                            </span>
                            <el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </span>
                        <template #dropdown>
                            <div class="p-3 text-white" style="width: 270px">
                                <div class="d-flex-between-center">
                                    <div class="d-flex-center">
                                        <div class="mr-2">
                                            <Jazzicon :address="assets" :diameter="24" />
                                        </div>
                                        <span class="fs-6">{{ assetsShow }}</span>
                                    </div>
                                    <div class="d-flex-center">
                                        <div
                                            class="p-2 chain-item d-flex-center"
                                            style="width: 32px; height: 32px"
                                            @click="copyMethod(assets)">
                                            <i class="iconfont icon-fuzhi"></i>
                                        </div>
                                        <div
                                            class="p-2 chain-item d-flex-center"
                                            style="width: 32px; height: 32px"
                                            @click="
                                                pushLink(`https://etherscan.io/address/${assets}`)
                                            ">
                                            <i class="iconfont icon-fenxiang"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-white fs-3 text-center my-4">
                                    <span>{{ balanceNumber }} ETH</span>
                                </div>
                                <hr />
                                <div class="chain-item p-2 text-center fs-6" @click="onStateLogout">
                                    <span>Log Out</span>
                                </div>
                            </div>
                        </template>
                    </el-dropdown>
                </div>
                <div style="width: 140px" v-else>
                    <el-button
                        type="primary"
                        class="width100"
                        style="border-radius: 22px"
                        @click="router.push('/trade')"
                        >Launch DApp
                    </el-button>
                </div>
            </div>
        </div>
    </header>
    <section
        class="position-fixed top-0 start-0"
        v-if="state.menuShow"
        @click="state.menuShow = false"
        style="width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.5); z-index: 4">
        <div class="open-a-menu">
            <div>
                <p
                    class="fs-6 text-white mt-2 cursor-pointer p-2 pl-4"
                    :class="{ menuindex: route.path == item.router }"
                    v-for="item in state.menuCurrent"
                    @click="routerPush(item.router)">
                    {{ item.title }}
                </p>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
header {
    .el-button {
        background: var(--theme-color-purple);
        border: none;
        transition: 0.3s;
        &:hover {
            background: var(--theme-color-purple);
        }
    }
}
.chain-item {
    transition: 0.3s;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
        background-color: var(--G800);
    }
}
.menuindex {
    color: var(--theme-color-purple) !important;
}
.open-a-menu {
    height: 100vh;
    width: 400px;
    background-color: var(--G800);
    position: absolute;
    left: -100px;
    top: 0;
    padding: 25px;
    padding-left: 125px;
    transition: 0.3s;
    p {
        transition: 0.3s;
        border-radius: 18px;
    }
    p:hover {
        background-color: rgba(80, 80, 80, 0.9);
    }
}
.backdark {
    background: #141519;
    border-bottom: 1px solid rgb(44, 45, 48);
}
.menu-items {
    margin-left: ($spacer * 1.4) !important;
    @include media-breakpoint-up(lg) {
        margin-left: ($spacer * 3) !important;
    }
}
</style>
