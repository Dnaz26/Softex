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
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-[#0a0f1a] rounded-2xl w-full max-w-lg border border-gray-800">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
            <div>
              <h2 className="text-2xl font-bold text-white">Seller Verification</h2>
              <p className="text-gray-400 text-sm mt-1">Analyzing: {sellerName}</p>
            </div>
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Verification Checks */}
          <div className="px-6 py-6 space-y-3">
            {checks.map((check, index) => <div key={check.id} className={`flex items-center justify-between px-5 py-4 rounded-xl border transition-all ${check.completed ? "border-green-500/50 bg-green-500/10" : index === currentCheckIndex ? "border-[#4169E1] bg-[#4169E1]/10" : "border-gray-700 bg-[#1a2332]"}`}>
                <span className={`font-medium ${check.completed ? "text-green-400" : "text-gray-300"}`}>
                  {check.label}
                </span>
                {check.completed ? <Check className="w-6 h-6 text-green-400" /> : index === currentCheckIndex ? <Loader2 className="w-6 h-6 text-[#4169E1] animate-spin" /> : <div className="w-6 h-6 rounded-full border-2 border-gray-600" />}
              </div>)}
          </div>

          {/* Result */}
          {allComplete && <div className="px-6 pb-6">
              <div className="bg-green-500/10 border border-green-500/50 rounded-xl px-5 py-4">
                <p className="text-green-400 font-semibold text-center">
                  ✓ Seller Verified Successfully
                </p>
                <p className="text-gray-400 text-sm text-center mt-2">
                  All checks passed. This seller is legitimate and trustworthy.
                </p>
              </div>
              <button onClick={onClose} className="w-full mt-4 bg-[#4169E1] hover:bg-[#3557C1] text-white py-3 rounded-xl font-semibold transition-colors">
                Continue
              </button>
            </div>}
        </div>
      </div>
    </>;
};