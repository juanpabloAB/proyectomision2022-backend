const mongoose = require("mongoose");
const uuid = require("uuid");

const ProductsSchema =  mongoose.Schema({
  title: {type: String, required : true},
  description: {type: String, /*required : true*/},
  price: {type: Number, required : true},
  stock: {type: Number, required : true},
  aviable: {type: Boolean, required : true}, 
  link: {type: String, /*required : true*/}
});

module.exports = mongoose.model("Products", ProductsSchema);
  
