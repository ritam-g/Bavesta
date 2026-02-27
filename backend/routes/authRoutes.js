const express = require("express");
const { body } = require("express-validator");
const { login } = require("../controllers/authController");

const router = express.Router();

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("A valid email is required"),
    body("password").isString().isLength({ min: 8 }).withMessage("Password must be at least 8 chars"),
  ],
  login,
);

module.exports = router;
