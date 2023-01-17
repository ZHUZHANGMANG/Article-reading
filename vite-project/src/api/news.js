// 接口管理模块，服务，处理前端到后端的请求，返回promise交给使用放
import axios from "../plugins/axios";
// 列表
export const queryHome=async(params)=>{
    return axios({url:'/home',params:{_page:1,_limit:20,...params}})
};
export const queryFollow=async(params)=>axios.get('/follow',{params:{_page:1,_limit:20,...params}})
;
export const queryColumn=async(params)=>axios.get('/column',{params:{_page:1,_limit:20,...params}});
export const queryBanner=async(params)=>axios.get('/banner',{params:{_page:1,_limit:3,...params}})

// 详情
export const queryDetail=async({id,apiName})=>axios.get(`/${apiName}/${id}`)