/** * @file * @author 何明暄 */
<template>
    <div
        class="position-fixed bottom-0 start-0 px-4 d-flex-between-center fs-8 text-color-grey"
        style="
            width: 100vw;
            height: 28px;
            border-top: 1px solid #2c2d30;
            background-color: var(--trade-bg);
            z-index: 2;
        ">
        <div class="d-flex-align-center">
            <span class="ml-2">Needex © 2023. All right reserved.</span>
        </div>
        <div class="d-flex-align-center">
            <i class="iconfont icon-qukuai text-color-green"></i>
            <span class="text-color-green ml-1">75502394</span>
            <i
                class="d-block ml-2"
                style="width: 1px; height: 10px; background-color: rgba(255, 255, 255, 0.3)"></i>
            <span class="ml-2" style="color: var(--WT100)">Needex</span>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
const state = reactive({})
</script>

<style lang="scss" scoped></style>
