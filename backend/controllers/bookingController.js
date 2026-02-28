const { validationResult } = require("express-validator");
const Booking = require("../models/Booking");
const { sendEmail } = require("../config/mailer");
const logger = require("../config/logger");

const safeDateLabel = (value) => {
  try {
    return new Date(value).toDateString();
  } catch {
    return String(value);
  }
};

const createHotelBooking = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const {
      customerName,
      email,
      phone,
      roomId,
      roomName,
      checkInDate,
      checkOutDate,
      guests,
      specialRequest,
    } = req.body;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (Number.isNaN(checkIn.getTime()) || Number.isNaN(checkOut.getTime())) {
      return res.status(400).json({ message: "Invalid check-in/check-out date" });
    }

    if (checkOut <= checkIn) {
      return res.status(400).json({ message: "Check-out must be after check-in" });
    }

    const booking = await Booking.create({
      bookingType: "hotel_room",
      customerName,
      email,
      phone,
      roomId,
      roomName,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      guests: Number(guests),
      specialRequest: specialRequest || "",
    });

    try {
      await sendEmail({
        to: email,
        subject: "Hotel booking request received",
        html: `
          <h2>Thank you for your booking request</h2>
          <p>Dear ${customerName}, we received your hotel booking request.</p>
          <p><strong>Room:</strong> ${roomName}</p>
          <p><strong>Check-in:</strong> ${safeDateLabel(checkIn)}</p>
          <p><strong>Check-out:</strong> ${safeDateLabel(checkOut)}</p>
          <p><strong>Guests:</strong> ${guests}</p>
          <p>Status: Pending confirmation</p>
        `,
      });
    } catch (error) {
      logger.error("Hotel customer booking email failed:", error.message);
    }

    if (process.env.ADMIN_EMAIL) {
      try {
        await sendEmail({
          to: process.env.ADMIN_EMAIL,
          subject: "New hotel room booking request",
          html: `
            <h3>New Hotel Booking</h3>
            <p><strong>Name:</strong> ${customerName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Room:</strong> ${roomName}</p>
            <p><strong>Check-in:</strong> ${safeDateLabel(checkIn)}</p>
            <p><strong>Check-out:</strong> ${safeDateLabel(checkOut)}</p>
            <p><strong>Guests:</strong> ${guests}</p>
          `,
        });
      } catch (error) {
        logger.error("Hotel admin booking email failed:", error.message);
      }
    }

    return res.status(201).json({ message: "Hotel booking submitted successfully", booking });
  } catch (error) {
    return next(error);
  }
};

const createRestaurantBooking = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const {
      customerName,
      email,
      phone,
      reservationDate,
      reservationTime,
      guests,
      specialRequest,
    } = req.body;

    const date = new Date(reservationDate);
    if (Number.isNaN(date.getTime())) {
      return res.status(400).json({ message: "Invalid reservation date" });
    }

    const booking = await Booking.create({
      bookingType: "restaurant_table",
      customerName,
      email,
      phone,
      reservationDate: date,
      reservationTime,
      guests: Number(guests),
      specialRequest: specialRequest || "",
    });

    try {
      await sendEmail({
        to: email,
        subject: "Restaurant table reservation request received",
        html: `
          <h2>Thank you for your reservation request</h2>
          <p>Dear ${customerName}, we received your table reservation request.</p>
          <p><strong>Date:</strong> ${safeDateLabel(date)}</p>
          <p><strong>Time:</strong> ${reservationTime}</p>
          <p><strong>Guests:</strong> ${guests}</p>
          <p>Status: Pending confirmation</p>
        `,
      });
    } catch (error) {
      logger.error("Restaurant customer reservation email failed:", error.message);
    }

    if (process.env.ADMIN_EMAIL) {
      try {
        await sendEmail({
          to: process.env.ADMIN_EMAIL,
          subject: "New restaurant table reservation",
          html: `
            <h3>New Restaurant Reservation</h3>
            <p><strong>Name:</strong> ${customerName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date:</strong> ${safeDateLabel(date)}</p>
            <p><strong>Time:</strong> ${reservationTime}</p>
            <p><strong>Guests:</strong> ${guests}</p>
          `,
        });
      } catch (error) {
        logger.error("Restaurant admin reservation email failed:", error.message);
      }
    }

    return res.status(201).json({ message: "Restaurant reservation submitted successfully", booking });
  } catch (error) {
    return next(error);
  }
};

const getBookings = async (req, res, next) => {
  try {
    const filter = {};

    if (req.query.type) {
      filter.bookingType = req.query.type;
    }

    const bookings = await Booking.find(filter).sort({ createdAt: -1 });
    return res.json(bookings);
  } catch (error) {
    return next(error);
  }
};

const updateBookingStatus = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = req.body.status;
    await booking.save();

    return res.json({ message: "Booking status updated", booking });
  } catch (error) {
    return next(error);
  }
};

const deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    await booking.deleteOne();
    return res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createHotelBooking,
  createRestaurantBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking,
};
