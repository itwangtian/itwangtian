---
title: 为什么说js是动态类型语言呢？
urlname: nfknzexbccraar99
date: "2023-07-14 23:38:32"
updated: "2023-07-27 23:48:37"
---

JavaScript 被称为动态类型语言，是因为它的类型在运行时决定，并且可以在运行时动态改变变量的类型。以下是一些示例来说明 JavaScript 的动态类型特性：

1. 变量类型的弱化：

```javascript
let x = 10; // x被推断为number类型
x = "Hello"; // 现在x的类型变为string
x = true; // 这里x的类型变为boolean
```

在 JavaScript 中，变量的类型可以根据赋值的值自动推断，并且可以在运行时改变变量的类型。

2. 动态属性：

```javascript
let person = {
  name: "John",
  age: 30,
};

console.log(person.name); // 输出 "John"

person.name = "Jane";
console.log(person.name); // 输出 "Jane"

person.address = "New York";
console.log(person.address); // 输出 "New York"
```

在 JavaScript 中，对象的属性可以在运行时动态地添加或修改。

3. 动态函数参数：

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 输出 5
console.log(add("Hello", "World")); // 输出 "HelloWorld"
console.log(add(2, "Hello")); // 输出 "2Hello"
```

在 JavaScript 中，函数的参数类型并没有在定义时指定，可以接受不同类型的参数并执行不同的操作。

这些示例展示了 JavaScript 的动态类型特性，变量可以根据赋值动态改变类型，对象的属性可以在运行时动态添加或修改，函数的参数可以接受不同类型的值。这种动态性赋予了 JavaScript 更大的灵活性，在某些情况下也增加了一些开发的挑战。

# ts VS js （动态 vs 静态）

`动态类型语言`直接运行时对变量检测，无需声明变量类型
`静态类型语言`需声明变量类型，在编译时对变量类型检测

JavaScript 被称为动态类型语言，因为它在运行时对变量的类型进行推断和处理。这意味着你可以在运行时改变变量的类型，而不需要提前进行类型声明。以下是一些 JavaScript 的动态类型示例：

```javascript
let variable = 10; // 变量可以被赋予一个数字类型的值
console.log(variable); // 输出: 10

variable = "Hello"; // 变量可以被赋予一个字符串类型的值
console.log(variable); // 输出: Hello

variable = true; // 变量可以被赋予一个布尔类型的值
console.log(variable); // 输出: true
```

相比之下，TypeScript 是静态类型语言，它在编译时就会对变量的类型进行检查，并在代码中明确声明变量的类型。这使得在开发阶段可以发现潜在的类型错误。以下是一些 TypeScript 的静态类型示例：

```typescript
let variable: number = 10; // 变量被声明为数字类型
console.log(variable); // 输出: 10

variable = "Hello"; // 错误：不能将字符串类型赋给数字类型的变量

let greeting: string = "Hello";
console.log(greeting); // 输出: Hello

greeting = true; // 错误：不能将布尔类型赋给字符串类型的变量
```

在这些示例中，你可以看到 TypeScript 代码中的变量需要在声明时指定类型，并且在编译过程中会对类型错误进行检查。如果违反了类型规定，TypeScript 编译器会发出错误提示。

这种类型检查能够在开发阶段捕获潜在的错误，帮助提高代码的健壮性和可靠性，减少运行时错误。

# typeScript 强是型语言还是弱类型语言？

类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型。

TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以**它们都是弱类型**。

如下在 typescript 中运行：

```
console.log(1 + '1');
// 打印出字符串 '11'
```

python 是强类型语言，如下分别执行 1+1 、1+"1"，1+1 相同类型计算正常运行，当运行 number 类型 1 + string 1 时，报错。

![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/a51d4bbf95d44deba4763cb44d482606.png)
强制类型转换后 可正常输入
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/72b44e1451bfa3aafe2c8547a683322c.png)
typescript 可以借助自身类型系统， 配合 eslint 的代码检查能力，跟进一步向强类型语言靠近。
