/** * @file * @author 何明暄 */
<script setup>
import { ref, reactive, onMounted } from 'vue'
const state = reactive({})
let tvScriptLoadingPromise
const onLoadScriptRef = ref()
onMounted(() => {
    onLoadScriptRef.current = createWidget

    if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
            const script = document.createElement('script')
            script.id = 'tradingview-widget-loading-script'
            script.src = 'https://s3.tradingview.com/tv.js'
            script.type = 'text/javascript'
            script.onload = resolve

            document.head.appendChild(script)
        })
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current())

    return () => (onLoadScriptRef.current = null)

    function createWidget() {
        if (document.getElementById('tradingview') && 'TradingView' in window) {
            var urls = 'ws://192.168.0.15:9326'
            new window.TradingView.widget({
                autosize: true,
                symbol: 'BINANCE:ETHUSDT',
                interval: '15',
                timezone: 'Etc/UTC',
                theme: 'dark',
                style: '1',
                locale: 'en',
                toolbar_bg: '#f1f3f6',
                enable_publishing: false,
                hide_legend: true,
                hide_side_toolbar: false,
                save_image: false,
                container_id: 'tradingview',
            })
        }
    }
})
</script>
<template>
    <div class="tradingview-widget-container">
        <div id="tradingview" />
    </div>
</template>
<style lang="scss" scoped>
.tradingview-widget-container {
    height: 100%;
    width: 100%;
    #tradingview {
        height: 100%;
        width: 100%;
    }
}
</style>
