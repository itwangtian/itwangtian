---
title: npx run eject 异常
urlname: pfyhe9lm7o95vz3r
date: "2023-09-10 21:59:19"
updated: "2023-09-10 22:20:58"
---

# 问题描述

使用 react 脚手架创建项目后，执行 npx run eject 报错
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/6d70ded04181fee25821487c1b745ae7.png)

# 原因

`npx create-react-app xxx ` 创建项目时会创建`.gitnore`配置文件，当仓库中代码有更改未提交，会导致 `npx run eject`失败

# 解决

1、删除 git 相关配置文件
2、初始化 git 仓库，提交代码

```typescript
cd  project	//进入项目根目录
git init　　// 当前目录新建代码库
git add .　　// 添加当前目录所有文件到暂存区
git commit -m '描述信息'　　// 提交暂存区到仓库区
npm run eject	//项目根目录运行
```
