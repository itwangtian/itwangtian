---
title: 装饰器：简化代码、增加功能的利器
urlname: lusv5pm2rbl2ygkf
date: "2023-08-16 19:43:47"
updated: "2023-08-16 21:15:01"
---

### 装饰器语法

装饰器是 TypeScript（简称 TS）中的一个特性，它可以在不修改原始代码的情况下，通过添加额外的功能来改进代码。装饰器通常以`@`符号紧跟着一个函数或者类来表示。装饰器可以用于函数、类、属性和方法。

### 类装饰器

类装饰器用于修饰类，可以添加额外的行为或者修改类的行为。它可以用于在类声明之前对类进行拦截、修改或者扩展，对类进行修饰。类装饰器的使用场景很多，比如日志记录、性能分析、权限控制等。举个例子，想象一个社交平台的用户类，可以使用类装饰器添加检查用户是否在线的功能：

```typescript
function checkOnline(target: any) {
  return class extends target {
    isOnline() {
      // 检查用户是否在线的逻辑
    }
  };
}

@checkOnline
class User {
  // 用户类的定义
}
```

### 属性装饰器

属性装饰器用于修饰类的属性，可以在属性声明之前对属性进行拦截、修改或者扩展。它可以在访问属性时执行特定的操作，比如验证输入、计算属性等。一个实际场景可以是一个购物车类中的商品数量属性装饰器：

```typescript
function validateQuantity(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = function () {
    return value;
  };

  const setter = function (newValue: number) {
    if (newValue < 0) {
      throw new Error("商品数量不能为负数。");
    }
    value = newValue;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class ShoppingCart {
  @validateQuantity
  quantity: number;
}
```

### 方法装饰器

方法装饰器用于修饰类的方法，可以在方法定义之前对方法进行拦截、修改或者扩展。它可以用于验证输入、记录日志等场景。举个例子，假设有一个订单类，可以使用方法装饰器添加日志记录功能：

```typescript
function log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`调用方法 ${methodName}，参数: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`方法 ${methodName} 返回值: ${JSON.stringify(result)}`);
    return result;
  };

  return descriptor;
}

class Order {
  @log
  calculateTotal() {
    // 计算订单总金额的逻辑
  }
}
```

### 解决痛点和实战案例

装饰器在 TS 中的作用非常重要，它可以帮助我们简化代码、增加功能，提高代码重用性和可维护性。以下是几个生活化场景的实例：

#### 1. 性能监测

想象你在开发一个电子游戏，你可以使用装饰器来检测某个方法的执行时间，以便帮助你优化性能。你可以创建一个方法装饰器，用于打印方法的执行时间：

```typescript
function performance(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`方法 ${methodName} 执行时间: ${end - start}ms`);
    return result;
  };

  return descriptor;
}

class Game {
  @performance
  play() {
    // 玩游戏的逻辑
  }
}
```

#### 2. 权限控制

假设你正在开发一个论坛系统，不同用户具有不同的权限。你可以使用类装饰器来检查用户的权限，并对一些敏感操作进行限制。以下是一个模拟的权限控制的例子：

```typescript
function checkPermission(permission: string) {
  return function (target: any) {
    const originalConstructor = target;

    const newConstructor = function (...args: any[]) {
      // 检查用户权限的逻辑
      if (!hasPermission(permission)) {
        throw new Error(`没有权限进行操作：${permission}`);
      }
      return new originalConstructor(...args);
    };

    newConstructor.prototype = originalConstructor.prototype;

    return newConstructor;
  };
}

@checkPermission("delete_post")
class Forum {
  deletePost(postId: string) {
    // 删除帖子的逻辑
  }
}
```

装饰器是 TS 中非常有用的特性，它可以帮助开发者在不修改原始代码的情况下，为代码添加功能和行为。通过使用装饰器，我们可以简化代码、增加功能，解决一些常见的痛点，如性能监测、权限控制等。希望这些例子能帮助你理解装饰器的作用和使用场景。
