const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: String, // payment: Object,
    shipping: {
      shippingMethod: { type: String },
      shippingPrice: { type: Number },
    },
    paymentMethod: { type: String },
    totalPrice: { type: Number },
    isPaid: { type: Boolean, default: false },
    paid: { type: Date, default: Date.now },
    isDeliverd: { type: Boolean, default: false },
    deliverd: { type: Date, default: Date.now },
    products: { type: Array },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orderSchema);
