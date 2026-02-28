const express = require("express");
const { body } = require("express-validator");
const {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

const createServiceValidators = [
  body("title").isString().trim().isLength({ min: 3, max: 140 }).withMessage("Title is required"),
  body("description")
    .isString()
    .trim()
    .isLength({ min: 20, max: 2000 })
    .withMessage("Description must be between 20 and 2000 chars"),
  body("category")
    .isString()
    .trim()
    .isLength({ min: 2, max: 120 })
    .withMessage("Category is required"),
  body("benefits")
    .optional()
    .custom((value) => {
      if (Array.isArray(value)) return true;
      if (typeof value === "string") return true;
      throw new Error("Benefits must be an array or comma-separated string");
    }),
];

const updateServiceValidators = [
  body("title").optional().isString().trim().isLength({ min: 3, max: 140 }).withMessage("Title is required"),
  body("description")
    .optional()
    .isString()
    .trim()
    .isLength({ min: 20, max: 2000 })
    .withMessage("Description must be between 20 and 2000 chars"),
  body("category")
    .optional()
    .isString()
    .trim()
    .isLength({ min: 2, max: 120 })
    .withMessage("Category is required"),
  body("benefits")
    .optional()
    .custom((value) => {
      if (Array.isArray(value)) return true;
      if (typeof value === "string") return true;
      throw new Error("Benefits must be an array or comma-separated string");
    }),
];

router.get("/", getServices);
router.get("/:id", getServiceById);
router.post("/", protect, adminOnly, createServiceValidators, createService);
router.put("/:id", protect, adminOnly, updateServiceValidators, updateService);
router.delete("/:id", protect, adminOnly, deleteService);

module.exports = router;
