"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { X, Sparkles, Send } from 'lucide-react';
import { InvestmentSurvey } from './InvestmentSurvey';
import { SellerNameInput } from './SellerNameInput';
import { SellerVerification } from './SellerVerification';
import { SellSoftwareForm } from './SellSoftwareForm';
import { HelpScreen } from './HelpScreen';
import { ChatsScreen } from './ChatsScreen';
type AIAdvisorPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogout?: () => void;
};

// @component: AIAdvisorPanel
export const AIAdvisorPanel = ({
  isOpen,
  onClose,
  onLogout
}: AIAdvisorPanelProps) => {
  const [message, setMessage] = useState('');
  const [showInvestmentSurvey, setShowInvestmentSurvey] = useState(false);
  const [showSellerNameInput, setShowSellerNameInput] = useState(false);
  const [showSellerVerification, setShowSellerVerification] = useState(false);
  const [sellerName, setSellerName] = useState('');
  const [showSellSoftwareForm, setShowSellSoftwareForm] = useState(false);
  const [showHelpScreen, setShowHelpScreen] = useState(false);
  const [showChatsScreen, setShowChatsScreen] = useState(false);
  const handleSendMessage = () => {
    const normalizedMessage = message.toLowerCase().trim();
    if (normalizedMessage.includes('investment recommendation')) {
      setShowInvestmentSurvey(true);
    } else if (normalizedMessage.includes('analyze business') || normalizedMessage.includes('analyze seller')) {
      setShowSellerNameInput(true);
    } else if (normalizedMessage.includes('sell software') || normalizedMessage.includes('sell business')) {
      setShowSellSoftwareForm(true);
    } else if (normalizedMessage.includes('help')) {
      setShowHelpScreen(true);
    } else if (normalizedMessage.includes('chats')) {
      setShowChatsScreen(true);
    } else if (normalizedMessage.includes('logout')) {
      if (onLogout) {
        onLogout();
      }
      onClose();
    }
    setMessage('');
  };
  const handleSellerNameSubmit = (name: string) => {
    setSellerName(name);
    setShowSellerNameInput(false);
    setShowSellerVerification(true);
  };
  if (!isOpen) return null;
  return <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40 transition-opacity" onClick={onClose} data-magicpath-id="0" data-magicpath-path="AIAdvisorPanel.tsx" />
      
      {/* Panel */}
      <SortableContainer dndKitId="0ec2be63-17f5-4837-889b-ada998944ade" containerType="regular" prevTag="div" className="fixed top-0 right-0 h-full w-[440px] bg-[#1E3A8A] z-50 shadow-2xl flex flex-col" data-magicpath-id="1" data-magicpath-path="AIAdvisorPanel.tsx">
        {/* Header */}
        <SortableContainer dndKitId="dcb99da5-cac3-4deb-aa9b-9f79bc42b73c" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-blue-700/50" data-magicpath-id="2" data-magicpath-path="AIAdvisorPanel.tsx">
          <SortableContainer dndKitId="cb2a63e6-1ea8-4c39-9944-cb3cbe9844d2" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="3" data-magicpath-path="AIAdvisorPanel.tsx">
            <Sparkles className="w-5 h-5 text-white" />
            <h2 className="text-xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="AIAdvisorPanel.tsx">AI Advisor</h2>
          </SortableContainer>
          <SortableContainer dndKitId="e78b2538-5af6-41c3-876b-c0450ca83c69" containerType="regular" prevTag="button" onClick={onClose} className="w-8 h-8 flex items-center justify-center hover:bg-blue-700/30 rounded-lg transition-colors" data-magicpath-id="5" data-magicpath-path="AIAdvisorPanel.tsx">
            <X className="w-5 h-5 text-white" data-magicpath-id="6" data-magicpath-path="AIAdvisorPanel.tsx" />
          </SortableContainer>
        </SortableContainer>

        {/* Subtitle */}
        <SortableContainer dndKitId="c49e1d13-b138-4d52-b510-220025d771b5" containerType="regular" prevTag="div" className="px-6 py-4 border-b border-blue-700/30" data-magicpath-id="7" data-magicpath-path="AIAdvisorPanel.tsx">
          <p className="text-blue-100 text-sm" data-magicpath-id="8" data-magicpath-path="AIAdvisorPanel.tsx">Get personalized investment insights</p>
        </SortableContainer>

        {/* Chat Messages - BLACK BACKGROUND */}
        <SortableContainer dndKitId="b1c0c47e-ec5b-423a-880a-67a86baa05d4" containerType="regular" prevTag="div" className="flex-1 px-6 py-6 overflow-y-auto bg-black" data-magicpath-id="9" data-magicpath-path="AIAdvisorPanel.tsx">
          <SortableContainer dndKitId="2d3987c6-38dd-49cc-89af-889ba67878c1" containerType="regular" prevTag="div" className="bg-[#1e293b] rounded-2xl p-5 mb-6" data-magicpath-id="10" data-magicpath-path="AIAdvisorPanel.tsx">
            <p className="text-gray-200 leading-relaxed" data-magicpath-id="11" data-magicpath-path="AIAdvisorPanel.tsx">
              Hello! I'm your AI Investment advisor. How can I help you find the perfect business opportunity today?
            </p>
          </SortableContainer>

          {/* Support Options */}
          <SortableContainer dndKitId="272f8fa1-2132-49e4-a94f-cfb39a89a4f0" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="12" data-magicpath-path="AIAdvisorPanel.tsx">
            <p className="text-blue-100 text-sm font-medium mb-3" data-magicpath-id="13" data-magicpath-path="AIAdvisorPanel.tsx">Type any one of the following for AI support:</p>
            
            <SortableContainer dndKitId="e7280790-5882-4c7b-990e-3891f05b1beb" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="14" data-magicpath-path="AIAdvisorPanel.tsx">
              <SortableContainer dndKitId="0eb8f68c-2897-482a-85b8-821a7deaac12" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="15" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="16" data-magicpath-path="AIAdvisorPanel.tsx">1.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="17" data-magicpath-path="AIAdvisorPanel.tsx">Investment Recommendations</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="c5016211-295d-4207-9fca-188fef73ac2a" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="18" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="19" data-magicpath-path="AIAdvisorPanel.tsx">2.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="20" data-magicpath-path="AIAdvisorPanel.tsx">Analyze Business / Seller</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="baf1c97d-f57a-403a-8743-ae4de899a546" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="21" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="22" data-magicpath-path="AIAdvisorPanel.tsx">3.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="23" data-magicpath-path="AIAdvisorPanel.tsx">Sell Software</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="48d3ad0b-0a13-49e4-b306-f13e66714fa5" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="24" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="25" data-magicpath-path="AIAdvisorPanel.tsx">4.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="26" data-magicpath-path="AIAdvisorPanel.tsx">Help</span>
              </SortableContainer>

              <SortableContainer dndKitId="36354607-d450-4594-834b-332139d87b1e" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="27" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="28" data-magicpath-path="AIAdvisorPanel.tsx">5.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="29" data-magicpath-path="AIAdvisorPanel.tsx">Chats</span>
              </SortableContainer>

              <SortableContainer dndKitId="cf91f4a4-d1c3-48ab-9b30-8cc4ca97e67c" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="30" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="31" data-magicpath-path="AIAdvisorPanel.tsx">6.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="32" data-magicpath-path="AIAdvisorPanel.tsx">Logout</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Input Area */}
        <SortableContainer dndKitId="16f66ae8-24a4-48d7-80e4-1aed5134f175" containerType="regular" prevTag="div" className="p-6 border-t border-blue-700/30 bg-[#1E3A8A]" data-magicpath-id="33" data-magicpath-path="AIAdvisorPanel.tsx">
          <SortableContainer dndKitId="63a14478-fffc-4b06-8e66-4fd8568a7715" containerType="regular" prevTag="div" className="relative" data-magicpath-id="34" data-magicpath-path="AIAdvisorPanel.tsx">
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Ask me anything..." className="w-full bg-[#1e293b] border border-blue-700/30 rounded-xl px-5 py-4 pr-14 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="35" data-magicpath-path="AIAdvisorPanel.tsx" />
            <SortableContainer dndKitId="7f2a639b-3623-4920-b990-443935ed0571" containerType="regular" prevTag="button" onClick={handleSendMessage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors" data-magicpath-id="36" data-magicpath-path="AIAdvisorPanel.tsx">
              <Send className="w-5 h-5 text-white" data-magicpath-id="37" data-magicpath-path="AIAdvisorPanel.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Modals */}
      <InvestmentSurvey isOpen={showInvestmentSurvey} onClose={() => setShowInvestmentSurvey(false)} data-magicpath-id="38" data-magicpath-path="AIAdvisorPanel.tsx" />
      <SellerNameInput isOpen={showSellerNameInput} onClose={() => setShowSellerNameInput(false)} onSubmit={handleSellerNameSubmit} data-magicpath-id="39" data-magicpath-path="AIAdvisorPanel.tsx" />
      <SellerVerification isOpen={showSellerVerification} onClose={() => setShowSellerVerification(false)} sellerName={sellerName} data-magicpath-id="40" data-magicpath-path="AIAdvisorPanel.tsx" />
      <SellSoftwareForm isOpen={showSellSoftwareForm} onClose={() => setShowSellSoftwareForm(false)} data-magicpath-id="41" data-magicpath-path="AIAdvisorPanel.tsx" />
      <HelpScreen isOpen={showHelpScreen} onClose={() => setShowHelpScreen(false)} data-magicpath-id="42" data-magicpath-path="AIAdvisorPanel.tsx" />
      <ChatsScreen isOpen={showChatsScreen} onClose={() => setShowChatsScreen(false)} data-magicpath-id="43" data-magicpath-path="AIAdvisorPanel.tsx" />
    </>;
};