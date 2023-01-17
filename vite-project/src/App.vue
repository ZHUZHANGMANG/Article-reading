<template>
  <router-view></router-view>
  <TabBar></TabBar>
</template>
<script setup>
import TabBar from './components/TabBar.vue';
import {queryDetail,queryLogin,queryUser,queryReg,isLogin,queryBanner,queryFollow,queryHome} from './api/http'
// queryHome({_page:1,_limit:3}).then(res=>console.log(res))
// isLogin().then((res)=>console.log(res))
// queryDetail({id:'10000',apiName:'column'}).then(res=>console.log(res))
// queryReg({username:'aa',password:'aaaaqw'}).then(res=>console.log(res))
</script>
<style scoped>
</style>
