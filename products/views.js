let products = [
    {
      id: "0jbcksbjcksj",
      title: "product 1",
      descripción: "jojoj",
      valor: 10000,
      disponible: 10,
    },
    {
      id: "0jbcksbjcksj2",
      title: "product 1",
      descripción: "jojoj",
      valor: 10000,
      disponible: 10,
    },
  ];
module.exports.productsView = (req, res) => {
    res.json(products);
  }

module.exports.createProduct = (req, res) => {
    products.push(req.body);
    res.json(products);
  }

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
  }

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
  }