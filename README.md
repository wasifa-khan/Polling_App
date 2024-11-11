# Polling_app
 
Polling App
A real-time polling application built with the MERN stack (MongoDB, Express, React, Node.js) and Vite for a faster frontend development experience. This app allows users to create polls, vote on them, and view results in real-time with support for anonymous voting, user authentication, and image optimization.

Features
User Authentication: Secure login and registration.
Poll Creation and Management: Authenticated users can create, update, and delete polls.
Anonymous Voting: Non-logged-in users can vote, but only authenticated users can create and manage polls.
Real-time Updates: Poll results update live using Socket.io.
Image Optimization: Poll images are optimized using APIs like TinyPNG or ShortPixel before being displayed.
Tech Stack
Frontend
Vite + React: Fast development environment and rich UI using React.
React Router: For navigation between views.
Socket.io Client: For real-time updates.
Backend
Node.js + Express: RESTful API with routing and middleware.
MongoDB + Mongoose: NoSQL database for storing poll and user data.
Socket.io: Real-time communication.
Multer: Handling file uploads.
Image Optimization API: Used for optimizing poll images.
Installation
Prerequisites
Node.js and npm installed.
MongoDB installed or a MongoDB Atlas account.
Optional: TinyPNG or ShortPixel API key for image optimization.
Setup
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/polling-app.git
cd polling-app
Backend Setup

Navigate to the server directory.

bash
Copy code
cd server
Install server dependencies:

bash
Copy code
npm install
Create a .env file in the server directory with the following variables:

plaintext
Copy code
MONGO_URI=mongodb://localhost:27017/polling-app
JWT_SECRET=your-jwt-secret
PORT=5000
Replace your-jwt-secret with your desired secret key. If using MongoDB Atlas, replace the URI with your connection string.

Start the backend server:

bash
Copy code
npm start
The backend should now be running on http://localhost:5000.

Frontend Setup

Navigate to the client directory.

bash
Copy code
cd ../client
Install client dependencies:

bash
Copy code
npm install
Start the frontend using Vite:

bash
Copy code
npm run dev
The frontend should now be running on http://localhost:5000.

Project Structure
plaintext
Copy code
polling-app/
├── client/           # Vite + React frontend
│   ├── src/
│   └── ...
├── server/           # Express + Node.js backend
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── middleware/   # Auth middleware
│   └── ...
└── README.md
Usage
Authentication: Register or log in to access poll creation and management features.
Create Polls: Authenticated users can create polls with a title, image, and options.
Vote Anonymously: Non-logged-in users can still vote on polls.
Real-Time Updates: See live results as votes are cast by other users.
Image Optimization: Poll images are optimized on upload.
API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Authenticate a user and return a token.
Polls
GET /api/polls: Retrieve all polls.
POST /api/polls: Create a new poll (authenticated users only).
GET /api/polls/:id: Get details of a specific poll.
PUT /api/polls/:id: Update an existing poll (authenticated users only).
DELETE /api/polls/:id: Delete a poll (authenticated users only).
Voting
POST /api/polls/:id/vote: Cast a vote on a specific poll.
Image Optimization (Optional)
To use TinyPNG or ShortPixel, configure the API key in the backend where image uploads are handled. Refer to the TinyPNG or ShortPixel documentation for detailed setup.

Real-Time Voting with Socket.io
Socket.io is used to broadcast vote updates in real-time. Open multiple browser tabs to see votes update live as they are cast.
