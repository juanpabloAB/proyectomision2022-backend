const mongoose = require("mongoose");
const uuid = require("uuid");

const Schema = mongoose.Schema;
const UsersSchema = new Schema({
  _id: { type: String, default: uuid.v1 },
  Nombre: String,
  Apellido: String,
  Rol: String,
  Estatus: String,
  idUser: Number,
});

module.exports = mongoose.model("users", UsersSchema);
