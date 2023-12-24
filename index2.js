const express = require("express");
//importing express
const app = express();
//实例化express库
//create an express application stored in the app variable

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => {
  //应答请求
  //由于参数是字符串，express 自动将 Content-Type 标头的值设置为 text/html
  response.send("<h1>Hello World!</h1>"); //调用该方法使服务器通过发送
});

app.get("/api/notes", (request, response) => {
  response.json(notes); //使用响应的 json 方法响应请求对象, 转换会自动发生
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
