require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const Razorpay = require("razorpay");
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Route: Serve HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route: Create Razorpay Order (₹1)
app.post("/create-order", async (req, res) => {
  try {
    const order = await razorpay.orders.create({
      amount: 100, // ₹1 = 100 paise
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    });
    res.json(order);
  } catch (err) {
    console.error("Razorpay Order Error:", err);
    res.status(500).send("Error creating Razorpay order");
  }
});

// Route: After Payment → Generate QR, Send Email
app.post("/success", async (req, res) => {
  const { name, email, phone, event } = req.body;

  if (!name || !email || !phone || !event) {
    return res.status(400).send("Missing required fields.");
  }

  const userData = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent: ${event}`;
  const qrFilename = `qr-${Date.now()}.png`;
  const qrPath = path.join(__dirname, "public", qrFilename);

  try {
    // 1. Generate QR Code
    await QRCode.toFile(qrPath, userData);

    // 2. Send Email with QR
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Fest Registration Confirmation",
      text: "Thank you for registering! Your QR code is attached.",
      attachments: [{ filename: "qrcode.png", path: qrPath }],
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Email send error:", err);
        return res.status(500).send("Error sending email.");
      }

      console.log("Email sent:", info.response);

      // Clean up QR after delay
      setTimeout(() => fs.unlinkSync(qrPath), 10000);

      // Redirect to success page
      res.redirect("/success.html");
    });
  } catch (err) {
    console.error("QR or Email error:", err);
    res.status(500).send("An error occurred.");
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
