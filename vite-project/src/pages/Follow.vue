<template>
    <Cell 
        class="follow"
        v-for="(item,index) of follow"
        :key="item.id"
        :title="`${index+1}.${item.title}`" :label="item.des"
        :to="{name:'detail',query:{id:item.id,apiName:'follow'}}"
        ></Cell>
</template>
<script setup>
import { onMounted ,ref} from 'vue';
import { queryFollow } from '../api/news';
import Cell from '../components/Cell.vue'
const follow=ref([])
let _page=1
onMounted(
    async()=>{
        const res=await queryFollow({_page});
        follow.value=res.data
    }
)
</script>
<style scoped>
    .follow{
        padding-bottom: 66px;
    }
</style>