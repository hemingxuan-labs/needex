/** * @file * @author 何明暄 */
<template>
    <!-- 移动端样式 -->
    <div
        class="mobile-trade d-block d-md-none"
        style="background: var(--trade-bg); padding-top: 58px">
        <div class="p-2">
            <el-tabs v-model="state.activeName" class="transaction-operations">
                <el-tab-pane label="Maker" name="Maker"></el-tab-pane>
                <el-tab-pane label="Swap" name="Swap"></el-tab-pane>
            </el-tabs>
        </div>
        <!-- <div class="position-relative" style="height: 400px">
            <Kline style="width: 100%" class="flex-1" />
        </div> -->
        <div class="d-flex">
            <div
                class="m-0 p-2 pt-0 webkit-scrollbar-none"
                style="width: 55%; border-right: 1px solid #2c2d30; overflow-y: auto">
                <div>
                    <div
                        class="d-flex mt-3"
                        style="background-color: rgb(41, 43, 48); border-radius: 10px">
                        <div
                            class="p-2 fs-8 text-white d-flex-center cursor-pointer"
                            :class="{ 'active-buy': state.buySell == 'buy' }"
                            style="width: 50%; border-radius: 10px"
                            @click="state.buySell = 'buy'">
                            Buy USDC
                        </div>
                        <div
                            class="p-2 fs-8 text-white d-flex-center cursor-pointer"
                            :class="{ 'active-sell': state.buySell == 'sell' }"
                            style="width: 50%; border-radius: 10px"
                            @click="state.buySell = 'sell'">
                            Sell USDC
                        </div>
                    </div>
                    <div v-if="state.activeName == 'Maker'">
                        <div class="d-flex-align-center justify-content-end mt-2">
                            <el-checkbox
                                class="ml-3"
                                v-model="state.allMakers"
                                label="Relative Mode"
                                size="small" />
                        </div>
                        <div class="position-relative mt-2">
                            <el-input
                                class="el-input__myprice"
                                v-model="state.enterPrice"
                                size="large"
                                placeholder="Price" />
                            <p
                                class="fs-8 position-absolute top-50 translate-middle-y text-color-grey"
                                style="left: 8px">
                                Price
                            </p>
                            <p
                                class="fs-8 position-absolute top-50 translate-middle-y text-color-grey"
                                style="right: 8px">
                                ETH
                            </p>
                        </div>

                        <p class="fs-8 mt-2 text-color-grey" v-if="state.enterPrice == ''">
                            After an exchange price is entered, the system will generate a range
                            that includes the exchange price.
                        </p>
                        <div class="px-2 mt-2" v-else>
                            <el-slider
                                v-model="state.enterPrice"
                                :step="0.000000343"
                                :min="minElSlider"
                                :max="maxElSlider"
                                placement="bottom" />
                        </div>
                        <div class="position-relative mt-3">
                            <el-input
                                class="el-input__myprice"
                                v-model="state.enterAmount"
                                :disabled="state.enterPrice == ''"
                                size="large"
                                placeholder="Amount" />
                            <p
                                class="fs-8 position-absolute top-50 translate-middle-y text-color-grey"
                                style="left: 8px">
                                Amount
                            </p>
                            <p
                                class="fs-8 position-absolute top-50 translate-middle-y text-color-grey"
                                style="right: 8px">
                                ETH
                            </p>
                        </div>
                        <p class="fs-8 mt-1 text-color-grey">Balance: -</p>
                        <hr
                            class="my-3"
                            style="border-color: rgba(255, 255, 255, 0.4); border-style: dashed" />
                        <div class="d-flex-between-center fs-8 my-1 text-color-grey">
                            <span>Price Range</span>
                            <span>-~~- ETH</span>
                        </div>
                        <div class="d-flex-between-center fs-8 my-1 text-color-grey">
                            <span>Order Amount</span>
                            <span>- ETH</span>
                        </div>
                        <div class="d-flex-between-center fs-8 my-1 text-color-grey">
                            <span>Fee Earned (if filled)</span>
                            <span>- USDC</span>
                        </div>
                        <div class="d-flex-between-center fs-8 my-1 text-color-grey">
                            <span>Network Fee</span>
                            <span>~</span>
                        </div>

                        <el-button
                            class="width100 my-2"
                            :class="{ 'active-sell': state.buySell != 'buy' }"
                            style="
                                background: linear-gradient(
                                    90deg,
                                    rgb(0, 197, 173) 0%,
                                    rgb(0, 204, 167) 100%
                                );
                                border: none;
                            "
                            @click="isComimgSoonShow = true"
                            type="primary"
                            ><span v-if="state.buySell == 'buy'"> Buy USDC </span>
                            <span v-else> Sell USDC </span></el-button
                        >
                    </div>
                    <div v-else>
                        <p class="fs-7 mt-3 text-color-grey">Input Amount</p>
                        <div class="position-relative mt-3">
                            <el-input
                                v-model="state.inputAmount"
                                size="large"
                                @input="onInputAmount"
                                placeholder="0.0" />

                            <p
                                class="fs-8 position-absolute top-50 translate-middle-y text-color-grey d-flex-align-center"
                                style="right: 8px">
                                <img
                                    src="https://storage.googleapis.com/needex/image/logo.png"
                                    class="mr-1"
                                    style="width: 24px" />
                                USDC
                            </p>
                        </div>

                        <p class="fs-8 mt-1 text-color-grey">Balance: -</p>

                        <p class="fs-7 mt-3 text-color-grey">Output Amount</p>

                        <div class="position-relative mt-3">
                            <el-input
                                v-model="state.outputAmount"
                                size="large"
                                @input="onOutputAmount"
                                placeholder="0.0" />

                            <p
                                class="fs-8 position-absolute top-50 translate-middle-y text-color-grey d-flex-align-center"
                                style="right: 8px">
                                <img
                                    src="https://storage.googleapis.com/needex/image/ethico.png"
                                    class="mr-1"
                                    style="width: 24px" />
                                ETH
                            </p>
                        </div>
                        <p class="fs-8 mt-1 text-color-grey">Balance: -</p>

                        <el-collapse accordion class="mt-3">
                            <el-collapse-item name="1">
                                <template #title>
                                    <p class="px-3 text-color-grey">
                                        1 USDC = {{ state.currentPrice }} ETH
                                    </p>
                                    <el-icon class="header-icon" color="#8b919d">
                                        <info-filled />
                                    </el-icon>
                                </template>
                                <div class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
                                    <span>Expected Output</span>
                                    <span class="text-white">1441.39 ARB</span>
                                </div>
                                <div class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
                                    <span>Price Impact</span>
                                    <span class="text-white">-0.02%</span>
                                </div>
                                <div class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
                                    <span>Min received after slippage</span>
                                    <span class="text-white">1439.95</span>
                                </div>
                                <div class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
                                    <span>Network Fee</span>
                                    <span class="text-white">$0.3491</span>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                        <div class="width100 my-3">
                            <el-button
                                class="width100"
                                :class="{ 'active-sell': state.buySell != 'buy' }"
                                type="primary"
                                :disabled="state.inputAmount == ''">
                                <span>Enter an amount</span>
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="webkit-scrollbar-none" style="width: 45%; max-height: 500px">
                <div class="d-flex flex-column position-relative" style="height: 100%">
                    <div class="d-flex-between-center px-3 fs-8">
                        <p class="fs-8 text-color-999" style="width: 30%">Price (ETH)</p>
                        <p class="fs-8 text-color-999" style="width: 40%; text-align: center">
                            Amount
                        </p>
                        <p class="fs-8 text-color-999" style="width: 30%; text-align: end">
                            Size (USDC)
                        </p>
                    </div>
                    <div
                        class="width100 position-absolute start-0 fs-7 text-white px-3 d-flex-between-center"
                        v-if="state.scrollbarTopShow"
                        @click="onScrollbarTopShow"
                        style="z-index: 4; top: 73px; height: 40px; background: rgb(41, 43, 48)">
                        <span>{{ state.currentPrice }}</span>
                        <div class="icon-fanhui-box rounded-circle cursor-pointer d-flex-center">
                            <i class="iconfont icon-fanhui"></i>
                        </div>
                    </div>
                    <div
                        class="width100 position-absolute start-0 bottom-0 fs-7 text-white px-3 d-flex-between-center"
                        v-if="state.scrollbarBottomShow"
                        @click="onScrollbarTopShow"
                        style="z-index: 4; height: 40px; background: rgb(41, 43, 48)">
                        <span>{{ state.currentPrice }}</span>
                        <div class="icon-fanhui-box rounded-circle cursor-pointer d-flex-center">
                            <i class="iconfont icon-fanhui"></i>
                        </div>
                    </div>
                    <div
                        class="d-flex position-relative flex-column flex-1 webkit-scrollbar-none"
                        ref="scrollbarBox"
                        style="height: calc(100% - 95px); overflow-y: scroll">
                        <div class="position-relative my-1" ref="scrollbarBox2">
                            <div class="position-relative width100">
                                <div
                                    class="price-item d-flex-between-center px-3 py-1 position-relative width100"
                                    style="height: 26px"
                                    v-for="item in state.currentPriceSellList"
                                    @click="incomingData(item.price)">
                                    <p
                                        class="fs-8"
                                        style="color: rgb(254, 56, 92); width: 33.3333%">
                                        {{ item.price }}
                                    </p>
                                    <p
                                        class="fs-8 text-color-999"
                                        style="width: 33.3333%; text-align: end">
                                        {{ item.amount }}
                                    </p>
                                    <p
                                        class="fs-8 text-color-999"
                                        style="width: 33.3333%; text-align: end">
                                        {{ item.size }}
                                    </p>
                                    <div
                                        class="position-absolute top-0 end-0"
                                        style="
                                            height: 26px;
                                            background-color: rgba(254, 56, 92, 0.1);
                                        "
                                        :style="{ width: `${item.size}%` }"></div>
                                </div>
                                <div class="d-flex-align-center pl-3" ref="scrollbarAnchor">
                                    <p class="text-white" style="font-size: 13px">
                                        {{ state.currentPrice }}
                                    </p>
                                    <i
                                        class="ml-1"
                                        style="
                                            flex: 1;
                                            height: 1px;
                                            display: block;
                                            border-bottom: 1px dashed rgba(116, 118, 171, 0.7);
                                        "></i>
                                </div>
                                <div
                                    class="price-item d-flex-between-center px-3 py-1 position-relative"
                                    v-for="item in state.currentPriceBuyList"
                                    @click="incomingData(item.price)">
                                    <p class="fs-8" style="color: rgb(12 186 113); width: 33.3333%">
                                        {{ item.price }}
                                    </p>
                                    <p
                                        class="fs-8 text-color-999"
                                        style="width: 33.3333%; text-align: end">
                                        {{ item.amount }}
                                    </p>
                                    <p
                                        class="fs-8 text-color-999"
                                        style="width: 33.3333%; text-align: end">
                                        {{ item.size }}
                                    </p>
                                    <div
                                        class="position-absolute top-0 end-0"
                                        style="height: 100%; background: rgba(12, 186, 113, 0.1)"
                                        :style="{ width: `${item.size}%` }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Order />
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
const state = reactive({})
</script>
<style lang="scss" scoped></style>
