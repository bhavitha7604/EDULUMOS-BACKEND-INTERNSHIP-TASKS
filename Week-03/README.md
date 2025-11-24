AI Prompt Saver API
---
The AI Prompt Saver API is a backend service designed to store, organize, and manage reusable AI prompts for models such as ChatGPT, Gemini, and Claude.
It supports prompt storage, tag categorization, advanced search, favorites, and user authentication, providing an efficient way to manage text-based prompt data.

---

✨ Key Features:
User Authentication
Secure login and registration using JWT.
Prompt Management (CRUD):
Create, read, update, and delete prompts.
Tag-Based Organization:
Categorize prompts using tags like #creative, #coding, #summary.
Search & Filter Functionality:
Search prompts by keywords, tags, or both.
Favorites System:
Mark or unmark prompts as "favorite" for quick access.
MongoDB Integration:
Efficient storage with indexing for optimized search.

---

🛠 Technology Stack:
Category	Technology:
Backend Framework	Node.js, Express.js
Database	MongoDB, Mongoose
Authentication	JSON Web Tokens (JWT)
Environment Config	dotenv
Development	Nodemon

---

📂 Project Structure

AI-Prompt-Saver-API/
│
├── controllers/          # Request handlers
│   ├── authController.js
│   └── promptController.js
│
├── models/               # MongoDB schemas
│   ├── userModel.js
│   └── promptModel.js
│
├── routes/               # Application routes
│   ├── authRoutes.js
│   └── promptRoutes.js
│
├── middleware/           # Authentication middleware
│   └── authMiddleware.js
│
├── config/               # Database connection
│   └── db.js
│
├── .env                  # Environment variables
├── index.js              # Server entry point
├── package.json
└── README.md


---

⚙ Installation & Setup:

1. Clone the Repository
2. Install Dependencies:
npm install
3. Configure Environment:
Create a .env file and add:
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
4. Start the Server:
npm start
The server runs at:
👉 http://localhost:5000

---

📌 API Endpoints:
Authentication Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and receive JWT token

---

Prompt Routes

Method	Endpoint	Description:
GET	/api/prompts	Retrieve all prompts (supports search & filters)
POST	/api/prompts	Create a new prompt
GET	/api/prompts/:id	Retrieve a single prompt by ID
PATCH	/api/prompts/:id	Update prompt details
DELETE	/api/prompts/:id	Remove a prompt
PATCH	/api/prompts/:id/favorite	Toggle favorite status

---

🔍 Search & Filter Capabilities:
Examples:

Search by keyword
GET /api/prompts?search=javascript
Filter by tag
GET /api/prompts?tag=coding
Combined search + filter
GET /api/prompts?tag=creative&search=story

---

🎯 Learning Outcomes:

Designing RESTful APIs
Implementing JWT-based authentication
MongoDB schema design & indexing
Query optimization for text search
Managing relational-like data using NoSQL
Clean code organization and modular structure
