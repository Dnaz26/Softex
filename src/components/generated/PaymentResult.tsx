"use client";

import React from 'react';
import { CheckCircle2, XCircle, ArrowLeft, ExternalLink } from 'lucide-react';

type PaymentResultProps = {
  isSuccess: boolean;
  transactionId?: string;
  amount?: number;
  businessName?: string;
  escrowLink?: string;
  errorMessage?: string;
  onBack: () => void;
  onGoHome: () => void;
};

// @component: PaymentResult
export const PaymentResult = ({
  isSuccess,
  transactionId,
  amount,
  businessName,
  escrowLink,
  errorMessage,
  onBack,
  onGoHome
}: PaymentResultProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f7f8] via-white to-[#f6f7f8] text-[#0d141b]">
      {/* Header */}
      <header className="border-b border-[#e7edf3] bg-white shadow-sm px-4 sm:px-6 lg:px-10 py-3">
        <div className="max-w-[960px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 text-[#1173d4]">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#0d141b] text-lg font-bold leading-tight tracking-[-0.015em]">Software Marketplace</h2>
          </div>
          <button onClick={onGoHome} className="flex items-center gap-2 text-sm font-medium text-[#0d141b] hover:text-[#1173d4] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          {/* Large Icon */}
          <div className={`mb-8 ${isSuccess ? 'animate-bounce' : ''}`}>
            {isSuccess ? (
              <CheckCircle2 className="w-32 h-32 text-green-500" strokeWidth={1.5} />
            ) : (
              <XCircle className="w-32 h-32 text-red-500" strokeWidth={1.5} />
            )}
          </div>

          {/* Title */}
          <h1 className={`text-5xl font-black mb-4 text-center ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {isSuccess ? 'Payment Successful!' : 'Payment Failed'}
          </h1>

          {/* Message */}
          <p className="text-xl text-[#4c739a] text-center mb-8 max-w-2xl">
            {isSuccess ? (
              <>
                Your payment has been processed successfully. Your funds are now securely held in Escrow.com until the transaction is completed.
              </>
            ) : (
              <>
                {errorMessage || 'Your payment could not be processed. Please check your payment method and try again.'}
              </>
            )}
          </p>

          {/* Transaction Details (Success Only) */}
          {isSuccess && (
            <div className="bg-white border border-[#e7edf3] rounded-2xl p-8 mb-8 w-full max-w-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-[#0d141b] mb-6 text-center">Transaction Details</h2>
              
              <div className="space-y-4">
                {businessName && (
                  <div className="flex justify-between items-center py-3 border-b border-[#e7edf3]">
                    <span className="text-[#4c739a] font-medium">Item:</span>
                    <span className="text-[#0d141b] font-semibold">{businessName}</span>
                  </div>
                )}
                
                {amount && (
                  <div className="flex justify-between items-center py-3 border-b border-[#e7edf3]">
                    <span className="text-[#4c739a] font-medium">Amount:</span>
                    <span className="text-[#0d141b] font-bold text-xl">${amount.toLocaleString()}</span>
                  </div>
                )}
                
                {transactionId && (
                  <div className="flex justify-between items-center py-3 border-b border-[#e7edf3]">
                    <span className="text-[#4c739a] font-medium">Transaction ID:</span>
                    <span className="text-[#0d141b] font-mono text-sm">#{transactionId}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-[#4c739a] font-medium">Status:</span>
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full font-semibold text-sm">
                    Secured in Escrow
                  </span>
                </div>
              </div>

              {escrowLink && (
                <div className="mt-6 pt-6 border-t border-[#e7edf3]">
                  <a
                    href={escrowLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#1173d4] hover:bg-[#0d5cb5] text-white rounded-xl transition-colors font-semibold"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Transaction on Escrow.com
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Error Details (Failure Only) */}
          {!isSuccess && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8 w-full max-w-2xl">
              <h2 className="text-xl font-bold text-red-800 mb-4">What went wrong?</h2>
              <ul className="list-disc list-inside space-y-2 text-red-700">
                <li>Insufficient funds in your account</li>
                <li>Card declined by your bank</li>
                <li>Expired or invalid card information</li>
                <li>Network error during processing</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-red-200">
                <button
                  onClick={onBack}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors font-semibold"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
            {isSuccess ? (
              <>
                <button
                  onClick={onGoHome}
                  className="flex-1 px-6 py-4 bg-[#1173d4] hover:bg-[#0d5cb5] text-white rounded-xl transition-colors font-bold text-lg"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex-1 px-6 py-4 bg-white border-2 border-[#1173d4] text-[#1173d4] hover:bg-[#1173d4] hover:text-white rounded-xl transition-colors font-bold text-lg"
                >
                  Print Receipt
                </button>
              </>
            ) : (
              <button
                onClick={onBack}
                className="w-full px-6 py-4 bg-[#1173d4] hover:bg-[#0d5cb5] text-white rounded-xl transition-colors font-bold text-lg"
              >
                Return to Payment
              </button>
            )}
          </div>

          {/* Security Badge */}
          {isSuccess && (
            <div className="mt-8 flex items-center gap-2 text-[#4c739a] text-sm">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Your transaction is secured by Escrow.com</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

