"use client";

import React, { useState, useRef } from 'react';
import { X, User, Mail, Phone, Lock, Upload } from 'lucide-react';
type SignupScreenProps = {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
  onSignupSuccess: (userData: {
    firstName: string;
    profilePicture: string | null;
  }) => void;
};

// @component: SignupScreen
export const SignupScreen = ({
  isOpen,
  onClose,
  onSwitchToLogin,
  onSignupSuccess
}: SignupScreenProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleProfilePictureClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== retypePassword) {
      alert("Passwords don't match!");
      return;
    }
    onSignupSuccess({
      firstName,
      profilePicture
    });
    onClose();
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-y-auto">
      {/* Close Button */}
      <button onClick={onClose} className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors z-10">
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Content - Added pt-8 for top padding */}
      <div className="w-full max-w-[680px] px-6 py-16 my-8">
        {/* Header - Moved "Create Account" inside visible area */}
        <div className="bg-[#1E3A8A] rounded-t-3xl px-12 py-10">
          <h1 className="text-5xl font-bold text-white mb-3">Create Account</h1>
          <p className="text-xl text-blue-100">Join us to find your next investment</p>
        </div>

        {/* Form */}
        <div className="bg-[#0a0f1a] rounded-b-3xl px-12 py-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 bg-[#1E3A8A] rounded-full flex items-center justify-center overflow-hidden">
                  {profilePicture ? <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" /> : <User className="w-16 h-16 text-white" />}
                </div>
                <button type="button" onClick={handleProfilePictureClick} className="absolute bottom-0 right-0 w-11 h-11 bg-[#1E3A8A] rounded-full flex items-center justify-center border-4 border-[#0a0f1a] hover:bg-[#1E40AF] transition-colors">
                  <Upload className="w-5 h-5 text-white" />
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </div>
              <p className="text-gray-400 mt-4 text-base">Upload profile picture</p>
            </div>

            {/* First Name */}
            <div>
              <label className="block text-white text-base font-semibold mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="John" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-white text-base font-semibold mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Doe" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white text-base font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-white text-base font-semibold mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 123-4567" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white text-base font-semibold mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
            </div>

            {/* Retype Password */}
            <div>
              <label className="block text-white text-base font-semibold mb-2">
                Retype Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="password" value={retypePassword} onChange={e => setRetypePassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
            </div>

            {/* Create Account Button */}
            <button type="submit" className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-xl font-bold py-5 rounded-xl transition-colors mt-8">
              Create Account
            </button>

            {/* Login Link */}
            <div className="text-center pt-4">
              <span className="text-gray-400 text-base">Already have an account? </span>
              <button type="button" onClick={onSwitchToLogin} className="text-[#4169E1] hover:text-[#3557C1] text-base font-semibold transition-colors">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};