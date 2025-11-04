import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { X, User, Mail, Phone, Lock, Upload } from 'lucide-react';
type SignupScreenProps = {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
};

// @component: SignupScreen
export const SignupScreen = ({
  isOpen,
  onClose,
  onSwitchToLogin
}: SignupScreenProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  if (!isOpen) return null;
  return <SortableContainer dndKitId="ffa92986-7fb9-4fa2-ac5e-d33dba6eacae" containerType="regular" prevTag="div" className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-y-auto" data-magicpath-id="0" data-magicpath-path="SignupScreen.tsx">
      {/* Close Button */}
      <SortableContainer dndKitId="8b39befa-cd6f-4242-b5c7-a7d44d812702" containerType="regular" prevTag="button" onClick={onClose} className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors z-10" data-magicpath-id="1" data-magicpath-path="SignupScreen.tsx">
        <X className="w-6 h-6 text-white" data-magicpath-id="2" data-magicpath-path="SignupScreen.tsx" />
      </SortableContainer>

      {/* Content */}
      <SortableContainer dndKitId="46e126bd-d9ad-44fa-9163-a7197c994a97" containerType="regular" prevTag="div" className="w-full max-w-[680px] px-6 py-12" data-magicpath-id="3" data-magicpath-path="SignupScreen.tsx">
        {/* Header */}
        <SortableContainer dndKitId="9a37dbcc-3290-4319-9806-ec9be40e437e" containerType="regular" prevTag="div" className="bg-[#1E3A8A] rounded-t-3xl px-12 py-10" data-magicpath-id="4" data-magicpath-path="SignupScreen.tsx">
          <h1 className="text-5xl font-bold text-white mb-3" data-magicpath-id="5" data-magicpath-path="SignupScreen.tsx">Create Account</h1>
          <p className="text-xl text-blue-100" data-magicpath-id="6" data-magicpath-path="SignupScreen.tsx">Join us to find your next investment</p>
        </SortableContainer>

        {/* Form */}
        <SortableContainer dndKitId="e17ad186-4ec8-474a-afc0-89c99b41625e" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-b-3xl px-12 py-10" data-magicpath-id="7" data-magicpath-path="SignupScreen.tsx">
          <SortableContainer dndKitId="99ab66f4-426f-49ce-b265-3e3137375942" containerType="regular" prevTag="form" className="space-y-6" data-magicpath-id="8" data-magicpath-path="SignupScreen.tsx">
            {/* Profile Picture */}
            <SortableContainer dndKitId="6a571fb8-763e-4959-9d38-6d6f47020b30" containerType="regular" prevTag="div" className="flex flex-col items-center mb-6" data-magicpath-id="9" data-magicpath-path="SignupScreen.tsx">
              <SortableContainer dndKitId="6b74090f-d996-443a-8508-3831da7389e4" containerType="regular" prevTag="div" className="relative" data-magicpath-id="10" data-magicpath-path="SignupScreen.tsx">
                <SortableContainer dndKitId="028b8c5c-e147-4768-b7f3-f2d0828c4d33" containerType="regular" prevTag="div" className="w-32 h-32 bg-[#1E3A8A] rounded-full flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="SignupScreen.tsx">
                  <User className="w-16 h-16 text-white" data-magicpath-id="12" data-magicpath-path="SignupScreen.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="a1fb97d2-4d02-4135-9d57-356db8b527f6" containerType="regular" prevTag="button" type="button" className="absolute bottom-0 right-0 w-11 h-11 bg-[#1E3A8A] rounded-full flex items-center justify-center border-4 border-[#0a0f1a] hover:bg-[#1E40AF] transition-colors" data-magicpath-id="13" data-magicpath-path="SignupScreen.tsx">
                  <Upload className="w-5 h-5 text-white" data-magicpath-id="14" data-magicpath-path="SignupScreen.tsx" />
                </SortableContainer>
              </SortableContainer>
              <p className="text-gray-400 mt-4 text-base" data-magicpath-id="15" data-magicpath-path="SignupScreen.tsx">Upload profile picture</p>
            </SortableContainer>

            {/* First Name */}
            <SortableContainer dndKitId="db2f6771-7675-451a-8593-9de499adf21e" containerType="regular" prevTag="div" data-magicpath-id="16" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="17" data-magicpath-path="SignupScreen.tsx">
                First Name <span className="text-red-500" data-magicpath-id="18" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="476589df-f6cc-4984-bb2c-f6523bee903d" containerType="regular" prevTag="div" className="relative" data-magicpath-id="19" data-magicpath-path="SignupScreen.tsx">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="20" data-magicpath-path="SignupScreen.tsx" />
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="John" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="21" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Last Name */}
            <SortableContainer dndKitId="b4005c61-68be-4209-995c-3929e18798e4" containerType="regular" prevTag="div" data-magicpath-id="22" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="23" data-magicpath-path="SignupScreen.tsx">
                Last Name <span className="text-red-500" data-magicpath-id="24" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="cb05c175-4443-4371-b9b6-b337849e16f2" containerType="regular" prevTag="div" className="relative" data-magicpath-id="25" data-magicpath-path="SignupScreen.tsx">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="26" data-magicpath-path="SignupScreen.tsx" />
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Doe" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="27" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Email */}
            <SortableContainer dndKitId="18aea32b-1f6a-43ac-bd8e-3d6036d3ea79" containerType="regular" prevTag="div" data-magicpath-id="28" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="29" data-magicpath-path="SignupScreen.tsx">
                Email <span className="text-red-500" data-magicpath-id="30" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="06ba20b5-aa4d-4c93-b0f4-eb4a4d0c0995" containerType="regular" prevTag="div" className="relative" data-magicpath-id="31" data-magicpath-path="SignupScreen.tsx">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="32" data-magicpath-path="SignupScreen.tsx" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="33" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Phone Number */}
            <SortableContainer dndKitId="bdc74c3b-1880-4300-b647-5cef7a007d6f" containerType="regular" prevTag="div" data-magicpath-id="34" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="35" data-magicpath-path="SignupScreen.tsx">
                Phone Number <span className="text-red-500" data-magicpath-id="36" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="afbb989d-f3b7-47b8-a39f-376e3aeb36d3" containerType="regular" prevTag="div" className="relative" data-magicpath-id="37" data-magicpath-path="SignupScreen.tsx">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="38" data-magicpath-path="SignupScreen.tsx" />
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 123-4567" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="39" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Password */}
            <SortableContainer dndKitId="c3b29b20-2a70-4306-9818-1fa9addcef64" containerType="regular" prevTag="div" data-magicpath-id="40" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="41" data-magicpath-path="SignupScreen.tsx">
                Password <span className="text-red-500" data-magicpath-id="42" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="98f18359-fe3e-4a97-a31b-b83fc8b4973b" containerType="regular" prevTag="div" className="relative" data-magicpath-id="43" data-magicpath-path="SignupScreen.tsx">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="44" data-magicpath-path="SignupScreen.tsx" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="45" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Retype Password */}
            <SortableContainer dndKitId="d3172cb2-a70a-4956-a00a-9d9f13edaa41" containerType="regular" prevTag="div" data-magicpath-id="46" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="47" data-magicpath-path="SignupScreen.tsx">
                Retype Password <span className="text-red-500" data-magicpath-id="48" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="9a427fd9-43d1-45d2-b840-ce88eae3b088" containerType="regular" prevTag="div" className="relative" data-magicpath-id="49" data-magicpath-path="SignupScreen.tsx">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="50" data-magicpath-path="SignupScreen.tsx" />
                <input type="password" value={retypePassword} onChange={e => setRetypePassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="51" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Create Account Button */}
            <button type="submit" className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-xl font-bold py-5 rounded-xl transition-colors mt-8" data-magicpath-id="52" data-magicpath-path="SignupScreen.tsx">
              Create Account
            </button>

            {/* Login Link */}
            <SortableContainer dndKitId="30ca530b-b9d8-4739-9213-86073aeb6f5a" containerType="regular" prevTag="div" className="text-center pt-4" data-magicpath-id="53" data-magicpath-path="SignupScreen.tsx">
              <span className="text-gray-400 text-base" data-magicpath-id="54" data-magicpath-path="SignupScreen.tsx">Already have an account? </span>
              <button type="button" onClick={onSwitchToLogin} className="text-[#4169E1] hover:text-[#3557C1] text-base font-semibold transition-colors" data-magicpath-id="55" data-magicpath-path="SignupScreen.tsx">
                Sign in
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};