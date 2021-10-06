const express = require("express");
const app = express();
var router = express.Router();



let products = require('./products/routes')

app.use(express.json());
const port = 3030;
app.use('/products', products)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
