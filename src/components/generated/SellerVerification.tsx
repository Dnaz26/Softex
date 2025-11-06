"use client";

import React, { useState, useEffect } from 'react';
import { X, Check, XCircle, Loader2 } from 'lucide-react';
import { analyzeSellerSecurity } from '../../lib/openai';

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
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [analysisResult, setAnalysisResult] = useState<{
    isSecure: boolean;
    confidence: number;
    reasons: string[];
    warnings: string[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && sellerName) {
      setIsAnalyzing(true);
      setError(null);
      analyzeSellerSecurity(sellerName)
        .then((result) => {
          setAnalysisResult(result);
          setIsAnalyzing(false);
        })
        .catch((err) => {
          console.error('Error analyzing seller:', err);
          setError(err instanceof Error ? err.message : 'Failed to analyze seller');
          setIsAnalyzing(false);
        });
    }
  }, [isOpen, sellerName]);
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

          {/* Analysis Content */}
          <div className="px-6 py-6">
            {isAnalyzing ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="w-16 h-16 text-[#4169E1] animate-spin mb-4" />
                <p className="text-white text-lg font-semibold">Analyzing seller/business...</p>
                <p className="text-gray-400 text-sm mt-2">Checking financials, history, and legitimacy</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-12">
                <XCircle className="w-16 h-16 text-red-500 mb-4" />
                <p className="text-white text-lg font-semibold mb-2">Analysis Error</p>
                <p className="text-gray-400 text-center">{error}</p>
              </div>
            ) : analysisResult ? (
              <div className="space-y-6">
                {/* Result Header */}
                <div className={`rounded-xl p-6 flex items-center justify-center gap-4 ${
                  analysisResult.isSecure
                    ? 'bg-green-500/10 border border-green-500/50'
                    : 'bg-red-500/10 border border-red-500/50'
                }`}>
                  {analysisResult.isSecure ? (
                    <>
                      <Check className="w-12 h-12 text-green-400" />
                      <div>
                        <p className="text-green-400 font-bold text-2xl">Secure</p>
                        <p className="text-gray-400 text-sm">Confidence: {analysisResult.confidence}%</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-12 h-12 text-red-400" />
                      <div>
                        <p className="text-red-400 font-bold text-2xl">Not Secure</p>
                        <p className="text-gray-400 text-sm">Confidence: {analysisResult.confidence}%</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Reasons */}
                {analysisResult.reasons.length > 0 && (
                  <div className="bg-[#1a2332] rounded-xl p-5">
                    <h3 className="text-white font-semibold mb-3">Analysis Results:</h3>
                    <ul className="space-y-2">
                      {analysisResult.reasons.map((reason, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Warnings */}
                {analysisResult.warnings.length > 0 && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                    <h3 className="text-red-400 font-semibold mb-3">Warnings:</h3>
                    <ul className="space-y-2">
                      {analysisResult.warnings.map((warning, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-red-400 mt-1">⚠</span>
                          <span>{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={onClose}
                  className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Continue
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>;
};