"use client";

import React, { useState, useEffect } from 'react';
import { X, Check, Loader2 } from 'lucide-react';
type SellerVerificationProps = {
  isOpen: boolean;
  onClose: () => void;
  sellerName: string;
};

// @component: SellerVerification
export const SellerVerification = ({
  isOpen,
  onClose,
  sellerName
}: SellerVerificationProps) => {
  const [checks, setChecks] = useState([{
    id: 1,
    label: "Business Registration",
    completed: false
  }, {
    id: 2,
    label: "Financial Records",
    completed: false
  }, {
    id: 3,
    label: "Identity Verification",
    completed: false
  }, {
    id: 4,
    label: "Background Check",
    completed: false
  }, {
    id: 5,
    label: "Credit Score",
    completed: false
  }, {
    id: 6,
    label: "Legal Compliance",
    completed: false
  }, {
    id: 7,
    label: "Tax Records",
    completed: false
  }, {
    id: 8,
    label: "Business Performance",
    completed: false
  }]);
  const [currentCheckIndex, setCurrentCheckIndex] = useState(0);
  const [allComplete, setAllComplete] = useState(false);
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCurrentCheckIndex(prevIndex => {
        if (prevIndex < checks.length) {
          setChecks(prevChecks => prevChecks.map((check, index) => index === prevIndex ? {
            ...check,
            completed: true
          } : check));
          return prevIndex + 1;
        } else {
          setAllComplete(true);
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 800);
    return () => clearInterval(interval);
  }, [isOpen, checks.length]);
  if (!isOpen) return null;
  return <>
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" data-magicpath-id="0" data-magicpath-path="SellerVerification.tsx">
        <div className="bg-[#0a0f1a] rounded-2xl w-full max-w-lg border border-gray-800" data-magicpath-id="1" data-magicpath-path="SellerVerification.tsx">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="SellerVerification.tsx">
            <div data-magicpath-id="3" data-magicpath-path="SellerVerification.tsx">
              <h2 className="text-2xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="SellerVerification.tsx">Seller Verification</h2>
              <p className="text-gray-400 text-sm mt-1" data-magicpath-id="5" data-magicpath-path="SellerVerification.tsx">Analyzing: {sellerName}</p>
            </div>
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="6" data-magicpath-path="SellerVerification.tsx">
              <X className="w-5 h-5 text-white" data-magicpath-id="7" data-magicpath-path="SellerVerification.tsx" />
            </button>
          </div>

          {/* Verification Checks */}
          <div className="px-6 py-6 space-y-3" data-magicpath-id="8" data-magicpath-path="SellerVerification.tsx">
            {checks.map((check, index) => <div key={check.id} className={`flex items-center justify-between px-5 py-4 rounded-xl border transition-all ${check.completed ? "border-green-500/50 bg-green-500/10" : index === currentCheckIndex ? "border-[#4169E1] bg-[#4169E1]/10" : "border-gray-700 bg-[#1a2332]"}`} data-magicpath-id="9" data-magicpath-path="SellerVerification.tsx">
                <span className={`font-medium ${check.completed ? "text-green-400" : "text-gray-300"}`} data-magicpath-id="10" data-magicpath-path="SellerVerification.tsx">
                  {check.label}
                </span>
                {check.completed ? <Check className="w-6 h-6 text-green-400" data-magicpath-id="11" data-magicpath-path="SellerVerification.tsx" /> : index === currentCheckIndex ? <Loader2 className="w-6 h-6 text-[#4169E1] animate-spin" data-magicpath-id="12" data-magicpath-path="SellerVerification.tsx" /> : <div className="w-6 h-6 rounded-full border-2 border-gray-600" data-magicpath-id="13" data-magicpath-path="SellerVerification.tsx" />}
              </div>)}
          </div>

          {/* Result */}
          {allComplete && <div className="px-6 pb-6" data-magicpath-id="14" data-magicpath-path="SellerVerification.tsx">
              <div className="bg-green-500/10 border border-green-500/50 rounded-xl px-5 py-4" data-magicpath-id="15" data-magicpath-path="SellerVerification.tsx">
                <p className="text-green-400 font-semibold text-center" data-magicpath-id="16" data-magicpath-path="SellerVerification.tsx">
                  ✓ Seller Verified Successfully
                </p>
                <p className="text-gray-400 text-sm text-center mt-2" data-magicpath-id="17" data-magicpath-path="SellerVerification.tsx">
                  All checks passed. This seller is legitimate and trustworthy.
                </p>
              </div>
              <button onClick={onClose} className="w-full mt-4 bg-[#4169E1] hover:bg-[#3557C1] text-white py-3 rounded-xl font-semibold transition-colors" data-magicpath-id="18" data-magicpath-path="SellerVerification.tsx">
                Continue
              </button>
            </div>}
        </div>
      </div>
    </>;
};