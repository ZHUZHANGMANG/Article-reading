<template>
    <van-cell :title="title" :label="label" to="" />
</template>
<script setup>
    defineProps(['title','label'])
</script>
<style scoped>
    .van-cell{
        font-size: 34px;
        font-weight: 700;
        color: #6f6666;
    }
    .van-cell :deep() .van-cell__label{
        font-weight: 400;
        overflow:hidden;
    }
</style>