const mongoose = require("mongoose");
const uuid = require("uuid");

const Schema = mongoose.Schema;
const UsersSchema = new Schema({
  _id: { type: String, default: uuid.v1 },
  ID: Number,
  Nombre: String,
  Apellido: String,
  Rol: String,
  Status: String,
});

module.exports = mongoose.model("users", UsersSchema);
