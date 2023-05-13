/** * @file * @author 何明暄 */
<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { twitterOauthRequestToken } from '@/api/index.js'
const store = useStore()
const state = reactive({})
const assets = computed(() => store.state.persistence.assets)
const assetsShow = computed(() => store.state.persistence.assetsShow)
const onGetNftAssets = async () => {
    window.location.href = `https://discord.com/oauth2/authorize?response_type=code&client_id=1044864221155954738&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=https://app.Needex.com&prompt=consent`
}
const onTwitterOauthRequestToken = async () => {
    const res = await twitterOauthRequestToken()
    console.log(res, 'resresres')
    // window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${res.data.result.oauthToken}&oauth_verifier=${}`
}
</script>
<template>
    <div>
        <div class="profile-box">
            <p class="title">Profile</p>
            <div class="user-info">
                <div class="head-img"></div>
                <div class="x-land-box">
                    <div class=""></div>
                    <p class="x-land-title">{{ assets }}</p>
                    <div class="verify">
                        <p class="verify-titile">Verify:</p>
                        <div class="discord-box">
                            <div class="discord-item">
                                <div class="discord" @click="onGetNftAssets">Discord</div>
                                <i class="iconfont icon-check"></i>
                            </div>
                            <div class="discord-item">
                                <div class="discord" @click="onTwitterOauthRequestToken">
                                    Twitter
                                </div>
                                <i class="iconfont icon-check"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="row p-0 mt-5 top-block mx-auto">
                <div class="col-lg-6 p-0 mt-4 mx-0 pr-2 padding-sm-0">
                    <div
                        class="p-3"
                        style="
                            border: 1px solid var(--theme-color-purple);
                            background: linear-gradient(
                                0deg,
                                rgba(30, 16, 77, 0.8) 0%,
                                rgba(28, 14, 71, 0.8) 100%
                            );
                            border-radius: 16px;
                        ">
                        <h6 class="text-white m-0">Bounty For Infomer</h6>
                        <div class="d-flex mt-3">
                            <div class="d-none d-sm-block" style="width: 200px; height: 200px">
                                <img
                                    style="width: 200px; height: 200px"
                                    src="https://storage.googleapis.com/needex/image/infomer-1.png" />
                            </div>
                            <p class="ms-3 fs-6" style="color: #98999a">
                                Closely cooperate with Web3 project parties to provide task rewards
                                for real crypto users (known as infomers), and earn special
                                qualifications to participate in discount promotion or group
                                purchase of crypto assets.
                            </p>
                        </div>
                        <div
                            class="button-effect d-flex-between-center py-2 px-3 mt-3"
                            style="border: 1px solid var(--theme-color-blue); border-radius: 10px">
                            <span class="text-white" style="font-size: 1.1rem">Earn Bounty</span>
                            <i class="iconfont icon-fenxiang text-white fs-5"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 p-0 mt-4 mx-0 pl-2 padding-sm-0">
                    <div
                        class="p-3"
                        style="
                            border: 1px solid var(--theme-color-purple);
                            background: linear-gradient(
                                0deg,
                                rgba(30, 16, 77, 0.8) 0%,
                                rgba(28, 14, 71, 0.8) 100%
                            );
                            border-radius: 16px;
                        ">
                        <h6 class="text-white m-0">Clue For Web3 Project</h6>
                        <div class="d-flex mt-3">
                            <div class="d-none d-sm-block" style="width: 200px; height: 200px">
                                <img
                                    style="width: 200px; height: 200px"
                                    src="https://storage.googleapis.com/needex/image/infomer-2.png" />
                            </div>
                            <p class="ms-3 fs-6" style="color: #98999a">
                                Provide reliable Web3 project clues for the community to participate
                                in ecological construction, and obtain real crypto investors by
                                launching reward tasks, so as to keep them alive for a long time.
                                <br />
                                <br />
                            </p>
                        </div>
                        <div
                            class="button-effect d-flex-between-center py-2 px-3 mt-3"
                            style="
                                border: 1px solid var(--theme-color-blue);
                                border-radius: 10px;
                                width: 100%;
                            ">
                            <span class="text-white" style="font-size: 1.1rem">Provide Clue </span>
                            <i class="iconfont icon-fenxiang text-white fs-5"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top-block mx-auto">
                <div
                    class="button-effect d-flex-between-center py-2 px-3 mt-3"
                    style="border: 1px solid #726ad8; border-radius: 10px">
                    <span class="text-white" style="font-size: 1.1rem"
                        >Know More About Needex</span
                    >
                    <i class="iconfont icon-fenxiang text-white fs-5"></i>
                </div>
            </div> -->

        <!-- <div class="container-small container p-0 top-block" style="margin-top: 14rem">
            <div class="d-flex-center position-relative">
                <p class="py-2 px-4 m-0 me-3 fs-5" style="background: #e8641b; border-radius: 9px">
                    Vote
                </p>
                <div>
                    <p class="fs-4 m-0 text-white position-relative">
                        <img
                            class="position-absolute"
                            src="https://storage.googleapis.com/needex/image/home-title-icon1.png"
                            style="width: 50px; top: -59px; left: -24px" />
                        Governance
                    </p>
                    <p class="fs-5 m-0" style="color: #305576">Become a qualified contributor</p>
                </div>
            </div>
            <div class="row m-0 mt-5" style="width: 100%">
                <div class="col-xl-5 p-0">
                    <div
                        class="mb-5 p-4"
                        style="
                            border: 2px solid var(--theme-color-purple);
                            background: linear-gradient(
                                0deg,
                                rgba(30, 16, 77, 0.8) 0%,
                                rgba(28, 14, 71, 0.8) 100%
                            );
                            border-radius: 16px;
                        ">
                        <h4 class="text-white d-flex align-items-center">
                            Fund Management
                            <i class="iconfont icon-jiantou_youshang fs-2 ms-3"></i>
                        </h4>
                        <p class="fs-5 mt-4" style="color: #999999">
                            Jointly manage the use of the fund as a shareholder, expand the scope of
                            the reward, and create stronger momentum for the community.
                        </p>
                    </div>
                    <div
                        class="mb-5 p-4"
                        style="
                            border: 2px solid var(--theme-color-purple);
                            background: linear-gradient(
                                0deg,
                                rgba(30, 16, 77, 0.8) 0%,
                                rgba(28, 14, 71, 0.8) 100%
                            );
                            border-radius: 16px;
                        ">
                        <h4 class="text-white d-flex align-items-center">
                            Proposal Voting
                            <i class="iconfont icon-jiantou_youshang fs-2 ms-3"></i>
                        </h4>
                        <p class="fs-5 mt-4" style="color: #999999">
                            Needex will not reject any proposal that is conducive to ecological
                            development, and can decide whether the proposal is implemented by
                            voting.
                        </p>
                    </div>
                    <div
                        class="mb-5 p-4"
                        style="
                            border: 2px solid var(--theme-color-purple);
                            background: linear-gradient(
                                0deg,
                                rgba(30, 16, 77, 0.8) 0%,
                                rgba(28, 14, 71, 0.8) 100%
                            );
                            border-radius: 16px;
                        ">
                        <h4 class="text-white d-flex align-items-center">
                            Community Dao
                            <i class="iconfont icon-jiantou_youshang fs-2 ms-3"></i>
                        </h4>
                        <p class="fs-5 mt-4" style="color: #999999">
                            We hope that more community contributors will join in the establishment
                            of Dao and enhance the activity of Needex to create greater value.
                        </p>
                    </div>
                </div>
                <div class="col-xl-7 d-none d-xl-flex align-items-center pl-5">
                    <img style="width: 100%" src="https://storage.googleapis.com/needex/image/illuimg2.png" alt="" />
                </div>
            </div>
        </div> -->
    </div>
</template>
<style lang="scss" scoped>
.profile-box {
    max-width: 1400px;
    min-height: 90vh;
    position: relative;
    overflow: hidden;
    margin: auto;
    padding-top: 70px;
    padding-bottom: 100px;
    box-sizing: border-box;
    .title {
        font-size: 50px;
        font-family: Bahnschrift;
        font-weight: 400;
        color: #fafdfa;
    }
    .user-info {
        margin-top: 60px;
        display: flex;
        .head-img {
            width: 180px;
            height: 180px;
            background: #f4f7f4;
            border-radius: 19px;
        }
        .x-land-box {
            margin-left: 56px;
            .x-land-title {
                font-size: 28px;
                font-weight: 400;
                color: #fafdfa;
            }
            .verify {
                display: flex;
                margin-top: 28px;
                .verify-titile {
                    font-size: 28px;
                    font-weight: 400;
                    color: #fafdfa;
                }
                .discord-box {
                    margin-left: 38px;
                    .discord-item {
                        display: flex;
                        align-items: center;
                        margin-bottom: 20px;
                        .iconfont {
                            font-size: 40px;
                            margin-left: 30px;
                            color: #67c23a;
                            position: relative;
                            top: -5px;
                        }
                    }
                    .discord {
                        width: 187px;
                        height: 41px;
                        background: #f4f7f4;
                        border-radius: 9px;
                        text-align: center;
                        line-height: 41px;
                        font-size: 24px;
                        font-weight: 600;
                        color: #010101;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
