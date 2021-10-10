const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
var router = express.Router();
mongoose.connect('mongodb://test:123456@localhost:27017/ecommerce').then(db=> console.log('DB Connected')).catch(e=> console.log(e));



let products = require('./products/routes')
const port = 3030;
app.use('/products', products)
app.listen(port, () => {
  console.log(`Listening at port:${port}`);
});
