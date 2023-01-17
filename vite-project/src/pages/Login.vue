<template>
      <van-nav-bar class="white" 
        left-arrow fixed @click="$router.back()"
    />
<div class="content">
  <p class="fhbtn"><a href="mydoc_m.html"></a></p>
  <h1></h1>
  <div class="login-box">
    <p class="lsolid"></p>
    <div class="login">
      <routerLink to="/login">登录 |</routerLink>
      <routerLink to="/reg">注册</routerLink>
      <!-- <a href="login_m.html">登录</a>
      <span></span>
      <a href="reg_m.html">注册</a> -->
    </div>
    <p class="rsolid"></p>
  </div>
  <ul>
    <Input v-model="username" label="账号"></Input>
    <Input v-model="password" label="密码"></Input>
  </ul>
  <div class="footbox">
    <Button @click="login">登 录</Button>
    <!-- <input type="button" value="登 录" class="login-btn"/> -->
    <a href="javascript:;" class="tishi">忘记密码？</a>
  </div>
</div>
</template>
<script setup>
    import Input from '../components/Input.vue'
    import Button from '../components/Button.vue'
import { onMounted,ref } from 'vue';
import { queryLogin } from '../api/http';
import {Toast} from 'vant'
import { useRoute,useRouter } from 'vue-router';
const username=ref()
const password=ref()
const route=useRoute();
const router=useRouter()
    const login=async()=>{
      const res=await queryLogin({username:username.value,password:password.value})
      if(res.err===0){
        let token=res.token
        window.localStorage.setItem('user',JSON.stringify(token));
        if(route.query.redirect){
          router.push(route.query.redirect)
        }else{
          router.push('/user')
        }
      }else{
          Toast(res.msg)
      }
    }
</script>
<style scoped>
    .van-nav-bar{
        background-color: #f2f4f5;
    }
    .white :deep() .van-icon-arrow-left{
        font-size: 40px;
        font-weight: 700;
    }
    .van-cell{
        line-height: .6rem;
        text-align: center;
    }
    .van-cell :deep() .van-field__label{
        border-right: 1px solid #ccc;
    }
    .content{max-width:6.4rem; margin:0 auto;}
    .content .fhbtn{ padding-top:0.27rem;}
    .content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(/assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
    .content h1{width:2.18rem;height:1.35rem; background:url(/assets/img/say.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:1.22rem;}
    .content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
    .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
    .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
    .content .login-box{ position:relative;}
    .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
    .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
    .content ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
    .content ul li{height:0.95rem; position:relative;}
    .content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
    .content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;}
    .content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
    .content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
    .content .login-btn{width:4.65rem;height:0.65rem; background:#4c4f50; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
    .content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
</style>