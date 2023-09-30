---
title: 功能模块+复杂度提薪点
urlname: kxlfse72fgcggs7a
date: "2023-08-09 15:52:46"
updated: "2023-09-28 20:42:36"
---

![](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/df9008003782e876d51cfd199c1a4a06.jpeg)

# 第一次记录

## webpack4 和 webpack5 的区别

webpack5 内置了很多 plugin 插件，比如、打包、压缩、缓存

### 代码压缩

webpack5 对模块的合并、作用域提升

#### 模块联邦

无需本地下载依赖，让代码直接 cdn 共享，直接构建项目

### 打包缓存优化

webpack4 需要使用 cache-loader 打包结果来优化之后的打包性能
webpack5 默认就开启了打包缓存（[官方文档](https://webpack.docschina.org/configuration/cache/)），无需再安装 cache-loader

### 服务启动

### 文件处理模块

- webpack4 中打包文件，需要安装 url-load、file-load
- webpack5 内置 asset 模块，打包文件无需配置

### 自定义 plugin

Webpack 插件就像是你的助手，可以按照要求在构建过程中执行各种任务，例如处理文件、优化资源等。

#### 原理

webpack 宛如一条生成线，需经过一系列流程后将源文件输出结果，每个流程都是单一的，依次执行流程，多个流程之间有依赖关系，plugin 是插入生成线中的功能，在指定时机对生成线的文件做处理。

#### Webpack 是一座大厦，插件是大厦里的工人。

用一个简单的比喻来解释插件的工作原理：

1. **大厦的构建过程：** 大厦的建造需要经历多个阶段，从打地基、搭建框架到最终竣工。Webpack 也有类似的构建过程，包括解析模块、编译代码、生成输出文件等。
2. **大厦里的工人（插件）：** 插件就像大厦里的工人，他们拥有各种技能和工具，可以在不同的施工阶段做出贡献，完成各种任务。
3. **工人与施工阶段的关联：** 每个工人在施工过程中有自己的职责和任务，依靠他们的技能来完成不同的工作。类似地，Webpack 插件也与构建过程中的不同阶段相对应，每个插件在特定的时机执行自己的任务。
4. **工人的任务与插件的工作逻辑：** 工人们根据施工计划在特定的时间点完成自己的任务，例如安装管道、涂刷墙壁等。Webpack 插件也有类似的逻辑，它们在特定的构建阶段（如文件解析、代码编译、资源生成）执行自己的功能，例如处理文件、优化代码等。
5. **工人与整个大厦的关系：** 每个工人负责自己的任务，并相互协作来建造整个大厦。Webpack 插件也与整个构建过程相互协作，通过与其他插件和 Webpack 的集成，共同完成项目的构建工作。

#### 归纳为以下几个步骤：

1. **安装和配置插件：** 首先，你需要通过 npm 或 yarn 安装所需的插件，并将它们添加到 webpack.config.js 配置文件中的 plugins 数组中。
2. **初始化插件实例：** 在配置文件中，你需要创建插件的实例对象，并传递任何必要的选项或参数。这将创建插件的一个实例，以便在构建过程中使用。
3. **定义插件的钩子函数：** 插件会定义一些特定的钩子函数，用于在构建过程的不同阶段执行任务。Webpack 提供了一系列的钩子函数，如 beforeRun、compilation、optimize、emit 等。你需要根据需求选择合适的钩子函数，并在插件实例上实现这些钩子函数。
4. **编写插件逻辑：** 在钩子函数中，你可以编写插件的逻辑来实现所需的功能。这可以是文件处理、资源优化、代码生成、依赖分析等任何自定义任务。你可以访问构建过程中的各个对象，如编译器（compiler）和编译（compilation），以获取有关构建状态和资源的信息。
5. **与构建过程交互：** 插件可以通过调用特定的钩子函数，与构建过程的不同阶段进行交互。例如，在 beforeRun 钩子函数中，可以执行一些准备工作；在 compilation 钩子函数中，可以分析编译过程中的模块和依赖；在 emit 钩子函数中，可以进行代码生成和资源输出等操作。
6. **处理构建结果：** 插件可以根据自己的需求，修改或添加构建结果。例如，可以向输出的文件中插入特定的代码块，对生成的资源进行优化，生成额外的构建报告等。

### webpack 执行流程

![](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/ffdca714247c941fbe09a2c12c0ab564.jpeg)

## redux 中间件是如何实现的？

### 什么是 redux 中间件？

redux 中 reducer 函数有所限制，比如无法运行异步、日志打印，使用中间件可以兼容此限制。

## redux 为什么是单向数据流

### 使用单向数据流的原因：

![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/0742c76e511e148594d32ffb7608273d.png)

1.  可预测性：单向数据流使应用的状态变化可预测。数据只能通过派发 actions 来修改，reducers 对状态进行处理，确保变化是可控的。
2.  可维护性：单向数据流简化了状态管理的逻辑。通过明确的数据流路径，更容易理解和调试应用的状态变化。
3.  可追溯性：单向数据流使状态的变化可追溯，每个状态变化都可以通过 actions 和 reducers 进行跟踪和记录。

### 实现单向数据流的方式：

1.  定义一个唯一的状态树：Redux 使用一个单一的 JavaScript 对象来存储应用的整个状态，这个对象被称为状态树或状态存储。
2.  组件派发 actions：组件通过派发 actions 来表示对状态的意图。actions 是一个包含 `type` 字段和可选的 `payload` 字段的普通 JavaScript 对象。
3.  reducers 处理状态变化：reducers 定义了如何根据当前的状态和 actions 来计算新的状态。reducers 是纯函数，接收旧状态和 action，返回一个新的状态对象。
4.  订阅状态变化：应用中的部分组件可以订阅状态的变化，以便在状态发生变化时重新渲染并响应变化的结果。

通过这种方式，Redux 实现了单向数据流。组件通过派发 actions 触发状态变化，reducers 处理状态变化并返回新的状态，订阅了状态变化的组件会接收到新的状态并进行相应的更新。**这种单向数据流的方式确保了状态的可控性、可预测性和可追溯性，提高了应用的可维护性和可测试性。**

## reactRouter 实现页面按钮权限

咱们先看效果，切换用户登录后，操作权限除了左侧菜单，还有页面按钮。
![按钮权限演示效果.gif](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/1938e736e560aeba31c4a86a544d4f59.gif)
实现思路
按钮控制本质是条件判断，满足条件显示按钮，否则禁用/消失
重点是页面权限的数据获取，这需要和后端沟通好—从权限获取-校验的流程。
:::info
思路：
按钮权限的显示，通过简单的条件判断就能实现。
通常情况下，我们为用户添加权限时，除了页面，还会细化到按钮级别，比如、新增、删除、查看等权限。
每个页面的按钮权限都不同，如何实现呢？

- 在路由配置中添加页面权限参数
- 通过路由实例，获取当前页的权限
- 封装按钮权限组件，动态显隐按钮
  :::
  此方案，在 vue 中实现比较方便，vueRouter 配置路由元信息、添加权限校验的参数，在页面路由实例中读取 meta 数据，进行页面级别的按钮权限控制。
  但是，在 react-Router6 版本中没有路由元信息配置，就算自定义路由属性，也无法获取，如下是踩坑代码，大家看看就行，可不要尝试了
  踩坑代码-添加路由自定义属性，获取权限数据首先，在路由配置中设置自定义属性，例如 title 和 requiresAuth：

```tsx
<Route
  path="/dashboard"
  element={<Dashboard />}
  title="Dashboard"
  requiresAuth={true}
/>
```

然后，在 Dashboard 组件中可以通过 useRoutes() 钩子获取路由传递的属性，如下所示：

```tsx
import { useRoutes, useParams, useNavigate } from "react-router-dom";

function Dashboard() {
  const params = useParams();
  const navigate = useNavigate();

  // 访问路由传递的属性
  const { title, requiresAuth } = useRoutes().pathname;

  // 在这里使用元信息进行逻辑处理

  return (
    <div>
      <h1>{title}</h1>
      {/* 组件的其余部分 */}
    </div>
  );
}
```

结果不用说了，报错啊啊啊啊啊啊啊
在 react-route6 中 无法自定义路由属性，报错日志如下
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/f5c142f803ef7eac3c6b4f1539b52c2c.png)
在 react-Router 中如何实现呢？
将按钮权限和页面路由一同返回，数据结构如下：
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/aaac19c165fafb381f4bc58a223b5ec3.png)
既然无法通过路由实例获取权限数据，那么我们手动创建一个对象，来存储路由和按钮权限映射关系，在用户登录后，执行如下代码
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/88b5a799ab591a1a7ccb1dca1161653c.png)
封装按钮权限组件，读取本地权限数据、控制按钮的显隐、禁用状态，代码如下：

```tsx
import { Tooltip } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";

interface IndexProps {
  scopeTtype: string; // 权限码
  children: any; // 子组件
}

const Index: React.FC<IndexProps> = (props) => {
  // 获取当前页面的位置信息、
  const routeDom = useLocation();
  // 从本地缓存读取 页面路径和权限数据
  const strPersstion = localStorage.getItem("pagePersstion");
  const pagePersstion = JSON.parse(strPersstion as string);
  // 找到当前页的按钮权限数据
  const currentPerssion = pagePersstion.find(
    (item: { page: string }) => item.page == routeDom.pathname
  );
  console.log("当前页面的按钮权限", currentPerssion);
  //  有权限返回按钮
  if (currentPerssion.permissions[props.scopeTtype]) {
    return props.children;
  } else {
    // 没有则禁用、或者隐藏按钮
    // 要实现按钮禁用，需要设置组件的disabled
    // 可是react 中的props是只读无法修改，如何修改props中子组件呢？
    // 通过React API React.cloneElement 克隆出新的元素进行修改如下
    const Button = React.cloneElement(props.children, {
      disabled: true,
    });

    return (
      <>
        <Tooltip title="暂无权限"> {Button}</Tooltip>
      </>
    );
  }
};

export default Index;
```

使用按钮权限组件

```tsx
<AuthButton scopeTtype="isDelete">
  <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
    批量删除
  </Button>
</AuthButton>
<AuthButton scopeTtype="isAdd">
    <Button onClick={showModal}>新增员工</Button>
</AuthButton>
```

模拟的路由数据：员工管理页面的路由、按钮配置
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/4bc4fbc81d7961f40627e284885c52f6.png)
页面效果如下：

[React 组件实现权限按钮显示和隐藏-阿里云开发者社区](https://developer.aliyun.com/article/795383)
[react 项目之菜单，按钮权限的实现方案\_react 按钮权限-CSDN 博客](https://blog.csdn.net/liusuyun_1/article/details/123956581)
[React、Vue 后台管理系统权限控制示例（React 高阶组件，Vue 指令，插槽） - 灰信网（软件开发博客聚合）](https://www.freesion.com/article/4568591692/)

# 功能模块

## 1.typescript 项目基础建设

1. 总结 TypeScript 的好处
2. TypeScript 的核心知识

- 项目权限系统开发

1. 出现用户访问无权限时怎么优化用户体验？ 答：lesson7 产出 403 页面配置
2. 切换不同用户 权限改变出现的问题？ 答：lesson7 完善整体用户登陆流程
3. 怎么样可以更好的配置用户权限（提薪） 答：lesson8 可视化权限操作，tree 结构的应用
4. 如何根据不同权限显示隐藏左侧菜单项（提薪） 答：lesson7 动态路由，配合 menu 渲染 side
5. 怎么优化首页加载速度，切换不同权限之后路由懒加载（提薪） 答：lesson7

- redux 相关插件封装
- readux 中间件

## 1.rbac 权限管理 && 表格

1. 不同权限用户登录，展示对应的菜单

## 2.文件上传、OSS 云存储

1. 不同浏览器导出是否一致 答：lesson14 根据浏览器判断不同浏览器行为
2. 选择数据为空时，是否可以导出 答：做前端表单校验
3. 数据量较多时的分页检查
4. 大容量数据导出的时间，和对其他功能是否影响 答：使用异步操作进行打包
5. 批量导出/批量导入的实现 答： lesson12 大文件上传和断点续传
6. 怎么防止文件下载下来之后被盗用(提薪) 答： lesson13 refer 配置

## 支付宝充值

支付宝沙箱账号
买家账号odcjxi3359@sandbox.com
登录密码 111111

- 项目用户信息 & 考勤 等视图模块开发

1. 如果出现 tooltip 用于详情展示内容部分超出怎么办？ 答：lesson17 判断浏览器视口大小，动态判断方向
2. 如果出现主题颜色更换怎么办？答：css var 的使用
3. 如何兼容国外用户？答：i18n 配置
4. 怎么解决多个项目使用一个公共组件? (提薪) 答：lesson18 storybook 组件库预览搭建

# 环境复杂度

## 0. oss 上传如何限制文件类型？

对象存储 OSS 本身并不限制上传的文件类型、大小。如果有相关需求的话，需要自行在业务层面实现。
1、前端在上传时进行拦截，常用于上传组件配置【省心方便】

```jsx
<input as></input>
```

2、后端处理，判断 file 数据的文件类型

## 1 .多文件传的实现方案？

```tsx
const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    // 模拟上传过程，这里可以使用你的oss上传逻辑
    setTimeout(() => {
      resolve(`Uploaded file: ${file}`);
    }, Math.random() * 3000);
  });
};

const files = [file1, file2, file3]; // 假设这是要上传的文件数组

const uploadPromises = files.map((file) => uploadFile(file));

Promise.all(uploadPromises)
  .then((results) => {
    console.log("All files are uploaded:", results);
  })
  .catch((error) => {
    console.error("Error occurred during upload:", error);
  });
```

## 2. Promise.all 和 Promise.race 的区别？

### 场景

- Promise.all() 适用于当我们需要等待多个异步操作全部完成，然后再进行下一步操作的场景。例如，我们需要从多个 API 请求中获取数据，然后将这些数据合并成一个结果。在这种情况下，我们可以使用 Promise.all() 来等待所有的请求都完成，然后将结果合并起来。

- Promise.race() 适用于当我们需要等待多个异步操作中的其中一个完成，然后再进行下一步操作的场景。例如，我们需要从多个 API 请求中获取数据，但只需要获取其中一个请求的结果即可。在这种情况下，我们可以使用 Promise.race() 来等待其中一个请求完成，然后处理其结果。

### 返回值

- Promise.all() 返回一个新的 Promise 对象，如果所有的 Promise 对象都成功解决，则返回一个解决值数组，数组中的解决值按照 Promise 对象数组中的顺序排列。如果有一个 Promise 对象被拒绝，则返回一个拒绝原因。
- Promise.race() 返回一个新的 Promise 对象，其解决值或拒绝原因与第一个解决或拒绝的 Promise 对象相同。

## 3. useState 使用：

### usestate 传值 vs 传函数

当使用 useState 时，传入一个函数作为初始状态值的参数和传入一个值的参数的效果是一样的，都会在组件渲染时被调用，但它们的使用场景略有不同。

- 传入一个值：useState(initialValue)会将 initialValue 作为初始状态值，适用于不需要进行复杂计算的情况。只在组件首次渲染时生效，后续重新渲染时会跳过该初始值的计算。

```tsx
function useState(initialValue) {
  let state = initialValue; // 组件的内部状态
  const setState = (newValue) => {
    state = newValue; // 更新状态值
    // 触发组件重新渲染
    // 这里可以通过某种机制通知 React 重新渲染组件
  };
  return [state, setState]; // 返回状态值和更新状态的函数
}
```

- 传入一个函数：useState(() => initialValue)的函数会在组件首次渲染时都被调用，返回值将被用作初始状态值。这种方式适用于需要根据组件的当前状态计算初始值的场景。

### setState 传值 vs 传函数

当使用 setState 更新组件状态时，可以选择传递一个新的值或者传递一个函数。
无论是传递新值还是传递函数，setState 都会触发组件重新渲染。重新渲染会更新组件的显示。

1. 传递一个新值：直接将新值赋给状态。适用于简单的状态更新，不需要基于之前的状态进行计算。
2. 传递一个函数：将之前的状态作为参数传递给函数，该函数进行计算并返回一个新的状态值。适用于需要基于之前的状态进行复杂计算或逻辑操作的情况。

#### 示例代码

1、传入一个值，在 add 函数内，执行三次 setNum 后，预期 num 应是 3，但是执行后仍然是 1,

```tsx
let [num, setNum] = useState(0)

const add()=>{
	setNum(num + 1);
  setNum(num + 1);
  setNum(num + 1);
  console.log(num) // 3
}

```

`num`状态在当前函数组件生命周期内，永远是 0，无论调用多少次 setState 设置新值也没有。
因为 react 内部 执行`批量更新`的优化策略，可以简单理解为，num 变量在函数内重新声明。

```tsx
let [num, setNum] = useState(0)

const add()=>{
  let = num = 0
	setNum(num + 1);
  setNum(num + 1);
  setNum(num + 1);
  console.log(num) // 1
}

```

对同一次渲染来说 num 是一个固定的值。在多次执行`setState`情况下 React 会并并批量处理，以提高性能。也就是说，不会立即进行多次重新渲染，而是在所有更新应用后进行一次重新渲染。

2、传入一个函数，setNum 中使用函数作为参数

```tsx
let [num, setNum] = useState(0)

const add()=>{
   	setNum((num)=>num + 1);
    setNum((num)=>num + 1);
    setNum((num)=>num + 1);
  console.log(num) // 3
}

```

通过传递函数的方式，可以获得最新的之前状态，并避免并发更新导致的问题。这种方式允许确保在处理并发更新时的正确性。

## 4. useState 和 useReducer 的区别：

一句话总结：
useState 用于简单的状态管理和局部状态更新，而 useReducer 用于复杂的状态逻辑和全局状态管理。

- useState 和 useReducer 是 React 中的两个不同的状态管理钩子。

下面是它们的区别以及代码示例：

1. useState:
   - useState 是 React 提供的基本状态管理钩子。
   - 它通过返回一个包含状态值和更新状态值的数组来处理单个状态。
   - useState 是基于当前状态的值进行更新的。
   - 主要用于简单的状态管理和局部状态更新。

代码示例：

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

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

2. useReducer:
   - useReducer 是 React 提供的更高级的状态管理钩子。
   - 它接受一个 reducer 函数和初始状态作为参数，并返回当前状态和一个 dispatch 函数来触发状态更新。
   - useReducer 通过传入的 reducer 函数来更新状态，该函数接受当前状态和 action 作为参数，并返回新的状态。
   - 主要用于管理复杂的状态逻辑和全局状态管理。

代码示例：

```jsx
import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unknown action type");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

在上述示例中，useState 被用于简单的计数器，而 useReducer 被用于更复杂的计数器，可以增加和减少计数。

## 5. 大文件上传的进度如何实现的

1、`轮询` 定义接口，前端轮询查询进度
2、`socket` 通过 socket 长连接，将文件上传进度实时返回给客户端

## 6. 大文件上传切片处理逻辑：

- 将上传的大文件根据指定的切片大小（一般为固定值）分割成多个小块（切片）。
- 逐个上传每个切片，可以 采用并发上传或顺序上传的方式。上传时可以使用标识符标记切片的顺序和所属文件，以便后续在服务端进行组装。
- 后端接收到每个切片后，进行验证和存储。验证切片的顺序和完整性，存储切片的内容。
- 当所有切片上传完成后，后端根据标识符将切片进行组装还原成原始文件。

## 7. 大文件上传实现方式：

以下是一些常见的实现方式：

- 分片上传：将大文件分割为多个小块（切片），逐个上传，并在服务端进行组装。
- 断点续传：记录已上传的文件切片，当上传中断时可以从上次中断的地方继续上传，避免重新上传整个文件。
- 并行上传：同时开启多个上传任务，将文件切片并发上传，提升上传速度。
- 流式上传：将文件按流式方式上传，不需要等待整个文件加载完成

## 8. 登录按钮使用防抖，暴力点击按钮

当登录的时候，使用防抖，如果一直点击，登录的接口是否能发出去？？
最后一次点击时会发出。

使用防抖函数来处理登录按钮的点击事件，可以确保在短时间内多次点击只有最后一次生效。如果一直点击登录按钮，在防抖函数设定的延迟时间内，只有最后一次点击会触发登录接口的请求，前面的点击事件将被忽略。

因此，只有最后一次点击的登录接口能够发出去，前面的点击事件不会触发登录接口请求。

## 9. 防抖和节流的区别：

### 防抖（Debounce-规定时间结束后执行）

：当事件连续触发时，只有在固定的延迟时间（如 300ms）内没有再次触发事件，才会执行事件处理函数。如果在延迟时间内再次触发事件，则重新开始计时。

### 节流（Throttle-规定时间内执行一次）：

当事件连续触发时，在固定的时间间隔（如 300ms）内，只会执行一次事件处理函数。即使在时间间隔内多次触发事件，也只会执行一次，而不会重复执行。

### 总结

- 防抖：防止抖动，**单位时间内事件触发会被重置，避免事件被误伤触发多次**。代码实现重在清零 clearTimeout
- 节流：控制流量，**单位时间内事件只能触发一次**。代码实现重在开锁关锁 timer=timeout; timer=null

```typescript
export class Lodash {
  // 存储防抖节流的函数，用于检测清除
  private debounceTimeout: NodeJS.Timeout | null;
  private throttleTimeout: NodeJS.Timeout | null;
  private runTime: number;
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    this.debounceTimeout = null;
    this.throttleTimeout = null;
    this.runTime = 0;
  }

  // 防抖-可以被覆盖，简单点说，在单位时间内，永远执行最后一次防抖函数
  public debounce(fc: (...args: any[]) => void, delay: number = 1000) {
    if (this.debounceTimeout) clearTimeout(this.debounceTimeout);
    return (...args: any[]) => {
      this.debounceTimeout = setTimeout(() => {
        fc(...args);
      }, delay);
    };
  }

  // 节流函数-单位时间结束后内只执行一次，

  // 延迟节流 — 单位时间结束后执行，
  // 立即执行 -立刻执行节流函数， 需等时间结束，方可执行下一次
  public throttleAweit(fc: (...args: any[]) => void, delay: number = 1000) {
    // 立即执行的节流函数

    // 1、当前时间 需要大于上次节流执行的事件，方可执行

    // 当前时间
    const nowTime = new Date().getTime();
    return (...args: any[]) => {
      if (nowTime - this.runTime > delay) {
        fc(...args);
        this.runTime = new Date().getTime();
      }
    };
  }

  public throttleAsync(fc: (...args: any[]) => void, delay: number = 1000) {
    // 延迟节流
    if (this.throttleTimeout) {
      return () => {};
    }
    return (...args: any[]) => {
      this.throttleTimeout = setTimeout(() => {
        fc(...args);
        this.throttleTimeout = null;
      }, delay);
    };
  }
}
```

## 10. 路由守卫如何处理的

在 React Router 中，可以通过定义路由组件的渲染逻辑来实现路由守卫。具体而言，可以使用 <Route> 组件的 render 或 component 属性提供一个回调函数或组件，根据需要执行特定的操作。
以下是一个示例，展示了如何使用 React Router 实现简单的路由守卫：

```typescript
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// 路由守卫组件
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? ( // 如果已经认证通过
        <Component {...props} />
      ) : (
        // 如果未认证通过
        <Redirect to="/login" /> // 重定向到登录页面
      )
    }
  />
);

// 应用程序
const App = () => {
  const isAuthenticated = checkAuthentication(); // 检查是否已经认证通过，返回布尔值

  return (
    <Router>
      // 其他路由配置
      <PrivateRoute
        path="/protected"
        component={ProtectedPage}
        isAuthenticated={isAuthenticated}
      />
      // 其他路由配置
    </Router>
  );
};
```

## 11. token 如何处理

Token 是一种用于身份验证和授权的令牌。在前端开发中，通常将 Token 存储在客户端（如浏览器的本地存储或 Cookie）中，并在每次请求时将其发送到服务器。
在处理 Token 的流程中，可以采取以下步骤：

- 登录：用户提供用户名和密码，发送给服务器进行验证。如果验证通过，服务器会颁发一个 Token 并返回给客户端。
- 存储 Token：客户端将 Token 存储在本地，通常是使用浏览器的本地存储机制（如 localStorage）或 Cookie。
- 发送 Token：在每次请求中，客户端会将 Token 添加到请求的头部（如 Authorization 头部）中，并发送给服务器。
- 验证 Token：服务器接收到请求后，会验证 Token 的有效性和合法性。服务器可以使用密钥或秘钥来解析和验证 Token 的签名，并判断是否可以信任该 Token。
- 授权访问：如果服务器验证通过，表示请求是合法的，并且可以根据 Token 中的信息授权用户访问相应的资源。
- Token 刷新：在一些情况下，Token 会有一定的有效期限制。当 Token 过期时，可以通过一个专门的刷新接口来获取新的 Token。客户端在请求返回后更新存储的 Token。

## 12. 重复支付功能如何处理

重复支付是指用户重复提交支付请求导致多次支付的情况。为了处理重复支付，可以采取以下策略之一：

- 后端幂等性校验：后端在接收到支付请求时，可以通过唯一标识（如订单号）来判断该支付请求是否已经处理过。如果已经处理过，则直接返回之前的支付结果，防止重复支付。
- 前端防重复提交：前端可以在用户点击支付按钮后，禁用该按钮，并在支付请求发送成功后才解除禁用。这样可以防止用户多次点击支付按钮导致的重复支付。
- 支付平台回调校验：在某些支付平台中，支付结果会通过回调通知给后端。后端可以在接收到支付结果回调时，再次校验支付结果的唯一标识，并确保该支付结果只被处理一次。

## 13. 如何防止文件被盗取

- 访问权限控制：确保文件存储在可信任的位置，并设置适当的访问控制权限。例如，在服务器上存储文件时，通过配置文件系统的权限，只允许授权用户或特定角色访问文件。
- 文件加密：对敏感的文件内容进行加密，确保只有经过授权的用户能够解密和使用文件内容。可以使用对称加密或非对称加密等加密算法来实现文件的加密和解密。
- HTTPS 使用：在通过网络传输文件时，使用 HTTPS 协议（即使用 SSL/TLS 加密）来加密传输的数据，确保数据在传输过程中不易被窃听和篡改。
- 防止直接访问：直接向公众暴露文件的 URL 地址可能会导致文件被盗取。可以通过服务端代理或生成临时链接的方式，限制非授权用户直接访问文件。

## 14. 如何防止重复支付

## 15. 如何优化首屏加载速度

优化首屏加载速度可以提升用户体验和减少用户的等待时间。以下是一些优化技术和策略：

- 代码拆分（Code Splitting）: 将应用程序的代码拆分成多个较小的包，只在需要时才加载。这样可以缩短首次加载所需的时间，避免一次性加载过多的代码。
- 图片懒加载（Lazy Loading）: 对于页面上的图片，延迟加载它们直到它们即将进入用户的视野范围。这样可以减少页面的初始加载时间。
- 资源压缩和缓存：对于 CSS、JavaScript 和其他静态资源，使用压缩技术（如文件压缩、代码压缩）减小文件大小，并设置适当的缓存策略，以便浏览器可以缓存这些资源，减少重复的请求和下载时间。
- 使用 CDN 加速：将静态资源存储在 CDN（内容分发网络）上，以减少资源的访问延迟和下载时间。
- 接近用户地理位置的服务器：将应用程序的服务器部署在靠近用户地理位置的位置上，以减少网络

## 16. 如何自定义 hooks

使用自定义 Hooks，可以将一些通用的逻辑封装起来，并在不同的组件中共享和重用。要创建一个自定义 Hook，只需按照以下约定编写一个普通的 JavaScript 函数：

- 函数名以 "use" 开头，以表示这是一个自定义 Hook。
- 在函数内部，可以使用 React 的 Hooks 或其他自定义 Hook。
- 函数可以返回任何值，但通常返回一个包含状态和行为的对象，以供组件使用。

### 注意事项

在使用 React Hooks 时，有一些注意事项需要考虑：

1. 只在函数组件或自定义 Hooks 中使用 Hooks：React Hooks 只能在函数组件或自定义 Hooks 中使用，不能在普通的 JavaScript 函数中使用。确保在正确的地方使用 Hooks，以避免引发错误。
2. 在组件的顶层使用 Hooks：确保在组件的顶层使用 Hooks，不要在循环、条件语句或嵌套函数中使用 Hooks。这是因为 React 需要在每次渲染时保持 Hooks 调用的顺序和数量的一致性。
3. Hooks 的调用顺序必须保持一致：在使用多个 Hooks 时，确保每次渲染中 Hooks 的调用顺序保持一致。这是因为 React 通过 Hooks 的调用顺序来确定每个 Hooks 对应的状态和引用。
4. 不要在循环、条件语句或嵌套函数中使用 Hooks：确保在函数组件的最顶层使用 Hooks，不要将 Hooks 放在循环、条件语句或嵌套函数中。这是因为 React 需要依靠 Hooks 的调用顺序来确定每个 Hooks 对应的状态和引用。
5. 使用 ESLint 插件来检查 Hooks 规则：可以使用 eslint-plugin-react-hooks 插件来检查 Hooks 的使用规则，并提供一些静态规则来帮助遵守最佳实践。这样可以帮助检查和纠正 Hooks 使用中常见的错误。
6. 注意闭包陷阱：在使用 Hooks 时，需要注意闭包陷阱（Closure Trap）的问题。如果在副作用函数内部使用了 Hooks，确保正确地处理对外部变量的依赖和更新。否则，可能会导致意外的行为和数据不一致。
7. 惰性初始化状态：使用 useState Hook 时，可以通过传入一个函数作为初始状态，来实现惰性初始化状态。这样可以避免在每次渲染时都重新计算初始状态。
8. 使用 useCallback 和 useMemo 进行性能优化：如果有需要，可以使用 useCallback 和 useMemo Hooks 来优化函数组件的性能。这两个 Hooks 可以用于缓存函数和计算结果，以避免不必要的重复计算。

## 17. 什么情况下需要使用自定义 hooks

## 18. 为什么出现 react hooks?解决了哪些问题

React Hooks 是 React 16.8 版本中引入的新特性，用于解决在组件之间共享状态逻辑的问题。以前，为了在函数组件中使用状态和其他 React 特性，需要使用类组件。使用类组件会引入一些复杂性和样板代码，特别是在处理复杂的逻辑和共享状态时

它们解决了以下几个问题：

- 在函数组件中使用状态：使用 useState Hook，可以在函数组件中使用状态，并且可以通过调用 setState 函数来更新状态。
- 使用副作用和生命周期方法：使用 useEffect Hook，可以在函数组件中执行副作用操作（如数据获取、订阅、操作 DOM），以及模拟类组件中的生命周期方法。
- 在不同组件之间共享逻辑：通过自定义 Hook，可以将逻辑封装成一个可复用的 Hook，供多个组件使用，实现逻辑的共享和抽象。
- 处理组件之间的连接：使用 useContext、useReducer、useRef 等 Hooks，可以在组件之间建立连接，共享状态、传递引用和执行其他操作。

## 19. 为什么使用 redux?

使用 Redux 的一些优点：

- 集中的状态管理：Redux 将整个应用程序的状态存储在一个统一的存储库（称为 Store）中。这使得状态管理变得简单，可以一目了然地查看和跟踪状态的变化，而不需要在组件树中传递状态。
- 可预测性的状态更新：Redux 使用纯函数来处理状态的更新，这些函数被称为 Reducer。通过使用 Reducer，可以根据当前的状态和动作以一致的方式更新状态，从而可预测地管理状态。
- 方便的状态共享：Redux 允许在应用程序的不同组件之间共享状态，而不需要通过组件间的层层传递来实现。任何组件都可以订阅状态的变化，以获取最新的状态更新。
- 方便的状态调试和记录：由于 Redux 的状态变化是通过 Reducer 函数进行的，因此可以轻松地记录和调试状态的变化。这对于解决应用程序中复杂的状态问题非常有帮助。
- 生态系统的丰富性：Redux 有一个非常丰富的生态系统，提供了许多与其配套的库和工具，如 React-Redux、Redux Thunk、Redux Saga 等。这些工具可以帮助开发者更好地使用和管理 Redux，并提供额外的功能和扩展

## 20. 为什么使用 token?不使用 cookie 和 session

用 Token 来进行身份验证和会话管理有以下几个优点：

- 无状态性：Token 是无状态的，不依赖于服务器的会话存储。服务器不需要维护会话状态，减轻了服务器的负担。这对于构建可水平扩展的系统和无状态的 API 非常有用。
- 跨域支持：由于 Token 是通过 HTTP 请求的标头（通常是 Authorization 标头）进行传递的，因此可以方便地在跨域环境中进行身份验证。而传统的 Cookie 和 Session 是基于域的，需要配置跨域策略。
- 安全性：使用 Token 实现身份验证时，可以通过使用加密算法和密钥对 Token 进行签名和验证，以确保 Token 的安全性。这样可以防止 Token 被篡改或伪造。
- 可扩展性：由于 Token 是独立于应用程序的，可以轻松地将身份验证功能与其他系统集成，例如单点登录（SSO）或第三方身份验证提供商。

尽管 Token 有这些优点，但在某些情况下，Cookie 和 Session 仍然是合适的选择，例如需要存储敏感信息，需要支持旧版浏览器或需要与现有的基于 Cookie 的身份验证系统集成。
最终，选择使用 Token、Cookie 还是 Session 取决于具体的需求和场景。在许多现代的 Web 应用程序中，Token 已成为首选的身份验证机制，以提供更灵活、安全和可扩展的解决方案

## 21. 为什么需要封装 axios 呢

- 代码复用：通过封装 Axios，可以将网络请求的逻辑封装成一个可复用的函数或模块，并在应用程序的不同部分共享。这样可以避免重复编写相同的网络请求代码。
- 统一的错误处理：封装 Axios 可以在请求发生错误时统一处理错误。可以定义一些错误处理逻辑，例如统一的错误提示、重试机制或跳转到错误页面。
- 请求拦截和响应处理：通过封装 Axios，可以在请求发送之前进行拦截和处理，例如添加请求头、身份验证或请求参数的转换。同样，可以在收到响应后进行处理，例如解析响应数据、根据状态码进行特定操作等。
- 可配置性：封装 Axios 可以提供一些配置选项，例如默认请求配置、超时设置、代理设置等。这样可以根据应用程序的需求进行定制，并统一管理。
- 模块化和抽象化：通过封装 Axios，可以将网络请求抽象成一个模块，使其独立于应用程序的其他部分。这样可以提高代码的可维护性和可测试性。

## 22. 文件上传的逻辑是什么

文件上传的逻辑可以分为以下几个步骤：

1. 创建文件上传表单：在前端，需要创建一个包含文件上传功能的表单。可以使用 HTML <input type="file"> 元素来实现文件选择和上传。
2. 处理文件选择事件：通过监听文件选择事件，在用户选择文件后获取文件对象。可以使用 JavaScript 来获取并处理文件对象。
3. 发起文件上传请求：使用合适的网络请求库（例如 Axios）将文件上传到服务器。需要根据后端提供的接口规范，构造适当的 HTTP 请求（通常使用 POST 方法）。请求中需要包含文件数据和其他可能的相关信息。
4. 后端处理文件上传：后端接收到文件上传请求后，需要对文件进行处理。这可以包括保存文件到服务器的文件系统、将文件信息存储到数据库或进行其他业务逻辑操作。
5. 响应文件上传结果：后端处理完文件上传后，需要向前端发送响应，通知上传结果。可以通过 HTTP 响应状态码、JSON 数据等方式来传递结果信息。

在实际的文件上传过程中，可能需要考虑文件大小限制、文件类型验证、断点续传、上传进度展示等方面的逻辑。具体实现方式可以根据项目需求和后端接口规范进行调整。

## 23. 支付宝沙箱如何切换正式环境地址

1. 获取正式环境的商户号和密钥：在切换到正式环境之前，需要获得支付宝正式环境的商户号和密钥。这些凭证是用于在正式环境中进行支付操作的必要信息。
2. 更改支付宝接口 URL：在沙箱环境中，支付宝的接口 URL 是模拟的测试地址。要切换到正式环境地址，需要将代码中的接口 URL 更改为支付宝正式环境的 URL。通常，这些 URL 可以在支付宝的开发者文档中找到。
3. 使用正式环境的商户号和密钥：在调用支付宝接口时，确保使用从支付宝正式环境获取的商户号和密钥来进行身份验证和签名。

## 24. 支付成功获取不到回调如何解决

可以按照以下步骤进行排查和解决：

1. 确认支付宝 SDK 配置：确保你在集成支付宝 SDK 的过程中，正确配置了支付宝的回调接口地址。在支付宝 SDK 的初始化或支付接口的参数中，应该包含回调地址的配置项。检查该配置项是否正确设置为你的回调接口的地址。
2. 检查支付宝应用的设置：登录支付宝开放平台，进入开发者控制台，找到对应的应用，确认应用的回调配置是否正确。确保设置的回调地址与你的回调接口地址一致。
3. 检查回调接口逻辑：确保回调接口的逻辑能够正确处理支付宝异步通知的数据。在接收到支付宝的回调请求时，你需要对回调参数进行验签（使用支付宝提供的验签方法），并根据验签结果判断回调是否有效。同时，需要根据支付宝回调的参数判断支付状态、金额等信息，并处理业务逻辑。检查回调接口的代码逻辑，确保数据的处理和业务逻辑的正确性。
4. 检查服务器网络配置：如果回调接口部署在云服务器或私有网络中，需要检查服务器的网络配置，确保支付宝服务器能够正常访问回调接口的地址。检查防火墙、安全组以及路由配置，确保没有阻止支付宝服务器访问的限制。
5. 开启支付宝日志调试：在支付宝 SDK 中一般会提供开启日志调试的方法。可以尝试开启支付宝 SDK 的日志调试功能，查看是否有相关的错误或异常日志输出，帮助定位问题所在。

## 25. 自定义 hooks 如何实现支付地址在不同的环境下使用不同的地址

```typescript
import { useEffect, useState } from "react";

const usePaymentAddress = () => {
  const [paymentAddress, setPaymentAddress] = useState("");

  useEffect(() => {
    // 根据当前环境设置支付地址
    const currentEnv = process.env.NODE_ENV;
    let address = "";

    if (currentEnv === "development") {
      address = "https://sandbox-payment-url.com"; // 开发环境的支付地址
    } else if (currentEnv === "production") {
      address = "https://production-payment-url.com"; // 生产环境的支付地址
    }

    setPaymentAddress(address);
  }, []);

  return paymentAddress;
};

export default usePaymentAddress;
```

在上述代码中，我们根据 process.env.NODE_ENV 的值来确定当前环境，并根据环境设置相应的支付地址。然后，通过 setPaymentAddress 更新 paymentAddress 状态。最后，将 paymentAddress 返回给使用该自定义 hooks 的组件。请确保你的项目中已经配置了相应的环境变量。
使用该自定义 hooks 的组件可以这样获取支付地址：

```typescript
import usePaymentAddress from "./usePaymentAddress";

const PaymentComponent = () => {
  const paymentAddress = usePaymentAddress();

  // 在组件中使用 paymentAddress

  return <div>Payment Address: {paymentAddress}</div>;
};
```

## 26. 自定义 hooks 如何实现了路由守卫

使用 React Router 提供的钩子函数来进行路由守卫逻辑的实现。

```typescript
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useRouteGuard = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen((location) => {
      // 在此处编写路由守卫逻辑
      if (location.pathname === "/protected") {
        const isAuthenticated = checkIfUserIsAuthenticated(); // 检查用户是否已认证

        if (!isAuthenticated) {
          // 如果用户未认证，则重定向到登录页
          history.push("/login");
        }
      }
    });

    return () => {
      unlisten(); // 在 hooks 生命周期结束时取消监听
    };
  }, [history]);

  // 其他自定义逻辑

  return null;
};

export default useRouteGuard;
```

在上述代码中，我们使用了 useHistory 钩子来获取 history 对象，然后使用 history.listen 监听路由变化。在回调函数中，你可以编写路由守卫逻辑，例如，检查用户是否已认证，如果未认证则重定向到登录页。
最后，我们在 useEffect 的返回函数中取消对路由变化的监听，以避免内存泄漏。
使用该自定义 hooks 的组件可以这样实现路由守卫：

```typescript
import useRouteGuard from "./useRouteGuard";

const App = () => {
  useRouteGuard();

  return <Router>{/* 其他组件和路由配置 */}</Router>;
};
```

通过这种方式，你可以在自定义 hooks 中实现路由守卫逻辑，并在根组件中使用该 hooks，确保在路由切换时执行相应的守卫逻辑。

## 27. react - .d 文件 Declare

是用于声明模块、库或组件的类型信息的文件。它们称为类型声明文件，用于为那些没有内置类型声明的第三方库或模块提供类型定义。通过使用.d 文件，你可以为 React 组件、外部库等提供类型检查、自动补全和文档提示等支持

## 28. react - hooks 应用场景 如何实现

## 29. react - 类组件和函数组件区别

### 状态

- `class组件`实例化后拥有自己的状态，可进行数据操作
- `函数组件`无法被实例化，没有自己状态，每次执行后变量会被重置，因此在函数组件无法执行 for 循环。为了保存状态、执行副作用，react-hooks 应用而生。

## 30. react - useEeffect   可以实现 class 类组件中的生命周期挂载事件吗？

是用于声明模块、库或组件的类型信息的文件。它们称为类型声明文件，用于为那些没有内置类型声明的第三方库或模块提供类型定义。通过使用.d 文件，你可以为 React 组件、外部库等提供类型检查、自动补全和文档提示等支持

## 31. react - redux 相关插件

## 32. react - uselayout 和 useEeffect

- useLayoutEffect 的执行时机在 DOM 更新完成后、页面重新渲染前。可以用于读取布局信息或执行其他触发页面重新渲染的操作。
- useEffect 在组件渲染之后异步执行，不会阻塞渲染。通常用于添加副作用操作（如数据获取、订阅事件等）

在大部分情况下，应优先使用 useEffect。只有在需要在页面布局更新后立即执行代码的特殊情况下，才考虑使用 useLayoutEffect。

## 33. ts - interface 和 type 区别

- interface 是用于定义对象、类或函数的契约，它可以描述对象的结构、方法的签名，或作为类的实现接口。可以通过 extends 实现接口之间的继承。
- type 是用于定义类型别名，它可以给现有类型（如基本类型、联合类型、交叉类型等）起一个新的名称。可以使用联合类型、交叉类型等来组合多个类型。

接口（interface）和类型别名（type）在大部分情况下可以互相替代使用，但也有一些细微的差别。例如，接口可以被合并（使用相同名称的多个接口会被自动合并），而类型别名则不能。

## 34. ts - 泛型应用场景 、约束

### 应用场景

（Generics）在 TypeScript 中具有广泛的应用场景，它可以增加代码的可重用性、类型安全性和灵活性。以下是泛型常见的应用场景：

1. 创造可复用的函数或类：使用泛型可以编写通用的函数或类，以适应多种类型的数据。例如，Array 类型提供了通用的泛型数组容器，可以用于存储不同类型的元素。

```typescript
function printArray<T>(arr: T[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

printArray([1, 2, 3]); // 打印数组元素
printArray(["a", "b", "c"]); // 打印字符串数组元素
```

2. 在集合类型中指定元素类型：通过使用泛型可以定义集合类型，指定其中元素的类型。例如，可以使用泛型参数 `<T>` 来声明一个泛型数组类型。

```typescript
type MyArray<T> = T[];

const numbers: MyArray<number> = [1, 2, 3];
const strings: MyArray<string> = ["a", "b", "c"];
```

3. 创建类型安全的数据结构：泛型可以用于定义类型安全的数据结构，例如栈（Stack）、队列（Queue）等。

```typescript
class Stack<T> {
  private elements: T[] = [];

  push(element: T): void {
    this.elements.push(element);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 输出 3
console.log(stack.pop()); // 输出 2
```

4. 在 React 中编写可复用组件：泛型可以用于编写通用的高阶组件（Higher-order Components，HOC）。HOC 是一个接受一个组件作为参数并返回一个新组件的函数。通过使用泛型，可以使 HOC 更加灵活，适用于不同类型的组件。

```typescript
function withLoading<T>(Component: React.ComponentType<T>) {
  return function WithLoading(props: T) {
    // 添加 loading 逻辑
    return <Component {...props} />;
  };
}

const MyComponent = withLoading(SomeComponent); // 使用泛型为 SomeComponent 添加 Loading 功能
```

5. 创建可扩展的抽象函数或类：通过泛型可以创建可扩展的抽象函数或类，以便其他开发人员可以通过扩展泛型类型参数来添加额外的功能。

### 泛型约束（Generic Constraints）

用于限制泛型类型参数的类型范围。通过使用泛型约束，可以指定传递给泛型的类型参数必须满足特定的条件，从而增加代码的类型安全性。

以下是几种常见的情况，可以考虑使用泛型约束：

1. 限制类型参数必须具有某种属性或方法：有时候我们需要确保泛型类型参数包含特定的属性或方法。例如，我们想写一个函数来获取数组的第一个元素，但不确定数组中元素的类型。这时可以使用泛型约束来约束类型参数必须具有 `length` 属性和索引访问方法，以确保参数是一个数组类型：

```typescript
function getFirstElement<T extends ArrayLike<any>>(
  arr: T
): T[number] | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

const result = getFirstElement([1, 2, 3]); // result 的类型为 number
```

2. 将泛型类型参数约束为特定的类型或类型范围：有时候我们需要限制泛型类型参数必须是某个特定类型或满足某个类型范围。例如，我们想写一个函数，接受两个参数并返回它们的和，但限制参数必须是数字类型：

```typescript
function add<T extends number>(a: T, b: T): T {
  return a + b;
}

const result = add(2, 3); // result 的类型为 number
```

在上述例子中，使用 `extends number` 泛型约束，确保 `a` 和 `b` 的类型参数必须是数字类型。

3. 使用多个泛型类型参数之间的关系：有时候我们需要在泛型类型参数之间建立关系，例如一个类型参数必须是另一个类型参数的子类型。这种情况下，我们可以使用泛型约束来描述关系。

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "John",
  age: 30,
};

const name = getProperty(person, "name"); // name 的类型为 string
const age = getProperty(person, "age"); // age 的类型为 number
```

在上述例子中，使用 `K extends keyof T` 泛型约束，确保 `key` 的类型参数是对象 `T` 的键名之一，从而确保获取属性值的键名在对象上有效。

总而言之，使用泛型约束可以在泛型代码中增加类型的限制和约束，提高代码的类型安全性和可读性。泛型约束使得泛型类型参数更加灵活和有用。

## 35. echarts 数据更新问题，数据更新，echarts 未刷新 ，如何解决？

##

1. 使用 setOption 方法：ECharts 提供了 setOption 方法，可以用于更新图表的配置项。通过调用 setOption 方法，并传入新的配置项，可以实现图表的数据更新和刷新。

```
// 假设已经创建了一个图表实例 myChart

// 新数据
const newData = [10, 20, 30, 40, 50];

// 使用 setOption 方法更新配置项
myChart.setOption({
  series: [{
    data: newData,
  }],
});
```

注意，使用 setOption 方法更新图表时，需要确保传入的配置项格式正确，并且包含了需要更新的部分配置。

1. 使用 dispose 和 init 方法重新创建图表：如果使用 setOption 方法无法解决数据更新的问题，可以尝试销毁当前的图表实例，然后重新创建一个新的实例来代替。

```
// 假设已经创建了一个图表实例 myChart

// 销毁当前的图表实例
myChart.dispose();

// 创建一个新的图表实例
const newChart = echarts.init(document.getElementById('chartContainer'));

// 使用新配置项设置图表数据
newChart.setOption({
  // 配置项...
});
```

通过销毁当前图表实例并重新创建一个新的实例，可以确保图表完全重新绘制，并加载最新的数据。

更多

[React.js 面试题精选---3](https://mp.weixin.qq.com/s/USOF_5T3TPkRuSGAXYCSNA)
