"use client";

import React, { useState, useEffect } from 'react';
import { Search, Sparkles, ArrowRight, Instagram, Twitter, Star, User, DollarSign } from 'lucide-react';
import { AllListings } from './AllListings';
import { AIAdvisorPanel } from './AIAdvisorPanel';
import { MenuPanel } from './MenuPanel';
import { LoginScreen } from './LoginScreen';
import { SignupScreen } from './SignupScreen';
import { BusinessDetails } from './BusinessDetails';
import { ProfileDashboard } from './ProfileDashboard';
import { supabase } from '../../lib/supabase';
type SoftexLandingProps = {};

// @component: SoftexLanding
export const SoftexLanding = (props: SoftexLandingProps) => {
  const [showAllListings, setShowAllListings] = useState(false);
  const [showAIAdvisor, setShowAIAdvisor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showProfileDashboard, setShowProfileDashboard] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
  const [savedListings, setSavedListings] = useState<any[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(new Set());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [userData, setUserData] = useState<{
    firstName: string;
    profilePicture: string | null;
  } | null>(null);

  // Full business data with details
  const allBusinessData = [{
    id: 1,
    title: 'The Artisan Cafe',
    category: 'COFFEE & TEA',
    description: 'Established coffee shop with loyal customer base and prime downtown location',
    location: 'Downtown District',
    revenue: '$500K/year',
    margin: '25%',
    price: '$250,000',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    established: '2018',
    employees: 8,
    website: 'www.artisancafe.com',
    email: 'contact@artisancafe.com',
    phone: '+1 (555) 123-4567',
    fullDescription: 'The Artisan Cafe is a beloved coffee shop that has become a cornerstone of the downtown community since 2018. Known for its artisanal coffee blends, fresh pastries, and warm atmosphere, this establishment offers a turnkey opportunity in the thriving cafe industry. The business comes with trained staff, established supplier relationships, and a strong reputation for quality and service.',
    revenueExpensesData: [{
      month: 'Jan',
      revenue: 42000,
      expenses: 28000
    }, {
      month: 'Feb',
      revenue: 45000,
      expenses: 29000
    }, {
      month: 'Mar',
      revenue: 48000,
      expenses: 30000
    }, {
      month: 'Apr',
      revenue: 52000,
      expenses: 31000
    }, {
      month: 'May',
      revenue: 55000,
      expenses: 32000
    }, {
      month: 'Jun',
      revenue: 58000,
      expenses: 33000
    }],
    trafficData: [{
      day: 'Mon',
      customers: 120
    }, {
      day: 'Tue',
      customers: 135
    }, {
      day: 'Wed',
      customers: 140
    }, {
      day: 'Thu',
      customers: 155
    }, {
      day: 'Fri',
      customers: 200
    }, {
      day: 'Sat',
      customers: 250
    }, {
      day: 'Sun',
      customers: 180
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 60
    }, {
      name: 'Services',
      value: 25
    }, {
      name: 'Other',
      value: 15
    }],
    growthData: [{
      month: 'Jan',
      revenue: 42000
    }, {
      month: 'Feb',
      revenue: 45000
    }, {
      month: 'Mar',
      revenue: 48000
    }, {
      month: 'Apr',
      revenue: 52000
    }, {
      month: 'May',
      revenue: 55000
    }, {
      month: 'Jun',
      revenue: 58000
    }],
    highlights: ['Prime downtown location with high foot traffic', 'Loyal customer base with 70% repeat customers', 'Exclusive roasting partnerships', 'Modern equipment fully maintained', 'Strong social media presence with 15K+ followers', 'Excellent online reviews (4.8/5 stars)'],
    assets: ['Commercial espresso machines and equipment', 'Furniture and interior decor', 'Point of sale system', 'Inventory management software', 'Customer loyalty program database', 'Trademark and branding materials']
  }, {
    id: 2,
    title: 'Bella Italia Ristorante',
    category: 'RESTAURANT',
    description: 'Popular Italian restaurant with established brand and recipes',
    location: 'Midtown Area',
    revenue: '$850K/year',
    margin: '30%',
    price: '$450,000',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    established: '2015',
    employees: 15,
    website: 'www.bellaitalia.com',
    email: 'contact@bellaitalia.com',
    phone: '+1 (555) 234-5678',
    fullDescription: 'Bella Italia is an authentic Italian restaurant that has become a local favorite since 2015. Known for its traditional recipes, warm atmosphere, and exceptional service, this establishment offers a turnkey opportunity in the restaurant industry. The business comes with exclusive recipes, trained staff, and a strong reputation in the community.',
    revenueExpensesData: [{
      month: 'Jan',
      revenue: 68000,
      expenses: 48000
    }, {
      month: 'Feb',
      revenue: 70000,
      expenses: 49000
    }, {
      month: 'Mar',
      revenue: 72000,
      expenses: 50000
    }, {
      month: 'Apr',
      revenue: 75000,
      expenses: 52000
    }, {
      month: 'May',
      revenue: 78000,
      expenses: 54000
    }, {
      month: 'Jun',
      revenue: 82000,
      expenses: 56000
    }],
    trafficData: [{
      day: 'Mon',
      customers: 110
    }, {
      day: 'Tue',
      customers: 125
    }, {
      day: 'Wed',
      customers: 135
    }, {
      day: 'Thu',
      customers: 150
    }, {
      day: 'Fri',
      customers: 195
    }, {
      day: 'Sat',
      customers: 245
    }, {
      day: 'Sun',
      customers: 175
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 60
    }, {
      name: 'Services',
      value: 25
    }, {
      name: 'Other',
      value: 15
    }],
    growthData: [{
      month: 'Jan',
      revenue: 68000
    }, {
      month: 'Feb',
      revenue: 70000
    }, {
      month: 'Mar',
      revenue: 72000
    }, {
      month: 'Apr',
      revenue: 75000
    }, {
      month: 'May',
      revenue: 78000
    }, {
      month: 'Jun',
      revenue: 82000
    }],
    highlights: ['Established brand with 8+ years of operation', 'Exclusive family recipes and menu', 'Full liquor license included', 'Seating capacity of 80 guests', 'Strong catering and events business', 'Excellent online reviews and reputation'],
    assets: ['Commercial kitchen equipment', 'Dining room furniture and decor', 'Liquor license', 'POS and reservation system', 'Wine inventory', 'Recipes and operational procedures']
  }] as any[];
  const listings = allBusinessData.slice(0, 2); // Show first 2 on landing page

  const handleBookmark = (listing: any) => {
    const newBookmarkedIds = new Set(bookmarkedIds);
    if (bookmarkedIds.has(listing.id)) {
      newBookmarkedIds.delete(listing.id);
      setSavedListings(savedListings.filter(item => item.id !== listing.id));
    } else {
      newBookmarkedIds.add(listing.id);
      setSavedListings([...savedListings, listing]);
    }
    setBookmarkedIds(newBookmarkedIds);
  };
  const handleViewDetails = (listing: any) => {
    setSelectedBusiness(listing);
  };
  const handleLoginSuccess = (data: {
    firstName: string;
    profilePicture: string | null;
  }) => {
    setUserData(data);
    setIsLoggedIn(true);
  };
  const handleSignupSuccess = (data: {
    firstName: string;
    profilePicture: string | null;
  }) => {
    setUserData(data);
    setIsLoggedIn(true);
  };
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setUserData(null);
  };
  const handleProfilePictureUpdate = (newPicture: string | null) => {
    if (userData) {
      setUserData({
        ...userData,
        profilePicture: newPicture
      });
    }
  };

  // Helper function to sign in user from session
  const signInUserFromSession = async (session: any) => {
    if (!session?.user) return false;

    try {
      console.log('✅ Signing in user from session:', session.user.id);
      
      // Try to fetch user profile from database
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('first_name, profile_picture')
        .eq('id', session.user.id)
        .single();
      
      if (profileError || !profile) {
        // Use auth user metadata as fallback
        const firstName = session.user.user_metadata?.first_name || 
                         session.user.email?.split('@')[0] || 
                         'User';
        console.log('Using auth metadata for user:', firstName);
        handleLoginSuccess({
          firstName,
          profilePicture: null
        });
      } else {
        console.log('Using profile data for user:', profile.first_name);
        handleLoginSuccess({
          firstName: profile.first_name || 'User',
          profilePicture: profile.profile_picture
        });
      }
      return true;
    } catch (err) {
      console.error('Error fetching profile:', err);
      // Fallback to auth metadata if table doesn't exist
      const firstName = session.user.user_metadata?.first_name || 
                       session.user.email?.split('@')[0] || 
                       'User';
      handleLoginSuccess({
        firstName,
        profilePicture: null
      });
      return true;
    }
  };

  // Check for existing session on mount and set up auth state listener
  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;
    const MAX_RETRIES = 3;

    const checkSession = async (retry = false) => {
      try {
        if (!retry) {
          setIsCheckingSession(true);
        }
        
        console.log('🔍 Checking for existing session...');
        
        // Get current session - this should work immediately if session exists
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('❌ Error getting session:', sessionError);
          // Retry if we haven't exceeded max retries
          if (retryCount < MAX_RETRIES && isMounted) {
            retryCount++;
            console.log(`🔄 Retrying session check (${retryCount}/${MAX_RETRIES})...`);
            setTimeout(() => checkSession(true), 1000 * retryCount);
            return;
          }
          if (isMounted) {
            setIsCheckingSession(false);
          }
          return;
        }

        if (session?.user) {
          console.log('✅ Session found! User ID:', session.user.id, 'Email:', session.user.email);
          // Session exists, sign in the user
          if (isMounted) {
            await signInUserFromSession(session);
          }
        } else {
          console.log('ℹ️ No active session found in localStorage');
          // Check localStorage directly as a fallback
          try {
            // Supabase stores session in localStorage with key pattern: sb-<project-ref>-auth-token
            const supabaseKeys = Object.keys(localStorage).filter(key => 
              key.includes('supabase') || key.includes('sb-') && key.includes('auth-token')
            );
            if (supabaseKeys.length > 0) {
              console.log('📦 Found Supabase keys in localStorage:', supabaseKeys);
              // Wait a bit and check again - Supabase might need time to initialize
              setTimeout(async () => {
                const { data: { session: retrySession } } = await supabase.auth.getSession();
                if (retrySession?.user && isMounted) {
                  console.log('✅ Session restored from localStorage!');
                  await signInUserFromSession(retrySession);
                } else {
                  console.log('⚠️ No session found after localStorage check');
                }
              }, 500);
            } else {
              console.log('ℹ️ No Supabase session keys found in localStorage');
            }
          } catch (e) {
            console.log('Error checking localStorage:', e);
          }
        }
      } catch (error) {
        console.error('❌ Error checking session:', error);
      } finally {
        if (isMounted && !retry) {
          setIsCheckingSession(false);
        }
      }
    };

    // Check session immediately on mount
    checkSession();

    // Set up auth state change listener for automatic sign-in
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('🔄 Auth state changed:', event, session?.user?.id || 'no user');
      
      if (event === 'INITIAL_SESSION') {
        console.log('🎯 INITIAL_SESSION event fired');
        if (session?.user && isMounted) {
          console.log('✅ Initial session detected, signing in user');
          await signInUserFromSession(session);
        }
      } else if (event === 'SIGNED_IN') {
        console.log('✅ SIGNED_IN event fired');
        if (session?.user && isMounted) {
          await signInUserFromSession(session);
        }
      } else if (event === 'SIGNED_OUT') {
        // User signed out
        console.log('👋 User signed out');
        if (isMounted) {
          handleLogout();
        }
      } else if (event === 'TOKEN_REFRESHED') {
        // Token refreshed, ensure user is still signed in
        if (session?.user && isMounted) {
          console.log('🔄 Token refreshed, ensuring user is signed in');
          if (!isLoggedIn) {
            await signInUserFromSession(session);
          }
        }
      }
    });

    // Also check session after a short delay to catch any race conditions
    const delayedCheck = setTimeout(() => {
      if (isMounted && !isLoggedIn) {
        console.log('🔄 Delayed session check...');
        checkSession(true);
      }
    }, 1000);

    // Cleanup subscription on unmount
    return () => {
      isMounted = false;
      clearTimeout(delayedCheck);
      subscription.unsubscribe();
    };
  }, []);

  // Double Ctrl key press to open AI chat
  useEffect(() => {
    let lastCtrlPressTime = 0;
    let ctrlKeyDown = false;
    const DOUBLE_PRESS_TIMEOUT = 300; // 300ms window for double press

    const handleKeyDown = (e: KeyboardEvent) => {
      // Detect when Control key itself is pressed (not when used as modifier)
      if (e.key === 'Control' && !ctrlKeyDown) {
        ctrlKeyDown = true;
        const now = Date.now();
        const timeSinceLastPress = now - lastCtrlPressTime;

        // If pressed within the timeout window, it's a double press
        if (timeSinceLastPress > 0 && timeSinceLastPress < DOUBLE_PRESS_TIMEOUT) {
          e.preventDefault();
          setShowAIAdvisor(true);
          lastCtrlPressTime = 0; // Reset to prevent triple press
        } else {
          lastCtrlPressTime = now;
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Control') {
        ctrlKeyDown = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  if (selectedBusiness) {
    return <BusinessDetails business={selectedBusiness} onBack={() => setSelectedBusiness(null)} />;
  }
  if (showAllListings) {
    return <AllListings onBack={() => setShowAllListings(false)} savedListings={savedListings} onUpdateSavedListings={setSavedListings} bookmarkedIds={bookmarkedIds} onUpdateBookmarkedIds={setBookmarkedIds} isLoggedIn={isLoggedIn} userData={userData} onLogout={handleLogout} />;
  }
  return <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-900 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-[#4169E1]" />
            <span className="text-xl font-semibold">Softex</span>
          </div>
          <div className="flex items-center gap-4">
            {isLoggedIn && userData ? <button
                onClick={() => setShowProfileDashboard(true)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
              >
                {userData.profilePicture ? <img src={userData.profilePicture} alt={userData.firstName} className="w-10 h-10 rounded-full object-cover border-2 border-blue-600" /> : <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>}
                <span className="text-white font-medium">{userData.firstName}</span>
              </button> : <>
                <button onClick={() => setShowLogin(true)} className="text-gray-300 hover:text-white px-4 py-2">
                  Login
                </button>
                <button onClick={() => setShowSignup(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                  Sign Up
                </button>
              </>}
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6">
        <section className="py-16">
          <h1 className="text-6xl font-bold text-center mb-12">Find your next investment</h1>

          <div className="flex items-center gap-4 max-w-4xl mx-auto mb-20">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input type="text" placeholder="Search for businesses, industries, or locations..." className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" />
            </div>
            <button onClick={() => setShowAIAdvisor(true)} className="bg-transparent hover:bg-gray-900/50 rounded-xl p-4 transition-colors">
              <Sparkles className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Listings</h2>
            <button onClick={() => setShowAllListings(true)} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <ArrowRight className="w-9 h-9" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-20">
            {listings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer" onClick={() => handleViewDetails(listing)}>
                <div className="relative h-64">
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />

                  <button onClick={e => {
                e.stopPropagation();
                handleBookmark(listing);
              }} className="absolute top-4 left-4 w-9 h-9 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                    <Star className={`w-5 h-5 ${bookmarkedIds.has(listing.id) ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} />
                  </button>

                  <div className="absolute top-4 right-4 bg-[#0B1A33] px-5 py-2 rounded-full">
                    <span className="text-[#4169E1] font-bold text-lg">{listing.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[#4169E1] text-sm font-semibold mb-2 uppercase">{listing.category}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4169E1] transition-colors">
                    {listing.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{listing.description}</p>
                  <div className="flex justify-between items-center text-sm mb-6">
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <span className="text-white ml-2 font-medium">{listing.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-6">
                    <div>
                      <span className="text-gray-500">Revenue:</span>
                      <span className="text-green-500 ml-2 font-semibold">{listing.revenue}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>)}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-900 py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-900">
            © 2024 Softex. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Panels and Modals */}
      <AIAdvisorPanel isOpen={showAIAdvisor} onClose={() => setShowAIAdvisor(false)} onLogout={handleLogout} />
      <MenuPanel isOpen={showMenu} onClose={() => setShowMenu(false)} savedListings={savedListings} onNavigateHome={() => {
      setShowMenu(false);
      // Already on home, do nothing
    }} onNavigateMyListings={() => {
      setShowMenu(false);
      alert('My Listings feature coming soon!');
    }} onNavigateSettings={() => {
      setShowMenu(false);
      alert('Settings feature coming soon!');
    }} onLogout={handleLogout} />
      <LoginScreen isOpen={showLogin} onClose={() => setShowLogin(false)} onSwitchToSignup={() => {
      setShowLogin(false);
      setShowSignup(true);
    }} onLoginSuccess={handleLoginSuccess} />
      <SignupScreen isOpen={showSignup} onClose={() => setShowSignup(false)} onSwitchToLogin={() => {
      setShowSignup(false);
      setShowLogin(true);
    }} onSignupSuccess={handleSignupSuccess} />
      {userData && <ProfileDashboard
        isOpen={showProfileDashboard}
        onClose={() => setShowProfileDashboard(false)}
        userData={userData}
        onProfilePictureUpdate={handleProfilePictureUpdate}
      />}
    </div>;
};