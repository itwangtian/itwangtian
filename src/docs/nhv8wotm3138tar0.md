---
title: 终于搞懂虚拟Dom啦！
urlname: nhv8wotm3138tar0
date: "2023-08-03 16:02:50"
updated: "2023-09-09 17:14:10"
---

以一种对象结构的方式描述页面。通过比对虚拟 dom 的数据结构差异，来更新实际 dom，避免了传统 dom 中的重绘问题。

# 1. 原生 DOM 所带来的问题

使用原生 DOM 进行操作时，每次更新界面都需要重新计算整个 DOM 树的结构和样式，然后进行重新渲染，这样的操作会带来性能上的开销。

举一个例子，假设我们需要向一个列表中添加 1000 个列表项。如果使用原生 DOM 进行操作，每次添加列表项都需直接对实际 DOM 进行插入操作，这样做会导致页面渲染变慢，用户体验下降。

# 2. 虚拟 DOM 是什么

虚拟 DOM 是一个轻量级的 JavaScript 对象，它是对真实 DOM 的一种抽象表示。React 通过使用虚拟 DOM 来跟踪和记录对真实 DOM 的修改，然后批量高效地更新真实 DOM。

## 虚拟 dom vs 真实 dom

### 结构对比

原生 js 中的 doucment.createEelment 和 react.reacteElement 创建元素，打印出来看下数据结构

```javascript
const VDOM = React.createElement("div", {}, "小杜杜");
const DOM = document.createElement("div");
DOM.innerHTML = "真帅呀";
console.log(`虚拟DOM：`, VDOM);
console.log(`真实DOM：`, DOM);
```

### 流程对比

在传统的 Web 应用中，数据的变化会实时地更新到用户界面中，于是每次数据微小的变化都会引起 DOM 的渲染。

而虚拟 DOM 的目：是将所有的操作聚集到一块，计算出所有的变化后，统一更新一次虚拟 DOM

举一个例子，假设我们需要向一个列表中添加 1000 个列表项。如果使用原生 DOM 进行操作，渲染 1000 次，而使用虚拟 dom 只需要要渲染一次。

## react 中组件名为什么大写？

用于区分 react 组件和原生标签，在 react 中渲染组件是使用 bebal 来解析 jsx 内容，大写命名组件，是告诉 jsx 将组件渲染真实 dom

# 3. 虚拟 DOM 大致工作流程

- React 首次渲染时，会构建整个组件树的虚拟 DOM。
- 当状态发生变化时，React 会生成新的虚拟 DOM 树。
- React 会将新旧虚拟 DOM 树进行对比，找出需要更新的部分。
- 根据对比结果，React 会生成一系列 DOM 操作指令。
- React 将这些指令应用到真实 DOM 上，实现页面的局部更新。

# 4. 虚拟 DOM 是如何解决问题的

虚拟 DOM 通过在 JavaScript 中使用轻量级的虚拟对象来代替真实 DOM，实现了对真实 DOM 的抽象。通过比较新旧虚拟 DOM 树的差异，React 能够准确计算出需要更新的部分，并只对这些部分进行 DOM 操作，避免了不必要的 DOM 操作开销，提高了性能。

# 5. 虚拟 DOM 真的能带来更好的性能吗？

是的，虚拟 DOM 能够带来更好的性能。通过对比新旧虚拟 DOM 树，React 可以最小化 DOM 的操作次数，只对需要更新的部分进行操作，从而减少了浏览器重绘的次数，提升了性能效率。

# 6. 虚拟 DOM 的价值到底是什么

虚拟 DOM 的价值主要体现在两个方面：

- 提高性能: 通过最小化 DOM 操作的次数，优化了页面的渲染性能，提升了用户体验。
- 更方便的开发: 使用虚拟 DOM 可以将关注点从底层的 DOM 操作转移到组件开发上，使得开发者更关注组件的构建和交互逻辑，从而提高开发效率。

# 7. 虚拟 DOM 用在哪里

虚拟 DOM 主要被应用于 React 框架中，用于构建用户界面。React 使用虚拟 DOM 作为中间层，负责管理组件的状态变化，并高效地更新页面的显示。

# 8. 简单实现虚拟 DOM 案例

这是一个简单的虚拟 DOM 案例，用于展示虚拟 DOM 的基本原理，仅供参考：

```javascript
// 定义虚拟DOM元素的构造函数
function VNode(tagName, props, children) {
  this.tagName = tagName;
  this.props = props;
  this.children = children;
}

// 渲染虚拟DOM
function render(element) {
  if (typeof element === "string") {
    // 如果是字符串类型，直接返回文本节点
    return document.createTextNode(element);
  }

  // 创建对应的真实DOM
  const dom = document.createElement(element.tagName);

  // 设置props中的属性
  for (let propName in element.props) {
    dom.setAttribute(propName, element.props[propName]);
  }

  // 递归渲染子节点
  element.children.forEach((child) => {
    dom.appendChild(render(child));
  });

  return dom;
}

// 创建虚拟DOM
const element = new VNode("div", { id: "app" }, [
  new VNode("h1", null, ["Hello, World!"]),
  new VNode("p", null, ["This is a virtual DOM example."]),
]);

// 渲染虚拟DOM到真实DOM节点
const app = document.getElementById("app");
app.appendChild(render(element));
```

这是一个简单的虚拟 DOM 案例，通过构造虚拟 DOM 元素，并使用`render`函数将虚拟 DOM 渲染为真实 DOM，从而实现了页面的展示。当需要更新页面时，只需要更新虚拟 DOM，然后重新调用`render`函数即可。
