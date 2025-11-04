"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
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
    action: "Start Chat",
    mpid: "a4888f81-8d3a-46ff-a58b-1db9de1842d6"
  }, {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours",
    action: "Send Email",
    mpid: "3738048e-6e87-4e60-8db5-b7380f0e66f1"
  }, {
    icon: Phone,
    title: "Phone Support",
    description: "Call us directly for immediate assistance",
    action: "Call Now",
    mpid: "aeb3be0d-007c-48fd-83be-15a0ad00491f"
  }, {
    icon: FileText,
    title: "Documentation",
    description: "Browse our comprehensive help articles and guides",
    action: "View Docs",
    mpid: "e9bdda80-ef25-4f3e-a963-4d6d564e40fc"
  }, {
    icon: HelpCircle,
    title: "FAQs",
    description: "Find answers to commonly asked questions",
    action: "View FAQs",
    mpid: "1cb97a12-4eb9-4226-bcaf-00dd854a42c5"
  }] as any[];
  return <>
      <SortableContainer dndKitId="a65e81f4-da80-44de-9613-1a19960b0eb9" containerType="regular" prevTag="div" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" data-magicpath-id="0" data-magicpath-path="HelpScreen.tsx">
        <SortableContainer dndKitId="e0a74b64-bf41-4d49-a96a-33ea9ca326e3" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-2xl w-full max-w-3xl border border-gray-800 max-h-[90vh] overflow-y-auto" data-magicpath-id="1" data-magicpath-path="HelpScreen.tsx">
          {/* Header */}
          <SortableContainer dndKitId="aa6f2f8b-ccba-4bef-b459-4873dc04f75d" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-gray-800 sticky top-0 bg-[#0a0f1a] z-10" data-magicpath-id="2" data-magicpath-path="HelpScreen.tsx">
            <SortableContainer dndKitId="62c4ac2b-438e-4c1f-a013-ac58beed73ed" containerType="regular" prevTag="div" data-magicpath-id="3" data-magicpath-path="HelpScreen.tsx">
              <h2 className="text-2xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="HelpScreen.tsx">Help & Support</h2>
              <p className="text-gray-400 text-sm mt-1" data-magicpath-id="5" data-magicpath-path="HelpScreen.tsx">We're here to help you</p>
            </SortableContainer>
            <SortableContainer dndKitId="024de25e-91e9-4e7c-ac52-fb37d7cbaddd" containerType="regular" prevTag="button" onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="6" data-magicpath-path="HelpScreen.tsx">
              <X className="w-5 h-5 text-white" data-magicpath-id="7" data-magicpath-path="HelpScreen.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Help Options */}
          <SortableContainer dndKitId="e06ef431-7e7d-4267-a7ab-02a97dbe33bd" containerType="collection" prevTag="div" className="px-6 py-6 space-y-4" data-magicpath-id="8" data-magicpath-path="HelpScreen.tsx">
            {helpOptions.map((option, index) => <div key={index} className="bg-[#1a2332] border border-gray-700 rounded-xl p-6 hover:border-[#4169E1] transition-all cursor-pointer group" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="HelpScreen.tsx">
                <div className="flex items-start gap-4" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="HelpScreen.tsx">
                  <div className="w-12 h-12 bg-[#4169E1]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4169E1]/20 transition-colors" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="HelpScreen.tsx">
                    <option.icon className="w-6 h-6 text-[#4169E1]" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="HelpScreen.tsx" />
                  </div>
                  <div className="flex-1" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="HelpScreen.tsx">
                    <h3 className="text-white font-semibold text-lg mb-2" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="14" data-magicpath-path="HelpScreen.tsx">{option.title}</h3>
                    <p className="text-gray-400 text-sm mb-4" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="15" data-magicpath-path="HelpScreen.tsx">{option.description}</p>
                    <button className="text-[#4169E1] hover:text-[#3557C1] font-semibold text-sm transition-colors" data-magicpath-uuid={(option as any)["mpid"] ?? "unsafe"} data-magicpath-field="action:string" data-magicpath-id="16" data-magicpath-path="HelpScreen.tsx">
                      {option.action} →
                    </button>
                  </div>
                </div>
              </div>)}
          </SortableContainer>

          {/* Emergency Contact */}
          <SortableContainer dndKitId="4bf5c5f0-0d1d-4417-be27-3515bec94502" containerType="regular" prevTag="div" className="px-6 pb-6" data-magicpath-id="17" data-magicpath-path="HelpScreen.tsx">
            <SortableContainer dndKitId="605a976b-bd90-4b08-8149-ca595679d535" containerType="regular" prevTag="div" className="bg-red-500/10 border border-red-500/30 rounded-xl p-5" data-magicpath-id="18" data-magicpath-path="HelpScreen.tsx">
              <h3 className="text-red-400 font-semibold mb-2" data-magicpath-id="19" data-magicpath-path="HelpScreen.tsx">Emergency Support</h3>
              <p className="text-gray-300 text-sm mb-3" data-magicpath-id="20" data-magicpath-path="HelpScreen.tsx">
                For urgent issues, call our 24/7 emergency hotline:
              </p>
              <p className="text-white font-bold text-lg" data-magicpath-id="21" data-magicpath-path="HelpScreen.tsx">1-800-SOFTEX-911</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </>;
};