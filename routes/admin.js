const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../util/path");

const products = [];

/**
 * 
router.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>submit</button></form>"
  );
});
 */
/**1.serving html file
 * 2.path is inbuild module to configure file path
router.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});
 */

/**1.building custom util file for root path using
 * path.dirname(require.main.filename)
 *
 */
router.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
router.post("/product", (req, res, next) => {
  products.push({ title: req.body.title }); // storing the data to use in entire app
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
