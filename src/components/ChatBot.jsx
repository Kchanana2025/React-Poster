import React from 'react';
import './ChatBot.module.css'; // We'll create this CSS file for styling

function Chatbot({ onClose }) {
    return (
        <div className="chatbot">
            <div className="chatbot-header">
                <h2>Chatbot</h2>
                <button onClick={onClose} className="close-button">X</button>
            </div>
            <div className="chatbot-content">
                {/* Chatbot content goes here */}
                <p>Hi! How can I help you today?</p>
            </div>
        </div>
    );
}

export default Chatbot;
