const mongoose = require("mongoose");
const uuid = require("uuid");

const Schema = mongoose.Schema;
const SalesSchema = new Schema({
  _id: { type: String, default: uuid.v1 },
  name: String,
  personalId: String,
  productId: Number,
  quantity: Number,
  invoiceId: Number,
  value: Number,
  tax: Number,
});

module.exports = mongoose.model("Sales", SalesSchema);
