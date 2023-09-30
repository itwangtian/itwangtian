---
title: react-RouterV6
urlname: mzk95qvgh2ryp3tp
date: "2023-08-08 22:52:39"
updated: "2023-08-18 21:23:14"
---

# 内置 Hooks

## useRoutes

替代`routes`组件，以 JavaScript 对象的结构生成`routes`路由模版，省去了嵌套循环。

### 注意事项：

1、useRoutes 无法解析异步组件，可以考虑使用 React Router 的 React.lazy 和 React.Suspense 组合来实现。下面是一个示例：

```jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AsyncHome = React.lazy(() => import("./components/Home"));
const AsyncAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/about" component={AsyncAbout} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
```
