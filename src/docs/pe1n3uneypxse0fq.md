---
title: 前端规范指南，让团队代码如出一辙！ESLint + Prettier + husky + lint-staged
urlname: pe1n3uneypxse0fq
date: "2023-07-17 15:39:46"
updated: "2023-09-12 10:31:19"
---

> 本文从两个方向出发：1、git 提交规范；2、代码风格统一

假如团队中的小伙伴在提交代码时没有遵循规范要求，例如只写了一个"修改"或"更新，这会给团队中其他小伙伴造成困扰呢，不得不花时间查看代码和推测逻辑。

不仅会浪费了时间和精力，可能会导致以下问题：

1. 可读性差
2. 维护困难
3. 变更历史不透明
4. 自动化工具的不兼容

如何统一代码风格，规范提交呢呢？ 推荐使用 ESLint + Prettier + husky + lint-staged

1、eslint ([https://www.npmjs.com/package/eslint)](https://www.npmjs.com/package/eslint))
代码检测工具，检测并提示错误或警告信息
2、 husky ([https://www.npmjs.com/package/husky)](https://www.npmjs.com/package/husky))
Git hooks 工具, 可以在执行 git 命令时，执行自定义的脚本程序
3 、 lint-staged ([https://www.npmjs.com/package/lint-staged)](https://www.npmjs.com/package/lint-staged))
对暂存区 (git add) 文件执行脚本 检测 校验
4、 prettier ([https://www.npmjs.com/package/prettier)](https://www.npmjs.com/package/prettier))
代码自动化格式化工具，更好的代码风格效果
建议安装 -prettierc [https://www.npmjs.com/package/prettierrc](https://www.npmjs.com/package/prettierrc)
快速生成 pretter 配置文件模板
【eslint 和 prettier 冲突解决】eslint-config-prettier ([https://www.npmjs.com/package/eslint-config-prettier)](https://www.npmjs.com/package/eslint-config-prettier))
5、 Commitizen ([https://github.com/commitizen-tools/commitizen)](https://github.com/commitizen-tools/commitizen))
生成符合规范化提交信息的工具
6、commitlint（[https://www.npmjs.com/package/@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)）
定义提交规则， 并检测内容是否符合定义的规范！

> 如项目中未有.gitgnore 文件，建议先创建 Git 忽略提交文件：

在项目跟目录创建一个 ".gitignore" 的文件来指定需要被忽略的文件或目录。
以下是一个简单的例子

```javascript
# git配置文件-忽略提交文件
# **/xx目录 忽略指定目录下的所有文件
**/node_modules
**/package-lock.json
```

# ESlint

eslint 是一个代码检测工具，用于检测代码中潜在的问题和错误，作用提高代码质量和规范。

## 安装步骤：

1、安装 eslint

```javascript
npm install eslint
```

2、快速构建 eslint 配置文件

```javascript
npm init @eslint/config
```

参考如下 gif 操作：
![](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/0b3e67594365cd8d5f5778e312c262f9.gif)
执行完成后，自动生成 eslint 配置文件`.eslintrc.js`
可在 `.eslintrc.js` 中配置 rules 定义校验规则

```javascript
    rules: {
         indent: ['error', 4], // 用于指定代码缩进的方式，这里配置为使用四个空格进行缩进。
        'linebreak-style': [0, 'error', 'windows'], // 用于指定换行符的风格，这里配置为使用 Windows 风格的换行符（\r\n）。
        quotes: ['error', 'single'], // 用于指定字符串的引号风格，这里配置为使用单引号作为字符串的引号。
        semi: ['error', 'always'], //用于指定是否需要在语句末尾添加分号，这里配置为必须始终添加分号。
        '@typescript-eslint/no-explicit-any': ['off'] // 用于配置 TypeScript 中的 "any" 类型的使用规则，这里配置为关闭禁止显式使用 "any" 类型的检查。
    }
```

# husky：

husky 是一个 Git 钩子（Git hooks）工具，它可以让你在 Git 事件发生时执行脚本，进行代码格式化、测试等操作。

常见的钩子

1. pre-commit：在执行提交操作之前触发。适合用于在提交代码之前运行代码检查、格式化等操作。
2. commit-msg：在提交消息（Commit Message）编写完成后触发。可用于验证提交消息的格式、添加自定义规范等。
3. pre-push：在执行推送操作之前触发。适合用于在推送代码前运行测试、构建或其他自动化流程。
4. pre-receive：在接收到推送操作之前触发。通常可用于在推送到远程仓库之前进行更严格的代码检查和验证。
5. prepare-commit-msg：在打开提交消息编辑器之前触发。可以用于自动生成提交消息、添加代码相关的信息等。
6. post-commit：在提交操作完成后触发。适合用于执行提交后的自动化流程、生成文档等。

具体的使用步骤如下：

## 安装

> 注意！husky 是 git 项目的钩子函数，确保当前项目有 .git 配置文件，如没有 建议 git init 初始化

1. 在项目根目录下运行以下命令安装 husky：

```
npm install husky --save-dev
```

2. 启用 git 钩子 输入以下命令

```javascript
npm pkg set scripts.prepare="husky install"
```

安装成功后会在 package.json 文件中 script 中生成命令

> 注意！如为自动生成需手动添加，将以下内容粘贴到 package.json 文件中

```javascript
// package.json
{
  "scripts": {
    "prepare": "husky install"
  }
}

```

3. 创建`.husky`目录，执行如下代码

```javascript
npm run prepare
```

如图，执行成功后，项目中生成一个 .husky 目录
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/aa3a425e15083a3264975b2fadff6cf0.png)

> 注意！如未生成 .husky 目录，推荐使用命令 `npx husky install`

## 创建 Git 挂钩

### pre-commit

在 Git 提交之前做`eslint` 语法校验 。

#### 1、创建钩子脚本文件

```javascript
npx husky add .husky/pre-commit "npm test"
```

执执行成功，.husky 目录多出一个 pre-commit 文件
![1G4XQYMS(L9[LGM9_NG}2)M.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/5bfc5d37f2ce1a6d2443673fe92ee608.png)

> 注意！`window`电脑输入后，可能会报错如下

```javascript
Usage:
  husky install [dir] (default: .husky)
  husky uninstall
  husky set|add <file> [cmd]
```

解决方式，删除 "npm test" 重新执行

```javascript
npx husky add .husky/commit-msg
```

#### 2、配置代码检测

git 提交前，执行 pre-commit 钩子脚本，进行校验代码语法、格式修复等操作。

1、打开 pre-commit 文件，内容如下：

```javascript
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
```

2、下方代码添加到 pre-commit 文件中。`lint-staged`模块， 用于对 git 暂存区检测

```javascript
npx --no-install lint-staged
```

> `npx --no-install lint-staged` 是一个命令，用于在不安装 lint-staged 的情况下运行该工具。`npx --no-install` 命令用于从远程下载并执行指定的命令。

下一个章节会详细介绍 `lint-staged`的作用和使用步骤

# lint-staged

- 作用：lint-staged 可以让你在 Git 暂存（staged）区域中的文件上运行脚本，通常用于在提交前对代码进行格式化、静态检查等操作。
- 使用方式：你可以在项目中使用 lint-staged 配合 husky 钩子来执行针对暂存文件的脚本。具体的使用步骤如下：

在项目根目录下运行以下命令安装 lint-staged：

```
npm install lint-staged --save-dev
```

在 `package.json` 文件中添加以下配置：

```json
{
  "lint-staged": {
    // src/**/*.{js,jsx,ts,tsx} 校验暂存区、指定目录下的文件类型
    // 校验命令，执行 eslint 、prettier
    "src/**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"]
  }
}
```

- `"src/**/*.{js,jsx,ts,tsx}"` 是指定要针对的暂存文件模式，你可以根据自己的项目需求来配置。
- `["prettier --write","eslint --fix"]`为校验命令，可执行 eslint 、prettier 等规则

# prettier

prettier 是一个代码格式化工具。prettier 与上述 husky 和 lint-staged 搭配使用，可以在提交代码之前自动格式化代码。具体的使用步骤如下：

在项目根目录下运行以下命令安装 prettier：

```
npm install prettier --save-dev
```

创建 `.prettierrc.js` 文件，并定义你想要的代码样式，例如：

```javascript
module.exports = {
  semi: true, //强制在语句末尾使用分号。
  trailingComma: "none", //不允许在多行结构的最后一个元素或属性后添加逗号。
  singleQuote: true, //使用单引号而不是双引号来定义字符串。
  printWidth: 120, //指定每行代码的最大字符宽度，超过这个宽度的代码将被换行
  tabWidth: 4, //指定一个制表符（Tab）等于多少个空格。
};
```

这里的配置选项根据你的需求定义，具体选项可以参考 [prettier 文档](https://prettier.io/docs/en/options.html)。
在 lint-staged 的配置中添加 `"prettier --write"`，例如：

```json
{
  "lint-staged": {
    // src/**/*.{js,jsx,ts,tsx} 校验暂存区、指定目录下的文件类型
    // 校验命令，执行 eslint 、prettier
    "src/**/*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"]
  }
}
```

这样当你进行 GIT 提交操作时，lint-staged 将自动运行 prettier 来格式化符合规则的文件。

> prettier 如不集成 lint-staged 中，可单独执行重新校验
> `prettier --write [文件路径/模式]`
>
> 1. 格式化单个文件：指定文件的完整路径，例如 prettier --write src/index.js。
> 2. 格式化特定文件类型：使用文件模式匹配需要格式化的文件。例如，prettier --write "src/\*_/_.js"会格式化 src 目录下的所有 JavaScript 文件。

### 配置 ctrl + s ，自动保存功能

第一种，在 vscode 设置里面配置
点击 Vscode 的设置=>工作区=>文本编辑器
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/268dad124034f5a656244577dfc24089.png)

# Commitizen

是一个命令行工具，用于以一致的方式编写规范的提交消息。在使用 Commitizen 之前，你需要安装 Commitizen 及其适配器。

## cz-conventional-changelog

是 Commitizen 的一个适配器，它实现了符合约定式提交（Conventional Commits）规范的提交消息。该规范定义了提交消息的格式和结构，并推荐了一些常用的提交类型和范围。

## 安装和使用步骤：

1、确保你的项目已经初始化并安装了 npm 或 yarn。
2、打开命令行终端，并在项目根目录下运行以下命令来安装 `commitizen` 和 `cz-conventional-changelog`：
使用 npm：

```
npm install --save-dev commitizen cz-conventional-changelog
```

使用 yarn：

```javascript
yarn add --dev commitizen cz-conventional-changelog
```

3、安装完成后，在 `package.json` 中添加一个 `config.commitizen` 的字段，并设置它的值为 `cz-conventional-changelog`。
示例如下：

```json
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
}
```

在 `package.json` 中的 `scripts` 字段中添加一个 `commit` 的命令。
示例如下：

```json
"scripts": {
  "commit": "git-cz"
}
```

4、这将允许你使用 `npm run commit` 或 `yarn commit` 命令来进行交互式的提交。

现在，你可以使用 `npm run commit` 或 `yarn commit` 命令来进行提交。这将打开一个交互式的界面，引导你填写提交消息。

**案例如下：**
1、提交修改文件

```javascript
git add .
```

2、开始交互式提交，填写规范信息

```javascript
npm run commit
```

3、选择提交类型

```javascript
? Select the type of change that you're committing: (Use arrow keys)
> feat:     A new feature //新功能
  fix:      A bug fix //错误修复
  docs:     Documentation only changes //仅文档更改
  style:    [样式]Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: [重构] A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
```

4、根据提示填写内容，可选择空格跳过

```javascript
? What is the scope of this change // 此更改的范围是什么
? Write a short, imperative tense description of the change//【必填】 简短的描述这个变化
? Provide a longer description of the change//提供变更的详细说明：
? Are there any breaking changes? //有什么突破性的变化吗？【y/n】
? Does this change affect any open issues? (y/N) //此更改是否会影响任何悬而未决的问题（是/否）

// 完成提交，输出打印日志：
[master 2cf55e0] docs: 修改commitzen文档
 1 file changed, 2 insertions(+), 2 deletions(-)


```

当你完成提交消息后，Commitizen 会自动生成符合规范的提交消息，并将其添加到 Git commit 中。
根据 `cz-conventional-changelog` 的规范，提交消息需要包括类型（type）、范围（scope）、简短的描述（subject）和可选的详细描述（body）。
参考
[https://blog.csdn.net/fightingLKP/article/details/126695679](https://blog.csdn.net/fightingLKP/article/details/126695679)

## commitlint（可忽略）

作用：Commitlint 是一个用于校验提交信息格式的工具。它通过定义一组规则来检查提交信息是否符合指定的约定，比如要求提交信息的首行必须以特定类型开头，自定义字符长度限制等。
使用方式：在项目中配置 Commitlint 规则，然后在提交代码时，Commitlint 会自动校验提交信息是否符合规定的格式。

Commitlint 提供了一些常用的规则，用于检查和约束提交信息的格式和内容。以下是一些常用的 Commitlint 规则示例：
先安装依赖

```javascript
npm i @commitlint/cli
```

在项目根目录创建， commitlint.config.js 文件

1.  `type-enum`: 检查提交消息的类型是否在预定义的列表中选择。

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "chore", "style", "refactor", "test", "revert"],
    ],
  },
};
```

在上面的示例中，规定了允许的提交类型为 `feat`, `fix`, `docs`, `chore`, `style`, `refactor`, `test`, `revert`。

2.  `scope-enum`: 检查提交消息的作用域（scope）是否在预定义的列表中选择。

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["frontend", "backend", "database"]],
  },
};
```

在这个示例中，规定了允许的作用域为 `frontend`, `backend`, `database`。

3.  `subject-max-length`: 检查提交消息的主题部分（subject）的最大长度。

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-max-length": [2, "always", 100],
  },
};
```

在这个示例中，规定了提交消息主题的最大长度为 100 个字符。

以上只是一些常用的 Commitlint 规则示例，你可以根据项目的需求进行自定义设置。在配置文件中，使用 `rules` 属性来定义规则，并根据需要设置规则的级别（0、1、2）、决策逻辑（'always'、'never'）和参数值（例如类型、最大长度等）。

# 解决 eslint 和 prettier 冲突

有时，ESLint 的规则和 Prettier 的规则可能存在冲突，导致代码格式化不一致。使用 eslint-config-prettier 可以关闭 ESLint 中与 Prettier 冲突的规则。

```javascript
npm i  eslint-config-prettier eslint-plugin-prettier -D
```

- eslint-config-prettier ：关闭 eslint 中与 prettier 相互冲突的规则。
- eslint-plugin-prettier : 允许 eslint 用 prettier 格式化代码的能力。 安装依赖并修改.eslintrc 文件

在 `.eslintrc.js` 文件中，在`extends`配置基础上，追加内容

```javascript
// .eslintrc
{
   //
 - "extends": ["eslint:recommended"] // 原先配置
 + "extends": ["eslint:recommended",  "prettier"] // 添加配置
  // 其余的配置
}
```

同理，`plugins` 配置基础上，追加 `prettier`

```javascript
"plugins": [
        "@typescript-eslint",
        "react","prettier" // 添加prettier插件
    ],
```

# 常见报错

## @typescript-eslint/dot-notation

### 错误日志：

Error: Error while loading rule '@typescript-eslint/dot-notation':
You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.

### 错误原因：

这个错误是由于在使用 @typescript-eslint/dot-notation 规则时，没有为 @typescript-eslint/parser 提供正确的 parserOptions.project 属性值引起的。

### 解决方式：

eslint 配置文件中，设置一个有效的 parserOptions.project ，指向你的 TypeScript 配置文件（tsconfig.json）。

```javascript
parserOptions: {
    project: './tsconfig.json',
  },
```

## @typescript-eslint" uniquely.

### 错误日志：

ESLint couldn't determine the plugin "@typescript-eslint" uniquely.

### 解决方式:

1、重新安装 eslint 相关依赖

```javascript
npm cache clean --force //先清除缓存依赖
```

```javascript
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier
```

2、`.eslintrc.js` 文件，配置 root：true

> root 被设置为 true 时，ESLint 使用当前配置文件作为根配，将停止在父级目录中查找其他配置文件。![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/fc5536b74d92da34bf6d018c9a82cd25.png)

## Warning: React version not specified

使用了 eslint-plugin-react 插件，未在配置文件中指定 React 版本，会遇到下述警告信息。
Warning: React version not specified in eslint-plugin-react settings. See [https://github.com/jsx-eslint/eslint-plugin-react#configuration](https://github.com/jsx-eslint/eslint-plugin-react#configuration) .
在 `.eslintrc.js`添加声明

```javascript
"settings": {
        "react": {
          "version": "detect" //detect 自动检测react版本
        }
      },
```
