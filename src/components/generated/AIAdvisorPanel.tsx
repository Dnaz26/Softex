"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Send, Loader2 } from 'lucide-react';
import { InvestmentSurvey } from './InvestmentSurvey';
import { SellerNameInput } from './SellerNameInput';
import { SellerVerification } from './SellerVerification';
import { SellSoftwareForm } from './SellSoftwareForm';
import { HelpScreen } from './HelpScreen';
import { ChatsScreen } from './ChatsScreen';
import { getChatResponse, OpenAIMessage } from '../../lib/openai';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
};

type AIAdvisorPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogout?: () => void;
};

const STORAGE_KEY = 'ai_advisor_chat_messages';

// @component: AIAdvisorPanel
export const AIAdvisorPanel = ({
  isOpen,
  onClose,
  onLogout
}: AIAdvisorPanelProps) => {
  // Load messages from localStorage on mount
  const loadMessages = (): Message[] => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // If we have saved messages, use them
        if (parsed.length > 0) {
          return parsed;
        }
      }
    } catch (error) {
      console.error('Error loading messages from localStorage:', error);
    }
    // Default initial message
    return [
      {
        id: '1',
        role: 'assistant',
        content: "Hello! I'm your AI Investment advisor. How can I help you find the perfect business opportunity today?",
        timestamp: new Date().toISOString(),
      },
    ];
  };

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(loadMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [showInvestmentSurvey, setShowInvestmentSurvey] = useState(false);
  const [showSellerNameInput, setShowSellerNameInput] = useState(false);
  const [showSellerVerification, setShowSellerVerification] = useState(false);
  const [sellerName, setSellerName] = useState('');
  const [showSellSoftwareForm, setShowSellSoftwareForm] = useState(false);
  const [showHelpScreen, setShowHelpScreen] = useState(false);
  const [showChatsScreen, setShowChatsScreen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Save messages to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving messages to localStorage:', error);
    }
    scrollToBottom();
  }, [messages]);


  const handleMenuOptionClick = (option: number, optionName: string) => {
    // Add user message showing which option was selected
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: optionName,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMsg]);

    // Handle the action
    if (option === 1) {
      setShowInvestmentSurvey(true);
    } else if (option === 2) {
      setShowSellerNameInput(true);
    } else if (option === 3) {
      setShowChatsScreen(true);
    } else if (option === 4) {
      setShowSellSoftwareForm(true);
    } else if (option === 5) {
      if (onLogout) {
        onLogout();
      }
      onClose();
    } else if (option === 6) {
      setShowHelpScreen(true);
    }
  };

  const handleSendMessage = async () => {
    const userMessage = message.trim();
    if (!userMessage || isLoading) return;

    const normalizedMessage = userMessage.toLowerCase();
    
    // Handle special commands - check for exact matches or keywords
    const trimmedMsg = normalizedMessage.trim();
    
    // Add user message to chat first
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setMessage('');
    
    // Handle special commands
    if (trimmedMsg === '1' || trimmedMsg.includes('investment recommendation') || trimmedMsg.includes('investment recommendations')) {
      setShowInvestmentSurvey(true);
      return;
    } else if (trimmedMsg === '2' || (trimmedMsg.includes('analyze') && (trimmedMsg.includes('seller') || trimmedMsg.includes('business')))) {
      setShowSellerNameInput(true);
      return;
    } else if (trimmedMsg === '3' || trimmedMsg.includes('chats')) {
      setShowChatsScreen(true);
      return;
    } else if (trimmedMsg === '4' || trimmedMsg.includes('sell software')) {
      setShowSellSoftwareForm(true);
      return;
    } else if (trimmedMsg === '5' || trimmedMsg.includes('logout')) {
      if (onLogout) {
        onLogout();
      }
      onClose();
      return;
    } else if (trimmedMsg === '6' || trimmedMsg.includes('help')) {
      setShowHelpScreen(true);
      return;
    }

    // Regular chat - get GPT response
    setIsLoading(true);

    try {
      // Convert messages to OpenAI format (exclude menu options and system messages)
      const conversationHistory: OpenAIMessage[] = messages
        .filter((msg) => {
          // Filter out menu option messages
          const isMenuOption = msg.content.includes('Investment Recommendations') || 
                             msg.content.includes('Analyze Seller') || 
                             msg.content.includes('Chats') || 
                             msg.content.includes('Sell Software') ||
                             msg.content.includes('Logout') ||
                             msg.content.includes('Help');
          return !isMenuOption;
        })
        .map((msg) => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content,
        }));

      // Get GPT response
      const aiResponse = await getChatResponse(userMessage, conversationHistory);

      // Add AI response to chat
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: error instanceof Error 
          ? `Sorry, I encountered an error: ${error.message}. Please make sure your OpenAI API key is set correctly in the .env file.`
          : 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSellerNameSubmit = (name: string) => {
    setSellerName(name);
    setShowSellerNameInput(false);
    setShowSellerVerification(true);
  };
  if (!isOpen) return null;
  return <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40 transition-opacity" onClick={onClose} />
      
      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-[450px] bg-[#0B1A33] z-50 shadow-2xl flex flex-col border-l border-gray-800">
        {/* Header - Royal Blue */}
        <div className="bg-[#4169E1] px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-white" />
              <h2 className="text-xl font-bold text-white">AI Advisor</h2>
            </div>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center hover:bg-blue-700/30 rounded-lg transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <div className="px-6 py-4 border-b border-blue-700/30">
          <p className="text-blue-100 text-sm">Get personalized investment insights</p>
        </div>

        {/* Chat Messages - BLACK BACKGROUND */}
        <div className="flex-1 px-6 py-6 overflow-y-auto bg-[#0B1A33]">
          <div className="space-y-4">
            {messages.map((msg, index) => {
              // Check if this is the initial message and we should show menu options after it
              const isInitialMessage = index === 0 && msg.role === 'assistant' && 
                msg.content.includes("Hello! I'm your AI Investment advisor");
              
              return (
                <React.Fragment key={msg.id}>
                  <div
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 ${
                        msg.role === 'user'
                          ? 'bg-[#4169E1] text-white'
                          : 'bg-[#1e293b] text-gray-200'
                      }`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                  
                  {/* Show menu options right after the initial message */}
                  {isInitialMessage && (
                    <div className="bg-[#1e293b] rounded-2xl p-5 space-y-3">
                      <p className="text-blue-100 text-sm font-medium mb-2">Select an option:</p>
                      <div className="space-y-2">
                        <button
                          onClick={() => handleMenuOptionClick(1, 'Investment Recommendations')}
                          className="w-full text-left px-4 py-3 rounded-lg bg-[#0B1A33] hover:bg-[#1a2942] text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <span className="text-blue-400 font-semibold">1.</span>
                          <span>Investment Recommendations</span>
                        </button>
                        <button
                          onClick={() => handleMenuOptionClick(2, 'Analyze Seller / Business')}
                          className="w-full text-left px-4 py-3 rounded-lg bg-[#0B1A33] hover:bg-[#1a2942] text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <span className="text-blue-400 font-semibold">2.</span>
                          <span>Analyze Seller / Business</span>
                        </button>
                        <button
                          onClick={() => handleMenuOptionClick(3, 'Chats')}
                          className="w-full text-left px-4 py-3 rounded-lg bg-[#0B1A33] hover:bg-[#1a2942] text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <span className="text-blue-400 font-semibold">3.</span>
                          <span>Chats</span>
                        </button>
                        <button
                          onClick={() => handleMenuOptionClick(4, 'Sell Software')}
                          className="w-full text-left px-4 py-3 rounded-lg bg-[#0B1A33] hover:bg-[#1a2942] text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <span className="text-blue-400 font-semibold">4.</span>
                          <span>Sell Software</span>
                        </button>
                        <button
                          onClick={() => handleMenuOptionClick(5, 'Logout')}
                          className="w-full text-left px-4 py-3 rounded-lg bg-[#0B1A33] hover:bg-[#1a2942] text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <span className="text-blue-400 font-semibold">5.</span>
                          <span>Logout</span>
                        </button>
                        <button
                          onClick={() => handleMenuOptionClick(6, 'Help')}
                          className="w-full text-left px-4 py-3 rounded-lg bg-[#0B1A33] hover:bg-[#1a2942] text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <span className="text-blue-400 font-semibold">6.</span>
                          <span>Help</span>
                        </button>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1e293b] rounded-2xl p-4 flex items-center gap-2">
                  <Loader2 className="w-5 h-5 text-[#4169E1] animate-spin" />
                  <span className="text-gray-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-blue-700/30 bg-[#0B1A33]">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="w-full bg-[#1e293b] border border-blue-700/30 rounded-xl px-5 py-4 pr-14 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !message.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center justify-center transition-colors"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 text-white animate-spin" />
              ) : (
                <Send className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <InvestmentSurvey isOpen={showInvestmentSurvey} onClose={() => setShowInvestmentSurvey(false)} />
      <SellerNameInput isOpen={showSellerNameInput} onClose={() => setShowSellerNameInput(false)} onSubmit={handleSellerNameSubmit} />
      <SellerVerification isOpen={showSellerVerification} onClose={() => setShowSellerVerification(false)} sellerName={sellerName} />
      <SellSoftwareForm isOpen={showSellSoftwareForm} onClose={() => setShowSellSoftwareForm(false)} />
      <HelpScreen isOpen={showHelpScreen} onClose={() => setShowHelpScreen(false)} />
      <ChatsScreen isOpen={showChatsScreen} onClose={() => setShowChatsScreen(false)} />
    </>;
};