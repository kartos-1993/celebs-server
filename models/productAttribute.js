const mongoose = require("mongoose");

const productAttributes = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [3, "Too short"],
      maxlength: [32, "Too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true, // Reference https://www.mongodb.com/docs/manual/indexes/
    },
    value:[]
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductAttribute", productAttributes);
