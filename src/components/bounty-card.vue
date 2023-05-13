<template>
    <div class="bounty-card px-2 py-3">
        <div
            class="m-auto mt-1 rounded-circle d-flex justify-content-center align-items-center shadow"
            style="width: 150px; height: 150px; background: #fff">
            <img style="width: 80px" src="https://storage.googleapis.com/needex/image/logo.png" />
        </div>
        <h5 class="text-white text-center mt-3">Needex</h5>
        <div class="d-flex justify-content-center mt-3">
            <span
                class="py-0 px-2 text-white fs-7 mx-1"
                style="border: 2px solid #31b573; border-radius: 6px">
                Defi
            </span>
            <span
                class="py-0 px-2 text-white fs-7 mx-1"
                style="border: 2px solid var(--theme-color-blue); border-radius: 6px">
                Tools
            </span>
            <span
                class="py-0 px-2 text-white fs-7 mx-1"
                style="border: 2px solid var(--theme-color-purple); border-radius: 6px">
                Gaming
            </span>
            <span
                class="py-0 px-2 text-white fs-7 mx-1"
                style="border: 2px solid #00a8ec; border-radius: 6px">
                Farm
            </span>
        </div>
        <p class="text-center text-white px-2 mt-3" style="font-size: 10px">
            Multi-chain crypto asset group purchase solution platform
        </p>
        <h6 class="text-center text-white">Up to 25% off for $CLUE</h6>
        <div class="d-flex justify-content-center align-items-center mt-2">
            <p class="text-white fs-7 m-1 me-4">Amount:</p>
            <p class="text-white fs-7 m-1">10,000,000</p>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <p class="text-white fs-7 m-1 me-4">Balance:</p>
            <p class="text-white fs-7 m-1">3,000,000</p>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <p class="text-white fs-7 m-1 me-4">Participated:</p>
            <p class="text-white fs-7 m-1">3090</p>
        </div>
        <div class="mt-3" style="width: 100%; height: 1px; background: #fff; opacity: 0.3"></div>
        <div class="d-flex justify-content-between align-items-center mt-3" style="width: 100%">
            <span class="fs-7" style="color: #999">Ending Time</span>
            <span class="fs-7" style="color: #999">4 days 16:33:43</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'bounty-card',
    data() {
        return {}
    },
}
</script>
<style lang="scss" scoped>
.bounty-card {
    width: 100%;
    border: 2px solid #3d107b;
    background: linear-gradient(180deg, #7547b1 0%, #251046 100%);
    border-radius: 16px;
    // @include media-breakpoint-down(xxl) {
    //     width: 205px;
    //     height: 300px;
    // }
}
</style>
