"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { X, Building2, Mail, Phone, DollarSign, FileText, Upload } from 'lucide-react';
type SellSoftwareFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

// @component: SellSoftwareForm
export const SellSoftwareForm = ({
  isOpen,
  onClose
}: SellSoftwareFormProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    description: '',
    category: '',
    location: '',
    revenue: '',
    price: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Listing submitted successfully!');
    onClose();
  };
  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  if (!isOpen) return null;
  return <>
      <SortableContainer dndKitId="8fa43a17-ed8d-4fbf-ae97-ebb13e1d9ee9" containerType="regular" prevTag="div" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto" data-magicpath-id="0" data-magicpath-path="SellSoftwareForm.tsx">
        <SortableContainer dndKitId="1455fe6d-cf23-4352-8e9f-b030e9a6a277" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-2xl w-full max-w-3xl border border-gray-800 my-8" data-magicpath-id="1" data-magicpath-path="SellSoftwareForm.tsx">
          {/* Header */}
          <SortableContainer dndKitId="5380744a-081f-461d-9699-76b2c26c2a2c" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="SellSoftwareForm.tsx">
            <SortableContainer dndKitId="b2a07283-9caa-473c-a932-386e464a68f2" containerType="regular" prevTag="div" data-magicpath-id="3" data-magicpath-path="SellSoftwareForm.tsx">
              <h2 className="text-2xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="SellSoftwareForm.tsx">Sell Your Business</h2>
              <p className="text-gray-400 text-sm mt-1" data-magicpath-id="5" data-magicpath-path="SellSoftwareForm.tsx">Provide details about your business listing</p>
            </SortableContainer>
            <SortableContainer dndKitId="7f6a5c4c-5871-4550-939c-4a6ca1ed2371" containerType="regular" prevTag="button" onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="6" data-magicpath-path="SellSoftwareForm.tsx">
              <X className="w-5 h-5 text-white" data-magicpath-id="7" data-magicpath-path="SellSoftwareForm.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Form */}
          <SortableContainer dndKitId="b055d283-5a17-4d25-92bc-7de21af5f0f5" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="px-6 py-6" data-magicpath-id="8" data-magicpath-path="SellSoftwareForm.tsx">
            <SortableContainer dndKitId="6dd2024d-22cb-42c9-93ad-5c38fb34e164" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-5" data-magicpath-id="9" data-magicpath-path="SellSoftwareForm.tsx">
              {/* Business Name */}
              <SortableContainer dndKitId="efaf8cfc-1bb3-46c8-8f89-3a4292cca3a9" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="10" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="11" data-magicpath-path="SellSoftwareForm.tsx">
                  Business Name <span className="text-red-500" data-magicpath-id="12" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="09f2fd4b-3ea6-49cc-832c-73b016713aa6" containerType="regular" prevTag="div" className="relative" data-magicpath-id="13" data-magicpath-path="SellSoftwareForm.tsx">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="14" data-magicpath-path="SellSoftwareForm.tsx" />
                  <input type="text" value={formData.businessName} onChange={e => handleChange('businessName', e.target.value)} placeholder="Enter business name" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="15" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Category */}
              <SortableContainer dndKitId="c41a45c9-5c52-4bb2-bbd7-bd05a0a4964f" containerType="regular" prevTag="div" data-magicpath-id="16" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="17" data-magicpath-path="SellSoftwareForm.tsx">
                  Category <span className="text-red-500" data-magicpath-id="18" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <select value={formData.category} onChange={e => handleChange('category', e.target.value)} className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="19" data-magicpath-path="SellSoftwareForm.tsx">
                  <option value="" data-magicpath-id="20" data-magicpath-path="SellSoftwareForm.tsx">Select category</option>
                  <option value="RESTAURANT" data-magicpath-id="21" data-magicpath-path="SellSoftwareForm.tsx">Restaurant</option>
                  <option value="COFFEE & TEA" data-magicpath-id="22" data-magicpath-path="SellSoftwareForm.tsx">Coffee & Tea</option>
                  <option value="RETAIL" data-magicpath-id="23" data-magicpath-path="SellSoftwareForm.tsx">Retail</option>
                  <option value="TECHNOLOGY" data-magicpath-id="24" data-magicpath-path="SellSoftwareForm.tsx">Technology</option>
                  <option value="FITNESS" data-magicpath-id="25" data-magicpath-path="SellSoftwareForm.tsx">Fitness</option>
                  <option value="OTHER" data-magicpath-id="26" data-magicpath-path="SellSoftwareForm.tsx">Other</option>
                </select>
              </SortableContainer>

              {/* Location */}
              <SortableContainer dndKitId="f063b28f-456e-4a53-a45d-fbd4e03d4ff4" containerType="regular" prevTag="div" data-magicpath-id="27" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="28" data-magicpath-path="SellSoftwareForm.tsx">
                  Location <span className="text-red-500" data-magicpath-id="29" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <input type="text" value={formData.location} onChange={e => handleChange('location', e.target.value)} placeholder="City, State" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="30" data-magicpath-path="SellSoftwareForm.tsx" />
              </SortableContainer>

              {/* Annual Revenue */}
              <SortableContainer dndKitId="f0a03d03-3d9a-485a-aff7-55dbec2b03d3" containerType="regular" prevTag="div" data-magicpath-id="31" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="32" data-magicpath-path="SellSoftwareForm.tsx">
                  Annual Revenue <span className="text-red-500" data-magicpath-id="33" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="76062881-88ef-402c-99b2-7136ee2bda4a" containerType="regular" prevTag="div" className="relative" data-magicpath-id="34" data-magicpath-path="SellSoftwareForm.tsx">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="35" data-magicpath-path="SellSoftwareForm.tsx" />
                  <input type="text" value={formData.revenue} onChange={e => handleChange('revenue', e.target.value)} placeholder="e.g., $500K/year" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="36" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Asking Price */}
              <SortableContainer dndKitId="c789b0b5-1928-4bde-81d1-fb4536d9fd4e" containerType="regular" prevTag="div" data-magicpath-id="37" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="38" data-magicpath-path="SellSoftwareForm.tsx">
                  Asking Price <span className="text-red-500" data-magicpath-id="39" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="6d6f751c-d755-4da5-9836-c104bdbc09ce" containerType="regular" prevTag="div" className="relative" data-magicpath-id="40" data-magicpath-path="SellSoftwareForm.tsx">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="41" data-magicpath-path="SellSoftwareForm.tsx" />
                  <input type="text" value={formData.price} onChange={e => handleChange('price', e.target.value)} placeholder="e.g., $250,000" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="42" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Email */}
              <SortableContainer dndKitId="595c6aef-3bcb-427a-83b2-464059161664" containerType="regular" prevTag="div" data-magicpath-id="43" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="44" data-magicpath-path="SellSoftwareForm.tsx">
                  Email <span className="text-red-500" data-magicpath-id="45" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="6f19251c-9a3a-4a37-b2d9-1530d472ae7c" containerType="regular" prevTag="div" className="relative" data-magicpath-id="46" data-magicpath-path="SellSoftwareForm.tsx">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="47" data-magicpath-path="SellSoftwareForm.tsx" />
                  <input type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} placeholder="your@email.com" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="48" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Phone */}
              <SortableContainer dndKitId="c8a2e8b7-9493-4d15-a0e7-4c22a887682a" containerType="regular" prevTag="div" data-magicpath-id="49" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="50" data-magicpath-path="SellSoftwareForm.tsx">
                  Phone Number <span className="text-red-500" data-magicpath-id="51" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="3844f6ae-edc2-432b-85dc-90eb39cc6a25" containerType="regular" prevTag="div" className="relative" data-magicpath-id="52" data-magicpath-path="SellSoftwareForm.tsx">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="53" data-magicpath-path="SellSoftwareForm.tsx" />
                  <input type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} placeholder="+1 (555) 123-4567" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="54" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Description */}
              <SortableContainer dndKitId="b297521d-fc90-413d-bacd-4d08a51d93a1" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="55" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="56" data-magicpath-path="SellSoftwareForm.tsx">
                  Business Description <span className="text-red-500" data-magicpath-id="57" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="e1808d64-bf06-476a-8c08-cd4a8405f016" containerType="regular" prevTag="div" className="relative" data-magicpath-id="58" data-magicpath-path="SellSoftwareForm.tsx">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" data-magicpath-id="59" data-magicpath-path="SellSoftwareForm.tsx" />
                  <textarea value={formData.description} onChange={e => handleChange('description', e.target.value)} placeholder="Provide detailed information about your business, including customer base, assets, and unique selling points" rows={4} className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors resize-none" required data-magicpath-id="60" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Additional Information */}
              <SortableContainer dndKitId="f25f3cdf-3552-4b70-8e2f-a7a9e47e7b1f" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="61" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="62" data-magicpath-path="SellSoftwareForm.tsx">
                  Additional Information
                </label>
                <textarea value={formData.additionalInfo} onChange={e => handleChange('additionalInfo', e.target.value)} placeholder="Any other details you'd like to share" rows={3} className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors resize-none" data-magicpath-id="63" data-magicpath-path="SellSoftwareForm.tsx" />
              </SortableContainer>

              {/* Upload Documents */}
              <SortableContainer dndKitId="f1340670-d22b-4601-8990-1449c7f09e20" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="64" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="65" data-magicpath-path="SellSoftwareForm.tsx">
                  Upload Documents
                </label>
                <SortableContainer dndKitId="28ded077-7975-4084-9551-1f0ba3c32e5a" containerType="regular" prevTag="div" className="border-2 border-dashed border-gray-700 rounded-xl px-6 py-8 text-center hover:border-[#4169E1] transition-colors cursor-pointer" data-magicpath-id="66" data-magicpath-path="SellSoftwareForm.tsx">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" data-magicpath-id="67" data-magicpath-path="SellSoftwareForm.tsx" />
                  <p className="text-gray-300 mb-1" data-magicpath-id="68" data-magicpath-path="SellSoftwareForm.tsx">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm" data-magicpath-id="69" data-magicpath-path="SellSoftwareForm.tsx">Financial statements, photos, contracts (Max 10MB)</p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Submit Button */}
            <SortableContainer dndKitId="0b5e2711-6eda-4ede-9268-d85b71edc635" containerType="regular" prevTag="div" className="flex gap-4 mt-6" data-magicpath-id="70" data-magicpath-path="SellSoftwareForm.tsx">
              <button type="button" onClick={onClose} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3.5 rounded-xl font-semibold transition-colors" data-magicpath-id="71" data-magicpath-path="SellSoftwareForm.tsx">
                Cancel
              </button>
              <button type="submit" className="flex-1 bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-xl font-semibold transition-colors" data-magicpath-id="72" data-magicpath-path="SellSoftwareForm.tsx">
                Submit Listing
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </>;
};