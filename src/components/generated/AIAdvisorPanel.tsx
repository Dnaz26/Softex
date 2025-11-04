import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { X, Sparkles, Send } from 'lucide-react';
type AIAdvisorPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

// @component: AIAdvisorPanel
export const AIAdvisorPanel = ({
  isOpen,
  onClose
}: AIAdvisorPanelProps) => {
  const [message, setMessage] = useState('');
  if (!isOpen) return null;
  return <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40 transition-opacity" onClick={onClose} data-magicpath-id="0" data-magicpath-path="AIAdvisorPanel.tsx" />
      
      {/* Panel */}
      <SortableContainer dndKitId="570329bc-0836-4663-b3d1-7733435feb56" containerType="regular" prevTag="div" className="fixed top-0 right-0 h-full w-[440px] bg-[#1E3A8A] z-50 shadow-2xl flex flex-col" data-magicpath-id="1" data-magicpath-path="AIAdvisorPanel.tsx">
        {/* Header */}
        <SortableContainer dndKitId="1ae21de4-f461-4fd9-8d7d-d48ad530e0b7" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-blue-700/50" data-magicpath-id="2" data-magicpath-path="AIAdvisorPanel.tsx">
          <SortableContainer dndKitId="cd88746b-94c4-486b-a8dc-025513df1aba" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="3" data-magicpath-path="AIAdvisorPanel.tsx">
            <Sparkles className="w-5 h-5 text-white" />
            <h2 className="text-xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="AIAdvisorPanel.tsx">AI Advisor</h2>
          </SortableContainer>
          <SortableContainer dndKitId="b46d2b40-d1fa-456f-aeff-dac37a325ebc" containerType="regular" prevTag="button" onClick={onClose} className="w-8 h-8 flex items-center justify-center hover:bg-blue-700/30 rounded-lg transition-colors" data-magicpath-id="5" data-magicpath-path="AIAdvisorPanel.tsx">
            <X className="w-5 h-5 text-white" data-magicpath-id="6" data-magicpath-path="AIAdvisorPanel.tsx" />
          </SortableContainer>
        </SortableContainer>

        {/* Subtitle */}
        <SortableContainer dndKitId="3eebb0c8-a1aa-44e9-b713-6746598d5767" containerType="regular" prevTag="div" className="px-6 py-4 border-b border-blue-700/30" data-magicpath-id="7" data-magicpath-path="AIAdvisorPanel.tsx">
          <p className="text-blue-100 text-sm" data-magicpath-id="8" data-magicpath-path="AIAdvisorPanel.tsx">Get personalized investment insights</p>
        </SortableContainer>

        {/* Chat Messages */}
        <SortableContainer dndKitId="7aba0e1f-ac2f-488d-93ad-e311aecd6269" containerType="regular" prevTag="div" className="flex-1 px-6 py-6 overflow-y-auto" data-magicpath-id="9" data-magicpath-path="AIAdvisorPanel.tsx">
          <SortableContainer dndKitId="ce4e91b0-cebb-44b7-b762-cc81c420f547" containerType="regular" prevTag="div" className="bg-[#1e293b] rounded-2xl p-5 mb-6" data-magicpath-id="10" data-magicpath-path="AIAdvisorPanel.tsx">
            <p className="text-gray-200 leading-relaxed" data-magicpath-id="11" data-magicpath-path="AIAdvisorPanel.tsx">
              Hello! I'm your AI Investment advisor. How can I help you find the perfect business opportunity today?
            </p>
          </SortableContainer>

          {/* Support Options */}
          <SortableContainer dndKitId="978b4b2d-81b5-48be-918d-352e073dbf33" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="12" data-magicpath-path="AIAdvisorPanel.tsx">
            <p className="text-blue-100 text-sm font-medium mb-3" data-magicpath-id="13" data-magicpath-path="AIAdvisorPanel.tsx">Type any one of the following for AI support:</p>
            
            <SortableContainer dndKitId="14ced95d-abe3-443b-b1af-a096cfcb2602" containerType="regular" prevTag="div" className="space-y-2" data-magicpath-id="14" data-magicpath-path="AIAdvisorPanel.tsx">
              <SortableContainer dndKitId="63b24ddf-07a2-47b8-bcb6-28aaefc31017" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="15" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="16" data-magicpath-path="AIAdvisorPanel.tsx">1.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="17" data-magicpath-path="AIAdvisorPanel.tsx">Investment Recommendations</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="61618c81-8ea9-4b12-848b-2d35a642a387" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="18" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="19" data-magicpath-path="AIAdvisorPanel.tsx">2.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="20" data-magicpath-path="AIAdvisorPanel.tsx">Analyze Business / Seller</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="67fa35c8-fbcd-44fe-9160-6e835fa439f2" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="21" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="22" data-magicpath-path="AIAdvisorPanel.tsx">3.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="23" data-magicpath-path="AIAdvisorPanel.tsx">Sell Software</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="289260f6-515c-448a-be12-b327b6399663" containerType="regular" prevTag="div" className="flex items-start gap-2" data-magicpath-id="24" data-magicpath-path="AIAdvisorPanel.tsx">
                <span className="text-blue-400 font-semibold" data-magicpath-id="25" data-magicpath-path="AIAdvisorPanel.tsx">4.</span>
                <span className="text-gray-300 text-sm" data-magicpath-id="26" data-magicpath-path="AIAdvisorPanel.tsx">Help</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Input Area */}
        <SortableContainer dndKitId="10ed22f3-0265-4000-baaa-8293f585e66a" containerType="regular" prevTag="div" className="p-6 border-t border-blue-700/30" data-magicpath-id="27" data-magicpath-path="AIAdvisorPanel.tsx">
          <SortableContainer dndKitId="56f82079-9a13-4a35-8a7e-4b4eed3e9a22" containerType="regular" prevTag="div" className="relative" data-magicpath-id="28" data-magicpath-path="AIAdvisorPanel.tsx">
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask me anything..." className="w-full bg-[#1e293b] border border-blue-700/30 rounded-xl px-5 py-4 pr-14 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="29" data-magicpath-path="AIAdvisorPanel.tsx" />
            <SortableContainer dndKitId="d1a4669c-5280-4151-87b3-5c5fdd74248e" containerType="regular" prevTag="button" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors" data-magicpath-id="30" data-magicpath-path="AIAdvisorPanel.tsx">
              <Send className="w-5 h-5 text-white" data-magicpath-id="31" data-magicpath-path="AIAdvisorPanel.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </>;
};