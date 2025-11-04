"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
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
      expenses: 28000,
      mpid: "717e80ad-1f4c-4f41-8c63-948ffb7d0dfb"
    }, {
      month: 'Feb',
      revenue: 45000,
      expenses: 29000,
      mpid: "27b191e8-b3a2-43a1-aaa0-a69673611bcc"
    }, {
      month: 'Mar',
      revenue: 48000,
      expenses: 30000,
      mpid: "bc689bb5-1cd9-425d-b8dd-dd0d1d444de5"
    }, {
      month: 'Apr',
      revenue: 52000,
      expenses: 31000,
      mpid: "9e91fcdf-b556-4712-ad36-4b5f6c8cad1d"
    }, {
      month: 'May',
      revenue: 55000,
      expenses: 32000,
      mpid: "034e5dcf-57f4-4be4-86e4-20683067104b"
    }, {
      month: 'Jun',
      revenue: 58000,
      expenses: 33000,
      mpid: "05a6fe70-e16e-4aaf-9ee5-8ee5f3b09dbb"
    }],
    trafficData: [{
      day: 'Mon',
      customers: 120,
      mpid: "9400b368-cb92-493f-b410-522b3062e839"
    }, {
      day: 'Tue',
      customers: 135,
      mpid: "1b9ccc34-aebc-4faa-adc8-d329ae5c50c3"
    }, {
      day: 'Wed',
      customers: 140,
      mpid: "1499d627-63c5-4666-9abe-974d937f45a7"
    }, {
      day: 'Thu',
      customers: 155,
      mpid: "684dae1c-713f-4e57-a585-a8427cea2c9b"
    }, {
      day: 'Fri',
      customers: 200,
      mpid: "f946f161-fff9-4c62-b7a8-967a5e904857"
    }, {
      day: 'Sat',
      customers: 250,
      mpid: "06b509af-c070-4d2c-9431-bdd9b4e52d6a"
    }, {
      day: 'Sun',
      customers: 180,
      mpid: "45a4977e-ea66-4b73-b731-9bed6b8d2e8b"
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 60,
      mpid: "99778a07-f23f-4b81-bb66-a332d792280d"
    }, {
      name: 'Services',
      value: 25,
      mpid: "db4a7ddc-0d59-4389-bbba-d64b9fb3648f"
    }, {
      name: 'Other',
      value: 15,
      mpid: "e1c4ff03-c334-4889-befa-d6a111d3440c"
    }],
    growthData: [{
      month: 'Jan',
      revenue: 42000,
      mpid: "4091aaee-c9e7-4e36-83bd-1ef8e9eb7ecd"
    }, {
      month: 'Feb',
      revenue: 45000,
      mpid: "f9c3f9be-b9ad-4f1c-b471-371df0b28d76"
    }, {
      month: 'Mar',
      revenue: 48000,
      mpid: "133b916d-1216-46d6-b285-7d5ad737b173"
    }, {
      month: 'Apr',
      revenue: 52000,
      mpid: "b7d7d46e-c1a0-4aa0-8078-d0f9c584734e"
    }, {
      month: 'May',
      revenue: 55000,
      mpid: "7ded25f5-f2e3-4089-bafd-b3b3b7dcd29e"
    }, {
      month: 'Jun',
      revenue: 58000,
      mpid: "1f21673c-cf66-47d4-b32c-204849b414be"
    }],
    highlights: ['Prime downtown location with high foot traffic', 'Loyal customer base with 70% repeat customers', 'Exclusive roasting partnerships', 'Modern equipment fully maintained', 'Strong social media presence with 15K+ followers', 'Excellent online reviews (4.8/5 stars)'],
    assets: ['Commercial espresso machines and equipment', 'Furniture and interior decor', 'Point of sale system', 'Inventory management software', 'Customer loyalty program database', 'Trademark and branding materials'],
    mpid: "11a4290a-f0b6-4211-8c38-497aec3c4f00"
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
      expenses: 48000,
      mpid: "31bc273b-9368-431b-bfd8-d33eaa1cc031"
    }, {
      month: 'Feb',
      revenue: 70000,
      expenses: 49000,
      mpid: "69157612-3915-4406-951c-9939b34e6056"
    }, {
      month: 'Mar',
      revenue: 72000,
      expenses: 50000,
      mpid: "decccad8-d7a0-4860-9dfa-6927089a08de"
    }, {
      month: 'Apr',
      revenue: 75000,
      expenses: 52000,
      mpid: "b2579f73-c8a8-436c-a0ea-9f54cf0e1c1e"
    }, {
      month: 'May',
      revenue: 78000,
      expenses: 54000,
      mpid: "cd000529-7368-4607-a632-191ca2d1af93"
    }, {
      month: 'Jun',
      revenue: 82000,
      expenses: 56000,
      mpid: "1749caed-33c7-4855-b605-d53ff3586a86"
    }],
    trafficData: [{
      day: 'Mon',
      customers: 110,
      mpid: "9e7925a6-d458-48eb-b150-9a8d354c7429"
    }, {
      day: 'Tue',
      customers: 125,
      mpid: "bca8dc64-40b5-442d-88c1-f05c5dbc4196"
    }, {
      day: 'Wed',
      customers: 135,
      mpid: "bf4d578b-b535-4278-a1db-e10913bbfe66"
    }, {
      day: 'Thu',
      customers: 150,
      mpid: "400b45b6-9904-4c99-8d03-dd17deab48e7"
    }, {
      day: 'Fri',
      customers: 195,
      mpid: "d8d80b3f-c2a5-49e9-8a0a-caacee58fbe1"
    }, {
      day: 'Sat',
      customers: 245,
      mpid: "61ee7577-b253-4642-a6d6-b40c47af5908"
    }, {
      day: 'Sun',
      customers: 175,
      mpid: "b0875d68-79be-4048-bd84-d01cee44a583"
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 60,
      mpid: "9c338e00-7539-41a4-8e97-21d4dca36e3d"
    }, {
      name: 'Services',
      value: 25,
      mpid: "0888539e-4a32-4652-9b90-65aaf937223d"
    }, {
      name: 'Other',
      value: 15,
      mpid: "8f7d7f1f-e16b-46e1-938a-69bfa72ad2db"
    }],
    growthData: [{
      month: 'Jan',
      revenue: 68000,
      mpid: "dd22e1bd-4162-41ed-9597-0fc2d6786f44"
    }, {
      month: 'Feb',
      revenue: 70000,
      mpid: "f9b0055b-1959-42b7-b8ec-d946309fecbb"
    }, {
      month: 'Mar',
      revenue: 72000,
      mpid: "77ff1527-73cc-43b7-92a4-4aaba19b699d"
    }, {
      month: 'Apr',
      revenue: 75000,
      mpid: "c205edd1-6f26-46c5-8f8b-d459a8041bd9"
    }, {
      month: 'May',
      revenue: 78000,
      mpid: "fd5d9aca-175a-4ab3-ac4e-ac456504d8a7"
    }, {
      month: 'Jun',
      revenue: 82000,
      mpid: "6fc71c54-39bb-4209-806f-a56f1a5034ab"
    }],
    highlights: ['Established brand with 8+ years of operation', 'Exclusive family recipes and menu', 'Full liquor license included', 'Seating capacity of 80 guests', 'Strong catering and events business', 'Excellent online reviews and reputation'],
    assets: ['Commercial kitchen equipment', 'Dining room furniture and decor', 'Liquor license', 'POS and reservation system', 'Wine inventory', 'Recipes and operational procedures'],
    mpid: "46309422-d739-470f-80f6-9a668947229b"
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
  return <SortableContainer dndKitId="b75d3d38-5336-4a0c-9619-17842acd7c5c" containerType="regular" prevTag="div" className="min-h-screen bg-black text-white" data-magicpath-id="2" data-magicpath-path="SoftexLanding.tsx">
      <SortableContainer dndKitId="09225b51-f2cf-40e8-ac49-dc72344532d9" containerType="regular" prevTag="header" className="border-b border-gray-900 px-6 py-4" data-magicpath-id="3" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="fb1ee93d-929c-47ff-95aa-39f561337149" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="4" data-magicpath-path="SoftexLanding.tsx">
          <SortableContainer dndKitId="0a043492-b86d-435a-b1ec-ec8337299603" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="5" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="ac31daa3-d915-444f-88d6-171f43be80b3" containerType="regular" prevTag="div" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center" data-magicpath-id="6" data-magicpath-path="SoftexLanding.tsx">
              <div className="w-6 h-6 border-2 border-white rounded" data-magicpath-id="7" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
            <span className="text-xl font-semibold" data-magicpath-id="8" data-magicpath-path="SoftexLanding.tsx">Softex</span>
          </SortableContainer>
          <SortableContainer dndKitId="4c9e313e-bb78-4cde-941a-ad4e7bda06e2" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="9" data-magicpath-path="SoftexLanding.tsx">
            {isLoggedIn && userData ? <SortableContainer dndKitId="3733ec35-01cf-45df-8697-45fd9a468e93" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="10" data-magicpath-path="SoftexLanding.tsx">
                <SortableContainer dndKitId="3f514926-ec28-404c-b4f7-db06d1495403" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="11" data-magicpath-path="SoftexLanding.tsx">
                  {userData.profilePicture ? <img src={userData.profilePicture} alt={userData.firstName} className="w-10 h-10 rounded-full object-cover border-2 border-blue-600" data-magicpath-id="12" data-magicpath-path="SoftexLanding.tsx" /> : <SortableContainer dndKitId="5bea226c-2c11-45d5-8735-7d3a11aacd0d" containerType="regular" prevTag="div" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center" data-magicpath-id="13" data-magicpath-path="SoftexLanding.tsx">
                      <User className="w-5 h-5 text-white" data-magicpath-id="14" data-magicpath-path="SoftexLanding.tsx" />
                    </SortableContainer>}
                  <span className="text-white font-medium" data-magicpath-id="15" data-magicpath-path="SoftexLanding.tsx">{userData.firstName}</span>
                </SortableContainer>
              </SortableContainer> : <>
                <button onClick={() => setShowLogin(true)} className="text-gray-300 hover:text-white px-4 py-2" data-magicpath-id="16" data-magicpath-path="SoftexLanding.tsx">
                  Login
                </button>
                <button onClick={() => setShowSignup(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium" data-magicpath-id="17" data-magicpath-path="SoftexLanding.tsx">
                  Sign Up
                </button>
              </>}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="da58fdf9-ecc8-46c3-9cb6-baf10eb7f819" containerType="regular" prevTag="main" className="max-w-[1400px] mx-auto px-6" data-magicpath-id="18" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="ada6ae39-6764-4380-b81c-fb912527a43d" containerType="regular" prevTag="section" className="py-16" data-magicpath-id="19" data-magicpath-path="SoftexLanding.tsx">
          <h1 className="text-6xl font-bold text-center mb-12" data-magicpath-id="20" data-magicpath-path="SoftexLanding.tsx">Find your next investment</h1>

          <SortableContainer dndKitId="dde916b3-a50e-42ee-bebc-1dc9b33819a7" containerType="regular" prevTag="div" className="flex items-center gap-4 max-w-4xl mx-auto mb-20" data-magicpath-id="21" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="e504755d-33c5-4d5e-aa45-28f5f9449b19" containerType="regular" prevTag="div" className="flex-1 relative" data-magicpath-id="22" data-magicpath-path="SoftexLanding.tsx">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" data-magicpath-id="23" data-magicpath-path="SoftexLanding.tsx" />
              <input type="text" placeholder="Search for businesses, industries, or locations..." className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" data-magicpath-id="24" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="57e4c8dc-a222-4d80-ab0c-dd8707f82e6c" containerType="regular" prevTag="button" onClick={() => setShowAIAdvisor(true)} className="bg-transparent hover:bg-gray-900/50 rounded-xl p-4 transition-colors" data-magicpath-id="25" data-magicpath-path="SoftexLanding.tsx">
              <Sparkles className="w-6 h-6 text-white" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="04b66d45-84e1-450c-828a-9b207e27aa84" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="26" data-magicpath-path="SoftexLanding.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="27" data-magicpath-path="SoftexLanding.tsx">Listings</h2>
            <SortableContainer dndKitId="85651b19-abab-4369-8bab-f3da8b17e907" containerType="regular" prevTag="button" onClick={() => setShowAllListings(true)} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" data-magicpath-id="28" data-magicpath-path="SoftexLanding.tsx">
              <ArrowRight className="w-5 h-5" data-magicpath-id="29" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="e01eafca-64d1-47e1-97d8-293591c41116" containerType="collection" prevTag="div" className="grid grid-cols-2 gap-6 mb-20" data-magicpath-id="30" data-magicpath-path="SoftexLanding.tsx">
            {listings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer" onClick={() => handleViewDetails(listing)} data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="SoftexLanding.tsx">
                <div className="relative h-64" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="SoftexLanding.tsx">
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="33" data-magicpath-path="SoftexLanding.tsx" />

                  <button onClick={e => {
                e.stopPropagation();
                handleBookmark(listing);
              }} className="absolute top-4 left-4 w-9 h-9 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="SoftexLanding.tsx">
                    <Star className={`w-5 h-5 ${bookmarkedIds.has(listing.id) ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="SoftexLanding.tsx" />
                  </button>

                  <div className="absolute top-4 right-4 bg-[#0B1A33] px-5 py-2 rounded-full" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="SoftexLanding.tsx">
                    <span className="text-[#4169E1] font-bold text-lg" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="37" data-magicpath-path="SoftexLanding.tsx">{listing.price}</span>
                  </div>
                </div>
                <div className="p-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="SoftexLanding.tsx">
                  <div className="text-[#4169E1] text-sm font-semibold mb-2 uppercase" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="39" data-magicpath-path="SoftexLanding.tsx">{listing.category}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4169E1] transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="40" data-magicpath-path="SoftexLanding.tsx">
                    {listing.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="41" data-magicpath-path="SoftexLanding.tsx">{listing.description}</p>
                  <div className="flex justify-between items-center text-sm mb-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="SoftexLanding.tsx">
                    <div data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="SoftexLanding.tsx">
                      <span className="text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="SoftexLanding.tsx">Location:</span>
                      <span className="text-white ml-2 font-medium" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="location:unknown" data-magicpath-id="45" data-magicpath-path="SoftexLanding.tsx">{listing.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="SoftexLanding.tsx">
                    <div data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="SoftexLanding.tsx">
                      <span className="text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="48" data-magicpath-path="SoftexLanding.tsx">Revenue:</span>
                      <span className="text-green-500 ml-2 font-semibold" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="revenue:unknown" data-magicpath-id="49" data-magicpath-path="SoftexLanding.tsx">{listing.revenue}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="SoftexLanding.tsx">
                    View Details
                  </button>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="bf54b45d-9f69-4bca-a482-49d2ccce19ba" containerType="regular" prevTag="footer" className="border-t border-gray-900 py-12" data-magicpath-id="51" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="bccaeac8-30e5-461b-965c-14f20c50fbe2" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto px-6" data-magicpath-id="52" data-magicpath-path="SoftexLanding.tsx">
          <SortableContainer dndKitId="53db52b6-3166-4421-a052-91633fb231e2" containerType="regular" prevTag="div" className="grid grid-cols-4 gap-12 mb-12" data-magicpath-id="53" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="e667e145-e6c6-49d6-bef9-a926520cc8ab" containerType="regular" prevTag="div" data-magicpath-id="54" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="55" data-magicpath-path="SoftexLanding.tsx">Company</h4>
              <SortableContainer dndKitId="35db5c96-5bd3-4576-9b88-68bebb1b82af" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="56" data-magicpath-path="SoftexLanding.tsx">
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
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="57962d92-7fa3-4dd6-b07e-2483b740d099" containerType="regular" prevTag="div" data-magicpath-id="61" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="62" data-magicpath-path="SoftexLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="6846f1c3-b67c-47a9-83a2-004e2eb62285" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="63" data-magicpath-path="SoftexLanding.tsx">
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
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="5b993694-8ef0-4fdf-9c3a-9f22cb35f403" containerType="regular" prevTag="div" data-magicpath-id="68" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="69" data-magicpath-path="SoftexLanding.tsx">Support</h4>
              <SortableContainer dndKitId="07eaba1c-fcc8-40c4-8e88-3ce161638c98" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="70" data-magicpath-path="SoftexLanding.tsx">
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
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="bee47888-b69f-4369-9afd-2a403b740df1" containerType="regular" prevTag="div" data-magicpath-id="75" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="76" data-magicpath-path="SoftexLanding.tsx">Follow Us</h4>
              <SortableContainer dndKitId="2cd145d1-4503-4fb5-ad01-1eb3adbcd762" containerType="regular" prevTag="div" className="flex gap-3" data-magicpath-id="77" data-magicpath-path="SoftexLanding.tsx">
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
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-900" data-magicpath-id="85" data-magicpath-path="SoftexLanding.tsx">
            © 2024 Softex. All rights reserved.
          </div>
        </SortableContainer>
      </SortableContainer>

      {/* Panels and Modals */}
      <AIAdvisorPanel isOpen={showAIAdvisor} onClose={() => setShowAIAdvisor(false)} onLogout={handleLogout} data-magicpath-id="86" data-magicpath-path="SoftexLanding.tsx" />
      <MenuPanel isOpen={showMenu} onClose={() => setShowMenu(false)} savedListings={savedListings} data-magicpath-id="87" data-magicpath-path="SoftexLanding.tsx" />
      <LoginScreen isOpen={showLogin} onClose={() => setShowLogin(false)} onSwitchToSignup={() => {
      setShowLogin(false);
      setShowSignup(true);
    }} onLoginSuccess={handleLoginSuccess} data-magicpath-id="88" data-magicpath-path="SoftexLanding.tsx" />
      <SignupScreen isOpen={showSignup} onClose={() => setShowSignup(false)} onSwitchToLogin={() => {
      setShowSignup(false);
      setShowLogin(true);
    }} onSignupSuccess={handleSignupSuccess} data-magicpath-id="89" data-magicpath-path="SoftexLanding.tsx" />
    </SortableContainer>;
};