"use strict";
// 引入scp2var
var client = require("scp2");
console.log("开始自动上传!");
client.scp(
  "./docs/.vuepress/dist/", // 默认打包的路径
  {
    host: "", // 此处替换为你自己服务器的ip
    port: "22", // ftp端口号 ，一般为22 或 21
    username: "root", // 服务器登录用户名
    password: "", // 服务器登录密码
    path: "/www/wwwroot/……/", // 项目要上传到服务器的路径，要服务器上的绝对路径
  },
  (err) => {
    if (!err) {
      console.log("项目发布完毕!");
    } else {
      console.log("err", err);
    }
  }
);