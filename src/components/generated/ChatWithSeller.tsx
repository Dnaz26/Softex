"use client";

import React, { useState } from 'react';
import { ArrowLeft, Send, Paperclip, MoreVertical } from 'lucide-react';
type ChatWithSellerProps = {
  businessName: string;
  sellerName: string;
  onBack: () => void;
};

// @component: ChatWithSeller
export const ChatWithSeller = ({
  businessName,
  sellerName,
  onBack
}: ChatWithSellerProps) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{
    id: 1,
    sender: 'seller',
    text: `Hello! Thank you for your interest in ${businessName}. How can I help you today?`,
    time: '10:30 AM'
  }]);
  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: message,
        time: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit'
        })
      };
      setMessages([...messages, newMessage]);
      setMessage('');

      // Simulate seller response
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'seller',
          text: 'I appreciate your question. Let me provide you with more details.',
          time: new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
          })
        };
        setMessages(prev => [...prev, response]);
      }, 1500);
    }
  };
  return <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-900 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <div>
              <h1 className="text-xl font-bold">{sellerName}</h1>
              <p className="text-sm text-gray-400">{businessName}</p>
            </div>
          </div>

          <button className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-[1000px] mx-auto space-y-6">
          {messages.map(msg => <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] ${msg.sender === 'user' ? 'bg-[#4169E1]' : 'bg-[#0B1A33]'} rounded-2xl px-5 py-4`}>
                <p className="text-white text-base leading-relaxed">{msg.text}</p>
                <p className="text-xs text-gray-300 mt-2">{msg.time}</p>
              </div>
            </div>)}
        </div>
      </main>

      {/* Input */}
      <footer className="border-t border-gray-900 px-6 py-6">
        <div className="max-w-[1000px] mx-auto flex items-center gap-3">
          <button className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors">
            <Paperclip className="w-6 h-6" />
          </button>

          <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type your message..." className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" />

          <button onClick={handleSendMessage} className="flex items-center justify-center w-12 h-12 bg-[#4169E1] hover:bg-[#3557C1] rounded-lg transition-colors">
            <Send className="w-6 h-6" />
          </button>
        </div>
      </footer>
    </div>;
};