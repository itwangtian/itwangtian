---
title: Git add. 控制台警告
urlname: fer2ogyut4tmc926
date: "2023-08-13 18:59:29"
updated: "2023-09-09 17:05:17"
---

> 执行 git add .的时候出现的警告

这个警告是由于 Git 在处理 .husky/pre-commit 文件时注意到了行尾标识符（end-of-line）的差异导致的。警告的意思是 Git 将会替换行尾的 LF（Line Feed）标识符为 CRLF（Carriage Return Line Feed）标识符。

这个警告通常在跨平台开发中出现，因为不同操作系统对于换行符的表示方式不同。Unix 和 Linux 系统使用 LF 作为行尾标识符，而 Windows 系统使用 CRLF。

虽然这个警告不会导致脚本无法运行，但建议按以下方式修改

在当前项目目录下，打开命令行，输入

```javascript
// Linux/macOS系统下在提交代码时自动将CRLF转换为LF
git config --global core.autocrlf input

// Windows系统下在提交代码时自动将LF转换为CRLF
git config --global core.autocrlf true

```
