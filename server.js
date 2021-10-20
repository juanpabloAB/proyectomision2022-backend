require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const {JWT_SECRET } = require('./config.js');
const app = express();
app.use(express.json());
mongoose.connect('mongodb://test:123456@localhost:27017/ecommerce').then(db=> console.log('DB Connected')).catch(e=> console.log(e));
app.use(cors());

function authMiddle(req, res, next){
  
  try {
    const decoded = jwt.verify(req.headers.authorization, JWT_SECRET);
    res.user = decoded;
    next()
  } catch(err) {
    // err
    res.json({message:'not auth'})
  }  
}

let products = require('./products/routes')
let sales = require('./sales/routes')
let auth = require('./auth/routes')
const port = 3030;
app.use('/auth', auth)
app.use('/products', authMiddle, products)
app.use('/sales', authMiddle, sales)
app.listen(port, () => {
  console.log(`Listening at port:${port}`);
});
