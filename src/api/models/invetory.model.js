const mongoose = require("mongoose");

const invetorySchema = new mongoose.Schema(
  {
    productId: String,
    quantity: Number,
    reservations: Array, //1000-10=990, 990-10=980
    /*
        {
            userId: 1,
            quanlity: 10
        },
        {
            userId: 2,
            quanlity: 10
        }
    */
    create_at: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("invetories", invetorySchema);
