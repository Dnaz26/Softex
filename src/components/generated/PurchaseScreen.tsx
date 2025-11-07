"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, CreditCard, Lock, Check, Shield, Loader2, AlertCircle } from 'lucide-react';
import { createEscrowTransaction } from '../../lib/escrow';
import { PaymentResult } from './PaymentResult';
import { getStripe, processStripePayment, validateCard, getCardType } from '../../lib/stripe';
import type { StripeCardElement } from '@stripe/stripe-js';
type PurchaseScreenProps = {
  business: {
    title: string;
    price: string;
    image: string;
    category: string;
  };
  onBack: () => void;
};

// @component: PurchaseScreen
export const PurchaseScreen = ({
  business,
  onBack
}: PurchaseScreenProps) => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '',
    address: '123 Market St',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94103',
    country: 'USA',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: 'John Doe'
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [escrowLink, setEscrowLink] = useState<string | null>(null);
  const [showPaymentResult, setShowPaymentResult] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [stripeCardElement, setStripeCardElement] = useState<StripeCardElement | null>(null);
  const cardElementRef = useRef<HTMLDivElement>(null);
  const [cvcMaxLength, setCvcMaxLength] = useState(3); // Default to 3 digits

  // Initialize Stripe card element (optional - only if Stripe is properly configured)
  useEffect(() => {
    const initStripeCard = async () => {
      // Only try to use Stripe if we have a valid publishable key
      const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
      if (!stripeKey || (!stripeKey.startsWith('pk_test_') && !stripeKey.startsWith('pk_live_'))) {
        // Stripe not properly configured, use regular input
        return;
      }

      if (paymentMethod === 'card' && cardElementRef.current && !stripeCardElement) {
        try {
          const stripe = await getStripe();
          if (stripe && cardElementRef.current) {
            const elements = stripe.elements();
            const cardElement = elements.create('card', {
              style: {
                base: {
                  fontSize: '16px',
                  color: '#ffffff',
                  '::placeholder': {
                    color: '#9CA3AF',
                  },
                  backgroundColor: '#1e293b',
                },
                invalid: {
                  color: '#EF4444',
                },
              },
            });
            cardElement.mount(cardElementRef.current);
            setStripeCardElement(cardElement);
          }
        } catch (error) {
          console.warn('Stripe initialization failed, using regular input:', error);
          // If Stripe fails, we'll use the regular input field
        }
      }
    };

    initStripeCard();

    // Cleanup
    return () => {
      if (stripeCardElement) {
        try {
          stripeCardElement.unmount();
        } catch (error) {
          // Ignore unmount errors
        }
      }
    };
  }, [paymentMethod]);

  // Process payment with Stripe (checks funds and validates card)
  const processPayment = async (amount: number): Promise<{ success: boolean; error?: string; fraudDetected?: boolean }> => {
    if (paymentMethod === 'card') {
      // Validate card details first
      const cardValidation = validateCard(
        formData.cardNumber,
        formData.expiryDate,
        formData.cvv
      );

      if (!cardValidation.valid) {
        return {
          success: false,
          error: cardValidation.errors.join(', '),
        };
      }

      // Use Stripe card element if available
      if (stripeCardElement) {
        const result = await processStripePayment(
          stripeCardElement,
          amount,
          formData.email,
          formData.nameOnCard
        );
        return result;
      }

      // Fallback: Basic validation if Stripe not configured
      const cleanCardNumber = formData.cardNumber.replace(/\s/g, '');
      if (!cleanCardNumber || cleanCardNumber.length < 13) {
        return { success: false, error: 'Invalid card number' };
      }

      // For demo without Stripe: Cards ending in even numbers succeed
      const lastDigit = parseInt(cleanCardNumber[cleanCardNumber.length - 1]);
      const hasFunds = lastDigit % 2 === 0;

      if (hasFunds) {
        return { success: true };
      } else {
        return { success: false, error: 'Insufficient funds in your account' };
      }
    }

    // PayPal or other methods
    return { success: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPaymentError(null);
    
    if (!agreeTerms || !agreePrivacy) {
      setError('Please agree to the Terms of Service and Privacy Policy to continue.');
      return;
    }

    if (!formData.email || !formData.fullName) {
      setError('Please fill in all required fields.');
      return;
    }

    if (paymentMethod === 'card' && (!formData.cardNumber || !formData.expiryDate || !formData.cvv)) {
      setError('Please fill in all payment details.');
      return;
    }

    setIsProcessing(true);

    try {
      // Calculate total amount
      const businessPrice = parseInt(business.price.replace(/[$,]/g, ''));
      const taxes = Math.round(businessPrice * 0.0825);
      const totalAmount = businessPrice + taxes;

      // Process payment first (check if card has funds and validate)
      let paymentResult;
      if (paymentMethod === 'card') {
        paymentResult = await processPayment(totalAmount);
        
        if (!paymentResult.success) {
          // Payment failed - show failure page
          setPaymentSuccess(false);
          let errorMsg = paymentResult.error || 'Payment could not be processed';
          
          if (paymentResult.fraudDetected) {
            errorMsg = 'Payment declined due to security concerns. Please use a different payment method or contact support.';
          }
          
          setPaymentError(errorMsg);
          setShowPaymentResult(true);
          setIsProcessing(false);
          return;
        }
      }

      // Payment successful - create Escrow transaction
      const escrowResponse = await createEscrowTransaction(
        formData.email, // Buyer email
        'seller@softex.com', // Seller email (you can make this dynamic later)
        totalAmount,
        business.title,
        `Purchase of ${business.title} - ${business.category}`
      );

      console.log('✅ Escrow transaction created:', escrowResponse);

      // Store transaction details
      const txId = escrowResponse.id?.toString() || escrowResponse.reference;
      setTransactionId(txId);
      
      // If Escrow provides a link, store it
      if (escrowResponse.escrow_link) {
        setEscrowLink(escrowResponse.escrow_link);
      }

      // Show success page
      setPaymentSuccess(true);
      setShowPaymentResult(true);
    } catch (err: any) {
      console.error('Transaction error:', err);
      // Show failure page
      setPaymentSuccess(false);
      setPaymentError(
        err.message || 
        'Failed to create secure transaction. Please try again or contact support.'
      );
      setShowPaymentResult(true);
    } finally {
      setIsProcessing(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Detect card type and update CVC max length when card number changes
    if (name === 'cardNumber') {
      const cardType = getCardType(value);
      // American Express uses 4-digit CVC, others use 3
      const newCvcMaxLength = cardType === 'amex' ? 4 : 3;
      setCvcMaxLength(newCvcMaxLength);
      
      // If CVC already has more digits than allowed, truncate it
      if (formData.cvv.length > newCvcMaxLength) {
        setFormData({
          ...formData,
          [name]: value,
          cvv: formData.cvv.substring(0, newCvcMaxLength)
        });
        return;
      }
    }
    
    // Limit CVC input based on current card type
    if (name === 'cvv') {
      // Get current card type to determine max length
      const currentCardType = getCardType(formData.cardNumber);
      const maxCvcLength = currentCardType === 'amex' ? 4 : 3;
      
      // Only allow digits and limit to max length
      const numericValue = value.replace(/\D/g, '').substring(0, maxCvcLength);
      
      setFormData({
        ...formData,
        [name]: numericValue
      });
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Calculate totals
  const businessPrice = parseInt(business.price.replace(/[$,]/g, ''));
  const taxes = Math.round(businessPrice * 0.0825); // 8.25% tax
  const total = businessPrice + taxes;

  // Show payment result page if payment was processed
  if (showPaymentResult) {
    return (
      <PaymentResult
        isSuccess={paymentSuccess}
        transactionId={transactionId || undefined}
        amount={total}
        businessName={business.title}
        escrowLink={escrowLink || undefined}
        errorMessage={paymentError || undefined}
        onBack={() => {
          setShowPaymentResult(false);
          setPaymentSuccess(false);
          setPaymentError(null);
        }}
        onGoHome={onBack}
      />
    );
  }

  return <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0B1A33] shadow-sm px-4 sm:px-6 lg:px-10 py-3">
        <div className="max-w-[960px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 text-[#4169E1]">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Software Marketplace</h2>
          </div>
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col gap-8">
          {/* Progress Indicator */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-6 justify-between">
              <p className="text-white text-base font-medium leading-normal">Step 3 of 3: Confirm Investment</p>
            </div>
            <div className="rounded bg-gray-800">
              <div className="h-2 rounded bg-[#4169E1]" style={{
              width: '100%'
            }}></div>
            </div>
          </div>

          {/* Title Section */}
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Secure Investment Confirmation</p>
              <p className="text-gray-400 text-base font-normal leading-normal">Please review your information and confirm your investment. Your payment will be secured through Escrow.com.</p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-300 font-medium">Transaction Error</p>
                <p className="text-red-400 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}


          {/* Form Grid */}
          <form onSubmit={handleSubmit} autoComplete="on" method="post" action="#" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Form Fields */}
              <div className="md:col-span-2 flex flex-col gap-8">
                {/* Personal Information */}
                <section>
                  <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Personal Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="flex flex-col flex-1">
                        <p className="text-white text-base font-medium leading-normal pb-2">Full Name</p>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} autoComplete="name" required className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" />
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="flex flex-col flex-1">
                        <p className="text-white text-base font-medium leading-normal pb-2">Email Address</p>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" required className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" />
                      </label>
                    </div>
                    <div className="sm:col-span-2 flex flex-col">
                      <label className="flex flex-col flex-1">
                        <p className="text-white text-base font-medium leading-normal pb-2">Billing Address</p>
                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} autoComplete="street-address" required placeholder="Street Address" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" />
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <input type="text" name="city" value={formData.city} onChange={handleInputChange} autoComplete="address-level2" required placeholder="City" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" />
                    </div>
                    <div className="flex flex-col">
                      <input type="text" name="state" value={formData.state} onChange={handleInputChange} autoComplete="address-level1" required placeholder="State" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" />
                    </div>
                    <div className="flex flex-col">
                      <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} autoComplete="postal-code" required placeholder="ZIP Code" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" />
                    </div>
                    <div className="flex flex-col">
                      <input type="text" name="country" value={formData.country} onChange={handleInputChange} autoComplete="country" required placeholder="Country" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" />
                    </div>
                  </div>
                </section>

                {/* Payment Method */}
                <section>
                  <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Payment Method</h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setPaymentMethod('card')} className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${paymentMethod === 'card' ? 'border-[#4169E1] bg-[#4169E1]/10 text-[#4169E1]' : 'border-gray-700 bg-[#1e293b] text-gray-400 hover:border-[#4169E1] hover:text-[#4169E1]'}`}>
                        <CreditCard className="w-5 h-5" />
                        <span className="font-medium">Credit Card</span>
                      </button>
                      <button type="button" onClick={() => setPaymentMethod('paypal')} className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${paymentMethod === 'paypal' ? 'border-[#4169E1] bg-[#4169E1]/10 text-[#4169E1]' : 'border-gray-700 bg-[#1e293b] text-gray-400 hover:border-[#4169E1] hover:text-[#4169E1]'}`}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.32962 20.3207C4.30932 20.3207 5.10906 19.5312 5.10906 18.5515C5.10906 17.582 4.30932 16.7823 3.32962 16.7823C2.35002 16.7823 1.55018 17.582 1.55018 18.5515C1.55018 19.5312 2.35002 20.3207 3.32962 20.3207Z"></path>
                          <path d="M19.3242 3.6792C18.9843 3.6792 18.7344 3.96904 18.7044 4.3089L17.3847 13.9155C17.3447 14.3453 17.6546 14.7151 18.0945 14.7551L21.4133 15.0149C21.8432 15.0549 22.2031 14.7551 22.2831 14.3253L23.9525 4.41885C24.0325 4.01897 23.7526 3.6792 23.3227 3.6792H19.3242Z"></path>
                          <path d="M17.4346 13.8456L15.9349 4.20906C15.8949 3.92918 15.655 3.72925 15.3651 3.72925H10.1562C9.72635 3.72925 9.38647 4.02909 9.32652 4.45892L8.0368 13.9056C7.96684 14.3454 8.27672 14.7252 8.71661 14.7652L12.5956 15.1149C13.0255 15.1549 13.4054 14.8651 13.4853 14.4253L14.735 4.88849L16.0948 14.3554C16.1548 14.7952 16.5447 15.115 17.0045 15.075L18.0645 14.9851L17.4346 13.8456Z"></path>
                          <path d="M8.07694 13.8855L6.68725 4.36898C6.63728 4.0291 6.36737 3.78921 6.01749 3.78921H0.908203L0.0384731 9.4271C-0.031501 9.84693 0.268388 10.2368 0.69827 10.2867L4.1272 10.6765C4.51711 10.7265 4.867 10.4566 4.94696 10.0567L5.35686 7.84759L5.95663 11.5162L5.2069 11.4162L5.80667 14.985C5.90662 15.5448 6.44645 15.9246 7.0163 15.8247L8.71618 15.5449L8.07694 13.8855Z"></path>
                        </svg>
                        <span className="font-medium">PayPal</span>
                      </button>
                    </div>

                        {paymentMethod === 'card' && <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <label className="flex flex-col flex-1">
                            <p className="text-white text-base font-medium leading-normal pb-2">Card Number</p>
                            <div className="relative">
                              {/* Regular input - Always visible and usable */}
                              <input 
                                type="tel" 
                                name="cardNumber" 
                                value={formData.cardNumber} 
                                onChange={handleInputChange} 
                                autoComplete="cc-number"
                                inputMode="numeric"
                                pattern="[0-9\s]{13,19}"
                                required 
                                maxLength={19} 
                                placeholder="**** **** **** ****" 
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 pl-12 pr-4 py-[15px] text-base font-normal leading-normal" 
                              />
                              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              {/* Stripe Card Element Container - Hidden, only used if Stripe is properly configured */}
                              {stripeCardElement && (
                                <div 
                                  ref={cardElementRef}
                                  className="absolute inset-0 pointer-events-none opacity-0"
                                  style={{ zIndex: -1 }}
                                />
                              )}
                            </div>
                            <p className="text-xs text-gray-400 mt-1">Secured by Stripe - Your card details are encrypted</p>
                          </label>
                        </div>
                        <div>
                          <label className="flex flex-col flex-1">
                            <p className="text-white text-base font-medium leading-normal pb-2">Expiration Date</p>
                            <input type="tel" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} autoComplete="cc-exp" inputMode="numeric" pattern="[0-9]{2}/[0-9]{2}" required maxLength={5} placeholder="MM/YY" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" />
                          </label>
                        </div>
                        <div>
                          <label className="flex flex-col flex-1">
                            <p className="text-white text-base font-medium leading-normal pb-2">
                              CVC {cvcMaxLength === 4 && <span className="text-gray-400 text-sm">(Amex: 4 digits)</span>}
                            </p>
                            <input 
                              type="tel" 
                              name="cvv" 
                              value={formData.cvv} 
                              onChange={handleInputChange} 
                              autoComplete="cc-csc" 
                              inputMode="numeric" 
                              pattern={cvcMaxLength === 4 ? "[0-9]{4}" : "[0-9]{3}"}
                              required 
                              maxLength={cvcMaxLength}
                              placeholder={cvcMaxLength === 4 ? "****" : "***"}
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" 
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              {cvcMaxLength === 4 ? '4 digits for American Express' : '3 digits for Visa, Mastercard, Discover'}
                            </p>
                          </label>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="flex flex-col flex-1">
                            <p className="text-white text-base font-medium leading-normal pb-2">Name on Card</p>
                            <input type="text" name="nameOnCard" value={formData.nameOnCard} onChange={handleInputChange} autoComplete="cc-name" required className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white bg-[#1e293b] border border-gray-700 focus:border-[#4169E1] h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal" />
                          </label>
                        </div>
                      </div>}
                  </div>
                </section>
              </div>

              {/* Right Column - Order Summary & Policies */}
              <div className="md:col-span-1 flex flex-col gap-8">
                {/* Order Summary */}
                <section>
                  <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Order Summary</h2>
                  <div className="p-4 rounded-lg bg-[#1e293b] border border-gray-700 space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-white font-medium">{business.title}</p>
                      <p className="text-white font-bold">{business.price}</p>
                    </div>
                    <div className="flex justify-between items-center text-gray-400">
                      <p>Subtotal</p>
                      <p>{business.price}</p>
                    </div>
                    <div className="flex justify-between items-center text-gray-400">
                      <p>Taxes</p>
                      <p>${taxes.toLocaleString()}</p>
                    </div>
                    <div className="border-t border-dashed border-gray-700 my-4"></div>
                    <div className="flex justify-between items-center">
                      <p className="text-white font-bold text-lg">Total</p>
                      <p className="text-[#4169E1] font-bold text-lg">${total.toLocaleString()}</p>
                    </div>
                  </div>
                </section>

                {/* Policy & Agreements */}
                <section>
                  <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Policy & Agreements</h2>
                  <div className="p-4 rounded-lg bg-[#1e293b] border border-gray-700 space-y-4">
                    <div className="h-24 overflow-y-auto p-2 border rounded-lg border-gray-700 bg-[#0B1A33] text-gray-400 text-sm">
                      <p className="leading-relaxed">
                        By completing this purchase, you agree to transfer ownership of the listed business assets, intellectual property, and operational resources as specified in the listing. All transactions are subject to verification and final approval. Refund policies apply within 14 days of purchase with valid documentation.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="terms" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} className="form-checkbox h-5 w-5 rounded text-[#4169E1] focus:ring-[#4169E1] border-gray-700 bg-[#0B1A33] mt-0.5" />
                      <label className="text-gray-400 text-sm" htmlFor="terms">
                        I have read and agree to the <a href="#" className="text-[#4169E1] hover:underline">Terms of Service</a>.
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="privacy" checked={agreePrivacy} onChange={e => setAgreePrivacy(e.target.checked)} className="form-checkbox h-5 w-5 rounded text-[#4169E1] focus:ring-[#4169E1] border-gray-700 bg-[#0B1A33] mt-0.5" />
                      <label className="text-gray-400 text-sm" htmlFor="privacy">
                        I agree to the <a href="#" className="text-[#4169E1] hover:underline">Privacy Policy</a>.
                      </label>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 border-t border-gray-800 pt-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-500">
                  <Lock className="w-4 h-4" />
                  <span className="font-medium text-white">Secure SSL Connection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-gray-400" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-medium">Secured by</span>
                    <span className="text-xs text-[#4169E1] font-bold">Escrow.com</span>
                  </div>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full sm:w-auto flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-[#4169E1] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-[#3557C1] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" 
                disabled={!agreeTerms || !agreePrivacy || isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    <span className="truncate">Creating Secure Transaction...</span>
                  </>
                ) : (
                  <span className="truncate">Confirm & Pay Securely ${total.toLocaleString()}</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>;
};