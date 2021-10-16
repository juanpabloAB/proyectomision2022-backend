
const express = require("express");
const views = require('./views')
const router = express.Router();


router.get("/google/url", views.LogIn);
router.get(views.redirectURI, views.getUser);

module.exports = router;
