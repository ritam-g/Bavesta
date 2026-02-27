const path = require("path");
const multer = require("multer");
const express = require("express");
const { body } = require("express-validator");
const {
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/\s+/g, "-").toLowerCase();
    cb(null, `${Date.now()}-${safeName}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
    files: 5,
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image uploads are allowed"));
    }
    cb(null, true);
  },
});

const roomValidators = [
  body("name").optional().isString().trim().isLength({ min: 2 }),
  body("type").optional().isIn(["Deluxe", "Suite", "Standard"]),
  body("pricePerNight").optional().isFloat({ min: 0 }),
  body("description").optional().isString().trim().isLength({ min: 10 }),
  body("capacity").optional().isInt({ min: 1 }),
  body("available").optional().isBoolean().toBoolean(),
];

router.get("/", getRooms);
router.get("/:id", getRoomById);

router.post(
  "/",
  protect,
  adminOnly,
  upload.array("images", 5),
  roomValidators,
  createRoom,
);
router.put(
  "/:id",
  protect,
  adminOnly,
  upload.array("images", 5),
  roomValidators,
  updateRoom,
);
router.delete("/:id", protect, adminOnly, deleteRoom);

module.exports = router;
