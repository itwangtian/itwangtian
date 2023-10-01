---
title: 阿里云oss开发实践：大文件分片、断点续传、实时进度 React+Node+Socket.IO
urlname: qai06nw793lx62hm
date: "2023-07-28 11:49:53"
updated: "2023-08-26 09:40:51"
---

# 前言

这两天在学习阿里云 oss 上传。踩了不少坑，![092318F5.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/a612e66218d3d2c4d2fd19368317e17a.png) 终于实现了大文件分片、断点续传的功能。这篇文章主要分享学习笔记，希望能给大家一些帮助。

先看效果 ↓
![oss断点 -original-original.gif](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/4f1d196bd7937f1a276ced97e4c2cc9c.gif)
**技术栈**

1. 前端： react+Ts + axios 上传文件
2. Node 部分：定义接口、阿里云 oss
3. socket.io ：实时同步上传进度
   > 特别说明 axios 中 onUploadProgress 只是上传本地文件的进度，不是上传服务器存入的进度，需要 socket.io 从服务端实时返回上传进度

# 环境安装

![08E1CE2D.gif](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/63f63f96d60f8234794a9f2035634df1.gif)需进行阿里云 oss 配置，获取 appid、密钥等参数 ↓[阿里云登录 - 欢迎登录阿里云，安全稳定的云计算服务平台](https://ram.console.aliyun.com/manage/ak?spm=a2c8b.12215393.top-nav.dak.6c12336aYGPYmv)
以下是创建 node 服务所需依赖包

```javascript
// 下载 Koa 模块
npm install koa
// 下载 Koa Router 模块 https://www.npmjs.com/package/koa-Router[包含示例代码]
npm install koa-router
// 下载 @koa/cors 模块
npm install @koa/cors
// 下载 ali-oss 模块
npm install ali-oss
// 下载 koa-body 模块
npm install koa-body
// 下载 socket.io
npm install socket.io
```

# 前端部分

前端使用 react+Ts，但无论哪种框架，其实业务逻辑是一样的

### 初始化 socket

```javascript
let userId = localStorage.getItem("userId");
if (!userId) {
  userId = new Date().getTime() + "";
  localStorage.setItem("userId", userId);
}
let host = "http://127.0.0.1:3000";

const soket = io(host);
soket.on("connect", function () {
  console.log("链接了 Connected to server");
});
// 模拟用户登录
soket.emit("login", {
  userId,
});

soket.on("success", (data) => {
  console.log("success", data);
});
```

### 文件上传

```jsx
const upload = async () => {
  // FileList 内置接口
  const file = (inputRef.current?.files as FileList)[0];
  console.log('inputRef', file);
  if (!file) {
    message.error('没有选择文件');
    return;
  }
  let formData = new FormData();
  formData.append('file', file);
  let userId = localStorage.getItem('userId') as string
  formData.append('userId',userId)
  await axios.post(host+'/upload', formData, {
    // onUploadProgress 监听的是客户端发送数据的进度，而不是存储服务器的进度。
    onUploadProgress: (progressEvent: any) => {
      const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      console.log(`Upload progress: ${percentage}%`, progressEvent);
    }
  });
};
```

### 进度回显

```jsx
const [progress, setProgress] = useState < number > 0;
soket.on("uploadding", (data) => {
  console.log("uploadding", data);
  setProgress(data);
});
```

# node 部分

后台使用 koa 创建 node 服务，主要分为 api 接口、阿里云业务函数、socket.io 实时发送上传进度

### socket.io

```javascript
const { createServer } = require("http"); // 导出创建服务的模块函数
const { Server } = require("socket.io"); // 创建socket.io 服务的函数
const httpServer = createServer(app.callback()); // 创建一个http服务实例，app.callback() 作为服务器的请求处理函数
const io = new Server(httpServer, {
  cors: {
    origin: "*", // 配置socket允许跨越
  },
});
```

### 上传接口

```javascript
// 上传接口
router.post("/upload", async (ctx, next) => {
  let file = ctx.request.files.file;
  // 用户id
  let userId = ctx.request.body.userId;
  try {
    let result = null;
    await next();
    // 判断文件大小，超过partSize进行分片上传
    if (file.size < partSize) {
      console.log("直连操作");
      result = await commonUpload(file, userId);
    } else {
      console.log("分片上传");
      result = await multipartUpload(file, userId);
    }
    ctx.body = {
      code: 200,
      message: "success",
      data: result,
    };
  } catch (error) {
    console.log("error", error);
    ctx.body = {
      message: "上传失败",
      code: 401,
    };
  }
});
```

### 暂停接口

```javascript
router.post("/break", async (ctx) => {
  let userId = ctx.request.body.userId;
  // 取出 当前用户的阿里云实例，用于仅关闭当前上传
  let itemClient = userList[userId]["client"];
  if (itemClient) {
    itemClient.cancel();
    ctx.body = {
      code: 200,
      message: "暂停成功",
    };
  } else {
    ctx.body = {
      code: 401,
      message: "暂停失败",
    };
  }
});
```

### 继续上传接口

```javascript
// 继续上传
router.post("/continue", async (ctx) => {
  let userId = ctx.request.body.userId;
  ctx.body = {
    code: 200,
    message: "已继续上传",
  };
  try {
    resumeMultiparUpload(userId);
  } catch (error) {
    console.log("继续上传报错");
  }
});
```

### 分片上传

```javascript
// 分片上传
const multipartUpload = async (file, userId) => {
  try {
    let result = await userList[userId].client.multipartUpload(
      file.originalFilename,
      file.filepath,
      {
        parallel,
        partSize,
        progress: (p, checkpoint) => {
          onProgress(p, checkpoint, userId);
        },
      }
    );
    return result;
  } catch (error) {
    console.log("multipartUpload", error);
  }
};
```

### 断点续传

```javascript
// 断点续传
const resumeMultiparUpload = async (userId) => {
  // 获取当前用户分片缓存
  try {
    let checkpoint = checkpoints[userId];
    const { uploadId, file } = checkpoint;
    let result = await userList[userId].client.multipartUpload(uploadId, file, {
      parallel, // 分片数量
      partSize, //分片大小
      progress: (p, checkpoint) => {
        onProgress(p, checkpoint, userId);
      }, // 上传进度回调函数
      checkpoint, // 断点续传缓存目录
    });
    //上传后，删除切片数据
    delete checkpoints[userId];
    console.log("result", result);
    return result;
  } catch (error) {
    console.log("error 获取当前用户分片缓存");
  }
};
```

### 进度回显

```javascript
// 上传进度
const onProgress = async (p, checkpoint, userId) => {
  // p 进度，checkpoint 当前分片上传数据
  let step = Math.floor(p * 100); // 转换为百分比
  io.to(userList[userId].socketId).emit("uploadding", step); // 发给当前客户端
  // io.emit('uploadding',step) 群发
  // 存储分片数据，用户续传
  console.log("上传进度", step);
  checkpoints[userId] = checkpoint;
};
```

### socket.io 私聊

```javascript
const userList = {}  // 用户数据
const partSize = 1024 * 100; // 每个分片大小(byte) 100kb
const parallel = 3; // 同时上传的分片数
let checkpoints = {}; // 记录上传分片数据，用于断点续传
// oss客户端实例

// socket.io系统事件，监听链接状态
io.on("connection", (socket) => {
    // 监听客户端信息数据，存储用户信息

    socket.on('login', (data) => {
        // 用户未链接oss，进行创建oss实例
        if (!userList[data.userId]) {

            let client = new OSS({
                // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
                region: 'oss-cn-beijing',
                // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控W制台创建RAM用户。
                accessKeyId: 'xxx',
                accessKeySecret: 'xx',
                bucket: 'xxx
            });

            // 将socket.id 与用户信息关联存储，方便私聊发送
            userList[data.userId] = {
                ...data,
                socketId: socket.id,
                client: client
            }
            console.log('socket.id', socket.id)
            console.log('获取到用户数据')
        } else { // 已链接oss，进行只更新socket.id
            userList[data.userId].socketId = socket.id
        }
    })
    socket.emit('success', '服务端链接成功了')
    // socket.io 系统事件-客户端断开监听
    socket.on('disconnect', () => {
        console.log('客户端断开了')
        // io.emit('quit', socket.id)
    })
});
```

# 纯前端操作部分

如无服务端业务要求，建议客户端调用阿里云 sdk，实现上传 oss 功能，操作如 node 一致，阿里云 sdk 同样支持分片上传等，最方便的是无需再创建 socket 获取进度。
兄弟们，点赞收藏过 20，下篇文章更新呀

# Socket 相关 api

在 Socket.IO 中，客户端和服务端都有一些系统事件。

#### 服务端系统事件：

1. `connection`：当客户端与服务器建立连接时触发。可以在此事件中执行与连接相关的操作。

```javascript
io.on("connection", (socket) => {
  // 处理连接事件
});
```

2. `disconnect`：当客户端与服务器断开连接时触发。可以在此事件中执行与断开连接相关的操作。

```javascript
socket.on("disconnect", () => {
  // 处理断开连接事件
});
```

3. `error`：当在连接过程中发生错误时触发。可以在此事件中处理连接错误。

```javascript
socket.on("error", (err) => {
  // 处理连接错误事件
});
```

4. `to` 在 Socket.IO 中，`to` 方法用于向特定房间或客户端发送消息。它允许你将消息发送给指定的接收者。

`to` 方法的使用方法如下：

```javascript
io.on("connection", (socket) => {
  // 建议 将socket.id 与用户信息关联存储，方便私聊发送
  // 向指定客户端发送消息
  io.to(socket.id).emit("message", "Hello from server!");
});
```

使用 `io.to(socket.id).emit('message', 'Hello from server!')` 向特定客户端发送消息，其中 `socket.id` 表示当前客户端的唯一标识符。

#### 客户端系统事件：

1. `connect`：当客户端成功连接到服务器时触发。该事件仅发生在客户端连接成功时。

```javascript
socket.on("connect", () => {
  // 处理连接成功事件
});
```

2. `disconnect`：当客户端与服务器断开连接时触发。可以在此事件中执行与断开连接相关的操作。

```javascript
socket.on("disconnect", () => {
  // 处理断开连接事件
});
```

3. `error`：当在连接过程中发生错误时触发。可以在此事件中处理连接错误。

```javascript
socket.on("error", (err) => {
  // 处理连接错误事件
});
```

# 注意![08E1CE2D.gif](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/63f63f96d60f8234794a9f2035634df1.gif)

**socket 开启跨越**
:::warning
socket.io 需配置跨越，否则无法链接，参考 [https://socket.io/zh-CN/docs/v4/handling-cors/](https://socket.io/zh-CN/docs/v4/handling-cors/)
:::

```javascript
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080", // 前端访问地址 、"*" 允许所有跨越
  },
});

httpServer.listen(3000);
```

**koa+socket 使用事项**
:::warning
接口后台和 socket 端口一致情况下，需使用包含 socket 的服务实例来创建监听，否则 socket 无法链接
:::
在 koa 中使用 socket.io 需要创建一个包含 socket.io 的服务实例，代码示例如下：

```javascript
const app = new (require("koa"))();
const router = require("koa-Router")();
const { createServer } = require("http");
const { koaBody } = require("koa-body");
const { Server } = require("socket.io");
app.use(cors()); // 允许接口跨域
app.use(router.routes());
// 创建socket服务
const httpServer = createServer(app.callback());
const io = new Server(httpServer, {
  cors: {
    origin: "*", // 允许socket跨域
  },
});
io.on("connection", () => {
  console.log("服务链接了");
  /* … */
});
// 使用包含socket的服务示例，如果使用koa中的app实例，则无法监听socket服务
httpServer.listen(9000, () => {
  console.log("koa server listening on port 9000");
});
```

# 待做功能

sts 临时授权
oss 上传应设置会话时长，超时进行重新获取，业务步骤类似 token 鉴权，阿里云 oss 操作也应该进行鉴权

koa+socket
[https://www.cnblogs.com/qiaomucreate/p/16653265.html](https://www.cnblogs.com/qiaomucreate/p/16653265.html)
