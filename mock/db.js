var Mock = require("mockjs"); //// 用mockjs模拟生成数据

//mockjs+配置型 输出时，是一个函数
//mockjs+编程型 输出时，是一个对象

let mr = Mock.Random;

let mapData = (n) => {
  let data = [];

  for (var i = 0; i < n; i++) {
    data.push({
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      id: 10000 + i, //_id 字符
      title: "@ctitle(8,12)",
      des: "@ctitle(10,12)",
      time: "@integer(1310505744645,1610505744645)",
      detail: {
        auth_icon: mr.image("50x50", mr.color(), mr.cword(1)),
        auth: "@cname()",
        content: "@cparagraph(3,8)",
      },
    });
  }
  return data;
};

let mapData2 = (n) => {
  let data = [];

  for (var i = 0; i < n; i++) {
    data.push({
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      id: 10000 + i, //_id 字符
      title: "@ctitle(4,8)",
      sub_title: "@ctitle(6,12)",
      banner: mr.image("1680x745", mr.color(), mr.cword(1, 2)),
      time: "@integer(1310505744645,1610505744645)",
      detail: {
        auth_icon: mr.image("50x50", mr.color(), mr.cword(1)),
        auth: "@cname()",
        content: [1, 2, 3, 4].map(
          () => '<p style="text-indent: 2em">' + "@cparagraph(3,8)" + "</p>"
        ),
      },
    });
  }
  return data;
};

module.exports = Mock.mock({
  //object
  banner: mapData2(10),
  home: mapData(100),
  follow: mapData(80),
  column: mapData(60),
  user: {
    auth_icon: mr.image("50x50", mr.color(), mr.cword(1)),
    nikename: "@cname()",
    follow: "@integer(1000,10000)",
    fans: "@integer(1000,10000)",
  },
});
