const { validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const { sendEmail } = require("../config/mailer");

const createContactMessage = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Validation failed", errors: errors.array() });
    }

    const { name, email, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail) {
      try {
        await sendEmail({
          to: adminEmail,
          subject: "New Contact Inquiry",
          html: `
            <h3>New inquiry received</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        });
      } catch (emailError) {
        console.error("Contact notification email failed:", emailError.message);
      }
    }

    return res.status(201).json({ message: "Inquiry submitted successfully", contact });
  } catch (error) {
    return next(error);
  }
};

const getContactMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.json(messages);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createContactMessage,
  getContactMessages,
};
