"use client";

import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Lock, Check, Shield } from 'lucide-react';
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms || !agreePrivacy) {
      alert('Please agree to the Terms of Service and Privacy Policy to continue.');
      return;
    }
    alert('Purchase confirmed! You will receive a confirmation email shortly.');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Calculate totals
  const businessPrice = parseInt(business.price.replace(/[$,]/g, ''));
  const taxes = Math.round(businessPrice * 0.0825); // 8.25% tax
  const total = businessPrice + taxes;
  return <div className="min-h-screen bg-gradient-to-br from-[#f6f7f8] via-white to-[#f6f7f8] text-[#0d141b]">
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
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium text-[#0d141b] hover:text-[#1173d4] transition-colors">
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
              <p className="text-[#0d141b] text-base font-medium leading-normal">Step 3 of 3: Confirm Investment</p>
            </div>
            <div className="rounded bg-[#cfdbe7]">
              <div className="h-2 rounded bg-[#1173d4]" style={{
              width: '100%'
            }}></div>
            </div>
          </div>

          {/* Title Section */}
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#0d141b] text-4xl font-black leading-tight tracking-[-0.033em]">Secure Investment Confirmation</p>
              <p className="text-[#4c739a] text-base font-normal leading-normal">Please review your information and confirm your investment.</p>
            </div>
          </div>

          {/* Form Grid */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Form Fields */}
              <div className="md:col-span-2 flex flex-col gap-8">
                {/* Personal Information */}
                <section>
                  <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Personal Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="flex flex-col flex-1">
                        <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Full Name</p>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal" />
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label className="flex flex-col flex-1">
                        <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Email Address</p>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal" />
                      </label>
                    </div>
                    <div className="sm:col-span-2 flex flex-col">
                      <label className="flex flex-col flex-1">
                        <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Billing Address</p>
                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} required placeholder="Street Address" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal" />
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <input type="text" name="city" value={formData.city} onChange={handleInputChange} required placeholder="City" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal" />
                    </div>
                    <div className="flex flex-col">
                      <input type="text" name="state" value={formData.state} onChange={handleInputChange} required placeholder="State" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal" />
                    </div>
                    <div className="flex flex-col">
                      <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required placeholder="ZIP Code" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal" />
                    </div>
                    <div className="flex flex-col">
                      <input type="text" name="country" value={formData.country} onChange={handleInputChange} required placeholder="Country" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal" />
                    </div>
                  </div>
                </section>

                {/* Payment Method */}
                <section>
                  <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Payment Method</h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setPaymentMethod('card')} className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${paymentMethod === 'card' ? 'border-[#1173d4] bg-[#1173d4]/10 text-[#1173d4]' : 'border-[#cfdbe7] bg-[#f6f7f8] text-[#4c739a] hover:border-[#1173d4] hover:text-[#1173d4]'}`}>
                        <CreditCard className="w-5 h-5" />
                        <span className="font-medium">Credit Card</span>
                      </button>
                      <button type="button" onClick={() => setPaymentMethod('paypal')} className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border transition-all ${paymentMethod === 'paypal' ? 'border-[#1173d4] bg-[#1173d4]/10 text-[#1173d4]' : 'border-[#cfdbe7] bg-[#f6f7f8] text-[#4c739a] hover:border-[#1173d4] hover:text-[#1173d4]'}`}>
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
                            <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Card Number</p>
                            <div className="relative">
                              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required maxLength={19} placeholder="**** **** **** ****" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] pl-12 pr-4 py-[15px] text-base font-normal leading-normal" />
                              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4c739a]" />
                            </div>
                          </label>
                        </div>
                        <div>
                          <label className="flex flex-col flex-1">
                            <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Expiration Date</p>
                            <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} required maxLength={5} placeholder="MM/YY" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal" />
                          </label>
                        </div>
                        <div>
                          <label className="flex flex-col flex-1">
                            <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">CVC</p>
                            <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} required maxLength={4} placeholder="***" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal" />
                          </label>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="flex flex-col flex-1">
                            <p className="text-[#0d141b] text-base font-medium leading-normal pb-2">Name on Card</p>
                            <input type="text" name="nameOnCard" value={formData.nameOnCard} onChange={handleInputChange} required className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] focus:outline-0 focus:ring-0 border border-[#cfdbe7] bg-[#f6f7f8] focus:border-[#1173d4] h-14 placeholder:text-[#4c739a] p-[15px] text-base font-normal leading-normal" />
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
                  <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Order Summary</h2>
                  <div className="p-4 rounded-lg bg-[#f6f7f8] border border-[#e7edf3] space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-[#0d141b] font-medium">{business.title}</p>
                      <p className="text-[#0d141b] font-bold">{business.price}</p>
                    </div>
                    <div className="flex justify-between items-center text-[#4c739a]">
                      <p>Subtotal</p>
                      <p>{business.price}</p>
                    </div>
                    <div className="flex justify-between items-center text-[#4c739a]">
                      <p>Taxes</p>
                      <p>${taxes.toLocaleString()}</p>
                    </div>
                    <div className="border-t border-dashed border-[#cfdbe7] my-4"></div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#0d141b] font-bold text-lg">Total</p>
                      <p className="text-[#1173d4] font-bold text-lg">${total.toLocaleString()}</p>
                    </div>
                  </div>
                </section>

                {/* Policy & Agreements */}
                <section>
                  <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Policy & Agreements</h2>
                  <div className="p-4 rounded-lg bg-[#f6f7f8] border border-[#e7edf3] space-y-4">
                    <div className="h-24 overflow-y-auto p-2 border rounded-lg border-[#cfdbe7] bg-white text-[#4c739a] text-sm">
                      <p className="leading-relaxed">
                        By completing this purchase, you agree to transfer ownership of the listed business assets, intellectual property, and operational resources as specified in the listing. All transactions are subject to verification and final approval. Refund policies apply within 14 days of purchase with valid documentation.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="terms" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} className="form-checkbox h-5 w-5 rounded text-[#1173d4] focus:ring-[#1173d4] border-[#cfdbe7] bg-white mt-0.5" />
                      <label className="text-[#4c739a] text-sm" htmlFor="terms">
                        I have read and agree to the <a href="#" className="text-[#1173d4] hover:underline">Terms of Service</a>.
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="privacy" checked={agreePrivacy} onChange={e => setAgreePrivacy(e.target.checked)} className="form-checkbox h-5 w-5 rounded text-[#1173d4] focus:ring-[#1173d4] border-[#cfdbe7] bg-white mt-0.5" />
                      <label className="text-[#4c739a] text-sm" htmlFor="privacy">
                        I agree to the <a href="#" className="text-[#1173d4] hover:underline">Privacy Policy</a>.
                      </label>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 border-t border-[#e7edf3] pt-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <Lock className="w-4 h-4" />
                  <span className="font-medium">Secure SSL Connection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-[#4c739a]" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#4c739a] font-medium">Powered by</span>
                    <svg className="h-5" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 01-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 013.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 01-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 01-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 00-4.1-1.06c-.86 0-1.44.25-1.44.93 0 1.85 6.29.97 6.29 5.88z" fill="#635BFF" />
                    </svg>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full sm:w-auto flex min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-6 bg-[#1173d4] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-[#0d5cb5] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={!agreeTerms || !agreePrivacy}>
                <span className="truncate">Confirm & Pay ${total.toLocaleString()}</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>;
};