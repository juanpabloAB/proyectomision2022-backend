const Product = require("./models");

module.exports.productsView = async (req, res) => {
  const products =  await Product.find();
  console.log(products)
  res.json(products);
};

module.exports.createProduct = async (req, res) => {
  const product = await new Product(req.body);
  product.save();
  console.log(product)
  res.json({message:'created'});
  //res.json(products);
};

module.exports.editProducts = (req, res) => {
  const p = products.filter(
    (p) => p.id === req.params.id && req.body.id === req.params.id
  );
  console.log(p);
  if (p.length > 0) {
    products = [
      ...products.filter((p) => p.id !== req.params.id),
      { ...req.body, id: req.params.id },
    ];
    res.json({ message: "saved" });
  } else {
    res.json({ message: "No data" });
  }
};

module.exports.deleteProducts = (req, res) => {
  const p = products.filter(
    (p) => p.id === req.params.id && req.body.id === req.params.id
  );
  console.log(p);
  if (p.length > 0) {
    products = [...products.filter((p) => p.id !== req.params.id)];
    res.json({ message: "deleted" });
  } else {
    res.json({ message: "No data" });
  }
};
