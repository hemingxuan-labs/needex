/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({
    clueActive: 0,
})
const clueList = [
    {
        title: 'All',
    },
    {
        title: 'General',
    },
    {
        title: 'DeFi',
    },
    {
        title: 'NFT',
    },
    {
        title: 'Ecosystem',
    },
]
</script>
<template>
    <div>
        <div class="container container-small">
            <!-- <div class="container">
                <h1 class="text-center bg-dark d-block d-sm-none text-white">{{ `>` }} SM</h1>
                <h1 class="text-center bg-primary d-none d-sm-block d-md-none">SM</h1>
                <h1 class="text-center bg-success d-none d-md-block d-lg-none">MD</h1>
                <h1 class="text-center bg-danger d-none d-lg-block d-xl-none">LG</h1>
                <h1 class="text-center bg-warning d-none d-xl-block d-xxl-none">XL</h1>
                <h1 class="text-center bg-info d-none d-xxl-block">XLL</h1>
            </div> -->
            <div class="row">
                <div
                    class="col-0 col-md-3 d-none d-md-block px-4 py-4"
                    style="background: var(--G800); border-radius: 25px; height: fit-content">
                    <h6 class="mb-3" style="color: var(--B200)">Categories</h6>
                    <div>
                        <p
                            class="categories-item pl-3 py-2 WT60 fs-7 mb-2"
                            :class="{ active: index == state.clueActive }"
                            style="
                                border-radius: 20px;
                                transition: 0.3s;
                                border: 1px solid transparent;
                                cursor: pointer;
                            "
                            v-for="(item, index) in clueList"
                            @click="state.clueActive = index">
                            {{ item.title }}
                        </p>
                    </div>
                </div>
                <div class="clue-items-box col-12 col-md-9 p-0 pl-4">
                    <div class="p-4" style="background: var(--G800); border-radius: 25px">
                        <div
                            class="d-flex my-3 d-block d-md-none categories-item-top-box"
                            style="overflow-y: auto">
                            <p
                                class="categories-item-top WT60 mr-1 py-1 px-3"
                                :class="{ 'active-top': index == state.clueActive }"
                                v-for="(item, index) in clueList"
                                @click="state.clueActive = index">
                                {{ item.title }}
                            </p>
                        </div>
                        <div class="mb-3" v-for="(item, index) in 20">
                            <div class="clue-items p-3 px-3 d-flex align-items-center">
                                <div
                                    class="rounded-circle"
                                    style="
                                        width: 58px;
                                        height: 58px;
                                        background-color: var(--B200);
                                    ">
                                    <img src="" alt="" />
                                </div>
                                <div class="ml-4 flex-1">
                                    <div class="text-white m-0 d-flex-align-center">
                                        <h5>ENS Serial Registerer</h5>
                                        <div
                                            class="fs-7 px-2 d-flex align-items-center ml-2"
                                            style="
                                                background: var(--WT10);
                                                border-radius: 10px;
                                                padding-top: 2px;
                                                padding-bottom: 2px;
                                            ">
                                            <i
                                                class="iconfont icon-wode-wode fs-7"
                                                style="color: var(--G400)"></i>
                                            <span class="fs-7 ml-1" style="color: var(--G100)"
                                                >2,2231</span
                                            >
                                        </div>
                                        <div
                                            class="fs-7 px-2 d-flex align-items-center ml-2"
                                            style="
                                                background: var(--WT10);
                                                border-radius: 10px;
                                                padding-top: 2px;
                                                padding-bottom: 2px;
                                            ">
                                            <i
                                                class="iconfont icon-ethereum fs-7"
                                                style="color: var(--G400)"></i>
                                        </div>
                                    </div>
                                    <p class="fs-7 WT80 m-0 mt-2">
                                        Registered ENS Domains 3+ times
                                    </p>
                                    <el-progress class="mt-1" :percentage="50" />
                                </div>
                            </div>
                            <div
                                class="m-auto"
                                style="
                                    width: 92%;
                                    background: var(--G600);
                                    border-radius: 0px 0px 28px 28px;
                                "
                                v-if="item % 3 == 1">
                                <div class="d-flex-center">
                                    <i class="iconfont icon-arrow-down-bold text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.categories-item:hover {
    background-color: var(--WT10);
}
.active {
    color: #fff;
    font-weight: 600;
    background-clip: padding-box, border-box;
    background-image: linear-gradient(rgb(32, 23, 63), rgb(32, 23, 63)),
        radial-gradient(circle at left top, rgb(126, 117, 236), rgb(185, 97, 236));
    border: 1px double transparent;
}
.categories-item-top-box {
    &::-webkit-scrollbar {
        width: 0 !important;
    }
}
.categories-item-top {
    border-radius: 20px;
    border: 1px double transparent;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: var(--WT10);
    }
}
.active-top {
    background-clip: padding-box, border-box;
    background-image: linear-gradient(rgb(32, 23, 63), rgb(32, 23, 63)),
        radial-gradient(circle at left top, rgb(126, 117, 236), rgb(185, 97, 236));
    border: 1px double transparent;
}
.clue-items-box {
    @include media-breakpoint-down(md) {
        padding-left: 0 !important;
    }
    .clue-items {
        border-radius: 24px;
        background-clip: padding-box, border-box;
        background-image: linear-gradient(var(--G700), var(--G700)),
            radial-gradient(circle at top left, rgba(126, 117, 236, 0.5), rgba(185, 97, 236, 0.5));
        border: 2px double transparent;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px 0px;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            background-origin: border-box;
            background-clip: padding-box, border-box;
            background-image: linear-gradient(var(--G800), var(--G800)),
                radial-gradient(circle at top left, rgba(126, 117, 236, 1), rgba(185, 97, 236, 1));
            border: 2px double transparent;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 20px 0px;
        }
        .el-progress-bar__outer {
            background-color: var(--WT15) !important;
        }
        .el-progress-bar__inner {
            background-color: var(--theme-color-purple) !important;
        }
        .el-progress__text {
            color: var(--WT100);
            font-weight: 700;
            font-size: 0.875em;
            margin-left: 12px;
        }
    }
}
</style>
