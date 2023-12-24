const express = require("express");
//importing express
const app = express();
//实例化express库
//create an express application stored in the app variable
const cors = require("cors");
//我们可以使用 Node cors 来允许来自其他来源的请求来源cors 中间件

app.use(express.static("dist"));
//要快速显示静态内容，页面index.html 以及它获取的 JavaScript 等，我们需要 Express 中的一个名为 static 的内置中间件。

app.use(cors());

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

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id); //id参数可以通过request 对象
  const note = notes.find((note) => note.id === id);
  if (note) {
    response.json(note); //have content
  } else {
    response.status(404).end();
  }
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  //过滤掉具有匹配 ID 的笔记，从而实现了删除操作。
  //它会更新笔记数组以包含除了与给定 ID 匹配的笔记之外的所有其他笔记。

  response.status(204).end();
  //最后，处理程序发送一个 HTTP 204 响应，表示删除成功，并通过 .end() 方法终止响应。
});

app.get("/api/notes", (request, response) => {
  response.json(notes); //使用响应的 json 方法响应请求对象, 转换会自动发生
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
