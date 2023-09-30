---
title: 项目拆分
urlname: gbwx6y5p60i7wv4g
date: "2023-08-27 13:45:14"
updated: "2023-08-27 13:46:14"
---

# 前端

- react+t、redux、antd、react-router、socket

# 后端

- koa、alioss、alipay、soketIo

# 核心模块

![](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/def3051da41b1106aaa6bad7b85ca98b.png)

## 项目适配 eslint

### **技术项**

- eslint+prettier+husky+commitizen

### **提薪点**

1. 项目规范-eslint+prettier+husky+commitizen
2. 配置使用提高项目代码的准确性、安全性和健壮性
3. 编写项目中公共方法库的 `d.ts`文件和处理项目中没有声明文件的第三方库【提薪】

### 源码说明

1. 已对整个项目进行环境配置  eslint+prettier+husky+commitizen
2. 项目根目录中，已配置 eslint +prettier 定义 语法风格规范
3. 公共库`/src/utils/tool.d.ts` 配置全局类型声明

## rbac 权限管理

### 技术项

1. react-router、koa

### 提薪点

1. 封装公共 hooks
2. token 鉴权

### 源码说明

1. 在项目`\src\hooks\`封装公共 hooks
2. 在项目-前端`\src\utils\Request.ts`请求拦截
3. 后端封装`verifyToken`校验中间件-可配置指定接口校验 token

## 云文件 oss

阿里云 oos、file 上传 、sokectio、分片上传、断点续传、koa

### 提薪点

- 服务端断点续传
- socket 心跳检测

### 源码说明

`server`

- 阿里云 oss 进行服务端上传、判断文件大小、过大切片处理
- 进度实时回显-使用`socketio`
- 文件上传、暂停、使用 koa+sokect+alioss 进行对 oss 切片操作
- sokcet 心跳检测-可使用 sokcetIO 进行配置、或者手写定时器查询 socket 状态

## 充值支付

支付宝 sdk、koa

### 微信下单流程

![](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/52fe8ddc25303ffa9fd828c4944c4aa4.png)

## 用户表格

redux、koa、mock

### 提薪点

- 搭建项目公共组件库【提薪】

### 源码说明

- 前端`src\components\my_componet`封装表格、分页、弹框相关公共组件
