---
title: node.js - fs模块原来还能这样用？
urlname: tf47asaynxwhubk1
date: "2023-07-24 19:17:59"
updated: "2023-07-24 19:19:04"
---

Node.js 的 `fs` 模块是用于处理文件系统操作的核心模块，它提供了一组功能丰富的方法，可以对文件和目录进行读取、写入、修改、删除等操作。

以下是 `fs` 模块的一些常见用法和使用场景的详细案例：

> 使用前，先 npm i fs 下载模块哦

1. 读取文件

```javascript
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

使用 `readFile` 方法读取文件的内容。参数 `'utf8'` 指定文件内容编码为 UTF-8，回调函数中的 `data` 参数包含了读取到的文件内容。

2. 写入文件

```javascript
const fs = require("fs");

const content = "Hello, World!";

fs.writeFile("file.txt", content, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("文件写入成功");
  }
});
```

使用 `writeFile` 方法写入文件内容。指定要写入的文件名和内容，回调函数中的 `err` 参数用于检查是否发生错误。

3. 创建目录

```javascript
const fs = require("fs");

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("目录创建成功");
  }
});
```

使用 `mkdir` 方法创建一个新目录。指定目录名，并在回调函数中检查是否发生错误。

4. 读取目录内容

```javascript
const fs = require("fs");

fs.readdir("myFolder", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(files);
});
```

使用 `readdir` 方法读取目录中的文件列表。回调函数中的 `files` 参数包含了目录中的文件名数组。

5. 重命名文件或目录

```javascript
const fs = require("fs");

fs.rename("oldFile.txt", "newFile.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("重命名成功");
  }
});
```

使用 `rename` 方法重命名文件或目录。指定原始名称和新名称，检查回调函数中的 `err` 是否发生错误。

6. 删除文件

```javascript
const fs = require("fs");

fs.unlink("file.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("文件删除成功");
  }
});
```

使用 `unlink` 方法删除指定的文件。检查回调函数中的 `err` 是否发生错误。

这只是 `fs` 模块的一小部分功能示例，还有更多方法可用于处理文件系统操作。`fs` 模块提供了强大的功能，可用于读取、写入和管理文件和目录。根据应用程序的需求，你可以根据需要组合和使用这些方法。
