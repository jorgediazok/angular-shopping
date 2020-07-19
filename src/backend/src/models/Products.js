const { Schema, model } = require("mongoose");

const productsSchema = new Schema({
  name: String,
  price: Number,
  code: Number,
  description: String,
  category: String,
});

module.exports = model("Products", productsSchema);
