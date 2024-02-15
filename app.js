/**
 * creating server using nodejs
 * @param {*} req 
 * @param {*} res 
 * 
    const http = require('http');
    function listener(req, res){
        console.log(req)
    }
    const server = http.createServer(listener)
    or
    const server = http.createServer(function(req, res){console.log(req)})
    or
    const server = http.createServer((req, res)=>{console.log(req)})
    const server = http.createServer((req, res)=>{console.log(req)})
    
    server.listen(3000)
 */

/** understanding request and response
 * 
const http = require('http')

function listener(req, res){
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>test</title></head>')
    res.write('<body><h1>response from server</h1></body>')
    res.write('</html>')
    res.end()
}

const server = http.createServer(listener)

server.listen(3000)
 * **/

/**routing reqests 
 * 
const http = require("http");

function listener(req, res) {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>test</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>test</title></head>");
  res.write("<body><h1>response from server</h1></body>");
  res.write("</html>");
  res.end();
}

const server = http.createServer(listener);

server.listen(3000);
*/

/**redirecting the requests 
 const http = require("http");
 const fs = require("fs");
 
 function listener(req, res) {
   const url = req.url;
   const method = req.method;
   if (url === "/") {
     res.write("<html>");
     res.write("<head><title>test</title></head>");
     res.write(
       "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>submit</button></form></body>"
     );
     res.write("</html>");
     return res.end();
   }
   if (url === "/message" && method === "POST") {
     // fs.writeFileSync("message.txt", "DUMMY");
     // res.statusCode = 302;
     // res.setHeader("Location", "/");
     res.setHeader("Content-Type", "text/html");
     res.write("<html>");
     res.write("<head><title>POST</title></head>");
     res.write("<body><h1>POST response from server</h1></body>");
     res.write("</html>");
     return res.end();
   }
   res.setHeader("Content-Type", "text/html");
   res.write("<html>");
   res.write("<head><title>test</title></head>");
   res.write("<body><h1>response from server</h1></body>");
   res.write("</html>");
   res.end();
 }
 
 const server = http.createServer(listener);
 
 server.listen(3000);
 * 
*/

/**file system - writing the files, parsing the reqest bodies
 * 
 * 
const http = require("http");
const fs = require("fs");
const { on } = require("events");

function listener(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>test</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      //by returning this 'end' it will not block the event loop or server/event listener
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("parsedMessage.txt", message); //writing the file uisng parsed req data
      fs.writeFileSync("message.txt", "DUMMY"); //writing the file
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>test</title></head>");
  res.write("<body><h1>response from server</h1></body>");
  res.write("</html>");
  res.end();
}

const server = http.createServer(listener);

server.listen(3000);
*/

/***
 * Node Module system - imports and exports
 * 1. create a file called routes.js
 *
const http = require("http");

const routes = require("./routes");

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
 */
const http = require("http");

const routes = require("./routes");

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
