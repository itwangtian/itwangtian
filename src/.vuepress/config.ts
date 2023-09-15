import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "程序员王天",
  description: "前端编程技术分享 itwangtian",
 
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
