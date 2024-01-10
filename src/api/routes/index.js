const productRouter = require("./product.route");
const routes = (app) => {
  app.use("/api/product", productRouter);
};
module.exports = routes;
