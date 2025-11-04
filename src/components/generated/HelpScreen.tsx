"use client";

import React from 'react';
import { X, MessageCircle, Mail, Phone, FileText, HelpCircle } from 'lucide-react';
type HelpScreenProps = {
  isOpen: boolean;
  onClose: () => void;
};

// @component: HelpScreen
export const HelpScreen = ({
  isOpen,
  onClose
}: HelpScreenProps) => {
  if (!isOpen) return null;
  const helpOptions = [{
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Chat with our support team in real-time",
    action: "Start Chat"
  }, {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours",
    action: "Send Email"
  }, {
    icon: Phone,
    title: "Phone Support",
    description: "Call us directly for immediate assistance",
    action: "Call Now"
  }, {
    icon: FileText,
    title: "Documentation",
    description: "Browse our comprehensive help articles and guides",
    action: "View Docs"
  }, {
    icon: HelpCircle,
    title: "FAQs",
    description: "Find answers to commonly asked questions",
    action: "View FAQs"
  }] as any[];
  return <>
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" data-magicpath-id="0" data-magicpath-path="HelpScreen.tsx">
        <div className="bg-[#0a0f1a] rounded-2xl w-full max-w-3xl border border-gray-800 max-h-[90vh] overflow-y-auto" data-magicpath-id="1" data-magicpath-path="HelpScreen.tsx">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800 sticky top-0 bg-[#0a0f1a] z-10" data-magicpath-id="2" data-magicpath-path="HelpScreen.tsx">
            <div data-magicpath-id="3" data-magicpath-path="HelpScreen.tsx">
              <h2 className="text-2xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="HelpScreen.tsx">Help & Support</h2>
              <p className="text-gray-400 text-sm mt-1" data-magicpath-id="5" data-magicpath-path="HelpScreen.tsx">We're here to help you</p>
            </div>
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="6" data-magicpath-path="HelpScreen.tsx">
              <X className="w-5 h-5 text-white" data-magicpath-id="7" data-magicpath-path="HelpScreen.tsx" />
            </button>
          </div>

          {/* Help Options */}
          <div className="px-6 py-6 space-y-4" data-magicpath-id="8" data-magicpath-path="HelpScreen.tsx">
            {helpOptions.map((option, index) => <div key={index} className="bg-[#1a2332] border border-gray-700 rounded-xl p-6 hover:border-[#4169E1] transition-all cursor-pointer group" data-magicpath-id="9" data-magicpath-path="HelpScreen.tsx">
                <div className="flex items-start gap-4" data-magicpath-id="10" data-magicpath-path="HelpScreen.tsx">
                  <div className="w-12 h-12 bg-[#4169E1]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4169E1]/20 transition-colors" data-magicpath-id="11" data-magicpath-path="HelpScreen.tsx">
                    <option.icon className="w-6 h-6 text-[#4169E1]" data-magicpath-id="12" data-magicpath-path="HelpScreen.tsx" />
                  </div>
                  <div className="flex-1" data-magicpath-id="13" data-magicpath-path="HelpScreen.tsx">
                    <h3 className="text-white font-semibold text-lg mb-2" data-magicpath-id="14" data-magicpath-path="HelpScreen.tsx">{option.title}</h3>
                    <p className="text-gray-400 text-sm mb-4" data-magicpath-id="15" data-magicpath-path="HelpScreen.tsx">{option.description}</p>
                    <button className="text-[#4169E1] hover:text-[#3557C1] font-semibold text-sm transition-colors" data-magicpath-id="16" data-magicpath-path="HelpScreen.tsx">
                      {option.action} →
                    </button>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Emergency Contact */}
          <div className="px-6 pb-6" data-magicpath-id="17" data-magicpath-path="HelpScreen.tsx">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5" data-magicpath-id="18" data-magicpath-path="HelpScreen.tsx">
              <h3 className="text-red-400 font-semibold mb-2" data-magicpath-id="19" data-magicpath-path="HelpScreen.tsx">Emergency Support</h3>
              <p className="text-gray-300 text-sm mb-3" data-magicpath-id="20" data-magicpath-path="HelpScreen.tsx">
                For urgent issues, call our 24/7 emergency hotline:
              </p>
              <p className="text-white font-bold text-lg" data-magicpath-id="21" data-magicpath-path="HelpScreen.tsx">1-800-SOFTEX-911</p>
            </div>
          </div>
        </div>
      </div>
    </>;
};