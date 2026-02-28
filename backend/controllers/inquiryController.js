const { validationResult } = require("express-validator");
const Service = require("../models/Service");
const Inquiry = require("../models/Inquiry");
const { sendEmail } = require("../config/mailer");

const createInquiry = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const { name, email, phone, serviceId, message } = req.body;

    let service = null;
    if (serviceId) {
      service = await Service.findById(serviceId);
      if (!service) {
        return res.status(404).json({ message: "Selected service not found" });
      }
    }

    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      serviceId: service?._id,
      message,
    });

    try {
      await sendEmail({
        to: email,
        subject: "We received your hospitality inquiry",
        html: `
          <h2>Thank you for contacting Bavesta Hospitality Services</h2>
          <p>Dear ${name}, your inquiry has been received.</p>
          <p><strong>Service:</strong> ${service?.title || "General Inquiry"}</p>
          <p>Our team will contact you shortly.</p>
        `,
      });
    } catch (emailError) {
      console.error("Customer confirmation email failed:", emailError.message);
    }

    if (process.env.ADMIN_EMAIL) {
      try {
        await sendEmail({
          to: process.env.ADMIN_EMAIL,
          subject: "New service inquiry received",
          html: `
            <h3>New inquiry</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service?.title || "General Inquiry"}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        });
      } catch (adminEmailError) {
        console.error("Admin notification email failed:", adminEmailError.message);
      }
    }

    return res.status(201).json({ message: "Inquiry submitted successfully", inquiry });
  } catch (error) {
    return next(error);
  }
};

const getInquiries = async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find()
      .populate("serviceId", "title category")
      .sort({ createdAt: -1 });

    return res.json(inquiries);
  } catch (error) {
    return next(error);
  }
};

const updateInquiry = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    if (req.body.status !== undefined) inquiry.status = req.body.status;
    if (req.body.message !== undefined) inquiry.message = req.body.message;

    await inquiry.save();
    return res.json({ message: "Inquiry updated successfully", inquiry });
  } catch (error) {
    return next(error);
  }
};

const deleteInquiry = async (req, res, next) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    await inquiry.deleteOne();
    return res.json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createInquiry,
  getInquiries,
  updateInquiry,
  deleteInquiry,
};
