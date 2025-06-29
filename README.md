# 🔐 Password Manager - Full Stack (React + Node.js + MongoDB)

A full-stack password manager built using **React (Vite + Tailwind)** for the frontend and **Node.js + Express + MongoDB** for the backend.

This project allows you to securely store website credentials locally (in frontend version) or in a MongoDB database (in backend version).

---

## 🧰 Features

- ✅ Add, view, and delete website login credentials
- ✅ RESTful API using Express.js
- ✅ Secure storage in MongoDB (backend)
- ✅ Environment variables using `.env`
- ✅ Responsive UI built with Vite + React + Tailwind CSS
- ✅ CORS enabled (for frontend-backend integration)
- ✅ Safe GitHub profile link in footer

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Local or Atlas)
- **Tools:** dotenv, mongoose, body-parser, cors

---

## 📁 Project Structure

PasswordManager-Mongodb-/
│
├── Backend/ # Express backend
│ ├── node_modules/
│ ├── .env # (NOT uploaded – create manually)
│ ├── server.js
│ ├── package.json
│ └── package-lock.json
│
├── src/ # React frontend
├── public/
├── .gitignore
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── package.json # Frontend dependencies
└── README.md

yaml
Copy
Edit

---

## 🌍 API Endpoints (Backend)

| Method | Endpoint              | Description                    |
|--------|-----------------------|--------------------------------|
| GET    | `/api/passwords`      | Fetch all saved credentials    |
| POST   | `/api/passwords`      | Add a new credential           |
| DELETE | `/api/passwords/:id`  | Delete a credential by ID      |

---

## 📂 `.env` Setup (Backend)

Inside the `Backend/` folder, create a `.env` file:

```env
MONGODB_URI=mongodb://localhost:27017/passwordmanager
PORT=3000
🔒 Do not commit this file. It is listed in .gitignore.

🚀 How to Run the Project Locally
📦 Prerequisites
Node.js (v16+)

MongoDB (or MongoDB Atlas)

Git

▶️ Clone the Repository
bash
Copy
Edit
git clone https://github.com/GauravTarale77/PasswordManager-Mongodb-.git
cd PasswordManager-Mongodb-
⚙️ Start the Backend Server
bash
Copy
Edit
cd Backend
npm install
Create a .env file in the Backend folder with the following content:

env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/passwordmanager
PORT=3000
Start MongoDB (any one of the following):

bash
Copy
Edit
# On Windows (CMD)
net start MongoDB

# Or open MongoDB Compass

# Or use MongoDB Atlas connection string
Then run:

bash
Copy
Edit
npm run dev
✅ Your backend will be live at: http://localhost:3000

🌐 Start the Frontend
Open a new terminal and run:

bash
Copy
Edit
npm install
npm run dev
✅ Your frontend will be live at: http://localhost:5173
