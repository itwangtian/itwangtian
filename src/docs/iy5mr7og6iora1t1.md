---
title: class 类
urlname: iy5mr7og6iora1t1
date: "2023-07-21 10:24:43"
updated: "2023-08-15 15:56:03"
---

`class` 相当于 es5 中升级版的构造函数

> class 中无需用“ ，” 分割 ， 添加会执行报错

```typescript
class People {
  name: string = "张三";
  // 1、属性除了可以定义在constructor中，也可以定义在最顶部
  age: number = 18; // 年龄
  sex: boolean = true; // 为true 性别男
  // 2、static 设置为（静态）私有属性，在class本身的属性，并不是实例对象中的属性
  static address: string = "北京顺义";
  // 3、constructor()方法是类的默认方法，
  // 通过new命令生成对象实例时，自动调用该方法。
  // 一个类必须有constructor()方法，如果没有显式定义， 一个空的constructor()方法会被默认添加。
  // 属性是实例对象自身的属性，而不是定义在实例对象的原型上面。
  constructor(sex, age) {
    this.sex = sex;
    this.age = age;
  }
  // 4、类的实例属性、方法默认定义在原型class上，使用this.可以定义在对象上
  hi() {
    return `你好呀 ${this.name}, 你今年 ${this.age} 岁啦，你是一个 ${
      this.sex ? "男生" : "女生"
    }，住在 ${People.address}`;
  }
}
// 5、继承 People ,创建一个新的calss 类
class Lisi extends People {
  constructor(sex, name) {
    super(true, name);
    console.log(this.name);
  }
  // 在原先基础上，新增一个setName 方法来修改name名称
  setName(name: string): string {
    this.name = name;
    console.log("super-sex", this.sex);
    // 6、在 ES6 中，super 是一个关键字，用于在子类中调用父类的构造函数和方法。
    return super.hi();
  }
}
// 7、类必须使用new调用，否则会报错。
// 这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
const zhangSan = new People(false, 19);
const zhangHi = zhangSan.hi();
const liHi = new Lisi(false, 29).setName("李四");
console.log("zhangHI", zhangHi);
console.log("liHi", liHi);

// 8、存取器 使用 getter 和 setter 可以改变属性的赋值和读取行为：
// 和vue中的computed 计算属性异曲同工，用与计算转换等操作
// vue中的计算属性 有缓存、和数据依赖
class Animal {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return "Jack";
  }
  set name(value) {
    console.log("setter: " + value);
  }
}

const a = new Animal("Kitty"); // setter: Kitty
a.name = "Tom"; // setter: Tom
console.log("存取器：", a.name); // Jack
```

# 【typescript 中新特性】

```typescript
//1、 修饰符
// public 公共
// private 私有
// protected 保护,与private类似，区别在于protected可以在子类访问
class TypePeople {
  public name: string; // 公共
  private age: number = 19; // 外部不可访问\
  protected address: string = "北京顺义区"; // 仅在 子类可用
  public constructor(name) {
    this.name = name + this.age;
  }
}
class childrenPeople extends TypePeople {
  constructor(name) {
    super(name + " 🐂 ");
  }
  getAddress() {
    return `hi ${this.name} 你家在 ${this.address}`;
  }
}
const newPeople = new TypePeople("谢广坤");
const newChildren = new childrenPeople("谢飞机");
console.log(newPeople.name, newChildren.getAddress());
// 继承 - 看第5序章
// 抽象类 abstract
// abstract 用于定义共同的方法和属性，抽离到抽象类, 特性可以被继承，不可被实例化。
// 使用抽象类的好处是它提供了一种通用的方式来定义父类，以及要求子类遵循规定并提供自己的实现。

// 【案例】
// 假设你正在写一个动物园管理系统，你有不同类型的动物，例如狗、猫和鸟。每种动物都有一些共同的属性和行为，例如它们都有名字和年龄，它们都可以发出叫声。
// 在这种情况下，你可以使用抽象类来定义一个叫做 "Animal" 的类作为基类。这个抽象类可以包含共同的属性和方法，如下所示：

abstract class AnimalNew {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract makeSound(): void;
}

// 在这个例子中，"AnimalNew" 类是一个抽象类。它定义了两个属性：name 和 age，以及一个抽象方法 makeSound()。

// 现在你可以创建动物的具体子类，例如狗、猫和鸟，并实现它们自己的特殊行为。下面是一个示例：

class Dog extends AnimalNew {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Woof!");
  }
}

class Cat extends AnimalNew {
  color: string;

  constructor(name: string, age: number, color: string) {
    super(name, age);
    this.color = color;
  }

  makeSound(): void {
    console.log("Meow!");
  }
}
// 在这个例子中，Dog 类和 Cat 类都继承自 AnimalNew 抽象类，并且实现了 makeSound() 方法。

// 使用抽象类的好处是它提供了一种通用的方式来定义父类，以及要求子类遵循规定并提供自己的实现。在上述例子中，所有的动物都有共同的属性和方法，但每种动物的具体实现是不同的。

// 这样，你可以创建不同类型的动物对象，并调用它们的方法，例如：

const dog = new Dog("旺财", 3, "柯基");
dog.makeSound(); // 输出：Woof!

const cat = new Cat("小咪", 2, "灰色");
cat.makeSound(); // 输出：Meow!
```

抽象类是 TypeScript 中的一种特殊类，它不能直接被实例化，只能被其他类继承或实现。抽象类主要用于定义一些共享的属性和方法，并且可以声明一些抽象方法，这些抽象方法必须在子类中被实现。

例如，如果我们有多个动物类，它们都需要具备某些共同的属性和方法，但每个动物又有自己独特的行为，这时候可以使用抽象类来定义共享的特征和抽象方法，让各个派生类实现自己的行为

```typescript
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;

  move(distance: number) {
    console.log(`${this.name}移动了${distance}米。`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name}汪汪叫。`);
  }
}

class Cat extends Animal {
  makeSound() {
    console.log(`${this.name}喵喵叫。`);
  }
}

const dog = new Dog("旺财");
dog.makeSound(); // 输出：旺财汪汪叫。
dog.move(10); // 输出：旺财移动了10米。

const cat = new Cat("咪咪");
cat.makeSound(); // 输出：咪咪喵喵叫。
cat.move(5); // 输出：咪咪移动了5米。
```
