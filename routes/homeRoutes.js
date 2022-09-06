const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");

router.get("/", authController.getIndex);
router.get("/dashboard", authController.getDashboard);
router.get("/signup", authController.getSignUp);

module.exports = router;