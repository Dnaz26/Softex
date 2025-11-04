import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, Instagram, Twitter, Menu as MenuIcon, Star } from 'lucide-react';
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
  const listings = [{
    id: 1,
    title: 'The Artisan Cafe',
    category: 'COFFEE & TEA',
    description: 'Established coffee shop with loyal customer base and prime downtown location',
    location: 'Downtown District',
    revenue: '$500K/year',
    price: '$250,000',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    mpid: "8c92be5f-bb55-4094-93dc-eb9a957a2da9"
  }, {
    id: 2,
    title: 'Bella Italia Ristorante',
    category: 'RESTAURANT',
    description: 'Popular Italian restaurant with established brand and recipes',
    location: 'Midtown Area',
    revenue: '$850K/year',
    price: '$450,000',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    mpid: "ef61f3dc-a957-410e-bd3d-5a287dcae039"
  }] as any[];
  const handleBookmark = (listing: any) => {
    const newBookmarkedIds = new Set(bookmarkedIds);
    if (bookmarkedIds.has(listing.id)) {
      // Remove bookmark
      newBookmarkedIds.delete(listing.id);
      setSavedListings(savedListings.filter(item => item.id !== listing.id));
    } else {
      // Add bookmark
      newBookmarkedIds.add(listing.id);
      setSavedListings([...savedListings, listing]);
    }
    setBookmarkedIds(newBookmarkedIds);
  };
  if (showAllListings) {
    return <AllListings onBack={() => setShowAllListings(false)} savedListings={savedListings} onUpdateSavedListings={setSavedListings} bookmarkedIds={bookmarkedIds} onUpdateBookmarkedIds={setBookmarkedIds} data-magicpath-id="0" data-magicpath-path="SoftexLanding.tsx" />;
  }
  return <SortableContainer dndKitId="bef144d6-a926-43af-8cd7-de416276419f" containerType="regular" prevTag="div" className="min-h-screen bg-black text-white" data-magicpath-id="1" data-magicpath-path="SoftexLanding.tsx">
      <SortableContainer dndKitId="b65d0fd2-95d7-432a-85ea-e29457234e75" containerType="regular" prevTag="header" className="border-b border-gray-900 px-6 py-4" data-magicpath-id="2" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="fcaeec75-0da3-4468-b715-e52d33db9b05" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="3" data-magicpath-path="SoftexLanding.tsx">
          <SortableContainer dndKitId="8fea77c8-a6f3-4562-958c-98306e68c922" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="4" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="00ef0384-20ee-4092-bbdf-721a72735258" containerType="regular" prevTag="div" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center" data-magicpath-id="5" data-magicpath-path="SoftexLanding.tsx">
              <div className="w-6 h-6 border-2 border-white rounded" data-magicpath-id="6" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
            <span className="text-xl font-semibold" data-magicpath-id="7" data-magicpath-path="SoftexLanding.tsx">Softex</span>
          </SortableContainer>
          <SortableContainer dndKitId="b39af6bd-b2c5-49ee-8b17-505b97d9d142" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="8" data-magicpath-path="SoftexLanding.tsx">
            <button onClick={() => setShowLogin(true)} className="text-gray-300 hover:text-white px-4 py-2" data-magicpath-id="9" data-magicpath-path="SoftexLanding.tsx">
              Login
            </button>
            <button onClick={() => setShowSignup(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium" data-magicpath-id="10" data-magicpath-path="SoftexLanding.tsx">
              Sign Up
            </button>
            <SortableContainer dndKitId="35329a11-5722-4a76-8953-1ccd849afef6" containerType="regular" prevTag="button" onClick={() => setShowMenu(true)} className="ml-2 w-10 h-10 flex items-center justify-center hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="11" data-magicpath-path="SoftexLanding.tsx">
              <MenuIcon className="w-6 h-6" data-magicpath-id="12" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="9b40ecd0-8cb4-42db-8e12-0fa916d2b6d1" containerType="regular" prevTag="main" className="max-w-[1400px] mx-auto px-6" data-magicpath-id="13" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="884a5db8-b65b-4c2b-af38-69f059e3a0a9" containerType="regular" prevTag="section" className="py-16" data-magicpath-id="14" data-magicpath-path="SoftexLanding.tsx">
          <h1 className="text-6xl font-bold text-center mb-12" data-magicpath-id="15" data-magicpath-path="SoftexLanding.tsx">
            Find your next investment
          </h1>

          <SortableContainer dndKitId="5085f452-faa7-45de-b338-10e11378cf17" containerType="regular" prevTag="div" className="flex items-center gap-4 max-w-4xl mx-auto mb-20" data-magicpath-id="16" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="07279794-c66d-4ce9-8018-a79b1acedffc" containerType="regular" prevTag="div" className="flex-1 relative" data-magicpath-id="17" data-magicpath-path="SoftexLanding.tsx">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" data-magicpath-id="18" data-magicpath-path="SoftexLanding.tsx" />
              <input type="text" placeholder="Search for businesses, industries, or locations..." className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" data-magicpath-id="19" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="dd2a0265-1ece-4235-93ac-25e542135c94" containerType="regular" prevTag="button" onClick={() => setShowAIAdvisor(true)} className="bg-transparent border border-gray-800 rounded-xl p-4 hover:bg-gray-900 transition-colors" data-magicpath-id="20" data-magicpath-path="SoftexLanding.tsx">
              <Sparkles className="w-5 h-5 text-transparent" strokeOpacity={0.5} stroke="currentColor" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="75aeb9b7-91af-47fa-9cff-2eb422d388d2" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="21" data-magicpath-path="SoftexLanding.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="22" data-magicpath-path="SoftexLanding.tsx">Listings</h2>
            <SortableContainer dndKitId="611235e0-2f7a-4e40-8bc9-24f132bfef7e" containerType="regular" prevTag="button" onClick={() => setShowAllListings(true)} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" data-magicpath-id="23" data-magicpath-path="SoftexLanding.tsx">
              <ArrowRight className="w-5 h-5" data-magicpath-id="24" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="f257ab20-0326-4896-83af-9621b21003bb" containerType="collection" prevTag="div" className="grid grid-cols-2 gap-6 mb-20" data-magicpath-id="25" data-magicpath-path="SoftexLanding.tsx">
            {listings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="SoftexLanding.tsx">
                <div className="relative h-64" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="SoftexLanding.tsx">
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:string" data-magicpath-id="28" data-magicpath-path="SoftexLanding.tsx" />
                  
                  {/* Star Icon */}
                  <button onClick={e => {
                e.stopPropagation();
                handleBookmark(listing);
              }} className="absolute top-4 left-4 w-9 h-9 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="SoftexLanding.tsx">
                    <Star className={`w-5 h-5 ${bookmarkedIds.has(listing.id) ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="SoftexLanding.tsx" />
                  </button>
                  
                  <div className="absolute top-4 right-4 bg-[#0B1A33] px-5 py-2 rounded-full" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="SoftexLanding.tsx">
                    <span className="text-[#4169E1] font-bold text-lg" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:string" data-magicpath-id="32" data-magicpath-path="SoftexLanding.tsx">
                      {listing.price}
                    </span>
                  </div>
                </div>
                <div className="p-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="SoftexLanding.tsx">
                  <div className="text-[#4169E1] text-sm font-semibold mb-2 uppercase" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:string" data-magicpath-id="34" data-magicpath-path="SoftexLanding.tsx">
                    {listing.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4169E1] transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="35" data-magicpath-path="SoftexLanding.tsx">
                    {listing.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="36" data-magicpath-path="SoftexLanding.tsx">
                    {listing.description}
                  </p>
                  <div className="flex justify-between items-center text-sm mb-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="SoftexLanding.tsx">
                    <div data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="SoftexLanding.tsx">
                      <span className="text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="SoftexLanding.tsx">Location:</span>
                      <span className="text-white ml-2 font-medium" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="location:string" data-magicpath-id="40" data-magicpath-path="SoftexLanding.tsx">{listing.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="SoftexLanding.tsx">
                    <div data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="SoftexLanding.tsx">
                      <span className="text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="SoftexLanding.tsx">Revenue:</span>
                      <span className="text-green-500 ml-2 font-semibold" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="revenue:string" data-magicpath-id="44" data-magicpath-path="SoftexLanding.tsx">{listing.revenue}</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="SoftexLanding.tsx">
                    View Details
                  </button>
                </div>
              </div>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="6ff8424e-776a-4563-8d34-8ff696c236a8" containerType="regular" prevTag="footer" className="border-t border-gray-900 py-12" data-magicpath-id="46" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="31449f2e-b3e9-4dc4-8001-1e903450be37" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto px-6" data-magicpath-id="47" data-magicpath-path="SoftexLanding.tsx">
          <SortableContainer dndKitId="ce0089c5-1307-48a0-b8c6-60f54c8c0e26" containerType="regular" prevTag="div" className="grid grid-cols-4 gap-12 mb-12" data-magicpath-id="48" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="6eafefdb-2c03-475b-8c20-4eb9f9ec1124" containerType="regular" prevTag="div" data-magicpath-id="49" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="50" data-magicpath-path="SoftexLanding.tsx">Company</h4>
              <SortableContainer dndKitId="05bfca7f-b946-428a-bb66-599d9e92695f" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="51" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="52" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="53" data-magicpath-path="SoftexLanding.tsx">About Us</a>
                </li>
                <li data-magicpath-id="54" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="55" data-magicpath-path="SoftexLanding.tsx">Contact</a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="8ac9ec3b-9219-40a8-a30b-e730e46eae6a" containerType="regular" prevTag="div" data-magicpath-id="56" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="57" data-magicpath-path="SoftexLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="7348e66a-b743-4a68-aed8-63844aac804a" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="58" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="59" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="60" data-magicpath-path="SoftexLanding.tsx">Terms of Service</a>
                </li>
                <li data-magicpath-id="61" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="62" data-magicpath-path="SoftexLanding.tsx">Privacy Policy</a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="54717b2f-caf3-46d1-9bd3-0fe7f82bad8d" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="64" data-magicpath-path="SoftexLanding.tsx">Support</h4>
              <SortableContainer dndKitId="1ca15cc7-2355-4f4e-9ed0-02edc9ae4932" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="65" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="66" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="67" data-magicpath-path="SoftexLanding.tsx">Help Center</a>
                </li>
                <li data-magicpath-id="68" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="69" data-magicpath-path="SoftexLanding.tsx">FAQ's</a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="4f30e4e8-3cc7-4ad8-a7fa-ba2a22b40633" containerType="regular" prevTag="div" data-magicpath-id="70" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="71" data-magicpath-path="SoftexLanding.tsx">Follow Us</h4>
              <SortableContainer dndKitId="39b9e614-215f-4859-8273-0b98b88b77a5" containerType="regular" prevTag="div" className="flex gap-3" data-magicpath-id="72" data-magicpath-path="SoftexLanding.tsx">
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="73" data-magicpath-path="SoftexLanding.tsx">
                  <Instagram className="w-5 h-5" data-magicpath-id="74" data-magicpath-path="SoftexLanding.tsx" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="75" data-magicpath-path="SoftexLanding.tsx">
                  <Twitter className="w-5 h-5" data-magicpath-id="76" data-magicpath-path="SoftexLanding.tsx" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="77" data-magicpath-path="SoftexLanding.tsx">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" data-magicpath-id="78" data-magicpath-path="SoftexLanding.tsx">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" data-magicpath-id="79" data-magicpath-path="SoftexLanding.tsx" />
                  </svg>
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-900" data-magicpath-id="80" data-magicpath-path="SoftexLanding.tsx">
            © 2024 Softex. All rights reserved.
          </div>
        </SortableContainer>
      </SortableContainer>

      {/* Panels and Modals */}
      <AIAdvisorPanel isOpen={showAIAdvisor} onClose={() => setShowAIAdvisor(false)} data-magicpath-id="81" data-magicpath-path="SoftexLanding.tsx" />
      <MenuPanel isOpen={showMenu} onClose={() => setShowMenu(false)} savedListings={savedListings} data-magicpath-id="82" data-magicpath-path="SoftexLanding.tsx" />
      <LoginScreen isOpen={showLogin} onClose={() => setShowLogin(false)} onSwitchToSignup={() => {
      setShowLogin(false);
      setShowSignup(true);
    }} data-magicpath-id="83" data-magicpath-path="SoftexLanding.tsx" />
      <SignupScreen isOpen={showSignup} onClose={() => setShowSignup(false)} onSwitchToLogin={() => {
      setShowSignup(false);
      setShowLogin(true);
    }} data-magicpath-id="84" data-magicpath-path="SoftexLanding.tsx" />
    </SortableContainer>;
};