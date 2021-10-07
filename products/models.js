const mongoose = require("mongoose");
const uuid = require("uuid");

const Schema = mongoose.Schema;
const ProductsSchema = new Schema({
  _id: { type: String, default: uuid.v1 },
  title: String,
  description: String,
  value: Number,
  stock: Number,
});

module.exports = mongoose.model("Products", ProductsSchema);
