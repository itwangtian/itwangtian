---
title: 「token方案指南」前后端鉴权-超时未操作登出
urlname: ueopfvai6y6du4ac
date: "2023-08-19 14:59:11"
updated: "2023-08-25 23:23:27"
---

当我们访问一个需要身份验证的网站或应用时，通常需要提供用户名和密码来验证身份。然而，这种方式存在一些问题，比如密码可能会被泄露或被猜测出来。为了解决这些问题，引入了一种称为"token 鉴权"的身份验证机制。

Token 鉴权是一种基于令牌的身份验证方式。用户登录成功后，服务器生成唯一令牌返回给客户端。客户端在后续请求中携带令牌作为身份凭证。

服务器验证令牌，确定用户身份和权限。令牌不存储在服务器，减轻负担。令牌可设置有效期，增加安全性。令牌可包含额外信息，方便权限控制。

优势在于简单、安全、可扩展。不依赖用户名密码，减少密码泄露风险。可实现单点登录和跨系统身份验证。可通过加密和签名增加安全性。

## token 和 jsonwebtoken 流程图

token -接口访问凭证![](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/3afca19611725d4df57137367b2cb5fc.webp)
💡jwt（鉴权常用方案）
![IMG_4169.JPG](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/d297c2030dd23a666a263301aaa6343b.jpeg)

## 无感刷新 token 处理方案

### 定义两个 token

单点登录

> 主站维护自己的 refresh-token，有效期较长，每次 token 过期后可以用 refresh-token 给自己续命请求新的 token，从主站跳转到子站，或者主站授权去其他页面，都是给其他页面 token，token 的有效期较短，过期了就得重新授权，所以通过 token 和 refresh-token 就可以做到相对安全的单点登陆或者授权，因为他们两个的失效完全不同。

- token_refresh( 刷新业务 token 的访问凭证)
- access（业务 token）

为了安全期间，每个 access token 有效时间通常不能设太长，而 refresh token 就是为了延长 access token 的有效时间的，一开始就 refresh token，那明显不符合
![](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/4764bd028d00d2a05c11a91ffe508756.webp)

### 定义一个 token

在请求响应拦截器中拦截，判断 token 返回过期后，调用刷新 token 接口
参考链接
[https://juejin.cn/post/6854573219119104014](https://juejin.cn/post/6854573219119104014)
[https://juejin.cn/post/6983582201690456071#heading-5](https://juejin.cn/post/6983582201690456071#heading-5)

### 问题

- [问题一：如何防止多次刷新 token](https://juejin.cn/post/6983582201690456071#heading-4)
- [问题二：同时发起两个或者两个以上的请](https://juejin.cn/post/6983582201690456071#heading-5)

## cookie-ssetion vs token

- sestionId 需要存储在数据库中，增加了查询的开销
- token 是个无状态的，无需存储，缺陷 token 有效期内销毁

## 接口-超时未操作登出

在 token 鉴权的功能基础上，实现接口超时未交互，则账号退出。
**防踩坑无用版**以下思路是我在**未接触无感刷新方案的意淫版，图一乐就行啦**
**前端实现（有风险-容易被篡改）**
在前端请求拦截中实现

1. 首次请求成功后本地存储时间，下次请求响应前进行时间校验。
2. 当前时间与本地时间校验，未超时继续请求，超时则跳转登录页。

**后端 node 实现**
用户操作任意一个接口时，后台进行校验。

1. 在用户登录成功时，将用户的最后操作时间记录在会话中或存储在数据库中。
2. 对于每个请求，都更新用户的最后操作时间。
3. 设置一个定时器或定时任务，在一定时间间隔内检查用户最后操作时间与当前时间的差值。如果超过了设定的时间阈值，则执行退出操作。

### 第二版（通用方案 💡）

使用双 token 实现无感刷新登录 🔄，无需再检测接口超时未访问、实现系统登出功能。

因为在请求拦截器中，监听接口 401 状态（token 失效）去调用刷新 token 接口，如果 refash_toke 也失效，说明在规定时间内未访问、则登出系统

## 前端-超时未操作登出

用户长时间未操作页面，返回登录
每隔 30s 去检查一下用户是否过了 30 分钟未操作页面。
注意事项：！需要考虑及时销毁定时器

```typescript
// 引入路由和storage工具函数
import storage from "@/utils/storage";
import router from "@/common/router";

let lastTime = new Date().getTime();
let currentTime = new Date().getTime();
let timeOut = 30 * 60 * 1000; //设置超时时间: 30分钟

window.onload = function () {
  window.document.onmousedown = function () {
    stroage.setItem("lastTime", new Date().getTime());
  };
};

function checkTimeout() {
  currentTime = new Date().getTime(); //更新当前时间
  lastTime = stroage.getItem("lastTime");

  if (currentTime - lastTime > timeOut) {
    //判断是否超时

    // 清除storage的数据(登陆信息和token)
    storage.clear();
    // 跳到登陆页
    if (router.currentRouter.name == "login") return; // 当前已经是登陆页时不做跳转
    router.push({ name: "login" });
  }
}

export default function () {
  /* 定时器 间隔30秒检测是否长时间未操作页面 */
  window.setInterval(checkTimeout, 30000);
}
```
