---
title: react 基础操作-语法、特性 、路由配置
urlname: oqz4cvgu5cqxztwx
date: "2023-07-26 09:26:42"
updated: "2023-10-01 21:39:50"
---

# 数据更新不渲染页面？react 函数组件避坑

> react 函数组件中定义变量 i = 0，页面模板上使用 i 变量，在按钮点击事件函数中修改 i++，但是页面上没有渲染，怎么回事？

在 React 函数组件中，组件的渲染是由状态（state）和属性（props）的变化触发的，而直接在函数组件中定义的变量并不会引起组件的重新渲染。

如果你想在组件中更新并重新渲染页面上的内容，你应该使用 React 的状态管理。你可以使用 `useState` 钩子来声明一个状态变量，并使用状态变量的更新函数来更新它。当状态变量的值发生改变时，组件将会重新渲染并展示最新的值。

以下是一个示例，展示如何在 React 函数组件中更新并渲染一个计数器：

```jsx
import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

在上面的示例中，我们使用 `useState` 钩子来声明了一个名为 `count` 的状态变量，并将其初始值设置为 0。当点击按钮时，`handleClick` 函数会通过调用 `setCount` 函数来更新 `count` 的值，从而触发组件的重新渲染。最后，我们在 JSX 中展示了计数器的值，每次点击按钮时计数器会自动增加并重新渲染。

通过使用状态管理，在函数组件中更新值并触发重新渲染，可以实现页面内容的动态更新。这是 React 中推荐的做法，而直接修改函数组件外部定义的变量并不能引起组件的重新渲染。

# react 中 阻止事件传播

在 React 中，可以使用 `event.stopPropagation()` 方法来阻止事件的默认传播。这个方法会阻止事件进一步冒泡到父元素或其他监听同一事件的子元素上。

以下是一个示例，展示如何在 React 组件中阻止事件默认传播：

```jsx
function MyComponent() {
  const handleClick = (event) => {
    event.stopPropagation();
    console.log("Button clicked!");
  };

  return (
    <div onClick={() => console.log("Div clicked!")}>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

在上面的示例中，当点击 `<button>` 元素时，`handleClick` 函数会被调用，而且由于在函数中调用了 `event.stopPropagation()`，所以事件不会进一步冒泡到外部的 `<div>` 元素。同时，父元素 `<div>` 上的点击事件处理函数也会被触发。

需要注意的是，在 React 中，`event.stopPropagation()` 方法并不会阻止事件在组件内部的其他事件处理函数中继续执行，只会阻止事件冒泡到父元素上。如果你想要完全阻止事件的默认行为和冒泡，可以使用 `event.preventDefault()` 方法，它会取消事件的默认行为并停止事件在整个 DOM 树中的传播。

```jsx
function MyComponent() {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Button clicked!");
  };

  return (
    <div onClick={() => console.log("Div clicked!")}>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

在这个示例中，不仅阻止了事件的默认行为，还阻止了事件冒泡，确保了事件不会触发父元素上的点击事件处理函数。

# react hoost 常用函数

以下是几个值得关注的常见 Hook 函数，它们能够在函数组件中实现不同的功能。我将为每个函数提供示例代码和详细说明，以便更好地理解它们的使用。

1. useState - 用于在函数组件中管理状态。

```jsx
import React, { useState } from "react";

function Counter() {
  // 声明一个名为 count 的状态变量，初始值为 0
  const [count, setCount] = useState(0);

  // 增加 count 的值
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

useState 函数接受一个初始状态值，并返回一个包含当前状态和更新状态的函数的数组。在上面的示例中，我们使用 useState 创建了一个名为 count 的状态变量，并使用 setCount 函数来更新它。点击 "Increment" 按钮时，count 的值会增加。

2. useEffect - 用于在组件加载后执行副作用操作。

```jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 模拟数据获取操作
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <div>Data: {data}</div>;
}
```

useEffect 函数接受两个参数：一个副作用函数和一个依赖数组。副作用函数在组件加载后执行，并且可以执行异步操作、数据获取等。上面的示例中，我们使用 useEffect 来获取数据，并将数据保存在状态变量 data 中。空的依赖数组 [] 表示副作用函数只执行一次。

3. useContext - 用于在函数组件中访问 React 的上下文（Context）。

```jsx
import React, { useContext } from "react";

// 创建一个上下文
const ThemeContext = React.createContext("light");

function ThemeButton() {
  // 使用 useContext 来访问上下文的值
  const theme = useContext(ThemeContext);

  return <button style={{ background: theme }}>Button with Theme</button>;
}
```

useContext 函数接受一个上下文对象，并返回当前上下文的值。在上面的示例中，我们创建了一个名为 ThemeContext 的上下文，并为它指定了默认值 "light"。然后，在 ThemeButton 组件中，使用 useContext 来获取 ThemeContext 的当前值，并将其应用于按钮的样式。

这些是 React Hook 的一些常用函数示例，包括 useState、useEffect 和 useContext。它们可以用于在函数组件中管理状态、执行副作用操作和访问上下文。当然，还有其他很多有用的 Hook 函数，可以根据具体需求选择使用。

请注意，示例代码仅供参考，具体的用法可能需要根据你的项目和需求进行调整。如果你有任何进一步的问题，请随时提问！

# reactRouer6 新特性

在 React Router v6 中，一些常用的组件包括：

1. `<BrowserRouter>`：用于提供基于浏览器的导航功能。
2. `<Link>`：用于生成导航链接，导航到指定的路由。
3. `<Route>`：用于定义路由和相应的组件。
4. `<Routes>`：用于定义路由配置的容器，包含多个 `<Route>`。
5. `<Outlet>`： 用于在父级路由组件中渲染子级路由组件。
6. `Navigate`：用于执行编程式导航操作。
7. `Match`：用于条件渲染组件，根据当前路由匹配结果来确定是否渲染。
8. `UseMatch`：用于在组件中访问路由匹配信息。

这里只是列举了一些常用的组件，React Router v6 还提供了其他的功能和辅助组件。具体使用哪些组件，取决于你的需求和项目的路由配置。

需要注意的是，React Router v6 的 API 和用法与之前的版本（如 v5）有很大的变化。

可以在官方文档中找到有关 React Router v6 的更多信息：[https://reactrouter.com/docs/en/v6/getting-started/introduction](https://reactrouter.com/docs/en/v6/getting-started/introduction)
