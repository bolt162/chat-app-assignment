from flask import Flask, send_from_directory, request
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import os
import random

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
CORS(app)

socketio = SocketIO(app, cors_allowed_origins="*")

# Generate random color for user
def generate_random_color():
    colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
        '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52B788',
        '#E76F51', '#2A9D8F', '#E9C46A', '#F4A261', '#264653'
    ]
    return random.choice(colors)

# Serve the frontend
@app.route('/')
def index():
    frontend_path = os.path.join(os.path.dirname(__file__), '..', 'frontend')
    return send_from_directory(frontend_path, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    frontend_path = os.path.join(os.path.dirname(__file__), '..', 'frontend')
    return send_from_directory(frontend_path, path)

# WebSocket event handlers
@socketio.on('connect')
def handle_connect():
    print('Client connected')
    # Assign a random color to this user
    user_color = generate_random_color()
    # Send the session ID and color to the client
    emit('session_info', {'sessionId': request.sid, 'color': user_color})

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('chat_message')
def handle_message(data):
    print(f'Message received: {data}')
    # Broadcast message to all connected clients with session info
    emit('chat_message', {
        'text': data['text'],
        'sessionId': data['sessionId'],
        'color': data['color']
    }, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)

