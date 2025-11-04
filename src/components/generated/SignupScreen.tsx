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
  return <SortableContainer dndKitId="48cecf86-c7a0-47c6-95a9-33b49bf55d53" containerType="regular" prevTag="div" className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-y-auto" data-magicpath-id="0" data-magicpath-path="SignupScreen.tsx">
      {/* Close Button */}
      <SortableContainer dndKitId="31300459-8ba3-444d-8777-c3117123ec54" containerType="regular" prevTag="button" onClick={onClose} className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors z-10" data-magicpath-id="1" data-magicpath-path="SignupScreen.tsx">
        <X className="w-6 h-6 text-white" data-magicpath-id="2" data-magicpath-path="SignupScreen.tsx" />
      </SortableContainer>

      {/* Content */}
      <SortableContainer dndKitId="c6532725-4443-47c1-9e21-3be57bd49597" containerType="regular" prevTag="div" className="w-full max-w-[680px] px-6 py-12" data-magicpath-id="3" data-magicpath-path="SignupScreen.tsx">
        {/* Header */}
        <SortableContainer dndKitId="efdb9f70-23b4-4aeb-846d-458435dc83e4" containerType="regular" prevTag="div" className="bg-[#1E3A8A] rounded-t-3xl px-12 py-10" data-magicpath-id="4" data-magicpath-path="SignupScreen.tsx">
          <h1 className="text-5xl font-bold text-white mb-3" data-magicpath-id="5" data-magicpath-path="SignupScreen.tsx">Create Account</h1>
          <p className="text-xl text-blue-100" data-magicpath-id="6" data-magicpath-path="SignupScreen.tsx">Join us to find your next investment</p>
        </SortableContainer>

        {/* Form */}
        <SortableContainer dndKitId="3877c65d-c637-4858-91b9-b70cfcc7523e" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-b-3xl px-12 py-10" data-magicpath-id="7" data-magicpath-path="SignupScreen.tsx">
          <SortableContainer dndKitId="1a0bad2d-e124-407f-b57a-bc1760ad6d6e" containerType="regular" prevTag="form" onSubmit={handleSubmit} className="space-y-6" data-magicpath-id="8" data-magicpath-path="SignupScreen.tsx">
            {/* Profile Picture */}
            <SortableContainer dndKitId="197d23a5-7030-46fd-8d12-a626e9426b29" containerType="regular" prevTag="div" className="flex flex-col items-center mb-6" data-magicpath-id="9" data-magicpath-path="SignupScreen.tsx">
              <SortableContainer dndKitId="bde673fb-0aa3-4018-bb73-d6d8e624f510" containerType="regular" prevTag="div" className="relative" data-magicpath-id="10" data-magicpath-path="SignupScreen.tsx">
                <SortableContainer dndKitId="0c61842e-de41-4be4-92bd-b39b928266ff" containerType="regular" prevTag="div" className="w-32 h-32 bg-[#1E3A8A] rounded-full flex items-center justify-center overflow-hidden" data-magicpath-id="11" data-magicpath-path="SignupScreen.tsx">
                  {profilePicture ? <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" data-magicpath-id="12" data-magicpath-path="SignupScreen.tsx" /> : <User className="w-16 h-16 text-white" data-magicpath-id="13" data-magicpath-path="SignupScreen.tsx" />}
                </SortableContainer>
                <SortableContainer dndKitId="78bc87f5-49cb-44ec-991a-aa594e3ce66b" containerType="regular" prevTag="button" type="button" onClick={handleProfilePictureClick} className="absolute bottom-0 right-0 w-11 h-11 bg-[#1E3A8A] rounded-full flex items-center justify-center border-4 border-[#0a0f1a] hover:bg-[#1E40AF] transition-colors" data-magicpath-id="14" data-magicpath-path="SignupScreen.tsx">
                  <Upload className="w-5 h-5 text-white" data-magicpath-id="15" data-magicpath-path="SignupScreen.tsx" />
                </SortableContainer>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" data-magicpath-id="16" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
              <p className="text-gray-400 mt-4 text-base" data-magicpath-id="17" data-magicpath-path="SignupScreen.tsx">Upload profile picture</p>
            </SortableContainer>

            {/* First Name */}
            <SortableContainer dndKitId="7202eb09-a350-4915-9439-7b8079239524" containerType="regular" prevTag="div" data-magicpath-id="18" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="19" data-magicpath-path="SignupScreen.tsx">
                First Name <span className="text-red-500" data-magicpath-id="20" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="76d9d7b7-c83a-4ca2-b73f-2b3ecdb64de9" containerType="regular" prevTag="div" className="relative" data-magicpath-id="21" data-magicpath-path="SignupScreen.tsx">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="22" data-magicpath-path="SignupScreen.tsx" />
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="John" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="23" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Last Name */}
            <SortableContainer dndKitId="415cdaa1-c9bc-487a-8aa8-c3206a55f934" containerType="regular" prevTag="div" data-magicpath-id="24" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="25" data-magicpath-path="SignupScreen.tsx">
                Last Name <span className="text-red-500" data-magicpath-id="26" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="8dbb57ba-338c-4912-9758-82e1ae489281" containerType="regular" prevTag="div" className="relative" data-magicpath-id="27" data-magicpath-path="SignupScreen.tsx">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="28" data-magicpath-path="SignupScreen.tsx" />
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Doe" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="29" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Email */}
            <SortableContainer dndKitId="7e264746-37c1-4d0b-bb42-a2e4ca6d0b5a" containerType="regular" prevTag="div" data-magicpath-id="30" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="31" data-magicpath-path="SignupScreen.tsx">
                Email <span className="text-red-500" data-magicpath-id="32" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="c8e28ca7-cb57-47b0-8977-401534c3ff8f" containerType="regular" prevTag="div" className="relative" data-magicpath-id="33" data-magicpath-path="SignupScreen.tsx">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="34" data-magicpath-path="SignupScreen.tsx" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="35" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Phone Number */}
            <SortableContainer dndKitId="bf3116db-9bcc-4f96-b8d0-d84069cdce7f" containerType="regular" prevTag="div" data-magicpath-id="36" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="37" data-magicpath-path="SignupScreen.tsx">
                Phone Number <span className="text-red-500" data-magicpath-id="38" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="7566d2d5-610a-4f94-a73f-4e6164f5f3b8" containerType="regular" prevTag="div" className="relative" data-magicpath-id="39" data-magicpath-path="SignupScreen.tsx">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="40" data-magicpath-path="SignupScreen.tsx" />
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 123-4567" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="41" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Password */}
            <SortableContainer dndKitId="dc31ee08-0295-442a-b3d2-54371500b1fd" containerType="regular" prevTag="div" data-magicpath-id="42" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="43" data-magicpath-path="SignupScreen.tsx">
                Password <span className="text-red-500" data-magicpath-id="44" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="303f8a46-425d-476b-bab2-042e32ca0e8c" containerType="regular" prevTag="div" className="relative" data-magicpath-id="45" data-magicpath-path="SignupScreen.tsx">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="46" data-magicpath-path="SignupScreen.tsx" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="47" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Retype Password */}
            <SortableContainer dndKitId="13248c97-1333-4063-9593-1206b33023e1" containerType="regular" prevTag="div" data-magicpath-id="48" data-magicpath-path="SignupScreen.tsx">
              <label className="block text-white text-base font-semibold mb-2" data-magicpath-id="49" data-magicpath-path="SignupScreen.tsx">
                Retype Password <span className="text-red-500" data-magicpath-id="50" data-magicpath-path="SignupScreen.tsx">*</span>
              </label>
              <SortableContainer dndKitId="1e81ba8b-2c9f-4216-a59d-480bf7015ffa" containerType="regular" prevTag="div" className="relative" data-magicpath-id="51" data-magicpath-path="SignupScreen.tsx">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" data-magicpath-id="52" data-magicpath-path="SignupScreen.tsx" />
                <input type="password" value={retypePassword} onChange={e => setRetypePassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-12 pr-5 py-4 text-gray-300 placeholder-gray-500 text-base focus:outline-none focus:border-blue-500 transition-colors" required data-magicpath-id="53" data-magicpath-path="SignupScreen.tsx" />
              </SortableContainer>
            </SortableContainer>

            {/* Create Account Button */}
            <button type="submit" className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-xl font-bold py-5 rounded-xl transition-colors mt-8" data-magicpath-id="54" data-magicpath-path="SignupScreen.tsx">
              Create Account
            </button>

            {/* Login Link */}
            <SortableContainer dndKitId="e6799d61-839b-4450-9db0-dc47927fc822" containerType="regular" prevTag="div" className="text-center pt-4" data-magicpath-id="55" data-magicpath-path="SignupScreen.tsx">
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