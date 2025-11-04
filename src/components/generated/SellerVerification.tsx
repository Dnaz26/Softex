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
    mpid: "2799b3f5-e234-4a19-948b-c0f494da9897"
  }, {
    id: 2,
    label: "Financial Records",
    completed: false,
    mpid: "600f26d4-9c8a-4acf-926d-c1b234f53b6d"
  }, {
    id: 3,
    label: "Identity Verification",
    completed: false,
    mpid: "d0afbb02-8002-40f0-b763-fc1b0864a5c1"
  }, {
    id: 4,
    label: "Background Check",
    completed: false,
    mpid: "32907bee-87c4-4e5a-ae7a-3c37b9e6353c"
  }, {
    id: 5,
    label: "Credit Score",
    completed: false,
    mpid: "0eb668ae-3bdd-4935-9b53-5d160e4782ab"
  }, {
    id: 6,
    label: "Legal Compliance",
    completed: false,
    mpid: "0a9b020e-4d55-42c2-b8db-95dd92c78a06"
  }, {
    id: 7,
    label: "Tax Records",
    completed: false,
    mpid: "78baebeb-c256-430c-b0ca-91f3aa68acfd"
  }, {
    id: 8,
    label: "Business Performance",
    completed: false,
    mpid: "6a14cc18-844d-4472-ace7-3733d89cbfdb"
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
      <SortableContainer dndKitId="134e4cf9-3f01-46d2-a0ce-db05a287fb99" containerType="regular" prevTag="div" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" data-magicpath-id="0" data-magicpath-path="SellerVerification.tsx">
        <SortableContainer dndKitId="7971ed2b-ce58-4c24-b669-a6f6f521d9d6" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-2xl w-full max-w-lg border border-gray-800" data-magicpath-id="1" data-magicpath-path="SellerVerification.tsx">
          {/* Header */}
          <SortableContainer dndKitId="3cad779f-ea0f-4bbc-a564-4b6fde635f5a" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="SellerVerification.tsx">
            <SortableContainer dndKitId="b20953f7-7887-428b-bb6a-51dd2742e3e5" containerType="regular" prevTag="div" data-magicpath-id="3" data-magicpath-path="SellerVerification.tsx">
              <h2 className="text-2xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="SellerVerification.tsx">Seller Verification</h2>
              <p className="text-gray-400 text-sm mt-1" data-magicpath-id="5" data-magicpath-path="SellerVerification.tsx">Analyzing: {sellerName}</p>
            </SortableContainer>
            <SortableContainer dndKitId="ccbf973d-0f0e-4070-91e2-7298a329962e" containerType="regular" prevTag="button" onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="6" data-magicpath-path="SellerVerification.tsx">
              <X className="w-5 h-5 text-white" data-magicpath-id="7" data-magicpath-path="SellerVerification.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Verification Checks */}
          <SortableContainer dndKitId="9360289f-0159-4b5c-9368-8277faa03cda" containerType="collection" prevTag="div" className="px-6 py-6 space-y-3" data-magicpath-id="8" data-magicpath-path="SellerVerification.tsx">
            {checks.map((check, index) => <div key={check.id} className={`flex items-center justify-between px-5 py-4 rounded-xl border transition-all ${check.completed ? "border-green-500/50 bg-green-500/10" : index === currentCheckIndex ? "border-[#4169E1] bg-[#4169E1]/10" : "border-gray-700 bg-[#1a2332]"}`} data-magicpath-uuid={(check as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="SellerVerification.tsx">
                <span className={`font-medium ${check.completed ? "text-green-400" : "text-gray-300"}`} data-magicpath-uuid={(check as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="10" data-magicpath-path="SellerVerification.tsx">
                  {check.label}
                </span>
                {check.completed ? <Check className="w-6 h-6 text-green-400" data-magicpath-uuid={(check as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="SellerVerification.tsx" /> : index === currentCheckIndex ? <Loader2 className="w-6 h-6 text-[#4169E1] animate-spin" data-magicpath-uuid={(check as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="SellerVerification.tsx" /> : <div className="w-6 h-6 rounded-full border-2 border-gray-600" data-magicpath-uuid={(check as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="SellerVerification.tsx" />}
              </div>)}
          </SortableContainer>

          {/* Result */}
          {allComplete && <SortableContainer dndKitId="61a05a97-384e-422f-8e70-313142ad5046" containerType="regular" prevTag="div" className="px-6 pb-6" data-magicpath-id="14" data-magicpath-path="SellerVerification.tsx">
              <SortableContainer dndKitId="2ef4cd26-38f6-4a17-91af-0218f3f33fe3" containerType="regular" prevTag="div" className="bg-green-500/10 border border-green-500/50 rounded-xl px-5 py-4" data-magicpath-id="15" data-magicpath-path="SellerVerification.tsx">
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