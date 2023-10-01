---
title: React+node 图片剪裁上传，集成本地存储和阿里云OSS
urlname: xtgxqhiyw52hvk3r
date: "2023-07-28 11:50:14"
updated: "2023-08-25 09:41:03"
---

# 前言

最近一直在调研图片上传阿里云 oss 功能，上篇文章主要讲述了阿里云 oss 大文件分片、断点续传。这篇文章是在原有基础上，前端加了图片剪裁、后端加了本地存储功能。

先看效果
![图片剪裁上传 -original-original.gif](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/25fe98ae60b1fe13a9957fc6db91bc6a.gif)
技术栈

1. 前端：`react+Ts+antd`
2. 后端：`node+koa+koa-body+ali-oss`

功能

1. 图片剪裁（`antd剪裁组件`）
2. 本地文件上传（`antd上传组件+axios`）
3. 文件存储本地（`node+koa-body`）
4. 文件存储阿里 oss（`node+ali-oss`）

# 核心代码

## 环境配置

### 引入依赖环境

使用 koa 搭建 node 服务，搭配 koa 周边依赖包开发起来更方便，详细依赖环境如下：

```php
const app = new (require('koa'))(); // koa
const router = require('koa-Router')();  // koa 路由
const cors = require('@koa/cors') // 运行koa中跨域
const OSS = require('ali-oss') // 阿里云oss-sdk
const {koaBody} = require('koa-body'); // 处理请求体中间件、用于解析json、表单 | 包含file内容请求，会生成临时文件,将文件信息添加到ctx.request对象属性，通过ctx.request.files获取
const path = require('path'); // 对文件路径的操作
const staticServe = require('koa-static') // 使上传的文件能在浏览器中访问
const fs = require('fs') // 文件的读写操作
const PORT = '9000' // 端口
```

### 配置阿里云 oss

```javascript
const client = new OSS({
  // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: "oss-cn-beijing",
  // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
  accessKeyId: "xxx",
  accessKeySecret: "xx",
  // 填写Bucket名称。
  bucket: "xxx",
});
```

### 使用中间件

实现本地上传、解决跨域等功能，需使用 koa 中间件完成功能

```php
// __dirname node中全局变量，当前文件所在目录
// 上传本地目录
const UPLOAD_PATH = path.join(__dirname,'public/')
// 上传文件后的地址，用于拼接图片名称，回显前端
const UPLOAD_URL = `http://localhost:${PORT}`
//  使用跨域中间件
app.use(cors())

//应用koabody中间件，处理文件上传操作，生成临时文件路径
app.use(koaBody({
    multipart:true ,// 解析文件格式内容
    formidable:{
        // 上传文件的存储的位置
        uploadDir:UPLOAD_PATH,
        keepExtensions:true // 保留文件的扩展名
    }
}))
// app.use(bodyParser());
app.use(staticServe(UPLOAD_PATH))
app.use(router);
// 启动服务
app.listen(PORT,()=>{
    console.log('启动成功 9000')
});


```

## 阿里云分片上传

### 接口代码

```javascript
router.post("/upload_oss", async (ctx) => {
  console.log("请求了", ctx.request.files.file);
  console.log("上传oss upload_oss", ctx.request);
  const file = ctx.request.files.file;
  let result = await multipartUpload(file);
  ctx.body = {
    msg: "请求成功了",
    result,
  };
});
```

### 分片操作

```javascript
// 上传进度
const progress = (p, _checkpoint) => {
  // Object的上传进度。
  console.log("分片进度", p);
  // 分片上传的断点信息。
  // console.log(_checkpoint);
};

async function multipartUpload(file) {
  try {
    // 依次填写Object完整路径（例如exampledir/exampleobject.txt）和本地文件的完整路径（例如D:\\localpath\\examplefile.txt）。Object完整路径中不能包含Bucket名称。
    // 如果本地文件的完整路径中未指定本地路径（例如examplefile.txt），则默认从示例程序所属项目对应本地路径中上传文件。
    const result = await client.multipartUpload(
      file.originalFilename,
      file.filepath,
      {
        progress, // 如无需进度实时回显，可不配置
        // headers,
        // 指定meta参数，自定义Object的元信息。通过head接口可以获取到Object的meta数据。
      }
    );
    console.log(result);
    return result;
  } catch (e) {
    // 捕获超时异常。

    console.log("捕获超时异常。", e);
  }
}
```

## 本地文件上传

### 存储本地文件两种方式

####

一、renameSync（移动临时文件）

```javascript
fs.renameSync(ctx.request.files.file.filepath, filePath);
```

`优点`：直接使用 fs.renameSync，一次操作即可重命名或移动文件，非常简洁和高效。
`缺点`：fs.renameSync 是一个同步方法，会直接阻塞代码执行，直到文件操作完成

#### 二、创建文件流存储

```javascript
const reader = fs.createReadStream(ctx.request.files.file.filepath);
const writer = fs.createWriteStream(filePath);
reader.pipe(writer);
```

`优点`：可以同时处理多个文件的上传，不会阻塞代码执行。
`缺点`：在处理单个文件时可能略微复杂。

#### renameSync 存储单文件

```javascript
// 请求中的第二个参数是请求中间件函数，可用于请求前的业务操作
router.post(
  "/upload_local",
  async (ctx, next) => {
    const filePath =
      UPLOAD_PATH + `/${ctx.request.files.file.originalFilename}`;
    fs.renameSync(ctx.request.files.file.filepath, filePath);
    await next();
  },
  async (ctx) => {
    ctx.body = {
      msg: "请求成功了",
      imgUrl: UPLOAD_URL + `/${ctx.request.files.file.originalFilename}`,
    };
  }
);
```

# 常见问题

## multer 存储文件名乱码怎么办？

在第一版代码中，采用的是 multer 存储文件，上传文件是中文命名，multer 中无法解析格式，导致文件名乱码。
解决方式：将使用 Latin-1 编码的文件名转换为 UTF-8 编码
示例代码：

```javascript
// 文件名称命名
    filename:function(req,file,cb){
        console.log('文件名称命名')
        const decodedName = Buffer.from(file.originalname, "latin1").toString(
            "utf8"
          );
        console.log('decodedName',decodedName)
        cb(null,decodedName)
    }
```

`Buffer.from(file.originalname, "latin1")`使用 Buffer.from 方法将以 Latin-1 编码的 file.originalname 字符串转换为一个 Buffer 对象。Latin-1 是一种字符编码，也称为 ISO-8859-1。
`toString("utf8")`使用 toString 方法将 Buffer 对象转换回字符串，指定目标编码为 UTF-8。这将将 Latin-1 编码的字符串转换为 UTF-8 编码的字符串。

## Koa 接收不到 file 对象内容

正常情况下，引入 koa-body 中间件后，可以获取到前端表单数据，如下：
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/53ec54d23408d6328f887b83b2f0b604.png)
**如果获取不到，大概率是 routes 代码书写顺序错乱导致**
**⚠ 中间件的应用需要写在 routes 前面才可以**
正常执行顺序如下：

```php
const koaBody  = require('koa-body')({multipart: true});
app.use(koaBody); //中间件的应用需要写在routes前面才可以
app.use(router.routes())
```

## koa-body 和 koa-bodypaser 不兼容

在第一版代码中，使用 `koa-bodypaser + multer`来存储本地文件，`koa-body+ali-oss `上传阿里云存储。

这两个功能单独使用是没有问题，但是服务端同时定义两个接口，则会出现阿里云 oss 或本地存储失败。百度搜了一圈没找到解决方案，最终果断弃坑` multer`， 使用`koa-body` 来解析请求体内容.

`koa-body`不仅可以解析请求体内容、还可以生产文件临时路径、方便存储操作

> - koa-body 用于解析 请求中的 formData 文件内容格式、 json、buffer
> - koa-bodypaser 用于解析 非文件内容数据，比如 json、表单
> - 如果 node 业务中涉及 以上两种情况下，建议使用 koa-body。
