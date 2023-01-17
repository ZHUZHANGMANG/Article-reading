import axios from "axios";
// vantd loading
import {Toast} from 'vant'
// 基础请求地址
axios.defaults.baseURL='/api'
// 发送一个请求拦截
axios.interceptors.request.use(
    function (config) {
      //config~~ axios({config})
      //请求数据前显示loading,
      Toast.loading({
       message:'加载中....',
        // 加载不击穿
        forbidClick:true,
        // loadingleixing 
        loadingType:'spinner'
      });
      return config;
    },
    function (error) {
      // 请求错误发送之前做点事
      return Promise.reject(error);
    }
);
//添加一个响应拦截
axios.interceptors.response.use(
    function (response) {
      //response ~~ axios.get().then(res)
      //关闭loading
      Toast.clear()
      return response.data; //数据简化工作
    },
    function (error) {
      // 数据返回但有误
      Toast({
        message: "接口不存在",
        duration: 3000,//延时
        forbidClick: true,
      });
      return Promise.reject(error);
    }
  );
export default axios
