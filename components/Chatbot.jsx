"use client";

import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || loading) return;

    const userMsg = { role: "user", content: trimmedInput };
    const nextMessages = [...messages, userMsg];

    // Update UI instantly
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedInput,
          history: nextMessages,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Chat is temporarily unavailable. Please try again.");
      }

      const botMsg = { role: "assistant", content: data.reply || "Sorry, I could not generate a response right now." };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      setStatus(error.message || "Chat is temporarily unavailable. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-9999 
        px-4 py-3 rounded-full 
        bg-linear-to-r from-amber-500 to-stone-700 
        shadow-lg hover:scale-110 transition"
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div
          className="fixed bottom-20 right-6 z-9999 
          w-[320px] max-w-[90vw] 
          bg-[#111827]/95 backdrop-blur-md 
          border border-white/10 
          rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] 
          p-4"
        >
          {/* Messages */}
          <div className="h-60 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.role === "user" ? "text-right" : "text-left"}
              >
                <p className="bg-white/10 inline-block px-3 py-2 rounded-lg">
                  {msg.content}
                </p>
              </div>
            ))}
          </div>

          {status ? <p className="mt-2 text-xs text-red-300">{status}</p> : null}

          {/* Input */}
          <div className="flex mt-3 gap-2">
            <input
              className="flex-1 px-3 py-2 rounded-lg bg-black border border-gray-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button
              onClick={sendMessage}
              className="px-3 py-2 bg-amber-500 rounded-lg"
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}