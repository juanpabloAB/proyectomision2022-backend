const Product = require("./models");

module.exports.productsView = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

module.exports.createProduct = async (req, res) => {
  const product = await new Product(req.body);
  product.save();
  res.json({ message: "created" });
  //res.json(products);
};

module.exports.editProducts = async (req, res) => {  
    Product.findByIdAndUpdate(
      req.body.id,
      {title:req.body.title},
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    ).clone().catch(err=>{
      res.json({err})
    });
  

  
};

module.exports.deleteProducts = async (req, res) => {
  await Product.findByIdAndRemove({ _id: req.body.id }, (err) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json({ message: "deleted" });
    }
  }).clone().catch(err=>{
    res.json({err})
  });;
};
