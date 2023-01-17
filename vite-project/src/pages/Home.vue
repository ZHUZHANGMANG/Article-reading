<template>
    <!-- <h2>home</h2> -->
    <div class="home">
        <Banner :data="banner"></Banner>
        <van-pull-refresh v-model="loading" @refresh="getData">
            <Cell 
            v-for="(item,index) of home"
            :title="`${index+1}.${item.title}`" :label="item.dos"
            :to="{name:'detail',query:{id:item.id,apiName:'home'}}"
            ></Cell>
        </van-pull-refresh>
    </div>
   
    
</template>
<script setup>
import { onMounted,ref } from 'vue';
import { queryBanner, queryHome } from '../api/news';
import Banner from '../components/Banner.vue';
import Cell from '../components/Cell.vue'

const home=ref([])
const banner=ref([])
const loading=ref(false)
const getData=()=>{
    Promise.all([queryBanner(),queryHome()]).then(([resbanner,reshome])=>{
        banner.value=resbanner.data;
        home.value=reshome.data
        loading.value=false
    })
}

onMounted(
    getData
)
</script>
<style scoped>
    .home{
        padding-bottom: 66px;
    }
</style>