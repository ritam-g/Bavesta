const express = require("express");
const { body } = require("express-validator");
const {
  createContactMessage,
  getContactMessages,
} = require("../controllers/contactController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  [
    body("name").isString().trim().isLength({ min: 2 }).withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").isString().trim().isLength({ min: 5, max: 2000 }).withMessage("Message is required"),
  ],
  createContactMessage,
);

router.get("/", protect, adminOnly, getContactMessages);

module.exports = router;
