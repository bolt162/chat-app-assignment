// Connect to the Flask-SocketIO server
const socket = io('http://localhost:5000');

// DOM elements
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages-container');

// Session info
let sessionInfo = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Chat application loaded');
    messageInput.focus();
});

// Socket connection events
socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

// Listen for session info from server
socket.on('session_info', (info) => {
    sessionInfo = info;
    console.log('Session info received:', info);
});

// Listen for incoming messages
socket.on('chat_message', (message) => {
    console.log('Message received:', message);
    displayMessage(message);
});

// Handle form submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const message = messageInput.value.trim();
    
    if (message && sessionInfo) {
        // Send message to server with session info
        socket.emit('chat_message', {
            text: message,
            sessionId: sessionInfo.sessionId,
            color: sessionInfo.color
        });
        
        // Clear input
        messageInput.value = '';
        messageInput.focus();
    }
});

// Display message in the UI
function displayMessage(messageData) {
    // Create message element
    const messageElement = document.createElement('div');
    
    // Check if this is own message
    const isOwnMessage = sessionInfo && messageData.sessionId === sessionInfo.sessionId;
    
    // Set classes based on sender
    messageElement.className = `message ${isOwnMessage ? 'message-right' : 'message-left'}`;
    
    // Set background color
    messageElement.style.backgroundColor = messageData.color;
    
    // Set text content
    messageElement.textContent = messageData.text;
    
    // Add to container
    messagesContainer.appendChild(messageElement);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

