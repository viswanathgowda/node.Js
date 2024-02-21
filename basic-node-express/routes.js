const fs = require("fs");
const requestHandler = (req, res) => {
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
};

// module.exports = requestHandler;
//or
// module.exports = {
//   handler: requestHandler,
//   someText: "routes",
// };
//or
// module.exports.handler = requestHandler;
// module.exports.someText = "routes example";
//or
exports.handler = requestHandler;
exports.someText = "routes example";
