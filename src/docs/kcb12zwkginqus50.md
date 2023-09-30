---
title: React通信
urlname: kcb12zwkginqus50
date: "2023-08-09 16:01:05"
updated: "2023-08-18 13:48:55"
---

# 组件通信

## 父子 props

父组件标签内的 jsx 内容，通过 children 作为插槽传入子组件

## 子向父-回调函数

父组件中通过 props 向子组件传参函数，子组件触发函数参数，实现子父通信

### 父子-子父组件通信示例

子组件

```jsx
import React from "react";

interface ChildrenProps {
  title: string;
  dbClick?: () => void;
  children?: any;
}

const Children: React.FC<ChildrenProps> = ({
  dbClick,
  title,
  children,
}: ChildrenProps) => {
  return (
    <>
      <h1 onDoubleClick={dbClick}> {title}</h1>
      {children}
    </>
  );
};

export default Children;
```

父组件

```jsx
{
  /* 父子传参 props ;父组件标签内的jsx内容，通过children作为插槽传入子组件*/
}
{
  /* 子向父通信-回调函数 - 父组件中通过props向子组件传参函数，子组件触发函数参数，实现子父通信 */
}
<Children title="标题" dbClick={() => alert("双击了")}>
  {<div>{a}</div>}
</Children>;
```

## 跨组件

# redux 仓库
