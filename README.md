

# 🛒 MERN E-commerce Project (Electronics)

A full-stack e-commerce application built using the **MERN stack** (MongoDB, Express, React, Node.js).
This project is designed not just as a functional app, but as a **learning + open-source contribution system** with intentional gaps for improvement.

---



## 🚀 Features

### 👤 Authentication

* User registration
* User login (JWT-based - partial implementation)

### 🛍️ Product Management

* Product listing
* Pagination (basic)
* Filtering by category & brand

### 🛒 Cart System

* Add to cart
* Remove from cart
* Basic cart count (frontend state)

### 📦 Orders

* Place orders
* View orders

---

## 🧠 Tech Stack

### Frontend

* React
* React Router
* Context API (basic global state)

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

---

## 📁 Project Structure

```
/client   → React frontend
/server   → Express backend
```

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```bash
cd server
npm install
npm run dev
```

### 💻 Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🌐 API Endpoints

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### 📦 Products

* `GET /api/products`
* `POST /api/products`

### 🛒 Cart

* `GET /api/cart`
* `POST /api/cart/add`
* `DELETE /api/cart/:index`

### 📦 Orders

* `POST /api/orders`
* `GET /api/orders`

---

## 🧪 Example Queries

### Pagination

```
/api/products?page=1
```

### Filtering

```
/api/products?category=smartphone
/api/products?brand=Apple
```

### Combined

```
/api/products?category=smartphone&brand=Apple&page=1
```

---

## ⚠️ Known Limitations (Intentional)

This project is designed for learning, so some features are intentionally incomplete:

### Backend

* Pagination limit is hardcoded
* No sorting support
* No search functionality
* No database indexing

### Frontend

* No pagination UI
* Filters not implemented in UI
* Cart not synced with backend
* Hardcoded userId (no full auth flow)

### Architecture

* Context API not scalable
* No protected routes
* Inconsistent API response format

---

## 🧩 Contribution Opportunities

You can contribute by working on:

* 🔄 Sync cart with backend
* 🔍 Add search functionality
* 📊 Implement sorting (price, name)
* ⚡ Add database indexing
* 🎯 Improve state management (Redux)
* 🔐 Add protected routes (JWT)
* 🎨 Enhance UI/UX (pagination, filters)

---

## 💡 Why This Project Matters

This is not just a CRUD app. It is:

* ✅ A **portfolio-ready MERN project**
* ✅ A **system design practice base**
* ✅ An **open-source contribution platform**

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Work on an issue
4. Submit a Pull Request

---

## 📌 Future Improvements

* Payment integration (Stripe/Razorpay)
* Advanced search & filtering
* Caching (Redis)
* Admin dashboard
* Deployment (Docker + Cloud)

---

## ⭐ Final Note

This project is built to help you:

* Learn real-world development
* Think like a system designer
* Contribute like an open-source developer

If you found this useful, consider giving it a ⭐

---
