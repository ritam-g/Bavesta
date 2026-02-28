const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    bookingType: {
      type: String,
      enum: ["hotel_room", "restaurant_table"],
      required: true,
    },
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    roomId: {
      type: String,
      trim: true,
      required: function requiredRoomId() {
        return this.bookingType === "hotel_room";
      },
    },
    roomName: {
      type: String,
      trim: true,
      required: function requiredRoomName() {
        return this.bookingType === "hotel_room";
      },
    },
    checkInDate: {
      type: Date,
      required: function requiredCheckIn() {
        return this.bookingType === "hotel_room";
      },
    },
    checkOutDate: {
      type: Date,
      required: function requiredCheckOut() {
        return this.bookingType === "hotel_room";
      },
    },
    reservationDate: {
      type: Date,
      required: function requiredReservationDate() {
        return this.bookingType === "restaurant_table";
      },
    },
    reservationTime: {
      type: String,
      trim: true,
      required: function requiredReservationTime() {
        return this.bookingType === "restaurant_table";
      },
    },
    guests: {
      type: Number,
      required: true,
      min: 1,
      max: 20,
    },
    specialRequest: {
      type: String,
      trim: true,
      maxlength: 1200,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Booking", bookingSchema);
