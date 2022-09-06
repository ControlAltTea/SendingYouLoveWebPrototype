const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", authController.getIndex);
router.get("/dashboard", authController.getDashboard);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);

module.exports = router;