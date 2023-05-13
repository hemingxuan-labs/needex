/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({})
const pushLink = (link) => {
    window.open(link, '_blank')
}
</script>
<template>
    <div
        class="footer p-2 px-5 d-flex justify-content-between align-items-center"
        style="
            background-color: #000;
            box-shadow: 0px -6px 6px 0px rgba(107, 7, 243, 0.85);
            overflow: hidden;
        ">
        <div>
            <div class="d-flex-align-center">
                <img
                    src="https://storage.googleapis.com/needex/image/logo.png"
                    style="width: 45px"
                    @click="router.push('/')" />
                <div>
                    <p class="fs-6 text-white ml-4">Needex</p>
                    <p class="fs-8 ml-4" style="color: rgb(139, 145, 157)">Powered by Gridex</p>
                </div>
            </div>
            <p class="fs-8 mt-2" style="color: #918c8c">Needex © 2023. All right reserved.</p>
        </div>
        <div>
            <p class="text-end fs-8" style="color: #918c8c">Privacy Policy | Terms & Conditions</p>
            <div class="mt-2 d-flex justify-content-end">
                <i class="iconfont icon-discord text-white fs-3 ms-3" style="cursor: pointer"></i>
                <i
                    class="iconfont icon-twitter-fill text-white fs-3 ms-3"
                    style="cursor: pointer"
                    @click="pushLink('https://twitter.com/NeedexLabs')"></i>
                <i
                    class="iconfont icon-medium text-white fs-3 ms-3"
                    style="cursor: pointer"
                    @click="pushLink('https://discord.gg/X4PutAK7Fy')"></i>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.footer {
    position: relative;
    z-index: 3;
}
</style>
