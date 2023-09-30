---
title: 函数
urlname: mqtfvzzp1agddpff
date: "2023-07-21 10:25:24"
updated: "2023-08-15 21:49:34"
---

在 TypeScript 中，可选参数和默认参数、剩余参数以及函数重载可以帮助我们更灵活地定义和使用函数。

## 1、可选参数和默认参数：

可选参数允许我们在调用函数时省略一些参数，而默认参数为函数的参数提供了默认值。

举个例子，假设我们有一个函数`greet`用于问候，接受一个名称参数和一个可选的消息参数：

```typescript
function greet(name: string, message?: string) {
  if (message) {
    console.log(`Hello, ${name}! ${message}`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}
```

当我们调用这个函数时，可以只传递名称参数，而可选的消息参数可以省略：

```typescript
greet("Alice"); // 输出：Hello, Alice!
```

如果我们想要提供消息参数，可以在调用时传递它：

```typescript
greet("Bob", "How are you?"); // 输出：Hello, Bob! How are you?
```

此时，函数内部会打印带有消息的完整问候语。可选参数和默认参数可以使函数使用更加方便和灵活。

## 2、剩余参数：

剩余参数允许我们在函数中接受不定数量的参数，并将它们作为数组在函数内部使用。

举个例子，我们有一个函数`sum`用于计算一组数字的总和：

```typescript
function sum(...numbers: number[]) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
```

我们可以传递任意数量的参数给函数，并且函数内部会将这些参数相加并返回结果：

```typescript
console.log(sum(1, 2, 3)); // 输出：6
console.log(sum(4, 5, 6, 7, 8)); // 输出：30
```

剩余参数使用三个点（`...`）前缀来表示，它将多个参数收集到一个数组中，方便在函数内部进行处理。这样，我们可以更便捷地传递和处理不定数量的参数。

## 3、重载：

我们在 js 中总是不经意间使用函数重载，根据不同的参数类型或个数来执行不同的逻辑，这就是函数重载。

它在类型检查和类型推断方面提供了更强大的功能。

下面例子，展示了如何使用函数重载来实现一个根据参数的不同选择执行不同逻辑的函数：

```typescript
function formatData(data: string): string;
function formatData(data: number): number;
function formatData(data: string | number): string | number {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data.toFixed(2);
  }
}

const result1 = formatData("hello"); // 返回类型为 string，结果为 "HELLO"
const result2 = formatData(3.14159); // 返回类型为 number，结果为 3.14
```

上述例子中，我们定义了一个名为 formatData 的函数，它接受一个参数 data，可以是字符串或数字类型。通过函数重载，我们提供了两个函数类型定义：第一个重载接受字符串参数并返回字符串，第二个重载接受数字参数并返回数字。在函数体实现中，根据不同的参数类型执行不同的逻辑操作。

通过使用函数重载，我们可以在类型安全的环境中，根据参数类型提供不同的实现，提高代码的可靠性和可读性。这对于需要根据参数进行不同处理的场景非常有用，比如解析不同类型的输入数据、根据参数类型进行计算等等
