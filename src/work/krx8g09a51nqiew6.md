---
title: vuepress主题自定义布局
urlname: krx8g09a51nqiew6
date: '2023-11-01 20:39:49'
updated: '2024-02-04 17:45:26'
cover: 'https://cdn.nlark.com/yuque/0/2023/png/1450835/1698843337475-4523e9e7-a01d-4dc1-a6d1-ce21beaece36.png'
description: 场景假如读者任意点开了王天的一篇文章，看完拖到文末、均显示王天的个人简介，如下图：如何实现呢？ 咱们可以通过配置替换主题组件+主题组件内置插槽的形式实现思路通过替换vuepress主题组件，来实现页面的自定义布局config.ts 配置 alias 替换主题组件主题组件内置插槽，提高开发效率步...
---
## 场景
假如读者任意点开了王天的一篇文章，看完拖到文末、均显示王天的个人简介，如下图：
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/983a2954dd7eeb9837c9a62c3e030973.png)
如何实现呢？ 咱们可以通过配置替换主题组件+主题组件内置插槽的形式
## 实现思路
通过替换vuepress主题组件，来实现页面的自定义布局

1. config.ts 配置 alias 替换主题组件
2. 主题组件内置插槽，提高开发效率
## 步骤
1、vuepress/config.ts文件，配置alias 将自定义组件替换系统组件

```typescript
// .vuepress/config.ts
import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  theme: hopeTheme(
    {
      // 主题选项
      // ...
    },
    { custom: true },
  ),

  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue",
    ),
  },
});

```
2 . 主题组件内置插槽

- 主题组件中内置插槽，可通过插槽来快速实现页面自定义，比如文末添加固定的作者简介、或者在导航栏定义广告、等等，都可以通过插槽来配置，减少代码量。

详细的主题组件、以及内置插槽，查看官网配置 [替换主题组件](https://theme-hope.vuejs.press/zh/guide/advanced/replace.html)

## 注意！
一定要打开主题自定义开关，否则插槽无效
 在theme.ts文件中 配置 hopeTheme()选项， 第二个参数，即行为选项。行为选项控制主题的行为。

![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/f19af135194f667f6748b85256405813.png)
