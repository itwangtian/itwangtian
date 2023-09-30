---
title: "\U0001F6AB系统禁止cnpm运行"
urlname: xgy8xa51aumswod7
date: "2023-09-10 21:16:42"
updated: "2023-09-10 21:22:11"
---

# 问题描述

win10 电脑安装了 cnpm ，cnpm -v 检查版本号没有问题，但是 cnpm 下包报错
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/ef13428859b15e1eb8192c704bc2f1dd.png)

# **解决方案：**

1、在系统中 搜索框 输入 Windos PowerShell 或者 右击任务栏的电脑图标，选择 Windos PowerShell（管理员）；
2、点击“管理员身份运行”；
3、输入“ set-ExecutionPolicy RemoteSigned”回车；
4、根据提示，输入**A**，回车;
5、再次回到控制台 输入 cnpm --version 执行就成功，若不成功，关闭 Visual Studio 软件重新打开执行就好了。
