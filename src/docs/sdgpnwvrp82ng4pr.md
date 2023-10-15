---
title: 如何提高redux开发效率？当然是redux-tookit啦！
urlname: sdgpnwvrp82ng4pr
date: "2023-09-19 12:00:35"
updated: "2023-10-07 23:22:07"
---

# 前言

使用 react-redux 的朋友都经历过这种痛苦吧？
定义一个 store 仓库，首先创建各种文件，比如 reducer、action、store...，然后 将 redux 和 react 连接使用。整个流程繁琐，写起来代码冗余。
react-redux 创建仓库，文件目录如下：
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/4a127ef650f2eb82db65a1745bc5b0a1.png)
好怀念使用 vuex 创建写仓库的日子.......
直到有一天我发现了 redux-toolkit ，原来 redux 还能这样写呀！

# 什么是 redux-toolkit

redux-toolkit 是官方推荐的编写 redux 逻辑的方法，简化了 redux 的配置过程，无需再创建 actions、reducer 的，更大程度方便使用 redux 仓库

# 基本使用

redux-toolkit 的使用步骤，可分为如下 5 步

- 1、安装 redex-toolkit
- 2、创建 slices
- 3、创建 store
- 4、将 Redux 连接到 React 应用（provide）
- 5、在 React 组件中使用（useSelector、useDispath）

## 环境配置

vscode
**React Redux Toolkit RTK Quer**
安装 npm

```tsx
npm i redux react-redux @reactjs/toolkit
```

## 创建切片 slices

一个切片是一个包含 reducer 函数和 action creator 的对象。它定义了一部分状态和与该状态相关的操作。

```jsx
// sliceTbale.js

import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  // c初始化状态
  initialState: {
    currentData: [], //
    tableData: [],
  },
  reducers: {
    delete_table: (state, { payload }) => {
      // 通过筛选实现删除
      state.currentTable = state.currentTable.filter((item: { id: any }) => {
        return item.id !== payload.id;
      });
      state.table = state.currentTable;
      message.success("删除成功");
    },
  },
});

export const { addMovie } = moviesSlice.actions; // 导出 action creator
export default moviesSlice.reducer; // 导出 reducer
```

## 创建仓库-store

我们使用 configureStore 函数来创建 Redux Store，并使用刚刚创建的 reducer 将切片与 Store 关联起来。

```typescript
// 创建store仓库
import { configureStore } from "@reduxjs/toolkit";
import initTable from "./module/table";

const reduxStore = configureStore({
  reducer: {
    // xxx: xxx,
    table: initTable,
  },
});

export default reduxStore;
```

## redux 链接 react

完成以上步骤，redux 配置 ok 啦，如何让整个项目中应用 redux 呢？
使用`Provider`包裹 React 顶层组件，将 Redux store 对象传递给组件树中的所有组件，使得 Redux 的状态管理能够在整个应用程序中生效。
打开项目的入口文件 index.tsx，代码如下：

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterConfig from "./router/routerConfig";
import RouterView from "./router/routerView";
import "nprogress/nprogress.css"; // 样式
import { Provider } from "react-redux";
import reduxStore from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <RouterView config={RouterConfig}></RouterView>
    </Provider>
  </React.StrictMode>
);
```

## 组件中使用 redux

使用状态和操作：在组件中，可以使用 useSelector 和 useDispatch 钩子来访问状态和触发 action。

```tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IndexProps {}

const Index: React.FC<IndexProps> = (props) => {
  //  获取redux仓库数据
  const tableState = useSelector((state: any) => state.table);
  // 创建redux 派发器
  const Dispath = useDispatch();
  console.log("table仓库数据", tableState);
  return <>{tableState.currentData.length}</>;
};

export default Index;
```

# 进阶使用

**redux 中如何执行异步呢？**
`createAsyncThunk` 创建异步操作, 通常用于发出异步请求。
`createAsyncThunk` 创建一个异步 action，方法触发的时候会有三种状态：

- pending（进行中）
- fulfilled（成功）
- rejected（失败）

```typescript
export const getMovieData: any = createAsyncThunk(
  "sliceTable/getMovie",
  async () => {
    const res = await getMovieListApi();
    return res;
  }
);
```

# 完整示例

```typescript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieListApi } from "../../API/home";
import { message } from "antd";
// // createAsyncThunk 创建异步操作, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const getMovieData: any = createAsyncThunk(
  "sliceTable/getMovie",
  async () => {
    const res = await getMovieListApi();
    return res;
  }
);

const sliceName = createSlice({
  name: "sliceTable",
  initialState: {
    table: [],
    currentTable: [],
  },
  reducers: {
    initTable: (state, { payload }) => {
      // console.log('初始化sliceTable数据')
    },
    delete_table: (state, { payload }) => {
      // 通过筛选实现删除
      state.currentTable = state.currentTable.filter((item: { id: any }) => {
        return item.id !== payload.id;
      });
      state.table = state.currentTable;
      message.success("删除成功");
    },
    serach_table: (state, { payload }) => {
      // 通过筛选实现删除
      console.log("payload", payload);
      state.currentTable = state.table.filter((item: { name: string }) => {
        return item.name.includes(payload);
      });
    },
  },
  // 让 slice 处理在别处定义的 actions， // 包括由 createAsyncThunk 或其他slice生成的actions
  extraReducers: (builder) =>
    builder
      .addCase(getMovieData.pending, (state, { payload }) => {
        // state.loading = true
        console.log("异步请求 中");
      })
      .addCase(getMovieData.fulfilled, (state, { payload }) => {
        // state.loading = false
        console.log("拿到异步数据");
        state.table = payload.data.data.list;
        state.currentTable = payload.data.data.list;
      })
      .addCase(getMovieData.rejected, (state, { payload }) => {
        // state.loading = false
        // state.error = payload
        console.log("异步操作错误");
      }),
});

export const { initTable, delete_table, serach_table } = sliceName.actions;
export default sliceName.reducer;
```

extraReducers
// extraReducers 字段让 slice 处理在别处定义的 actions， // 包括由 createAsyncg 或其他 slice 生成的 actions。

## 使用 connect 函数将 store 内的数据映射到组件 props 内

![](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/82abda9caaeaef45fae71e75afa81499.png)

```tsx
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNamesAction } from "./store/features/names";
export class Profile extends PureComponent {
  addNames(nameValue) {
    // console.log(nameValue)
    this.props.addNamesHandler(nameValue);
  }
  render() {
    const { names } = this.props;
    return (
      <div>
        <h2>Profile names: {names}</h2>
        <button onClick={(e) => this.addNames(", lzumiShinichi")}>
          addNames
        </button>
        <button onClick={(e) => this.addNames(", 大吉")}>addNames</button>
        <button onClick={(e) => this.addNames(", OkabeRintaro")}>
          addNames
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    names: state.names.names,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addNamesHandler(namesValue) {
    dispatch(addNamesAction(namesValue));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
```

参考
[https://www.cnblogs.com/chccee/p/17145403.html](https://www.cnblogs.com/chccee/p/17145403.html)
[https://juejin.cn/post/7101688098781659172?searchId=20230919111823C8EB8D22FECCCE8115FC#heading-9](https://juejin.cn/post/7101688098781659172?searchId=20230919111823C8EB8D22FECCCE8115FC#heading-9)
[https://juejin.cn/post/7105000617596157983?searchId=20230919111823C8EB8D22FECCCE8115FC#heading-21](https://juejin.cn/post/7105000617596157983?searchId=20230919111823C8EB8D22FECCCE8115FC#heading-21)
