import axios from "../plugins/axios";

const queryReg = async ({ username, password }) => { 
  // 原生js,把键值对归纳成对象在地址栏发送
  let data = new URLSearchParams();
  data.append("username", username);
  data.append("password", password);

  return axios({
    url: "/reg",
    method: "post",
    data,
  });
};

const queryLogin = async ({ username, password }) =>
  axios({ url: "/login", params: { username, password } });

const queryUser = async () => axios.get("/user");

const isLogin = async () => {
  //携带token（令牌），到服务器
  let user = window.localStorage.getItem("user"); //{key:value,token:....}
  user = user ? JSON.parse(user) : "";

  return axios.get("/islogin", { headers: { token: user } });
};

export { queryLogin, queryReg, queryUser, isLogin };
