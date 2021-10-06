
const express = require("express");
const views = require('./views')
const router = express.Router();



router.get("/", views.productsView);

router.post("/new", views.createProduct);

router.get("/:id", (req, res) => {
  const p = products.filter((p) => p.id === req.params.id);
  if (p.length > 0) {
    res.json(p[0]);
  } else {
    res.json({ message: "No data" });
  }
});

router.put("/:id/edit", views.editProducts);

router.delete("/:id/delete", views.deleteProducts);

module.exports = router;
