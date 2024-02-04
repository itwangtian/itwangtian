---
title: 小天留言板
urlname: inh0oo1krw99vda2
date: '2023-10-19 14:32:51'
updated: '2024-01-25 20:44:30'
cover: 'https://cdn.nlark.com/yuque/0/2023/jpeg/1450835/1697697648285-120aa24d-9eaa-4d39-add7-44bd80fbd3e3.jpeg'
description: '背景新开公众号没有留言板功能，迁移主体开通留言板费用太高，目前市场的小程序留言板功能单一、操作复杂，对于小白不友好。小天留言板小程序，实现公众号留言，让博主上手简单、读者留言丝滑。小天留言板1.0开发 往事↓https://mp.weixin.qq.com/s/8ZdmgsGylsesKC5F...'
---
## 背景
新开公众号没有留言板功能，迁移主体开通留言板费用太高，目前市场的小程序留言板功能单一、操作复杂，对于小白不友好。
小天留言板小程序，实现公众号留言，让博主上手简单、读者留言丝滑。
小天留言板1.0开发 往事↓
[程序员的浪漫！用时两个月，为公众号博主送上一个运营神器。](https://mp.weixin.qq.com/s/8ZdmgsGylsesKC5FvYCS-Q)
## 小天留言板2.0 功能导图
![](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/cef2e7b9c93fb8af374d847dd595cfbc.jpeg)
## 环境复杂度
### 用户数据、全局获取更新
使用vuex 为全局状态存储管理
### 文本/图片审核API
uniapp -云函数[uni-sec-check 公共模块 | uni-app官网](https://uniapp.dcloud.net.cn/uniCloud/uni-sec-check.html#uni-sec-check-%E5%85%AC%E5%85%B1%E6%A8%A1%E5%9D%97)
封装全局的校验函数，调用审核接口后 再存储数据库
> 注意！微信头像昵称填写功能，获取的头像、昵称，无需检测，微信侧会自动审核。

### 多人评论-数据结构设计
满足多人评论、盖楼回复的页面展示
### 评论实时提醒
邮箱、公众号、小程序订阅消息
## 技术点
### VUE

1. minix
2. vuex
3. vue 基础使用
4. vue 组件封装、父子传参、通信
### uniapp

- 小程序配置、导航栏、底部栏、上下拉加载
- uni-ui
- UviewUi
### uniclound

1. 云函数、云对象
2. 云存储、云数据库、联表查询
### 微信

1. 微信用户信息获取（openid）
2. 微信小程序登录流程
3. 微信小程序广告接入
4. 微信订阅、微信公众号推送

 
