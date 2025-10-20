import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css'

function useAutoScroll(depandencies) {
  const conteinerRef = useRef(null);

  useEffect(() => {
    const conteinerElem = conteinerRef.current;
    if (conteinerElem) {
      conteinerElem.scrollTop = conteinerElem.scrollHeight;
    }
  }, depandencies);

  return conteinerRef;
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;