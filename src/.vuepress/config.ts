import { defineUserConfig } from "vuepress";
import theme from "./theme.js"; 
import { searchProPlugin } from "vuepress-plugin-search-pro";

// 这里使用的是 vuepress主题 配置项
export default defineUserConfig({
   // 配置百度统计脚本，最终以script标签 插入header中
  head: [
    [
      'script', {
        type:'text/javascript',
        src:'https://hm.baidu.com/hm.js?ff5e95667789a353e9be4e467e13ff3a'
      }, 
    ]
  ],
  base: "/",
  lang: "zh-CN",
  title: "王天的web进阶之路",
  description: "前端编程技术分享 itwangtian",
  theme, 
 

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
  ],
});
 
