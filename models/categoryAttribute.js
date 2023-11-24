const mongoose = require("mongoose");
const productAttributeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Attribute is required",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductAttribute", productAttributeSchema);
