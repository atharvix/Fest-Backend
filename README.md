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

├── .env.example # Sample env file

├── .gitignore

├── server.js

├── package.json


---

## 🔐 Environment Variables

Create a `.env` file in the root (not shared on GitHub):

➡️ Check `.env.example` for the format.

---

## 💻 How to Run Locally

1. Clone the repo: git clone https://github.com/your-username/Fest-Backend.git

2. Navigate to folder: cd sabrang-backend

3. Install dependencies: npm install

4. Create a `.env` file using `.env.example` format.

5. Start the server:
node server.js

6. Visit `http://localhost:3000` in your browser.

---

## 🙋 Author

Developed by **Atharv Mehrotra (atharvix)** – Full-stack Developer | Project Designer

📧 Email:  
- [atharvmehrotra@jklu.edu.in](mailto:atharvmehrotra@jklu.edu.in)  
- [mehrotraatharv15@gmail.com](mailto:mehrotraatharv15@gmail.com)

🔗 LinkedIn:  
[www.linkedin.com/in/atharvmehrotra27](https://www.linkedin.com/in/atharvmehrotra27)

