<template>
   <Tabbar v-model="active" fixed>
  <TabbarItem icon="home-o" to="/home" name="home">首页</TabbarItem>
  <TabbarItem icon="search" to="/follow" namr="follow">关注</TabbarItem>
  <TabbarItem icon="friends-o" to="/column" name="column">栏目</TabbarItem>
  <TabbarItem icon="setting-o" to="/user" name="user">我的</TabbarItem>
</Tabbar>
</template>
<script setup>
import { Tabbar, TabbarItem } from 'vant';
import { ref ,watch} from 'vue';
import {useRoute} from 'vue-router'
const route=useRoute()
const active = ref('home');
watch(()=>route.path,(path)=>active.value=path.slice(1))
</script>
<style>
  .van-safe-area-bottom {
    border-top: 2px solid #9e9a95;
}
</style>