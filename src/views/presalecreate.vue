/** * @file * @author 何明暄 */
<!-- 提交项目 -->
<script setup>
import { ref, reactive } from 'vue'
import { proposalCreate } from '@/api/index.js'
import { approve, createProject } from '@/utils/contract.js'
const state = reactive({
    activeIndex: 0,
})
const ruleFormRef = ref(null)
const presalecreateFrom = reactive({
    bannerLink: '',
    contractAddress: '',
    dex: 'PancakeSwap',
    discordLink: '',
    endTime: '',
    githubLink: '',
    pairsContract: '',
    liquidity: '70%',
    listingRate: '',
    logoLink: '',
    maximum: '',
    minimum: '',
    presaleRate: '',
    projectDescription: 'asdasdsadasdas',
    redditLink: '',
    referralCode: '',
    startTime: '',
    telegramLink: '',
    totalTokenRewards: '',
    twitterLink: '',
    unlockTime: '',
    userAddress: '0x8b5FaB3B0724F1a8a01340154A6AF1fab3f2ceaa',
    websiteLink: '',
    youtubeLink: '',
})
const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Invalid Address'))
    } else {
        callback()
    }
}
const rules = reactive({
    contractAddress: [{ validator: validatePass, trigger: 'blur' }],
    presaleRate: [{ validator: validatePass, trigger: 'blur' }],
})
const presalecreateList = [
    {
        title: 'Token Info',
    },
    {
        title: 'Presale Information',
    },
    {
        title: 'Project Information',
    },
    {
        title: 'More Features',
    },
    {
        title: 'Schedule',
    },
    {
        title: 'Review and Submit',
    },
]
const onElStep = (index) => {
    state.activeIndex = index
}
const postProposalCreate = async () => {
    const res = await proposalCreate(presalecreateFrom)
    // const res = {
    //     result: '4e3abdb4-da3f-4574-8384-61a3ce03b56a',
    // }
    // let resApprove = approve(presalecreateFrom.contractAddress)
    let parameter = {
        projectId: res.data.result,
        tokenAddr: presalecreateFrom.contractAddress,
        exchangePairs: [presalecreateFrom.pairsContract],
        amount: presalecreateFrom.totalTokenRewards,
        startTimestamp: presalecreateFrom.startTime.getTime(),
        endTimestamp: presalecreateFrom.endTime.getTime(),
        lockDays: presalecreateFrom.unlockTime.getTime(),
    }
    const resCreate = await createProject(parameter)
    console.log(resCreate, 'resCreate')
}
const onaFocus = async (e) => {
    e.target.parentNode.parentNode.parentNode.parentNode.classList.add('el-focus_my')
}
const onBlur = async (e) => {
    if (e.target.value != '') {
        setTimeout(() => {
            e.target.parentNode.parentNode.parentNode.parentNode.classList.add('el-focus_my')
        })
    } else {
        e.target.parentNode.parentNode.parentNode.parentNode.classList.remove('el-focus_my')
    }
}
</script>
<template>
    <div>
        <div class="container container-small">
            <div class="container">
                <h1 class="text-center bg-dark d-block d-sm-none text-white">{{ `>` }} SM</h1>
                <h1 class="text-center bg-primary d-none d-sm-block d-md-none">SM</h1>
                <h1 class="text-center bg-success d-none d-md-block d-lg-none">MD</h1>
                <h1 class="text-center bg-danger d-none d-lg-block d-xl-none">LG</h1>
                <h1 class="text-center bg-warning d-none d-xl-block d-xxl-none">XL</h1>
                <h1 class="text-center bg-info d-none d-xxl-block">XLL</h1>
            </div>
            <div class="row">
                <div
                    class="col-md-3 px-4 py-4 border"
                    style="background: var(--G800); border-radius: 25px; height: 500px">
                    <el-steps
                        direction="vertical"
                        :active="state.activeIndex"
                        finish-status="success">
                        <el-step
                            v-for="(item, index) in presalecreateList"
                            :title="item.title"
                            @click="onElStep(index)" />
                    </el-steps>
                </div>
                <div class="col-md-9 p-0 pl-4">
                    <div class="p-5" style="background: var(--G800); border-radius: 25px">
                        <el-form
                            ref="ruleFormRef"
                            :model="presalecreateFrom"
                            status-icon
                            :rules="rules">
                            <div v-if="state.activeIndex == 0">
                                <el-form-item label="Enter Contract Address" prop="contractAddress">
                                    <el-input
                                        v-model="presalecreateFrom.contractAddress"
                                        autocomplete="off"
                                        @focus="onaFocus"
                                        @blur="onBlur" />
                                </el-form-item>
                            </div>
                            <div v-else-if="state.activeIndex == 1">
                                <p class="text-white" style="font-size: 10px">
                                    The Presale Rate defines how many tokens contributors get
                                    perBNB, the listing Rate sets how many tokens per BNB on
                                    PancakeSwap
                                </p>
                                <div class="d-flex-between-center">
                                    <el-form-item
                                        label="Presale Rate"
                                        prop="presaleRate"
                                        style="width: 48%">
                                        <el-input
                                            v-model="presalecreateFrom.presaleRate"
                                            @focus="onaFocus"
                                            @blur="onBlur" />
                                    </el-form-item>
                                    <el-form-item
                                        label="Listing Rate"
                                        prop="listingRate"
                                        style="width: 48%">
                                        <el-input
                                            v-model="presalecreateFrom.listingRate"
                                            @focus="onaFocus"
                                            @blur="onBlur" />
                                    </el-form-item>
                                </div>
                                <p class="text-white" style="font-size: 10px">
                                    The SoftCap is the minimum amount required for a successful
                                    presale
                                </p>
                                <div class="d-flex-between-center">
                                    <el-form-item
                                        label="Total Token Rewards"
                                        prop="totalTokenRewards"
                                        style="width: 48%">
                                        <el-input
                                            v-model="presalecreateFrom.totalTokenRewards"
                                            @focus="onaFocus"
                                            @blur="onBlur" />
                                    </el-form-item>
                                    <el-form-item
                                        label="pairsContract"
                                        prop="pairsContract"
                                        style="width: 48%">
                                        <el-input
                                            v-model="presalecreateFrom.pairsContract"
                                            @focus="onaFocus"
                                            @blur="onBlur" />
                                    </el-form-item>
                                </div>
                                <p class="text-white" style="font-size: 10px">
                                    Minimum and maximum BNB each wallet can contribute
                                </p>
                                <div class="d-flex-between-center">
                                    <el-form-item label="Minimum" prop="minimum" style="width: 48%">
                                        <el-input
                                            v-model="presalecreateFrom.minimum"
                                            @focus="onaFocus"
                                            @blur="onBlur" />
                                    </el-form-item>
                                    <el-form-item label="Maximum" prop="maximum" style="width: 48%">
                                        <el-input
                                            v-model="presalecreateFrom.maximum"
                                            @focus="onaFocus"
                                            @blur="onBlur" />
                                    </el-form-item>
                                </div>
                                <p class="text-white" style="font-size: 10px">
                                    Select the DEX of your choice
                                </p>
                                <div class="d-flex-between-center">
                                    <el-form-item
                                        label="dex"
                                        prop="dex"
                                        class="el-select_lable"
                                        style="width: 100%">
                                        <el-select
                                            v-model="presalecreateFrom.dex"
                                            placeholder="dex"
                                            style="width: 100%">
                                            <el-option label="PancakeSwap" value="PancakeSwap" />
                                            <el-option label="Apeswap" value="Apeswap" />
                                        </el-select>
                                    </el-form-item>
                                </div>
                                <p class="text-white" style="font-size: 10px">
                                    Liquidity (%) going to Apeswap
                                </p>
                                <div class="d-flex-between-center">
                                    <el-form-item
                                        label="liquidity"
                                        prop="liquidity"
                                        class="el-select_lable"
                                        style="width: 100%">
                                        <el-select
                                            v-model="presalecreateFrom.liquidity"
                                            placeholder="Select"
                                            style="width: 100%">
                                            <el-option
                                                v-for="item in 50"
                                                :label="`${item + 50}%`"
                                                :value="`${item + 50}%`" />
                                        </el-select>
                                    </el-form-item>
                                </div>
                            </div>
                            <div v-else-if="state.activeIndex == 2">
                                <el-form-item label="Logo Link" prop="logoLink">
                                    <el-input
                                        v-model="presalecreateFrom.logoLink"
                                        @focus="onaFocus"
                                        @blur="onBlur" />
                                </el-form-item>
                                <el-form-item label="Banner Link" prop="bannerLink">
                                    <el-input
                                        v-model="presalecreateFrom.bannerLink"
                                        @focus="onaFocus"
                                        @blur="onBlur" />
                                </el-form-item>
                                <el-form-item label="Website Link" prop="websiteLink">
                                    <el-input
                                        v-model="presalecreateFrom.websiteLink"
                                        @focus="onaFocus"
                                        @blur="onBlur" />
                                </el-form-item>
                            </div>
                            <div v-else-if="state.activeIndex == 3">
                                <p class="text-white" style="font-size: 10px">
                                    These features will be available after presale is created
                                </p>
                                <div
                                    class="d-flex-center py-4"
                                    style="background-color: #343c49; border-radius: 3px">
                                    <p class="text-center fs-5 m-0" style="color: #2196f3">
                                        Change Listing Pair
                                    </p>
                                </div>
                            </div>
                            <div v-else-if="state.activeIndex == 4">
                                <p class="text-white" style="font-size: 10px">Presale Start Time</p>
                                <el-form-item prop="startTime" class="el-select_lable">
                                    <el-date-picker
                                        v-model="presalecreateFrom.startTime"
                                        type="datetime"
                                        placeholder="Pick a Date"
                                        format="YYYY/MM/DD HH:mm:ss" />
                                </el-form-item>
                                <p class="text-white" style="font-size: 10px">Presale End Time</p>
                                <el-form-item prop="endTime" class="el-select_lable">
                                    <el-date-picker
                                        v-model="presalecreateFrom.endTime"
                                        type="datetime"
                                        placeholder="Pick a Date"
                                        format="YYYY/MM/DD HH:mm:ss" />
                                </el-form-item>
                                <p class="text-white" style="font-size: 10px">
                                    Liquidity Unlock Time
                                </p>
                                <el-form-item prop="unlockTime" class="el-select_lable">
                                    <el-date-picker
                                        v-model="presalecreateFrom.unlockTime"
                                        type="datetime"
                                        placeholder="Pick a Date"
                                        format="YYYY/MM/DD HH:mm:ss" />
                                </el-form-item>
                            </div>
                            <div v-else-if="state.activeIndex == 5">
                                <div class="d-flex">
                                    <el-form-item label="Enter referral Code" prop="referralCode">
                                        <el-input
                                            v-model="presalecreateFrom.referralCode"
                                            @focus="onaFocus"
                                            @blur="onBlur" />
                                    </el-form-item>
                                    <el-button type="primary" round plain class="ml-3"
                                        >ADD CODE</el-button
                                    >
                                </div>
                            </div>
                        </el-form>

                        <div class="d-flex-between-center mt-5">
                            <el-button round>BAKC</el-button>
                            <el-button
                                type="primary"
                                round
                                v-if="state.activeIndex == 5"
                                @click="postProposalCreate"
                                >Start Presale</el-button
                            >
                            <el-button type="primary" round v-else>NEXT</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.is-success {
    color: var(--theme-color-purple) !important;
    border-color: var(--theme-color-purple) !important;
    .el-step__line {
        background-color: var(--theme-color-purple) !important;
    }
    .el-step__icon.is-text {
        border: 2px solid var(--theme-color-purple) !important;
        color: var(--WT100) !important;
        background: var(--theme-color-purple) !important;
        font-weight: 600;
    }
}
.is-process {
    color: var(--theme-color-purple) !important;
    .el-step__icon.is-text {
        border: 2px solid var(--theme-color-purple) !important;
        color: var(--WT100) !important;
        background: var(--theme-color-purple) !important;
    }
}
.el-step__icon {
    cursor: pointer;
}
.el-step__title {
    cursor: pointer;
}
.el-step__line {
    top: 3px !important;
}
.el-form-item {
    position: relative;
}
.el-input .el-input__inner {
    color: #fff !important;
}
.el-date-picker {
    .el-input__inner {
        color: var(--el-input-text-color, var(--el-text-color-regular)) !important;
    }
}
.el-form-item__label {
    position: absolute;
    top: 1px;
    left: 20px;
    transition: 0.3s;
    background-color: var(--G800);
    z-index: 10;
    height: 30px;
    line-height: 28px;
    text-align: center;
    padding: 1px 7px;
}
.el-form-item__label {
    top: -20px;
    left: -5px;
    transform: scale(0.8, 0.8);
    color: rgba(255, 255, 255, 0.7);
}
.el-select_lable > .el-form-item__label {
    display: none;
}
</style>
