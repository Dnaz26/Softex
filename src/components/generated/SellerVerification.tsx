"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
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
    completed: false,
    mpid: "ec3ca323-dac7-444c-a293-fa4b22def6b5"
  }, {
    id: 2,
    label: "Financial Records",
    completed: false,
    mpid: "0758f5c7-aec3-4462-9793-a32a7c67bb9d"
  }, {
    id: 3,
    label: "Identity Verification",
    completed: false,
    mpid: "9d5b9bb2-4b93-4c9d-a1b0-83310b54f7bc"
  }, {
    id: 4,
    label: "Background Check",
    completed: false,
    mpid: "34bd828f-af43-42f4-a055-510e679af927"
  }, {
    id: 5,
    label: "Credit Score",
    completed: false,
    mpid: "8f545a7e-3cce-48d4-a2a2-4e0569b1ea46"
  }, {
    id: 6,
    label: "Legal Compliance",
    completed: false,
    mpid: "4491f7de-b32d-46ea-950a-6dad9e9b1fe1"
  }, {
    id: 7,
    label: "Tax Records",
    completed: false,
    mpid: "e6a3a2ac-7831-4d09-8432-10a9109fefac"
  }, {
    id: 8,
    label: "Business Performance",
    completed: false,
    mpid: "0b16d5eb-71ab-4192-ab5b-62fbdcd0be4c"
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
      <SortableContainer dndKitId="b517cd59-b311-4b21-82d8-bea55be349cc" containerType="regular" prevTag="div" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" data-magicpath-id="0" data-magicpath-path="SellerVerification.tsx">
        <SortableContainer dndKitId="1ceebc9f-b9ea-45ae-8c15-0e9c97825ed4" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-2xl w-full max-w-lg border border-gray-800" data-magicpath-id="1" data-magicpath-path="SellerVerification.tsx">
          {/* Header */}
          <SortableContainer dndKitId="b71a4a74-c508-41ff-ade4-a4eee0f48db3" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="SellerVerification.tsx">
            <SortableContainer dndKitId="5fc21382-8f5c-4d2d-9138-a29055f49c3c" containerType="regular" prevTag="div" data-magicpath-id="3" data-magicpath-path="SellerVerification.tsx">
              <h2 className="text-2xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="SellerVerification.tsx">Seller Verification</h2>
              <p className="text-gray-400 text-sm mt-1" data-magicpath-id="5" data-magicpath-path="SellerVerification.tsx">Analyzing: {sellerName}</p>
            </SortableContainer>
            <SortableContainer dndKitId="f78651d2-b875-4317-8d6a-08f00975c619" containerType="regular" prevTag="button" onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="6" data-magicpath-path="SellerVerification.tsx">
              <X className="w-5 h-5 text-white" data-magicpath-id="7" data-magicpath-path="SellerVerification.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Verification Checks */}
          <SortableContainer dndKitId="02fc19df-dc5d-45c1-8ea3-a1e3022a0bde" containerType="collection" prevTag="div" className="px-6 py-6 space-y-3" data-magicpath-id="8" data-magicpath-path="SellerVerification.tsx">
            {checks.map((check, index) => <div key={check.id} className={`flex items-center justify-between px-5 py-4 rounded-xl border transition-all ${check.completed ? "border-green-500/50 bg-green-500/10" : index === currentCheckIndex ? "border-[#4169E1] bg-[#4169E1]/10" : "border-gray-700 bg-[#1a2332]"}`} data-magicpath-uuid={(check as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="SellerVerification.tsx">
                <span className={`font-medium ${check.completed ? "text-green-400" : "text-gray-300"}`} data-magicpath-uuid={(check as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="10" data-magicpath-path="SellerVerification.tsx">
                  {check.label}
                </span>
                {check.completed ? <Check className="w-6 h-6 text-green-400" data-magicpath-uuid={(check as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="SellerVerification.tsx" /> : index === currentCheckIndex ? <Loader2 className="w-6 h-6 text-[#4169E1] animate-spin" data-magicpath-uuid={(check as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="SellerVerification.tsx" /> : <div className="w-6 h-6 rounded-full border-2 border-gray-600" data-magicpath-uuid={(check as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="SellerVerification.tsx" />}
              </div>)}
          </SortableContainer>

          {/* Result */}
          {allComplete && <SortableContainer dndKitId="e4d1bdcc-ee44-44c4-9433-a3179fdf750f" containerType="regular" prevTag="div" className="px-6 pb-6" data-magicpath-id="14" data-magicpath-path="SellerVerification.tsx">
              <SortableContainer dndKitId="faa2f012-c020-4db4-ae75-fb72af3fe574" containerType="regular" prevTag="div" className="bg-green-500/10 border border-green-500/50 rounded-xl px-5 py-4" data-magicpath-id="15" data-magicpath-path="SellerVerification.tsx">
                <p className="text-green-400 font-semibold text-center" data-magicpath-id="16" data-magicpath-path="SellerVerification.tsx">
                  ✓ Seller Verified Successfully
                </p>
                <p className="text-gray-400 text-sm text-center mt-2" data-magicpath-id="17" data-magicpath-path="SellerVerification.tsx">
                  All checks passed. This seller is legitimate and trustworthy.
                </p>
              </SortableContainer>
              <button onClick={onClose} className="w-full mt-4 bg-[#4169E1] hover:bg-[#3557C1] text-white py-3 rounded-xl font-semibold transition-colors" data-magicpath-id="18" data-magicpath-path="SellerVerification.tsx">
                Continue
              </button>
            </SortableContainer>}
        </SortableContainer>
      </SortableContainer>
    </>;
};