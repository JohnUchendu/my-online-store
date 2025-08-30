"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "2348012345678"; // WhatsApp number
    const message = `Name: ${name}\nEmail: ${email}\nMessage: ${messageContent}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="flex justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col space-y-4 bg-white/80 p-6 rounded-xl shadow-lg backdrop-blur-sm"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none w-full"
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-3 rounded hover:bg-green-600 font-semibold w-full md:w-auto md:self-end"
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}
