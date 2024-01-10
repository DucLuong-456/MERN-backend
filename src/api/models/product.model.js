const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    categoryId: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    rating: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    release_date: {
      type: Date,
    },
    description: {
      type: String,
    },
    specs: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
