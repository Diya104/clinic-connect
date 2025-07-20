# Clinic Connect

## 🩺 Project Overview

**Clinic Connect** is a full-stack doctor appointment booking application that optimizes the scheduling process between patients, doctors, and administrators. It is designed to reduce waiting times, streamline appointment management, and enhance communication among all parties.

## 🎯 Problem Statement

Traditional appointment systems often lead to long waiting times, inefficient resource utilization, and poor patient experience. This project aims to digitize and automate the end-to-end doctor appointment process for enhanced efficiency and convenience.

## ✅ Solution Highlights

Clinic Connect introduces a smart digital platform with the following key functionalities:

- **Users/Patients:**
  - Register and log in.
  - View a list of doctors categorized by specialty.
  - Book an appointment and make online payments via Stripe.
  - Cancel appointments when needed.

- **Doctors:**
  - Login through a dedicated doctor portal.
  - View all their appointments.
  - See the payment mode (online/offline).
  - Cancel or delete appointments as needed.

- **Admin:**
  - Add and manage doctors.
  - Set consultation fees for doctors.
  - Cancel or mark appointments as completed.

## 🧰 Tech Stack

### Frontend (User):
- React, JavaScript, Tailwind CSS, HTML, CSS

### Backend:
- Node.js, Express, MongoDB Atlas, JWT Authentication

### Tools & Integrations:
- Stripe (for online payments)

---

## 🚀 Getting Started – Run Locally

To run the project locally, follow the steps below:

1. Clone the repository
```
  git clone https://github.com/Diya104/clinic-connect.git
```

2. Navigate to backend and run build commands
```
  cd clinic-connect/backend
  npm install
```
  Create a .env file in the backend directory and add your environment variables (MongoDB URI, Stripe keys, JWT secrets, etc.)
```
  npm run server
```
3. Open a new terminal and navigate to frontend and run build commands
```
  cd clinic-connect/user-frontend
  npm install
  npm run dev
```
4. Open a new terminal and navigate to admin and run build commands
```
  cd clinic-connect/user-admin
  npm install
  npm run dev
```

## 📌 Future Scope

- 📧 **Notification System**  
  Implement automated email and SMS reminders for upcoming appointments and cancellations using services like Twilio and Nodemailer.

- 📄 **Prescription Management**  
  Enable doctors to upload prescriptions for each appointment, and allow users to view and download them securely.

- 📊 **Advanced Analytics Dashboard**  
  Provide doctors and admins with insightful analytics including appointment trends, patient history, revenue tracking, and real-time statistics.

## Website:  
- [Clinic Connect](https://clinic-connect-frontend.vercel.app/)
- [Clinic Connect (Admin Panel)](https://clinic-connect-admin.vercel.app/)
            
            
