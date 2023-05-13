import { getQueryString } from '@/utils/common.js'
import { discordOauthToken } from '@/api/index.js'
export function walletAvatarNumber(assets) {
    if (!assets || assets == '') return ''
    return parseInt(assets.slice(2, 10), 16)
}
export const processingUrlParameters = async () => {
    // 处理参数
    if (getQueryString('code')) {
        await discordOauthToken(getQueryString('code'))
    }
    // store.state.discordCode = getQueryString('code')
    // localStorage.setItem('discordCode', getQueryString('code'))
}
