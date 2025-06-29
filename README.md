# 🔐 Password Manager - With Backend (Node.js + MongoDB)

A fullstack password manager built using **Node.js**, **Express**, **MongoDB**, and optionally **Next.js** or plain HTML/CSS/JS on the frontend.

---

## ✨ Features

- ✅ Add, retrieve, and delete passwords from MongoDB
- ✅ REST API using Express.js
- ✅ Environment variables via `.env`
- ✅ CORS-enabled for frontend integration
- ✅ Built with modular structure (routes, controllers, models)

---

## 🛠️ Tech Stack

- Backend: Node.js, Express.js, MongoDB
- Database: MongoDB (Local or Atlas)
- Optional Frontend: Next.js or React
- Tools: dotenv, mongoose, nodemon

---

## 🚀 How to Run the Backend

### Prerequisites

- MongoDB installed or MongoDB Atlas connection string
- Node.js installed

### Steps

```bash
git clone https://github.com/GauravTarale77/PasswordManager-With-Backend.git
cd PasswordManager-With-Backend

npm install

# Set up your .env file
touch .env
# Add:
# MONGODB_URI=your_mongodb_uri
# PORT=3000

npm run dev
