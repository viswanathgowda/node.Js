const express = require("express");
const path = require("path");
const router = express.Router();

const adminData = require("./admin");

/**
 * 
  router.get("/", (req, res, next) => {
  res.send("<h1>hello from express</h1>");
  });
 */

/**1.serving html file
 * 2.path is inbuild module to configure file path
 */
router.get("/", (req, res, next) => {
  console.log(adminData.products); //getting the store req data from add product page
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
