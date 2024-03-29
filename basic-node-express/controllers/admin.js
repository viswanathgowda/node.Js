const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
}

exports.postAddProduct = (req, res, next) => {
//   products.push({ title: req.body.title }); // storing the data to use in entire app
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const prodcut = new Product(title, imageUrl, description, price)
    prodcut.save()
    res.redirect("/");
}

exports.getProducts = (req, res, next) =>{
    Product.fetchAll((products => {
        res.render("admin/products", { prods: products, pageTitle: "Admin Products", path: "/admin/products" });
    }))
}