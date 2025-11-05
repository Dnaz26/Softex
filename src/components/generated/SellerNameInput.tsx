"use client";

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
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-[#0a0f1a] rounded-2xl w-full max-w-md border border-gray-800">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white">Analyze Seller</h2>
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-6">
            <label className="block text-white text-sm font-semibold mb-3">
              Business / Seller Name
            </label>
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" value={sellerName} onChange={e => setSellerName(e.target.value)} placeholder="Enter business or seller name" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" autoFocus />
            </div>

            <button type="submit" className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!sellerName.trim()}>
              Analyze
            </button>
          </form>
        </div>
      </div>
    </>;
};