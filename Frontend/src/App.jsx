import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BASE_URL } from './config';

const App = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatActive, setIsChatActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  useEffect(() => {
    if (!conversationId) {
      setConversationId(Date.now().toString());
    }
  }, [conversationId]);

  const sendMessage = async (event) => {
    event.preventDefault();

    if (message.trim() === '') return;

    setLoading(true);
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: 'user', text: message },
    ]);

    try {
      const response = await fetch(`${BASE_URL}/chat/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversation_id: conversationId,
        }),
      });

      if (!response.ok) {
        throw new Error('Error with API request');
      }

      const data = await response.json();
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'ai', text: data.response },
      ]);
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="chat-box">
        <div className="chat-header">
          <h1>AI Chatbot</h1>
        </div>

        <div ref={chatContainerRef} className="chat-messages">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`message-row ${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}
            >
              <div className="message-bubble">{msg.text}</div>
            </div>
          ))}

          {loading && (
            <div className="message-row ai-message">
              <div className="message-bubble typing">AI is typing...</div>
            </div>
          )}
        </div>

        {isChatActive && (
          <form onSubmit={sendMessage} className="chat-form">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="chat-input"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="chat-button"
              disabled={loading || !message.trim()}
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
