require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const {JWT_SECRET, MONGO_PASSWORD, MONGO_USER } = require('./config.js');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(express.json());
mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.hxmav.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`).then(db=> console.log('DB Connected')).catch(e=> console.log(e));
app.use(cors());

function authMiddle(req, res, next){
  
  try {
    const decoded = jwt.verify(req.headers.authorization, JWT_SECRET);
    req.user = decoded;
    next()
  } catch(err) {
    // err
    res.json({message:'not auth'})
  }  
}

app.get('/', function(req, res) {
  res.render('pages/index');
});
app.get('/auth', function(req, res) {
  res.render('pages/index');
});

let products = require('./products/routes')
let sales = require('./sales/routes')
let auth = require('./auth/routes')
let users = require('./users/routes')
const port = 3030;
app.use('/auth', auth)
app.use('/products', authMiddle, products)
app.use('/sales', authMiddle, sales)
app.use('/users', authMiddle, users)
app.listen(port, () => {
  console.log(`Listening at port:${port}`);
});
