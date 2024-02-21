// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// const adminData = require("./routes/admin");
const adminRoutes = require('./routes/admin')
const shopRoutes = require("./routes/shop");

const errorController = require('./controllers/error')

/**using the pug template engine 
 * 
app.set("view engine", "pug");
app.set("views", "views");
 * 
*/

/** using the ejs template engine */
app.set("view engine", "ejs");
app.set("views", "views");

/**serving the static files like public css files*/
app.use(express.static(path.join(__dirname, "public")));

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

/** Express Router, 404 page
 *
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 - page not found</h1>");
});
 */

/**filtering based on files/ file path like /admin/add-prodcut 
 * app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 - page not found</h1>");
});
 */
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/admin", adminData.routes);
app.use('/admin', adminRoutes)
app.use(shopRoutes);

/**1.serving 404 html file
 * 2.path is inbuild module to configure file path
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
 */

/**sending 404 pug page
 * 
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});
 */

app.use(errorController.get404)

app.listen(3000);
