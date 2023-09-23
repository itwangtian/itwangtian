---
title: vuepress 绑定百度统计
urlname: zvsz9k2qhrkgo0ki
date: "2023-09-18 18:27:33"
updated: "2023-09-22 22:32:36"
---

> 本篇教程适用于 vuepress2 版本

注册百度统计
[https://tongji.baidu.com/](https://tongji.baidu.com/)
注册成功后，打开网站列表
[https://tongji.baidu.com/main/setting/10000320023/home/site/index](https://tongji.baidu.com/main/setting/10000320023/home/site/index)
如下，新增网站配置
![image.png](https://raw.githubusercontent.com/itwangtian/itwangtian/images/a51c6a38c454d04ed9d2cb616572acec.png)
新增站点
![image.png](https://raw.githubusercontent.com/itwangtian/itwangtian/images/168c31ee2d426f9cfb06ae9590283de4.png)

获取代码 ，插入博客中，用于站点与百度统计互联
![image.png](https://raw.githubusercontent.com/itwangtian/itwangtian/images/7c283bcf4fcb812251df55543c269fd3.png)
配置流程如下：
![image.png](https://raw.githubusercontent.com/itwangtian/itwangtian/images/c2f1809507fc3cdfd475784855639555.png)
:::warning
注意！
在配置统计代码时，查看了多个教程，都是以代码块的方式配置，但是本地运行创建标签出错，导致统计代码运行失败

:::

```powershell
module.exports = {
    head: [
      [
        'script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxxxxx";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
        </script>
        `
      ]
    ]
}
```

经过尝试后，直接使用 vuepress 中的 head 配置，来生成一个 script 标签，插入 header 中即可，不存在异步创建标签问题。

```typescript
export default defineUserConfig({
  head: [
    [
      "script",
      {
        type: "text/javascript",
        src: "https://hm.baidu.com/hm.js?ff5e95667789a353e9be4e467e13ff3a",
      },
    ],
  ],
});
```

head 配置参数
第一个参数：标签名称 -script 标签
第二个参数：标签配置项- type 类型为'text/javascript'，src 为百度统计代码访问地址
第三个三次：代码块 、可忽略

检测效果
注意，通过 js 方式链接百度统计，代码检查无法检查到
官方说法：

- .如果通过 js 文件调用的方式安装统计代码，由于无法直接在网站页面中找到统计代码，会提示“未检测到代码”，建议您使用 [百度统计助手](https://tongji.baidu.com/web/help/article?id=317&type=0) 进行检测；

需要通过百度统计助手检测，安装地址 →
安装插件后检测，此时提示站点已安装统计助手，咱们后续登录百度统计后台，就能查看博客数据啦
![image.png](https://raw.githubusercontent.com/itwangtian/itwangtian/images/93197ec4bf6c1abfae6ac79cec69376e.png)
等待

### 1.4 等待

如果百度统计插件助手提示安装成功，一般需等待 20 分钟左右，可登录后台查看数据
注意！以 js 方式介入百度统计，代码安装检测无法识别
![image.png](https://raw.githubusercontent.com/itwangtian/itwangtian/images/5f7a0ec82e99b96c20dc8b77859e88c4.png)没关系，百度插件助手提示接入成功就行，
如下，打开统计后台，咱们就能看到本地访问的实时记录
![image.png](https://raw.githubusercontent.com/itwangtian/itwangtian/images/045a9375434502992ab0465e12ca93fe.png)
完成以上步骤，算是接入百度统计 50%了
注意！vuepress 是 以 vue 框架开的一个单应用程序，在切换路由时不会触发页面渲染，导致咱们访问文章页时因无法触发百度统计，当如何解决此问题呢？
通过 vue 的路由守卫，在路由切换时，手动上报百度统计。

在查阅文档时，我发现不少博主是用 vuepress1 建站，创建 enhanceapp.js 来设置路由守卫，此方式在 vuepress2.0 无效
官网解释

> #### [#](https://v2.vuepress.vuejs.org/zh/guide/migration.html#vuepress-enhanceapp-js).vuepress/enhanceApp.js
>
> 重命名为 .vuepress/client.{js,ts} ，使用方法也有改动。
> 参考 [深入 > Cookbook > 客户端配置的使用方法](https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html) 。

亲测踩坑，勿用！VuePress 文档的基本配置中，介绍了一个[应用级别的配置](https://vuepress.vuejs.org/zh/guide/basic-config.html#%E5%BA%94%E7%94%A8%E7%BA%A7%E5%88%AB%E7%9A%84%E9%85%8D%E7%BD%AE)：

> 由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 .vuepress/enhanceApp.js 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。enhanceApp.js 应该 export default 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：

代码如下：

```powershell
export default ({ router }) => {
    router.beforeEach((to, from, next) => {
      if (typeof _hmt !== "undefined") {
        if (to.path) {
          _hmt.push(["_trackPageview", to.fullPath]);
        }
      }

      next();
    });
  };
```

## 客户端配置路由守卫

vuepres2.0 版本，需要额外客户端配置，创建文件`.vuepress/client.js`
在客户端配置中添加路由守卫，代码如下：

```tsx
import { defineClientConfig } from "@vuepress/client";
console.log("路由守卫了");
export default defineClientConfig({
  enhance({ router }) {
    router.beforeEach((to, from, next) => {
      console.log("切换路由", to.fullPath, from.fullPath);

      //触发百度的pv统计
      if (typeof _hmt != "undefined") {
        if (to.path) {
          _hmt.push(["_trackPageview", to.fullPath]);
          console.log("上报百度统计", to.fullPath);
        }
      }
      // continue
      next();
    });
  },
});
```

路由守卫方法接收三个参数：

- to: Route: 即将要进入的目标 路由对象
- from: Route: 当前导航正要离开的路由
- next: Function: 一定要调用该方法来 resolve 这个钩子

**提示**
切换路由时会触发统计上报。以下行为时会上报统计:

- 首次访问
- 刷新页面
- 切换到当前文章的其它章节
  切换锚点，URL 会变化，所以会触发路由变化事件。
  所以，当用户完整得浏览完一篇博客时，可能会触发多次上报。

总结

接入百度统计，本质是在访问站点时触发百度统计 api。
