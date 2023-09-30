---
title: type 别名
urlname: hd4ini1ztt013yxo
date: "2023-08-14 21:00:41"
updated: "2023-09-13 10:21:24"
---

在 TypeScript 中，`type` 关键字用于创建类型别名（Type Aliases）。类型别名允许你为一个具体的类型或类型组合定义一个名称，以便在代码中重复使用。

`type` 的作用有以下几个方面：

1.  **类型复用：** 通过类型别名，你可以将一个复杂的类型定义为一个名称，然后在需要使用该类型的地方直接使用该名称。这有助于提高代码的可读性和可维护性。

```typescript
type User = {
  name: string;
  age: number;
};

type Callback = (data: User) => void;

function fetchData(callback: Callback) {
  // ...
}
```

在上面的例子中，通过类型别名 `User` 和 `Callback` 分别定义了一个用户对象类型和一个回调函数类型，然后在 `fetchData` 函数中使用了这两个类型别名。

2.  **类型组合：** 类型别名还可以用于组合现有的类型来创建新的类型。这可以通过交叉类型（Intersection Types）和联合类型（Union Types）来实现。

```typescript
type Point = {
  x: number;
  y: number;
};

type Color = "red" | "green" | "blue";

type ColoredPoint = Point & { color: Color };

type Shape = Square | Circle;

interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}
```

在上述代码中，`ColoredPoint` 类型通过交叉类型将 `Point` 类型和包含 `color` 属性的对象类型组合而成，`Shape` 类型通过联合类型将 `Square` 和 `Circle` 接口组合而成。

3.  **类型推导（Type Inference）：** 当你使用类型别名初始化变量时，TypeScript 可以推导变量的类型，并将其视为该类型别名所代表的类型。

```typescript
type Point = {
  x: number;
  y: number;
};

const origin: Point = { x: 0, y: 0 };
```

在上面的例子中，通过类型别名 `Point` 定义了一个坐标点类型，然后通过赋值给 `origin` 变量，TypeScript 推导出 `origin` 的类型为 `Point`。

类型别名的使用使得 TypeScript 中的类型定义更加灵活和可维护。通过使用类型别名，你可以更好地组织和管理代码中的复杂类型，提高代码的可读性和可维护性。

此外，类型别名还可以与其他 TypeScript 的高级类型特性（如泛型、条件类型等）结合使用，进一步增强类型系统的能力。

## type vs interface

## 表示类型

`类型别名（type）`是一个定义别名的工具，可以将多个类型组合起来形成一个新类型。比如特定的对象结构，联合类型、函数类型等、**可以表示非对象类型**

可以应用于以下数据类型：

- 基本类型（如字符串、数字、布尔值等）
- 联合类型（Union Types）
- 交叉类型（Intersection Types）
- 元组（Tuple）
- 函数类型（Function Types）
- 对象类型（Object Types）
- 类型字面量（Type Literals）
- 类型别名的自身引用（Recursive Type Aliases）

`接口（interface）`主要用于定义对象的形状和结构，**只能表示对象类型**

- 对象类型（Object Types）
- 类类型（Class Types）

## 继承状态

1. type 不可继承
2. interface 可以继承 class 、interface、type
