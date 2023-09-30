---
title: react+node 本地大文件分片上传、断点续传
urlname: gx7xpdd7oom87eeu
date: "2023-08-03 14:41:19"
updated: "2023-09-04 16:46:41"
---

# 本地文件上传

## 环境安装

1.  Koa

- 作用：Koa 是一个 Node.js 的 Web 框架，用于构建 Web 应用程序。它提供了一种简洁而灵活的方式来处理 HTTP 请求和响应。
- npm 地址：[https://www.npmjs.com/package/koa](https://www.npmjs.com/package/koa)

2.  Koa-Router

- 作用：Koa Router 是 Koa 框架的路由中间件，用于定义和处理路由。
- npm 地址：[https://www.npmjs.com/package/koa-router](https://www.npmjs.com/package/koa-router)

3.  @koa/multer

- 作用：@koa/multer 是一个用于处理文件上传的 Koa 中间件。它基于 Multer 库，提供了方便的文件上传功能。
- npm 地址：[https://www.npmjs.com/package/@koa/multer](https://www.npmjs.com/package/@koa/multer)
- Multer

Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，主要用于上传文件。
在 form 表单上要加上 enctype=“multipart/form-data” 的属性。
Multer 不会处理任何非 multipart/form-data 类型的表单数据。
不要将 Multer 作为全局中间件使用，因为恶意用户可以上传文件到一个你没有预料到的路由，应该只在你需要处理上传文件的路由上使用。

4.  path

- 作用：Node.js 的内置模块，用于处理文件路径，提供了一些实用的函数来操作和解析文件路径。
- npm 地址：这是 Node.js 的内置模块，不需要通过 npm 安装，可以直接使用。

5.  @koa/cors

- 作用：@koa/cors 是一个 Koa 中间件，用于处理 CORS（跨源资源共享）请求，允许不同域之间的跨域请求。
- npm 地址：[https://www.npmjs.com/package/@koa/cors](https://www.npmjs.com/package/@koa/cors)

6.  koa-body

- 作用：koa-body 是一个 Koa 中间件，用于解析 HTTP 请求的请求体，并将解析的数据附加到 Koa 的上下文中。
- npm 地址：[https://www.npmjs.com/package/koa-body](https://www.npmjs.com/package/koa-body)

7.  koa-static

- 作用：koa-static 是一个 Koa 中间件，用于提供静态文件服务，可以将指定目录下的静态资源（如 HTML、CSS、JavaScript 文件）提供给客户端访问。
- npm 地址：[https://www.npmjs.com/package/koa-static](https://www.npmjs.com/package/koa-static)

## 注意事项！！

文件本地上传环境配置，顺序要求如下：

```javascript
app.use(cors()); //1、先配置跨越
app.use(router); // 2、应用路由（使用koa-Router）
app.use(
  koaBody({
    //3、解析请求内容请求数据
    multipart: true,
  })
);
// 4、、
```

参考链接
[https://jelly.jd.com/article/5e734631affa8301490877f1](https://jelly.jd.com/article/5e734631affa8301490877f1)
[https://segmentfault.com/a/1190000008899001](https://segmentfault.com/a/1190000008899001)
[https://mp.weixin.qq.com/s/y_UwDtB1TsNNfWs5hJVGdA](https://mp.weixin.qq.com/s/y_UwDtB1TsNNfWs5hJVGdA)
