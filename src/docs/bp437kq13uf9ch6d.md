---
title: 解决eslint和prettier冲突
urlname: bp437kq13uf9ch6d
date: "2023-10-09 10:41:40"
updated: "2023-10-09 12:16:19"
---

eslint 检测代码规范、pretter 修复代码格式，他们功能有一些重叠，配置不当情况下、比如 eslint 设置单引号、prettier 双引号，会导致编译执行错误，导致冲突，如何解决呢？

冲突本质原因是 eslint 和 prettier 并行导致，解决冲突的方法好几种：

1. 关闭冲突规则
2. 调整执行顺序
3. 手动调整-统一配置

## 关闭冲突规则

使用 eslint-config-prettier 插件来禁用 ESLint 中与 Prettier 冲突的规则。
该插件会将 Prettier 的规则应用到 ESLint 中，并自动禁用冲突的规则。您可以在 ESLint 配置文件中添加以下配置：

1. 安装 eslint-config-prettier：

```
npm install --save-dev eslint-config-prettier
```

2. 将 eslint-config-prettier 添加到您的 ESLint 配置中 – [eslintrc](https://eslint.org/docs/latest/use/configure/configuration-files)或[eslint.config.js](https://eslint.org/docs/latest/use/configure/configuration-files-new)

```
{
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  // 其他配置项
}
```

这样 ESLint 将使用 Prettier 的规则，并且禁用与其冲突的规则。

## 调整执行顺序

可以使用 eslint-plugin-prettier 插件将 Prettier 集成到 ESLint 中。该插件将在检查代码的同时自动应用 Prettier 的格式化规则，确保代码风格一致。
1、安装 eslint-plugin-prettier

```javascript
npm i eslint-plugin-prettier
```

2、将 prettier 放在最后，因为后面的配置项会覆盖前面的；

```
{
  "plugins": ["prettier"],

}
```

3、修改 rules，将 prettier 的规则配置写入 eslint，这样 eslint 会一同校验 prettier 规则

```

{
  "plugins": ["prettier"],
  "rules": {
      "prettier/prettier": "error",
      // 其他规则
    }

}
```

## 手动调整-统一配置

用手撸吧！将 prettier 和 eslint 配置设置一致即可
