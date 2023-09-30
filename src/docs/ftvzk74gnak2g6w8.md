---
title: ts安装模块总是报错！原因竟然是这个！
urlname: ftvzk74gnak2g6w8
date: "2023-07-26 16:23:29"
updated: "2023-09-09 17:06:02"
---

正确安装了 `redux-thunk` 模块，但仍然出现此错误，可能是由于缺少类型声明文件的原因。在 TypeScript 项目中，为了获得类型检查的支持，通常需要安装相应的类型声明文件。

对于 'redux-thunk'，它的类型声明文件为 '@types/redux-thunk'。你可以检查你的项目中是否已经安装了这个类型声明文件。如果尚未安装，请运行以下命令来安装它：
使用 npm：

```jsx
npm install --save-dev @types/redux-thunk
```
