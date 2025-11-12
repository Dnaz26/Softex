"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, User, Mail, Phone, Lock, Upload, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { testSupabaseConnection } from '../../lib/test-supabase';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Test connection when component mounts
  useEffect(() => {
    if (isOpen) {
      testSupabaseConnection();
    }
  }, [isOpen]);
  
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (password !== retypePassword) {
      setError("Passwords don't match!");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    
    setIsLoading(true);
    
    try {
      console.log('🚀 Attempting to sign up user:', { email, firstName });
      
      // Sign up user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
          }
        }
      });
      
      console.log('📦 Signup response:', { authData, authError });
      
      if (authError) {
        console.error('❌ Auth error:', authError);
        throw authError;
      }
      
      // Check if email confirmation is required
      if (authData.user && !authData.session) {
        // User created but needs email confirmation
        setError('Account created! Please check your email to confirm your account before signing in.');
        // Still call success to show user it worked
        setTimeout(() => {
          onSignupSuccess({
            firstName,
            profilePicture
          });
          onClose();
        }, 2000);
        return;
      }
      
      if (authData.user) {
        // Try to create user profile in database (table might not exist yet)
        try {
          const { error: profileError } = await supabase
            .from('user_profiles')
            .insert({
              id: authData.user.id,
              email: email,
              first_name: firstName,
              last_name: lastName,
              phone: phone,
              profile_picture: profilePicture,
              created_at: new Date().toISOString(),
            });
          
          if (profileError) {
            console.warn('Profile table may not exist yet. Run the SQL setup file. Error:', profileError);
            // Continue anyway - user is created in auth, profile can be added later
          }
        } catch (err) {
          console.warn('Could not create profile. Make sure user_profiles table exists in Supabase.');
        }
        
        // Call success callback
    onSignupSuccess({
      firstName,
      profilePicture
    });
    onClose();
      } else {
        throw new Error('User creation failed. Please try again.');
      }
    } catch (err: any) {
      console.error('Signup error:', err);
      
      // Better error messages
      let errorMessage = 'Failed to create account. Please try again.';
      
      if (err.message) {
        errorMessage = err.message;
      } else if (err instanceof TypeError && err.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      } else if (err.code === 'PGRST301' || err.message?.includes('relation') || err.message?.includes('does not exist')) {
        errorMessage = 'Database setup required. Please contact support.';
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Close Button */}
      <button onClick={onClose} className="fixed top-6 right-6 w-12 h-12 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors z-10">
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Content - Reduced size */}
      <div className="w-full max-w-[500px] my-auto">
        {/* Header - Reduced padding and text size - Always visible at top */}
        <div className="bg-[#1E3A8A] rounded-t-3xl px-8 py-6 relative z-10">
          <h1 className="text-3xl font-bold text-white mb-3 leading-tight">Create an Account</h1>
          <p className="text-base text-blue-100 leading-relaxed">Join us to find your next investment</p>
        </div>

        {/* Form */}
        <div className="bg-[#0a0f1a] rounded-b-3xl px-8 py-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Picture */}
            <div className="flex flex-col items-center mb-4">
              <div className="relative">
                <div className="w-24 h-24 bg-[#1E3A8A] rounded-full flex items-center justify-center overflow-hidden">
                  {profilePicture ? <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" /> : <User className="w-12 h-12 text-white" />}
                </div>
                <button type="button" onClick={handleProfilePictureClick} className="absolute bottom-0 right-0 w-9 h-9 bg-[#1E3A8A] rounded-full flex items-center justify-center border-4 border-[#0a0f1a] hover:bg-[#1E40AF] transition-colors">
                  <Upload className="w-4 h-4 text-white" />
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </div>
              <p className="text-gray-400 mt-3 text-sm">Upload profile picture</p>
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

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Create Account Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] disabled:opacity-50 disabled:cursor-not-allowed text-white text-lg font-bold py-4 rounded-xl transition-colors mt-6 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
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