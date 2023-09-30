---
title: 更改redux 数据，页面未重新渲染
urlname: pq90e0didogi2as4
date: "2023-08-24 20:00:47"
updated: "2023-08-24 21:35:37"
---

# 场景

在 reducer 中使用 object.assign(state,{data:xxx}) 合并了状态，控制台打印 state 数据已更新，但是页面未重新渲染

# 原因

redux 会通过引用来判断前后两次 state 有没有变化。return 原来的 state 的话 redux 会认为你的 state 没有变化。

咱们用 Object.assign(state,xx)是直接修改了 state 对象，然后返回的还是原来的 state 对象（被修改过的数据）但是引用未更改，还是同一引用源。

# 解决

使用而扩展符则是创建了一个新的对象，相当于 Object.assign({},state,...)

**注意**：不要在 reducer 里面做以下操作
1、修改传入参数；
2、执行有副作用的操作，如 API 请求和路由跳转；
3、调用非纯函数，如 Date.now() 或 Math.random()。
