import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! Ask me to write a query for your Users table.' }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Connects to your Node.js backend
      const res = await axios.post('http://localhost:5000/generate-sql', { prompt: input });
      setMessages(prev => [...prev, { role: 'ai', text: `Query generated successfully:`, code: res.data.sql }]);
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Connection refused by backend.";
      setMessages(prev => [...prev, { role: 'ai', text: `⚠️ Error: ${errorMsg}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">🛡️ Secure SQL Assistant</div>
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            <div className="bubble">
              {msg.text}
              {msg.code && <pre className="sql-block"><code>{msg.code}</code></pre>}
            </div>
          </div>
        ))}
        {loading && <div className="message ai"><div className="bubble typing">AI is thinking...</div></div>}
        <div ref={chatEndRef} />
      </div>
      <div className="input-area">
        <input 
          type="text" 
          value={input}
          placeholder="e.g., Get users who joined today"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Translate</button>
      </div>
    </div>
  );
}

export default App;