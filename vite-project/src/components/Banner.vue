<template>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @click="toDetil">
  <van-swipe-item
    v-for="(item,index) of data"
    :key="item.id"
    @click="toDetail(item.id)"
  >
        <img :src="item.banner" alt=""/>
            <div class="text-box">
                <h2>{{item.title}}</h2>
                <p>{{item.sub_title}}</p>
            </div>
    </van-swipe-item>
</van-swipe>

</template>
<script setup>
import { useRouter } from 'vue-router';
const router=useRouter();

const apiName= defineProps(["data","apiName"])
const toDetil=(id)=>{
    router.push({name:'detail',query:{id,apiName}
    })
}
</script>
<style scoped>
.my-swipe img{width:100%; display:block;}
.my-swipe .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.my-swipe h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.my-swipe p{ line-height:100%;}
</style>