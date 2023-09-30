---
title: 枚举
urlname: ozukh6zecsqvagsm
date: "2023-07-21 10:25:16"
updated: "2023-08-01 15:39:17"
---

## 1. 简介

在 TypeScript 中，枚举（Enum）是一种定义常量的方式，可以用简洁、可读性强的方式，定义一组命固定集合的值（常量）。

在 JavaScript 中，在没有枚举语言特性的情况下，常常使用以下方法来表示一组常量：

1.  使用命名的变量或常量。

```javascript
const RED = "red";
const GREEN = "green";
const BLUE = "blue";
```

这种方式可能容易出错，因为限制了变量的作用域，而且可能会有命名冲突或拼写错误等问题。

2.  使用简单的对象字面量。

```javascript
const Colors = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
};
```

使用对象字面量可以提供一些命名空间的支持，但并不能限制变量值的修改，这意味着你仍然可以通过赋值操作改变枚举值。

这就是 TypeScript 中枚举的作用所在：它提供了一种更强大、更安全的方式来定义一组有限的常量。

枚举在 TypeScript 中的优势和解决了 JavaScript 中的一些痛点包括：

1.  类型安全性：枚举在 TypeScript 中是具有类型的，编译器可以在编译时进行类型检查，确保只使用枚举中定义的值。
2.  命名空间和作用域：枚举在一定程度上提供了命名空间的支持，可以更好地组织和管理常量集合，并且不会发生命名冲突。
3.  可读性：通过使用枚举，可以直观地了解代码中某个值的含义，提高了代码的可读性和可维护性。
4.  自文档化：枚举可以作为文档的一部分，提供了一个可供其他开发人员查阅的可扩展的集合。

总之，TypeScript 中的枚举提供了一种更加结构化和类型安全的方式，来表示固定集合的值，并解决了 JavaScript 中使用常量时的一些问题。

## 2. 基本用法

枚举的基本用法是定义一个枚举类型，然后使用它来声明变量或函数参数。下面是一个基本的示例：

```typescript
// 定义一个表示颜色的枚举
enum Color {
  Red,
  Green,
  Blue,
}

// 使用枚举类型声明变量
let myColor: Color = Color.Green;
console.log(myColor); // 输出: 1
```

在这个例子中，我们定义了一个枚举类型 `Color`，它包含了三个成员：`Red`、`Green` 和 `Blue`。

默认情况下，枚举成员的值从 `0` 开始自动递增，所以 `Red` 的值是 `0`，`Green` 的值是 `1`，`Blue` 的值是 `2`。

我们可以使用枚举类型来声明变量 `myColor`，并将它的值设置为 `Color.Green`。最后，我们打印了 `myColor` 的值，结果是 `1`。

## 3. 常数项和计算所得项

在枚举中，成员可以是常数项或计算所得项。

常数项是声明枚举时就已经指定好的值，这些值不能被修改。如果没有给常数项赋值，它们将按照从 `0` 开始的顺序递增。

计算所得项是根据表达式在运行时计算出的值，可以用于根据之前定义的常数项进行计算。计算所得项必须在表达式中使用，不能直接赋值给其他成员。

以下是一个示例，演示了常数项和计算所得项的用法：

```typescript
enum Direction {
  Up, // 常数项，默认值为 0
  Down, // 常数项，默认值为 1
  Left = 10, // 常数项指定具体值为 10
  Right = Left + 1, // 计算所得项，值为 11（Left 的值加 1）
}

console.log(Direction.Up); // 输出: 0
console.log(Direction.Left); // 输出: 10
console.log(Direction.Right); // 输出: 11
```

这个例子中，`Direction` 枚举包含了四个成员。

`Up` 和 `Down` 是常数项，默认情况下它们的值分别是 `0` 和 `1`。`Left` 是一个常数项，我们明确地将它的值设置为 `10`。`Right` 是一个计算所得项，它的值是 `Left + 1`，即 `10 + 1`，结果是 `11`。

## 4. 常数枚举

常数枚举是一种特殊类型的枚举，在编译时会被删除，并且对枚举成员的引用会被替换为具体的值。常数枚举可以在一些性能优化和减少代码量的情况下使用。

下面是一个示例，展示了常数枚举的用法：

```typescript
const enum Size {
  Small,
  Medium,
  Large,
}

function printSize(size: Size): void {
  console.log(size);
}

printSize(Size.Small); // 编译后会直接替换为具体的值
```

在这个例子中，我们使用 `const enum` 关键字定义了一个常数枚举 `Size`，它包含三个成员。

`printSize` 函数接受一个参数 `size`，类型为 `Size` 枚举。在函数体内，我们打印了 `size` 的值。由于 `Size` 是一个常数枚举，在编译时会被直接替换为具体的值。

所以，当我们调用 `printSize(Size.Small)` 时，编译后的代码将直接打印 `0`。

## 5. 实战开发案例

让我们以一个实战开发案例来综合应用学到的 TypeScript 枚举知识。

假设你正在开发一个游戏，游戏中有不同种类的怪物，每个怪物都有不同的属性。我们可以使用枚举来表示不同种类的怪物以及它们的属性。

以下是一个示例代码：

```typescript
enum MonsterType {
  Goblin,
  Orc,
  Troll,
}

interface Monster {
  type: MonsterType;
  name: string;
  health: number;
  attack: number;
}

function createMonster(monsterType: MonsterType, name: string): Monster {
  let monster: Monster;

  switch (monsterType) {
    case MonsterType.Goblin:
      monster = { type: monsterType, name, health: 10, attack: 5 };
      break;
    case MonsterType.Orc:
      monster = { type: monsterType, name, health: 20, attack: 10 };
      break;
    case MonsterType.Troll:
      monster = { type: monsterType, name, health: 30, attack: 15 };
      break;
    default:
      throw new Error("未知的怪物类型");
  }

  return monster;
}

const goblin = createMonster(MonsterType.Goblin, "格鲁皮");
console.log(goblin);
```

在这个案例中，我们定义了一个枚举类型 `MonsterType` 来表示不同种类的怪物。
