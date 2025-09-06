import { useState, useEffect, useRef } from "react";
import { IoSend, IoMic } from "react-icons/io5";
import { motion } from "framer-motion";
import useMCPFetcher from "../hooks/useMCPFetcher";
import ChatMessage from "../components/chatMessage";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message:
        "Hello! I’m an AI assistant. Ask me anything about projects, skills, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [hasUserMessaged, setHasUserMessaged] = useState(false);
  const { data, loading, error, sendQuery } = useMCPFetcher();
  const chatEndRef = useRef(null);

  // Auto-scroll after first user message
  useEffect(() => {
    if (hasUserMessaged) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, hasUserMessaged]);

  // Handle MCP responses
  useEffect(() => {
    if (data) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", message: data || "I couldn’t find anything." },
      ]);
    }
  }, [data]);

  // Handle errors
  useEffect(() => {
    if (error) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", message: `Error: ${error}` },
      ]);
    }
  }, [error]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { type: "user", message: input }]);
    sendQuery(input);
    setInput("");
    setHasUserMessaged(true);
  };

  const handleVoiceInput = () => alert("🎤 Voice input coming soon!");

  return (
    <div className="relative w-full h-screen pb-10 bg-surface-light dark:bg-surface-dark text-heading-light dark:text-heading-dark flex flex-col">
      {/* Messages aligned with input */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 flex justify-center scrollbar-thin scrollbar-thumb-accent-light dark:scrollbar-thumb-accent-dark scrollbar-track-muted-light dark:scrollbar-track-muted-dark">
        <div className="w-full max-w-4xl flex flex-col space-y-4">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} type={msg.type} message={msg.message} />
          ))}
          {loading && <ChatMessage type="bot" message="Thinking..." />}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Floating Input Bar aligned with messages */}
      <div className="fixed bottom-0 left-0 w-full p-4 flex justify-center bg-surface-light dark:bg-surface-dark border-t border-muted-light dark:border-muted-dark">
        <div className="flex w-full max-w-4xl gap-2 items-center rounded-full px-4 py-2 shadow-md bg-surface-light dark:bg-surface-dark">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-transparent focus:outline-none text-heading-light dark:text-heading-dark placeholder-text-light dark:placeholder-text-dark"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleVoiceInput}
            className="text-text-light dark:text-text-dark hover:text-red-500"
          >
            <IoMic className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleSend}
            className="text-primary-light dark:text-primary-dark hover:text-blue-700"
          >
            <IoSend className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
