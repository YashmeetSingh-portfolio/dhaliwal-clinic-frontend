import React, { useState, useEffect, useRef } from 'react';
import './styles/aiProtectedPage.css';
import { FaMicrophone, FaPaperPlane, FaUser, FaRobot } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext'; // 👈 Import the global auth hook

// Define a type for our message objects for better structure
interface Message {
  text: string;
  sender: 'user' | 'ai';
}

export default function AIProtectedPage() {
  // 👇 Get everything we need from the global context
  const { sessionId, refetchCredits } = useAuth();
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // The old useEffect for managing session ID is now gone. The context handles it.

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !sessionId) return; // Also check if sessionId is ready

    const userMsg: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('http://localhost:3000/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // 👇 Use the sessionId from the global context
        body: JSON.stringify({ prompt: currentInput, sessionId: sessionId }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle errors like insufficient credits
        setMessages((prev) => [...prev, { text: data.error || 'An error occurred.', sender: 'ai' }]);
      } else {
        setMessages((prev) => [...prev, { text: data.generatedText, sender: 'ai' }]);
      }
      
      // 👇 Use the context function to update credits everywhere
      refetchCredits();

    } catch (err) {
      console.error('Error:', err);
      setMessages((prev) => [...prev, { text: 'Something went wrong. Please check your connection.', sender: 'ai' }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="ai-chat-page">
      <header className="ai-chat-header">
        <h1 className="ai-chat-title">AI Health Assistant</h1>
        <p className="ai-chat-description">Ask health questions and get instant AI responses.</p>
      </header>

      <main className="ai-chat-container">
        <div className="ai-chat-messages">
          {messages.length === 0 && !isTyping ? (
            <div className="ai-placeholder">Start a conversation with our AI assistant...</div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`ai-msg-container ${msg.sender === 'ai' ? 'ai-reply-container' : 'ai-user-container'}`}
              >
                <div className="ai-msg-wrapper">
                  <div className="ai-msg-icon">
                    {msg.sender === 'user' ? <FaUser /> : <FaRobot />}
                  </div>
                  <div className="ai-msg">{msg.text}</div>
                </div>
              </div>
            ))
          )}
          {isTyping && (
            <div className="ai-msg-container ai-reply-container">
               <div className="ai-msg-wrapper">
                  <div className="ai-msg-icon"><FaRobot /></div>
                  <div className="ai-msg ai-typing">
                    <div className="typing-indicator">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
               </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </main>

      <form className="ai-chat-input-area" onSubmit={handleSend}>
        <div className="ai-chat-input-wrapper">
            <input
            type="text"
            placeholder="Type your health question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="ai-send-button">
            <FaPaperPlane />
            </button>
        </div>
        <button type="button" className="ai-voice-button">
          <FaMicrophone />
        </button>
      </form>
    </div>
  );
}