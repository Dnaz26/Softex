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
  return <div className="min-h-screen bg-black text-white flex flex-col" data-magicpath-id="0" data-magicpath-path="ChatWithSeller.tsx">
      {/* Header */}
      <header className="border-b border-gray-900 px-6 py-4" data-magicpath-id="1" data-magicpath-path="ChatWithSeller.tsx">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="ChatWithSeller.tsx">
          <div className="flex items-center gap-4" data-magicpath-id="3" data-magicpath-path="ChatWithSeller.tsx">
            <button onClick={onBack} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="4" data-magicpath-path="ChatWithSeller.tsx">
              <ArrowLeft className="w-6 h-6" data-magicpath-id="5" data-magicpath-path="ChatWithSeller.tsx" />
            </button>
            
            <div data-magicpath-id="6" data-magicpath-path="ChatWithSeller.tsx">
              <h1 className="text-xl font-bold" data-magicpath-id="7" data-magicpath-path="ChatWithSeller.tsx">{sellerName}</h1>
              <p className="text-sm text-gray-400" data-magicpath-id="8" data-magicpath-path="ChatWithSeller.tsx">{businessName}</p>
            </div>
          </div>

          <button className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="9" data-magicpath-path="ChatWithSeller.tsx">
            <MoreVertical className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="ChatWithSeller.tsx" />
          </button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-6 py-8" data-magicpath-id="11" data-magicpath-path="ChatWithSeller.tsx">
        <div className="max-w-[1000px] mx-auto space-y-6" data-magicpath-id="12" data-magicpath-path="ChatWithSeller.tsx">
          {messages.map(msg => <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`} data-magicpath-id="13" data-magicpath-path="ChatWithSeller.tsx">
              <div className={`max-w-[70%] ${msg.sender === 'user' ? 'bg-[#4169E1]' : 'bg-[#0B1A33]'} rounded-2xl px-5 py-4`} data-magicpath-id="14" data-magicpath-path="ChatWithSeller.tsx">
                <p className="text-white text-base leading-relaxed" data-magicpath-id="15" data-magicpath-path="ChatWithSeller.tsx">{msg.text}</p>
                <p className="text-xs text-gray-300 mt-2" data-magicpath-id="16" data-magicpath-path="ChatWithSeller.tsx">{msg.time}</p>
              </div>
            </div>)}
        </div>
      </main>

      {/* Input */}
      <footer className="border-t border-gray-900 px-6 py-6" data-magicpath-id="17" data-magicpath-path="ChatWithSeller.tsx">
        <div className="max-w-[1000px] mx-auto flex items-center gap-3" data-magicpath-id="18" data-magicpath-path="ChatWithSeller.tsx">
          <button className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="19" data-magicpath-path="ChatWithSeller.tsx">
            <Paperclip className="w-6 h-6" data-magicpath-id="20" data-magicpath-path="ChatWithSeller.tsx" />
          </button>

          <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type your message..." className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" data-magicpath-id="21" data-magicpath-path="ChatWithSeller.tsx" />

          <button onClick={handleSendMessage} className="flex items-center justify-center w-12 h-12 bg-[#4169E1] hover:bg-[#3557C1] rounded-lg transition-colors" data-magicpath-id="22" data-magicpath-path="ChatWithSeller.tsx">
            <Send className="w-6 h-6" data-magicpath-id="23" data-magicpath-path="ChatWithSeller.tsx" />
          </button>
        </div>
      </footer>
    </div>;
};