---
title: react 编码规范
urlname: bgd0siymr5kortqz
date: "2023-07-25 19:49:51"
updated: "2023-07-25 20:08:59"
---

# 函数名称

按照惯例，通常将事件处理程序命名为 handle，后接事件名。你会经常看到 onClick={handleClick}，onMouseEnter={handleMouseEnter} 等。

| 传递一个函数（正确）                  | 调用一个函数（错误）            |
| ------------------------------------- | ------------------------------- |
| <button onClick={() => alert('...')}> | <button onClick={alert('...')}> |

如果按如下方式传递内联代码，并不会在点击时触发，而是会在每次组件渲染时触发：

```
// 这个 alert 在组件渲染时触发，而不是点击时触发！

<button onClick={alert('你点击了我！')}>
```

如果你想要定义内联事件处理函数，请将其包装在匿名函数中，如下所示：

```
<button onClick={() => alert('你点击了我！')}>
```

## 参数传参：

### 1、箭头函数中执行

```typescript

function handeClick(data){
  alert(data)
}
<button onClick={()=>handeClick('点我')}> 点我 </butotn>
```

箭头函数，都会创建一个新的函数实例，因此容易引起性能问题。但是在大多数情况下，性能影响并不显著。

### 2、推荐写法：`bind`方法

在这种情况下，我们使用 Function.prototype.bind 方法来绑定 handleClick 函数的上下文为 null，并传递参数 param

```typescript
function handeClick(data) {
  alert(data);
}
<button onClick={handeClick.bind(null, "点我	")}>点我</button>;
```

### 3、错误写法

以下代码中 handleClick 会在渲染时立即执行

```typescript
<button onClick={handeClick('韩庆元')>点我</button>
```

这种行为与 React 的事件处理机制不一致。
**在 React 中，事件处理函数应该是一个函数引用，而不是一个函数的调用结果**。当你使用 button onClick={handeClick('韩庆元')} 这样的方式时，实际上会立即执行 handeClick('韩庆元') 函数，并将其返回值作为事件处理函数，而不是绑定函数本身。
