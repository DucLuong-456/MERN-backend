const route = require("express").Router();
const productController = require("../controllers/product.controller");

route.get("/", productController.getProducts);
route.post("/", productController.createProduct);

module.exports = route;
