---
title: immer：优雅操作react数据状态，告别繁琐克隆拷贝
urlname: dv8t85khggaglosv
date: "2023-08-23 05:19:55"
updated: "2023-08-23 22:39:51"
---

文章首发公众号 👉[程序员王天](https://img-cdn.dslcv.com/wt_gzh.png)👈 欢迎关注

# 前言

Immer 是一个用于简化 JavaScript 状态管理的库，以更方便地更新和操作不可变数据

可以解决以下问题：

1.  `不可变状态更新`：React 推崇使用不可变（Immutable）的数据来管理组件的状态。
    :::tips
    【Immutable 不可变对象】
    不直接修改状态或属性对象，而是创建新的对象来代表改变后的状态。
    :::

Immer 使得在 React 中使用不可变数据更加容易，通过提供简洁的 API 和直观的语法，以可变的方式更新不可变数据。

2.  `状态更新的简洁性`：React 的传统方式是通过使用 `setState` 方法更新状态，需要手动创建新的状态对象或数组，并进行深度克隆。而使用 Immer，可以通过直接在原始状态上进行修改，以一种可变的方式更新状态。

React 中使用 Immer ，可以避免手动编写深度克隆、合并对象或数组的代码，同时还能保持数据的不可变性，方便进行状态管理和追踪变更。

# react 组件使用 immer

以下是一个使用 Immer 的 React 组件示例：

```jsx
import React from "react";
import { produce } from "immer";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState(
      produce((draft) => {
        draft.count += 1;
      })
    );
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

在上面的示例中，我们使用 `produce` 函数将状态更新的逻辑放在一个回调函数中，然后将回调函数传递给 `setState`。Immer 会在回调函数中提供一个名为 `draft` 的草稿对象，

我们可以直接对该对象进行更改，而不用担心原始对象被修改。Immer 会根据我们的更改生成一个新的不可变对象，并将其作为新的状态进行更新。

# redux 中使用 immer

接下来，让我们看一个使用 Immer 结合 Redux 的示例：

```javascript
import { createStore } from "redux";
import produce from "immer";

// 初始状态
const initialState = {
  count: 0,
};

// reducer
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "INCREMENT":
        draft.count += 1;
        break;
      case "DECREMENT":
        draft.count -= 1;
        break;
      default:
        break;
    }
  });
};

// 创建 store
const store = createStore(reducer);

export default store;
```

在上面的示例中，我们在 Redux 的 reducer 中使用 `produce` 函数来更改状态。它接收当前状态 `state` 和表示要进行的更改操作的回调函数。我们可以在回调函数中对 `draft` 对象进行更改，Immer 会自动处理状态的更新。

# 总结

在使用 React 组件时，可以使用 `produce` 函数来更新状态，而在使用 Redux 时，可以在 reducer 中使用 `produce` 函数来进行状态更改操作。这样可以避免手动编写不必要的克隆和合并代码，并且使我们的代码更容易理解和维护。
