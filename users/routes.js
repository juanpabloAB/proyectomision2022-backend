
const express = require("express");
const views = require('./views')
const router = express.Router();



router.get("/", views.ListView);

router.put("/edit", views.editView);

router.delete("/delete", views.deleteView);

module.exports = router;
