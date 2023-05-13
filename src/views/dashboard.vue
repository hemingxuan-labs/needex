/** * @file * @author 何明暄 */
<script setup>
import { reactive, computed } from 'vue'
import Jazzicon from '@/components/jazzicon.vue'
import { useStore } from 'vuex'
const store = useStore()
const assets = computed(() => store.state.persistence.assets)
const state = reactive({
    claimAssetsList: [
        {
            value: 'All',
            lable: 'all',
        },
        {
            value: 'Claimed',
            lable: 'claimed',
        },
        {
            value: 'No Claim',
            lable: 'noClaim',
        },
        {
            value: 'Statistics',
            lable: 'statistics',
        },
    ],
    claimAssetsActive: 'all',
})
</script>
<template>
    <div class="dashboard-box">
        <div class="container-fluid p-0 px-3" style="background: #2a2038">
            <div class="row p-3">
                <div class="welcome-box col-lg-6 d-flex align-items-center p-4 pt-0 pt-lg-4">
                    <div class="d-none d-sm-block">
                        <Jazzicon :address="assets" :diameter="100" />
                    </div>
                    <div class="ms-4">
                        <h6 class="text-white">Hi,0x6756...98f6df</h6>
                        <h6 class="text-white mt-4">
                            Welcome to Needex,please checking your Record.
                        </h6>
                    </div>
                </div>
                <div
                    class="col-lg-6 d-flex justify-content-around align-items-center p-4 pb-0 pb-lg-4">
                    <div>
                        <h6 class="text-center" style="color: #999999">Total Transaction</h6>
                        <h5 class="text-center text-white mt-4">893</h5>
                    </div>
                    <div>
                        <h6 class="text-center" style="color: #999999">Total Trading Volume</h6>
                        <h5 class="text-center text-white mt-4">$1,982,932</h5>
                    </div>
                    <div>
                        <h6 class="text-center" style="color: #999999">Total Rewards</h6>
                        <h5 class="text-center text-white mt-4">$12,932</h5>
                    </div>
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
        <div class="container-fluid p-4 px-5">
            <div class="row">
                <div
                    class="claim-table-box col-md-2 col-lg-3 d-flex align-items-center p-0"
                    style="height: fit-content">
                    <div
                        class="claim-table d-flex p-4"
                        style="background: #2a2540; width: 96%; height: 100%; border-radius: 20px">
                        <div
                            class="line d-none d-lg-block"
                            style="
                                width: 6px;
                                height: 260px;
                                background: #48416c;
                                border-radius: 4px;
                            "></div>
                        <div class="ms-3 align-items-start">
                            <h5 style="color: #bd89f7">Claim Your Assets</h5>

                            <div class="d-flex d-md-block">
                                <h6
                                    class="claim-table-item cursor-pointer mt-3 p-2"
                                    v-for="item in state.claimAssetsList"
                                    :class="{ active: state.claimAssetsActive == item.lable }"
                                    @click="state.claimAssetsActive = item.lable">
                                    {{ item.value }}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="list-box col-md-10 col-lg-9 d-flex flex-column py-4"
                    style="background: #2a2540; border-radius: 20px; overflow-x: auto">
                    <div style="min-width: 550px">
                        <div class="d-flex width100 px-2">
                            <p class="fs-7 text-center flex-1" style="color: #999999">Name</p>
                            <p class="fs-7 text-center flex-1" style="color: #999999">Date</p>
                            <p class="fs-7 text-center flex-1" style="color: #999999">Volume</p>
                            <p class="fs-7 text-center flex-1" style="color: #999999">Reward</p>
                            <p
                                class="fs-7 text-center flex-1"
                                style="color: #999999; width: 20%; margin-left: auto">
                                Claim
                            </p>
                        </div>
                        <hr style="background: #999999" />
                        <div
                            class="currency-item p-2 py-1 d-flex align-items-center mb-2 fs-7 width100"
                            v-for="item in 10">
                            <div class="d-flex align-items-center flex-1">
                                <img
                                    style="width: 60px"
                                    src="https://storage.googleapis.com/needex/image/dashboard-icon1.png" />
                                <p class="fs-6 text-white ml-2">CHZ</p>
                            </div>
                            <p class="text-white m-0 text-center flex-1">08:33:23 09/03/2023</p>
                            <p class="text-white m-0 text-center flex-1">$1,000,000</p>
                            <p class="text-white m-0 text-center flex-1">10,002 CHZ</p>
                            <div class="d-flex-center flex-1">
                                <el-button
                                    type="primary"
                                    class="width100"
                                    style="border-radius: 22px; width: 120px"
                                    >Claim
                                </el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.dashboard-box {
    .el-button {
        background: var(--theme-color-purple);
        border: none;
        transition: 0.3s;
        &:hover {
            background: var(--theme-color-purple);
        }
    }
    .welcome-box {
        border-right: 1px solid #999999;
        @include media-breakpoint-down(lg) {
            border-right: none;
            border-bottom: 1px solid #999999;
        }
    }
    .claim-table {
        @include media-breakpoint-down(md) {
            width: 100% !important;
        }
        @include media-breakpoint-down(lg) {
            padding: 1rem 0 !important;
        }
    }
    .claim-table-item {
        color: #999999;
        border-radius: 18px;
    }
    .claim-table-item.active {
        color: #fff !important;
    }
    .list-box {
        @include media-breakpoint-down(md) {
            margin-top: 10px !important;
        }
    }
    .currency-item {
        background: #48416c;
        border: 2px solid #9681b6;
        border-radius: 20px;
    }
}
// @include media-breakpoint-up(sm) { ... }
// @include media-breakpoint-up(md) { ... }
// @include media-breakpoint-up(lg) { ... }
// @include media-breakpoint-up(xl) { ... }
</style>
