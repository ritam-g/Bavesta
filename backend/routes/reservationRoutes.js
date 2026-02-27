const express = require("express");
const { body } = require("express-validator");
const {
  createReservation,
  getReservations,
} = require("../controllers/reservationController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  [
    body("name").isString().trim().isLength({ min: 2 }).withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").isString().trim().isLength({ min: 7 }).withMessage("Phone is required"),
    body("date").isISO8601().withMessage("Valid reservation date is required"),
    body("time").isString().trim().isLength({ min: 3 }).withMessage("Reservation time is required"),
    body("numberOfGuests").isInt({ min: 1 }).withMessage("At least 1 guest is required"),
    body("specialRequest").optional().isString().isLength({ max: 500 }),
  ],
  createReservation,
);

router.get("/", protect, adminOnly, getReservations);

module.exports = router;
