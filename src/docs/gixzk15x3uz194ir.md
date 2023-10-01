---
title: tsconfig.json 配置文件详解 | 02
urlname: gixzk15x3uz194ir
date: "2023-08-11 17:10:06"
updated: "2023-09-04 19:06:50"
---

# tsconfig.json (Ts 配置文件)

`tsconfig.json` 是 ts 项目中配置文件。在项目根目录，如果项目中有 `tsconfig.json`, `TypeScript`   则认为这是项目的根目录。

如果项目源码是 `JavaScript`，但是相用 `typescript` 处理，那配置文件的名字是`jsconfig.json` ,和 `tsconfig` 的写法一样。

## 指定 `tsconfig.json` 目录

命令行参数--project 或-p 可以指定 tsconfig.json 的位置（目录或文件皆可）。

如果不指定 `tsconfig.json`, `tsc` 会在当前目录搜索 `tsconfig.json` 文件，如果不存在，就到上一级目录搜索，直到找到为止。

`tsconfig.json` 文件格式，是一个 JSON 对象，简单到只可以放一个空对象 `{}`, 示例如下：

```typescript
{
    "compilerOptions":{
        "outDir":"./built",
        "allowJs":true,
        "target":"es5"
    },
    "include":["./src/**/*"]
}
```

`tsconfig.json` 文件中有很多属性，这样简单说下上面四个属性的含义

- `outDir` 指定编译文件存放的目录
- `allowJs` 指定源目录的 `JavaScript` 文件是否原样拷贝到编译后的目录
- `target` 指定编译产物的 js 版本
- `include` 指定那些文件需要编译

`tsconfig.json` 文件可以不必手写，使用 tsc 命令的 `--init` 参数自动生成

```typescript
tsc --init
```

# tsconfig 一级属性

tsconfig.json 的一级属性并不多，只有很少几个，但是 compilerOptions 属性有很多二级属性。

先介绍下一级属性

## 1、include

`include` 属性指定所要编译的文件列表，既支持逐一列出文件，也支持通配符。文件位置相对于当前配置文件而定。

```typescript
{
  "include": ["src/**/*", "tests/**/*"]
}
```

include 属性支持三种通配符。

- ?：指代单个字符
- \*：指代任意字符，不含路径分隔符
- \*\*：指定任意目录层级。

如果不指定文件后缀名，默认包括.ts、.tsx 和.d.ts 文件。如果打开了 allowJs，那么还包括.js 和.jsx。

## 2、exclude

`exclude` 属性是一个数组，必须与 `include` 属性一起使用，用来从编译列表中去除指定的文件，同样支持和 `include` 属性相同的通配符。

```typescript
{
    "include":["**/*"], // 指定那些文件需要编译
    "exclude":["**/*.spec.ts"] // 从编译列表中去除指定文件
}
```

## 3、extends

如果一个项目有多个配置文件，可以将共同的配置写在 `tsconfig.base.json` `tsconfig.json` 可以继承另一个 `tsconfig.json` 文件的配置,这样方便维护。

```typescript
{
    "extends":"../tsconfig.base.json"
}
```

如果 `extends` 属性指定的路径如不是以`./` 或者 `../`开头，那么编译器将在`node_modules` 目录下查找指定的配置文件。

`extends` 属性也可也继承已发布的 npm 模块里面的 tsconfig 文件

```typescript
{
    "extends":"@tsconfig/node12/tsconfig.json"
}
```

`extends` 指定的 `tsconfig.json` 会先加载，然后加载当前的 `tsconfig.json` 。如果两者有重名的属性，后者会覆盖前者。

## 4、files

`files` 属性指定编译的文件列表，如果其中一个文件不存在，就会报错。
它是一个数组，排在前面的文件先编译。

```typescript
{
    "files":["a.ts","b.ts"]
}
```

该属性必须逐一列出文件，不支持文件匹配，如果文件比较多建议使用 `include` 和 `exclude` 属性。

## 5、references

`references` 属性是一个数组，数组成员为对象，适合一个大项目由多个小项目构成的情况，用来设置需要引用的底层项目。

```typescript
    {
        "references":[
            {"path":"../pkg1"},
            {"path":"../pkg2/tsconfig.json"}
        ]
    }
```

# lesson 1 实战

1. 1. 使用 create-react-app project --template typescript 创建脚手架

```javascript
 create-react-app project --template typescript
```

2. 2. 正确生成 tsConfig.json 文件 tsc --init

```javascript
tsc --init // 使用上面脚手架创建后，项目中自动生成tsconfig.json 文件
```

3. 3. 正确配置打包 dist 命令

先创建 config 配置目录，输入以下命令

```javascript
npm eject
```

打开 config 目录，config/paths.js 更改打包目录为 dist
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/26df3f464b8fe8c706df4513b0503171.png)

4. 4. 正确配置 ts 文件监听

![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/bde677ce7b67a9addfb9d298b528afd0.png)

5. 5. 配置打包出口文件

```javascript
// 如上和第三题一样
```

6. 6. 配置 incloude 以及 excloude

```javascript
{
  "include":["src/**/*"], //指定所要编译的文件列表
  "exclude": ["**/*.spec.ts"]//从编译列表中去除指定的文件
}
```

7. 7. 用 ts 语法声明一个枚举示例

```javascript
enum user{
  age,
  name,
  sex
}
```

8. 8. 定义类型不可使用 any；

```javascript
// 不要用any any any！！！
```

9. 9. 写出 ts 的基础类型 以及 ts 新增类型 写明注释

```javascript
// 布尔值
let isDone: boolean = false;

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let name: string = `Gene`;
let sentence: string = `Hello, my name is ${name}.`;

// 数组
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]; // 数组泛型，Array<元素类型>

// 元组 Tuple
let x: [string, number];
x = ["hello", 10];
```

10. 10. 自行定义 ts 的元组类型

```javascript
// 定义一个具有固定长度为2的元组类型
type MyTuple = [string, number];

// 声明一个变量并指定其类型为自定义的元组类型
let myTuple: MyTuple;

// 初始化元组变量
myTuple = ["hello", 123]; // 正确
myTuple = ["world", 456];
```

11. 11. 实现元组数据存在多种类型的定义

```javascript
//myTuple 是一个包含三个元素的元组。第一个元素的类型是 number，第二个元素的类型是 string，第三个元素的类型是 boolean。
let myTuple: [number, string, boolean] = [42, "Hello", true];
```

12. 12. 简单实现去重效果[1,1,1,2,2,2,3]=>[1,2,3]

```javascript
// 最快速去重 new set() ,注意 set只能去除基本类型，无法去重引用类型，如对象，因为应用类型值相同无法去重

new Set([1, 1, 1, 2, 2, 2, 3]);
```

13. 13. 正确实现函数调用且正确给出函数返回值的类型

```javascript
const add = (a: number, b: number): number => {
  return a + b;
};
```

14. 14. 正确实现效果无 bug；

```javascript
不要出bug！！！！！
```

15. 15. 添加必要的思路注释

```javascript
记得写下代码注释，比如声明一个包含xx类型的数据结构
```

16. 16. 录制效果视频正确讲解并标黄；
