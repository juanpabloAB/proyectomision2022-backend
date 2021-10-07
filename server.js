const express = require("express");
const mongoose = require("mongoose");
const app = express();

var router = express.Router();
mongoose.connect('mongodb://app:secret@localhost:27017/ecommerce').then(db=> console.log('DB Connected')).catch(e=> console.log(e));



let products = require('./products/routes')

app.use(express.json());
const port = 3030;
app.use('/products', products)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
