---
title: declare 和 .d.ts
urlname: epc7nta9i3wfbegk
date: "2023-09-15 11:08:27"
updated: "2023-09-15 11:25:36"
---

# declare

> 类型补全

declare 在 TypeScript 中的作用是声明全局变量、函数、类或模块的类型信息，而不需要提供具体实现

应用场景主要包括以下几个方面，解决相应的问题：

1. `与外部 JavaScript 代码交互`：当使用第三方 JavaScript 库时，使用 declare 可以声明该库的类型信息，让 TypeScript 在编写代码时提供类型检查和智能提示，避免类型错误。
2. `引入缺少的类型声明`：当使用没有提供类型声明文件的 JavaScript 库时，通过 declare 手动声明其类型信息，以便享受 TypeScript 的类型检查和编辑器支持。
3. `扩展全局对象的类型`：在 TypeScript 中，可以使用 declare 扩展全局对象的类型，添加或覆盖属性和方法，使其与实际情况匹配。

**下面是几个使用 declare 的代码示例：**

- 声明全局变量和函数：

```tsx
declare const globalVar: number;
declare function globalFunc(arg: string): void;

console.log(globalVar);
globalFunc("Hello");
```

- 声明模块的类型信息：

```tsx
declare module "moduleName" {
  export function someFunc(): void;
  export const someVar: number;
}

import { someFunc, someVar } from "moduleName";
someFunc();
console.log(someVar);
```

- 扩展全局对象类型：

```tsx
declare global {
  interface Array<T> {
    customMethod(): void;
  }
}

const arr: number[] = [1, 2, 3];
arr.customMethod();
```

- 声明类的类型信息：

```tsx
declare class MyClass {
  constructor(arg: string);
  someMethod(): void;
}

const instance = new MyClass("Hello");
instance.someMethod();
```

# .d.ts 文件声明全局变量

在 TypeScript 中，`.d.ts` 文件被用于声明全局变量、函数、类等的类型信息，以补充缺失或不确定的类型定义。这些声明文件不需要被导出，而是被自动地包含在项目的类型检查过程中。

当你在一个模块文件中引入一个类型声明文件（`.d.ts` 文件），TypeScript 会自动识别并应用其中的类型信息。你可以直接在代码中使用声明文件中声明的类型，无需手动导入。

举个例子，假设你有一个名为 `globals.d.ts` 的声明文件，其中声明了一个全局变量：

```typescript
declare const GLOBAL_VARIABLE: string;
```

在其他 TypeScript 文件中，你可以直接使用 `GLOBAL_VARIABLE` 而不需要显式导入它：

```typescript
console.log(GLOBAL_VARIABLE); // 此处的类型推导会识别 GLOBAL_VARIABLE 的类型为 string
```

同样的规则也适用于其他类型的声明，如全局函数、全局类等。

需要注意的是，如果你使用的是第三方库的声明文件，通常你需要使用 `import` 或 `require` 语法导入该库的命名空间或模块，而不是直接使用声明文件中的类型。这是因为第三方库提供的声明文件通常会用命名空间或模块的方式导出类型，而不是全局声明。
:::warning
`.d.ts` 文件中的类型声明在 TypeScript 项目中会被自动包含，你可以直接在代码中使用这些类型，无需手动导出或导入。
:::

## 无法获取`.d.ts` 文件的类型？

如无法自动获取`.d.ts` 文件的类型，建议配置 `tsconfig.json` 文件，在编译打包时会自动将类型声明文件加入到编译，此时不用每次导出类型。

```tsx
{
  "compilerOptions": {
   //
  },
  "files": ["type.d.ts"], //配置编译的文件
  "include": [
    "src"
  ]
}
```
