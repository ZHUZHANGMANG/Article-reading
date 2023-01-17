import { createApp } from 'vue'
import App from './App.vue'
import './utils/uc-flexible.js'//w:640,倍：100
//import 'amfe-flexible'标准10倍
import './assets/styles/reset.css'
//路由
import router from "./plugins/router";

const app = createApp(App);

// axious
// import axios from 'axios';
// app.config.globalProperties.$axios=axios

app.use(router);
import { Swipe, SwipeItem } from 'vant';
app.use(Swipe);
app.use(SwipeItem);

import { Cell, CellGroup } from 'vant';
app.use(Cell);
app.use(CellGroup);

import { NavBar } from 'vant';
app.use(NavBar);

import { Field} from 'vant';
app.use(Field);

import { Button } from 'vant';
app.use(Button);

import { List } from 'vant';
app.use(List);

import { PullRefresh } from 'vant';
app.use(PullRefresh);
import './assets/styles/vant/index.css'//vant主题色需要在引入组件后再引入
app.mount('#app')
