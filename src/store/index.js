import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import persistence from './persistence'
import bounty from '@/assets/abi/bounty.json'
import usdt from '@/assets/abi/usdt.json'
import ERC20 from '@/assets/abi/erc20.json'
const store = createStore({
    state() {
        return {
            balanceNumber: 0,
            discordCode: false,
            bountyContract: {},
            usdtContract: {},
            chainId: 0,
        }
    },
    mutations: {
        setBalanceNumber(state, data) {
            state.balanceNumber = (data / 1000000000000000000).toFixed(4)
        },
        setCode(state, data) {
            state.discordCode = data
        },
        setContract(state, data) {
            state.bountyContract = data.texasPokerContract
        },
        setUsdtContract(state, data) {
            state.usdtContract = data.nftContract
        },
        setChainId(state, data) {
            state.chainId = data
        },
    },
    actions: {
        initContract(context) {
            // 调起合约实例化方法
            const texasPokerContract = new window.web3.eth.Contract(
                bounty,
                import.meta.env.VITE_BOUNTY_CLUE_CONTRSCT_ADDRESS
            )
            context.commit('setContract', {
                texasPokerContract,
            })
        },
        initUsdtContract(context) {
            // 初始化usdt合约
            const nftContract = new window.web3.eth.Contract(
                usdt,
                import.meta.env.VITE_USDT_CONTRSCT_ADDRESS
            )
            context.commit('setUsdtContract', {
                nftContract,
            })
        },
    },
    plugins: [
        createPersistedState({
            reducer(val) {
                return {
                    persistence: val.persistence,
                }
            },
        }),
    ],
    modules: {
        persistence,
    },
})
export default store
