const express = require("express");
const { register, login } = require("../controllers/authRouter");
const router = express.Router();
router.post("/register", register);
router.post("/login", login);

// where is slider route

module.exports = router;
