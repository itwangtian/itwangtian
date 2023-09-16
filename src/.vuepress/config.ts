import { defineUserConfig } from "vuepress";
import theme from "./theme.js"; 
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/itwangtian/",
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
 
