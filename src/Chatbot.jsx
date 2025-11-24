import React, { useState } from 'react';
// Import the CSS file for styling the chatbot
import './Chatbot.css';

// Define the Chatbot functional component
function Chatbot() {
  // State to hold messages and user input
  const [messages, setMessages] = useState([]); // Array to store chat messages
  const [userInput, setUserInput] = useState(''); // String to store user input

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setUserInput(event.target.value); // Update userInput state with the current value
  };

  // Function to handle sending messages
  const handleSendMessage = () => {
    if (userInput.trim()) { // Check if the input is not just whitespace
      const newMessages = [...messages, { user: true, text: userInput }]; // Create a new message object
      setMessages(newMessages); // Update messages state with the new message

      // Simple bot response logic
      setTimeout(() => {
        // After 1 second, add a bot response
        setMessages([...newMessages, { user: false, text: `You said: ${userInput}` }]);
      }, 1000); 

      setUserInput(''); // Clear the input field after sending the message
    }
  };

  // Render the chatbot interface
  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {/* Map through messages and display each one */}
        {messages.map((message, index) => (
          <div key={index} className={message.user ? 'user-message' : 'bot-message'}>
            {message.text} {/* Display the message text */}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input 
          type="text" 
          value={userInput} 
          onChange={handleInputChange} // Update userInput on change
          placeholder="Type a message" 
        />
        <button onClick={handleSendMessage}>Send</button> {/* Send message on click */}
      </div>
    </div>
  );
}

export default Chatbot; // Export the Chatbot component
