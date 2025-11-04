"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
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
  return <SortableContainer dndKitId="785120a1-bae9-43ca-aa6c-62bdd33eff00" containerType="regular" prevTag="div" className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-y-auto" data-magicpath-id="0" data-magicpath-path="SignupScreen.tsx">
      {/* Close Button */}
      <SortableContainer dndKitId="043818a7-b459-488e-ad82-7385f86603e5" containerType="regular" prevTag="button" onClick={onClose} className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors z-10" data-magicpath-id="1" data-magicpath-path="SignupScreen.tsx">
        <X className="w-6 h-6 text-white" data-magicpath-id="2" data-magicpath-path="SignupScreen.tsx" />
      </SortableContainer>

      {/* Content - Added pt-8 for top padding */}
      <SortableContainer dndKitId="d48b73d8-30f0-4774-b3f0-2c7d5d4c89fa" containerType="regular" prevTag="div" className="w-full max-w-[680px] px-6 py-16 my-8" data-magicpath-id="3" data-magicpath-path="SignupScreen.tsx">
        {/* Header - Moved "Create Account" inside visible area */}
        <SortableContainer dndKitId="efb33e79-f42a-471c-8634-7ab7d9e12acf" containerType="regular" prevTag="div" className="bg-[#1E3A8A] rounded-t-3xl px-12 py-10" data-magicpath-id="4" data-magicpath-path="SignupScreen.tsx">
          <h1 className="text-5xl font-bold text-white mb-3" data-magicpath-id="5" data-magicpath-path="SignupScreen.tsx">Create Account</h1>
          <p className="text-xl text-blue-100" data-magicpath-id="6" data-magicpath-path="SignupScreen.tsx">Join us to find your next investment</p>
        </SortableContainer>

        {/* Form */}
        <SortableContainer dndKitId="ab679a4c-7f25-4c57-8115-a1f4830d5709" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-b-3xl px-12 py-10" data-magicpath-id="7" data-magicpath-path="SignupScreen.tsx">
          <SortableContainer dndKitId="8411687e-01d6-428b-acf4-dd61bebffe61" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="space-y-6" data-magicpath-id="8" data-magicpath-path="SignupScreen.tsx">
            {/* Profile Picture */}
            <SortableContainer dndKitId="fe8a26ad-a1ac-464a-a0f6-37101fbe2d99" containerType="regular" prevTag="div" className="flex flex-col items-center mb-6" data-magicpath-id="9" data-magicpath-path="SignupScreen.tsx">
              <SortableContainer dndKitId="f3906d6e-ba4f-408b-b093-7320dcf6dc9a" containerType="regular" prevTag="div" className="relative" data-magicpath-id="10" data-magicpath-path="SignupScreen.tsx">
                <SortableContainer dndKitId="a829212d-63a5-41aa-96e6-62f896a67700" containerType="regular" prevTag="div" className="w-32 h-32 bg-[#1E3A8A] rounded-full flex items-center justify-center overflow-hidden" data-magicpath-id="11" data-magicpath-path="SignupScreen.tsx">
                  {profilePicture ? <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" data-magicpath-id="12" data-magicpath-path="SignupScreen.tsx" /> : <User className="w-16 h-16 text-white" data-magicpath-id="13" data-magicpath-path="SignupScreen.tsx" />}
                </SortableContainer>
                <SortableContainer dndKitId="3d59929b-724f-465f-a145-5f02a485b253" containerType="regular" prevTag="button" type="button" onClick={handleProfilePictureClick} className="absolute bottom-0 right-0 w-11 h-11 bg-[#1E3A8A] rounded-full flex items-center justify-center border-4 border-[#0a0f1a] hover:bg-[#1E40AF] transition-colors" data-magicpath-id="14" data-magicpath-path="SignupScreen.tsx">
                  <Upload className="w-5 h-5 text-white" data-magicpath-id="15" data-magicpath-path="SignupScreen.tsx" />
                </SortableContainer>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" data-magicpath-id="16" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
              <p className="text-gray-400 mt-4 text-base" data-magicpath-id="17" data-magicpath-path="SignupScreen.tsx">Upload profile picture</p>
            </SortableContainer>

            {/* First Name */}
            <SortableContainer dndKitId="3eea3e3b-68ab-4ea8-8c01-9807a4b5ffbd" containerType="regular" prevTag="div" data-magicpath-id="18" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="19" data-magicpath-path="SignupScreen.tsx">
                First Name <span className="text-red-500" data-magicpath-id="20" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="6a4d074f-d5e8-4d1c-ac86-e1ea033c9ea8" containerType="regular" prevTag="div" className="relative" data-magicpath-id="21" data-magicpath-path="SignupScreen.tsx">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="22" data-magicpath-path="SignupScreen.tsx" />
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="John" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="23" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Last Name */}
            <SortableContainer dndKitId="004c6cc0-4b6b-4d29-83b9-6179c88a83c0" containerType="regular" prevTag="div" data-magicpath-id="24" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="25" data-magicpath-path="SignupScreen.tsx">
                Last Name <span className="text-red-500" data-magicpath-id="26" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="0639ab09-13ee-4f23-9f61-14e0210d58ee" containerType="regular" prevTag="div" className="relative" data-magicpath-id="27" data-magicpath-path="SignupScreen.tsx">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="28" data-magicpath-path="SignupScreen.tsx" />
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Doe" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="29" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Email */}
            <SortableContainer dndKitId="c4bee24b-6a49-4b6d-9c8c-e291ed66045a" containerType="regular" prevTag="div" data-magicpath-id="30" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="31" data-magicpath-path="SignupScreen.tsx">
                Email <span className="text-red-500" data-magicpath-id="32" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="356536cd-f53a-4d75-9569-3ff1a66121eb" containerType="regular" prevTag="div" className="relative" data-magicpath-id="33" data-magicpath-path="SignupScreen.tsx">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="34" data-magicpath-path="SignupScreen.tsx" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="35" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Phone Number */}
            <SortableContainer dndKitId="48861d27-84a6-47c0-bbb5-b99cd46b97c8" containerType="regular" prevTag="div" data-magicpath-id="36" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="37" data-magicpath-path="SignupScreen.tsx">
                Phone Number <span className="text-red-500" data-magicpath-id="38" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="145f7cbf-b59b-448f-9bba-4c0c2f9d988a" containerType="regular" prevTag="div" className="relative" data-magicpath-id="39" data-magicpath-path="SignupScreen.tsx">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="40" data-magicpath-path="SignupScreen.tsx" />
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 123-4567" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="41" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Password */}
            <SortableContainer dndKitId="bd3526e9-70c4-4f00-a68a-ee44fe4f780e" containerType="regular" prevTag="div" data-magicpath-id="42" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="43" data-magicpath-path="SignupScreen.tsx">
                Password <span className="text-red-500" data-magicpath-id="44" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="d872e8f8-dbb5-488d-9e6d-310c8984a681" containerType="regular" prevTag="div" className="relative" data-magicpath-id="45" data-magicpath-path="SignupScreen.tsx">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="46" data-magicpath-path="SignupScreen.tsx" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="47" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Retype Password */}
            <SortableContainer dndKitId="665f7b44-8f9e-419b-bfcf-1a1f98709516" containerType="regular" prevTag="div" data-magicpath-id="48" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="49" data-magicpath-path="SignupScreen.tsx">
                Retype Password <span className="text-red-500" data-magicpath-id="50" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="5c784b14-bdfb-424c-8cd1-b219bb4bd358" containerType="regular" prevTag="div" className="relative" data-magicpath-id="51" data-magicpath-path="SignupScreen.tsx">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="52" data-magicpath-path="SignupScreen.tsx" />
                <input type="password" value={retypePassword} onChange={e => setRetypePassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="53" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Create Account Button */}
            <button type="submit" className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-xl font-bold py-5 rounded-xl transition-colors mt-8" data-magicpath-id="54" data-magicpath-path="SignupScreen.tsx">
              Create Account
            </button>

            {/* Login Link */}
            <SortableContainer dndKitId="130f6e82-f685-4362-b6f8-1a311ec424ed" containerType="regular" prevTag="div" className="text-center pt-4" data-magicpath-id="55" data-magicpath-path="SignupScreen.tsx">
              <span className="text-gray-400 text-base" data-magicpath-id="56" data-magicpath-path="SignupScreen.tsx">Already have an account? </span>
              <button type="button" onClick={onSwitchToLogin} className="text-[#4169E1] hover:text-[#3557C1] text-base font-semibold transition-colors" data-magicpath-id="57" data-magicpath-path="SignupScreen.tsx">
                Sign in
              </button>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};