const http = require("http"); //应用程序导入 Node 的内置Web 服务器 模块

const app = http.createServer((request, response) => {
  //代码使用 http 的 createServer 方法模块来创建新的 Web 服务器
  response.writeHead(200, { "Content-Type": "text/plain" });
  //请求以状态代码 200 进行响应，Content-Type 标头设置为 text/plain，

  response.end("Hello World");
  //返回的站点内容设置为Hello World。
});

const PORT = 3001;
//无论 URL 的后半部分如何，服务器都会以相同的方式工作。
//地址http://localhost:3001/foo/bar也会显示相同的内容。
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
