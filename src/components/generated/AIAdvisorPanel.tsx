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
      <SortableContainer dndKitId="e64844da-3d94-4d1a-9049-86a7883a133c" containerType="regular" prevTag="div" className="fixed top-0 right-0 h-full w-[440px] bg-[#1E3A8A] z-50 shadow-2xl flex flex-col" data-magicpath-id="1" data-magicpath-path="AIAdvisorPanel.tsx">
        {/* Header */}
        <SortableContainer dndKitId="38fb0b4f-6a63-48c5-9692-d1578fb923ff" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-blue-700/50" data-magicpath-id="2" data-magicpath-path="AIAdvisorPanel.tsx">
          <SortableContainer dndKitId="4895f6be-01cc-428c-9011-ed345ad8fdae" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="3" data-magicpath-path="AIAdvisorPanel.tsx">
            <Sparkles className="w-5 h-5 text-white" />
            <h2 className="text-xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="AIAdvisorPanel.tsx">AI Advisor</h2>
          </SortableContainer>
          <SortableContainer dndKitId="705b473b-e4bb-44ea-a602-43239fa6816b" containerType="regular" prevTag="button" onClick={onClose} className="w-8 h-8 flex items-center justify-center hover:bg-blue-700/30 rounded-lg transition-colors" data-magicpath-id="5" data-magicpath-path="AIAdvisorPanel.tsx">
            <X className="w-5 h-5 text-white" data-magicpath-id="6" data-magicpath-path="AIAdvisorPanel.tsx" />
          </SortableContainer>
        </SortableContainer>

        {/* Subtitle */}
        <SortableContainer dndKitId="92eeebc0-9196-47d0-bc99-4d9237aa2965" containerType="regular" prevTag="div" className="px-6 py-4 border-b border-blue-700/30" data-magicpath-id="7" data-magicpath-path="AIAdvisorPanel.tsx">
          <p className="text-blue-100 text-sm" data-magicpath-id="8" data-magicpath-path="AIAdvisorPanel.tsx">Get personalized investment insights</p>
        </SortableContainer>

        {/* Chat Messages - BLACK BACKGROUND */}
        <SortableContainer dndKitId="b9340619-0845-41ac-a5d2-74563486b4d9" containerType="regular" prevTag="div" className="flex-1 px-6 py-6 overflow-y-auto bg-[#0B1A33]" data-magicpath-id="9" data-magicpath-path="AIAdvisorPanel.tsx">
          <SortableContainer dndKitId="90822557-8dbd-47ed-aa2e-a492489159f3" containerType="regular" prevTag="div" className="bg-[#1e293b] rounded-2xl p-5 mb-6" data-magicpath-id="10" data-magicpath-path="AIAdvisorPanel.tsx">
            <p className="text-gray-200 leading-relaxed" data-magicpath-id="11" data-magicpath-path="AIAdvisorPanel.tsx">
              Hello! I'm your AI Investment advisor. How can I help you find the perfect business opportunity today?
            </p>
          </SortableContainer>

          {/* Support Options */}
          <SortableContainer dndKitId="2ddc3c1c-2ffc-4a12-870a-42bf8dd662df" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="12" data-magicpath-path="AIAdvisorPanel.tsx">
            <p className="text-blue-100 text-sm font-medium mb-3" data-magicpath-id="13" data-magicpath-path="AIAdvisorPanel.tsx">Type any one of the following for AI support:</p>
            
            <SortableContainer dndKitId="dafc5beb-89de-4251-87b7-3a24d4bde97f" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="14" data-magicpath-path="AIAdvisorPanel.tsx">
              <SortableContainer dndKitId="3b0f00e7-2640-4051-b254-5002a85bc23e" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="15" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="16" data-magicpath-path="AIAdvisorPanel.tsx">1.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="17" data-magicpath-path="AIAdvisorPanel.tsx">Investment Recommendations</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="95903422-bb91-4d53-802a-64c61b7b0aea" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="18" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="19" data-magicpath-path="AIAdvisorPanel.tsx">2.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="20" data-magicpath-path="AIAdvisorPanel.tsx">Analyze Business / Seller</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="6772c959-fb2b-4512-8f37-ccb20f4527f4" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="21" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="22" data-magicpath-path="AIAdvisorPanel.tsx">3.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="23" data-magicpath-path="AIAdvisorPanel.tsx">Sell Software</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="448dd621-9724-4fbe-8870-e480024100da" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="24" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="25" data-magicpath-path="AIAdvisorPanel.tsx">4.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="26" data-magicpath-path="AIAdvisorPanel.tsx">Help</span>
              </SortableContainer>

              <SortableContainer dndKitId="c7278c61-5e7f-401a-82c9-fa26aeb5ac9f" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="27" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="28" data-magicpath-path="AIAdvisorPanel.tsx">5.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="29" data-magicpath-path="AIAdvisorPanel.tsx">Chats</span>
              </SortableContainer>

              <SortableContainer dndKitId="72c2dbd6-6559-4cf3-8a9f-3150f5d25e25" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="30" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="31" data-magicpath-path="AIAdvisorPanel.tsx">6.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="32" data-magicpath-path="AIAdvisorPanel.tsx">Logout</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Input Area */}
        <SortableContainer dndKitId="650aa149-7d6f-4ba3-a138-697dda13828c" containerType="regular" prevTag="div" className="p-6 border-t border-blue-700/30 bg-[#1E3A8A]" data-magicpath-id="33" data-magicpath-path="AIAdvisorPanel.tsx">
          <SortableContainer dndKitId="543aa3f6-ea87-4adc-991f-9c2f76dff94d" containerType="regular" prevTag="div" className="relative" data-magicpath-id="34" data-magicpath-path="AIAdvisorPanel.tsx">
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Ask me anything..." className="w-full bg-[#1e293b] border border-blue-700/30 rounded-xl px-5 py-4 pr-14 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="35" data-magicpath-path="AIAdvisorPanel.tsx" />
            <SortableContainer dndKitId="a9bb6497-024c-43e0-88ce-8da7f65adf53" containerType="regular" prevTag="button" onClick={handleSendMessage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors" data-magicpath-id="36" data-magicpath-path="AIAdvisorPanel.tsx">
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