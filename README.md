# 🎉 Sabrang Registration 

A complete registration system for college fests or events with:

- ✅ Payment integration (Razorpay)
- ✅ QR code generation
- ✅ Email confirmation
- ✅ Simple frontend + Node.js backend

---

## 🚀 Features

- User fills a form (Name, Email, Phone, Event)
- Razorpay payment is initiated
- On successful payment:
  - A QR code is generated with user info
  - Email is sent with QR code attached
  - User is redirected to a success page

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS
- **Backend**: Node.js, Express
- **Libraries**:
  - `razorpay` – Payment Gateway
  - `nodemailer` – For sending emails
  - `qrcode` – To generate user QR
  - `dotenv` – For environment variables

---

## 📁 Folder Structure

sabrang-backend/

├── public/

│ ├── index.html

│ ├── success.html

│ └── style.css

│

├── utils/

│ └── generateQR.js

│

├── .env.example # Sample env file (DO NOT commit real .env)

├── .gitignore

├── server.js

├── package.json


---

## 🔐 Environment Variables

Create a `.env` file in the root (not shared on GitHub):

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_email_app_password

RAZORPAY_KEY_ID=your_razorpay_key_id

RAZORPAY_KEY_SECRET=your_razorpay_secret

➡️ Check `.env.example` for the format.

---

## 💻 How to Run Locally

1. Clone the repo: git clone https://github.com/your-username/sabrang-backend.git

2. Navigate to folder: cd sabrang-backend

3. Install dependencies: npm install

4. Create a `.env` file using `.env.example` format.

5. Start the server:
node server.js

6. Visit `http://localhost:3000` in your browser.

---

Made with ❤️ using Node.js by [Atharv Mehrotra]
