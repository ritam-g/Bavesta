const express = require("express");
const { body } = require("express-validator");
const {
  createHotelBooking,
  createRestaurantBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking,
} = require("../controllers/bookingController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/hotel",
  [
    body("customerName").isString().trim().isLength({ min: 2, max: 120 }).withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").isString().trim().isLength({ min: 7, max: 25 }).withMessage("Phone is required"),
    body("roomId").isString().trim().notEmpty().withMessage("Room ID is required"),
    body("roomName").isString().trim().isLength({ min: 2, max: 120 }).withMessage("Room name is required"),
    body("checkInDate").isISO8601().withMessage("Valid check-in date is required"),
    body("checkOutDate").isISO8601().withMessage("Valid check-out date is required"),
    body("guests").isInt({ min: 1, max: 12 }).withMessage("Guests must be between 1 and 12"),
    body("specialRequest").optional().isString().isLength({ max: 1200 }),
  ],
  createHotelBooking,
);

router.post(
  "/restaurant",
  [
    body("customerName").isString().trim().isLength({ min: 2, max: 120 }).withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").isString().trim().isLength({ min: 7, max: 25 }).withMessage("Phone is required"),
    body("reservationDate").isISO8601().withMessage("Valid reservation date is required"),
    body("reservationTime").isString().trim().isLength({ min: 3, max: 20 }).withMessage("Reservation time is required"),
    body("guests").isInt({ min: 1, max: 20 }).withMessage("Guests must be between 1 and 20"),
    body("specialRequest").optional().isString().isLength({ max: 1200 }),
  ],
  createRestaurantBooking,
);

router.get("/", protect, adminOnly, getBookings);
router.put(
  "/:id/status",
  protect,
  adminOnly,
  [body("status").isIn(["pending", "confirmed", "cancelled"]).withMessage("Invalid status")],
  updateBookingStatus,
);
router.delete("/:id", protect, adminOnly, deleteBooking);

module.exports = router;
