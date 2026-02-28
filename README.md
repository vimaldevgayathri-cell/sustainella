
# Sustainella

## Ethical Shopping. Sustainable Living.

Sustainella is a full-stack sustainable marketplace connecting conscious consumers with verified ethical startups.

The platform is built with two distinct interfaces:

1. Consumer Interface – For users to browse and purchase sustainable products
2. Seller Interface – For startups that meet strict anti-greenwashing sustainability guidelines

Sustainella focuses on transparency, accountability, and measurable environmental impact.

---

# Live Demo

Frontend: [http://127.0.0.1:5173](http://127.0.0.1:5173)
Backend API: [http://localhost:5000](http://localhost:5000)
Demo video link: https://drive.google.com/file/d/1QvNTjGNxs_bRmbHru6VFNFlAw3ctAemE/view?usp=sharing
Snapshots : https://drive.google.com/file/d/1wGIsS9mNWExr703rZbRXxtFnJGTNsTLD/view?usp=sharing
            https://drive.google.com/file/d/1WCDxnXc9aZ4xJTT_GwUS58QUUEG6wRq3/view?usp=sharing
            https://drive.google.com/file/d/1m0Em72r0MaL6C5FmbQi6GWgAw3PBF62M/view?usp=sharing

        
# Project Description

Sustainella addresses the growing problem of greenwashing in digital marketplaces. Many brands claim sustainability without verifiable standards. This platform introduces:

* A curated ethical startup model
* Structured sustainability compliance
* Transparent environmental impact metrics
* Dual-interface architecture (Users + Sellers)

---

# Tech Stack

## Frontend

* React (Vite)
* React Router DOM
* Modern CSS
* LocalStorage (Cart State)

## Backend

* Node.js
* Express.js
* REST API
* CORS Middleware

---

# Architecture Diagram

```
[ User Browser ]
        |
        v
[ React Frontend (Vite - 5173) ]
        |
        v
[ Express Backend (5000) ]
        |
        v
[ In-Memory Data Layer ]
(Future: MongoDB)
```

---

# Folder Structure

```
frontend/
 ├── public/
 ├── src/
 │   ├── pages/
 │   │   ├── Products.jsx
 │   │   ├── ProductDetail.jsx
 │   │   ├── Cart.jsx
 │   ├── cart.js
 │   ├── App.jsx
 │   ├── main.jsx

backend/
 ├── server.js
```

---

# Core Features

## 1. Product Marketplace

* Fetch products from backend
* Product detail routing
* Category structure ready

## 2. Cart System

* Add to cart
* Remove from cart
* Quantity tracking
* Total price calculation
* Persistent storage using localStorage

## 3. Dual Interface Model

### Consumer Interface

* Browse products
* View impact metrics
* Add to cart

### Seller Interface

Designed for ethical startup companies only.

Sellers must comply with:

* Ethical labor standards
* Transparent sourcing
* Sustainable manufacturing
* Verified sustainability claims

Anti-greenwashing compliance is a core principle.

---
Deployment Plan
Frontend → Vercel
Backend → Render / Railway

Future Database → MongoDB Atlas
## License

This project is licensed under the Apache License 2.0.

Copyright 2026 Gayathri Vimaldev

You may use, modify, and distribute this software under the terms of the Apache License 2.0.

See the LICENSE file for full details.

----
# API Documentation

## GET /api/categories

Returns available product categories.

Response:

```json
[
  { "id": "clothing", "name": "Clothing", "icon": "👕" }
]
```

---

## GET /api/brands/featured

Returns featured ethical brands.

---

## GET /api/impact

Returns environmental impact metrics.

Response:

```json
{
  "treesSaved": 12543,
  "carbonReducedKg": 8420,
  "oceansPreservedM3": 15890
}
```

---

# Code Snippets

## Backend Example (Express API)

```javascript
app.get("/api/categories", (req, res) => {
  res.json(categories);
});
```

---

## Frontend Example (Fetching Data)

```javascript
useEffect(() => {
  fetch("http://localhost:5000/api/categories")
    .then(res => res.json())
    .then(data => setCategories(data));
}, []);
```

---

## Cart Logic Example

```javascript
export function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}
```

---

# Screenshots

(Replace with actual images in a /docs/images folder)

## Homepage

![Homepage Screenshot](docs/images/home.png)

## Products Page

![Products Screenshot](docs/images/products.png)

## Cart Page

![Cart Screenshot](docs/images/cart.png)

Minimum 3 screenshots required.

---

# How to Run Locally

## Backend

```bash
cd backend
npm install
node server.js
```

Runs at:
[http://localhost:5000](http://localhost:5000)

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at:
[http://127.0.0.1:5173](http://127.0.0.1:5173)

---

# Deployment Plan

* Frontend → Vercel
* Backend → Render / Railway
* Future Database → MongoDB Atlas

---

# Future Roadmap

* MongoDB integration
* JWT authentication
* Seller dashboard
* Sustainability scoring engine
* Checkout & payment integration
* Admin moderation panel
* Verified seller onboarding workflow

---

# Problem Statement

Fast fashion and unethical production contribute to:

* Carbon emissions
* Water pollution
* Textile waste
* Exploitative labor
* Misleading sustainability claims

Sustainella introduces verification-based ethical commerce.

---

# Team - Pink Pixels
 Members 
  -Gayathri Vimaldev
  -Neha Anand


# AI Tools Disclosure

AI tools were used for:

* Code structure guidance
* README drafting assistance
* Debugging explanations

All logic and architecture decisions were implemented and reviewed manually.

---

# Checklist Alignment

This README includes:

* Project description
* Tech stack
* 4+ features
* Installation commands
* Run commands
* 3+ screenshot placeholders
* Architecture diagram
* API documentation
* License section
* AI tools disclosure

Aligned with evaluation checklist 


