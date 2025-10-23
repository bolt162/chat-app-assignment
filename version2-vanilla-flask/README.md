# Chat Application - Version 2: Vanilla JavaScript + Flask + Flask-SocketIO

This is a real-time chat application built with Vanilla JavaScript for the frontend and Python Flask with Flask-SocketIO for the backend.

## Architecture

- **Frontend**: Vanilla JavaScript (No framework, pure DOM manipulation)
- **Backend**: Python Flask (Lightweight web framework)
- **Real-time Communication**: Flask-SocketIO (WebSocket library for Flask)

## Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

## Installation and Running Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd version2-vanilla-flask/backend
```

2. (Optional but recommended) Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Start the Flask server:
```bash
python app.py
```

The server will run on `http://localhost:5000`

## Accessing the Application

Once the server is running, open your browser and navigate to:
```
http://localhost:5000
```

The Flask server serves both the backend API and the frontend files.

## Testing the Application

1. Open multiple browser windows/tabs at `http://localhost:5000`
2. Type a message in any window and press Send
3. The message will appear in all open windows in real-time

## How It Works

- The Vanilla JavaScript frontend connects to the Flask-SocketIO server
- When a user types a message and clicks Send, the JavaScript code emits it to the server via WebSocket
- The Flask server broadcasts the message to all connected clients
- All clients receive the message and use DOM manipulation to display it instantly

## Project Structure

```
version2-vanilla-flask/
├── backend/
│   ├── app.py              # Flask server with SocketIO
│   └── requirements.txt    # Python dependencies
└── frontend/
    ├── index.html          # HTML structure
    ├── style.css           # Styling
    └── app.js              # Client-side JavaScript logic
```

