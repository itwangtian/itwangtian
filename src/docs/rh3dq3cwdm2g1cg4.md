---
title: reactRouter 实现页面级按钮权限
urlname: rh3dq3cwdm2g1cg4
date: "2023-09-28 20:42:34"
updated: "2023-09-28 21:31:41"
---

大家好，我是王天，这篇文章以页面按钮权限为主题、讲解了实现思路，reactRouter vs vueRouter 区别、踩坑记录，代码实现。嫌啰嗦的朋友，直接拖到最后一章节看代码哦。

# 前言

通常情况下，咱们为用户添加权限时，除了页面权限，还会细化到按钮级别，比如、新增、删除、查看等权限。

如下效果，切换用户登录后，操作权限除了左侧菜单，还有页面按钮。
![按钮权限演示效果.gif](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/1938e736e560aeba31c4a86a544d4f59.gif)

# 实现思路

按钮控制本质是条件判断，满足条件显示按钮，否则禁用/消失。
假如每个页面的按钮权限都不同，简单的条件判断，肯定无法满足，那如何实现呢 ？
王天觉得重点是权限数据结构，如何获取当前页面的按钮权限数据，这需要和后端沟通好，定义页面路径和权限数据的映射关系

## 使用路由实现页面按钮权限

步骤：
:::info

1. 在路由配置中添加页面权限参数
2. 通过路由实例，获取当前页的权限
3. 封装按钮权限组件，动态显隐按钮
   :::

## vueRouter vs ReactRouter

### vueRouter

此方案，在 vue 中实现比较方便，使用 vueRouter 配置路由元信息、添加权限校验的参数，在页面路由实例中读取 meta 数据，进行页面级别的按钮权限控制。

### ReactRouter

但是，在 react-Router6 版本中没有路由元信息配置，就算自定义路由属性，也无法获取，如下是踩坑代码，大家看看就行，可不要尝试了

## 踩坑记录

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
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/f5c142f803ef7eac3c6b4f1539b52c2c.png)

# 实战代码

## 定义路由配置数据

需和后端配合将按钮权限和页面路由一同返回
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/aaac19c165fafb381f4bc58a223b5ec3.png)

## 存储路由和按钮权限映射关系

既然无法通过路由实例获取权限数据，那么我们手动创建一个对象，来存储路由和按钮权限映射关系，在用户登录后，执行如下代码
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/88b5a799ab591a1a7ccb1dca1161653c.png)

## 按钮权限组件

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

## 使用按钮权限组件

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
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/4bc4fbc81d7961f40627e284885c52f6.png)

## 页面效果如下：

![](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/1938e736e560aeba31c4a86a544d4f59.gif)
