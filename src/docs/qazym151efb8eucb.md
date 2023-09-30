---
title: TortoiseGit 账号密码更改失效
urlname: qazym151efb8eucb
date: "2023-09-05 10:33:43"
updated: "2023-09-09 16:59:02"
---

# 什么是 tortoiseGit？

TortoiseGit 是一款 window 下可视化 git 管理工具，可以不使用命令行操作 git。

# 问题场景

修改 git 仓库账号密码后，提交代码失败。
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/47cd4e2086084d9017d4d7af1c4222cc.png)

# 解决步骤

1、打开电脑上面的控制面板，右侧查看方式调整为“小图标”，找到其中的“凭据管理器”，并点击进入；
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/efe88b4a5ed4ab52e82afc362d3a92b7.png)

2、进入凭据管理器之后，选择其中的“Windows 凭据”，点击进入；然后点击凭据中的要修改密码的 git 地址；
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/cb97d233f6b75fc4129ffa88c402c848.png)

3、此时，就会出现该 git 地址的具体信息，包括用户名和密码，点击下面的“编辑”按钮；
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/aa562e1c19904012f20566d7a6181e5d.png)

4、然后就可以修改该 git 地址下对应的账号密码了；账号密码修改完成之后，点击下面的“保存”按钮即可生效，如图所示；
![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/d714a5be681b8a80840f741452b38756.png)

5、修改了账号密码之后，使用 git 命令行或者直接使用 TortoiseGit 可视化工具进行 pull，push 等操作时，提示没有权限，均可解决。

![image.png](http://gyg-bawei-zg4-2103b.oss-cn-beijing.aliyuncs.com/b73d53253c6efff5d8fb7009be506057.png)
