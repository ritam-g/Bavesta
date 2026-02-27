const { validationResult } = require("express-validator");
const Reservation = require("../models/Reservation");

const createReservation = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const { name, email, phone, date, time, numberOfGuests, specialRequest } = req.body;

    const reservationDate = new Date(date);
    if (Number.isNaN(reservationDate.getTime())) {
      return res.status(400).json({ message: "Invalid reservation date" });
    }

    const reservation = await Reservation.create({
      name,
      email,
      phone,
      date: reservationDate,
      time,
      numberOfGuests: Number(numberOfGuests),
      specialRequest: specialRequest || "",
    });

    return res.status(201).json({
      message: "Reservation created successfully",
      reservation,
    });
  } catch (error) {
    return next(error);
  }
};

const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    return res.json(reservations);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createReservation,
  getReservations,
};
