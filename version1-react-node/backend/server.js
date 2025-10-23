const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 4000;

// Generate random color for user
function generateRandomColor() {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52B788',
    '#E76F51', '#2A9D8F', '#E9C46A', '#F4A261', '#264653'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected');
  
  // Assign a random color to this user
  const userColor = generateRandomColor();
  
  // Send the socket ID and color to the client
  socket.emit('session_info', { sessionId: socket.id, color: userColor });

  // Listen for chat messages
  socket.on('chat_message', (data) => {
    console.log('Message received:', data);
    // Broadcast message to all connected clients with session info
    io.emit('chat_message', {
      text: data.text,
      sessionId: data.sessionId,
      color: data.color
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

