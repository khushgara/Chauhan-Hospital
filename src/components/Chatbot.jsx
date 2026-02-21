import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Chauhan Hospital. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "Hospital timing?",
    "Emergency contact?",
    "Where are you located?",
    "Book an appointment",
    "Available services?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('timing') || lowerInput.includes('hour') || lowerInput.includes('open')) {
      return "Chauhan Hospital is open 24/7 for emergencies. Our OPD timings are from 9:00 AM to 8:00 PM, Monday to Saturday.";
    }
    if (lowerInput.includes('emergency') || lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('number')) {
      return "For emergencies, please call us immediately at +91 9610005141. We are available 24/7.";
    }
    if (lowerInput.includes('locate') || lowerInput.includes('where') || lowerInput.includes('address')) {
      return "We are located in Jaipur, Rajasthan. You can find our exact location on the 'Contact' page via the Google Maps integration.";
    }
    if (lowerInput.includes('appointment') || lowerInput.includes('book')) {
      return "You can book an appointment by clicking the 'Book Appointment' button in the navigation bar, or by calling our desk at +91 9610005141.";
    }
    if (lowerInput.includes('service') || lowerInput.includes('treatment') || lowerInput.includes('offer')) {
      return "We offer comprehensive medical services including Pediatrics, General Surgery, Medicine, and 24/7 Emergency care. Check our 'Services' page for the full list.";
    }
    if (lowerInput.includes('doctor') || lowerInput.includes('specialist')) {
      return "Our hospital features experienced specialists in various fields. You can view our doctor profiles and their schedules on the 'Doctors' page.";
    }
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! How can I assist you with your health needs today?";
    }
    
    return "Thank you for your inquiry. To better assist you, would you like to know about our timings, services, or how to book an appointment?";
  };

  const handleSend = (text = inputValue) => {
    const messageText = typeof text === 'string' ? text : inputValue;
    if (messageText.trim() === '') return;

    const userMessage = { text: messageText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={toggleChat} aria-label="Open support chat">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Support Chat</h3>
            <button className="close-btn" onClick={toggleChat} aria-label="Close chat">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="suggested-questions">
            {suggestedQuestions.map((question, index) => (
              <button 
                key={index} 
                className="suggested-btn"
                onClick={() => handleSend(question)}
              >
                {question}
              </button>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="send-btn" onClick={handleSend}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
