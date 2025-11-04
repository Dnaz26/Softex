"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Menu as MenuIcon, MapPin, DollarSign, TrendingUp, Star, User } from 'lucide-react';
import { AIAdvisorPanel } from './AIAdvisorPanel';
import { MenuPanel } from './MenuPanel';
type AllListingsProps = {
  onBack: () => void;
  savedListings: any[];
  onUpdateSavedListings: (listings: any[]) => void;
  bookmarkedIds: Set<number>;
  onUpdateBookmarkedIds: (ids: Set<number>) => void;
  isLoggedIn?: boolean;
  userData?: {
    firstName: string;
    profilePicture: string | null;
  } | null;
  onLogout?: () => void;
};

// @component: AllListings
export const AllListings = ({
  onBack,
  savedListings,
  onUpdateSavedListings,
  bookmarkedIds,
  onUpdateBookmarkedIds,
  isLoggedIn = false,
  userData = null,
  onLogout
}: AllListingsProps) => {
  const [showAIAdvisor, setShowAIAdvisor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const listings = [{
    id: 1,
    title: 'The Artisan Cafe',
    category: 'COFFEE & TEA',
    description: 'Established coffee shop with loyal customer base and prime downtown location',
    location: 'Downtown District',
    revenue: '$500K/year',
    margin: '25%',
    price: '$250,000',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    mpid: "83b1e9c4-1c7d-450c-9ad2-ff37a10fe218"
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
    mpid: "723d6308-8a39-4fbc-82f6-a0c10dc1b669"
  }, {
    id: 3,
    title: 'FitZone Gym',
    category: 'FITNESS',
    description: 'Modern fitness center with 500+ active members and top equipment',
    location: 'Suburban Center',
    revenue: '$650K/year',
    margin: '28%',
    price: '$380,000',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    mpid: "25f7e0cf-7a70-464a-a36b-40b023493b64"
  }, {
    id: 4,
    title: 'Tech Repair Hub',
    category: 'TECHNOLOGY',
    description: 'Leading tech repair service with strong online presence and contracts',
    location: 'Tech District',
    revenue: '$320K/year',
    margin: '35%',
    price: '$175,000',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
    mpid: "605c68a0-9fee-478f-8334-c2047b57a1fe"
  }, {
    id: 5,
    title: 'Green Leaf Nursery',
    category: 'RETAIL',
    description: 'Established plant nursery with wholesale and retail operations',
    location: 'Garden District',
    revenue: '$420K/year',
    margin: '22%',
    price: '$220,000',
    image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800&q=80',
    mpid: "b2f76361-7123-479b-a259-8af24c7beebb"
  }, {
    id: 6,
    title: 'BookHaven Store',
    category: 'RETAIL',
    description: 'Cozy bookstore with cafe, events space, and loyal community following',
    location: 'Arts District',
    revenue: '$480K/year',
    margin: '20%',
    price: '$295,000',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
    mpid: "579d35eb-f6f0-4c9c-bf96-f7e64e80558f"
  }] as any[];
  const handleBookmark = (listing: any) => {
    const newBookmarkedIds = new Set(bookmarkedIds);
    if (bookmarkedIds.has(listing.id)) {
      newBookmarkedIds.delete(listing.id);
      onUpdateSavedListings(savedListings.filter(item => item.id !== listing.id));
    } else {
      newBookmarkedIds.add(listing.id);
      onUpdateSavedListings([...savedListings, listing]);
    }
    onUpdateBookmarkedIds(newBookmarkedIds);
  };
  return <SortableContainer dndKitId="f78d6a9f-875e-4157-804b-fc4407dbd92a" containerType="regular" prevTag="div" className="min-h-screen bg-black text-white" data-magicpath-id="0" data-magicpath-path="AllListings.tsx">
      {/* Header */}
      <SortableContainer dndKitId="400deef7-6d30-4f49-be6a-64147bc3e123" containerType="regular" prevTag="header" className="border-b border-gray-900 px-6 py-4" data-magicpath-id="1" data-magicpath-path="AllListings.tsx">
        <SortableContainer dndKitId="2f8e43ee-e801-4dff-bf19-753609ccefdb" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="AllListings.tsx">
          <SortableContainer dndKitId="63a92381-cfed-4be3-854e-5bb45df559bc" containerType="regular" prevTag="button" onClick={onBack} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="3" data-magicpath-path="AllListings.tsx">
            <ArrowLeft className="w-6 h-6" data-magicpath-id="4" data-magicpath-path="AllListings.tsx" />
          </SortableContainer>

          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2" data-magicpath-id="5" data-magicpath-path="AllListings.tsx">All Listings</h1>

          <SortableContainer dndKitId="e968ba16-6051-4bb3-9eb5-97f0c56bd4c7" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="6" data-magicpath-path="AllListings.tsx">
            <SortableContainer dndKitId="81fb6a68-ff0e-4ee5-be8a-9fd99fb158fe" containerType="regular" prevTag="button" onClick={() => setShowAIAdvisor(true)} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="7" data-magicpath-path="AllListings.tsx">
              <Sparkles className="w-6 h-6 text-white" />
            </SortableContainer>
            
            {isLoggedIn && userData ? <SortableContainer dndKitId="d3436603-76a8-433b-8c8b-f52a13b260ad" containerType="regular" prevTag="div" className="flex items-center gap-2 ml-2" data-magicpath-id="8" data-magicpath-path="AllListings.tsx">
                {userData.profilePicture ? <img src={userData.profilePicture} alt={userData.firstName} className="w-10 h-10 rounded-full object-cover border-2 border-blue-600" data-magicpath-id="9" data-magicpath-path="AllListings.tsx" /> : <SortableContainer dndKitId="4b481c52-e199-4e4c-b5b6-e9e5b7ee8322" containerType="regular" prevTag="div" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center" data-magicpath-id="10" data-magicpath-path="AllListings.tsx">
                    <User className="w-5 h-5 text-white" data-magicpath-id="11" data-magicpath-path="AllListings.tsx" />
                  </SortableContainer>}
                <span className="text-white font-medium" data-magicpath-id="12" data-magicpath-path="AllListings.tsx">{userData.firstName}</span>
              </SortableContainer> : null}

            <SortableContainer dndKitId="ba426e20-c423-495a-a4a7-e70dc46292f2" containerType="regular" prevTag="button" onClick={() => setShowMenu(true)} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="13" data-magicpath-path="AllListings.tsx">
              <MenuIcon className="w-6 h-6" data-magicpath-id="14" data-magicpath-path="AllListings.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Main Content */}
      <SortableContainer dndKitId="73108771-a10e-4455-900c-abfd197f8c18" containerType="regular" prevTag="main" className="max-w-[1400px] mx-auto px-6 py-8" data-magicpath-id="15" data-magicpath-path="AllListings.tsx">
        <SortableContainer dndKitId="435616ea-314e-41ee-9eb8-0c2331229381" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="16" data-magicpath-path="AllListings.tsx">
          {listings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="AllListings.tsx">
              {/* Image */}
              <div className="relative h-56" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="AllListings.tsx">
                <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="19" data-magicpath-path="AllListings.tsx" />

                {/* Star Icon */}
                <button onClick={e => {
              e.stopPropagation();
              handleBookmark(listing);
            }} className="absolute top-3 left-3 w-9 h-9 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="AllListings.tsx">
                  <Star className={`w-5 h-5 ${bookmarkedIds.has(listing.id) ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="AllListings.tsx" />
                </button>

                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-[#0B1A33] px-4 py-2 rounded-full" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="AllListings.tsx">
                  <span className="text-[#4169E1] font-bold text-lg" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="23" data-magicpath-path="AllListings.tsx">{listing.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="AllListings.tsx">
                <div className="text-[#4169E1] text-xs font-bold mb-2 uppercase tracking-wide" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="25" data-magicpath-path="AllListings.tsx">
                  {listing.category}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#4169E1] transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="26" data-magicpath-path="AllListings.tsx">
                  {listing.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="27" data-magicpath-path="AllListings.tsx">{listing.description}</p>

                {/* Stats */}
                <div className="space-y-2 mb-5" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="AllListings.tsx">
                  <div className="flex items-center gap-2 text-sm" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="AllListings.tsx">
                    <MapPin className="w-4 h-4 text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="AllListings.tsx" />
                    <span className="text-gray-300" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="location:unknown" data-magicpath-id="31" data-magicpath-path="AllListings.tsx">{listing.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="AllListings.tsx">
                    <DollarSign className="w-4 h-4 text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="AllListings.tsx" />
                    <span className="text-green-500 font-semibold" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="revenue:unknown" data-magicpath-id="34" data-magicpath-path="AllListings.tsx">{listing.revenue}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="AllListings.tsx">
                    <TrendingUp className="w-4 h-4 text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="AllListings.tsx" />
                    <span className="text-gray-300" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="margin:unknown" data-magicpath-id="37" data-magicpath-path="AllListings.tsx">Margin: {listing.margin}</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="AllListings.tsx">
                  View Details
                </button>
              </div>
            </div>)}
        </SortableContainer>
      </SortableContainer>

      {/* Panels */}
      <AIAdvisorPanel isOpen={showAIAdvisor} onClose={() => setShowAIAdvisor(false)} onLogout={onLogout} data-magicpath-id="39" data-magicpath-path="AllListings.tsx" />
      <MenuPanel isOpen={showMenu} onClose={() => setShowMenu(false)} savedListings={savedListings} data-magicpath-id="40" data-magicpath-path="AllListings.tsx" />
    </SortableContainer>;
};