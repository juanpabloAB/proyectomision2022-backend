const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
mongoose.connect('mongodb://test:123456@localhost:27017/ecommerce').then(db=> console.log('DB Connected')).catch(e=> console.log(e));
app.use(cors());


let products = require('./products/routes')
let sales = require('./sales/routes')
const port = 3030;
app.use('/products', products)
app.use('/sales', sales)
app.listen(port, () => {
  console.log(`Listening at port:${port}`);
});
