const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendContactEmail = async (contact) => {
  const { name, email, company, service, budget, message } = contact;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Project Inquiry — ${name}`,
    html: `
      <h2>New Project Inquiry</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget || "Not provided"}</p>

      <h3>Message</h3>
      <p>${message}</p>
    `,
  });
};

module.exports = sendContactEmail;