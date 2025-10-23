import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:4000');

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [sessionInfo, setSessionInfo] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Listen for session info from server
    socket.on('session_info', (info) => {
      setSessionInfo(info);
      console.log('Session info received:', info);
    });

    // Listen for incoming messages
    socket.on('chat_message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('session_info');
      socket.off('chat_message');
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && sessionInfo) {
      socket.emit('chat_message', {
        text: message,
        sessionId: sessionInfo.sessionId,
        color: sessionInfo.color
      });
      setMessage('');
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <h1>Chat Application - React + Node.js</h1>
        <div className="messages-container">
          {messages.map((msg, index) => {
            const isOwnMessage = sessionInfo && msg.sessionId === sessionInfo.sessionId;
            return (
              <div 
                key={index} 
                className={`message ${isOwnMessage ? 'message-right' : 'message-left'}`}
                style={{ backgroundColor: msg.color }}
              >
                {msg.text}
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="message-input"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;

