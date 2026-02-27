const { validationResult } = require("express-validator");
const Booking = require("../models/Booking");
const Room = require("../models/Room");
const { sendEmail } = require("../config/mailer");

const createBooking = async (req, res, next) => {
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
      checkInDate,
      checkOutDate,
      guests,
    } = req.body;

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Selected room was not found" });
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (Number.isNaN(checkIn.getTime()) || Number.isNaN(checkOut.getTime())) {
      return res.status(400).json({ message: "Invalid booking dates" });
    }

    if (checkOut <= checkIn) {
      return res.status(400).json({ message: "Check-out must be after check-in" });
    }

    if (Number(guests) > room.capacity) {
      return res.status(400).json({ message: `Max guest capacity for this room is ${room.capacity}` });
    }

    const overlapping = await Booking.exists({
      roomId,
      status: { $in: ["pending", "confirmed"] },
      $or: [
        {
          checkInDate: { $lt: checkOut },
          checkOutDate: { $gt: checkIn },
        },
      ],
    });

    if (overlapping) {
      return res.status(409).json({ message: "This room is not available for the selected dates" });
    }

    const booking = await Booking.create({
      customerName,
      email,
      phone,
      roomId,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      guests: Number(guests),
    });

    try {
      await sendEmail({
        to: email,
        subject: "Booking Request Received",
        html: `
          <h2>Thank you for your booking request, ${customerName}</h2>
          <p>Your booking for <strong>${room.name}</strong> has been received.</p>
          <p>Check-in: ${checkIn.toDateString()}</p>
          <p>Check-out: ${checkOut.toDateString()}</p>
          <p>Guests: ${guests}</p>
          <p>Status: Pending confirmation</p>
        `,
      });
    } catch (emailError) {
      console.error("Booking confirmation email failed:", emailError.message);
    }

    return res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    return next(error);
  }
};

const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find()
      .populate("roomId", "name type pricePerNight")
      .sort({ createdAt: -1 });

    return res.json(bookings);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createBooking,
  getBookings,
};
