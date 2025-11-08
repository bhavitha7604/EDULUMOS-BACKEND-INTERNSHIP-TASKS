Edulumos Backend Tasks- Week-01


---

🔗 URL Shortener

A lightweight and efficient URL shortening service built with Node.js, Express, and MongoDB — similar to Bitly.

---

📘 Overview

This project demonstrates how to create and manage short URLs, redirect users to original links, and track analytics.
It focuses on REST API design, data persistence, and HTTP redirection.

---

⚙ Tech Stack

🟢 Node.js – Backend runtime
⚡ Express.js – Web framework
🍃 MongoDB (Mongoose) – Database layer

---

✨ Features

🔹 Generate unique short URLs
🔹 Redirect using HTTP 301
🔹 Track click counts and analytics
🔹 RESTful API endpoints

---

🚀 Setup & Run
git clone <repo-url>
cd url-shortener
npm install

Create a .env file:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:2500

Run the app:
npm run dev

---

🔗 API Endpoints
Method	Endpoint	Description:
POST	/api/shorten	Create short URL
GET	/:code	Redirect to original URL
GET	/api/links/:code	Get link details

---

🧠 Learning Outcomes
Designing REST APIs
Using MongoDB/Mongoose for persistence
Implementing redirect routes (301)
Tracking clicks and analytics



---
