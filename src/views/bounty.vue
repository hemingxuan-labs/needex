/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
import BountyCard from '@/components/bounty-card.vue'
const state = reactive({})
const listItem = [
    {
        title: 'DEX',
        discrepotion: 'Uniswap(V3)',
    },
    {
        title: 'Pool Address',
        discrepotion: '0x8ff9...3f87k9',
    },
    {
        title: 'Market Cap',
        discrepotion: '$1,209,934,932',
    },
    {
        title: 'Holds',
        discrepotion: '1,297,823',
    },
    {
        title: 'Trading Pair',
        discrepotion: 'ETH-USDT',
    },
    {
        title: 'Volume(24h)',
        discrepotion: '$1,200,399',
    },
    {
        title: 'Pool Locked',
        discrepotion: 'Yes',
    },
    {
        title: 'Total Transactions',
        discrepotion: '1,900,822',
    },
    {
        title: 'Total Pool',
        discrepotion: '$29,888,309.99',
    },
    {
        title: 'Pooled(ETH)',
        discrepotion: '$29,888,309.99',
    },
    {
        title: 'Pooled(USDT)',
        discrepotion: '$29,888,309.99',
    },
    {
        title: 'Pool created',
        discrepotion: '10/10/2022 03:14',
    },
]
</script>
<template>
    <div class="bounty-box pb-5">
        <!-- <div class="container">
            <h1 class="text-center bg-dark d-block d-sm-none text-white">{{ `>` }} SM</h1>
            <h1 class="text-center bg-primary d-none d-sm-block d-md-none">SM</h1>
            <h1 class="text-center bg-success d-none d-md-block d-lg-none">MD</h1>
            <h1 class="text-center bg-danger d-none d-lg-block d-xl-none">LG</h1>
            <h1 class="text-center bg-warning d-none d-xl-block d-xxl-none">XL</h1>
            <h1 class="text-center bg-info d-none d-xxl-block">XLL</h1>
        </div> -->
        <div class="bounty-box-content container-fluid mx-auto">
            <div class="row">
                <div class="trade-box col-lg-4 px-0">
                    <div
                        class="trade-box-content px-0 pt-2 pb-0 d-flex flex-column justify-content-between"
                        style="height: 100%">
                        <div>
                            <div class="container-fluid d-flex justify-content-between my-1">
                                <p class="text-white fs-5 my-0">Trade</p>
                                <i class="iconfont icon-setting text-white fs-4"></i>
                            </div>
                            <i class="line-tewxe d-block"></i>
                            <div
                                class="trade-item mx-2 my-3 p-3 d-flex flex-column justify-content-between">
                                <div class="d-flex justify-content-between">
                                    <span class="trade-item-text fs-5 text-white">100330</span>
                                    <div
                                        class="trade-usdt-item px-2 py-0 rounded-pill d-flex align-items-center">
                                        <img
                                            class="d-block me-2"
                                            style="width: 24px"
                                            src="https://storage.googleapis.com/needex/image/usdt.png" />
                                        <span class="fs-6 d-none d-sm-inline fw-bold">USDT</span>
                                        <i class="iconfont icon-arrow-down-bold fs-5 ms-2"></i>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <span class="trade-item-describe fs-6 text-black-80"
                                        >$ 1000</span
                                    >
                                    <span class="trade-item-describe fs-6 text-black-80"
                                        >Balance : 2788</span
                                    >
                                </div>
                            </div>
                            <div
                                class="trade-item mx-2 my-3 p-3 d-flex flex-column justify-content-between">
                                <div class="d-flex justify-content-between">
                                    <span class="trade-item-text fs-5 text-white">100330</span>
                                    <div
                                        class="trade-usdt-item px-2 py-0 rounded-pill d-flex align-items-center">
                                        <img
                                            class="d-block me-2"
                                            style="width: 24px"
                                            src="https://storage.googleapis.com/needex/image/ethico.png" />
                                        <span class="fs-6 d-none d-sm-inline fw-bold">ETH</span>
                                        <i class="iconfont icon-arrow-down-bold fs-5 ms-2"></i>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <span class="trade-item-describe fs-6 text-black-80"
                                        >$ 1000</span
                                    >
                                    <span class="trade-item-describe fs-6 text-black-80"
                                        >Balance : 2788</span
                                    >
                                </div>
                                <hr />
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <i class="iconfont icon-tishi fs-5" style="color: #000"></i>
                                        <span class="ms-2" style="color: #c5c5c5; font-size: 12px"
                                            >1 ETH = 1,554.91 USDT
                                        </span>
                                    </div>
                                    <span style="color: #c5c5c5; font-size: 10px"
                                        >Gas Fee : $3.22</span
                                    >
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="ms-4" style="color: #c5c5c5; font-size: 12px"
                                        >Price Impact
                                    </span>
                                    <span style="color: #c5c5c5; font-size: 10px">0.03%</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="mx-2">
                                <p class="fs-6 my-2" style="color: #c5c5c5">Total Fee : $6.22</p>
                                <p class="fs-6 my-2" style="color: #c5c5c5">
                                    Expected Output Rewards : 3% ≈0.08 ETH($15.11)
                                </p>
                                <p class="fs-6 my-2" style="color: #c5c5c5">
                                    Minimum received after slippage : ≈0.06 ETH($9.11)
                                </p>
                            </div>
                            <div
                                class="trade-button mt-4 d-flex align-items-center justify-content-center">
                                <span class="fs-5 text-white">Trade</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-info-box col-lg-8 px-0">
                    <div
                        class="project-info container-fluid py-1 px-3 ps-4 d-flex justify-content-between align-items-center">
                        <img
                            class="project-info-logo d-none d-sm-block"
                            src="https://storage.googleapis.com/needex/image/logo.png" />
                        <div class="project-info-content flex-grow-1" style="margin-left: 2rem">
                            <div class="mt-2">
                                <h4 class="text-white d-inline">Project Name</h4>
                                <p class="symbol fs-6 d-inline ms-3">Symbol</p>
                            </div>
                            <div>
                                <i class="iconfont icon-internet text-black fs-2 me-3"></i>
                                <i class="iconfont icon-twitter-fill text-black fs-2 me-3"></i>
                                <i class="iconfont icon-discord text-black fs-2 me-3"></i>
                            </div>
                            <div class="d-flex align-items-center">
                                <span class="text-white fs-6 me-3">Contracts: </span>
                                <img
                                    class="d-block me-3"
                                    style="width: 24px"
                                    src="https://storage.googleapis.com/needex/image/ethico.png" />
                                <span class="text-white fs-6 me-3 d-flex">
                                    <span class="d-none d-xl-block">Ethereum : </span>
                                    <span> 0x3ff...8fu997</span>
                                </span>
                                <i class="iconfont icon-fuzhi text-white fs-5 ms-2"></i>
                            </div>
                            <div class="mt-2">
                                <span class="text-white fs-6 me-3">Trading Rewards : </span>
                            </div>
                            <div class="progress-bar mt-2"></div>
                            <div class="progress-bar-width d-flex justify-content-between mt-1">
                                <span class="text-white fs-5">0 $</span>
                                <span class="text-white fs-5">1,000,000 $</span>
                            </div>
                            <div class="mt-1">
                                <h5 class="text-white">Ending Time : 27d 18:32:13</h5>
                            </div>
                        </div>
                    </div>
                    <div class="project-info-dex container-fluid mt-5 px-0 py-3">
                        <div class="row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-2 g-lg-3">
                            <div class="col my-1" v-for="item in listItem">
                                <div
                                    class="p-3 d-flex flex-column justify-content-center alinge-items-center">
                                    <p
                                        class="pool-address-text m-0 text-center"
                                        style="font-size: 0.9rem">
                                        {{ item.title }}
                                    </p>
                                    <p class="m-0 fs-6 text-white text-center mt-1">
                                        {{ item.discrepotion }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid row row-cols-2 row-cols-lg-4 mx-auto">
            <div class="col mt-5">
                <h6 class="m-0 text-center text-white">Total Trading Volume</h6>
                <h3 class="m-0 text-center text-white mt-2">$1,098,907,723</h3>
            </div>
            <div class="col mt-5">
                <h6 class="m-0 text-center text-white">24H Trading Volume</h6>
                <h3 class="m-0 text-center text-white mt-2">$48,907,723</h3>
            </div>
            <div class="col mt-5">
                <h6 class="m-0 text-center text-white">Transaction</h6>
                <h3 class="m-0 text-center text-white mt-2">75</h3>
            </div>
            <div class="col mt-5">
                <h6 class="m-0 text-center text-white">Users</h6>
                <h3 class="m-0 text-center text-white mt-2">19,075</h3>
            </div>
        </div>

        <div class="buy-cons-table mt-5 mx-auto">
            <table class="table">
                <thead>
                    <tr class="title-tr">
                        <th scope="col">Date</th>
                        <th scope="col">Type</th>
                        <th scope="col">Price USD</th>
                        <th scope="col">Amount ETH</th>
                        <th scope="col">Total USDT</th>
                        <th scope="col">Rewards ETH</th>
                        <th scope="col">Rewards USDT</th>
                        <th scope="col">User</th>
                    </tr>
                </thead>
                <tbody class="tbody-contnet">
                    <tr class="green">
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr class="red">
                        <td>Mark</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Mark</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr class="green">
                        <td>Mark</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Mark</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr class="green">
                        <td>Mark</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Mark</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="ongoing-box mx-auto" style="margin-top: 6rem">
            <h3 style="color: var(--theme-color-yellow)">Ongoing</h3>
            <div class="ongoing-line my-4"></div>
            <div class="bountycard-box container-fluid p-0">
                <div class="bountycard-scholl d-flex justify-content-between">
                    <BountyCard v-for="item in 5" class="me-4" />
                </div>
            </div>
            <h3 class="text-white mt-5">Uocoming</h3>
            <div class="ongoing-line my-4"></div>
            <div class="bountycard-box container-fluid p-0">
                <div class="bountycard-scholl d-flex justify-content-between">
                    <BountyCard v-for="item in 5" class="me-4" />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.bounty-box {
    .bounty-box-content {
        width: 90%;
        @include media-breakpoint-down(lg) {
            width: 97%;
        }
    }
    .trade-box {
        .trade-box-content {
            width: 95%;
            background: #2a2540;
            border-radius: 20px;
            @include media-breakpoint-down(lg) {
                width: 100%;
            }
            .line-tewxe {
                width: 100%;
                height: 4px;
                background: #666666;
                border-radius: 2px;
            }
            .trade-item {
                min-height: 100px;
                background: rgba($color: #fff, $alpha: 0.2);
                border-radius: 10px;
                .trade-item-text {
                    color: #ffffff;
                }
                .trade-usdt-item {
                    background: rgba($color: #fff, $alpha: 0.5);
                }
                .trade-item-describe {
                    color: $gray-500;
                }
            }
            .trade-button {
                height: 60px;
                background: #48416c;
                border: 1px solid #0000ff;
                border-radius: 0px 0px 20px 20px;
            }
        }
    }
    .project-info-box {
        @include media-breakpoint-down(lg) {
            margin-top: 20px;
        }
        .project-info {
            height: 270px;
            background: #48416c;
            border: 2px solid #9681b6;
            border-radius: 20px;
            .project-info-logo {
                height: 80%;
            }
            .project-info-content {
                width: 70%;
                @include media-breakpoint-down(xl) {
                    width: 55%;
                }
                @include media-breakpoint-down(lg) {
                    width: 68%;
                }
                @include media-breakpoint-down(sm) {
                    width: 100%;
                }
                .symbol {
                    color: #888;
                }
                .progress-bar {
                    width: 90%;
                    height: 15px;
                    background: #cdcdcd;
                    border-radius: 8px;
                }
                .progress-bar-width {
                    width: 90%;
                }
            }
        }
        .project-info-dex {
            background: #2a2540;
            border-radius: 30px;
        }
    }
    .pool-address-text {
        color: #999;
    }
    .buy-cons-table {
        width: 90%;
        background-color: #180a32;
        border: 1px solid #9681b6;
        border-radius: 25px;
        overflow-x: auto;
        &::-webkit-scrollbar {
            width: 0 !important;
        }
        @include media-breakpoint-down(lg) {
            width: 97.5%;
        }
        th {
            text-align: center;
        }
        tr {
            border-color: #9681b6;
            td {
                text-align: center;
            }
        }

        .title-tr {
            color: #666;
        }
        .tbody-contnet:last-child {
            border: none !important;
        }
        .green {
            color: #5dae7f;
        }
        .red {
            color: #d23956;
        }
    }
    .ongoing-box {
        width: 90%;
        @include media-breakpoint-down(lg) {
            width: 97.5%;
        }
        .ongoing-line {
            height: 3px;
            background: #212996;
            border-radius: 2px;
        }
        .bountycard-box {
            overflow-x: auto;
            &::-webkit-scrollbar {
                width: 0 !important;
            }
            .bountycard-scholl {
                min-width: 1200px;
            }
        }
    }
}
// @include media-breakpoint-up(sm) { ... }
// @include media-breakpoint-up(md) { ... }
// @include media-breakpoint-up(lg) { ... }
// @include media-breakpoint-up(xl) { ... }
</style>
