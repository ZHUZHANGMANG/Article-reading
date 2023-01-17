<template>
  <van-field v-bind="$attrs" />
</template>
<script setup>
    
</script>
<style scoped>
.van-cell {
  line-height: 0.6rem;
}
.van-field :deep() .van-field__label {
  border-right: solid 1px #ccc;
  width: 74px;
}
</style>