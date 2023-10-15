---
title: git常用的六个命令
urlname: dczr2vfhgu4n2cft
date: "2023-10-13 17:24:33"
updated: "2023-10-13 17:40:24"
---

> **git 常用的六个命令**：1、第一次初始化；2、初始化仓库；3、加到缓存区；4、提交至本地仓库；5、推送本地仓库信息至远程仓库；6、拉取远程仓库最新文件。其中，第一次初始化有两种方式，一种语句较多，另一种语句较少。

## 精简版操作 git

### 初始化

1. git init 【初始化 init】
2. git add . 【提交到缓存区】
3. git commit -m ‘代码描述’【提交到本地仓库】
4. git remote add origin `git 仓库地址，https开头的，码云粘贴` 【本地仓库与云端关联】
5. git pull origin master 【提交到云端仓库，如未成功，执行下面强制推送】
6. git push origin master # -f 【强推】

### 后续操作仓库

初始化成功后，后面操作仓库，常用 4 个命令

1. git pull 从云端仓库拉取最新代码
2. git add . 提交缓冲区
3. git commit -m "修改代码" 提交本地仓库
4. git push 提交到云端仓库

## 1、第一次初始化

- git init 【初始化 init】
  git add . 【提交到缓存区】
  git commit -m ‘代码描述’【提交到本地仓库】
  git remote add origin `git 仓库地址，https开头的，码云粘贴` 【本地仓库与云端关联】
  git pull origin master 【提交到云端仓库，如未成功，执行下面强制推送】
  git push origin master # -f 【强推】

## 2、初始化仓库

git init

## 3、加到缓存区

- git add .：添加所有项目至缓存区
- git add 目录名：添加指定目录到缓存区
- git add 文件名：添加指定文件到缓存区

## 4、提交至本地仓库

git commit -m “注释信息”

## 5、推送本地仓库信息至远程仓库

- git push origin master：将本地分支的更新内容，全部推送至远程仓库 master 分支
- git push origin dev：将本地 dev 分支推送到远程，再由一个人统一加到 master 分支上

## 6、拉取远程仓库最新文件

- git pull：拉取远程仓库所有分支合并到本地
- git pull origin master：拉取远程 master 分支，合并到当前本地 master 分支
- git fetch：仅做拉取操作，不做合并，合并需要自己再找其他方法

注意：一般都用 git pull

### 拓展阅读

## Git 命令个别专用名词译名

Workspace：工作区
Index / Stage：暂存区
Repository：仓库区（或本地仓库）
Remote：远程仓库
