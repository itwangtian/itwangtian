---
title: 前端基建规范参考
urlname: fbi9dqgqq17h84ag
date: "2023-07-21 11:18:35"
updated: "2023-07-21 11:20:59"
---

## 一. 项目目录规范

文件目录组织现在常用的有两种方式，后面公司采用的第二种，更方便一些。两种方式没有最好的，只有更适合自己公司的，只要公司内部达成一致了，用哪一种都会很方便。
**1.1 按功能类型来划分**
按文件的功能类型来分，**比如 api**，**组件**，**页面**，**路由**，**hooks**，**store**，不管是全局使用到的，还是单独页面局部使用到的，都按照功能类型放在**src**下面对应的目录里面统一管理。

```
├─src               #  项目目录
│  ├─api                #  数据请求
│  │  └─Home            #  首页页面api
│  │  └─Kind            #  分类页面api
│  ├─assets             #  资源
│  │  ├─css             #  css资源
│  │  └─images          #  图片资源
│  ├─config             #  配置
│  ├─components         #  组件
│  │  ├─common            #  公共组件
│  │  └─Home              #  首页页面组件
│  │  └─Kind              #  分类页面组件
│  ├─layout             #  布局
│  ├─hooks              #  自定义hooks组件
│  ├─routes             #  路由
│  ├─store              #  状态管理
│  │  └─Home              #  首页页面公共的状态
│  │  └─Kind              #  分类页面公共的状态
│  ├─pages              #  页面
│  │  └─Home              #  首页页面
│  │  └─Kind              #  分类页面
│  ├─utils              #  工具
│  └─main.ts            #  入口文件
```

**1.2 按领域模型划分**
按照页面功能划分，全局会用到的**组件**，**api**等还是放到**src**下面全局管理，页面内部单独使用的**api**和**组件**放到对应页面的文件夹里面，使用的时候不用上下查找文件，在当前页面文件夹下就能找到，比较方便，功能也内聚一些。

```
├─src               #  项目目录
│  ├─assets             #  资源
│  │  ├─css             #  css资源
│  │  └─images          #  图片资源
│  ├─config             #  配置
│  ├─components         #  公共组件
│  ├─layout             #  布局
│  ├─hooks              #  自定义hooks组件
│  ├─routes             #  路由
│  ├─store              #  全局状态管理
│  ├─pages              #  页面
│  │  └─Home              #  首页页面
│  │    └─components      #  Home页面组件文件夹
│  │    ├─api             #  Home页面api文件夹
│  │    ├─store           #  Home页面状态
│  │    ├─index.tsx       #  Home页面
│  │  └─Kind              #  分类页面
│  ├─utils              #  工具
│  └─main.ts            #  入口文件
```

## 二. 代码书写规范

规范比较多，这里只简单列举一下基本的规范约束和使用工具来自动化规范代码。
**2.1 组件结构**
**react 组件**

```
import React, { memo, useMemo } from 'react'

interface ITitleProps {
  title: string
}

const Title: React.FC<ITitleProps> = props => {
  const { title } = props

  return (
    <h2>{title}</h2>
  )
}

export default memo(Title)
```

**ITitleProps** 以**I**为开头代表**类型**，中间为语义化**Title**，后面**Props**为类型，代表是组件参数。
**2.2 定义接口**
例 1: 登录接口，定义好参数类型和响应数据类型，参数类型直接定义**params**的类型，响应数据放在**范型**里面，需要在封装的时候就处理好这个范型。

```
import { request } from '@/utils/request'

/** 公共的接口响应范型 */
export interface HttpSuccessResponse<T> {
  code: number
  message: string
  data: T
}

/** 登录接口参数 */
export interface ILoginParams {
  username: string
  password: string
}

/** 登录接口响应 */
export interface ILoginData {
  token: string
}

/* 用户登录接口 */
export const loginApi = (params: ILoginApi) => {
  return request.post<ILoginData>('/xxx', params)
}
```

**2.3 事件**
以**on**开头代表事件，这个只是规范，**on**要比**handle**短一点，哈哈。

```
const onChange = () => {

}
```

**2.4 工具约束代码规范**
除了约定俗称的规范，我们也需要借助一些工具和插件来协助我们更好的完成规范这件事情。
**代码规范**

1. ?vscode：统一前端编辑器。
2. ?editorconfig: 统一团队**vscode**编辑器默认配置。
3. ?prettier: 保存文件自动格式化代码。
4. ?eslint: 检测代码语法规范和错误。
5. ?stylelint: 检测和格式化样式文件语法

可以看我这篇文章：?【前端工程化】配置 React+ts 企业级代码规范及样式格式和 git 提交规范
**git 提交规范**

1. ?husky:可以监听?githooks 执行，在对应**hook**执行阶段做一些处理的操作。
2. ?lint-staged: 只检测暂存区文件代码，优化**eslint**检测速度。
3. ?pre-commit：**githooks**之一， 在**commit**提交前使用**tsc**和**eslint**对语法进行检测。
4. ?commit-msg：**githooks**之一，在**commit**提交前对**commit**备注信息进行检测。
5. ?commitlint：在**githooks**的**pre-commit**阶段对**commit**备注信息进行检测。
6. ?commitizen：**git**的规范化提交工具，辅助填写**commit**信息。

可以看我这篇文章：?【前端工程化】配置 React+ts 企业级代码规范及样式格式和 git 提交规范

## 三. 状态管理器优化和统一

### 3.1 优化状态管理

用**react**的**context**封装了一个简单的状态管理器，有完整的类型提升，支持在组件内和外部使用，也发布到?npm 了

```javascript
import React, { createContext,  useContext, ComponentType, ComponentProps } from 'react'

/** 创建context组合useState状态Store */
function createStore<T>(store: () => T) {
  // eslint-disable-next-line
  const ModelContext: any = {};

  /** 使用model */
  function useModel<K extends keyof T>(key: K) {
    return useContext(ModelContext[key]) as T[K];
  }

  /** 当前的状态 */
  let currentStore: T;
  /** 上一次的状态 */
  let prevStore: T;

  /** 创建状态注入组件 */
  function StoreProvider(props: { children: React.ReactNode }) {
    currentStore = store();
    /** 如果有上次的context状态，做一下浅对比，
     * 如果状态没变，就复用上一次context的value指针，避免context重新渲染
     */
    if (prevStore) {
      for (const key in prevStore) {
        // @ts-ignore
        if (shallow(prevStore[key], currentStore[key])) {
          // @ts-ignore
          currentStore[key] = prevStore[key];
        }
      }
    }
    prevStore = currentStore;
    // @ts-ignore
    let keys: any[] = Object.keys(currentStore);
    let i = 0;
    const length = keys.length;
    /** 遍历状态，递归形成多层级嵌套Context */
    function getContext<T, K extends keyof T>(
      key: K,
      val: T,
      children: React.ReactNode,
    ): JSX.Element {
      const Context =
        ModelContext[key] || (ModelContext[key] = createContext(val[key]));
      const currentIndex = ++i;
      /** 返回嵌套的Context */
      return React.createElement(
        Context.Provider,
        {
          value: val[key],
        },
        currentIndex < length
        ? getContext(keys[currentIndex], val, children)
        : children,
      );
    }
    return getContext(keys[i], currentStore, props.children);
  }

  /** 获取当前状态, 方便在组件外部使用,也不会引起页面更新 */
  function getModel<K extends keyof T>(key: K): T[K] {
    return currentStore[key];
  }

  /** 连接Model注入到组件中 */
  function connectModel<Selected, K extends keyof T>(
    key: K,
    selector: (state: T[K]) => Selected,
  ) {
    // eslint-disable-next-line func-names
    // @ts-ignore
    return function <P, C extends ComponentType<any>>(
      WarpComponent: C,
    ): ComponentType<Omit<ComponentProps<C>, keyof Selected>> {
      const Connect = (props: P) => {
        const val = useModel(key);
        const state = selector(val);
        // @ts-ignore
        return React.createElement(WarpComponent, {
          ...props,
          ...state,
        });
      };
    return Connect as unknown as ComponentType<
      Omit<ComponentProps<C>, keyof Selected>
      >;
  };
}

return {
  useModel,
  connectModel,
  StoreProvider,
  getModel,
};
}

export default createStore

/** 浅对比对象 */
function Shallow<T>(obj1: T, obj2: T) {
  if(obj1 === obj2) return true
  if(Object.keys(obj1).length !== Object.keys(obj2).length) return false
  for(let key in obj1) {
    if(obj1[key] !== obj2[key]) return false
  }
  return true
}
```

### 3.2 store 目录结构

```javascript
├─src               #  项目目录
│  ├─store              #  全局状态管理
│  │  └─modules           #  状态modules
│  │    └─user.ts           #  用户信息状态
│  │    ├─other.ts          #  其他全局状态
│  │  ├─createStore.ts          #  封装的状态管理器
│  │  └─index.ts          #  store入口页面
```

### 3.3 定义状态管理器

**1. 在 store/index.ts 中引入**

```typescript
import { useState } from "react";

/** 1. 引入createStore.ts */
import createStore from "./createStore";

/** 2. 定义各个状态 */
// user
const userModel = () => {
  const [userInfo, setUserInfo] = useState<{ name: string }>({ name: "name" });
  return { userInfo, setUserInfo };
};

// other
const otherModel = () => {
  const [other, setOther] = useState<number>(20);
  return { other, setOther };
};

/** 3. 组合所有状态 */
const store = createStore(() => ({
  user: userModel(),
  other: otherModel(),
}));

/** 向外暴露useModel, StoreProvider, getModel, connectModel */
export const { useModel, StoreProvider, getModel, connectModel } = store;
```

**2. 在顶层通过 StoreProvider 注入状态**

```typescript
// src/main.ts
import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
// 1. 引入StoreProvider
import { StoreProvider } from "@/store";

// 2. 使用StoreProvider包裹App组件
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
```

### 3.4 使用状态管理器

**1. 在函数组件中使用，借助 useModel**

```
import React from 'react'
import { useModel } from '@/store'

function FunctionDemo() {

  /** 通过useModel取出user状态 */
  const { userInfo, setUserInfo } = useModel('user')

  /** 在点击事件中调用setUserInfo改变状态 */
  const onChangeUser = () => {
    setUserInfo({
      name: userInfo.name + '1',
    })
  }

  // 展示userInfo.name
  return (
    <button onClick={onChangeUser}>{userInfo.name}--改变user中的状态</button>
  )
}

export default FunctionDemo
```

**2. 在 class 组件中使用,借助 connectModel**

```
import React, { Component } from 'react'
import { connectModel } from '@/store'

// 定义class组件props
interface IClassDemoProps {
  setOther: React.Dispatch<React.SetStateAction<string>>
  other: number
}

class ClassDemo extends Component<IClassDemoProps> {
  // 通过this.props获取到方法修改状态
  onChange = () => {
    this.props.setOther(this.props.other + 1)
  }
  render() {
    // 通过this.props获取到状态进行展示
    return <button onClick={this.onChange}>{this.props.other}</button>
  }
}

// 通过高阶组件connectModel把other状态中的属性和方法注入到类组件中
export default connectModel('other',state => ({
  other: state.other,
  setOther: state.setOther
}))(ClassDemo)
```

**3. 在组件外使用, 借助 getModel**
也可以在组件内读取修改状态方法，不回引起更新

```
import { getModel } from '@/store'

export const onChangeUser = () => {
  // 通过getModel读取usel状态，进行操作
  const user = getModel('user')
  user.setUserInfo({
    name: user.userInfo.name + '1'
  })
}

// 1秒后执行onChangeUser方法
setTimeout(onChangeUser, 1000)
```

## 四. 本地存储统一管理

可以对**localStorage**和**sessionStorage**还有**cookie**简单封装一下，封装后使用的好处：

1. 自动序列化，存储的时候转字符串，取得时候再转回来。
2. 类型自动推断，在实例化的时候传入类型，在设置和获取值的时候都会自动类型推断。
3. 可以统一管理，把本地存储都放在一个文件里面，避免后期本地存储混乱不好维护问题。
4. 抹平平台差异，这个思路**web**，小程序，移动端，桌面端都适合。

```
// src/utils/storage.ts
const prefix = 'xxx.'

interface IStorage<T> {
  key: string
  defaultValue: T
}
export class LocalStorage<T> implements IStorage<T> {
  key: string
  defaultValue: T
  constructor(key, defaultValue) {
    this.key = prefix + key
    this.defaultValue = defaultValue
  }
  /** 设置值 */
  setItem(value: T) {
    localStorage.setItem(this.key, JSON.stringify(value))
  }
  /** 获取值 */
  getItem(): T {
    const value = localStorage[this.key] && localStorage.getItem(this.key)
    if (value === undefined) return this.defaultValue
    try {
      return value && value !== 'null' && value !== 'undefined'
        ? (JSON.parse(value) as T)
        : this.defaultValue
    } catch (error) {
      return value && value !== 'null' && value !== 'undefined'
        ? (value as unknown as T)
        : this.defaultValue
    }
  }
  /** 删除值 */
  removeItem() {
    localStorage.removeItem(this.key)
  }
}
```

**实例化封装的本地存储**

```
// src/common/storage.ts
import { LocalStorage } from '@/utils/storage'

/** 管理token */
export const tokenStorage = new LocalStorage<string>('token', '')

/** 用户信息类型 */
export interface IUser {
    name?: string
    age?: num
}

/** 管理用户信息 */
export const userStorage = new Storage<IUser>('user', {})
```

**页面内使用**

```
import React, { memo, useMemo } from 'react'
import { userStorage } from '@/common/storage'

interface ITitleProps {
  title: string
}

const Title: React.FC<ITitleProps> = props => {
  const { title } = props

  useEffect(() => {
    userStorage.setItem({ name: '姓名', age: 18 })
    const user = userStorage.getItem()
    console.log(user) // { name: '姓名', age: 18 }
  }, [])

  return (
    <h2>{title}</h2>
  )
}

export default memo(Title)
```

## 五. 封装请求统一和项目解耦

**5.1 现有的封装**
项目现用的请求封装和项目业务逻辑耦合在一块，不方便直接复用，使用上比较麻烦，每次需要传**GET**和**POST**类型，**GET**参数要每次单独做处理，参数类型限制弱。
**5.2 推荐使用**
推荐直接使用**fetch**封装或**axios**，项目中基于次做二次封装，只关注和项目有关的逻辑，不关注请求的实现逻辑。在请求异常的时候不返回**Promise.reject()，而是返回一个对象，只是 code**改为异常状态的**code**，这样在页面中使用时，不用用**try/catch**包裹，只用**if**判断**code**是否正确就可以。

```
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { tokenStorage } from '@/common/storage'
/** 封装axios的实例，方便多个url时的封装 */
export const createAxiosIntance = (baseURL: string): AxiosInstance => {
  const request = axios.create({ baseURL })
  // 请求拦截器器
  request.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers['Authorization'] = tokenStorage.getItem()
    return config
  })
  // 响应拦截器
  request.interceptors.response.use(
    response => {
      const code = response.data.code
      switch (code) {
        case 0:
          return response.data
        case 401:
          // 登录失效逻辑
          return response.data || {}
        default:
          return response.data || {}
      }
    },
    error => {
      // 接口请求报错时，也返回对象，这样使用async/await就不需要加try/catch
      // code为0为请求正常，不为0为请求异常,使用message提示
      return { message: onErrorReason(error.message) }
    }
  )
  return request
}

/** 解析http层面请求异常原因 */
function onErrorReason(message: string): string {
  if (message.includes('Network Error')) {
    return '网络异常，请检查网络情况!'
  }
  if (message.includes('timeout')) {
    return '请求超时，请重试!'
  }
  return '服务异常,请重试!'
}

export const request = createAxiosIntance('https://xxx')
```

**5.3 使用**
使用上面代码命名定义接口类型的**loginApi**例子

```
/** 登录 */
const onLogin = async () => {
  const res = await loginApi(params)
  if(res.code === 0) {
    // 处理登录正常逻辑
  } else {
    message.error(res.message) // 错误提示也可以在封装时统一添加
  }
}
```

## 六. api 接口管理统一

**文件夹路径**

```
├─pages                 #  页面
│  ├─Login              #  登录页面
│  │  └─api             #  api文件夹
│  │    └─index.ts      #  api函数封装
│  │    ├─types.ts      #  api的参数和响应类型
```

**定义类型**

```
// api/types.ts

/** 登录接口参数 */
export interface ILoginParams {
  username: string
  password: string
}

/** 登录接口响应 */
export interface ILoginData {
  token: string
}
```

**定义请求接口**

```
import { request } from '@/utils/request'
import { ILoginParams, ILoginData } from './types'

/* 用户登录接口 */
export const loginApi = (params: ILoginParams) => {
  return request.post<ILoginData>('/distribute/school/login', params)
}
```

**使用请求接口**
使用上面代码命名定义接口类型的**loginApi**例子

```
/** 登录 */
const onLogin = async () => {
  const res = await loginApi(params)
  if(res.code === 0) {
    // 处理登录正常逻辑
  } else {
    message.error(res.message) // 错误提示也可以在封装时统一添加
  }
}
```

## 七. 函数库-通用方法抽离复用

把公司项目中常用的**方法**和**hooks**抽离出来组成**函数库**，方便在各个项目中使用，通过编写函数方法，写 jest 单元测试，也可以提升组内成员的整体水平。当时组内前端不管是实习生还是正式成员都在参与函数库的建设，很多就有了 **30+** 的函数和 hooks，还在不断的增加。
是用了**dumi2**来开发的函数库，可以看我的这篇文章?【前端工程化】使用 dumi2 搭建 React 组件库和函数库详细教程

## 八. 组件库-通用组件抽离复用

公司项目多了会有很多公共的组件，可以抽离出来，方便其他项目复用，一般可以分为以下几种组件：

1. UI 组件
2. 业务组件
3. 功能组件：上拉刷新，滚动到底部加载更多，虚拟滚动，拖拽排序，图片懒加载..

由于公司技术栈主要是**react**，组件库也是采用了**dumi2**的方案，可以看我的这篇文章?【前端工程化】使用 dumi2 搭建 React 组件库和函数库详细教程

## 九. css 超集和 css 模块化方案统一

**css 超集**
使用**less**或者**scss**，看项目具体情况，能全项目统一就统一。
**css 模块化**
**vue**使用自带的**style scoped**, **react**使用**css-module**方案。
开启也简单，以**vite**为例，默认支持，可以修改**vite.config.ts**配置：

```
// vite.config.ts
export default defineConfig({
  css: {
    // 配置 css-module
    modules: {
      // 开启 camelCase 格式变量名转换
      localsConvention: 'camelCase',
      // 类名格式，[local]是自己原本的类名，[hash:base64:5]是5位的hash值
      generateScopedName: '[local]-[hash:base64:5]',
    }
  },
})
```

使用的时候，样式文件命名后缀需要加上 **.module**，例如 index.module.less：

```
// index.module.less
.title {
	font-size: 18px;
  color: yellow;
}
```

组件里面使用:

```
import React, { memo, useMemo } from 'react'
import styles from './index.module.less'

interface ITitleProps {
  title: string
}

const Title: React.FC<ITitleProps> = props => {
  const { title } = props

  return (
    <h2 className={styles.title}>{title}</h2>
  )
}

export default memo(Title)
```

编译后类名会变成**title-[hash:5]**，可以有效避免样式冲突，减少起类名的痛苦。

## 十. 引入 immer 来优化性能和简化写法

?Immer 是 **mobx** 的作者写的一个 **immutable** 库，核心实现是利用 **ES6** 的 **Proxy**(不支持**Proxy**的环境会自动使用**Object.defineProperty**来实现)，几乎以最小的成本实现了 **js** 的不可变数据结构，简单易用、体量小巧、设计巧妙，满足了我们对**js**不可变数据结构的需求。
**1. 优化性能**
修改用户信息

```
const [ userInfo, setUserInfo ] = useState({ name: 'immer', info: { age: 6 } })
const onChange = (age: number) => {
  setUserInfo({...userInfo, info: {
    ...userinfo.info,
    age: age
  }})
}
```

上面某次修改**age**没有变，但**setUserInfo**时每次都生成了一个新对象，更新前后引用变化了，组件就会刷新。
使用**immer**后,**age**没变时不会生成新的引用，同时语法也更简洁，可以优化性能。

```
import produce from 'immer'

const [ userInfo, setUserInfo ] = useState({ name: 'immer', age: 5 })
const onChange = (age: number) => {
  setUserInfo(darft => {
    darft.age = age
  })
}
```

**2.简化写法**
**react**遵循不可变数据流的理念，每次修改状态都要新生成一个引用，不能在原先的引用上进行修改，所以在对引用类型对象或者数组做操作时，总要浅拷贝一下，再来做处理，当修改的状态层级比较深的时候，写法会更复杂。
以数组为例，修改购物车某个商品的数量：

```
import produce from 'immer'

const [ list, setList ] = useState([{ price: 100, num: 1 }, { price: 200, num: 1 }])

// 不使用用immer
const onAdd = (index: number) => {
  /** 不使用immer */
  // const item = { ...list[index] }
  // item.num++
  // list[index] = item
  // setList([...list])

  /** 使用immer */
  setList(
    produce(darft => {
      darft[index].num++
    }),
  )
}
```

**3. 可以用?use-immer 简化写法**:

```
import useImmer from 'use-immer'

const [ list, setList ] = useImmer([{ price: 100, num: 1 }, { price: 200, num: 1 }])

const onAdd = (index: number) => {
  setList(darft => {
      darft[index].num++
  })
}
```

## 十一. 搭建 npm 私服

公司前端项目不推荐使用太多第三方包，可以自己搭建公司**npm**私服，来托管公司自己封装的状态管理库，请求库，组件库，以及脚手架**cli**，**sdk**等**npm**包，方便复用和管理。
可以看我这两篇文章，都可以搭建**npm**私服：
?【前端工程化】巧用阿里云 oss 服务打造前端 npm 私有仓库
?【前端工程化】使用 verdaccio 搭建公司 npm 私有库完整流程和踩坑记录

## 十二. 各类型项目通用模版封装

可以提前根据公司的业务需求，封装出各个端对应通用开发模版，封装好项目目录结构，接口请求，状态管理，代码规范，git 规范钩子，页面适配，权限，本地存储管理等等，来减少开发新项目时前期准备工作时间，也能更好的统一公司整体的代码规范。

1. 通用后台管理系统基础模版封装
2. 通用小程序基础模版封装
3. 通用**h5**端基础模版封装
4. 通用**node**端基础模版封装
5. 其他类型的项目默认模版封装，减少重复工作。

## 十三. 搭建 cli 脚手架下载模版。

搭建类似**vue-cli**, **vite**, **create-react-app**类的**cli 命令行**脚手架来快速选择和下载封装好的模版，比**git**拉代码要方便。
具体**cli**脚手架的实现可以看我这篇文章：?【前端工程化】从入门到精通，100 行代码构建你的前端 CLI 脚手架之路

## 十四. git 操作规范

**git**操作规范也很重要，流程不规范很容易出现比较复杂的问题，要根据公司现有情况和业界比较好的实践方案制定一套适合自己公司的**git flow**开发规范，用各种限制方案来避免出现问题，这个具体流规范后面会总结一篇文章出来。

## 十五. 规范和使用文档输出文档站点

代码规范和 git 提交规范以及各个封装的库使用说明要输出成文档部署到线上，方便新同事快速熟悉和使用。
这个是很重要的，做了再多的基建和规范，如果没有一个公共的文文档来查阅，就没办法快速熟悉，所以要一个线上的规范文档，把所有的规范都写进去，可以用语雀
