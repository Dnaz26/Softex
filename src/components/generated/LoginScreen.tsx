"use client";

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
  return <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors z-10">
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div className="w-full max-w-[600px] px-6">
        {/* Header */}
        <div className="bg-[#1E3A8A] rounded-t-3xl px-12 py-12">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome Back</h1>
          <p className="text-xl text-blue-100">Sign in to continue your investment journey</p>
        </div>

        {/* Form */}
        <div className="bg-[#0a0f1a] rounded-b-3xl px-12 py-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email Field */}
            <div>
              <label className="block text-white text-lg font-semibold mb-3">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-14 pr-5 py-5 text-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white text-lg font-semibold mb-3">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-[#1a2332] border border-gray-700 rounded-xl pl-14 pr-5 py-5 text-gray-300 placeholder-gray-500 text-lg focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button type="button" className="text-[#4169E1] hover:text-[#3557C1] text-lg font-medium transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Sign In Button */}
            <button type="submit" className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-xl font-bold py-5 rounded-xl transition-colors">
              Sign In
            </button>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <span className="text-gray-400 text-lg">Don't have an account? </span>
              <button type="button" onClick={onSwitchToSignup} className="text-[#4169E1] hover:text-[#3557C1] text-lg font-semibold transition-colors">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};