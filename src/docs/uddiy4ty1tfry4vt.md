---
title: 语法-类型注解
urlname: uddiy4ty1tfry4vt
date: "2023-07-16 20:03:45"
updated: "2023-09-13 08:39:42"
---

# TypeScript 基础语法

TypeScript 程序由以下几个部分组成：

- 模块
- 函数
- 变量
- 语句和表达式
- 注释

## 第一个 TypeScript 程序

我们可以使用以下 TypeScript 程序来输出 "Hello World" ：

### Runoob.ts 文件代码：

```javascript
const hello: string = "Hello World!";
console.log(hello);
```

以上代码首先通过 **tsc** 命令编译：

```javascript
tsc Runoob.ts
```

得到如下 js 代码：

### Runoob.js 文件代码：

```javascript
varhello = "Hello World!";
console.log(hello);
```

最后我们使用 node 命令来执行该 js 代码。

```javascript
node Runoob.js  // 输出 Hello World
```

整个流程如下图所示：
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/e715952150dc8c53dc56fd2f7bd840b6.png)
我们可以同时编译多个 ts 文件：

```javascript
tsc file1.ts file2.ts file3.ts
```

## TypeScript 与面向对象

面向对象是一种对现实世界理解和抽象的方法。
TypeScript 是一种面向对象的编程语言。
面向对象主要有两个概念：对象和类。

- **对象**：对象是类的一个实例（**对象不是找个女朋友**），有状态和行为。例如，一条狗是一 个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。
- **类**：类是一个模板，它描述一类对象的行为和状态。
- **方法**：方法是类的操作的实现步骤。

下图中 **girl、boy** 为类，而具体的每个人为该类的对象：
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/30657b77a7aeefd32a1a378af76f82af.png)
TypeScript 面向对象编程实例：

```javascript
class Site {
  name(): void {
    console.log("Runoob");
  }
}
var obj = new Site();
obj.name();
```

以上实例定义了一个类 Site，该类有一个方法 name()，该方法在终端上输出字符串 Runoob。
new 关键字创建类的对象，该对象调用方法 name()。
编译后生成的 JavaScript 代码如下：

```javascript
var Site = /** @class */ (function () {
  function Site() {}
  Site.prototype.name = function () {
    console.log("Runoob");
  };
  return Site;
})();
var obj = new Site();
obj.name();
```

执行以上 JavaScript 代码，输出结果如下:
:::info
Runoob
:::

# 基本类型

## 原数据类型

JavaScript 中的数据类型，可分为两类：

1、原始数据类型（Primitive Data Types），指的是不能再细分修改的数据类型，JavaScript 中有 6 种原始数据类型。

2、引用数据类型（Reference Data Types），存储多个值、或复杂对象数据类型，比如 object

咱们介绍 5 种原始数据类型在 typeScript 中的应用

- Boolean 布尔值
- String 文本类型
- Number   数字
- Array   数组
- Null 和 Undefined 空和未定义

在定义类似时，通过 `:` 声明数据类型，如：

定义一个布尔值

```typescript
let a: string = "1";
let b: number = 123;
let c: null = null;
let d: undefined = undefined;
let e: Boolean = false;

console.log(a, b, c, d, e);
```

## 特殊类型

## any (任意值)

允许赋值给任意类型
原则上在 typeScript 中不允许修改数据类型，咱们可以声明变量 any 类型，使数据为任意类型。

```typescript
let e: any = "yyds";
e = 666;
console.log("any|e:", e);
```

## 类型推断

**声明变量、未指定类型，默认是任意类型**

在定义变量时未赋值，会进行类型推断的规则，推断出下一个类型，最终为 any 类型，如：

```typescript
let something;
something = "seven";
something = 7;
console.log(something);
// 打印输出 7
```

## 联合类型

联合类型（union Types） 定义一个变量，可以接收多种类型的值

举个例子，假设你有一个名为 result 的变量，你希望它可以保存数字或者字符串类型的值。你可以这样声明它的类型：

```typescript
let result: number | string;
```

现在，result 变量可以存储数字类型的值，也可以存储字符串类型的值。例如：

```typescript
result = 42; // 保存数字类型的值
result = "Hello"; // 保存字符串类型的值
```

使用联合类型，在类型声明中将这两种类型联合起来，表示该变量可以是其中任意一种类型。这就像是给变量指定了多个备选类型。

参考资料
[https://ts.xcatliu.com/introduction/what-is-typescript.html](https://ts.xcatliu.com/introduction/what-is-typescript.html)
[https://www.modb.pro/db/617658](https://www.modb.pro/db/617658)
[https://www.runoob.com/typescript/ts-basic-syntax.html](https://www.runoob.com/typescript/ts-basic-syntax.html)
