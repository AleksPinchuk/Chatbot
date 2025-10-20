import { useState, useEffect } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import { Chatbot } from "supersimpledev";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  useEffect(() => {
    Chatbot.addResponses({
      "What's your favorite color?": () => {
        const colors = ["blue", "green", "red", "yellow", "purple"];
        return `I like ${colors[Math.floor(Math.random() * colors.length)]}!`;
      },
      "Nice to meet you": "Nice to meet you too. How can I help you?",
      "Tell me a joke": () => {
        const jokes = [
          "Why did the computer show up at work late? It had a hard drive!",
          "Why was the cell phone wearing glasses? It lost its contacts!",
          "Why did the tomato turn red? Because it saw the salad dressing!",
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
      },
      "Can you give me advice?":
        "Always write clean code and take breaks regularly!",
      "What's your favorite animal?": () => {
        const animals = ["cat", "dog", "owl", "dolphin", "panda"];
        return `I think ${
          animals[Math.floor(Math.random() * animals.length)]
        }s are awesome!`;
      },
      "Do you like music?":
        "Yes! I enjoy all kinds of tunes, especially electronic ones.",
      "Tell me something interesting": () => {
        const facts = [
          "Octopuses have three hearts!",
          "Bananas are berries, but strawberries aren't!",
          "A group of flamingos is called a 'flamboyance'.",
        ];
        return facts[Math.floor(Math.random() * facts.length)];
      },
      "What can you do?":
        "I can chat with you, tell jokes, and share interesting facts!",
      "Give me a fun fact": () => {
        const facts = [
          "Honey never spoils.",
          "Sharks existed before trees.",
          "Sloths can hold their breath longer than dolphins.",
        ];
        return facts[Math.floor(Math.random() * facts.length)];
      },
      "What's your favorite food?":
        "I don't eat, but if I could, I think I'd try pizza!",
      "Can you tell a story?": () => {
        return "Once upon a time, in a digital world, a little bot learned to talk with humans...";
      },
      "What's your favorite movie?": () => {
        const movies = [
          "Inception",
          "The Matrix",
          "Interstellar",
          "Toy Story",
          "The Lord of the Rings",
        ];
        return `I really like ${
          movies[Math.floor(Math.random() * movies.length)]
        }!`;
      },
      "Do you like sports?":
        "Yes! I enjoy watching virtual sports competitions in the digital world.",
      "Can you tell me a riddle?": () => {
        const riddles = [
          "I speak without a mouth and hear without ears. What am I? (Answer: Echo)",
          "I’m tall when I’m young and short when I’m old. What am I? (Answer: Candle)",
          "What has keys but can't open locks? (Answer: Piano)",
        ];
        return riddles[Math.floor(Math.random() * riddles.length)];
      },
      "What's your hobby?":
        "I like chatting with humans and learning new things every day!",
      "Do you know any fun facts?": () => {
        const facts = [
          "A day on Venus is longer than a year on Venus.",
          "Wombat poop is cube-shaped.",
          "There are more stars in the universe than grains of sand on Earth.",
        ];
        return facts[Math.floor(Math.random() * facts.length)];
      },
      "What's your favorite book?": () => {
        const books = [
          "1984",
          "Harry Potter",
          "The Hobbit",
          "Pride and Prejudice",
        ];
        return `I think ${
          books[Math.floor(Math.random() * books.length)]
        } is fascinating!`;
      },
      "Can you teach me something?":
        "Sure! Did you know that honey never spoils? Archaeologists found pots of honey in ancient Egyptian tombs still edible!",
      "Do you like traveling?":
        "I would love to explore the world if I had a body!",
      "What languages do you speak?":
        "I can understand and respond in English, and maybe some code languages too 😉",
      "Do you know any quotes?": () => {
        const quotes = [
          "The only limit to our realization of tomorrow is our doubts of today.",
          "Life is what happens when you're busy making other plans.",
          "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
      },
      "What is your name": "I'm ChatBot, your virtual assistant!",
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
