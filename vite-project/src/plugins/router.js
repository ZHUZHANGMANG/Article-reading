import { createRouter, createWebHistory } from "vue-router";
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue'
import {isLogin} from '../api/http'
import {Toast} from 'vant'
let routes=[
    {path:'/login',component: Login},
    {path:'/reg',component: Reg},
    {path:'/home',component: ()=>import('../pages/Home.vue')},
    {path:'/follow',component:()=>import('../pages/Follow.vue')},
    {path:'/detail',component:()=>import('../pages/Detail.vue'),name:'detail'},
    {path:'/column',component:()=>import('../pages/Column.vue')},
    {path:'/user',component:()=>import('../pages/User.vue')},
    {path:'/',redirect:'/home'},
    {path:'/:pathMath(.*)*',component:()=>import('../pages/NoPage.vue')}
]
let router = createRouter({ //插件路由对象
    // routes:routes
    routes,
    history: createWebHistory(), // 路由模式为必传项
});
// 全局前置路由守卫
router.beforeEach(async(to,from,next)=>{
  if(to.path.includes('login')||to.path.includes('reg')){
    next();
  }else{
    const {err,msg}=await isLogin();
    if(err===0){
      next();
    }else{
      Toast({
        message:msg,
        duration: 300,
        forbidClick:true,
      });
      next({
        path:'/login',
        query:{
          redirect:to.fullPath,
        }
      })
    }
  }
})
export default router