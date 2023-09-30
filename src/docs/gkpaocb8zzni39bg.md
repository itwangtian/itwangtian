---
title: Ts vs Js 谁适合前端开发？| 01
urlname: gkpaocb8zzni39bg
date: "2023-07-14 23:31:22"
updated: "2023-09-02 22:04:30"
---

# Js VS Ts

分享一个学习编程的小诀窍，我屡试不爽，效果很赞呢！
是什么呢？ 就是**对比，**用积累的知识和经验，与新的概念和知识对比联系，能帮助加深理解和记忆，并促进应用和内化。
为了更好的学习效果，咱们以对比的形式、了解和认识 typeScript。下面从定义、优势、应用场景这三个角度，逐个介绍。

> 所以，在读这篇文章时，建议你有一定的 JavaScript 基础。

## 定义

`JavaScript`是一种动态类型的编程语言[为什么说 js 是动态类型语言呢？](https://www.yuque.com/nh0s08/ycsiao/nfknzexbccraar99?singleDoc=&view=doc_embed)
它是一种解释性的脚本语言，常用于前端网页开发和服务器端开发。JavaScript 的特点是灵活，允许在运行时动态修改对象的结构和属性，进行隐式转换修改数据类型，适合用于快速原型设计和开发。

`TypeScript`[typeScript 是 js 的超集](https://www.yuque.com/nh0s08/ycsiao/bf2pmua2hv1623o9?singleDoc=&view=doc_embed) 是一种静态类型的编程语言，需要在编译阶段进行类型检查，并将 TypeScript 代码转换为 JavaScript 代码。TypeScript 的目标是增强 JavaScript 的可维护性和可扩展性，特别适用于大型项目和团队开发。

## 优势：

`JavaScript`的优势：

1. 广泛的支持和使用：JavaScript 是 Web 开发的标准语言，在浏览器中直接执行，无需编译。
2. 灵活性：JavaScript 的动态类型使得在开发过程中更加灵活，可以快速迭代和修改代码。
3. 生态系统：JavaScript 有庞大的开发社区和丰富的第三方库和框架，提供了丰富的工具和资源。

`TypeScript`的优势：

1. 静态类型检查：TypeScript 可以在编译阶段捕获错误，提供更好的代码质量和可维护性。类型检查可以在开发过程中发现潜在的问题，并提供更好的开发工具支持，例如代码智能提示和重构功能。
2. 类和模块系统：TypeScript 支持类和模块的概念，使得代码组织和重用更加清晰和易于理解。
3. 渐进式采用：由于 TypeScript 是 JavaScript 的超集，可以逐步将现有的 JavaScript 代码转换为 TypeScript 代码，无需一次性迁移。这使得团队可以渐进地采用 TypeScript，而不需要从头开始重写代码。
4. 强大的工具支持：TypeScript 提供了丰富的开发工具支持，如编辑器插件、调试器、测试框架等，提高了开发效率和代码质量。

## 何时选择：JS 和 TS 的区别

### typeScript

类型安全和错误检测 | 使用一些 JavaScript 校验工具 会增加运行时开销，可以通过 typeScript 编译时验证
学习成本 | 熟悉静态类型语言，或者需要在大型项目中进行团队协作，那么选择 TypeScript 可能更为理想
迁移升级 | TypeScript 还提供了工具和指南，以帮助你将 JavaScript 代码迁移到 TypeScript。

### JavaScript

小项目 | 代码量较少的项目中使用 typeScript 有点校正过头了，选择 JavaScript 可能更合适
生态丰富 | JavaScript 有着广泛的生态系统和丰富的第三方库支持，适用于各种领域和平台

## 总结

javaScript 支持隐式转换，是一种灵活的编程语言，但这是一把双刃剑，常常伴随语法错误、编程不规范等问题
typeScript 的出现，弥补 JavaScript 缺陷，拓展许多功能和特性，更适合开发大型项目，提高维护性，减少 bug。

TypeScript 的优势所在，总结下来有三点：

1. 规避⼤量低级错误，避免时间浪费，省时
2. 减少多⼈协作项⽬的成本，⼤型项⽬友好，省⼒
3. 良好代码提示，不⽤反复⽂件跳转或者翻⽂档，省⼼

# 从 0 到 1 上手 typescript

## 01 安装 typeScript

推荐使用国内镜像

```javascript
npm config set registry https://registry.npmmirror.com
```

命令行安装

```bash
npm install -g typescript  // 全局安装
```

安装完使用 tsc 命令查看版本号

```javascript
tsc - v;
// 输出版本号 Version 5.1.6
```

## 02 配置开发工具

主流开发工具均支持 typeScript 语法，我个人推荐 vs Code，集成丰富插件，语法提示、代码补全等功能。
下载安装：[Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)
**中文语言包 **vsCode 默认下载是英文配置，如需中文，需下载 chines 语言包
![](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/b1fe4709f93b098011ae81fb8fb47fc1.png)

## 03 hi typeScript

来，开始创建你的第一个 ts 文件吧
打开编辑器，将下方代码保存到 `hi.js` 文件中

```javascript
// 用 ： 定义了 persson类型 为string
function sayHello(person: string) {
  return "Hello, " + person;
}

let user = "Tom";
console.log(sayHello(user));
```

编译执行，输入以下命令

```vue
tsc hi.js
```

执行成功，会生成一个同名的 js 文件
![](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/ce14bec0f91739d646ad9775c7bdd3d6.png)
内容如下：

```javascript
function sayHello(person) {
  return "Hello, " + person;
}

var user = "Tom";
console.log(sayHello(user));
```

在 ts 中，已经使用 `:`定义了 `persson`类型 ，为什么编译后的 js 代码，未检查`person`类型呢 ？

因为 `typeScript`只会在编译时对检测类型，如有错误，在编译阶段就会报错。其实`typeScript`在运行阶段和 JavaScript 一样，不会对类型检查。
