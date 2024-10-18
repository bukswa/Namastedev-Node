const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/getSecretData") {
    res.end("I dont have secrets");
  }
  res.end("hello world!");
});

server.listen(7777);
