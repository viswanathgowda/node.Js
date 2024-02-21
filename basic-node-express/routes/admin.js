const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../util/path");

const adminController = require('../controllers/admin')



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
router.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
 */

/**rendring/sending the pug/ejs file to client
 * 
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title }); // storing the data to use in entire app
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
 * 
 */

/**using the contoller to render the file to client
 * 
 */

router.get('/add-product', adminController.getAddProduct)

router.post("/add-product", adminController.postAddProduct);

router.get('/products', adminController.getProducts)

module.exports = router
