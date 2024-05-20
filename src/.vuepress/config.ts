import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'

import theme from "./theme.js"; 
import { searchProPlugin } from "vuepress-plugin-search-pro";
// 百度站点推送
import { searchConsolePlugin } from 'vuepress-plugin-china-search-console'
import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);

// 这里使用的是 vuepress主题 配置项
export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  theme,
  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope/components/NormalPage": path.resolve(
      __dirname,
      "./components/NormalPage.vue",
    ),
  },
   // 配置百度统计脚本，最终以script标签 插入header中
  head: [
    [
      'script', {
        type:'text/javascript',
        src:'https://hm.baidu.com/hm.js?ff5e95667789a353e9be4e467e13ff3a'
      }, 
    ]
    ,
    [   'script', {
      type:'text/javascript',
      src:'https://itwangtian.com/busuanzi.js'
    }, ]
   
  ],
  base: "/",
  lang: "zh-CN",
  title: "王天的web进阶指南",
  description: "前端编程技术分享！ itwangtian",

 
  plugins: [  

    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
    searchConsolePlugin({
      options:{
        baiduId:'ff5e95667789a353e9be4e467e13ff3a',
        autoPushBaiduSwitch:true,
        toutiaoAutoPushId: '021f3494cf7ec341c55b86f960d03bb13390792034b53ef0a4afbae14f863531fd5c4a3974f9cd3eeb674bde712b4782cc4f323247d55c2ed2efd47b7c83521adc648ee828d46e7d3689a9c59fd080f6'
      }
  }),
  ],
});
 
