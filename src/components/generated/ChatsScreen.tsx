"use client";

import React from 'react';
import { X, MessageCircle, Search } from 'lucide-react';
type ChatsScreenProps = {
  isOpen: boolean;
  onClose: () => void;
};

// @component: ChatsScreen
export const ChatsScreen = ({
  isOpen,
  onClose
}: ChatsScreenProps) => {
  const chats = [{
    id: 1,
    sellerName: "Mike Johnson",
    businessName: "The Artisan Cafe",
    lastMessage: "Yes, I'm available for a call tomorrow at 2 PM",
    time: "2m ago",
    unread: 2,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
  }, {
    id: 2,
    sellerName: "Sarah Williams",
    businessName: "Bella Italia Ristorante",
    lastMessage: "I can send you the financial statements by EOD",
    time: "1h ago",
    unread: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  }, {
    id: 3,
    sellerName: "David Chen",
    businessName: "FitZone Gym",
    lastMessage: "The equipment list is attached to the listing",
    time: "3h ago",
    unread: 1,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }, {
    id: 4,
    sellerName: "Emma Rodriguez",
    businessName: "Tech Repair Hub",
    lastMessage: "Would you like to schedule a site visit?",
    time: "Yesterday",
    unread: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
  }, {
    id: 5,
    sellerName: "Tom Anderson",
    businessName: "Green Leaf Nursery",
    lastMessage: "Thanks for your interest!",
    time: "2 days ago",
    unread: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom"
  }] as any[];
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black z-50">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors">
              <X className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-2xl font-bold text-white">Messages</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search conversations..." className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" />
          </div>
        </div>

        {/* Chats List */}
        <div className="space-y-2">
          {chats.map(chat => <div key={chat.id} className="bg-[#0B1A33] border border-gray-800 rounded-xl p-5 hover:border-[#4169E1] transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <img src={chat.avatar} alt={chat.sellerName} className="w-14 h-14 rounded-full bg-gray-700" />
                  {chat.unread > 0 && <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#4169E1] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{chat.unread}</span>
                    </div>}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{chat.sellerName}</h3>
                      <p className="text-[#4169E1] text-sm">{chat.businessName}</p>
                    </div>
                    <span className="text-gray-400 text-sm flex-shrink-0">{chat.time}</span>
                  </div>
                  <p className={`text-sm truncate ${chat.unread > 0 ? 'text-white font-medium' : 'text-gray-400'}`}>
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Empty State (if no chats) */}
        {chats.length === 0 && <div className="text-center py-20">
            <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No conversations yet</h3>
            <p className="text-gray-400">
              Start chatting with sellers by viewing their listings
            </p>
          </div>}
      </div>
    </div>;
};