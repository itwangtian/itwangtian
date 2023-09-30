---
title: react内置组件
urlname: qdn2elswtf486gvx
date: "2023-08-18 22:10:45"
updated: "2023-08-18 22:31:58"
---

# Suspense

- 组件加载时的占位符-用于懒加载
- 属性 fallback

组件尚未加载完成时，会显示 fallback 属性中指定的组件内容，用于展示加载状态。一旦数据加载完成,组件会被显示，并以更新后的数据渲染内容
一般搭配 lazy() 函数，用 suspense 组件包裹住 懒加载组件，在加载过程中展示 suspense 中的占位内容。

## 场景

当我们在 React 中构建应用程序时，有时某些组件的加载可能需要一些时间。为了提供更好的用户体验，我们可以使用 Suspense 组件。
Suspense 组件的作用是在组件加载过程中显示一些备用内容，例如加载指示器或占位符。它的使用场景包括代码分割和懒加载。

## 使用方法：

1. 导入所需的依赖：`import React, { Suspense } from 'react';`
2. 使用 React.lazy()动态加载需要延迟加载的组件：`const MyComponent = React.lazy(() => import('./MyComponent'));`
3. 在渲染处使用 Suspense 组件，并设置 fallback 属性来指定备用内容：`<Suspense fallback={<div>Loading...</div>}>...</Suspense>`
4. 将需要延迟加载的组件放置在 Suspense 组件内部：`<MyComponent />`

## 示例代码：

```jsx
import React, { Suspense } from "react";

const MyComponent = React.lazy(() => import("./MyComponent"));

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

在上述示例中，MyComponent 是一个需要延迟加载的组件。使用 Suspense 组件将 MyComponent 包裹起来，当组件加载时，会显示指定的备用内容，即`<div>Loading...</div>`。一旦组件加载完成，它将替换备用内容，显示真正的组件内容。
