const express = require("express");
const { body } = require("express-validator");
const { createBooking, getBookings } = require("../controllers/bookingController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  [
    body("customerName").isString().trim().isLength({ min: 2 }).withMessage("Customer name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").isString().trim().isLength({ min: 7 }).withMessage("Phone is required"),
    body("roomId").isMongoId().withMessage("Valid room ID is required"),
    body("checkInDate").isISO8601().withMessage("Valid check-in date is required"),
    body("checkOutDate").isISO8601().withMessage("Valid check-out date is required"),
    body("guests").isInt({ min: 1 }).withMessage("At least 1 guest is required"),
  ],
  createBooking,
);

router.get("/", protect, adminOnly, getBookings);

module.exports = router;
