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
      <SortableContainer dndKitId="ea00edc3-faec-42e0-8178-87bcff49bedc" containerType="regular" prevTag="div" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto" data-magicpath-id="0" data-magicpath-path="SellSoftwareForm.tsx">
        <SortableContainer dndKitId="364ebf30-241c-4e6a-86e0-3794527b6373" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-2xl w-full max-w-3xl border border-gray-800 my-8" data-magicpath-id="1" data-magicpath-path="SellSoftwareForm.tsx">
          {/* Header */}
          <SortableContainer dndKitId="6bbd9a9d-a3e0-4f41-9726-62c68b5f51f1" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="SellSoftwareForm.tsx">
            <SortableContainer dndKitId="86628e36-420c-4d74-8c52-bce26ee55c6e" containerType="regular" prevTag="div" data-magicpath-id="3" data-magicpath-path="SellSoftwareForm.tsx">
              <h2 className="text-2xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="SellSoftwareForm.tsx">Sell Your Business</h2>
              <p className="text-gray-400 text-sm mt-1" data-magicpath-id="5" data-magicpath-path="SellSoftwareForm.tsx">Provide details about your business listing</p>
            </SortableContainer>
            <SortableContainer dndKitId="abfbd50d-bb6f-4db5-9194-eeb6f34b779d" containerType="regular" prevTag="button" onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="6" data-magicpath-path="SellSoftwareForm.tsx">
              <X className="w-5 h-5 text-white" data-magicpath-id="7" data-magicpath-path="SellSoftwareForm.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Form */}
          <SortableContainer dndKitId="2ce7fc74-df4a-4a19-8c6d-ba5b059701b9" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="px-6 py-6" data-magicpath-id="8" data-magicpath-path="SellSoftwareForm.tsx">
            <SortableContainer dndKitId="6357a294-d0ea-4076-b1e6-37d4ac993590" containerType="regular" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 gap-5" data-magicpath-id="9" data-magicpath-path="SellSoftwareForm.tsx">
              {/* Business Name */}
              <SortableContainer dndKitId="885ec511-ec3f-458b-b64f-aef8631edb22" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="10" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="11" data-magicpath-path="SellSoftwareForm.tsx">
                  Business Name <span className="text-red-500" data-magicpath-id="12" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="a934de6c-058e-46e1-a895-dad24aaa06af" containerType="regular" prevTag="div" className="relative" data-magicpath-id="13" data-magicpath-path="SellSoftwareForm.tsx">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="14" data-magicpath-path="SellSoftwareForm.tsx" />
                  <input type="text" value={formData.businessName} onChange={e => handleChange('businessName', e.target.value)} placeholder="Enter business name" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="15" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Category */}
              <SortableContainer dndKitId="defef1a0-42ef-4031-800d-7832fa731396" containerType="regular" prevTag="div" data-magicpath-id="16" data-magicpath-path="SellSoftwareForm.tsx">
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
              <SortableContainer dndKitId="82d846e4-1f6a-4853-aef0-bd8e976d80e3" containerType="regular" prevTag="div" data-magicpath-id="27" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="28" data-magicpath-path="SellSoftwareForm.tsx">
                  Location <span className="text-red-500" data-magicpath-id="29" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <input type="text" value={formData.location} onChange={e => handleChange('location', e.target.value)} placeholder="City, State" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="30" data-magicpath-path="SellSoftwareForm.tsx" />
              </SortableContainer>

              {/* Annual Revenue */}
              <SortableContainer dndKitId="94e7f3ea-8135-4309-af2b-13548b20c6e2" containerType="regular" prevTag="div" data-magicpath-id="31" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="32" data-magicpath-path="SellSoftwareForm.tsx">
                  Annual Revenue <span className="text-red-500" data-magicpath-id="33" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="4a40268f-66f4-4988-ae82-74ec4b8d9176" containerType="regular" prevTag="div" className="relative" data-magicpath-id="34" data-magicpath-path="SellSoftwareForm.tsx">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="35" data-magicpath-path="SellSoftwareForm.tsx" />
                  <input type="text" value={formData.revenue} onChange={e => handleChange('revenue', e.target.value)} placeholder="e.g., $500K/year" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="36" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Asking Price */}
              <SortableContainer dndKitId="5456cabf-e03a-4e36-8e17-57d7ba02b81f" containerType="regular" prevTag="div" data-magicpath-id="37" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="38" data-magicpath-path="SellSoftwareForm.tsx">
                  Asking Price <span className="text-red-500" data-magicpath-id="39" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="76ebddfe-36ca-4c68-9e23-e7407db445fd" containerType="regular" prevTag="div" className="relative" data-magicpath-id="40" data-magicpath-path="SellSoftwareForm.tsx">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="41" data-magicpath-path="SellSoftwareForm.tsx" />
                  <input type="text" value={formData.price} onChange={e => handleChange('price', e.target.value)} placeholder="e.g., $250,000" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="42" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Email */}
              <SortableContainer dndKitId="5e8b107d-96ec-4ad7-b1bf-8edf2689d10b" containerType="regular" prevTag="div" data-magicpath-id="43" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="44" data-magicpath-path="SellSoftwareForm.tsx">
                  Email <span className="text-red-500" data-magicpath-id="45" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="db6d9121-6d35-4361-8596-63b733dc63e1" containerType="regular" prevTag="div" className="relative" data-magicpath-id="46" data-magicpath-path="SellSoftwareForm.tsx">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="47" data-magicpath-path="SellSoftwareForm.tsx" />
                  <input type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} placeholder="your@email.com" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="48" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Phone */}
              <SortableContainer dndKitId="054a97e5-771d-4fb3-bb85-f12353b1733c" containerType="regular" prevTag="div" data-magicpath-id="49" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="50" data-magicpath-path="SellSoftwareForm.tsx">
                  Phone Number <span className="text-red-500" data-magicpath-id="51" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="26a744cb-236a-4404-b626-71d7605fe740" containerType="regular" prevTag="div" className="relative" data-magicpath-id="52" data-magicpath-path="SellSoftwareForm.tsx">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="53" data-magicpath-path="SellSoftwareForm.tsx" />
                  <input type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} placeholder="+1 (555) 123-4567" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required data-magicpath-id="54" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Description */}
              <SortableContainer dndKitId="065dfaf2-7e36-48b8-80a0-dd481a36f07e" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="55" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="56" data-magicpath-path="SellSoftwareForm.tsx">
                  Business Description <span className="text-red-500" data-magicpath-id="57" data-magicpath-path="SellSoftwareForm.tsx">*</span>
                </label>
                <SortableContainer dndKitId="cf014444-356e-43fd-806e-3854f7cba31c" containerType="regular" prevTag="div" className="relative" data-magicpath-id="58" data-magicpath-path="SellSoftwareForm.tsx">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" data-magicpath-id="59" data-magicpath-path="SellSoftwareForm.tsx" />
                  <textarea value={formData.description} onChange={e => handleChange('description', e.target.value)} placeholder="Provide detailed information about your business, including customer base, assets, and unique selling points" rows={4} className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors resize-none" required data-magicpath-id="60" data-magicpath-path="SellSoftwareForm.tsx" />
                </SortableContainer>
              </SortableContainer>

              {/* Additional Information */}
              <SortableContainer dndKitId="6e00aefe-c666-41ea-94d3-243b85af1805" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="61" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="62" data-magicpath-path="SellSoftwareForm.tsx">
                  Additional Information
                </label>
                <textarea value={formData.additionalInfo} onChange={e => handleChange('additionalInfo', e.target.value)} placeholder="Any other details you'd like to share" rows={3} className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors resize-none" data-magicpath-id="63" data-magicpath-path="SellSoftwareForm.tsx" />
              </SortableContainer>

              {/* Upload Documents */}
              <SortableContainer dndKitId="47e20aac-c95d-4c3d-abc0-fc5812ec6a3a" containerType="regular" prevTag="div" className="md:col-span-2" data-magicpath-id="64" data-magicpath-path="SellSoftwareForm.tsx">
                <label className="block text-white text-sm font-semibold mb-2" data-magicpath-id="65" data-magicpath-path="SellSoftwareForm.tsx">
                  Upload Documents
                </label>
                <SortableContainer dndKitId="ab2e0c33-f740-4fb5-9f54-4e8d2c04b86b" containerType="regular" prevTag="div" className="border-2 border-dashed border-gray-700 rounded-xl px-6 py-8 text-center hover:border-[#4169E1] transition-colors cursor-pointer" data-magicpath-id="66" data-magicpath-path="SellSoftwareForm.tsx">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" data-magicpath-id="67" data-magicpath-path="SellSoftwareForm.tsx" />
                  <p className="text-gray-300 mb-1" data-magicpath-id="68" data-magicpath-path="SellSoftwareForm.tsx">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm" data-magicpath-id="69" data-magicpath-path="SellSoftwareForm.tsx">Financial statements, photos, contracts (Max 10MB)</p>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>

            {/* Submit Button */}
            <SortableContainer dndKitId="37fc456c-1b6a-4f11-a4f7-cf33d545c22e" containerType="regular" prevTag="div" className="flex gap-4 mt-6" data-magicpath-id="70" data-magicpath-path="SellSoftwareForm.tsx">
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