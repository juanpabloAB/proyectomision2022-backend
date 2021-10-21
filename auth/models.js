const mongoose = require("mongoose");
const uuid = require("uuid");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  _id: { type: String, default: uuid.v1 },
  googleId: String,
  email: { type: String, unique: true, required: true },
  verified_email: Boolean,
  name: String,
  given_name: String,
  family_name: String,
  picture: String,
  locale: String,
  admin: { type: Boolean, default: false },
  
});

module.exports = mongoose.model("User", UserSchema);
