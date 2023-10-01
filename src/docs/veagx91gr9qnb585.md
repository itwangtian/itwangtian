---
title: git 首次提交远端仓库报错
urlname: veagx91gr9qnb585
date: "2023-08-14 19:27:14"
updated: "2023-08-14 19:29:55"
---

# 场景

执行后 git add . 、git commit 也设置了远端仓库地址，最后推送远端仓库报错，如下：
![image.png](https://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/64b2e090821f312adf175fceb8e1f9c7.png)

# 问题原因：

云端仓库已存在内容，当前分支的最新提交落后于远程仓库的提交历史。

# 如何解决？

强制推送，使用 `--force`

```javascript
git push -force -u origin "master"
```
