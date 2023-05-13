<script setup>
const props = defineProps({
    isComimgSoonShow: {
        type: Boolean,
        default: true,
    },
    contentText: {
        type: String,
        default: 'ComimgSoon',
    },
})
//关闭弹窗
const emit = defineEmits(['close'])
const closeDialog = () => {
    emit('close')
}
</script>

<template>
    <el-dialog class="pb-4" title="" v-model="props.isComimgSoonShow" @close="closeDialog">
        <h2 class="text-center" style="color: var(--theme-color-purple)">
            {{ props.contentText }}
        </h2>
    </el-dialog>
</template>

<style>
.el-dialog__headerbtn {
    top: 0 !important;
    left: 0 !important;
    right: auto !important;
}
</style>
