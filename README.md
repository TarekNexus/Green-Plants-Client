# 🌿 Green Plants — Plant Care Tracker

## 🌐 Live Site
[🔗 Visit Green Plants](https://a10-green-plants.netlify.app/)
[🔗 GitHub Backend](https://github.com/TarekNexus/green-plants-server)


---

## 📖 Project Overview

**Green Plants** is a full-stack, mobile-responsive web application that empowers users to track and manage the care of their houseplants. Designed for plant enthusiasts, this platform offers features like adding new plants, setting watering schedules, tracking health, and more — all with secure, personalized user dashboards.

Users can easily register or log in, add their plants, and stay on top of care routines with a clean and visually appealing interface inspired by the theme: **Indoor Jungle** 🌱

---

## 🚀 Features

- 🔐 **Secure Authentication**
  - Email/Password and Google login
  - Conditional navigation and protected routes

- 🌱 **Plant Management System**
  - Add, view, update, and delete plants
  - Track watering frequency, health status, and care level

- 🗂️ **Categorized & Sorted Views**
  - Filter and sort by care level or next watering date
  - “My Plants” view shows only the user's added plants

- 🌗 **Dark/Light Theme Toggle**
  - User-friendly theme switcher for better accessibility

- 📅 **Reminders & Care Logging**
  - Date inputs for watering and health tracking
  - Styled success/error messages (No browser alerts)

---

## 🖼️ Pages & Components

- **Home Page**
  - Slider/Banner with plant care tips
  - Sections: New Plants, Beginner-Friendly Tips, Common Mistakes

- **Add Plant (Private Route)**
  - Dropdowns for category & care level
  - Date pickers and real-time feedback

- **All Plants**
  - Table view with sorting and details button

- **View Details (Private Route)**
  - Detailed plant info in card-style layout

- **My Plants (Private Route)**
  - Update/Delete with confirmation modal

- **Register/Login**
  - Validations and success/error handling via toast alerts

- **404 Page**
  - Custom error page with navigation help

---

## 🛠️ Tech Stack

### 🔧 Frontend
- React + Vite
- React Router DOM
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- Lottie React (for animations)
- React Toastify (success/error messages)
- React Tooltip


### 🔧 Backend
- Node.js
- Express.js
- MongoDB 
- CORS, dotenv, 

---
💪 Getting Started (Run Locally)

✅ Prerequisites

Node.js v18+

Git

📅 Clone the repository

git clone https://github.com/TarekNexus/green-plants cd green-plants

📦 Install dependencies

npm install

⚙️ Setup environment variables

Create a .env file in the root folder and add: VITE_API_URL=your_api_url VITE_FIREBASE_API_KEY=your_firebase_api_key VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain VITE_FIREBASE_PROJECT_ID=your_project_id VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id VITE_FIREBASE_APP_ID=your_app_id



## 📦 Dependencies Used  

**Frontend Dependencies:**

```json
{
  "@tailwindcss/vite": "^4.1.7",
  "firebase": "^11.7.3",
  "lottie-react": "^2.4.1",
  "lucide-react": "^0.511.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.6.0",
  "react-router-dom": "^7.6.0",
  "react-toastify": "^11.0.5",
  "react-tooltip": "^5.28.1",
  "sweetalert2": "^11.21.2",
  "swiper": "^11.2.6",
  "tailwindcss": "^4.1.7"
}

