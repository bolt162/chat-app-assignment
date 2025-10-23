# Chat Application - Enterprise Software Platforms Assignment

This repository contains two implementations of a real-time chat application, built with different application frameworks as required by the assignment.

## Overview

A simple browser-based chat application where users can type messages that are instantly reflected across all active sessions. This demonstrates real-time communication using WebSocket technology with different framework combinations.

<img width="654" height="718" alt="Screenshot 2025-10-23 at 4 16 00 PM" src="https://github.com/user-attachments/assets/9770deb6-c818-4618-aabf-04039b19d971" />


## Two Versions

### Version 1: React + Node.js + Socket.io
**Location**: `version1-react-node/`

- **Frontend Framework**: React (Component-based JavaScript framework)
- **Backend Framework**: Node.js with Express
- **WebSocket Library**: Socket.io

[See detailed instructions →](version1-react-node/README.md)

### Version 2: Vanilla JavaScript + Flask + Flask-SocketIO
**Location**: `version2-vanilla-flask/`

- **Frontend Framework**: Vanilla JavaScript (No framework)
- **Backend Framework**: Python Flask
- **WebSocket Library**: Flask-SocketIO

[See detailed instructions →](version2-vanilla-flask/README.md)

## Quick Start

### Version 1 (React + Node.js)

**Terminal 1 - Backend:**
```bash
cd version1-react-node/backend
npm install
npm start
```

**Terminal 2 - Frontend:**
```bash
cd version1-react-node/frontend
npm install
npm start
```

Access at: `http://localhost:3000`

### Version 2 (Vanilla JS + Flask)

**Terminal:**
```bash
cd version2-vanilla-flask/backend
pip install -r requirements.txt
python app.py
```

Access at: `http://localhost:5000`

## Testing

1. Start either version following the instructions above
2. Open multiple browser windows/tabs to the application URL
3. Type a message in one window and press Send
4. The message should appear instantly in all open windows

## Repository Structure

```
chat-app/
├── README.md                          # This file
├── WRITEUP.md                         # Framework comparison writeup
├── version1-react-node/
│   ├── README.md                      # Version 1 instructions
│   ├── backend/                       # Node.js + Express + Socket.io
│   │   ├── package.json
│   │   └── server.js
│   └── frontend/                      # React application
│       ├── package.json
│       ├── public/
│       │   └── index.html
│       └── src/
│           ├── App.js
│           ├── App.css
│           ├── index.js
│           └── index.css
└── version2-vanilla-flask/
    ├── README.md                      # Version 2 instructions
    ├── backend/                       # Flask + Flask-SocketIO
    │   ├── requirements.txt
    │   └── app.py
    └── frontend/                      # Vanilla JavaScript
        ├── index.html
        ├── style.css
        └── app.js
```

## Requirements

### Version 1:
- Node.js (v14+)
- npm

### Version 2:
- Python 3.7+
- pip
