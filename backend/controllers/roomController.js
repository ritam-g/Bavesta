const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const Room = require("../models/Room");

const toPublicImagePath = (filePath) => {
  return filePath.replace(/\\/g, "/").replace(/^.*uploads\//, "/uploads/");
};

const cleanupUploadedFiles = (files = []) => {
  files.forEach((file) => {
    if (file?.path && fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }
  });
};

const parseAvailable = (value, fallback) => {
  if (value === undefined) return fallback;
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value.toLowerCase() === "true";
  return fallback;
};

const getRooms = async (req, res, next) => {
  try {
    const filter = {};

    if (req.query.type) {
      filter.type = req.query.type;
    }

    if (req.query.available !== undefined) {
      filter.available = req.query.available === "true";
    }

    const rooms = await Room.find(filter).sort({ createdAt: -1 });
    return res.json(rooms);
  } catch (error) {
    return next(error);
  }
};

const getRoomById = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    return res.json(room);
  } catch (error) {
    return next(error);
  }
};

const createRoom = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      cleanupUploadedFiles(req.files);
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const amenities = req.body.amenities
      ? String(req.body.amenities)
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [];

    const images = (req.files || []).map((file) => toPublicImagePath(file.path));

    const room = await Room.create({
      name: req.body.name,
      type: req.body.type,
      pricePerNight: Number(req.body.pricePerNight),
      images,
      description: req.body.description,
      capacity: Number(req.body.capacity),
      amenities,
      available: parseAvailable(req.body.available, true),
    });

    return res.status(201).json(room);
  } catch (error) {
    cleanupUploadedFiles(req.files);
    return next(error);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      cleanupUploadedFiles(req.files);
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const room = await Room.findById(req.params.id);
    if (!room) {
      cleanupUploadedFiles(req.files);
      return res.status(404).json({ message: "Room not found" });
    }

    const amenities = req.body.amenities
      ? String(req.body.amenities)
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : room.amenities;

    const newImages = (req.files || []).map((file) => toPublicImagePath(file.path));

    room.name = req.body.name ?? room.name;
    room.type = req.body.type ?? room.type;
    room.pricePerNight =
      req.body.pricePerNight !== undefined ? Number(req.body.pricePerNight) : room.pricePerNight;
    room.description = req.body.description ?? room.description;
    room.capacity = req.body.capacity !== undefined ? Number(req.body.capacity) : room.capacity;
    room.available = parseAvailable(req.body.available, room.available);
    room.amenities = amenities;
    if (newImages.length > 0) {
      room.images = newImages;
    }

    await room.save();
    return res.json(room);
  } catch (error) {
    cleanupUploadedFiles(req.files);
    return next(error);
  }
};

const deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    room.images.forEach((image) => {
      const fullPath = path.join(process.cwd(), image.replace(/^\//, ""));
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
    });

    await room.deleteOne();
    return res.json({ message: "Room deleted" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};
