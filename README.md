# 🔐 Password Manager - Backend (Node.js + MongoDB)

A simple password manager backend built using **Node.js**, **Express**, and **MongoDB** to securely store and manage login credentials.

This version focuses on server-side functionality and uses a **MongoDB database** to persist data.

---

## 🧰 Features

- ✅ Add, retrieve, and delete saved credentials
- ✅ RESTful API using Express.js
- ✅ Secure storage in MongoDB
- ✅ Environment variable support with `.env` file
- ✅ CORS enabled (for frontend integration)

---

## 🛠️ Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB (Local or Atlas)
- Middleware: dotenv, mongoose, body-parser, cors

---

## 🚀 Getting Started

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) **OR** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Git](https://git-scm.com/downloads) *(if cloning)*

---

### 📁 Project Structure

PasswordManager-Mongodb-/
│
├── Backend/                 # Your backend project (Node.js + Express + MongoDB)
│   ├── node_modules/
│   ├── .env                 # Not uploaded to GitHub (correct!)
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│
├── node_modules/            # Frontend's node_modules (Vite/React)
├── public/
├── src/                     # Frontend React source code
├── .gitignore
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── package.json             # Frontend's package.json
└── index.html


---

## 📂 .env Setup

Inside the `Backend/` folder, create a `.env` file manually:

```env
MONGODB_URI=mongodb://localhost:27017/passwordmanager
PORT=3000

##  How to Run the Project Locally
1. Clone the repository
git clone https://github.com/GauravTarale77/PasswordManager-Mongodb-.git

2. Navigate to the backend folder
cd PasswordManager-Mongodb-/Backend

3. Install dependencies
npm install

4. Create .env file (as shown above)

5. Start MongoDB locally
If installed, run:

net start MongoDB

Or open MongoDB Compass or use MongoDB Atlas.

6. Run the server
npm run dev

7. Server will run on http://localhost:3000
