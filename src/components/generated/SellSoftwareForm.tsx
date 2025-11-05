"use client";

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
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-[#0a0f1a] rounded-2xl w-full max-w-3xl border border-gray-800 my-8">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
            <div>
              <h2 className="text-2xl font-bold text-white">Sell Your Business</h2>
              <p className="text-gray-400 text-sm mt-1">Provide details about your business listing</p>
            </div>
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Business Name */}
              <div className="md:col-span-2">
                <label className="block text-white text-sm font-semibold mb-2">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" value={formData.businessName} onChange={e => handleChange('businessName', e.target.value)} placeholder="Enter business name" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select value={formData.category} onChange={e => handleChange('category', e.target.value)} className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#4169E1] transition-colors" required>
                  <option value="">Select category</option>
                  <option value="RESTAURANT">Restaurant</option>
                  <option value="COFFEE & TEA">Coffee & Tea</option>
                  <option value="RETAIL">Retail</option>
                  <option value="TECHNOLOGY">Technology</option>
                  <option value="FITNESS">Fitness</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <input type="text" value={formData.location} onChange={e => handleChange('location', e.target.value)} placeholder="City, State" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required />
              </div>

              {/* Annual Revenue */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Annual Revenue <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" value={formData.revenue} onChange={e => handleChange('revenue', e.target.value)} placeholder="e.g., $500K/year" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required />
                </div>
              </div>

              {/* Asking Price */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Asking Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" value={formData.price} onChange={e => handleChange('price', e.target.value)} placeholder="e.g., $250,000" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} placeholder="your@email.com" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} placeholder="+1 (555) 123-4567" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" required />
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-white text-sm font-semibold mb-2">
                  Business Description <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea value={formData.description} onChange={e => handleChange('description', e.target.value)} placeholder="Provide detailed information about your business, including customer base, assets, and unique selling points" rows={4} className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors resize-none" required />
                </div>
              </div>

              {/* Additional Information */}
              <div className="md:col-span-2">
                <label className="block text-white text-sm font-semibold mb-2">
                  Additional Information
                </label>
                <textarea value={formData.additionalInfo} onChange={e => handleChange('additionalInfo', e.target.value)} placeholder="Any other details you'd like to share" rows={3} className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors resize-none" />
              </div>

              {/* Upload Documents */}
              <div className="md:col-span-2">
                <label className="block text-white text-sm font-semibold mb-2">
                  Upload Documents
                </label>
                <div className="border-2 border-dashed border-gray-700 rounded-xl px-6 py-8 text-center hover:border-[#4169E1] transition-colors cursor-pointer">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-300 mb-1">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm">Financial statements, photos, contracts (Max 10MB)</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 mt-6">
              <button type="button" onClick={onClose} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3.5 rounded-xl font-semibold transition-colors">
                Cancel
              </button>
              <button type="submit" className="flex-1 bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-xl font-semibold transition-colors">
                Submit Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </>;
};