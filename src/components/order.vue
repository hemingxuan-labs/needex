/** * @file * @author 何明暄 */
<template>
    <div
        class="el-tabs-components p-2 d-flex flex-column position-relative"
        style="height: 30%; border-top: 1px solid #2c2d30; width: 100%">
        <el-tabs style="width: 100%" v-model="state.ordersSwitch" class="transaction-operations">
            <el-tab-pane label="openOrders" name="openOrders"></el-tab-pane>
            <el-tab-pane label="orderHistory" name="orderHistory"></el-tab-pane>
            <el-tab-pane label="swapHistory" name="swapHistory"></el-tab-pane>
        </el-tabs>
        <el-table :data="tableData" class="el-table-my mt-2">
            <el-table-column min-width="150" label="Pair">
                <template #default="scope">
                    <span class="text-white">{{ scope.row.pair }}</span>
                    <span class="px-1 ml-1" style="background-color: #2c2d30; border-radius: 8px">{{
                        scope.row.percentage
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="100" label="Type">
                <template #default="scope">
                    <span class="text-white" style="color: rgb(254, 56, 92) !important">{{
                        scope.row.type
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="210" label="Average Price / Price Range">
                <template #default="scope">
                    <p>{{ scope.row.averagePrice }} ETH</p>
                    <p>{{ scope.row.priceRange }} ETH</p>
                </template>
            </el-table-column>
            <el-table-column min-width="130" label="Filled / Total">
                <template #default="scope">
                    <p>{{ scope.row.filled }} USDC</p>
                    <p>{{ scope.row.total }} USDC</p>
                </template>
            </el-table-column>
            <el-table-column min-width="130" label="Fee Earned">
                <template #default="scope">
                    <p>{{ scope.row.filled }} ETH</p>
                </template>
            </el-table-column>
            <el-table-column min-width="130" label="Order Time (Txn)">
                <template #default="scope">
                    <p>{{ scope.row.filled }} USDC</p>
                    <p>{{ scope.row.total }} USDC</p>
                </template>
            </el-table-column>
            <el-table-column min-width="130" label="Status">
                <template #default="scope">
                    <p>Unfilled</p>
                </template>
            </el-table-column>
            <el-table-column min-width="130" label="Operation">
                <template #default="scope">
                    <el-button type="warning" plain round style="color: #fff; height: 24px"
                        >cancel</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
const state = reactive({
    ordersSwitch: 'openOrders',
})
const tableData = [
    {
        pair: 'USDC/ETH',
        percentage: '0.05%',
        type: 'Sell USDC',
        averagePrice: '0',
        priceRange: '0.000065~0.000066',
        filled: '0',
        total: 417.6,
    },
    {
        pair: 'USDC/ETH',
        percentage: '0.05%',
        type: 'Sell USDC',
        averagePrice: '0',
        priceRange: '0.000065~0.000066',
        filled: '0',
        total: 417.6,
    },
    {
        pair: 'USDC/ETH',
        percentage: '0.05%',
        type: 'Sell USDC',
        averagePrice: '0',
        priceRange: '0.000065~0.000066',
        filled: '0',
        total: 417.6,
    },
    {
        pair: 'USDC/ETH',
        percentage: '0.05%',
        type: 'Sell USDC',
        averagePrice: '0',
        priceRange: '0.000065~0.000066',
        filled: '0',
        total: 417.6,
    },
    {
        pair: 'USDC/ETH',
        percentage: '0.05%',
        type: 'Sell USDC',
        averagePrice: '0',
        priceRange: '0.000065~0.000066',
        filled: '0',
        total: 417.6,
    },
]
</script>
<style lang="scss">
.el-tabs-components {
    .el-tabs__item:hover {
        color: var(--theme-color-purple);
    }
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
}
</style>
