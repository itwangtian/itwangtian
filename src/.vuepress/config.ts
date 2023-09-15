import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/itwangtain/itwangtain/",

  lang: "zh-CN",
  title: "王天的web进阶之路",
  description: "前端编程技术分享 itwangtian",
 
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
