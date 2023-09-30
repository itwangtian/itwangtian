---
title: react-router-鉴权页面闪现
urlname: cg2svaaug21hrh90
date: "2023-08-08 10:43:23"
updated: "2023-08-18 09:31:58"
---

# 问题

在用户未登录时、打开某个需要鉴权的页面，会出现短暂的目标页面闪现，然后跳转到登录页。
这是因为在页面加载时，会先展示目标页面的内容，然后在进行鉴权检查后才进行跳转的过程导致的。

# 解决

1. 使用鉴权路由组件：创建一个高阶组件或自定义组件，用于对需要鉴权的路由进行包裹。在该组件中进行鉴权检查，如果用户未登录，则直接跳转到登录页，否则渲染目标页面。这样可以避免目标页面的内容闪现

# 示例代码

## 封装一个路由守卫高阶组件

```tsx
import { Navigate, useLocation } from "react-router-dom";
import { serachRoutr } from "../utils/utils";
import { ListRoute } from "../router/routerConfig";

const AuthRouer = (PROPS: any) => {
  const isLogin = localStorage.getItem("isLogin");
  // const navigate = useNavigate();

  const { pathname } = useLocation();
  const res = serachRoutr(pathname, ListRoute) as any;
  // 完成二级路由重定向
  if (res.meta && res.meta.to) {
    return <Navigate to="/home/main" replace></Navigate>;
  }
  if (!isLogin && pathname !== "/login") {
    console.log("loaclhost", pathname);
    // 未登录且不是登录页，跳转到登录页
    return <Navigate to="/login" replace />;
  } else {
    return <div>{PROPS.children}</div>;
  }
};

export default AuthRouer;
```

使用：
注意！用封装的路由守卫组件包裹住路由信息

```tsx
import ReactDOM from 'react-dom/clien;
import './index.css';
import RouterChiled from './router/routerConfig';
import {  BrowserRouter } from 'react-router-dom';
import AuthRouer from './components/authRouer';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

  <BrowserRouter>
    {/* <Suspense fallback={<div>加载中</div>}> */}
    // 用路由守卫组件包裹住路由信息
    <AuthRouer>
      <RouterChiled />
    </AuthRouer>
    {/* </Suspense> */}
  </BrowserRouter>
);
```
