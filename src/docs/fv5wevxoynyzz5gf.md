---
title: 接口
urlname: fv5wevxoynyzz5gf
date: "2023-07-21 10:22:57"
updated: "2023-08-16 11:28:21"
---

### 1、介绍：

TypeScript 中的接口（Interface）用于定义对象的结构和类型。接口类似于制定一份合同或规范，描述了对象应该具有的属性、方法等特征，但并不提供具体的实现。

### 2、接口初探：

接口定义了对象应该具备的属性和方法。例如，我们可以定义一个`Person`接口来描述一个人的基本信息：

```typescript
interface Person {
  name: string;
  age: number;
}
```

示例代码：

```typescript
let person: Person = {
  name: "Alice",
  age: 25,
};
```

### 3、可选属性：

接口的属性可以是可选的，即在对象中可以存在也可以不存在。使用`?`来标记可选属性。例如，我们可以将年龄属性改为可选：

```typescript
interface Person {
  name: string;
  age?: number;
}
```

示例代码：

```typescript
let person1: Person = {
  name: "Alice",
};

let person2: Person = {
  name: "Bob",
  age: 30,
};
```

### 4、只读属性：

接口的属性可以设置为只读，即在对象创建后不可修改。使用`readonly`关键字来标记只读属性。例如，我们可以将姓名属性设置为只读：

```typescript
interface Person {
  readonly name: string;
  age?: number;
}
```

示例代码：

```typescript
let person: Person = {
  name: "Alice",
  age: 25,
};

person.name = "Bob"; // 错误，只读属性不可修改
```

### 5、额外的检查属性：

当我们将一个对象赋值给接口类型的变量时，TypeScript 会对该对象进行额外的检查，确保对象中没有未定义的属性。如果我们确实需要将额外的属性赋给对象，可以使用索引签名。例如：

```typescript
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}
```

示例代码：

```typescript
let person: Person = {
  name: "Alice",
  age: 25,
  gender: "female", // 额外的属性，使用索引签名允许赋值
};
```

### 6、函数类型：

接口不仅可以描述对象的结构，还可以描述函数的类型。例如，我们可以定义一个接口来描述一个求和函数：

```typescript
interface Calculator {
  (a: number, b: number): number;
}
```

示例代码：

```typescript
let add: Calculator = function (a, b) {
  return a + b;
};
```

### 7、可索引的类型：

接口可以描述具有索引签名的对象，例如数组或字典。索引签名允许我们使用不同的索引类型来访问对象的属性。例如，我们可以定义一个字符串数组的接口：

```typescript
interface StringArray {
  [index: number]: string;
}
```

示例代码：

```typescript
let colors: StringArray = ["red", "green", "blue"];
let color: string = colors[0];
```

### 8、类类型：

接口可以用来描述类的结构和实现，类可以实现（implement）接口并满足接口的要求。例如，我们可以定义一个接口描述一个时钟类：

```typescript
interface Clock {
  currentTime: Date;
  setTime(date: Date): void;
}

class DigitalClock implements Clock {
  currentTime: Date;

  constructor(date: Date) {
    this.currentTime = date;
  }

  setTime(date: Date) {
    this.currentTime = date;
  }
}

class AnalogClock implements Clock {
  currentTime: Date;

  constructor(date: Date) {
    this.currentTime = date;
  }

  setTime(date: Date) {
    this.currentTime = date;
  }
}
```

示例代码：

```typescript
let digitalClock = new DigitalClock(new Date());
let analogClock = new AnalogClock(new Date());
```

### 9、继承接口：

接口可以继承其他接口，从而组合多个接口的特性。继承可以帮助我们更好地组织和重用代码。例如：

```typescript
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}
```

示例代码：

```typescript
let square: Square = {
  color: "red",
  sideLength: 10,
};
```

### 10、混合类型：

接口可以描述具有多种类型的对象，这些对象可以同时具备函数、属性等特征。这样的接口被称为混合类型接口。例如，我们可以定义一个具有倒计时功能和属性的接口：

```typescript
interface Counter {
  (): void;
  count: number;
}
```

示例代码：

```typescript
function createCounter(): Counter {
  let count = 0;
  const counter = () => {
    count++;
    console.log("Count: ", count);
  };
  counter.count = count;
  return counter;
}

let counter = createCounter();
counter(); // 输出：Count: 1
counter(); // 输出：Count: 2
console.log(counter.count); // 输出：2
```

### 11、接口继承类：

接口可以继承类的成员，但不继承其实现。这样可以使用接口来约束类的结构，使其他类可以通过实现该接口来满足特定的要求。例如：

```typescript
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}
```

示例代码：

```typescript
class Button extends Control implements SelectableControl {
  select() {
    console.log("Button selected.");
  }
}
```

总之，接口在 TypeScript 中起到了约束和规范的作用，使代码更加可靠、可维护。通过使用接口，我们可以明确定义对象的结构、类的实现以及函数的类型，从而提高代码的可读性和可靠性。
