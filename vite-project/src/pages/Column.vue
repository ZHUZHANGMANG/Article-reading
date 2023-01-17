<template>
    <van-list
        class="column"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
        <Cell 
            v-for="(item,index) of column"
            :title="item.title"
            :label="item.des"
            :to="{name:'detail',query:{id:item.id,apiName:'column'}}"
        ></Cell>
    </van-list>
</template>
<script setup>
import { onMounted ,ref} from 'vue';
import { queryColumn, queryFollow } from '../api/news';
import Cell from '../components/Cell.vue'
import FollowVue from './Follow.vue';

const column=ref([])
const loading=ref(false)
const finished=ref(false)
let _page=1

onMounted(async()=>{
    const res=await queryColumn({_page});
    column.value=res.data
})
const onLoad=async()=>{
    _page++;
    const res=await queryColumn({_page});
    column.value=[...column.value,...res.data]
    loading.value=false;
    if(res.data.length===0){
        finished.value=true
    }
}
</script>
<style scoped>
    .column{
        padding-bottom: 66px;
    }
</style>