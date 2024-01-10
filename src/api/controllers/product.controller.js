const Product = require("../models/product.model");
const productController = {
  createProduct: async (req, res) => {
    try {
      const { name, image, categoryId } = req.body;
      const newProduct = await Product.create({ name, image, categoryId });
      newProduct.save();
      res.send("create product");
    } catch (error) {}
  },
  getProducts: async (req, res) => {
    const products = await Product.find();
    res.json(products);
  },
};

module.exports = productController;
