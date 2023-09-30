---
title: react 函数组件中 props应用
urlname: vhino37ev8g0zcvs
date: "2023-07-25 20:29:41"
updated: "2023-07-25 20:30:12"
---

在 React 函数组件中，可以通过 `props` 对象来接收传递给组件的属性（props）。以下是一些常见的 `props`：

1. 自定义属性：
   你可以根据需要在组件上定义任意数量的自定义属性，并在父组件中传递给子组件。子组件可以通过 `props` 对象来访问这些属性。

```jsx
function MyComponent(props) {
  return <div>{props.name}</div>;
}

// 在父组件中使用 MyComponent，并传递 name 属性
<MyComponent name="John" />;
```

2. 子组件：
   在组件的内容中可以包含一个或多个子组件。这些子组件可以通过 `props.children` 属性来访问。

```jsx
function ParentComponent(props) {
  return <div>{props.children}</div>;
}

// 在父组件中使用 ParentComponent，并传递子组件作为其内容
<ParentComponent>
  <ChildComponent1 />
  <ChildComponent2 />
</ParentComponent>;
```

3. 回调函数：
   你可以将函数作为属性传递给子组件，以便子组件在需要时调用该函数。这通常用于实现交互和事件处理。

```jsx
function ParentComponent(props) {
  const handleChildEvent = () => {
    // 处理子组件事件
  };

  return <ChildComponent onClick={handleChildEvent} />;
}

function ChildComponent(props) {
  return <button onClick={props.onClick}>Click</button>;
}
```

这些只是一些基本的示例，实际上你可以根据需要在组件中使用各种不同的属性。在函数组件中，`props` 对象是一个包含传递给组件的属性的 JavaScript 对象。你可以根据具体情况来决定如何在组件中使用这些属性。
