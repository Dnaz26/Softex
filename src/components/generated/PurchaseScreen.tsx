"use client";

import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Lock } from 'lucide-react';
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
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle purchase logic
    alert('Purchase initiated! You will be contacted shortly.');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-black text-white" data-magicpath-id="0" data-magicpath-path="PurchaseScreen.tsx">
      {/* Header */}
      <header className="border-b border-gray-900 px-6 py-4" data-magicpath-id="1" data-magicpath-path="PurchaseScreen.tsx">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="PurchaseScreen.tsx">
          <button onClick={onBack} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="3" data-magicpath-path="PurchaseScreen.tsx">
            <ArrowLeft className="w-6 h-6" data-magicpath-id="4" data-magicpath-path="PurchaseScreen.tsx" />
          </button>

          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2" data-magicpath-id="5" data-magicpath-path="PurchaseScreen.tsx">Complete Purchase</h1>

          <div className="w-12" data-magicpath-id="6" data-magicpath-path="PurchaseScreen.tsx" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-6 py-8" data-magicpath-id="7" data-magicpath-path="PurchaseScreen.tsx">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-magicpath-id="8" data-magicpath-path="PurchaseScreen.tsx">
          {/* Form Section */}
          <div className="lg:col-span-2" data-magicpath-id="9" data-magicpath-path="PurchaseScreen.tsx">
            <form onSubmit={handleSubmit} className="space-y-8" data-magicpath-id="10" data-magicpath-path="PurchaseScreen.tsx">
              {/* Personal Information */}
              <div className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="11" data-magicpath-path="PurchaseScreen.tsx">
                <h2 className="text-2xl font-bold mb-6" data-magicpath-id="12" data-magicpath-path="PurchaseScreen.tsx">Personal Information</h2>
                
                <div className="space-y-5" data-magicpath-id="13" data-magicpath-path="PurchaseScreen.tsx">
                  <div data-magicpath-id="14" data-magicpath-path="PurchaseScreen.tsx">
                    <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="15" data-magicpath-path="PurchaseScreen.tsx">
                      Full Name
                    </label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="John Doe" data-magicpath-id="16" data-magicpath-path="PurchaseScreen.tsx" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-magicpath-id="17" data-magicpath-path="PurchaseScreen.tsx">
                    <div data-magicpath-id="18" data-magicpath-path="PurchaseScreen.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="19" data-magicpath-path="PurchaseScreen.tsx">
                        Email Address
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="john@example.com" data-magicpath-id="20" data-magicpath-path="PurchaseScreen.tsx" />
                    </div>

                    <div data-magicpath-id="21" data-magicpath-path="PurchaseScreen.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="22" data-magicpath-path="PurchaseScreen.tsx">
                        Phone Number
                      </label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="+1 (555) 123-4567" data-magicpath-id="23" data-magicpath-path="PurchaseScreen.tsx" />
                    </div>
                  </div>

                  <div data-magicpath-id="24" data-magicpath-path="PurchaseScreen.tsx">
                    <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="25" data-magicpath-path="PurchaseScreen.tsx">
                      Address
                    </label>
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} required className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="123 Main Street" data-magicpath-id="26" data-magicpath-path="PurchaseScreen.tsx" />
                  </div>

                  <div className="grid grid-cols-3 gap-5" data-magicpath-id="27" data-magicpath-path="PurchaseScreen.tsx">
                    <div data-magicpath-id="28" data-magicpath-path="PurchaseScreen.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="29" data-magicpath-path="PurchaseScreen.tsx">
                        City
                      </label>
                      <input type="text" name="city" value={formData.city} onChange={handleInputChange} required className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="New York" data-magicpath-id="30" data-magicpath-path="PurchaseScreen.tsx" />
                    </div>

                    <div data-magicpath-id="31" data-magicpath-path="PurchaseScreen.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="32" data-magicpath-path="PurchaseScreen.tsx">
                        State
                      </label>
                      <input type="text" name="state" value={formData.state} onChange={handleInputChange} required className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="NY" data-magicpath-id="33" data-magicpath-path="PurchaseScreen.tsx" />
                    </div>

                    <div data-magicpath-id="34" data-magicpath-path="PurchaseScreen.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="35" data-magicpath-path="PurchaseScreen.tsx">
                        ZIP Code
                      </label>
                      <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="10001" data-magicpath-id="36" data-magicpath-path="PurchaseScreen.tsx" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="37" data-magicpath-path="PurchaseScreen.tsx">
                <div className="flex items-center gap-2 mb-6" data-magicpath-id="38" data-magicpath-path="PurchaseScreen.tsx">
                  <CreditCard className="w-6 h-6 text-[#4169E1]" data-magicpath-id="39" data-magicpath-path="PurchaseScreen.tsx" />
                  <h2 className="text-2xl font-bold" data-magicpath-id="40" data-magicpath-path="PurchaseScreen.tsx">Payment Information</h2>
                </div>
                
                <div className="space-y-5" data-magicpath-id="41" data-magicpath-path="PurchaseScreen.tsx">
                  <div data-magicpath-id="42" data-magicpath-path="PurchaseScreen.tsx">
                    <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="43" data-magicpath-path="PurchaseScreen.tsx">
                      Card Number
                    </label>
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required maxLength={19} className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="1234 5678 9012 3456" data-magicpath-id="44" data-magicpath-path="PurchaseScreen.tsx" />
                  </div>

                  <div className="grid grid-cols-3 gap-5" data-magicpath-id="45" data-magicpath-path="PurchaseScreen.tsx">
                    <div className="col-span-2" data-magicpath-id="46" data-magicpath-path="PurchaseScreen.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="47" data-magicpath-path="PurchaseScreen.tsx">
                        Expiry Date
                      </label>
                      <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} required maxLength={5} className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="MM/YY" data-magicpath-id="48" data-magicpath-path="PurchaseScreen.tsx" />
                    </div>

                    <div data-magicpath-id="49" data-magicpath-path="PurchaseScreen.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="50" data-magicpath-path="PurchaseScreen.tsx">
                        CVV
                      </label>
                      <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} required maxLength={4} className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="123" data-magicpath-id="51" data-magicpath-path="PurchaseScreen.tsx" />
                    </div>
                  </div>

                  <div data-magicpath-id="52" data-magicpath-path="PurchaseScreen.tsx">
                    <label className="block text-sm font-medium text-gray-300 mb-2" data-magicpath-id="53" data-magicpath-path="PurchaseScreen.tsx">
                      Name on Card
                    </label>
                    <input type="text" name="nameOnCard" value={formData.nameOnCard} onChange={handleInputChange} required className="w-full bg-[#1a2942] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" placeholder="John Doe" data-magicpath-id="54" data-magicpath-path="PurchaseScreen.tsx" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6 text-sm text-gray-400" data-magicpath-id="55" data-magicpath-path="PurchaseScreen.tsx">
                  <Lock className="w-4 h-4" data-magicpath-id="56" data-magicpath-path="PurchaseScreen.tsx" />
                  <span data-magicpath-id="57" data-magicpath-path="PurchaseScreen.tsx">Your payment information is secure and encrypted</span>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-4 rounded-2xl font-bold text-lg transition-colors" data-magicpath-id="58" data-magicpath-path="PurchaseScreen.tsx">
                Complete Purchase
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1" data-magicpath-id="59" data-magicpath-path="PurchaseScreen.tsx">
            <div className="bg-[#0B1A33] rounded-3xl p-8 sticky top-8" data-magicpath-id="60" data-magicpath-path="PurchaseScreen.tsx">
              <h2 className="text-2xl font-bold mb-6" data-magicpath-id="61" data-magicpath-path="PurchaseScreen.tsx">Order Summary</h2>
              
              <div className="mb-6" data-magicpath-id="62" data-magicpath-path="PurchaseScreen.tsx">
                <img src={business.image} alt={business.title} className="w-full h-48 object-cover rounded-2xl mb-4" data-magicpath-id="63" data-magicpath-path="PurchaseScreen.tsx" />
                
                <div className="text-[#4169E1] text-xs font-bold mb-2 uppercase tracking-wide" data-magicpath-id="64" data-magicpath-path="PurchaseScreen.tsx">
                  {business.category}
                </div>
                
                <h3 className="text-xl font-bold mb-4" data-magicpath-id="65" data-magicpath-path="PurchaseScreen.tsx">{business.title}</h3>
              </div>

              <div className="border-t border-gray-700 pt-6 space-y-4" data-magicpath-id="66" data-magicpath-path="PurchaseScreen.tsx">
                <div className="flex justify-between items-center" data-magicpath-id="67" data-magicpath-path="PurchaseScreen.tsx">
                  <span className="text-gray-400" data-magicpath-id="68" data-magicpath-path="PurchaseScreen.tsx">Business Price</span>
                  <span className="text-white font-semibold" data-magicpath-id="69" data-magicpath-path="PurchaseScreen.tsx">{business.price}</span>
                </div>

                <div className="flex justify-between items-center" data-magicpath-id="70" data-magicpath-path="PurchaseScreen.tsx">
                  <span className="text-gray-400" data-magicpath-id="71" data-magicpath-path="PurchaseScreen.tsx">Processing Fee</span>
                  <span className="text-white font-semibold" data-magicpath-id="72" data-magicpath-path="PurchaseScreen.tsx">$2,500</span>
                </div>

                <div className="border-t border-gray-700 pt-4 flex justify-between items-center" data-magicpath-id="73" data-magicpath-path="PurchaseScreen.tsx">
                  <span className="text-xl font-bold" data-magicpath-id="74" data-magicpath-path="PurchaseScreen.tsx">Total</span>
                  <span className="text-2xl font-bold text-[#4169E1]" data-magicpath-id="75" data-magicpath-path="PurchaseScreen.tsx">
                    ${(parseInt(business.price.replace(/[$,]/g, '')) + 2500).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};