// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/**
 * 1.installing the express, importing it and creating the middleware 
 * using app.use() 
 * 2.used next req prameter as next() method to travel on next middleware
 * 3. modified the sever creation and listening using the express
 * 4. used res.send() method for sending the body - any data type
app.use((req, res, next) => {
  console.log("in the middleware!");
  next(); //it is used to allow the request to travel on next middleware line
});
app.use((req, res, next) => {
  console.log("in other middleware!");
  res.send("<h1>hello from express</h1>");
});
// const server = http.createServer(app);

// server.listen(3000);
 *
 */

/*** Handling Different routes, parsing the request and using other http middleware methods 
 *
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("this always runs due to / (empty) path");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>submit</button></form>"
  );
});

app.post("/product", (req, res, next) => { //post is http midddleware method used to restrict the methods.
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>hello from express</h1>");
});
 *
 */

app.listen(3000);