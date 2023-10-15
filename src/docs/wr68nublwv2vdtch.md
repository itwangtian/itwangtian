---
title: git 常见报错
urlname: wr68nublwv2vdtch
date: "2023-09-10 18:58:47"
updated: "2023-10-13 15:39:17"
---

# 无法将“git”项识别为 cmdlet

git :无法将“git”项识别为 cmdlet、 函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路经正

## 解决方式

1、更改环境配置
[git : 无法将“git”项识别为](https://m.baidu.com/sf?pd=topone_trustpaper&resource_id=55858&word=git+:+%E6%97%A0%E6%B3%95%E5%B0%86%E2%80%9Cgit%E2%80%9D%E9%A1%B9%E8%AF%86%E5%88%AB%E4%B8%BA&ext=%7B%22url%22%3A%22http%3A%5C%2F%5C%2Fwww.taodudu.cc%5C%2Fnews%5C%2Fshow-6407388.html%22%2C%22srcid%22%3A%2228420%22%2C%22jumptype%22%3A%22text%22%2C%22urlsign%22%3A%223819040033359751954%22%2C%22sitesign%22%3A%223544305091466905480%22%2C%22query%22%3A%22git+%3A%5Cu65e0%5Cu6cd5%5Cu5c06%5Cu201cgit%5Cu201d%5Cu9879%5Cu8bc6%5Cu522b%5Cu4e3acmdlet%5Cu3001%22%2C%22token%22%3A%22c89ec5%22%7D&top=%7B%22sfhs%22:1%7D&atn=index&lid=11902020421571769082)
2、安装 git 后，在项目根目录，打开右键使用 git bash herf
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/74df0e3742ed03b63fb4f389200a765e.png)

# remote origin already exists.

![YP[EPT0~\_Q$5}Z8@%G0$KNK_tmb.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/ef40d631d59c853e2c7e746398afcde0.png)
本地仓库与远端仓库链接错误

## 解决方式

删除与远端仓库的配置

```javascript
git remote rm origin
```

重新设置与远端仓库链接，再次执行

```javascript
git remote add origin https://xxx 远端仓库
```
