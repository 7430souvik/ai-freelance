const express = require("express");
const Contact = require("../models/contact");
const sendContactEmail = require("../services/emailService");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      service,
      budget,
      message,
    } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      company,
      service,
      budget,
      message,
    });

    await sendContactEmail(contact);

    res.status(201).json({
      success: true,
      message: "Your project request has been received.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

module.exports = router;