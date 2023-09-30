---
title: react hooks 全攻略
urlname: slaatvufmrio04vo
date: "2023-07-24 08:44:10"
updated: "2023-09-27 19:54:08"
---

# 一、什么是 hooks？

React Hooks 是 React 提供的一种功能，允许我们在函数组件中使用状态和其他 React 特性。使用 Hooks 可以简化函数组件中的状态管理和副作用处理。

## 为什么要使用 Hooks 呢？

因为在 React 之前，只能使用类组件来拥有状态和处理副作用。这导致在函数组件中复用状态逻辑变得困难，同时处理副作用也变得复杂，如数据获取和事件处理等。

React Hooks 的目的是解决这些问题。它提供了一种简洁的方式来在函数组件中定义和复用状态逻辑，以及处理副作用。通过使用 Hooks，我们可以更自由地编写组件，而不需要使用类组件的繁琐结构。

## Hooks 的实现原理

Hooks 的实现原理是基于 JavaScript 的闭包和函数作用域。每个 Hook 函数都会在组件中创建一个特殊的“挂钩”，用于保存特定的状态值和处理函数。这些挂钩与组件实例相关联，并在组件的多次渲染之间保持一致性。

## 举个栗子

下面是一个使用 React Hooks 的示例，展示了如何创建一个计数器组件：

```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

在这个示例中, 我们使用了 `useState` Hook 来在函数组件中添加状态。通过调用 `useState`，我们可以获取当前的状态值 `count` 和更新状态值的函数 `setCount`。在按钮的点击事件中，我们调用 `setCount` 来更新计数器的值，并触发重新渲染。

# 二、react 常用 hooks

## useState

`useState` 这个 Hook 用于在函数组件中管理状态，示例如上。

## useEffec

useEffect 弥补函数组件没有生命周期的缺陷，用来处理一些副作用，比如获取数据、订阅事件、更新 DOM 等。
常见的副作用

- 订阅数据：订阅某个数据源，当数据变化时更新组件 state。
- 手动更改 DOM: 通过访问 DOM 节点或使用第三方 DOM 库来改变 DOM 结构。
- 日志记录：在控制台打印日志信息。
- 计时器：通过设置 Interval 或 Timeout 来执行定时操作。
- 事件监听：为 DOM 节点添加或移除事件监听器。

1. useEffect 第一个参数是一个回调函数，组件渲染后执行的操作。比如发送网络请求，然后将数据保存在组件的状态中，以便渲染到页面上。
2. useEffect 的第二个参数是一个依赖数组，指定影响 useEffect 执行的变量。当这些变量的值发生变化时，useEffect 会重新执行回调函数。

示例代码如下：

```jsx
import { useEffect } from "react";

useEffect((list:any)=>{
  // 渲染组件后执行的操作
  // xxx
  retrun ()=>{
    // 组件销毁前执行的回调函数
  }
},[list])

```

> 如果没有依赖数组，useEffect 会在每次组件渲染完成后都执行

:::warning
注意！useEffect 中第一个参数、是一个回调函数，一般有两种用途 ：

1. `retrun` 之前的代码执行一些组件渲染后的操作
2. `retrun` 一个函数，是一个清理作用的回调函数，在组件销毁前执行、用于关闭定时器、请求。
   :::

下面是几个常见的用法：

### 获取数据并更新状态：

假设有一个函数组件，在组件渲染后执行一些额外的任务。可能是发送网络请求，从服务器获取数据。那么，可以使用 useEffect 来实现这个功能。

```jsx
import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 在组件渲染后获取数据
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};
```

### 订阅和取消订阅事件：

```jsx
import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    const handleClick = (event) => {
      console.log("Button clicked");
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <button>Click me</button>
    </div>
  );
};
```

在这个示例中，当组件渲染后，`useEffect` 中的回调函数将订阅 `click` 事件，并在事件发生时打印一条消息。在组件卸载时，`useEffect` 的返回函数会取消订阅事件，以防止内存泄漏。

### 这里还有一些小技巧：

- 如果 `useEffect` 的依赖项中的值没有改变，但你仍然希望执行回调函数，可以将依赖项设置为一个空数组。这样，回调函数只会在组件挂载后执行一次。
- 如果你想在 `useEffect` 的回调函数中使用异步函数，可以将该函数声明为 `async` 并使用 `await` 关键字来处理异步操作。例如：

```jsx
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  };

  fetchData();
}, []);
```

### 执行两次的 useEffect

在 react18 新特性中 useEffect 会执行两次，起原因模拟组件挂载和销毁的状态，帮助开发者提前发现重复挂载造成的 bug。
**如何关闭？**
删除根页面中的`StrictMode` 严格模式

```tsx
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
```

## useRef

useRef 是 React Hooks 中的一个创建持久引用的 hook，它提供了一种在函数组件中存储和访问 DOM 元素或其他引用的方法。

### 为什么使用 useRef

在 JavaScript 中，我们可以创建变量并将其赋给不同的值。然而，在函数组件中，每次重新渲染时，所有的局部变量都会被重置。这就意味着我们无法在函数组件中创建一个持久存在的变量。

这时候就可以使用 useRef 来解决这个问题。useRef 可以用于在函数组件中存储和访问可变的数据，这些数据不会触发组件重新渲染。

### useRef 实现原理

`useRef` 的实现原理其实很简单。在每次函数组件执行时，它返回一个持久化的引用对象。这个对象有一个 `current` 属性，可以用来存储和读取值。当我们修改这个 `current` 属性的值时，组件的重新渲染不会受到影响。

### useRef 的主要用途

1. `访问 DOM 元素`：通过使用 useRef 创建一个引用，可以将其附加到 JSX 元素的 ref 属性上，从而获取对该 DOM 元素的引用。这使得我们能够直接操作 DOM，例如修改元素的样式、调用 DOM API 等。值得注意的是，useRef 返回的引用对象在组件的整个生命周期中保持不变，即使重新渲染时也不会变化。
2. `存储组件内部的值`：可以使用 useRef 来存储某些组件内的值，类似于类组件中的实例变量。与状态 Hook（如 useState）不同，使用 useRef 存储的值的更改不会触发组件的重新渲染。因此，这种方法适用于需要在多次渲染之间共享数据的场景，或者需要存储一些在渲染期间保持稳定的状态。
3. `缓存计算结果`：通过结合 useRef 和 useEffect Hook，可以实现对计算结果的缓存。将计算结果存储在 useRef 返回的引用中，然后在后续渲染中使用该引用。这可以避免重复的计算，提高性能。

### 举个栗子

下面是一个文字选中示例，使用了 `useRef`，展示了如何在函数组件中使用它：

```jsx
import React, { useRef } from "react";

const TextInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default TextInput;
```

在这个示例中，我们使用 `useRef` 创建了一个引用 `inputRef`。我们将这个引用赋给 `<input>` 元素的 `ref` 属性，以便可以在其他地方访问到这个 DOM 元素。

在 `focusInput` 函数中，我们使用 `inputRef.current` 来获取引用的当前值（即 DOM 元素），并调用它的 `focus` 方法，使输入框获得焦点。

### 注意！

:::warning

### useRef 虽好，请勿滥用

`ref` 和 `useRef`都是 React 提供的用于引用 DOM 元素或其他值的机制。它们的滥用可能会导致性能问题和代码可读性
:::

## useMemo

当函数组件中状态变化时，会重新自上而下渲染当前组件、以及子组件。如何隔离状态，避免不必要的渲染 ？

推荐使用 `useMemo` 钩子函数，它的作用是缓存计算结果，在依赖项发生变化时才重新计算。

`useMemo` 接受两个参数：一个计算函数和一个依赖数组。计算函数会在组件渲染时执行，并返回一个计算结果。这个计算结果会被缓存起来，直到依赖项发生变化。

下面是一个示例，展示了如何使用 `useMemo`：

```jsx
import React, { useMemo } from "react";

const MyComponent = ({ a, b }) => {
  const result = useMemo(() => {
    console.log("Recalculating result");
    return a + b;
  }, [a, b]);

  return (
    <div>
      <p>Result: {result}</p>
    </div>
  );
};

// 示例二

const MyBtn = ({ text, size }: { text: string, size: any }) => {
  return useMemo(() => {
    return <Button size={size}>{text + "--" + new Date().getTime()}</Button>;
  }, [text, size]);
};
```

在这个示例 1 中，我们使用 `useMemo` 来缓存 `a + b` 的计算结果。当 `a` 或 `b` 发生变化时，`useMemo` 会重新计算结果；否则，它将直接返回上一次缓存的结果。

当依赖项发生变化时，`useMemo` 会重新计算计算函数，并更新缓存的结果。否则，它会直接返回之前缓存的结果，避免不必要的重复计算。

示例 2：只有当 MyBtn 的 props 发生改变时，才会触发组件内部渲染，如果不使用 useMemo，则父组件中状态改变后，子组件重新渲染你导致 时间戳每次不同 。

请注意，`useMemo` 只有在需要进行计算操作并根据依赖项变化时才有必要使用。如果没有计算操作，或者根据依赖项变化时仅进行简单的引用比较，那么使用 `React.memo` 或其他适当的优化手段可能更合适。

## useCallback

useCallback 作用是缓存回调函数，通过使用 useCallback，我们可以确保在依赖项不发生变化时，不会重新创建同一个函数，从而避免不必要的子组件重渲染或副作用函数的触发，提高性能。

使用场景：

1. `传递回调函数给子组件`：当我们将一个函数作为 prop 传递给子组件，并且该函数的依赖项在父组件重新渲染时可能发生变化时，可以使用 useCallback 缓存该函数，以确保子组件只在依赖项变化时才重渲染。
2. `优化副作用函数的执行`：在使用 useEffect 或 useLayoutEffect 的副作用函数中，当依赖项发生变化时，函数会被重新执行。通过使用 useCallback，可以缓存副作用函数，避免在依赖项未变化时触发不必要的副作用。这在性能敏感的场景中尤其有用。

> 注意！useCallBack 的本质工作不是在依赖不变的情况下阻止函数创建，而是在依赖不变的情况下不返回新的函数地址而返回旧的函数地址。不论是否使用 useCallBack 都无法阻止组件 render 时函数的重新创建！！

### 示例

useCallBack 在什么情况下使用？在往子组件传入了一个函数。

```javascript
import React, { useState, useCallback } from "react";
// 子组件
const ChildComponent = ({ increment }) => {
  // 子组件使用 increment 回调函数
  return <button onClick={increment}>Increment</button>;
};

// 父组件
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={increment} />
    </div>
  );
};
```

### usecallback 和 react.mome 区别

useCallback 和 useMemo 都用于优化性能，避免不必要的重复计算和渲染。

`useCallback返 回一个稳定的回调函数`

- 依赖数据未改变时、再次运行函数，其实是执行上次函数的数据据引用。
- 在依赖项发生变化时才会重新创建该函数。它对于传递给子组件的回调函数非常有用，确保子组件在父组件重新渲染时不会重新渲染。

`useMemo 用于缓存计算结果`

- 并且只有当依赖项发生变化时才会重新计算。它对于根据一些依赖项计算出的值进行缓存非常有用。它可以避免在每次重新渲染时重复计算相同的值，从而提高性能。

### 注意！防止缓存浪费

:::warning
处处使用缓存，比如不使用呢
:::

# 三、实战-自定义 hooks

## useRouteGuard：路由守卫

如下代码，是一个路由拦截器，包含权限校验、token 检测功能

```javascript
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
// 白名单
const filterPath = ["/", "/home"];
// 路由守卫好比一个门神守卫网站，当页面路由路径发生变化时，门神启动进行拦截，身份确认成功后放行，失败返回初始页
// 通过 useLocaltion 获取页面的位置信息，返回一个对象，包含页面路径、参数、hash值等
export const useWatchRoute = () => {
  const localtion = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("localtion", localtion);
    // 检测本地token
    const token = localStorage.getItem("token");
    // 指定页面不进行token检测[白名单]
    const hasPermission = filterPath.some(
      (path) => path === localtion.pathname
    );

    if (!token && !hasPermission) {
      // router编程式导航-跳转页面
      navigate("/login");
    }
    // useEffect 第二个参数是依赖数组，当数组中依赖项发生变化时，useEffect会重新执行
  }, [localtion.pathname]);

  return null;
};
```

以上示例，使用 useLocaltion 获取当前页路由数据，使用 useEffect 钩子来创建一个监听器，以在路由变化时执行我们的路由守卫逻辑。

使用这个自定义的路由守卫 hooks 时，你可以像下面这样在需要应用路由守卫的组件中使用它：

```tsx
import React from "react";
import useRouteGuard from "./useRouteGuard";

function ProtectedRouteComponent() {
  useWatchRoute();

  return <div>{/* 组件内容 */}</div>;
}
export default ProtectedRouteComponent;
```

## useUpdate ：重新渲染

创建一个自定义 hooks ，结合函数组件特性，当子组件状态更新后，父组件重新渲染实现强制渲染效果

```jsx
export const useUpdate = () => {
  const [, setUpdate] = useState({});
  return useCallback(() => {
    setUpdate({});
  }, []);
};
const update = useUpdate();
return (
  <div>
    <p>时间{Date.now()}</p>
    <button onClick={update}> 更新时间</button>
  </div>
);
```

## useMount：监听渲染

监听组件渲染，模拟类组件中的`componentDidMount`组件挂载的生命周期
:::warning
实现创建、销毁自定义 hooks，本质是结合`useEffect`回调函数特性：

- `retrun` 之前的代码执行一些组件渲染后的操作
- `retrun` 之后的函数是一个清理回调函数，在组件销毁前执行、用于关闭定时器、请求
  :::

```jsx
export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};
```

## useUnmount：监听销毁

监听组件销毁，模拟类组件中的`componentWillUnmount`组件销毁的生命周期

```jsx
// 自定义hooks ，定义组件挂载前的函数、销毁后的函数
export const useUnmount = (fn: () => void) => {
  // const ref = useRef(fn)
  // ref.current = fn;
  useEffect(() => {
    // retrun 之前的代码执行一些组件渲染后的操作
    // retrun是在组件销毁前 执行一个清理回调函数、用于关闭定时器、请求
    return () => {
      fn();
    };
  }, []);
};
```

## useMount 与 useUmount 案例

引入自定义 hooks

```jsx
import { useMount, useUnmount, useUpdate } from "./components/tool";
```

定义一个`Child`组件

```jsx
const Child = () => {
  useMount(() => {
    console.log("组件挂载了");
    Toast.show("首次渲染");
  });
  useUnmount(() => {
    console.log("组件销毁了");
    Toast.show("组件卸载了");
  });
  return <div>应用自定义hooks的组件 </div>;
};
```

定义开关，切换`Child`组件显隐

```jsx
const [flag, setFlag] = useState < boolean > true;
const btnClick = () => {
  setFlag(!flag);
};
return (
  <div className="App">
    <button onClick={btnClick}></button>
    {flag && <Child></Child>}
  </div>
);
```

# 四、常见问题

## useEffect 内部不能修改 state：

在 useEffect 的回调函数中，不要直接修改状态。修改状态可能导致无限循环的重新渲染。正确的做法是使用 setState 或提取相关的状态变量，然后在 useEffect 的依赖项数组中引用。

```typescript
useEffect(() => {
  // 错误示例：直接修改状态
  // setCount(count + 1);

  // 正确示例：使用setState或提取相关变量
  setCount((prevCount) => prevCount + 1);
  // 或者
  const newCount = count + 1;
  // 使用newCount进行其他操作
}, [count]); // 注意在依赖项数组中引用状态
```

## useEffect 可能出现死循环：

当 useEffect 的依赖项数组不为空时，如果依赖项的值在每次重新渲染时都发生变化，useEffect 的回调函数会在每次重新渲染后触发。如果回调函数内部又引发了状态的变化，可能导致无限循环的渲染。
解决这个问题的方法是仔细选择依赖项，确保只在需要的时候才触发 useEffect 的回调函数。如果确实需要在每次重新渲染时执行副作用，但又想避免循环，可以考虑使用 useRef 来记录上一次的值。

```typescript
const prevCountRef = useRef();
useEffect(() => {
  prevCountRef.current = count;
  // 执行其他副作用操作
});
```

## hooks 中禁用循环

循环、添加判断、嵌套函数中禁用 hooks

### 官方解释：

> 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层以及任何 return 之前调用 Hooks

### 为什么呢？

这是因为 Hooks 应该在组件的顶层使用，以确保它们的调用顺序始终保持一致。

### 错误示例

下面是一个示例，展示了在循环中错误使用 Hook 的情况：

```typescript
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect triggered");
    return () => {
      console.log("Effect cleanup");
    };
  }, [count]);

  const handleClick = () => {
    for (let i = 0; i < 3; i++) {
      setCount(count + 1); // 错误的调用 Hook，可能导致多次注册
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
}
```

在上面的代码中，handleClick 函数在循环中调用 setCount，这样会导致 useEffect 钩子被多次注册。这可能会导致在状态更新后多次触发副作用函数和清理函数，或者导致一些其他的问题。

### 解决

为了解决这个问题，应该在循环中避免直接调用 Hook。可以使用其他方式来实现预期的逻辑，并在循环外部调用 Hook。例如，可以使用计数变量来累积需要更新的数值，然后在循环结束后再次调用 Hook 来更新状态。以下是修复后的示例：

```typescript
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect triggered");
    return () => {
      console.log("Effect cleanup");
    };
  }, [count]);

  const handleClick = () => {
    let updatedCount = count;
    for (let i = 0; i < 3; i++) {
      updatedCount += 1;
    }
    setCount(updatedCount);
  };

  return (
    <div>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
}
```

通过将状态更新的逻辑放在循环外部，我们确保了 setCount 只会被调用一次，避免了 Hooks 的误用问题。

### 如何更好的规避呢？

可以配置 `eslint`进行语法校验，规避 hooks 中写循环语句，示例配置

```json
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error"
  }
}
```
