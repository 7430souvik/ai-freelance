require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function test() {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Portfolio Email Test",
      text: "If you received this email, Nodemailer is working.",
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("EMAIL ERROR:");
    console.error(error);
  }
}

test();