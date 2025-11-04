import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';
type LoginScreenProps = {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
};

// @component: LoginScreen
export const LoginScreen = ({
  isOpen,
  onClose,
  onSwitchToSignup
}: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (!isOpen) return null;
  return <SortableContainer dndKitId="436c33fc-a194-432c-aa40-d9ab62482e40" containerType="regular" prevTag="div" className="fixed inset-0 bg-black z-50 flex items-center justify-center" data-magicpath-id="0" data-magicpath-path="LoginScreen.tsx">
      {/* Close Button */}
      <SortableContainer dndKitId="c7a94dab-0f65-4698-b700-c5224f0267d9" containerType="regular" prevTag="button" onClick={onClose} className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors z-10" data-magicpath-id="1" data-magicpath-path="LoginScreen.tsx">
        <X className="w-6 h-6 text-white" data-magicpath-id="2" data-magicpath-path="LoginScreen.tsx" />
      </SortableContainer>

      {/* Content */}
      <SortableContainer dndKitId="2b94f7ed-f5f6-430d-858f-1f5e547353c2" containerType="regular" prevTag="div" className="w-full max-w-[600px] px-6" data-magicpath-id="3" data-magicpath-path="LoginScreen.tsx">
        {/* Header */}
        <SortableContainer dndKitId="146ad3cb-c9b4-463f-a9ba-0c6a5d10a4bb" containerType="regular" prevTag="div" className="bg-[#1E3A8A] rounded-t-3xl px-12 py-12" data-magicpath-id="4" data-magicpath-path="LoginScreen.tsx">
          <h1 className="text-5xl font-bold text-white mb-4" data-magicpath-id="5" data-magicpath-path="LoginScreen.tsx">Welcome Back</h1>
          <p className="text-xl text-blue-100" data-magicpath-id="6" data-magicpath-path="LoginScreen.tsx">Sign in to continue your investment journey</p>
        </SortableContainer>

        {/* Form */}
        <SortableContainer dndKitId="4a924f1a-5331-4020-bc7e-57ac1cb6ec76" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-b-3xl px-12 py-12" data-magicpath-id="7" data-magicpath-path="LoginScreen.tsx">
          <SortableContainer dndKitId="e5bb5ea4-2270-471f-ba72-bec796185bf8" containerType="regular" prevTag="form" className="space-y-8" data-magicpath-id="8" data-magicpath-path="LoginScreen.tsx">
            {/* Email Field */}
            <SortableContainer dndKitId="462cb87e-81ec-4b82-bc66-6a3494228145" containerType="regular" prevTag="div" data-magicpath-id="9" data-magicpath-path="LoginScreen.tsx">
              <label className="block text-white text-lg font-semibold mb-3" data-magicpath-id="10" data-magicpath-path="LoginScreen.tsx">
                Email <span className="text-red-500" data-magicpath-id="11" data-magicpath-path="LoginScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="e3e4e4a8-232a-49cb-92c5-6de5eeb668f8" containerType="regular" prevTag="div" className="relative" data-magicpath-id="12" data-magicpath-path="LoginScreen.tsx">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" data-magicpath-id="13" data-magicpath-path="LoginScreen.tsx" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-14 pr-5 py-5 text-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="14" data-magicpath-path="LoginScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Password Field */}
            <SortableContainer dndKitId="d0862842-fb1d-4475-acf1-110bd9aaa780" containerType="regular" prevTag="div" data-magicpath-id="15" data-magicpath-path="LoginScreen.tsx">
              <label className="block text-white text-lg font-semibold mb-3" data-magicpath-id="16" data-magicpath-path="LoginScreen.tsx">
                Password <span className="text-red-500" data-magicpath-id="17" data-magicpath-path="LoginScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="6ec7938f-967a-4fa8-82fc-7241f8a1940d" containerType="regular" prevTag="div" className="relative" data-magicpath-id="18" data-magicpath-path="LoginScreen.tsx">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" data-magicpath-id="19" data-magicpath-path="LoginScreen.tsx" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-14 pr-5 py-5 text-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="20" data-magicpath-path="LoginScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Forgot Password */}
            <SortableContainer dndKitId="34bcebe3-cc85-4790-ad3a-1c0a8364e492" containerType="regular" prevTag="div" className="text-right" data-magicpath-id="21" data-magicpath-path="LoginScreen.tsx">
              <button type="button" className="text-[#4169E1] hover:text-[#3557C1] text-lg font-medium transition-colors" data-magicpath-id="22" data-magicpath-path="LoginScreen.tsx">
                Forgot password?
              </button>
            </SortableContainer>

            {/* Sign In Button */}
            <button type="submit" className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-xl font-bold py-5 rounded-xl transition-colors" data-magicpath-id="23" data-magicpath-path="LoginScreen.tsx">
              Sign In
            </button>

            {/* Sign Up Link */}
            <SortableContainer dndKitId="e18f1512-9a80-4e4b-b0b7-55e50de53b63" containerType="regular" prevTag="div" className="text-center pt-4" data-magicpath-id="24" data-magicpath-path="LoginScreen.tsx">
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