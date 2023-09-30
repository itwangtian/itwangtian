---
title: socket心跳检测
urlname: ty0lc4810uno20lx
date: "2023-08-27 00:21:04"
updated: "2023-08-27 00:23:15"
---

以下是一个简单的示例代码，用于在前后端之间进行基本的心跳检测。
前端代码（使用 JavaScript）：

```javascript
// 创建WebSocket连接
const socket = new WebSocket("ws://localhost:8000");

// 定时发送心跳消息
setInterval(() => {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send("heartbeat");
  }
}, 5000);

// 监听服务器发送的消息
socket.onmessage = function (event) {
  // 处理服务器返回的消息
  console.log("Received message from server:", event.data);
};

// 检测WebSocket连接状态
socket.onclose = function () {
  console.log("Socket connection closed");
};

socket.onerror = function (error) {
  console.error("Socket error:", error);
};
```

后端代码（使用 Node.js 和 WebSockets 库）：

```javascript
const WebSocket = require("ws");

// 创建WebSocket服务器
const wss = new WebSocket.Server({ port: 8000 });

// 监听WebSocket连接事件
wss.on("connection", function connection(ws) {
  console.log("New client connected");

  // 监听客户端发送的消息
  ws.on("message", function (message) {
    // 处理客户端发送的消息
    console.log("Received message from client:", message);

    // 回复心跳消息
    if (message === "heartbeat") {
      ws.send("heartbeat");
    }
  });

  // 监听WebSocket关闭事件
  ws.on("close", function () {
    console.log("Client disconnected");
  });

  // 监听WebSocket错误事件
  ws.on("error", function (error) {
    console.error("WebSocket error:", error);
  });
});
```

这个示例使用了 WebSocket 进行通信，并通过定时发送心跳消息来检测连接是否正常。

前端代码创建了一个 WebSocket 连接，并每隔 5 秒发送一条心跳消息。后端代码创建了一个 WebSocket 服务器，监听客户端连接事件，并处理客户端发送的消息，如果收到心跳消息，就回复心跳消息。
