
const express = require("express");
const views = require('./views')
const router = express.Router();



router.get("/", views.ListView);

router.post("/new", views.createView);

router.put("/:id/edit", views.editView);

router.delete("/:id/delete", views.deleteView);

module.exports = router;
