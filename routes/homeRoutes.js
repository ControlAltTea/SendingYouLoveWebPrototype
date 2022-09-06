const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", authController.getIndex);
router.get("/dashboard", authController.getDashboard);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;