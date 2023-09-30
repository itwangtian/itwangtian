---
title: ts函数可选参数-未使用—ESlint 校验
urlname: rua0g9bcb7vgi0oq
date: "2023-07-21 10:20:15"
updated: "2023-07-21 10:21:08"
---

如果你在 TypeScript 函数中使用了可选参数，但是 ESLint 报错了，你可以通过以下方法进行解决：

1. 在函数定义的地方添加一个注释 `// eslint-disable-next-line @typescript-eslint/no-unused-vars` 来忽略该行的错误提示。这会告诉 ESLint 忽略当前行的未使用变量的警告。

```typescript
function myFunction(param1: string, param2?: number) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // 使用了可选参数 `param2`，但是未在代码中使用
  console.log(param1);
}
```

2. 在 ESLint 配置文件中禁用 `@typescript-eslint/no-unused-vars` 规则。在你的项目根目录下的 `.eslintrc.js` 或 `.eslintrc.json` 文件中，找到相关的规则配置并将其禁用。

```json
{
  "rules": {
    "@typescript-eslint/no-unused-vars": "off"
  }
}
```

3. 如果你需要在代码中使用可选参数，但是 ESLint 的规则认为它是未使用的，你可以确保在代码中使用该参数，以避免报错。

```typescript
function myFunction(param1: string, param2?: number) {
  if (param2) {
    console.log(param2); // 使用了可选参数 `param2`
  }
  console.log(param1);
}
```

通过采取上述方法，你可以解决 ESLint 报错的问题，并根据你的实际需求来处理 TypeScript 函数中的可选参数。
