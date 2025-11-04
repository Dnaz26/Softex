"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
type SellerNameInputProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
};

// @component: SellerNameInput
export const SellerNameInput = ({
  isOpen,
  onClose,
  onSubmit
}: SellerNameInputProps) => {
  const [sellerName, setSellerName] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sellerName.trim()) {
      onSubmit(sellerName);
    }
  };
  if (!isOpen) return null;
  return <>
      <SortableContainer dndKitId="2f855211-b291-481d-b185-b413e260b644" containerType="regular" prevTag="div" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" data-magicpath-id="0" data-magicpath-path="SellerNameInput.tsx">
        <SortableContainer dndKitId="1c7405a3-8836-4bf3-9db6-039ae9e0f330" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-2xl w-full max-w-md border border-gray-800" data-magicpath-id="1" data-magicpath-path="SellerNameInput.tsx">
          {/* Header */}
          <SortableContainer dndKitId="85c97982-3f03-4d7c-8884-0c2164050129" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="SellerNameInput.tsx">
            <h2 className="text-xl font-bold text-white" data-magicpath-id="3" data-magicpath-path="SellerNameInput.tsx">Analyze Seller</h2>
            <SortableContainer dndKitId="278fae5e-6c25-4502-ac82-d657d90301f9" containerType="regular" prevTag="button" onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="4" data-magicpath-path="SellerNameInput.tsx">
              <X className="w-5 h-5 text-white" data-magicpath-id="5" data-magicpath-path="SellerNameInput.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Form */}
          <SortableContainer dndKitId="59397991-91b7-4f30-a01d-8bedfae23b6b" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="px-6 py-6" data-magicpath-id="6" data-magicpath-path="SellerNameInput.tsx">
            <label className="block text-white text-sm font-semibold mb-3" data-magicpath-id="7" data-magicpath-path="SellerNameInput.tsx">
              Business / Seller Name
            </label>
            <SortableContainer dndKitId="e7d793a0-4326-4b21-8f04-eaf261d3942e" containerType="regular" prevTag="div" className="relative mb-6" data-magicpath-id="8" data-magicpath-path="SellerNameInput.tsx">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="9" data-magicpath-path="SellerNameInput.tsx" />
              <input type="text" value={sellerName} onChange={e => setSellerName(e.target.value)} placeholder="Enter business or seller name" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" autoFocus data-magicpath-id="10" data-magicpath-path="SellerNameInput.tsx" />
            </SortableContainer>

            <button type="submit" className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!sellerName.trim()} data-magicpath-id="11" data-magicpath-path="SellerNameInput.tsx">
              Analyze
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </>;
};