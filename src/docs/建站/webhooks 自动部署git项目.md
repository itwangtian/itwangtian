---
title: webhooks 自动部署git项目
urlname: hgdvvg24f38gsvcp
date: "2023-09-17 13:19:07"
updated: "2023-09-17 19:39:25"
---

> ❌ 经过不断尝试，果断放弃 webhoooks！不是踩坑太多，而是最终配好后执行太耗时。
> 💡 自动部署，本质是在服务器执行 git clone ，因受服务器资资源限制、此过程会非常耗时，我 20 多兆的仓库，整个过程需要半个小时。
> ✔️ 过程太慢还浪费服务器宽度，还不如本地写个脚本上传算了

:::success
🔥 对 webhooks 不刚兴趣可直接看最后一章节，通过`ssh2-sftp-client` 模块实现上传服务器
:::

# webhoooks 自动部署 git 项目

有什么用？
更直观点讲，有了 webhooks，可以实现自动化部署，无需每次手动上传服务器啦
gitee 和 github 中都有此功能 1.自动化 shell 脚本 2.服务端实现 3.配置 github webhooks

宝塔
配置环境
宝塔默认是安装好 git 的
配置公钥
生成 Git 生产环境下的公钥的命令如下所示：

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

这个命令将生成一个 RSA 类型的 SSH 密钥对，包括一个私钥和一个公钥。请注意替换 "your_email@example.com" 为你自己的电子邮件地址。
**回车三次**
生成的密钥对默认存储在用户的 ~/.ssh 目录下，文件名为 id_rsa（私钥）和 id_rsa.pub（公钥）。

生成公钥后，你可以将公钥内容复制并添加到 Git 托管服务（如 GitHub、GitLab 或 Bitbucket）的账户设置中，以便在进行远程操作时进行身份验证和访问控制。
这里添加到 github 中
首次需配置 git
在宝塔面板的终端设置 git

```
git config --global user.name "17638567073@163.com"
git config --global user.email "17638567073@163.com"
git config --global credential.helper store //会生成.gitconfig 的文件
cat .gitconfig   //如果报错: No such file or directory，就用下一行的代码
cat ~/.gitconfig  //显示内容
```

# node 实现项目-自动部署

## ssh2-sftp-client

ssh2-sftp-client 模块是一个用于在 Node.js 环境中进行 SSH 文件传输协议（SFTP）操作的库
以使用这个模块来实现远程文件的上传、下载或其他文件操作任务。

> SSH 文件上传适用于通过 SSH 协议在**本地计算机和远程服务器**之间建立安全连接进行文件传输

**完整上传代码**

```javascript
// ssh2-sftp-client 亲测好用，完全没毛病！
let Client = require("ssh2-sftp-client");
function put(localPath, romotePath) {
  let sftp = new Client();
  sftp
    .connect({
      host: "xxx", // 服务器 IP
      port: "22",
      username: "xxx", // 服务器登录用户名
      password: "xxx", // 服务器登录密码
    })
    .then(() => {
      // 上传文件
      // return sftp.fastPut(localPath, romotePath);
      console.log("上传文件中");
      // 下载文件
      return sftp.uploadDir(localPath, romotePath);
    })
    .then((data) => {
      // console.log(localPath + "上传完成");
      console.log(data, "上传完成");
      sftp.end();
    })
    .catch((err) => {
      console.log(err, "catch error");
    });
}

let srcPath = "/www/wwwroot/itwangtian.com",
  // localPath = path.join(__dirname, 'test.txt'),
  romotePath = "./src/.vuepress/dist";

// 上传文件
// 第一个参数是需要上传的文件的本地路径；第二个参数是服务器存放的地址
// put(localPath, romotePath);
// 下载文件
// 第一个参数是需要下载的文件在服务器存放的地址；第二个参数是本地存放的路径
put(romotePath, srcPath);
```

## npm 执行多个命令行

## 场景

这两天用 vuepres 搭建知识库博客，每次部署到服务器上，都需要执行多个命令行，分别如下：

1. `npm run buld`
2. `npm run upbt (运行ssl上传脚本)`

在上传代码到服务器前，还需手动打包项目，虽然说多执行一个步骤，但是作为一个程序员来说，最大的兴趣就是将重复的事情自动化。
怎么实现呢？
推荐使用 `npm-run-all`

## npm-run-all

npm-run-all 是一个 npm 包，用于在 package.json 的 scripts 中并行或顺序执行多个命令。它提供了灵活的命令组合和执行方式。

### 基本使用

先安装 npm-run-all

```powershell
npm install -g npm-run-all
```

咱们可以按照以下步骤来使用 npm-run-all：

1. 首先，在你的项目目录下，确保你已经有一个 package.json 文件。如果没有，请先使用以下命令初始化一个新的 package.json 文件：

```powershell
npm init
```

2. 在 package.json 文件中的 scripts 部分，配置你要执行的命令。你可以使用 npm-run-all 的命令格式，如下：

```powershell
{
  "scripts": {
    "command1": "your-command-1",
      "command2": "your-command-2",
      "build": "npm-run-all command1 command2"
  }
}
```

在上面的例子中，command1 和 command2 分别代表你要执行的两个命令，而 build 则是一个包装命令，用于顺序执行 command1 和 command2。

3. 接下来，你可以打开终端并在项目目录下执行以下命令：

```bash
npm run build
```

这会触发 npm 执行 package.json 中的 build 命令，即 npm-run-all command1 command2。此时，npm-run-all 将按照顺序依次执行 command1 和 command2。

### 更多用法

- `--parallel`：并行运行 npm 脚本。可以将多个脚本命令以空格分隔传递给该参数，npm-run-all 将同时运行它们。示例：npm-run-all --parallel script1 script2 script3
- `--serial`：按顺序运行 npm 脚本。可以将多个脚本命令以空格分隔传递给该参数，npm-run-all 将按照顺序运行它们。示例：npm-run-all --serial script1 script2 script3
- `--continue-on-error`：即使前一个脚本命令执行失败，也继续执行后续的脚本。示例：npm-run-all --parallel --continue-on-error script1 script2
- `--aggregate-output`：将所有脚本的输出合并到一个终端中显示。示例：npm-run-all --serial --aggregate-output script1 script2 script3
