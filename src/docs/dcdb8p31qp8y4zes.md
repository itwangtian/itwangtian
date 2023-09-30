---
title: 阿里云oss基础使用
urlname: dcdb8p31qp8y4zes
date: "2023-08-28 08:48:51"
updated: "2023-08-28 08:56:40"
---

## 环境配置

### 账号开通

- 开通阿里云 oss [阿里云登录 - 欢迎登录阿里云，安全稳定的云计算服务平台](https://oss.console.aliyun.com/bucket)
- 生成 accessKey 和 secret 用于初始 oss [阿里云登录 - 欢迎登录阿里云，安全稳定的云计算服务平台](https://ram.console.aliyun.com/manage/ak?spm=a2c8b.12215393.top-nav.dak.6c12336aYGPYmv)

### node 安装包

```tsx
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
```

## alioss 核心操作接口

### 上传本地文件

过 put 接口将本地文件上传到 OSS

```
const OSS = require('ali-oss')
const path = require("path")

const client = new OSS({
  // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: 'yourregion',
  // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
  accessKeyId: 'yourAccessKeyId',
  accessKeySecret: 'yourAccessKeySecret',
  // 填写Bucket名称。
  bucket: 'examplebucket',
});

const headers = {
  // 指定Object的存储类型。
  'x-oss-storage-class': 'Standard',
  // 指定Object的访问权限。
  'x-oss-object-acl': 'private',
  // 通过文件URL访问文件时，指定以附件形式下载文件，下载后的文件名称定义为example.jpg。
  // 'Content-Disposition': 'attachment; filename="example.jpg"'
  // 设置Object的标签，可同时设置多个标签。
  'x-oss-tagging': 'Tag1=1&Tag2=2',
  // 指定PutObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
  'x-oss-forbid-overwrite': 'true',
};

async function put () {
  try {
    // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
    // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
    const result = await client.put('exampleobject.txt', path.normalize('D:\\localpath\\examplefile.txt')
    // 自定义headers
    //,{headers}
    );
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

put();
```

### 分片上传
