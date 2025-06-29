const express = require("express");
const router = express.Router();

const { showAuthPage } = require("../controllers/authController");

router.get("/login", showAuthPage);

module.exports = router;
