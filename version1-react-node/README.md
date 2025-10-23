# Chat Application - Version 1: React + Node.js + Socket.io

This is a real-time chat application built with React for the frontend and Node.js/Express with Socket.io for the backend.

## Architecture

- **Frontend**: React (Component-based UI framework)
- **Backend**: Node.js with Express (Web server)
- **Real-time Communication**: Socket.io (WebSocket library)

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation and Running Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd version1-react-node/backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on `http://localhost:4000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd version1-react-node/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React application:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Testing the Application

1. Open multiple browser windows/tabs at `http://localhost:3000`
2. Type a message in any window and press Send
3. The message will appear in all open windows in real-time

## How It Works

- The React frontend connects to the Socket.io server
- When a user types a message and clicks Send, it's emitted to the server via WebSocket
- The server broadcasts the message to all connected clients
- All clients receive and display the message instantly

