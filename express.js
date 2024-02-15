const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware!");
  next(); //it is used to allow the request to travel on next middleware line
});
app.use((req, res, next) => {
  console.log("in other middleware!");
});
const server = http.createServer(app);

server.listen(3000);
