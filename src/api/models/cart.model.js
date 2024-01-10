const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: String,
    status: { type: String, default: "active" },
    modifiedOn: { type: Date, default: Date.now },
    products: { type: Array },
    /*[
        {
            productId: 123,
            quanlity: 10,
            name: "Camera"
        }
    ]*/
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("carts", cartSchema);
