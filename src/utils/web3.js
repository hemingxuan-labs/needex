import store from '@/store/index'
import Web3 from 'web3'
import { ElMessage } from 'element-plus'

export const checkBalance = async () => {
    // 请求余额
    if (!store.state.persistence.assets) return
    var balance = await window.web3.eth.getBalance(store.state.persistence.assets)
    store.commit('setBalanceNumber', balance)
    return balance
}
export const web3Init = () => {
    // web3初始化
    let web3 = window.web3
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(window.ethereum)
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-rpc.com'))
    }
    window.web3 = web3
    getChain()
    checkBalance()
}
export const metaMaskAccountsChanged = async () => {
    if (window.ethereum) {
        // 监听切链操作
        store.commit('setAssetsChina', window.web3.utils.toNumber(window.ethereum.chainId))
        ethereum.on('chainChanged', function (chainId) {
            checkBalance()
            store.commit('setAssetsChina', window.web3.utils.toNumber(chainId))
        })
        ethereum.on('accountsChanged', function (accounts) {
            // console.log(accounts, 'accoussssssnts')
            setTimeout(() => {
                checkBalance()
            }, 100)
            establishAConnection()
        })
    }
}
export const getChain = async () => {
    // 获取当前链id
    const res = await ethereum.request({ method: 'eth_chainId' })
    const chinaId = window.web3.utils.BN(res).toString()
    store.commit('setAssetsChina', chinaId)
    return chinaId
}
export const switchChain = async (chainId) => {
    // 切换网络
    return new Promise(async (resolve, reject) => {
        let switchAddChainReturn
        if (chainId == '324') {
            switchAddChainReturn = await switchAddChain({
                chainId: window.web3.utils.toHex(chainId),
                chainName: 'zkSync Era Mainnet',
                name: 'zkSync Era Mainnet',
                symbol: 'ETH',
                decimals: 18,
                blockExplorerUrls: ['https://explorer.zksync.io/'],
                rpcUrls: ['https://mainnet.era.zksync.io'],
            })
        } else if (chainId == '56') {
            switchAddChainReturn = await switchAddChain({
                chainId: window.web3.utils.toHex(chainId),
                chainName: 'BNB Chain',
                name: 'Binance',
                symbol: 'BNB',
                decimals: 18,
                blockExplorerUrls: ['https://bscscan.com/'],
                rpcUrls: ['https://rpc-bsc.bnb48.club'],
            })
        }
        getChain()
        if (switchAddChainReturn) {
            resolve(true)
        } else {
            resolve(false)
        }
    })
}
const switchAddChain = async (chainObject) => {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: chainObject.chainId }],
        })
        return true
    } catch (e) {
        if (e.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: chainObject.chainId,
                            chainName: chainObject.chainName,
                            nativeCurrency: {
                                name: chainObject.name,
                                symbol: chainObject.symbol, // 2-6 characters long
                                decimals: chainObject.decimals,
                            },
                            blockExplorerUrls: chainObject.blockExplorerUrls,
                            rpcUrls: chainObject.rpcUrls,
                        },
                    ],
                })
            } catch (addError) {
                ElMessage({
                    grouping: true,
                    message: addError.message,
                    type: 'error',
                })
                return false
            }
        }
        if (e.code === 4001) {
            ElMessage({
                grouping: true,
                message: e.message,
                type: 'error',
            })
            return false
        }
    }
}
export const metaMaskVerification = async () => {
    // 请求钱包签名
    let signature
    let address = store.state.persistence.assets
    if (!address) return false
    if (store.state.persistence.walletToken) return
    var encode = encodeURI(address + new Date().getTime())
    // 对编码的字符串转化base64
    var base64 = btoa(encode)
    const message = `Welcome to the Needex Questboard, please sign this message to verify your identity. Your custom message is: ${base64}`
    try {
        signature = await window.ethereum.request({
            method: 'personal_sign',
            params: [address, message],
        })
        store.commit('stateWalletToken', signature) // 存入钱包签名
        return {
            address,
            message,
            signature,
        }
    } catch (error) {
        ElMessage({
            grouping: true,
            message: 'User rejected request',
            type: 'error',
        })
        return false
    }
}
export const establishAConnection = async () => {
    // 判断是否链接并建立连接返回钱包地址
    try {
        let address = await ethereum.request({ method: 'eth_requestAccounts' }) //授权连接钱包
        store.commit('setAssets', address[0]) // 存入钱包
        return address[0]
    } catch (error) {
        ElMessage({
            grouping: true,
            message: "You don't Have a MetaMask Wallet yet.",
            type: 'error',
        })
        return false
    }
}
