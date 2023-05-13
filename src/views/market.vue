/** * @file * @author 何明暄 */
<template>
    <div class="pb-5">
        <div class="container-xl mt-6 px-4">
            <h1 class="text-white" style="font-weight: 600; font-size: 50px">
                re <span style="color: var(--theme-color-purple)">DeFi</span> ning exchanges.
            </h1>
            <p class="fs-6 mt-3" style="color: rgb(139, 145, 157)">
                D5 aggregates Order Books and AMMs, providing a revolutionary on-chain trading
                experience.
            </p>
        </div>
        <!-- <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel> -->
        <div class="container-xl mt-6 px-4">
            <div class="text-white fs-5">
                Top Volume <span style="color: rgb(139, 145, 157)">(24h)</span>
            </div>
            <hr class="mb-0" style="border-color: var(--G200)" />
        </div>
        <div class="container-xl d-flex-between-center px-4">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
                <div class="col d-flex-center mt-5" v-for="item in marketList">
                    <div class="ethereum-box">
                        <div class="d-flex-align-center">
                            <img
                                src="https://storage.googleapis.com/needex/image/ethico.png"
                                style="width: 40px; height: 40px" />
                            <div class="ml-3">
                                <p class="fs-5">Ethereum</p>
                                <p class="fs-6" style="color: rgba(128, 126, 152, 1)">ETH</p>
                            </div>
                        </div>
                        <div class="d-flex-between-center mt-3">
                            <span class="fs-4 text-white">${{ item.price }}</span>
                            <div>
                                <p class="fs-8">
                                    CHG <span style="color: rgb(228, 85, 85)">{{ item.CHG }}%</span>
                                </p>
                                <p class="fs-8">
                                    VOL <span class="text-white">${{ item.VOL }}M</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-xl mt-6 px-4">
            <div class="text-white fs-5">
                Top Gainers <span style="color: rgb(139, 145, 157)">(24h)</span>
            </div>
            <hr class="mb-0" style="border-color: var(--G200)" />
        </div>
        <div class="container-xl px-4 d-flex-between-center">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
                <div class="markt-item col d-flex-center mt-5" v-for="item in marketList">
                    <div class="ethereum-box cursor-pointer">
                        <div class="d-flex-align-center">
                            <img
                                src="https://storage.googleapis.com/needex/image/ethico.png"
                                style="width: 40px; height: 40px" />
                            <div class="ml-3">
                                <p class="fs-5">Ethereum</p>
                                <p class="fs-6" style="color: rgba(128, 126, 152, 1)">ETH</p>
                            </div>
                        </div>
                        <div class="d-flex-between-center mt-3">
                            <span class="fs-4 text-white">${{ item.price }}</span>
                            <div>
                                <p class="fs-8">
                                    CHG <span style="color: rgb(228, 85, 85)">{{ item.CHG }}%</span>
                                </p>
                                <p class="fs-8">
                                    VOL <span class="text-white">${{ item.VOL }}M</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-xl px-4 mt-6">
            <div class="text-white fs-5">Top Pairs</div>
            <hr class="mb-0" style="border-color: var(--G200)" />
        </div>
        <div class="container-xl px-4 mt-4 mx-auto webkit-scrollbar-none" style="overflow-x: auto">
            <el-table
                ref="singleTableRef"
                :data="tableData"
                style="width: 100%"
                @current-change="handleCurrentChange">
                <el-table-column type="index" label="#" width="50" />
                <el-table-column property="pair" label="Pair" min-width="90" />
                <el-table-column property="price" label="Price" min-width="90" />
                <el-table-column property="change" label="24h Change" min-width="120" />
                <el-table-column property="change" label="24h High" min-width="100">
                    <template #default="scope">
                        <span style="color: rgb(12, 186, 113)">{{ scope.row.change }}</span>
                    </template>
                </el-table-column>
                <el-table-column property="low" label="24 Low" min-width="100" />
                <el-table-column property="twentyFourVolume" label="24 Volume" min-width="100" />
                <el-table-column property="volume" label="7 Volume" min-width="100" />
                <el-table-column property="lastDays" label="Last 7 Days" min-width="120" />
            </el-table>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const state = reactive({})
const marketList = ref([
    {
        title: 'Ethereum',
        abbreviation: 'ETH',
        price: '1876.71',
        CHG: '-2.22',
        VOL: '327.4',
    },
    {
        title: 'Ethereum',
        abbreviation: 'ETH',
        price: '1876.71',
        CHG: '-2.22',
        VOL: '327.4',
    },
    {
        title: 'Ethereum',
        abbreviation: 'ETH',
        price: '1876.71',
        CHG: '-2.22',
        VOL: '327.4',
    },
    {
        title: 'Ethereum',
        abbreviation: 'ETH',
        price: '1876.71',
        CHG: '-2.22',
        VOL: '327.4',
    },
    {
        title: 'Ethereum',
        abbreviation: 'ETH',
        price: '1876.71',
        CHG: '-2.22',
        VOL: '327.4',
    },
    {
        title: 'Ethereum',
        abbreviation: 'ETH',
        price: '1876.71',
        CHG: '-2.22',
        VOL: '327.4',
    },
])
const tableData = [
    {
        pair: 'GDX/ETH',
        price: '0003243',
        change: '+31.54',
        low: '0.000123',
        twentyFourVolume: '0.000123',
        volume: '$2512.14M',
        lastDays: '$2512.14M',
    },
    {
        pair: 'GDX/ETH',
        price: '0003243',
        change: '+31.54',
        low: '0.000123',
        twentyFourVolume: '0.000123',
        volume: '$2512.14M',
        lastDays: '$2512.14M',
    },
    {
        pair: 'GDX/ETH',
        price: '0003243',
        change: '+31.54',
        low: '0.000123',
        twentyFourVolume: '0.000123',
        volume: '$2512.14M',
        lastDays: '$2512.14M',
    },
    {
        pair: 'GDX/ETH',
        price: '0003243',
        change: '+31.54',
        low: '0.000123',
        twentyFourVolume: '0.000123',
        volume: '$2512.14M',
        lastDays: '$2512.14M',
    },
    {
        pair: 'GDX/ETH',
        price: '0003243',
        change: '+31.54',
        low: '0.000123',
        twentyFourVolume: '0.000123',
        volume: '$2512.14M',
        lastDays: '$2512.14M',
    },
    {
        pair: 'GDX/ETH',
        price: '0003243',
        change: '+31.54',
        low: '0.000123',
        twentyFourVolume: '0.000123',
        volume: '$2512.14M',
        lastDays: '$2512.14M',
    },
]
const handleCurrentChange = () => {}
</script>
<style lang="scss">
.el-carousel__item {
    background: linear-gradient(228deg, rgba(0, 163, 143, 0.5) 0%, rgba(0, 174, 153, 0.05) 80%),
        rgb(20, 21, 25);
}
.ethereum-box {
    width: 280px;
    height: 150px;
    background: url('https://storage.googleapis.com/needex/image/dots.png') center center;
    transition: all 0.3s ease-out 0s;
    padding: 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    font-size: 1.025rem;
    line-height: 1.5rem;
    --tw-text-opacity: 1;
    color: rgba(200, 199, 216, var(--tw-text-opacity));
    border-radius: 0.75rem;
    min-width: 280px !important;
    backdrop-filter: blur(8px);
    cursor: pointer;

    box-shadow: rgba(122, 87, 221, 0.15) 0px 0px 24px;
    border: 1px solid rgba(122, 87, 221, 0.25);
    &:hover {
        box-shadow: rgba(122, 87, 221, 0.5) 0px 0px 18px;
        transform: translateY(-3px);
    }
}
.el-table {
    .el-table__cell {
        background-color: transparent !important;
    }
    .el-table__row {
        border-bottom: 1px dashed #d1d5db;
    }
}
</style>
