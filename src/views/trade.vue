/** * @file * @author 何明暄 */
<template>
    <div class="p-0">
        <div
            class="trade-box d-none d-md-block"
            style="border-top: 1px solid #fff; background: var(--trade-bg)">
            <ComimgSoon :isComimgSoonShow="isComimgSoonShow" @close="isComimgSoonShow = false" />
            <div class="width100 m-0 d-flex" style="width: 100%; height: 100%">
                <!-- 交易操作框 -->
                <div
                    class="m-0 p-2 webkit-scrollbar-none"
                    style="width: 290px; border-right: 1px solid #2c2d30; overflow-y: auto">
                    <el-tabs v-model="state.activeName" class="transaction-operations">
                        <el-tab-pane label="Maker" name="Maker"></el-tab-pane>
                        <el-tab-pane label="Swap" name="Swap"></el-tab-pane>
                    </el-tabs>
                    <div>
                        <div
                            class="p-3 mt-3"
                            style="background-color: rgb(41, 43, 48); border-radius: 8px">
                            <div class="d-flex-between-center">
                                <div class="d-flex-align-center">
                                    <img
                                        class="block"
                                        src="https://storage.googleapis.com/needex/image/ethico.png"
                                        style="width: 26px; height: 26px" />
                                    <span class="text-white fs-7 mx-1">ETH</span>
                                    <i
                                        class="iconfont icon-sanjiaoxia text-white position-relative"
                                        style="top: -2px"></i>
                                </div>
                                <p class="fs-7 text-color-grey">/</p>
                                <div class="d-flex-align-center">
                                    <img
                                        src="https://storage.googleapis.com/needex/image/usdc.png"
                                        style="width: 26px; height: 26px" />
                                    <span class="text-white fs-7 mx-1">USDC</span>
                                    <i
                                        class="iconfont icon-sanjiaoxia text-white position-relative"
                                        style="top: -2px"></i>
                                </div>
                            </div>
                            <hr
                                class="my-3"
                                style="
                                    border-color: rgba(255, 255, 255, 0.4);
                                    border-style: dashed;
                                " />
                            <div
                                class="text-white fs-8 d-flex-between-center"
                                style="font-weight: 400">
                                <span>0.05%Slippage</span>
                                <span
                                    class="px-1 py-0"
                                    style="
                                        background: rgba(255, 255, 255, 0.1);
                                        border-radius: 16px;
                                    "
                                    >98.33%Select</span
                                >
                                <span>Edit</span>
                            </div>
                        </div>
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
                                    placeholder="Enter Price" />
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
                                    class="el-input__myprice2"
                                    v-model="state.enterAmount"
                                    :disabled="state.enterPrice == ''"
                                    size="large"
                                    placeholder="Enter an amount" />
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
                                style="
                                    border-color: rgba(255, 255, 255, 0.4);
                                    border-style: dashed;
                                " />
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
                                    <div
                                        class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
                                        <span>Expected Output</span>
                                        <span class="text-white">1441.39 ARB</span>
                                    </div>
                                    <div
                                        class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
                                        <span>Price Impact</span>
                                        <span class="text-white">-0.02%</span>
                                    </div>
                                    <div
                                        class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
                                        <span>Min received after slippage</span>
                                        <span class="text-white">1439.95</span>
                                    </div>
                                    <div
                                        class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
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
                <!-- 数据展示框 -->
                <div class="p-0 d-flex flex-column flex-1" style="height: 100%">
                    <!-- 顶部交易数据 -->
                    <div class="d-flex" style="height: 70%">
                        <!-- 买单卖单数据 -->
                        <div
                            class="d-flex flex-column position-relative"
                            style="min-width: 280px; height: 100%">
                            <div class="d-flex-align-center px-3 py-2 pt-0" style="height: 55px">
                                <el-tabs
                                    v-model="state.makersTrades"
                                    class="transaction-operations">
                                    <el-tab-pane label="Makers" name="Makers"></el-tab-pane>
                                    <el-tab-pane label="Trades" name="Trades"></el-tab-pane>
                                </el-tabs>
                                <el-checkbox
                                    class="ml-3"
                                    v-model="state.allMakers"
                                    label="All Makers"
                                    size="small" />
                            </div>
                            <div class="d-flex-between-center px-3 fs-8">
                                <p class="fs-8 text-color-999" style="width: 30%">Price (ETH)</p>
                                <p
                                    class="fs-8 text-color-999"
                                    style="width: 40%; text-align: center">
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
                                style="
                                    z-index: 4;
                                    top: 73px;
                                    height: 40px;
                                    background: rgb(41, 43, 48);
                                ">
                                <span>{{ state.currentPrice }}</span>
                                <div
                                    class="icon-fanhui-box rounded-circle cursor-pointer d-flex-center">
                                    <i class="iconfont icon-fanhui"></i>
                                </div>
                            </div>
                            <div
                                class="width100 position-absolute start-0 bottom-0 fs-7 text-white px-3 d-flex-between-center"
                                v-if="state.scrollbarBottomShow"
                                @click="onScrollbarTopShow"
                                style="z-index: 4; height: 40px; background: rgb(41, 43, 48)">
                                <span>{{ state.currentPrice }}</span>
                                <div
                                    class="icon-fanhui-box rounded-circle cursor-pointer d-flex-center">
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
                                                    border-bottom: 1px dashed
                                                        rgba(116, 118, 171, 0.7);
                                                "></i>
                                        </div>
                                        <div
                                            class="price-item d-flex-between-center px-3 py-1 position-relative"
                                            v-for="item in state.currentPriceBuyList"
                                            @click="incomingData(item.price)">
                                            <p
                                                class="fs-8"
                                                style="color: rgb(12 186 113); width: 33.3333%">
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
                                                    height: 100%;
                                                    background: rgba(12, 186, 113, 0.1);
                                                "
                                                :style="{ width: `${item.size}%` }"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Kline style="width: 100%" class="flex-1" />
                    </div>
                    <!-- 底部交易历史 -->
                    <Order />
                </div>
            </div>
            <TradeBottom />
        </div>
        <!-- 移动端适配 -->
        <div
            class="mobile-trade d-block d-md-none"
            style="background: var(--trade-bg); padding-top: 58px">
            <div class="p-2 pb-0">
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
                                style="
                                    border-color: rgba(255, 255, 255, 0.4);
                                    border-style: dashed;
                                " />
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
                                    <div
                                        class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
                                        <span>Expected Output</span>
                                        <span class="text-white">1441.39 ARB</span>
                                    </div>
                                    <div
                                        class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
                                        <span>Price Impact</span>
                                        <span class="text-white">-0.02%</span>
                                    </div>
                                    <div
                                        class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
                                        <span>Min received after slippage</span>
                                        <span class="text-white">1439.95</span>
                                    </div>
                                    <div
                                        class="d-flex-between-center fs-8 my-1 px-3 text-color-grey">
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
                        <div class="d-flex-between-center p-3 fs-8">
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
                            style="
                                z-index: 4;
                                top: 50px;
                                height: 40px;
                                background: rgb(41, 43, 48);
                            ">
                            <span>{{ state.currentPrice }}</span>
                            <div
                                class="icon-fanhui-box rounded-circle cursor-pointer d-flex-center">
                                <i class="iconfont icon-fanhui"></i>
                            </div>
                        </div>
                        <div
                            class="width100 position-absolute start-0 bottom-0 fs-7 text-white px-3 d-flex-between-center"
                            v-if="state.scrollbarBottomShow"
                            @click="onScrollbarTopShow"
                            style="z-index: 4; height: 40px; background: rgb(41, 43, 48)">
                            <span>{{ state.currentPrice }}</span>
                            <div
                                class="icon-fanhui-box rounded-circle cursor-pointer d-flex-center">
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
                                        <p
                                            class="fs-8"
                                            style="color: rgb(12 186 113); width: 33.3333%">
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
                                                height: 100%;
                                                background: rgba(12, 186, 113, 0.1);
                                            "
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
    </div>
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue'
import Kline from '@/components/k-line.vue'
import TradeBottom from '@/components/trade-bottom.vue'
import ComimgSoon from '@/components/comimg-soon.vue'
import Order from '@/components/order.vue'
import Big from 'big.js'
const state = reactive({
    allMakers: false,
    activeName: 'Maker', // 交易模块
    buySell: 'buy',
    enterPrice: '',
    enterAmount: '',
    makersTrades: 'Makers', // tab切换
    currentPrice: 1830.0,
    currentPriceSellList: [],
    currentPriceBuyList: [],
    inputAmount: '',
    outputAmount: '',
    scrollbarTopShow: false,
    scrollbarBottomShow: false,
})
const isComimgSoonShow = ref(false)
const createMarkers = (price) => {
    let randomNumSize = randomNum(1, 200)
    return {
        price: price,
        amount: parseFloat(Big(randomNumSize)).toFixed(2),
        size: randomNum(1, 100),
    }
}
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10)
            break
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
            break
        default:
            return 0
            break
    }
}
const currentPriceSellListPush = () => {
    let indexPrice = state.currentPrice
    for (let index = 0; index < 30; index++) {
        indexPrice = parseFloat(Big(indexPrice).plus(0.01))
        state.currentPriceSellList.push(createMarkers(indexPrice))
        state.currentPriceBuyList.push(createMarkers(indexPrice))
    }
}
currentPriceSellListPush()
const minElSlider = ref('')
const maxElSlider = ref('')
const incomingData = (price) => {
    state.enterPrice = price
    minElSlider.value = parseFloat(Big(price).minus(0.000002401))
    maxElSlider.value = parseFloat(Big(price).plus(0.000002401))
    console.log(minElSlider.value, 'minElSlider.value')
}
const scrollbarBox = ref(null)
const scrollbarAnchor = ref(null)
onMounted(() => {
    scrollbarBox.value.scrollTo(
        0,
        scrollbarAnchor.value.offsetTop - scrollbarBox.value.offsetHeight / 2 + 14
    )
    scrollbarBox.value.addEventListener('scroll', function () {
        if (scrollbarBox.value.scrollTop >= scrollbarAnchor.value.offsetTop) {
            state.scrollbarTopShow = true
        } else {
            state.scrollbarTopShow = false
        }

        if (scrollbarAnchor.value.offsetTop - scrollbarBox.value.scrollTop >= 410) {
            state.scrollbarBottomShow = true
        } else {
            state.scrollbarBottomShow = false
        }
    })
})
const onScrollbarTopShow = () => {
    scrollbarBox.value.scrollTo(
        0,
        scrollbarAnchor.value.offsetTop - scrollbarBox.value.offsetHeight / 2 + 14
    )
}
const onInputAmount = () => {
    if (state.inputAmount == '') {
        state.outputAmount = ''
        return
    }
    state.outputAmount = parseFloat(Big(state.inputAmount).times(state.currentPrice).toFixed(9))
}
const onOutputAmount = () => {
    if (state.outputAmount == '') {
        state.inputAmount = ''
        return
    }
    state.inputAmount = parseFloat(Big(state.outputAmount).div(state.currentPrice).toFixed(9))
}
</script>
<style lang="scss">
.trade-box {
    width: 100vw;
    height: calc(100vh - 28px);
    // overflow: hidden;
    padding-bottom: 0 !important;
    padding-top: 58px;
    .active-buy {
        background: linear-gradient(90deg, rgb(0, 197, 173) 0%, rgb(0, 204, 167) 100%) !important;
    }
    .active-sell {
        background: linear-gradient(
            270deg,
            rgb(255, 81, 81) 2.6%,
            rgb(255, 24, 121) 97.98%
        ) !important;
        border-color: transparent !important;
    }
    .price-item {
        cursor: pointer;
        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }
    }

    .el-slider {
        .el-slider__bar {
            background: transparent !important;
        }
        .el-slider__button {
            border-color: var(--theme-color-purple);
        }
        .el-slider__runway {
            background: #7859f37e;
        }
    }
    .el-collapse {
        border-radius: 8px;
        overflow: hidden;
        border: none;
        .el-collapse-item__header {
            background-color: rgb(41, 43, 48) !important;
        }
        .el-collapse-item__wrap {
            background-color: rgb(41, 43, 48) !important;
        }
    }
    .el-input__wrapper {
        background-color: rgb(41, 43, 48) !important;
        box-shadow: none;
        .el-input__inner {
            color: #fff;
        }
    }
    .el-input__wrapper.is-focus {
        box-shadow: 0 0 0 1px var(--theme-color-purple) inset;
    }
    .el-input.el-input__myprice {
        .el-input__wrapper {
            padding: 0 46px !important;
        }
    }
    .el-input.el-input__myprice2 {
        .el-input__wrapper {
            padding: 0 58px !important;
        }
    }
    .el-checkbox.el-checkbox--large {
        height: auto;
    }
    .transaction-operations {
        .el-tabs__item {
            padding: 0 10px;
            color: var(--text-color-grey);
        }
        .el-tabs__item.is-active {
            color: var(--theme-color-purple);
        }
        .el-tabs__active-bar {
            background-color: var(--theme-color-purple);
        }
        .el-tabs__nav-wrap::after {
            background: transparent;
        }
    }
    .el-checkbox__inner {
        background-color: transparent !important;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner {
        border-color: var(--theme-color-purple) !important;
        background-color: var(--theme-color-purple) !important;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
        color: var(--WT100);
    }
    .el-tabs__header {
        margin: 0 !important;
    }
    .el-table-my {
        width: calc(100vw - 300px) !important;
        .cell {
            font-size: 10px;
            line-height: 18px !important;
        }
    }
    .el-table td.el-table__cell,
    .el-table th.el-table__cell.is-leaf {
        border-bottom: transparent !important;
    }
    .el-table .el-table__cell {
        padding: 0 !important;
    }
    .el-table--border .el-table__inner-wrapper::after,
    .el-table--border::after,
    .el-table--border::before,
    .el-table__inner-wrapper::before {
        background-color: transparent !important;
    }
    .el-table {
        font-size: 10px;
        background-color: transparent !important;
        tr {
            background-color: transparent !important;
            pointer-events: none;
        }
        .el-table__row:hover {
            background-color: transparent !important;
        }
        th.el-table__cell {
            background-color: transparent !important;
        }
        th.el-table__cell.is-leaf {
            border-bottom: transparent !important;
        }
    }
    .icon-fanhui-box {
        width: 24px;
        height: 24px;
        transition: 0.3s;
        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }
    }
}
.mobile-trade {
    .el-tabs__header {
        margin: 0;
    }
    .el-input.el-input__myprice {
        .el-input__wrapper {
            padding: 0 50px !important;
        }
    }
}
</style>
