const jsonServer = require("json-server"); //在node里面使用json-server包
const db = require("./db.js"); //引入数据库
const path = require("path");
const Mock = require("mockjs");

let mock = "/api"; //定义路由根别名
let time = 1000; //延时返回数据
let port = 3000; //延时返回数据

//创建服务器
const server = jsonServer.create(); //创建jsonserver 服务对象

//配置jsonserver服务器 中间件
server.use(
  jsonServer.defaults({
    static: path.join(__dirname, "/public"), //静态资源托管
  })
);

server.use(jsonServer.bodyParser); //抓取body数据使用json-server中间件

//响应
server.use((req, res, next) => {
  //可选 统一修改请求方式
  // console.log(1)
  // request.method = 'GET';
  // token统一携带的校验  islogin接口存在，这里无需

  /* if (
    req.url.includes("/login") ||
    req.url.includes("/reg") ||
    req.url.includes("/islogin")
  ) {
    next();
  } else {
    if (req.headers.token && req.headers.token.length === 16) {
      next();
    } else {
      setTimeout(() => {
        res.jsonp({
          err: 2,
          msg: "token失效，或者过期",
          data: [],
        });
      }, time);
    }
  } */
  next();
});

//登录注册校验
let mr = Mock.Random; //提取mock的随机对象

server.get(mock + "/login", (req, res) => {
  // console.log(req.query, req.body);//抓取提交过来的query和body
  let username = req.query.username;
  let password = req.query.password;
  username === "aa" && password === "aa123"
    ? res.jsonp({
        err: 0,
        msg: "登录成功",
        data: {
          follow: mr.integer(1, 5),
          fans: mr.integer(1, 5),
          nikename: mr.cname(),
          auth_icon: mr.image("20x20", mr.color(), mr.cword(1)),
          time: mr.integer(13, 13),
        },
        token: "1234567890123456",
      })
    : res.jsonp({
        err: 1,
        msg: "登录失败",
      });
});
server.post(mock + "/reg", (req, res) => {
  let username = req.body.username;
  console.log("reg", req.body);
  username !== "aa"
    ? res.jsonp({
        err: 0,
        msg: "注册成功",
        data: {
          follow: mr.integer(0, 0),
          fans: mr.integer(0, 0),
          nikename: mr.cname(),
          icon: mr.image("20x20", mr.color(), mr.cword(1)),
          time: mr.integer(13, 13),
        },
      })
    : res.jsonp({
        err: 1,
        msg: "注册失败",
      });
});
server.get(mock + "/islogin", (req, res) => {
  //要求前端需要此次访问，需要守卫
  if (req.headers.token && req.headers.token.length === 16) {
    res.jsonp({
      err: 0,
      msg: "自动登录成功",
    });
  } else {
    res.jsonp({
      err: 1,
      msg: "未登录",
    });
  }
});
//响应mock接口
const router = jsonServer.router(db); //创建路由对象 db为mock接口路由配置  db==object

//自定义返回结构
router.render = (req, res) => {
  //自定义返回结构
  // let len = Object.keys(res.locals.data).length; //判断数据是不是空数组和空对象
  // console.log(len);
  // console.log("mock", res);

  setTimeout(() => {
    //模拟服务器延时
    res.jsonp({
      err: res.statusCode,
      msg: res.statusMessage,
      data: res.locals.data,
    });
  }, time);

  // res.jsonp(res.locals.data)
};

//定义mock接口别名
server.use(
  jsonServer.rewriter({
    //路由自定义别名
    [mock + "/*"]: "/$1",

    // "/product\\?dataName=:dataName": "/:dataName",
    // "/banner\\?dataName=:dataName": "/:dataName",
    // "/detail\\?dataName=:dataName&id=:id": "/:dataName/:id",

    // "/product/del\\?dataName=:dataName&id=:id": "/:dataName/:id",
    // "/product/add\\?dataName=:dataName": "/:dataName",
    // "/product/check\\?dataName=:dataName&id=:id": "/:dataName/:id"
  })
);

server.use(router); //路由响应

//开启jsonserver服务
server.listen(port, () => {
  console.log("mock server is running");
});
