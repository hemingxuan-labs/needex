<template>
    <div ref="jazzIcon" />
</template>
<script setup>
import jazzicon from 'jazzicon'
import { ref, watch, onMounted } from 'vue'
import { walletAvatarNumber } from '@/utils/utils.js'

const props = defineProps({
    address: {
        type: String,
        required: true,
    },
    diameter: {
        type: Number,
        required: true,
    },
})

const jazzIcon = ref(null)

watch(
    () => props.address,
    () => {
        generateIcon()
    }
)
watch(
    () => props.diameter,
    () => {
        generateIcon()
    }
)

const generateIcon = () => {
    var el = jazzicon(props.diameter, walletAvatarNumber(props.address))
    jazzIcon.value.innerHTML = ''
    jazzIcon.value.appendChild(el)
}

onMounted(() => {
    generateIcon()
})
</script>
