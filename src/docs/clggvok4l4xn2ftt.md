---
title: vscode 插件合集
urlname: clggvok4l4xn2ftt
date: "2023-08-23 08:45:05"
updated: "2023-10-13 16:02:30"
---

# ![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/3f3b667674708d02c7a0cc83390a84ac.png)

# ES7+ React/Redux/React-Native snippets

提供了一组代码片段和快捷方式，用于快速开发 React、Redux 和 React Native 应用。可以快速导入 React、Redux 相关的模块，自动生成组件的 PropTypes 类型检查等等。这些功能可以节省你在编辑器中的时间和精力，帮助你更专注于实际的开发任务。

# ESlint

校验代码语法，自动修复

# **React Redux Toolkit RTK Query Snippets**

redux-toolkit 代码片段合集

## 无法安装怎么办？

:::warning
注意！如 vscode 版本太低，会导致无法安装，需要自定义新建代码片段
:::

- 【推荐】升级 vscode 版本
- 【无法升级版本】自定义 vscode 代码片段

1、打开 vscode 快捷键 `ctrl+shift+p`
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/bd6b4590e282a40daca19db975ef71fb.png)
2、新建代码片段
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/c27a83a46e12380ab0c9266375a41def.png)
3、输入代码片段的文件名，名称自定义
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/7fc180b37f62ce23b60d260e8c7fe987.png)
4、输入名称后回车，自动生成一个`.code-sinppets`后缀名的文件，我们在此文件定义代码片段
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/230944ac8f3e437012046fc6eb267aa9.png)
如下是 redux-slice 代码片段，复制，粘贴替换到`.code-sinppets`后缀名的文件

```json
{
  "Redux Toolkit Slice": {
    "prefix": "srtslice",
    "body": [
      "import { createSlice } from \"@reduxjs/toolkit\";",
      "",
      "const ${1:sliceName} = createSlice({",
      "    name: \"${1:sliceName}\",",
      "    initialState: {},",
      "    reducers: {",
      "        invalidate: (state, { payload }) => {",
      "            payload.forEach(item => {",
      "                state[item] = false;",
      "            });",
      "        },",
      "    },",
      "    extraReducers: builder => builder",
      "        .addCase(${2:actionName.pending}, (state, { payload }) => {",
      "            state.loading = true;",
      "        })",
      "        .addCase(${2:actionName.fulfilled}, (state, { payload }) => {",
      "            state.loading = false;",
      "        })",
      "        .addCase(${2:actionName.rejected}, (state, { payload }) => {",
      "            state.loading = false;",
      "            state.error = payload;",
      "        })",
      "});",
      "",
      "export const { invalidate } = ${1:sliceName}.actions;",
      "export default ${1:sliceName}.reducer;"
    ],
    "description": "Redux Toolkit slice template"
  }
}
```

# ESLint Chinese Rules

eslint 中文规则提示插件
