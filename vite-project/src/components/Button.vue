<template>
    <van-button v-bind="$attrs" round  block type="primary">
        <slot></slot>
    </van-button>
</template>
<script setup>
</script>
<style scoped>
.van-button{
    border-radius: 10px;
    margin-top: 20px;
}
</style>