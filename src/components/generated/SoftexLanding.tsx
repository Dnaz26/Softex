"use client";

import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, Instagram, Twitter, Star, User } from 'lucide-react';
import { AllListings } from './AllListings';
import { AIAdvisorPanel } from './AIAdvisorPanel';
import { MenuPanel } from './MenuPanel';
import { LoginScreen } from './LoginScreen';
import { SignupScreen } from './SignupScreen';
import { BusinessDetails } from './BusinessDetails';
type SoftexLandingProps = {};

// @component: SoftexLanding
export const SoftexLanding = (props: SoftexLandingProps) => {
  const [showAllListings, setShowAllListings] = useState(false);
  const [showAIAdvisor, setShowAIAdvisor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
  const [savedListings, setSavedListings] = useState<any[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(new Set());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };
  if (selectedBusiness) {
    return <BusinessDetails business={selectedBusiness} onBack={() => setSelectedBusiness(null)} data-magicpath-id="0" data-magicpath-path="SoftexLanding.tsx" />;
  }
  if (showAllListings) {
    return <AllListings onBack={() => setShowAllListings(false)} savedListings={savedListings} onUpdateSavedListings={setSavedListings} bookmarkedIds={bookmarkedIds} onUpdateBookmarkedIds={setBookmarkedIds} isLoggedIn={isLoggedIn} userData={userData} onLogout={handleLogout} data-magicpath-id="1" data-magicpath-path="SoftexLanding.tsx" />;
  }
  return <div className="min-h-screen bg-black text-white" data-magicpath-id="2" data-magicpath-path="SoftexLanding.tsx">
      <header className="border-b border-gray-900 px-6 py-4" data-magicpath-id="3" data-magicpath-path="SoftexLanding.tsx">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="4" data-magicpath-path="SoftexLanding.tsx">
          <div className="flex items-center gap-2" data-magicpath-id="5" data-magicpath-path="SoftexLanding.tsx">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center" data-magicpath-id="6" data-magicpath-path="SoftexLanding.tsx">
              <div className="w-6 h-6 border-2 border-white rounded" data-magicpath-id="7" data-magicpath-path="SoftexLanding.tsx" />
            </div>
            <span className="text-xl font-semibold" data-magicpath-id="8" data-magicpath-path="SoftexLanding.tsx">Softex</span>
          </div>
          <div className="flex items-center gap-4" data-magicpath-id="9" data-magicpath-path="SoftexLanding.tsx">
            {isLoggedIn && userData ? <div className="flex items-center gap-3" data-magicpath-id="10" data-magicpath-path="SoftexLanding.tsx">
                <div className="flex items-center gap-2" data-magicpath-id="11" data-magicpath-path="SoftexLanding.tsx">
                  {userData.profilePicture ? <img src={userData.profilePicture} alt={userData.firstName} className="w-10 h-10 rounded-full object-cover border-2 border-blue-600" data-magicpath-id="12" data-magicpath-path="SoftexLanding.tsx" /> : <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center" data-magicpath-id="13" data-magicpath-path="SoftexLanding.tsx">
                      <User className="w-5 h-5 text-white" data-magicpath-id="14" data-magicpath-path="SoftexLanding.tsx" />
                    </div>}
                  <span className="text-white font-medium" data-magicpath-id="15" data-magicpath-path="SoftexLanding.tsx">{userData.firstName}</span>
                </div>
              </div> : <>
                <button onClick={() => setShowLogin(true)} className="text-gray-300 hover:text-white px-4 py-2" data-magicpath-id="16" data-magicpath-path="SoftexLanding.tsx">
                  Login
                </button>
                <button onClick={() => setShowSignup(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium" data-magicpath-id="17" data-magicpath-path="SoftexLanding.tsx">
                  Sign Up
                </button>
              </>}
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6" data-magicpath-id="18" data-magicpath-path="SoftexLanding.tsx">
        <section className="py-16" data-magicpath-id="19" data-magicpath-path="SoftexLanding.tsx">
          <h1 className="text-6xl font-bold text-center mb-12" data-magicpath-id="20" data-magicpath-path="SoftexLanding.tsx">Find your next investment</h1>

          <div className="flex items-center gap-4 max-w-4xl mx-auto mb-20" data-magicpath-id="21" data-magicpath-path="SoftexLanding.tsx">
            <div className="flex-1 relative" data-magicpath-id="22" data-magicpath-path="SoftexLanding.tsx">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" data-magicpath-id="23" data-magicpath-path="SoftexLanding.tsx" />
              <input type="text" placeholder="Search for businesses, industries, or locations..." className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" data-magicpath-id="24" data-magicpath-path="SoftexLanding.tsx" />
            </div>
            <button onClick={() => setShowAIAdvisor(true)} className="bg-transparent hover:bg-gray-900/50 rounded-xl p-4 transition-colors" data-magicpath-id="25" data-magicpath-path="SoftexLanding.tsx">
              <Sparkles className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex items-center justify-between mb-8" data-magicpath-id="26" data-magicpath-path="SoftexLanding.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="27" data-magicpath-path="SoftexLanding.tsx">Listings</h2>
            <button onClick={() => setShowAllListings(true)} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" data-magicpath-id="28" data-magicpath-path="SoftexLanding.tsx">
              <ArrowRight className="w-9 h-9" data-magicpath-id="29" data-magicpath-path="SoftexLanding.tsx" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-20" data-magicpath-id="30" data-magicpath-path="SoftexLanding.tsx">
            {listings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer" onClick={() => handleViewDetails(listing)} data-magicpath-id="31" data-magicpath-path="SoftexLanding.tsx">
                <div className="relative h-64" data-magicpath-id="32" data-magicpath-path="SoftexLanding.tsx">
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" data-magicpath-id="33" data-magicpath-path="SoftexLanding.tsx" />

                  <button onClick={e => {
                e.stopPropagation();
                handleBookmark(listing);
              }} className="absolute top-4 left-4 w-9 h-9 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors" data-magicpath-id="34" data-magicpath-path="SoftexLanding.tsx">
                    <Star className={`w-5 h-5 ${bookmarkedIds.has(listing.id) ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} data-magicpath-id="35" data-magicpath-path="SoftexLanding.tsx" />
                  </button>

                  <div className="absolute top-4 right-4 bg-[#0B1A33] px-5 py-2 rounded-full" data-magicpath-id="36" data-magicpath-path="SoftexLanding.tsx">
                    <span className="text-[#4169E1] font-bold text-lg" data-magicpath-id="37" data-magicpath-path="SoftexLanding.tsx">{listing.price}</span>
                  </div>
                </div>
                <div className="p-6" data-magicpath-id="38" data-magicpath-path="SoftexLanding.tsx">
                  <div className="text-[#4169E1] text-sm font-semibold mb-2 uppercase" data-magicpath-id="39" data-magicpath-path="SoftexLanding.tsx">{listing.category}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4169E1] transition-colors" data-magicpath-id="40" data-magicpath-path="SoftexLanding.tsx">
                    {listing.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed" data-magicpath-id="41" data-magicpath-path="SoftexLanding.tsx">{listing.description}</p>
                  <div className="flex justify-between items-center text-sm mb-6" data-magicpath-id="42" data-magicpath-path="SoftexLanding.tsx">
                    <div data-magicpath-id="43" data-magicpath-path="SoftexLanding.tsx">
                      <span className="text-gray-500" data-magicpath-id="44" data-magicpath-path="SoftexLanding.tsx">Location:</span>
                      <span className="text-white ml-2 font-medium" data-magicpath-id="45" data-magicpath-path="SoftexLanding.tsx">{listing.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-6" data-magicpath-id="46" data-magicpath-path="SoftexLanding.tsx">
                    <div data-magicpath-id="47" data-magicpath-path="SoftexLanding.tsx">
                      <span className="text-gray-500" data-magicpath-id="48" data-magicpath-path="SoftexLanding.tsx">Revenue:</span>
                      <span className="text-green-500 ml-2 font-semibold" data-magicpath-id="49" data-magicpath-path="SoftexLanding.tsx">{listing.revenue}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors" data-magicpath-id="50" data-magicpath-path="SoftexLanding.tsx">
                    View Details
                  </button>
                </div>
              </div>)}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-900 py-12" data-magicpath-id="51" data-magicpath-path="SoftexLanding.tsx">
        <div className="max-w-[1400px] mx-auto px-6" data-magicpath-id="52" data-magicpath-path="SoftexLanding.tsx">
          <div className="grid grid-cols-4 gap-12 mb-12" data-magicpath-id="53" data-magicpath-path="SoftexLanding.tsx">
            <div data-magicpath-id="54" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="55" data-magicpath-path="SoftexLanding.tsx">Company</h4>
              <ul className="space-y-3 text-gray-400" data-magicpath-id="56" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="57" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="58" data-magicpath-path="SoftexLanding.tsx">
                    About Us
                  </a>
                </li>
                <li data-magicpath-id="59" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="60" data-magicpath-path="SoftexLanding.tsx">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div data-magicpath-id="61" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="62" data-magicpath-path="SoftexLanding.tsx">Legal</h4>
              <ul className="space-y-3 text-gray-400" data-magicpath-id="63" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="64" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="65" data-magicpath-path="SoftexLanding.tsx">
                    Terms of Service
                  </a>
                </li>
                <li data-magicpath-id="66" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="67" data-magicpath-path="SoftexLanding.tsx">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div data-magicpath-id="68" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="69" data-magicpath-path="SoftexLanding.tsx">Support</h4>
              <ul className="space-y-3 text-gray-400" data-magicpath-id="70" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="71" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="72" data-magicpath-path="SoftexLanding.tsx">
                    Help Center
                  </a>
                </li>
                <li data-magicpath-id="73" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="74" data-magicpath-path="SoftexLanding.tsx">
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>
            <div data-magicpath-id="75" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="76" data-magicpath-path="SoftexLanding.tsx">Follow Us</h4>
              <div className="flex gap-3" data-magicpath-id="77" data-magicpath-path="SoftexLanding.tsx">
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="78" data-magicpath-path="SoftexLanding.tsx">
                  <Instagram className="w-5 h-5" data-magicpath-id="79" data-magicpath-path="SoftexLanding.tsx" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="80" data-magicpath-path="SoftexLanding.tsx">
                  <Twitter className="w-5 h-5" data-magicpath-id="81" data-magicpath-path="SoftexLanding.tsx" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="82" data-magicpath-path="SoftexLanding.tsx">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" data-magicpath-id="83" data-magicpath-path="SoftexLanding.tsx">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" data-magicpath-id="84" data-magicpath-path="SoftexLanding.tsx" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-900" data-magicpath-id="85" data-magicpath-path="SoftexLanding.tsx">
            © 2024 Softex. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Panels and Modals */}
      <AIAdvisorPanel isOpen={showAIAdvisor} onClose={() => setShowAIAdvisor(false)} onLogout={handleLogout} data-magicpath-id="86" data-magicpath-path="SoftexLanding.tsx" />
      <MenuPanel isOpen={showMenu} onClose={() => setShowMenu(false)} savedListings={savedListings} onNavigateHome={() => {
      setShowMenu(false);
      // Already on home, do nothing
    }} onNavigateMyListings={() => {
      setShowMenu(false);
      alert('My Listings feature coming soon!');
    }} onNavigateSettings={() => {
      setShowMenu(false);
      alert('Settings feature coming soon!');
    }} onLogout={handleLogout} data-magicpath-id="87" data-magicpath-path="SoftexLanding.tsx" />
      <LoginScreen isOpen={showLogin} onClose={() => setShowLogin(false)} onSwitchToSignup={() => {
      setShowLogin(false);
      setShowSignup(true);
    }} onLoginSuccess={handleLoginSuccess} data-magicpath-id="88" data-magicpath-path="SoftexLanding.tsx" />
      <SignupScreen isOpen={showSignup} onClose={() => setShowSignup(false)} onSwitchToLogin={() => {
      setShowSignup(false);
      setShowLogin(true);
    }} onSignupSuccess={handleSignupSuccess} data-magicpath-id="89" data-magicpath-path="SoftexLanding.tsx" />
    </div>;
};