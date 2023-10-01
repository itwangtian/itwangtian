---
title: 一个vuepress配置问题，引发的JS递归思考
urlname: od0ahbmsfgdw3kpm
date: "2023-09-29 17:29:23"
updated: "2023-09-30 20:28:30"
---

# 前言

这两天在尝试用语雀＋ vuepress ＋ github 搭建个人博客。
语雀作为编辑器，发布文档推送 github，再自动构建 vuepress，部署个人站点、或者 gitpage，大概流程如下。
![](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/51fdf06c7ce3a1f91976e2528b2bd954.jpeg)

## 问题

我使用的`elog`插件批量导出语雀文档。`elog`采用的配置是所有文章平铺导出，没有按照语雀知识库目录生成`markdown`，这导致 vuepress 侧边栏无法和语雀一致，如下图。

![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/6dbd6d8b65e17693770347edb53eb0db.png)
上图，左侧是语雀知识库，右侧是导出到 vuepress 展示的效果，很明显没有目录这很影响阅读体验呀

## 解决

在查阅 vuepress 文档后，发现配置`silderbar.ts`可以自定义侧边栏目录，配置参数如下：

```tsx
export default {
  theme: defaultTheme({
    // 可折叠的侧边栏
    sidebar: {
      "/web/": [
        {
          text: "王天的web进阶手册",
          collapsible: true, // 目录是否折叠
          children: ["/reference/cli.md", "/reference/config.md"], // 文档目录
        },
        {
          text: "王天的魔法工具箱",
          collapsible: true,
          children: [
            "/reference/bundler/vite.md",
            "/reference/bundler/webpack.md",
          ],
        },
      ],
    },
  }),
};
```

## 递归生成菜单

配置`sidebar.ts` 可以修改左侧菜单，但是一个个手动修改这忒麻烦了啊啊啊啊。那如何批量生产菜单配置项呢？

**递归函数呀呀呀呀呀呀 🔥🔥🔥🔥**

> elog 在同步语雀文档时，会自动创建`elog.cache.json`缓存文件，在 vueprss 项目根目录中查看。

打开`elog.cache.json`文件，我们能看到语雀文档知识库的数据结构

```json
"catalog": [
    {
      "type": "DOC",
      "title": "前言",
      "uuid": "17Os-_V_hcS37KOD",
      "url": "wqbpyf5083qc7ho8",
      "prev_uuid": "",
      "sibling_uuid": "dmQSRn6AXUBSg96x",
      "child_uuid": "",
      "parent_uuid": "",
      "doc_id": 141216125,
      "level": 0,
      "id": 141216125,
      "open_window": 1,
      "visible": 1
    },
    {
      "type": "TITLE",
      "title": "项目",
      "uuid": "dmQSRn6AXUBSg96x",
      "url": "",
      "prev_uuid": "17Os-_V_hcS37KOD",
      "sibling_uuid": "PUQZiYfEh8WLE0S5",
      "child_uuid": "p8CdcJ3Wge274g-C",
      "parent_uuid": "",
      "doc_id": "",
      "level": 0,
      "id": "",
      "open_window": 1,
      "visible": 1
    },
    {
      "type": "TITLE",
      "title": "小天省钱宝",
      "uuid": "p8CdcJ3Wge274g-C",
      "url": "",
      "prev_uuid": "dmQSRn6AXUBSg96x",
      "sibling_uuid": "Nwy1XwBVCauDEVT3",
      "child_uuid": "B_g_9VbzBNLx6MBi",
      "parent_uuid": "dmQSRn6AXUBSg96x",
      "doc_id": "",
      "level": 1,
      "id": "",
      "open_window": 1,
      "visible": 1
    },
    {
      "type": "DOC",
      "title": "猎人",
      "uuid": "B_g_9VbzBNLx6MBi",
      "url": "buh3gviq8r2v4kxe",
      "prev_uuid": "p8CdcJ3Wge274g-C",
      "sibling_uuid": "",
      "child_uuid": "",
      "parent_uuid": "p8CdcJ3Wge274g-C",
      "doc_id": 141216121,
      "level": 2,
      "id": 141216121,
      "open_window": 1,
      "visible": 1
    },
  ]
```

catlog 属性是文档缓存数据，关键字段：

- type：值为'DOC' 是文章、值为 TITLE 则为目录
- uuid：文章 id
- prent_uuid:父节点的 uuid

咱们根据以上参数，编写递归函数， 将`elog.cache.json`的一维数组，递归生成 vuepress 侧边栏配置数据
代码如下：

```typescript
function genYuqueRoute() {
  // 参数1:遍历数组
  // 参数2:父菜单id
  const deep = (arrlist, parantId) => {
    let forList: any[] = [];
    arrlist.forEach((element) => {
      // 菜单id不一致，跳出循环调用
      if (element.parent_uuid !== parantId) return;
      // 如果是TITLE类型新增配置项
      if (element.type === "TITLE") {
        forList.push({
          text: element.title,
          collapsible: true,
          children: deep(arrlist, element.uuid),
        });
        // 如果是DOC 类型追加文件地址
      } else {
        forList.push(element.url + ".md");
      }
    });
    return forList;
  };
  return deep(catalog, "");
}
```

递归函数本质上是一个在回调自身的函数，用于改造数据结构，
重点在于跳出循环的机制，否则陷入死循环啦

[JS 树结构操作:查找、遍历、筛选、树和列表相互转换 - 沐码小站](https://wintc.top/article/20)
