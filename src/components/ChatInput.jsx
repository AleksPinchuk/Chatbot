import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'
import LoadingImg from "../assets/loading-spinner.gif";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputChange(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (inputText === "" || isLoading) {
      return;
    }

    setIsLoading(true);
    setInputText("");

    const newChatMessages = [
      ...chatMessages,
      { message: inputText, sender: "user", id: crypto.randomUUID() },
    ];

    setChatMessages(newChatMessages);

    setChatMessages([
      ...newChatMessages,
      {
        message: <img src={LoadingImg} className="loading-image" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      { message: response, sender: "robot", id: crypto.randomUUID() },
    ]);

    setIsLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    }

    if (event.key === "Escape") {
      setInputText("");
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputChange}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}