"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';
type LoginScreenProps = {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
  onLoginSuccess: (userData: {
    firstName: string;
    profilePicture: string | null;
  }) => void;
};

// @component: LoginScreen
export const LoginScreen = ({
  isOpen,
  onClose,
  onSwitchToSignup,
  onLoginSuccess
}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login with mock data
    onLoginSuccess({
      firstName: "John",
      profilePicture: null
    });
    onClose();
  };
  if (!isOpen) return null;
  return <SortableContainer dndKitId="2df24bad-b059-44e0-a80c-1ac44b7484db" containerType="regular" prevTag="div" className="fixed inset-0 bg-black z-50 flex items-center justify-center" data-magicpath-id="0" data-magicpath-path="LoginScreen.tsx">
      {/* Close Button */}
      <SortableContainer dndKitId="951ebe70-c666-4414-8f6c-8a88fd98239e" containerType="regular" prevTag="button" onClick={onClose} className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors z-10" data-magicpath-id="1" data-magicpath-path="LoginScreen.tsx">
        <X className="w-6 h-6 text-white" data-magicpath-id="2" data-magicpath-path="LoginScreen.tsx" />
      </SortableContainer>

      {/* Content */}
      <SortableContainer dndKitId="fd29632b-2419-4e04-975d-cc73d044b8f6" containerType="regular" prevTag="div" className="w-full max-w-[600px] px-6" data-magicpath-id="3" data-magicpath-path="LoginScreen.tsx">
        {/* Header */}
        <SortableContainer dndKitId="67f2f144-4a6e-4fdb-b59a-c5d40c97cd2b" containerType="regular" prevTag="div" className="bg-[#1E3A8A] rounded-t-3xl px-12 py-12" data-magicpath-id="4" data-magicpath-path="LoginScreen.tsx">
          <h1 className="text-5xl font-bold text-white mb-4" data-magicpath-id="5" data-magicpath-path="LoginScreen.tsx">Welcome Back</h1>
          <p className="text-xl text-blue-100" data-magicpath-id="6" data-magicpath-path="LoginScreen.tsx">Sign in to continue your investment journey</p>
        </SortableContainer>

        {/* Form */}
        <SortableContainer dndKitId="9bad1717-1b64-4fd6-9247-0c5c5a69c8f8" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-b-3xl px-12 py-12" data-magicpath-id="7" data-magicpath-path="LoginScreen.tsx">
          <SortableContainer dndKitId="db28e0e9-d970-48c7-82db-870019ab1e72" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="space-y-8" data-magicpath-id="8" data-magicpath-path="LoginScreen.tsx">
            {/* Email Field */}
            <SortableContainer dndKitId="0e73e2ef-881c-4620-b15b-acbfc32ed62b" containerType="regular" prevTag="div" data-magicpath-id="9" data-magicpath-path="LoginScreen.tsx">
              <label className="block text-white text-lg font-semibold mb-3" data-magicpath-id="10" data-magicpath-path="LoginScreen.tsx">
                Email <span className="text-red-500" data-magicpath-id="11" data-magicpath-path="LoginScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="0fea3827-c264-4a3e-879b-07d9e157c2af" containerType="regular" prevTag="div" className="relative" data-magicpath-id="12" data-magicpath-path="LoginScreen.tsx">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" data-magicpath-id="13" data-magicpath-path="LoginScreen.tsx" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-14 pr-5 py-5 text-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="14" data-magicpath-path="LoginScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Password Field */}
            <SortableContainer dndKitId="72488d66-c14b-4b0d-bdce-d6b92dc560b7" containerType="regular" prevTag="div" data-magicpath-id="15" data-magicpath-path="LoginScreen.tsx">
              <label className="block text-white text-lg font-semibold mb-3" data-magicpath-id="16" data-magicpath-path="LoginScreen.tsx">
                Password <span className="text-red-500" data-magicpath-id="17" data-magicpath-path="LoginScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="c1f5ac4e-e70f-45df-ba4f-a640c32a6ad3" containerType="regular" prevTag="div" className="relative" data-magicpath-id="18" data-magicpath-path="LoginScreen.tsx">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" data-magicpath-id="19" data-magicpath-path="LoginScreen.tsx" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-14 pr-5 py-5 text-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="20" data-magicpath-path="LoginScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Forgot Password */}
            <SortableContainer dndKitId="f02de350-c562-465b-bb1f-46b6734b4af2" containerType="regular" prevTag="div" className="text-right" data-magicpath-id="21" data-magicpath-path="LoginScreen.tsx">
              <button type="button" className="text-[#4169E1] hover:text-[#3557C1] text-lg font-medium transition-colors" data-magicpath-id="22" data-magicpath-path="LoginScreen.tsx">
                Forgot password?
              </button>
            </SortableContainer>

            {/* Sign In Button */}
            <button type="submit" className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-xl font-bold py-5 rounded-xl transition-colors" data-magicpath-id="23" data-magicpath-path="LoginScreen.tsx">
              Sign In
            </button>

            {/* Sign Up Link */}
            <SortableContainer dndKitId="ae15fb0c-6064-4b16-9388-d143f63044ae" containerType="regular" prevTag="div" className="text-center pt-4" data-magicpath-id="24" data-magicpath-path="LoginScreen.tsx">
              <span className="text-gray-400 text-lg" data-magicpath-id="25" data-magicpath-path="LoginScreen.tsx">Don't have an account? </span>
              <button type="button" onClick={onSwitchToSignup} className="text-[#4169E1] hover:text-[#3557C1] text-lg font-semibold transition-colors" data-magicpath-id="26" data-magicpath-path="LoginScreen.tsx">
                Sign up
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};