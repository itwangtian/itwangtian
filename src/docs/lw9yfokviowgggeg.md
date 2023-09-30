---
title: 路由守卫全系列
urlname: lw9yfokviowgggeg
date: "2023-08-30 08:53:54"
updated: "2023-09-27 19:43:39"
---

# hooks 版本

[react hooks 全攻略](https://www.yuque.com/itwangtian/ycsiao/slaatvufmrio04vo?view=doc_embed&inner=E9R9I)

# 组件版本

- history 监听路由变化，更新路由前进行权限校验
- 使用内置 hooks `useLocation`来获取路径信息

```javascript
// 路由鉴权组件 -
// 作用1：登录鉴权
// 作用2：实现路由重定向
import React from "react";
import * as Type from "../../../utils/type";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import RouterConfig from "../../../router/routerConfig"; // 路由配置数据

// 查找当前路径的路由数据
const searchRoute = (path: string, routes: Type.RoterList) => {
  let reslut = {};
  for (const iterator of routes) {
    if (iterator.path === path && !iterator.children) return iterator;
    if (iterator.children) {
      const res = searchRoute(path, iterator.children);
      reslut = res;
    }
  }
  return reslut;
};

const AuthRoute = (props: any) => {
  // 实现路由重定向，判断下当前路由配置是否包含 属性to

  // 获取当前路由的配置数据
  const { pathname } = useLocation();
  console.log('useLocation()', useLocation())
  let routeData = searchRoute(pathname, RouterConfig) as any
  //   鉴权代码 --判断用户token、缓存信息,没有token跳转登录页，登录页无需校验token

  if (!localStorage.getItem('token') && pathname !== '/login') {
    window.location.href = '/login'
  }
  // 重定向
  if (routeData.to) {
    // 跳转重定向页面
    return <Navigate to={routeData.to}></Navigate>
  } else {
    return <>{props.children}</>
  }
};

export default AuthRoute;

```

使用 authRoute 路由守卫组件

```javascript
// import RouteDom from "./router/routerView";
import { BrowserRouter, Link } from "react-router-dom";
// 引入路由组件
import RouteApp from "./router/routerView"; 、
// 引入路由守卫组件
import AuthRoute from "./components/common/authRoute";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={Stroe}>
  	  <BrowserRouter>
        	<AuthRoute>
            <RouteApp></RouteApp>
          </AuthRoute>
  	  </BrowserRouter>
    </Provider>
);
```
