---
title: 学习react-redux，看这篇文章就够啦！
urlname: gg9lt52dzff45ecl
date: "2023-07-24 08:44:41"
updated: "2023-09-19 19:59:34"
---

# redux 三大原则

- 单一数据流
- reducer 纯函数
- state 是只读的

# 环境安装

```jsx
npm i redux react-redux   @types/redux-thunk  @types/redux-logger
```

> 依次安装 redux、集成 react 的 redux、因 redux 中的禁止使用异步和打印，需要安装插件支持

# redux 项目目录

```jsx
- src
  - actions               // 存放定义 action 的文件
    - actionTypes.js      // 存放 action 类型常量的文件
    - userActions.js      // 存放用户相关的 action 创建函数的文件
    - cartActions.js      // 存放购物车相关的 action 创建函数的文件
    - ...
  - reducers              // 存放定义 reducer 的文件
    - index.js            // 根 reducer，使用 combineReducers 合并多个 reducer
    - userReducer.js      // 用户相关的 reducer
    - cartReducer.js      // 购物车相关的 reducer
    - ...
  - store                 // 存放 Redux store 相关的文件
    - index.js            // 创建 Redux store 的文件
  - components            // 存放 React 组件的文件夹
    - UserComponent.js    // 用户相关的组件
    - CartComponent.js    // 购物车相关的组件
    - ...
  - containers            // 存放包装组件（连接 Redux）的容器组件
    - UserContainer.js    // 用户相关的容器组件
    - CartContainer.js    // 购物车相关的容器组件
    - ...
  - App.js                // 主应用组件
  - index.js              // 应用入口文件

```

# reducer 函数

在 Redux 中，reducer 函数是用来处理状态（state）的函数。它接收两个参数：当前的状态（state）和被分发的 action，然后根据 action 的类型来更新状态并返回新的状态对象。

## reducer 编写规则

1. 只根据 state 和 action 参数计算新的状态值
2. 不允许修改现有的 state 值，必须通过复制现有的值
3. 不能做任何异步的操作逻辑、以及副作用【可以通过插件接触此问题】
   TIP**“ 副作用 ”\*\*** 副作用是在从函数返回值之外可以看到的状态或行为的任何变化\*\*。一些常见的副作用是:

- 将值记录到控制台
- 保存文件
- 设置异步计时器
- 发出 AJAX HTTP 请求
- 修改存在于函数之外的某些状态，或改变函数的参数
- 生成随机数或唯一随机 ID（例如 Math.random() 或 Date.now()）

**reducer 永远不允许改变原始/当前状态值！**

```
// ❌ 非法 - 默认情况下，这会改变状态！
state.value = 123
```

```jsx
let initialState = {
  userName: "赵四",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SOME_ACTION_TYPE":
      // 在这里处理 action，并返回新的状态对象
      return newState;
    case "ANOTHER_ACTION_TYPE":
      // 处理另一个 action
      return newState;
    default:
      // 默认情况下，返回当前状态，不做任何改变
      return state;
  }
}
```

1. 一个 Redux 应用中可以有多个 reducer 函数。每个 reducer 函数负责管理和更新应用中的一部分状态。
2. Redux 通过 `combineReducers` 函数来合并多个 reducer 函数，创建一个根 reducer，然后将根 reducer 传递给 `createStore` 方法。
3. 根 reducer 会根据 action 的类型将对应的子状态分发给不同的 reducer 进行处理。

# 设计 actions

**Actions** 是具有 type 字段的普通 JavaScript 对象，来描述操作行为。

例如，在一个电商系统中，当用户点击购买按钮时，我们可以创建一个名为 "PURCHASE" 的 action 来描述这个操作。
一个 action 对象通常包含一个 type 字段来描述 action 的类型，以及可选的 payload 字段来携带额外的数据，type 字段是一个字符串，用于识别 action 的类型，而 payload 字段则可以是任何类型的数据，包括对象、数组、字符串等，用于携带一些与该操作相关的数据。

下面是一个示例的 action 对象：

```jsx
{
  type: 'PURCHASE',
  payload: {
    id: 1,
    text: 'Learn Redux',
    completed: false
  }
}

```

可借助 `dispatch`派发 redux 中的操作，来修改 store 数据。如下，定义一个派发 dispath 的函数，通常是返回 actions 对象

```jsx
export const get_table = () => {
  return async (dispatch: Dispatch) => {
    let { data } = await instance.get("/api/table");
    console.log("触发-get_Table接口了");
    return dispatch({
      type: "get_table",
      payload: data,
    });
  };
};
```

注意！包含 actions 对象的函数，不可是异步函数。但可以借助 thunk 中间件的能力，在 action 函数内部执行异步操作。
如下，需 根 reducer 函数中 开启中间件`applyMiddleware`，使用 异步插件 thunk

```jsx
import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger"; // 打印日志插件
import thunk from "redux-thunk"; // 执行异步操作插件
import table from "./module/table/index"; // 子仓库
import user from "./module/user/index"; // 子仓库

export default createStore(
  combineReducers({ table, user }), // 合并仓库
  applyMiddleware(thunk, logger) // applyMiddleware 使用中间件
);
```

# 使用 redux 仓库

`Provider`组件的作用就是将 Redux 的 store 注入到 React 应用中，并使应用的所有组件都能够访问 Redux 的状态。
使用 Provider 组件的方式如下：

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store"; // 导入 Redux 的 store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

使用 provider 优势是简化了 redux 的集成，不需要在组件内部手动引入状态。

在 React 组件内部获取 Redux 的 store 有几种常见的方式：

1. 使用`react-redux`库中的`useSelector` Hook：

```typescript
import { useSelector } from 'react-redux';

const MyComponent = () => {
  const counter = useSelector((state) => state.counter); // 获取counter状态

  // 在组件中使用 counter 值

  return (
    // JSX
  );
};
```

2. 使用`react-redux`库中的`connect`函数：

```typescript
import { connect } from 'react-redux';

const MyComponent = ({ counter }) => {
  // 在组件中使用 counter 值

  return (
    // JSX
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter, // 将 counter 状态映射为组件的 props
});

export default connect(mapStateToProps)(MyComponent);
```

3. 在函数组件外部使用`useStore` Hook：

```typescript
import { useStore } from 'react-redux';

const MyComponent = () => {
  const store = useStore();
  const counter = store.getState().counter; // 获取 counter 状态

  // 在组件中使用 counter 值

  return (
    // JSX
  );
};
```

第一种和第二种方式是使用`react-redux`提供的库函数来连接组件和 store，提供了更方便的 API。
第三种方式是直接使用 Redux 提供的 Hook`useStore`，更为底层，可以在函数组件外部使用，适用于一些特殊情况。

# 拆分 reducers -store

如何将一个复杂的业务仓库，按功能模块拆分为多个小仓库方便管理维护 ?

例如，一个应用可能有多个状态需要管理，比如用户信息、购物车、主题等等。可以为每个状态编写一个单独的 reducer 函数，并使用 `combineReducers` 将它们合并成一个根 reducer。

> 使用 `combineReducers` 将子仓库合并到跟 reducer 中

```jsx
import { combineReducers, createStore } from "redux";

import userReducer from "./userReducer"; // 用户信息的 reducer
import cartReducer from "./cartReducer"; // 购物车的 reducer
import themeReducer from "./themeReducer"; // 主题的 reducer

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
```

在上面的示例中，`combineReducers` 函数将 `userReducer`、`cartReducer` 和 `themeReducer` 合并成一个根 reducer。每个 reducer 函数都负责管理对应的状态片段，并根据相应的 action 类型来更新状态。通过这种方式，一个 Redux 应用可以同时管理多个相关联的状态。

# react-redux

React Redux 是 Redux 官方提供的一个库，专门用于在 React 应用中集成和操作 Redux 的状态

## 组件划分

react-redux 把组件划分两类，如下：

### 一、ui 组件

UI 组件有以下几个特征。

- 只负责 UI 的呈现，不带有任何业务逻辑
- 没有状态（即不使用 this.state 这个变量）
- 所有数据都由参数（this.props）提供
- 不使用任何 Redux 的 API

下面就是一个 UI 组件的例子。

```javascript
const Title = (value) => <h1>{value}</h1>;
```

因为不含有状态，UI 组件又称为"纯组件"，即它纯函数一样，纯粹由参数决定它的值。

### 二、容器组件

容器组件的特征恰恰相反。

- 负责管理数据和业务逻辑，不负责 UI 的呈现
- 带有内部状态
- 使用 Redux 的 API

总之，只要记住一句话就可以了：UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑

> React-Redux 规定，所有的 UI 组件都由用户提供，容器组件则是由 React-Redux 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它 - 阮一峰

## `connect` 函数

`connect`是 react-redux 提供的方法，作用将 UI 组件转为 容器组件。`connect`接收两个参数 ，分别是`mapStateProps`和 `mapDispatch`

1. 参数 1 `mapStateProps` 负责输入逻辑将 `state`仓库内容、映射到 UI 组件的参数 `props`
2. 参数 2`mapDispatch` 负责输出逻辑，将用户的操作映射成 `action`

#### 参数 `mapStateProps`

1、`mapStateProps` 是一个函数。建立外部映射关系，将外部`store`和组件中的`props`进行关联。
`mapStateProps` 函数返回一个对象，数据结构中的键值对，就是一个映射关系，如：

```typescript
const mapStateToProps = (state) => {
  return {
    todos: state.user, // 仓库中的用户数据
  };
};
```

上面代码中 `mapStateProps`函数接收 state 为参数，返回对象中的 todos 属性 、代表 UI 组件的同名参数。在组件内部，我们通过映射关系的 `props`，可以获取到 state 中的数据。

`mapStateProps` 会订阅 Store ，每当 store 更新时，会重新计算 UI 组件参数，重新渲染组件。

> 如不想更新 UI 组件，可以省略 connect 方法中的`mapStateProps`参数

#### 参数 `mapDispatch`

`mapDispatch` 是`connect`的第二个参数，用于建立 UI 组件参数和`store.dispatch`方法的映射。`mapDispatch` 可以是一个对象，也可以是一个函数。

`mapDispatch` 作为函数，内置两个参数 ，分别是`dispatch`和 `onwProps`（容器组件中的 props）

```typescript
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: ownProps.filter,
      });
    },
  };
};
```

上述代码中 `apDispatch` 作为函数 ，返回一个对象，对象中的键值对定义了如何发出 Action。
在组件内部，直接访问 onclick 方法，即可触发 reducer 内操作（更新、修改数据等）

`mapDispatch` 作为对象，它的每个键名对应的 UI 组件的同名参数，值应该是一个函数。如下：

```javascript
const mapDispatch: any = {
  // 属性get-table ,为组件的同名参数
  get_table: (flter: any) => ({
    type: "get_table", // type 字段为actions 类型
    flter: flter, // filter 为提交参数
  }),
};
```

#### `mapDispatch` 高阶用法

`bindActionCreators` 是 Redux 提供的一个辅助函数，来简化 `dispatch`派发动作过程，避免手动编写派发动作的代码。

下面是使用 `bindActionCreators` 的示例和代码讲解：

```javascript
import { bindActionCreators } from "redux";
import { addTodo, completeTodo } from "./actions";

// 创建动作创建函数的对象
const actionCreators = {
  addTodo,
  completeTodo,
};

// 获取 Redux store
// 假设你已经创建了 store 并引入了所需的动作创建函数

// 将动作创建函数与派发函数绑定
const dispatch = store.dispatch;
const boundActionCreators = bindActionCreators(actionCreators, dispatch);

// 在组件中使用绑定后的动作创建函数
// 这些函数会自动派发对应的动作到 Redux store

// 示例 1：组件中调用绑定后的动作创建函数
boundActionCreators.addTodo("Buy groceries");

// 示例 2：将绑定后的动作创建函数传递给组件的 props
// 在组件内部可以直接调用这些函数来派发动作
<MyComponent
  addTodo={boundActionCreators.addTodo}
  completeTodo={boundActionCreators.completeTodo}
/>;
```

在示例代码中，首先创建了一个包含了多个动作创建函数的 `actionCreators` 对象。然后使用 `bindActionCreators` 将 `actionCreators` 中的所有动作创建函数与 Redux store 的派发函数 `dispatch` 绑定，生成了一个新的对象 `boundActionCreators`。

通过调用 `boundActionCreators` 的函数，可以在组件中自动派发对应的动作到 Redux store，而无需手动编写派发动作的代码。

## hooks 函数

react-redux 库提供了多个钩子（hooks）函数，用于 react 组件访问 redux 的状态和操作。下面是常用的 hooks 函数以及用法

### `useSelector`

`useSelector`：用于选择 Redux store 中感兴趣的状态。它接受一个选择器函数作为参数，并返回选择器函数返回的值。

> 使用该钩子可以避免在组件中订阅整个状态树，提供了更好的性能。

示例用法：

```jsx
import { useSelector } from 'react-redux';

const MyComponent = () => {
  const counter = useSelector(state => state.counter);
  // 在这里使用 counter

  return (
    // 组件的 JSX
  );
};
```

### `useDispatch`

`useDispatch`：用于获取 Redux store 中的 dispatch 函数。`dispatch` 用于派发操作（dispatch actions）改变 Redux 中的状态。

示例用法：

```jsx
import { useDispatch } from "react-redux";

const MyComponent = () => {
  const dispatch = useDispatch();
  // 在这里使用 dispatch

  const handleClick = () => {
    dispatch({ type: "INCREMENT" });
  };

  return <button onClick={handleClick}>Increment</button>;
};
```

### `useStore`

`useStore`：用于获取 Redux store 对象。通过这个钩子可以直接访问 Redux store 的内部方法和数据。

示例用法：

```jsx
import { useStore } from 'react-redux';

const MyComponent = () => {
  const store = useStore();
  const state = store.getState();
  // 在这里使用 store 和 state

  return (
    // 组件的 JSX
  );
};
```

### `useActions`

`useActions`：用于绑定动作创建函数（action creators），以便在组件中使用。它接受一个包含动作创建函数的对象作为参数，并返回已绑定到 Redux store 的动作创建函数。

示例用法：

```jsx
import { useActions } from 'react-redux';
import { increment, decrement } from './actions';

const MyComponent = () => {
  const { incrementAction, decrementAction } = useActions({ increment, decrement });
  // 在这里使用 incrementAction 和 decrementAction

  return (
    // 组件的 JSX
  );
};
```

## 搭配 react hooks

### useEffect

`useEffect`：React 自带的钩子函数，用于在组件渲染完成后执行副作用操作。在 React Redux 中，如果你想在组件挂载后执行异步操作或订阅状态变化，可以使用该钩子函数。

示例用法：

```jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // 在这里使用 data

  return (
    // 组件的 JSX
  );
};
```

### useMemo

`useMemo`：React 自带的钩子函数，用于在组件渲染过程中进行记忆化计算，以提高性能。在 React Redux 中，可以使用该钩子函数对选择器函数进行记忆化，以避免不必要的重复计算。

示例用法：

```jsx
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const selectData = state => state.data;

const memoizedSelector = createSelector(
  selectData,
  data => data.filter(item => item.completed)
);

const MyComponent = () => {
  const filteredData = useSelector(memoizedSelector);
  // 在这里使用 filteredData

  return (
    // 组件的 JSX
  );
};
```

# 总结

对比是一种非常棒的学习编程方法，用已知的经验代入到新的知识上，帮助我们加深理解，促进内化。
下面用 vuex 和 redux 进行对比，会发现两者除了在语法上不同，但在功能、设计、理念、用法上如此一致，

## 功能

无论 redux 还是 vuex，本质作用都是一个状态管理的工具，用于共享数据的仓库。
**区别：**
1、 redux 可以适用于任何 JavaScript 框架中，无论 react 还是 angluar 或者 vue，当然 vue 有自己的仓库工具 vuex。
2、vuex 只适用于 vue 框架之中

## 设计上

1、redux

1. redux 中不可以直接修改原始 state 数据，需要拷贝原数据进行修改
2. 不可执行异步操作，但可以通过中间件处理异步操作

2、vuex

1. vuex 不能直接修改 store 数据，需要通过提交 mutaions 来修改。
2. 提供了 actions 来处理异步函数，Actions 类似于 mutations，但可以包含异步代码

## **使用步骤：**

vuex 和 react 在语法上各有不同，但在步骤都可以统一为 3 步：
1、创建仓库；2、获取仓库；3、修改仓库、
在具体实现上如下：
Redux：使用 Redux 的步骤包括定义 action 类型、创建 action 创建函数、编写 reducer 处理器，以及创建和配置 store。
Vuex：在使用 Vuex 时，需要定义 state，然后编写 mutations 来修改 state，接着可以定义 actions 来处理异步操作，最后创建一个 Vuex 的实例并配置它。

## 优缺点：

### redux

Redux 的优点：

- 可预测性：通过 action 和 reducer 明确描述数据变化。
- 可追溯性：记录所有的 action，便于调试和错误处理。
- 可测试性：纯函数 reducer 和 action 创建函数易于测试。

Redux 的缺点：

- 学习曲线较陡：相对于简单的状态管理需求，使用 Redux 可能有些繁琐。
- 需要编写大量的模板代码。
- 需要使用第三方中间件来处理异步操作。

### vuex

Vuex 的优点：

- 与 Vue.js 集成：作为 Vue.js 的官方状态管理库，与 Vue.js 的集成非常方便。
- 简单易用：相对于 Redux，使用 Vuex 更加简单和直观。
- 适合中小型项目：对于中小型单页面应用，Vuex 提供了足够的功能，而且使用起来更加轻量。

Vuex 的缺点：

- 对于小型项目可能过于繁琐。
- 在大型项目中，过度使用 Vuex 可能导致较为复杂的代码结构。
  > 参考链接：
  > [https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html](https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)
  > [https://cn.redux.js.org/](https://cn.redux.js.org/)
