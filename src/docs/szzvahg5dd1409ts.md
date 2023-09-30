---
title: 手写jsx
urlname: szzvahg5dd1409ts
date: "2023-08-03 15:02:35"
updated: "2023-08-26 14:58:06"
---

JSX 本质上是 React.createElement 的语法糖，返回 VDOM。在运行的时候，需要通过 babel 编译

在 react17 之前，jsx 转换都会转换为 React.createElement 调用， 所以我们必须在第一行加上：

```
js
复制代码import React from "react"
```

本质上，react 中的 jsx 会转化为 createElement 或者 jsx 函数调用。
看几个栗子
**1. 单一元素**
jsx:

```
html
复制代码<div data-id='test-id'>
  hello world
</div>
```

结果：
**2. 嵌套标签**
jsx:
结果：

```javascript
React.createElement(
  "div",
  {
    "data-id": "test-id",
  },
  "hello world",
  React.createElement(
    "span",
    {
      className: "span",
    },
    "hello span"
  )
);
```

React17 之后的版本 React 已经不需要引入 createElement ，这种模式来源于 **Automatic Runtime**，看一下是如何编译的。

```javascript
function App() {
  return (
    <div>
      <h1>hello,world</h1>
    </div>
  );
}
```

编译后

```javascript
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function App() {
  return _jsxs("div", {
    children: [
      _jsx("h1", {
        children: "hello,world",
      }),
    ],
  });
}
```
