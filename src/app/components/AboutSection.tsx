import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

// Define types for the conversation messages
interface Message {
  sender: "user" | "bot";
  message: string | JSX.Element; // Allow JSX in message
}

const AboutSection = () => {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typingMessage, setTypingMessage] = useState<string>("");

  const predefinedResponses: Record<string, string | JSX.Element> = {
    skills: "Syafiq is skilled in fullstack development including frontend framework such as React and backend such as ExpressJs. " + 
    "He has spearheaded multiple automation pipelines via Python and VBA as well and is proficient in managing complex data-related projects with multiple level of stakeholders. ",
    experiences: "Syafiq has worked/interned as a software engineer intern, data analyst, pre-sales tech consultant and a business analyst in various roles. He has presented multiple tech solutions and Proof-Of-Concept, particularly for automation, working with cross-functional stakeholders.",
    funny: "He kept hitting into trees during his runs.",
    interesting: "Syafiq likes to run after midnight and rewatches Harry Potter and 2000s movies like High School Musical and Disturbia to get the nostalgic vibes. He also almmost fall off a mountain during winter, and is currently trying to learn Thai.",
    fallback: (
      <>
        SyafiqChat is under training and is down currently, click on recommended questions instead to test me. DM him here:{" "}
        <a
          href="https://www.linkedin.com/in/syafiqakmal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          LinkedIn
        </a>
      </>
    ),
  };

  const simulateTyping = (message: string | JSX.Element) => {
    setIsTyping(true);
    setTypingMessage(""); // Reset typing message

    // Simulate typing effect for string messages only
    if (typeof message === "string") {
      let index = 0;
      const interval = setInterval(() => {
        setTypingMessage((prev) => prev + message[index]);
        index++;
        if (index === message.length) {
          clearInterval(interval);
          setIsTyping(false);
          setConversation((prev) => [...prev, { sender: "bot", message }]);
        }
      }, 10); // Type speed (50ms per character)
    } else {
      // For JSX (like links), we skip typing and add the message directly
      setIsTyping(false);
      setConversation((prev) => [...prev, { sender: "bot", message }]);
    }
  };

  const handleButtonClick = (type: string) => {
    const response = predefinedResponses[type] || predefinedResponses["fallback"];
    simulateTyping(response);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    // Add user's message to conversation
    setConversation((prev) => [...prev, { sender: "user", message: userInput }]);

    // Simulate bot reply with typing effect
    const response = predefinedResponses["fallback"];
    simulateTyping(response);
    setUserInput(""); // Clear input field after sending
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-600 to-black px-4">
      {/* Chatbot Header */}
      <div className="flex flex-col items-center justify-center mb-10">
        <img
          src="/logo.png" // Replace with your actual logo
          alt="Chatbot Logo"
          className="w-16 h-16 mb-4"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-white">SyafiqChat</h2>
        <p className="text-gray-400 mt-2 text-center max-w-md">
          AMA about Syafiq, or drop him an Email/Linkedin DM.<br />
          I am still in testing stage, so please go easy on me as my owner is still developing me.
        </p>
      </div>

      {/* Button Options */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-12">
        <button
          onClick={() => handleButtonClick("skills")}
          className="border border-gray-500 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:border-white transition"
        >
          What skills does he have?
        </button>
        <button
          onClick={() => handleButtonClick("experiences")}
          className="border border-gray-500 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:border-white transition"
        >
          What are some of his experiences?
        </button>
        <button
          onClick={() => handleButtonClick("funny")}
          className="border border-gray-500 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:border-white transition"
        >
          Tell me something funny about him.
        </button>
        <button
          onClick={() => handleButtonClick("interesting")}
          className="border border-gray-500 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:border-white transition"
        >
          Anything interesting?
        </button>
      </div>

      {/* Conversation History */}
      <div className="bg-gray-800 rounded-lg p-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mb-6 max-h-60 overflow-y-auto">
        <div className="space-y-4">
          {conversation.map((msg, index) => (
            <div key={index} className={msg.sender === "user" ? "text-right" : "text-left"}>
              <p className={msg.sender === "user" ? "text-gray-300" : "text-gray-200"}>
                {msg.sender === "user" ? "You" : "SyafiqChat"}:{" "}
                {typeof msg.message === "string" ? msg.message : msg.message}
              </p>
            </div>
          ))}
          {isTyping && (
            <div className="text-left text-gray-400">
              SyafiqChat is typing...
            </div>
          )}
        </div>
      </div>

      {/* Chat Input */}
      <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-grow bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 bg-blue-400 hover:bg-blue-500 p-2 rounded-full text-white"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
