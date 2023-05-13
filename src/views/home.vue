/** * @file * @author 何明暄 */
<template>
    <div class="home-box position-relative">
        <ComimgSoon
            :isComimgSoonShow="state.isComimgSoonShow"
            :contentText="state.contentText"
            @close="state.isComimgSoonShow = false" />
        <img
            class="position-absolute start-0 width100"
            src="https://storage.googleapis.com/needex/image/mark-header-04.png"
            style="top: -50px" />
        <div
            id="particles-js"
            class="position-fixed top-0 start-0"
            style="width: 100vw; height: 100%"></div>
        <div class="container-small container mt-4">
            <div class="top-block row">
                <div class="col-md-8 p-0 position-relative">
                    <h1 class="multi-chain-text fs-6" style="color: rgb(139, 145, 157)">Needex</h1>
                    <h1
                        class="multi-chain-text text-white mt-3"
                        style="font-size: 48px; white-space: nowrap">
                        <span ref="promotion2" style="transition: 1.2s">Order Book</span>
                    </h1>
                    <h1
                        class="multi-chain-text mt-3 font-face-space-mono"
                        style="color: #fff; font-size: 60px">
                        <span style="color: #726ad8">For</span>
                        <span
                            class="ml-4"
                            ref="promotion"
                            style="transition: 1.2s; white-space: nowrap"
                            >AMM</span
                        >
                    </h1>
                    <p class="multi-chain-text mt-4 width100 fs-7" style="color: var(--G500)">
                        Implement and deploy decentralized order book <br />
                        protocol on multiple chains.
                    </p>
                    <div class="d-flex mt-5">
                        <div
                            class="button-effect d-flex-between-center py-2 px-3"
                            style="
                                border: 1px solid var(--theme-color-blue);
                                border-radius: 10px;
                                width: 188px;
                            "
                            @click="
                                () => {
                                    state.contentText = 'ComimgSoon'
                                    state.isComimgSoonShow = true
                                }
                            ">
                            <span class="text-white" style="font-size: 1.1rem">Apply</span>
                            <i class="iconfont icon-fenxiang text-white fs-5"></i>
                        </div>
                        <div
                            class="button-effect d-flex-between-center py-2 px-3 ms-3"
                            style="
                                border: 1px solid var(--theme-color-blue);
                                border-radius: 10px;
                                width: 188px;
                            "
                            @click="
                                () => {
                                    state.contentText = 'ComimgSoon'
                                    state.isComimgSoonShow = true
                                }
                            ">
                            <span class="text-white" style="font-size: 1.1rem">Docs</span>
                            <i class="iconfont icon-fenxiang text-white fs-5"></i>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div
                            class="button-effect d-flex-between-center py-2 px-3 mt-3"
                            style="border: 1px solid #726ad8; border-radius: 10px; width: 391px"
                            @click="router.push('/trade')">
                            <span class="text-white" style="font-size: 1.1rem">Trade On</span>
                            <i class="iconfont icon-fenxiang text-white fs-5"></i>
                        </div>
                    </div>
                    <div class="mt-3">
                        <i
                            class="iconfont icon-discord text-white fs-2 me-3"
                            style="cursor: pointer"
                            @click="pushLink('https://discord.gg/X4PutAK7Fy')"></i>
                        <i
                            class="iconfont icon-twitter-fill text-white fs-2 me-3"
                            style="cursor: pointer"
                            @click="pushLink('https://twitter.com/NeedexLabs')"></i>
                        <i
                            class="iconfont icon-medium text-white fs-2 me-3"
                            style="cursor: pointer"></i>
                    </div>
                </div>
                <div class="col-md-4 p-0 position-relative d-flex-center">
                    <img
                        src="https://storage.googleapis.com/needex/image/logo.gif"
                        class="first-screen-img d-none d-md-block" />
                    <!-- <video width="400" :controls="false" :autoplay="true" muted loop>
                        <source src="https://storage.googleapis.com/needex/image/logo.mp4" type="video/mp4" />
                    </video> -->
                </div>
            </div>
        </div>
        <!-- TotalTradingVolume -->
        <div class="container-small container p-0 top-block" style="margin-top: 7rem">
            <div class="mx-auto d-flex-between-center" style="flex-wrap: wrap">
                <div class="mt-4 px-1" style="width: 340px">
                    <div class="total-trading-volume p-4 d-flex-between-center">
                        <img src="https://storage.googleapis.com/needex/image/total-icon1.png" />
                        <div class="flex-1 pl-4">
                            <p class="fs-7" style="color: #a0a3c4">Total Trading Volume</p>
                            <p class="text-white mt-1 fs-3">$1,136,248,178</p>
                        </div>
                    </div>
                </div>
                <div class="mt-4 px-1" style="width: 340px">
                    <div class="total-trading-volume p-4 d-flex-between-center">
                        <img src="https://storage.googleapis.com/needex/image/total-icon2.png" />
                        <div class="flex-1 pl-4">
                            <p class="fs-7" style="color: #a0a3c4">Open Interest</p>
                            <p class="text-white mt-1 fs-3">$20,592,899</p>
                        </div>
                    </div>
                </div>
                <div class="mt-4 px-1" style="width: 340px">
                    <div class="total-trading-volume p-4 d-flex-between-center">
                        <img src="https://storage.googleapis.com/needex/image/total-icon3.png" />
                        <div class="flex-1 pl-4">
                            <p class="fs-7" style="color: #a0a3c4">Total Users</p>
                            <p class="text-white mt-1 fs-3">168,114</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Trade -->
        <div class="d-flex-center position-relative" style="margin-top: 12rem">
            <p
                class="py-2 px-4 m-0 me-3 fs-5 text-white"
                style="background: var(--theme-color-blue); border-radius: 9px">
                About
            </p>
            <div>
                <p class="fs-4 m-0 text-white position-relative">Needex</p>
                <p class="fs-5 m-0" style="color: #305576">
                    Decentralized AMM Solution By Order Book
                </p>
            </div>
        </div>
        <div
            class="container-small container p-0 top-block position-relative"
            style="margin-top: 8rem">
            <img
                src="https://storage.googleapis.com/needex/image/tread-img.png"
                style="width: 100%" />
            <!-- <el-image src="https://storage.googleapis.com/needex/image/tread-img.png" lazy /> -->
            <div
                class="position-absolute top-50 end-0 translate-middle-y p-3"
                style="
                    max-width: 500px;
                    border-radius: 24px;
                    background: rgba(0, 0, 0, 0.03);
                    backdrop-filter: blur(4px);
                ">
                <h1 class="text-white" style="font-size: 48px">Needex</h1>
                <h1 class="text-white" style="font-size: 32px">
                    Completely on-chain order book model decentralized exchange
                </h1>
                <div
                    class="button-effect d-flex-between-center py-2 px-3 mt-4"
                    style="
                        border: 1px solid var(--theme-color-purple);
                        border-radius: 10px;
                        width: 100%;
                    ">
                    <span class="" style="font-size: 1.1rem; color: var(--theme-color-gold)"
                        >Know More About</span
                    >
                    <i class="iconfont icon-fenxiang text-white fs-5"></i>
                </div>
            </div>
        </div>
        <!-- Needex -->
        <div class="d-flex-center position-relative" style="margin-top: 12rem">
            <p
                class="py-2 px-4 m-0 me-3 fs-5 text-white"
                style="background: var(--theme-color-purple); border-radius: 9px">
                Features
            </p>
            <div>
                <p class="fs-4 m-0 text-white position-relative">Function</p>
                <p class="fs-5 m-0" style="color: #305576">Unlimited decentralized applications</p>
            </div>
        </div>
        <div class="container-small container p-0 top-block" style="margin-top: 8rem">
            <div class="row justify-content-between" style="min-height: 380px">
                <div class="col-md-5 d-flex-center p-4 position-relative">
                    <img
                        style="width: 100%"
                        src="https://storage.googleapis.com/needex/image/infomer-1.png" />
                    <img
                        class="ball1"
                        src="https://storage.googleapis.com/needex/image/infomer-1-1.png" />
                    <!-- <el-image
                        style="width: 100%"
                        src="https://storage.googleapis.com/needex/image/infomer-1.png"
                        lazy />
                    <el-image
                        class="ball1"
                        src="https://storage.googleapis.com/needex/image/infomer-1-1.png"
                        lazy /> -->
                </div>
                <div class="col-md-6 d-flex flex-column justify-content-center mt-4">
                    <h3 class="text-start" style="color: var(--theme-color-yellow)">AMM Maker</h3>
                    <h5 class="mt-2 text-white fs-1" style="line-height: 57px">
                        Experience A Brand-new Market-making Model, Safe And Fast Income.
                    </h5>
                    <div
                        class="button-effect d-flex-between-center py-2 px-3 mt-4"
                        style="
                            border: 1px solid var(--theme-color-purple);
                            border-radius: 10px;
                            width: 90%;
                        "
                        @click="router.push('/trade')">
                        <span class="text-white" style="font-size: 1.1rem">Explore</span>
                        <i class="iconfont icon-fenxiang text-white fs-5"></i>
                    </div>
                </div>
            </div>
            <div
                class="row justify-content-between mt-7 d-none d-md-flex"
                style="min-height: 380px">
                <div class="col-md-6 d-flex flex-column justify-content-center mt-4">
                    <h3 class="" style="color: var(--theme-color-blue)">Trade</h3>
                    <h1 class="mt-2 text-white fs-1" style="line-height: 57px">
                        Providing The Engine For Liquidity, Any transaction will compensate Gas loss
                        through rewards.
                    </h1>
                    <div
                        class="button-effect d-flex-between-center py-2 px-3 mt-4"
                        style="
                            border: 1px solid var(--theme-color-purple);
                            border-radius: 10px;
                            width: 100%;
                        "
                        @click="router.push('/market')">
                        <span class="text-white" style="font-size: 1.1rem">Trade On</span>
                        <i class="iconfont icon-fenxiang text-white fs-5"></i>
                    </div>
                </div>
                <div class="col-md-5 d-flex-center p-4">
                    <img
                        class="revolve-img"
                        style="width: 100%"
                        src="https://storage.googleapis.com/needex/image/infomer-2.png" />
                </div>
            </div>
            <div
                class="row justify-content-between mt-7 d-block d-md-none"
                style="min-height: 380px">
                <div class="col-md-5 d-flex-center p-4">
                    <img
                        class="revolve-img"
                        style="width: 100%"
                        src="https://storage.googleapis.com/needex/image/infomer-2.png" />
                </div>
                <div class="col-md-6 d-flex flex-column justify-content-center">
                    <h3 style="color: var(--theme-color-blue)">Trade On</h3>
                    <h5 class="mt-2 text-white fs-1" style="line-height: 57px">
                        Providing The Engine For Liquidity,Any transaction will compensate Gas loss
                        through rewards.
                    </h5>
                    <div
                        class="button-effect d-flex-between-center py-2 px-3 mt-4"
                        style="
                            border: 1px solid var(--theme-color-purple);
                            border-radius: 10px;
                            width: 100%;
                        "
                        @click="router.push('/trade')">
                        <span class="text-white" style="font-size: 1.1rem">Trade On</span>
                        <i class="iconfont icon-fenxiang text-white fs-5"></i>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between mt-7" style="min-height: 380px">
                <div class="col-md-5 d-flex-center p-4">
                    <img
                        class="float"
                        style="width: 100%"
                        src="https://storage.googleapis.com/needex/image/infomer-3.png" />
                </div>
                <div class="col-md-6 d-flex flex-column justify-content-center">
                    <h3 style="color: var(--theme-color-green)">Swap</h3>
                    <h5 class="mt-2 text-white fs-1" style="line-height: 57px">
                        Through the innovative GPLM algorithm, the swap rate in the decentralized
                        Swap process is re-solved, with almost no slippage.
                    </h5>
                    <div
                        class="button-effect d-flex-between-center py-2 px-3 mt-4"
                        style="
                            border: 1px solid var(--theme-color-purple);
                            border-radius: 10px;
                            width: 100%;
                        "
                        @click="
                            () => {
                                state.contentText = 'ComimgSoon'
                                state.isComimgSoonShow = true
                            }
                        ">
                        <span class="text-white" style="font-size: 1.1rem">Swap Now</span>
                        <i class="iconfont icon-fenxiang text-white fs-5"></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- Governance -->
        <div class="d-flex-center position-relative" style="margin-top: 12rem">
            <p
                class="py-2 px-4 me-3 fs-5 text-white"
                style="background: var(--theme-color-gold); border-radius: 9px">
                Token
            </p>
            <div>
                <p class="fs-4 m-0 text-white position-relative">Economic</p>
                <p class="fs-5 m-0" style="color: #305576">value is immeasurable</p>
            </div>
        </div>
        <div class="container-small container p-0 mx-auto top-block" style="margin-top: -4rem">
            <div id="main" ref="main" class="d-flex-center" style="height: 800px"></div>
        </div>
        <!-- yuqi -->
        <div class="d-flex-center position-relative mt-5">
            <p
                class="py-2 px-4 m-0 me-3 fs-5 text-white"
                style="background: var(--theme-color-yellow); border-radius: 9px">
                RoadMap
            </p>
            <div>
                <p class="fs-4 m-0 text-white position-relative">Process</p>
                <p class="fs-5 m-0" style="color: #305576">Sustainable ecological construction</p>
            </div>
        </div>
        <div
            class="container-small container p-0 top-block position-relative d-none d-lg-block"
            style="min-height: 190px; margin-top: 8rem">
            <img
                class="width100"
                src="https://storage.googleapis.com/needex/image/timelinered.png" />
            <div
                class="position-absolute d-flex justify-content-around align-items-center"
                style="width: 100%; height: 100%; top: 0; left: 0">
                <div class="single-roadmap-timeline single-roadmap-timeline1">
                    <div
                        class="position-absolute start-50 translate-middle-x"
                        style="width: 10px; height: 10px; top: -30px">
                        <i class="d-block"></i>
                        <b></b>
                    </div>
                    <h3 class="fs-4 text-white text-center">2023 Q1</h3>
                    <p class="fs-6" style="color: var(--text-color-grey)">· Project Approval</p>
                    <p class="fs-6" style="color: var(--text-color-grey)">· Build Dapp</p>
                    <p class="fs-6" style="color: var(--text-color-grey)">· Release Whitepaper</p>
                </div>
                <div class="single-roadmap-timeline single-roadmap-timeline2">
                    <div
                        class="position-absolute start-50 translate-middle-x"
                        style="width: 10px; height: 10px; top: -30px">
                        <i class="d-block"></i>
                        <b></b>
                    </div>
                    <h3 class="fs-4 text-white text-center">2023 Q2</h3>
                    <p class="fs-6 twinkle" style="color: var(--text-color-grey)">
                        · Launch Beta Version On zkSync Era
                    </p>
                    <p class="fs-6" style="color: var(--text-color-grey)">
                        · Deploy On Ethereum Mainnet
                    </p>
                    <p class="fs-6" style="color: var(--text-color-grey)">· Start AirDrop#1</p>
                </div>
                <div class="single-roadmap-timeline single-roadmap-timeline3">
                    <div
                        class="position-absolute start-50 translate-middle-x"
                        style="width: 10px; height: 10px; top: -30px">
                        <i class="d-block"></i>
                        <b></b>
                    </div>
                    <h3 class="fs-4 text-white text-center">2023 Q3</h3>
                    <p class="fs-6" style="color: var(--text-color-grey)">
                        · Start Community Governance
                    </p>
                    <p class="fs-6" style="color: var(--text-color-grey)">· Launch staking</p>
                    <p class="fs-6" style="color: var(--text-color-grey)">· Start AirDrop#2</p>
                </div>
                <div class="single-roadmap-timeline single-roadmap-timeline4">
                    <div
                        class="position-absolute start-50 translate-middle-x"
                        style="width: 10px; height: 10px; top: -30px">
                        <i class="d-block"></i>
                        <b></b>
                    </div>
                    <h3 class="fs-4 text-white text-center">2023 Q4</h3>
                    <p class="fs-6" style="color: var(--text-color-grey)">
                        · Contract Factory Testing
                    </p>
                    <p class="fs-6" style="color: var(--text-color-grey)">
                        · Contract Factory Deployment
                    </p>
                    <p class="fs-6" style="color: var(--text-color-grey)">· Start AirDrop#3</p>
                </div>
            </div>
        </div>
        <div class="container-small container p-0 top-block mt-5 d-block d-lg-none">
            <div class="d-flex-center flex-column">
                <h3 class="fs-4 text-white text-center">2023 Q1</h3>
                <div>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Project Approval
                    </p>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Build Dapp
                    </p>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Release Whitepaper
                    </p>
                </div>
            </div>
            <div class="d-flex-center flex-column mt-4-">
                <h3 class="fs-4 text-white text-center">2023 Q2</h3>
                <div>
                    <p class="fs-6 twinkle text-center" style="color: var(--text-color-grey)">
                        · Launch Beta Version On zkSync Era
                    </p>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Deploy On Ethereum Mainnet
                    </p>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Start AirDrop#1
                    </p>
                </div>
            </div>
            <div class="d-flex-center flex-column mt-4-">
                <h3 class="fs-4 text-white text-center">2023 Q3</h3>
                <div>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Start Community Governance
                    </p>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Launch staking
                    </p>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Start AirDrop#2
                    </p>
                </div>
            </div>
            <div class="d-flex-center flex-column mt-4-">
                <h3 class="fs-4 text-white text-center">2023 Q4</h3>
                <div>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Contract Factory Testing
                    </p>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Contract Factory Deployment
                    </p>
                    <p class="fs-6 text-center" style="color: var(--text-color-grey)">
                        · Start AirDrop#3
                    </p>
                </div>
            </div>
        </div>
        <!-- Promotion -->
        <div
            class="container-small container p-0 top-block"
            style="margin-top: 12rem; margin-bottom: 18rem">
            <div class="d-flex-center position-relative">
                <p class="py-2 px-4 m-0 me-3 fs-5" style="background: #79c471; border-radius: 9px">
                    Clue
                </p>
                <div>
                    <p class="fs-4 m-0 text-white position-relative">Subscribe</p>
                    <p class="fs-5 m-0" style="color: #305576">Let's Create Great Things</p>
                </div>
            </div>
            <div class="row d-flex-between-center container-small">
                <div class="d-flex-align-center col-sm-6 mt-5">
                    <i
                        class="d-block"
                        style="
                            width: 10px;
                            height: 85px;
                            background: #79c471;
                            border-radius: 7px;
                        "></i>
                    <p class="fs-3 text-white ml-4">
                        Get the newsletter <br />
                        by subscribing
                    </p>
                </div>
                <div class="col-sm-6 mt-5">
                    <el-input
                        v-model="state.emailInput"
                        placeholder="example@gmail.com"
                        size="large">
                        <template #append>
                            <div class="cursor-pointer" @click="onPushEmail">
                                <i class="iconfont icon-fenxiang1 fs-5 text-black"></i>
                            </div>
                        </template>
                    </el-input>
                </div>
            </div>
        </div>
        <!-- <div class="container">
            <h1 class="text-center bg-dark d-block d-sm-none text-white">{{ `>` }} SM</h1>
            <h1 class="text-center bg-primary d-none d-sm-block d-md-none">SM</h1>
            <h1 class="text-center bg-success d-none d-md-block d-lg-none">MD</h1>
            <h1 class="text-center bg-danger d-none d-lg-block d-xl-none">LG</h1>
            <h1 class="text-center bg-warning d-none d-xl-block d-xxl-none">XL</h1>
            <h1 class="text-center bg-info d-none d-xxl-block">XLL</h1>
        </div> -->
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import anime from 'animejs/lib/anime.es.js'
import * as echarts from 'echarts'
import { doEmail } from '@/api/index.js'
import { ElMessage } from 'element-plus'
import ComimgSoon from '@/components/comimg-soon.vue'
const router = useRouter()
const state = reactive({
    emailInput: '',
    isComimgSoonShow: false,
    contentText: 'ComimgSoon',
})
const elementInView = (el, percentageScroll = 300) => {
    const elementTop = el.getBoundingClientRect().top
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
    )
}
const hideScrollElement = (element) => {
    element.classList.remove('scrolled')
}
const displayScrollElement = (element) => {
    element.classList.add('scrolled')
}
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el)
            anime({
                targets: '.scrolled',
                scale: 2,
                // rotate: '1turn',
                duration: 800,
            })
        } else {
            hideScrollElement(el)
        }
    })
}
let scrollElements
onMounted(() => {
    scrollElements = document.querySelectorAll('.js-scroll')
    scrollElements.forEach((el) => {
        el.style.transform = `scale(0)`
    })
    setTimeout(() => {
        anime({
            targets: '.multi-chain-text',
            translateX: ['-600px', '0px'],
            duration: 1400,
            delay: anime.stagger(200, { start: 200 }),
        })
        anime({
            targets: '.first-screen-img',
            translateX: ['600px', '0px'],
            duration: 1500,
            delay: 1000,
        })
    }, 1)
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 28,
            },
            color: {
                value: ['#0182cc', '#00befa', '#0182cc'],
            },
            shape: {
                type: 'circle',
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                },
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1,
                },
            },
            line_linked: {
                enable: !1,
            },
            move: {
                enable: !0,
                speed: 2,
                direction: 'none',
                random: !0,
                straight: !1,
                out_mode: 'out',
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: !1,
                },
                onclick: {
                    enable: !1,
                },
                resize: !0,
            },
        },
        retina_detect: !0,
    })
    window.addEventListener('scroll', () => {
        handleScrollAnimation()
    })
    setInterval(() => {
        promotionAni()
    }, 4000)
})
const promotion = ref(null)
const promotion2 = ref(null)
const promotionList = ['AMM', 'Trading', 'Swaping']
const promotionList2 = ['Order Book', 'Loosless', 'Without Slippage']
let promotionIndex = 0
const promotionAni = () => {
    if (!promotion.value && !promotion.value?.style) return
    promotion.value.style.opacity = 1
    promotion.value.style.letterSpacing = '2px'
    promotion2.value.style.opacity = 1
    promotion2.value.style.letterSpacing = '2px'
    setTimeout(() => {
        promotion.value.style.opacity = 0
        promotion.value.style.letterSpacing = '30px'
        promotion2.value.style.opacity = 0
        promotion2.value.style.letterSpacing = '30px'
    }, 500)
    setTimeout(() => {
        promotionIndex = promotionIndex + 1
        if (promotionIndex >= promotionList.length) {
            promotionIndex = 0
        }
        promotion.value.innerHTML = promotionList[promotionIndex]
        promotion.value.style.opacity = 1
        promotion.value.style.letterSpacing = '2px'

        promotion2.value.innerHTML = promotionList2[promotionIndex]
        promotion2.value.style.opacity = 1
        promotion2.value.style.letterSpacing = '2px'
    }, 1400)
}
const main = ref(null)
onMounted(() => {
    var chartDom = document.getElementById('main')
    var myChart = echarts.init(chartDom)
    var option

    option = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: '80%',
            left: 'center',
            // doesn't perfectly work with our tricks, disable it
            selectedMode: false,
            textStyle: {
                color: '#fff',
            },
        },
        series: [
            {
                name: 'Needex Economic',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '70%'],
                // adjust the start angle
                startAngle: 180,
                label: {
                    show: true,
                    formatter(param) {
                        // correct the percentage
                        return param.name + ' (' + param.percent * 2 + '%)'
                    },
                },
                data: [
                    { value: 400000000, name: 'Inverstor' },
                    { value: 40000000, name: 'Liquidity' },
                    { value: 400000000, name: 'Team' },
                    { value: 100000000, name: 'Founder' },
                    { value: 1060000000, name: 'Community' },
                    {
                        // make an record to fill the bottom 50%
                        value: 400000000 + 40000000 + 400000000 + 100000000 + 1060000000,
                        itemStyle: {
                            // stop the chart from rendering this piece
                            color: 'none',
                            decal: {
                                symbol: 'none',
                            },
                        },
                        label: {
                            show: false,
                        },
                    },
                ],
            },
        ],
    }
    window.addEventListener('resize', () => {
        // 第六步，执行echarts自带的resize方法，即可做到让echarts图表自适应
        myChart.resize()
    })
    option && myChart.setOption(option)
})
const onPushEmail = async () => {
    var svgg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!svgg.test(state.emailInput)) {
        ElMessage({
            message: 'Email format error',
            type: 'warning',
        })
        return
    }
    const res = await doEmail({
        email: state.emailInput,
    })
    if (res.data.code == 200) {
        ElMessage({
            message: 'Congratulations, your subscription was successful',
            type: 'success',
        })
    }
}
const pushLink = (link) => {
    window.open(link, '_blank')
}
</script>
<style lang="scss">
.multi-chain-text {
    transform: translateX(-600px);
}
.first-screen-img {
    transform: translateX(600px);
}
.home-box {
    padding-top: 140px !important;
    overflow: hidden;
    .container {
        position: relative;
        z-index: 1;
    }
    .top-block {
        width: 100%;
        @include media-breakpoint-up(xl) {
            width: 1100px;
            margin: auto;
        }
        @include media-breakpoint-down(md) {
            width: 97%;
        }
    }
    .padding-sm-0 {
        @include media-breakpoint-down(md) {
            padding: 0 !important;
        }
    }
    .total-trading-volume {
        box-shadow: 0 0.7rem 0.8rem rgba(0, 0, 0, 0.2);
        border: 1px solid hsla(0, 0%, 100%, 0.0784313725490196);
        border-radius: 4px;
        display: flex;
        align-items: center;
        backdrop-filter: blur(4px);
    }
    .button-effect {
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            transform: scale(0.98, 0.95);
            box-shadow: 1px 1px 25px -6px #7ec2f8;
        }
    }

    .first-screen-img {
        width: 400px;
        height: 400px;
        position: relative;
        left: -25px;
        // transform: rotateY(0deg) !important;
        // animation: rotateLogo 5s linear infinite;
        @include media-breakpoint-down(lg) {
            width: 300px;
            height: 300px;
        }
    }
    @keyframes rotateLogo {
        0% {
            transform: rotateY(-50deg);
        }
        50% {
            transform: rotateY(50deg);
        }
        100% {
            transform: rotateY(-50deg);
        }
    }
    .queste-img-box {
        width: 100%;
        height: 180px;
        background: var(--theme-color-blue);
        border-radius: 10px;
        @include media-breakpoint-down(xxl) {
            height: 250px;
        }
        @include media-breakpoint-down(xl) {
            height: 220px;
        }
        @include media-breakpoint-down(lg) {
            height: 280px;
        }
    }
    .el-input__wrapper {
        box-shadow: 0 0 0 1px #79c471 inset !important;
    }
    .el-input-group__append {
        background-color: #79c471;
        box-shadow: 0 0 0 1px #79c471 inset !important;
    }
    .single-roadmap-timeline {
        position: relative;
        top: 0px;
        i:before {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #fff;
            content: '';
        }
        i:after {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 19px;
            height: 19px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            content: '';
        }
        b {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 30px;
            width: 30px;
            background: #fff;
            border-radius: 50%;
            opacity: 0.5;
            animation: loader-6-1 2s infinite;
        }
        @keyframes loader-6-1 {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(1.8);
                opacity: 0;
            }
        }
    }
    .twinkle {
        animation: twinkleain 1s infinite alternate;
    }
    @keyframes twinkleain {
        0% {
            color: #fff;
        }
        100% {
            color: var(--theme-color-purple);
        }
    }
    .single-roadmap-timeline1 {
        opacity: 0.5;
        top: 30px;
        @include media-breakpoint-down(xxl) {
            top: 30px;
        }
        @include media-breakpoint-down(xl) {
            top: 23px;
        }
    }
    .single-roadmap-timeline2 {
        b {
            display: block;
        }
        top: 49px;
        @include media-breakpoint-down(xxl) {
            top: 48px;
        }
        @include media-breakpoint-down(xl) {
            top: 40px;
        }
    }
    .single-roadmap-timeline3 {
        top: 6px;
        @include media-breakpoint-down(xxl) {
            top: 5px;
        }
        @include media-breakpoint-down(xl) {
            top: 3px;
        }
    }
    .single-roadmap-timeline4 {
        top: 77px;
        @include media-breakpoint-down(xxl) {
            top: 76px;
        }
        @include media-breakpoint-down(xl) {
            top: 66px;
        }
    }
    .revolve-img {
        animation: myRotate 20s linear infinite;
        animation-direction: alternate;
    }
    @keyframes myRotate {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    .ball1 {
        width: 70px;
        height: 70px;
        position: absolute;
        top: 1px;
        left: 1px;
        // animation: animX 2s linear infinite alternate, animY 2s linear infinite alternate;
        animation: animX 2s cubic-bezier(0.36, 0, 0.64, 1) -1s infinite alternate,
            animY 2s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
            scale 4s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
    }
    @keyframes animX {
        0% {
            left: -58px;
        }
        100% {
            left: 313px;
        }
    }
    @keyframes animY {
        0% {
            top: 0px;
        }
        100% {
            top: 243px;
        }
    }
    @keyframes scale {
        0% {
            transform: scale(0.7);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.7);
        }
    }
    .float {
        animation: myFloat 4s ease-in-out infinite;
        animation-direction: alternate;
    }
    @keyframes myFloat {
        0% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(20px);
        }
    }
}
</style>
