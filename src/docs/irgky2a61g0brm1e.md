---
title: npx cz 无法执行
urlname: irgky2a61g0brm1e
date: "2023-08-17 17:19:31"
updated: "2023-08-17 17:22:07"
---

npx cz 执行后，无法弹出交互选择，报错如下：
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/aad3c0c873ccb25b51404a924ab46a25.png)
解决方法：
强制安装

```typescript
npx commitizen init cz-conventional-changelog --save-dev --save-exact --force
```
