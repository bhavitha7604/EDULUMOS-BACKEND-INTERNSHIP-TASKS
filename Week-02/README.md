📁 Task 02 – File Upload Manager (Mini Cloud Storage)
---
This project is a Mini Cloud Storage system where users can upload, view, and delete files through a simple and clean web interface. It is built using Node.js, Express, and Multer to safely handle multiple file types with backend validation.

---

📌 Features:
✔ File Upload
Upload different file types (images, documents, PDFs, etc.)
Backend validates file type and size before upload
Files are stored locally
Each uploaded file has metadata:
File name
Upload date
File size

✔ File Management
View all uploaded files
Preview or download files
Delete files securely from the interface

✔ Simple UI
Clean and easy-to-use frontend
Built using basic HTML, CSS, and JavaScript

---

🛠 Technologies Used:
Node.js
Express.js
Multer
HTML / CSS / JavaScript

---

📦 How to Run:
1. Install dependencies
npm install
2. Start the server
npm start
3. Open in browser
http://localhost:3500
---

📂 Folder Structure:
/project-folder
│── /uploads       → stores uploaded files
│── /public        → HTML, CSS, JS files
│── server.js      → main Express server
│── package.json

---

🎯 Skills Learned:
Working with Multer for file uploads
Express routing and backend error handling
Managing and serving static files
Implementing simple cloud-like file storage logic
