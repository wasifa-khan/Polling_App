
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // For handling JSON requests

// Setup Socket.io for real-time communication
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow connections from any domain during development
  },
});

// Socket connection
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle vote updates
  socket.on('vote', (pollId) => {
    io.emit('updatePoll', pollId); // Broadcast to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Serve static files in production (image storage)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
}

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
