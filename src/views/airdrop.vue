/** * @file * @author 何明暄 */
<template>
    <div>
        <div class="container-small container p-0 top-block">
            <img
                class="d-block m-auto mb-4 mt-2"
                style="width: 37%"
                src="https://storage.googleapis.com/needex/image/airdrop.png" />
            <div class="row d-flex-between-center mt-5 px-4">
                <div class="col-md-6">
                    <h1 class="text-white fs-1">AirDrop</h1>
                    <h5 class="mt-3" style="color: var(--text-color-grey)">
                        It will be publishing the airdrop#1 rules soon, <br />
                        join the community to get the latest news.
                    </h5>
                </div>
                <div class="col-md-6 d-flex-center">
                    <div
                        class="text-white d-flex-center flex-column position-relative"
                        style="width: 60px">
                        <h1 class="fs-0">{{ state.leftd }}</h1>
                        <span class="position-absolute fs-7" style="opacity: 0.5; top: 70px"
                            >Days</span
                        >
                    </div>
                    <div
                        class="mx-4"
                        style="
                            background: #fff;
                            width: 12px;
                            height: 12px;
                            opacity: 0.4;
                            border-radius: 50%;
                        "></div>
                    <div
                        class="text-white d-flex-center flex-column position-relative"
                        style="width: 60px">
                        <h1 class="fs-0">{{ state.lefth }}</h1>
                        <span class="position-absolute fs-7" style="opacity: 0.5; top: 70px"
                            >Hours</span
                        >
                    </div>
                    <div
                        class="mx-4"
                        style="
                            background: #fff;
                            width: 12px;
                            height: 12px;
                            opacity: 0.4;
                            border-radius: 50%;
                        "></div>
                    <div
                        class="text-white d-flex-center flex-column position-relative"
                        style="width: 60px">
                        <h1 class="fs-0">{{ state.leftm }}</h1>
                        <span class="position-absolute fs-7" style="opacity: 0.5; top: 70px"
                            >Minutes</span
                        >
                    </div>
                    <div
                        class="mx-4"
                        style="
                            background: #fff;
                            width: 12px;
                            height: 12px;
                            opacity: 0.4;
                            border-radius: 50%;
                        "></div>
                    <div
                        class="text-white d-flex-center flex-column position-relative"
                        style="width: 60px">
                        <h1 class="fs-0">{{ state.lefts }}</h1>
                        <span class="position-absolute fs-7" style="opacity: 0.5; top: 70px"
                            >Seconds</span
                        >
                    </div>
                </div>
            </div>

            <div class="mt-7 d-flex d-flex-center" style="margin-bottom: 7rem">
                <i
                    class="iconfont icon-discord text-white fs-1 mx-4"
                    style="cursor: pointer"
                    @click="pushLink('https://discord.gg/X4PutAK7Fy')"></i>
                <i
                    class="iconfont icon-twitter-fill text-white fs-1 mx-4"
                    style="cursor: pointer"
                    @click="pushLink('https://twitter.com/NeedexLabs')"></i>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
const state = reactive({
    leftd: '00',
    lefth: '00',
    leftm: '00',
    lefts: '00',
})
function addZero(i) {
    return i < 10 ? '0' + i : i
}
var showtime = function () {
    var nowtime = new Date(), //获取当前时间
        endtime = new Date('2023/4/28') //定义结束时间
    var lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
        leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
        lefth = Math.floor((lefttime / (1000 * 60 * 60)) % 24), //计算小时数
        leftm = Math.floor((lefttime / (1000 * 60)) % 60), //计算分钟数
        lefts = Math.floor((lefttime / 1000) % 60) //计算秒数
    // return addZero(leftd) + ':' + addZero(lefth) + ':' + leftm + ':' + lefts //返回倒计时的字符串
    state.leftd = addZero(leftd)
    state.lefth = addZero(lefth)
    state.leftm = addZero(leftm)
    state.lefts = addZero(lefts)
}
showtime()
setInterval(function () {
    showtime()
}, 1000)
const pushLink = (link) => {
    window.open(link, '_blank')
}
</script>
<style lang="scss" scoped>
.top-block {
    width: 100%;
    @include media-breakpoint-up(xl) {
        width: 940px;
        margin: auto;
    }
    @include media-breakpoint-down(md) {
        width: 97%;
    }
}
</style>
