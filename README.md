# 🌿 Green Plants — Plant Care Tracker

## 🌐 Live Site
[🔗 Visit Green Plants](https://a10-green-plants.netlify.app/)

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
- Date-fns

### 🔧 Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- CORS, dotenv, and JSON Web Tokens (JWT)

---

## 🔐 Environment Variables

Ensure you add a `.env` file with the following (do not expose in public repo):

