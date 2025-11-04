"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, Instagram, Twitter, Star, User } from 'lucide-react';
import { AllListings } from './AllListings';
import { AIAdvisorPanel } from './AIAdvisorPanel';
import { MenuPanel } from './MenuPanel';
import { LoginScreen } from './LoginScreen';
import { SignupScreen } from './SignupScreen';
type SoftexLandingProps = {};

// @component: SoftexLanding
export const SoftexLanding = (props: SoftexLandingProps) => {
  const [showAllListings, setShowAllListings] = useState(false);
  const [showAIAdvisor, setShowAIAdvisor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [savedListings, setSavedListings] = useState<any[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(new Set());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{
    firstName: string;
    profilePicture: string | null;
  } | null>(null);
  const listings = [{
    id: 1,
    title: 'The Artisan Cafe',
    category: 'COFFEE & TEA',
    description: 'Established coffee shop with loyal customer base and prime downtown location',
    location: 'Downtown District',
    revenue: '$500K/year',
    price: '$250,000',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    mpid: "26374a59-f49a-4e4e-a5df-669f160271c0"
  }, {
    id: 2,
    title: 'Bella Italia Ristorante',
    category: 'RESTAURANT',
    description: 'Popular Italian restaurant with established brand and recipes',
    location: 'Midtown Area',
    revenue: '$850K/year',
    price: '$450,000',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    mpid: "502953ee-0faf-433a-b58c-f32790707fd4"
  }] as any[];
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
  if (showAllListings) {
    return <AllListings onBack={() => setShowAllListings(false)} savedListings={savedListings} onUpdateSavedListings={setSavedListings} bookmarkedIds={bookmarkedIds} onUpdateBookmarkedIds={setBookmarkedIds} isLoggedIn={isLoggedIn} userData={userData} onLogout={handleLogout} data-magicpath-id="0" data-magicpath-path="SoftexLanding.tsx" />;
  }
  return <SortableContainer dndKitId="d1039b3b-3eed-4491-bbde-d99e8fe207c6" containerType="regular" prevTag="div" className="min-h-screen bg-black text-white" data-magicpath-id="1" data-magicpath-path="SoftexLanding.tsx">
      <SortableContainer dndKitId="41aa0dbd-bfd7-4dbd-9941-cc95f65ce436" containerType="regular" prevTag="header" className="border-b border-gray-900 px-6 py-4" data-magicpath-id="2" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="9a0c215e-829f-48bc-88b4-25d08ea1e958" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="3" data-magicpath-path="SoftexLanding.tsx">
          <SortableContainer dndKitId="b302d776-81de-4117-9117-47af553cb0f3" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="4" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="fc93cd92-dfbc-48a5-b8db-0dc6f82b7d16" containerType="regular" prevTag="div" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center" data-magicpath-id="5" data-magicpath-path="SoftexLanding.tsx">
              <div className="w-6 h-6 border-2 border-white rounded" data-magicpath-id="6" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
            <span className="text-xl font-semibold" data-magicpath-id="7" data-magicpath-path="SoftexLanding.tsx">Softex</span>
          </SortableContainer>
          <SortableContainer dndKitId="175620bc-4f08-48b2-b7f7-1459346d51b7" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="8" data-magicpath-path="SoftexLanding.tsx">
            {isLoggedIn && userData ? <SortableContainer dndKitId="4547cf5f-d71c-4c8e-ac66-fa54975746ed" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="9" data-magicpath-path="SoftexLanding.tsx">
                <SortableContainer dndKitId="db7631d3-f33e-4c93-97ef-dfeb6d66a072" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="10" data-magicpath-path="SoftexLanding.tsx">
                  {userData.profilePicture ? <img src={userData.profilePicture} alt={userData.firstName} className="w-10 h-10 rounded-full object-cover border-2 border-blue-600" data-magicpath-id="11" data-magicpath-path="SoftexLanding.tsx" /> : <SortableContainer dndKitId="71e5449c-0932-4124-beaa-f7a99fdca0be" containerType="regular" prevTag="div" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center" data-magicpath-id="12" data-magicpath-path="SoftexLanding.tsx">
                      <User className="w-5 h-5 text-white" data-magicpath-id="13" data-magicpath-path="SoftexLanding.tsx" />
                    </SortableContainer>}
                  <span className="text-white font-medium" data-magicpath-id="14" data-magicpath-path="SoftexLanding.tsx">{userData.firstName}</span>
                </SortableContainer>
              </SortableContainer> : <>
                <button onClick={() => setShowLogin(true)} className="text-gray-300 hover:text-white px-4 py-2" data-magicpath-id="15" data-magicpath-path="SoftexLanding.tsx">
                  Login
                </button>
                <button onClick={() => setShowSignup(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium" data-magicpath-id="16" data-magicpath-path="SoftexLanding.tsx">
                  Sign Up
                </button>
              </>}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="64df55a3-10e1-4a00-af1c-db9188b6055e" containerType="regular" prevTag="main" className="max-w-[1400px] mx-auto px-6" data-magicpath-id="17" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="2eeffb4a-4e5b-421f-be40-60c8262a0afe" containerType="regular" prevTag="section" className="py-16" data-magicpath-id="18" data-magicpath-path="SoftexLanding.tsx">
          <h1 className="text-6xl font-bold text-center mb-12" data-magicpath-id="19" data-magicpath-path="SoftexLanding.tsx">
            Find your next investment
          </h1>

          <SortableContainer dndKitId="3ae1d6b0-de0c-4038-a081-b788b9e7bb7a" containerType="regular" prevTag="div" className="flex items-center gap-4 max-w-4xl mx-auto mb-20" data-magicpath-id="20" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="7afcc227-163c-44b5-a3dc-4e62c195864b" containerType="regular" prevTag="div" className="flex-1 relative" data-magicpath-id="21" data-magicpath-path="SoftexLanding.tsx">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" data-magicpath-id="22" data-magicpath-path="SoftexLanding.tsx" />
              <input type="text" placeholder="Search for businesses, industries, or locations..." className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" data-magicpath-id="23" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="1f66ef8c-c9b6-40a4-a2fb-bcb0fd36568e" containerType="regular" prevTag="button" onClick={() => setShowAIAdvisor(true)} className="bg-transparent hover:bg-gray-900/50 rounded-xl p-4 transition-colors" data-magicpath-id="24" data-magicpath-path="SoftexLanding.tsx">
              <Sparkles className="w-6 h-6 text-white" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="6e49d89d-2155-4f7d-9422-22d2bc62cc0d" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="25" data-magicpath-path="SoftexLanding.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="26" data-magicpath-path="SoftexLanding.tsx">Listings</h2>
            <SortableContainer dndKitId="b3e13d72-2cd2-4b11-bd56-cda54ebc3abb" containerType="regular" prevTag="button" onClick={() => setShowAllListings(true)} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" data-magicpath-id="27" data-magicpath-path="SoftexLanding.tsx">
              <ArrowRight className="w-5 h-5" data-magicpath-id="28" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="9924dc23-aa3c-439e-b20d-43bcfb48a2c2" containerType="collection" prevTag="div" className="grid grid-cols-2 gap-6 mb-20" data-magicpath-id="29" data-magicpath-path="SoftexLanding.tsx">
            {listings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="SoftexLanding.tsx">
                <div className="relative h-64" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="SoftexLanding.tsx">
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="32" data-magicpath-path="SoftexLanding.tsx" />
                  
                  <button onClick={e => {
                e.stopPropagation();
                handleBookmark(listing);
              }} className="absolute top-4 left-4 w-9 h-9 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="SoftexLanding.tsx">
                    <Star className={`w-5 h-5 ${bookmarkedIds.has(listing.id) ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="SoftexLanding.tsx" />
                  </button>
                  
                  <div className="absolute top-4 right-4 bg-[#0B1A33] px-5 py-2 rounded-full" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="SoftexLanding.tsx">
                    <span className="text-[#4169E1] font-bold text-lg" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="36" data-magicpath-path="SoftexLanding.tsx">
                      {listing.price}
                    </span>
                  </div>
                </div>
                <div className="p-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="SoftexLanding.tsx">
                  <div className="text-[#4169E1] text-sm font-semibold mb-2 uppercase" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="38" data-magicpath-path="SoftexLanding.tsx">
                    {listing.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4169E1] transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="39" data-magicpath-path="SoftexLanding.tsx">
                    {listing.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="40" data-magicpath-path="SoftexLanding.tsx">
                    {listing.description}
                  </p>
                  <div className="flex justify-between items-center text-sm mb-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="SoftexLanding.tsx">
                    <div data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="SoftexLanding.tsx">
                      <span className="text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="SoftexLanding.tsx">Location:</span>
                      <span className="text-white ml-2 font-medium" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="location:unknown" data-magicpath-id="44" data-magicpath-path="SoftexLanding.tsx">{listing.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="SoftexLanding.tsx">
                    <div data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="SoftexLanding.tsx">
                      <span className="text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="SoftexLanding.tsx">Revenue:</span>
                      <span className="text-green-500 ml-2 font-semibold" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="revenue:unknown" data-magicpath-id="48" data-magicpath-path="SoftexLanding.tsx">{listing.revenue}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="SoftexLanding.tsx">
                    View Details
                  </button>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="995704fe-6fe1-4893-8ede-c7ed321b8b5e" containerType="regular" prevTag="footer" className="border-t border-gray-900 py-12" data-magicpath-id="50" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="197377c5-dee3-41fa-965b-7b16b8ba5bdd" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto px-6" data-magicpath-id="51" data-magicpath-path="SoftexLanding.tsx">
          <SortableContainer dndKitId="082d73cb-d196-4382-a515-ad0f3488d5c6" containerType="regular" prevTag="div" className="grid grid-cols-4 gap-12 mb-12" data-magicpath-id="52" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="fc8443ec-8f1b-46bf-acd6-bc5aab36d705" containerType="regular" prevTag="div" data-magicpath-id="53" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="54" data-magicpath-path="SoftexLanding.tsx">Company</h4>
              <SortableContainer dndKitId="3f20adec-b345-45a5-8835-b1d4bb96872c" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="55" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="56" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="57" data-magicpath-path="SoftexLanding.tsx">About Us</a>
                </li>
                <li data-magicpath-id="58" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="59" data-magicpath-path="SoftexLanding.tsx">Contact</a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="f177b0cf-d884-451b-bdc2-e8e24f0cc580" containerType="regular" prevTag="div" data-magicpath-id="60" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="61" data-magicpath-path="SoftexLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="78f1a5e9-14f8-4446-83ce-66f9b8ffd2f9" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="62" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="63" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="64" data-magicpath-path="SoftexLanding.tsx">Terms of Service</a>
                </li>
                <li data-magicpath-id="65" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="66" data-magicpath-path="SoftexLanding.tsx">Privacy Policy</a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="a2a1272e-4453-4bd2-bbc5-cdaa387212cb" containerType="regular" prevTag="div" data-magicpath-id="67" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="68" data-magicpath-path="SoftexLanding.tsx">Support</h4>
              <SortableContainer dndKitId="6f90ee21-661f-40af-867f-efe4f15dc7a1" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="69" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="70" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="71" data-magicpath-path="SoftexLanding.tsx">Help Center</a>
                </li>
                <li data-magicpath-id="72" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="73" data-magicpath-path="SoftexLanding.tsx">FAQ's</a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="e2a964c1-7701-43dc-9cc7-6e5925d83fae" containerType="regular" prevTag="div" data-magicpath-id="74" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="75" data-magicpath-path="SoftexLanding.tsx">Follow Us</h4>
              <SortableContainer dndKitId="62c60be7-9fe1-4720-b04e-c71a2d32f01e" containerType="regular" prevTag="div" className="flex gap-3" data-magicpath-id="76" data-magicpath-path="SoftexLanding.tsx">
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="77" data-magicpath-path="SoftexLanding.tsx">
                  <Instagram className="w-5 h-5" data-magicpath-id="78" data-magicpath-path="SoftexLanding.tsx" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="79" data-magicpath-path="SoftexLanding.tsx">
                  <Twitter className="w-5 h-5" data-magicpath-id="80" data-magicpath-path="SoftexLanding.tsx" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="81" data-magicpath-path="SoftexLanding.tsx">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" data-magicpath-id="82" data-magicpath-path="SoftexLanding.tsx">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" data-magicpath-id="83" data-magicpath-path="SoftexLanding.tsx" />
                  </svg>
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-900" data-magicpath-id="84" data-magicpath-path="SoftexLanding.tsx">
            © 2024 Softex. All rights reserved.
          </div>
        </SortableContainer>
      </SortableContainer>

      {/* Panels and Modals */}
      <AIAdvisorPanel isOpen={showAIAdvisor} onClose={() => setShowAIAdvisor(false)} onLogout={handleLogout} data-magicpath-id="85" data-magicpath-path="SoftexLanding.tsx" />
      <MenuPanel isOpen={showMenu} onClose={() => setShowMenu(false)} savedListings={savedListings} data-magicpath-id="86" data-magicpath-path="SoftexLanding.tsx" />
      <LoginScreen isOpen={showLogin} onClose={() => setShowLogin(false)} onSwitchToSignup={() => {
      setShowLogin(false);
      setShowSignup(true);
    }} onLoginSuccess={handleLoginSuccess} data-magicpath-id="87" data-magicpath-path="SoftexLanding.tsx" />
      <SignupScreen isOpen={showSignup} onClose={() => setShowSignup(false)} onSwitchToLogin={() => {
      setShowSignup(false);
      setShowLogin(true);
    }} onSignupSuccess={handleSignupSuccess} data-magicpath-id="88" data-magicpath-path="SoftexLanding.tsx" />
    </SortableContainer>;
};