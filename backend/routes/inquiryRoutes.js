const express = require("express");
const { body } = require("express-validator");
const {
  createInquiry,
  getInquiries,
  updateInquiry,
  deleteInquiry,
} = require("../controllers/inquiryController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  [
    body("name").isString().trim().isLength({ min: 2, max: 120 }).withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").isString().trim().isLength({ min: 7, max: 25 }).withMessage("Phone is required"),
    body("serviceId").optional({ values: "falsy" }).isMongoId().withMessage("Invalid service ID"),
    body("message")
      .isString()
      .trim()
      .isLength({ min: 10, max: 2500 })
      .withMessage("Message must be between 10 and 2500 chars"),
  ],
  createInquiry,
);

router.get("/", protect, adminOnly, getInquiries);
router.put(
  "/:id",
  protect,
  adminOnly,
  [
    body("status")
      .optional()
      .isIn(["new", "in_progress", "resolved"])
      .withMessage("Invalid inquiry status"),
    body("message")
      .optional()
      .isString()
      .trim()
      .isLength({ min: 10, max: 2500 })
      .withMessage("Message must be between 10 and 2500 chars"),
  ],
  updateInquiry,
);
router.delete("/:id", protect, adminOnly, deleteInquiry);

module.exports = router;
