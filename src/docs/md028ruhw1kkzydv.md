---
title: koa-Router 和koa-router 傻傻分不清
urlname: md028ruhw1kkzydv
date: "2023-08-25 20:16:20"
updated: "2023-08-25 20:41:09"
---

# 场景

使用`koa-router` 和`koa-multer` 存储本地照片报错：`Error: Unexpected end of format Multipart._final` 改为使用 `koa-Router` 就没问题啦

# 原因

使用`koa-router`处理路由时，如果请求中缺少必要的表单数据，就会抛出"Unexpected end of form"错误。
使用 koa-Router 处理请求时，koa-Router 本身并不处理文件上传，并不关心请求中是否包含文件数据。它只负责路由的匹配和处理。因此，当你使用 koa-Router 时，不会出现"Unexpected end of form"错误

# 解决

1、弃坑 koa-router 改为 koa-Router【高效快捷】
2、如果你精力充沛，继续使用 koa-router ，建议查看前端请求的表单数据 、是否合格，调整修改。具体如何修改，我搜了俩小时都没找到解决方案。
如果有大神以第二种方式修改成功，记得留言 v 我呀
