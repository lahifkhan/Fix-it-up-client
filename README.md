# FixItUp

**Live Site URL:** https://tangerine-platypus-2af136.netlify.app  
**Backend Repository:** https://github.com/lahifkhan/fix-it-up-server

---

## Overview

FixItUp is a community-driven platform where users can report local issues, contribute funds, and help resolve community problems together. It connects people who identify issues with those willing to support the solution, promoting cleanliness, safety, and civic responsibility.

---

## Features

- **User Authentication**  
  Secure user login and registration using Firebase Authentication.

- **Issue Reporting & Management**  
  Users can add, edit, and delete their issues with images, descriptions, and budgets.

- **Community Contributions**  
  Anyone can contribute funds to support issues, and view all contributors.

- **Dynamic Page Titles**  
  Automatically updates browser tab title for every route.

- **Theme Toggle**  
  Light/Dark theme implemented using DaisyUI.

- **Responsive UI**  
  Fully optimized for mobile, tablet, and desktop devices.

- **Lottie Animations**  
  Smooth and interactive animations using Lottie React.

---

## Technologies Used

### Frontend

- React.js (Vite)
- React Router DOM
- Tailwind CSS
- DaisyUI
- Axios
- Firebase Authentication
- Lottie React
- React Hot Toast
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- CORS
- dotenv

---

## Dependencies

### Client-side

- react
- react-dom
- react-router-dom
- axios
- firebase
- react-hot-toast
- lottie-react
- tailwindcss
- daisyui
- react-icons

### Server-side

- express
- mongodb
- cors
- dotenv
- nodemon

---

## How to Run Locally

### 1. Clone the repositories

```bash
git clone <frontend_repo_url>
git clone <backend_repo_url>
```

### 2. Install frontend dependencies

```bash
cd fixitup-client
npm install
npm run dev
```

### 3. Install backend dependencies

```bash
cd fixitup-server
npm install
nodemon index.js

```

### 4. Environment Variables

```bash
   Frontend (.env)
   VITE_apiKey=your_firebase_key
   VITE_authDomain=your_firebase_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_sender_id
   VITE_appId=your_app_id
   VITE_serverUrl=http://localhost:3000
```

### 4. Backend (.env)

```bash
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
PORT=3000
```
