"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
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
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    mpid: "739be136-b8d5-4a31-99bc-5d0d4b405006"
  }, {
    id: 2,
    sellerName: "Sarah Williams",
    businessName: "Bella Italia Ristorante",
    lastMessage: "I can send you the financial statements by EOD",
    time: "1h ago",
    unread: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    mpid: "2b37ddc8-1478-42ec-aed9-0836fc6a48b3"
  }, {
    id: 3,
    sellerName: "David Chen",
    businessName: "FitZone Gym",
    lastMessage: "The equipment list is attached to the listing",
    time: "3h ago",
    unread: 1,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    mpid: "76079293-1505-4c6f-b0f4-dbb25808583a"
  }, {
    id: 4,
    sellerName: "Emma Rodriguez",
    businessName: "Tech Repair Hub",
    lastMessage: "Would you like to schedule a site visit?",
    time: "Yesterday",
    unread: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    mpid: "8dbb08c7-7c9a-45f8-b1ec-7abe339ccd9c"
  }, {
    id: 5,
    sellerName: "Tom Anderson",
    businessName: "Green Leaf Nursery",
    lastMessage: "Thanks for your interest!",
    time: "2 days ago",
    unread: 0,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
    mpid: "52b8185e-db79-4596-9da9-c38252733e1b"
  }] as any[];
  if (!isOpen) return null;
  return <SortableContainer dndKitId="4d74bad7-7581-42d8-9b25-308ccd798b3e" containerType="regular" prevTag="div" className="fixed inset-0 bg-black z-50" data-magicpath-id="0" data-magicpath-path="ChatsScreen.tsx">
      {/* Header */}
      <SortableContainer dndKitId="2d385d6c-11ca-4bca-a6ca-db78298a8b7c" containerType="regular" prevTag="div" className="border-b border-gray-800 px-6 py-4" data-magicpath-id="1" data-magicpath-path="ChatsScreen.tsx">
        <SortableContainer dndKitId="718e4bff-d32c-41b0-b599-fa30ad287117" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="ChatsScreen.tsx">
          <SortableContainer dndKitId="a2a57c87-5070-46a5-ba78-aed8110aa841" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="3" data-magicpath-path="ChatsScreen.tsx">
            <SortableContainer dndKitId="a39fab72-1c9b-42e2-bbd3-c84386a40f5d" containerType="regular" prevTag="button" onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="4" data-magicpath-path="ChatsScreen.tsx">
              <X className="w-6 h-6 text-white" data-magicpath-id="5" data-magicpath-path="ChatsScreen.tsx" />
            </SortableContainer>
            <h1 className="text-2xl font-bold text-white" data-magicpath-id="6" data-magicpath-path="ChatsScreen.tsx">Messages</h1>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Content */}
      <SortableContainer dndKitId="6a4797fc-00c1-4148-ad84-bb41a079b9de" containerType="regular" prevTag="div" className="max-w-[1200px] mx-auto px-6 py-6" data-magicpath-id="7" data-magicpath-path="ChatsScreen.tsx">
        {/* Search */}
        <SortableContainer dndKitId="c7fb14e3-c6c9-461b-a22d-8d2e3ef20759" containerType="regular" prevTag="div" className="mb-6" data-magicpath-id="8" data-magicpath-path="ChatsScreen.tsx">
          <SortableContainer dndKitId="264d226f-c87a-4054-9061-0405850c7991" containerType="regular" prevTag="div" className="relative" data-magicpath-id="9" data-magicpath-path="ChatsScreen.tsx">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="10" data-magicpath-path="ChatsScreen.tsx" />
            <input type="text" placeholder="Search conversations..." className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" data-magicpath-id="11" data-magicpath-path="ChatsScreen.tsx" />
          </SortableContainer>
        </SortableContainer>

        {/* Chats List */}
        <SortableContainer dndKitId="a4a916b2-468e-43ff-b67e-e279669b5ebd" containerType="collection" prevTag="div" className="space-y-2" data-magicpath-id="12" data-magicpath-path="ChatsScreen.tsx">
          {chats.map(chat => <div key={chat.id} className="bg-[#0B1A33] border border-gray-800 rounded-xl p-5 hover:border-[#4169E1] transition-all cursor-pointer" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="ChatsScreen.tsx">
              <div className="flex items-start gap-4" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="ChatsScreen.tsx">
                {/* Avatar */}
                <div className="relative flex-shrink-0" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="ChatsScreen.tsx">
                  <img src={chat.avatar} alt={chat.sellerName} className="w-14 h-14 rounded-full bg-gray-700" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-field="avatar:string" data-magicpath-id="16" data-magicpath-path="ChatsScreen.tsx" />
                  {chat.unread > 0 && <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#4169E1] rounded-full flex items-center justify-center" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="ChatsScreen.tsx">
                      <span className="text-white text-xs font-bold" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-field="unread:number" data-magicpath-id="18" data-magicpath-path="ChatsScreen.tsx">{chat.unread}</span>
                    </div>}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="ChatsScreen.tsx">
                  <div className="flex items-start justify-between mb-1" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="ChatsScreen.tsx">
                    <div data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="ChatsScreen.tsx">
                      <h3 className="text-white font-semibold text-lg" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-field="sellerName:string" data-magicpath-id="22" data-magicpath-path="ChatsScreen.tsx">{chat.sellerName}</h3>
                      <p className="text-[#4169E1] text-sm" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-field="businessName:string" data-magicpath-id="23" data-magicpath-path="ChatsScreen.tsx">{chat.businessName}</p>
                    </div>
                    <span className="text-gray-400 text-sm flex-shrink-0" data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:string" data-magicpath-id="24" data-magicpath-path="ChatsScreen.tsx">{chat.time}</span>
                  </div>
                  <p className={`text-sm truncate ${chat.unread > 0 ? 'text-white font-medium' : 'text-gray-400'}`} data-magicpath-uuid={(chat as any)["mpid"] ?? "unsafe"} data-magicpath-field="lastMessage:string" data-magicpath-id="25" data-magicpath-path="ChatsScreen.tsx">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            </div>)}
        </SortableContainer>

        {/* Empty State (if no chats) */}
        {chats.length === 0 && <SortableContainer dndKitId="1c707efd-5e27-4930-9a98-78e10e5254b4" containerType="regular" prevTag="div" className="text-center py-20" data-magicpath-id="26" data-magicpath-path="ChatsScreen.tsx">
            <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" data-magicpath-id="27" data-magicpath-path="ChatsScreen.tsx" />
            <h3 className="text-xl font-semibold text-white mb-2" data-magicpath-id="28" data-magicpath-path="ChatsScreen.tsx">No conversations yet</h3>
            <p className="text-gray-400" data-magicpath-id="29" data-magicpath-path="ChatsScreen.tsx">
              Start chatting with sellers by viewing their listings
            </p>
          </SortableContainer>}
      </SortableContainer>
    </SortableContainer>;
};