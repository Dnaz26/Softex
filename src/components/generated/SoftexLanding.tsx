import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, Instagram, Twitter } from 'lucide-react';
import { AllListings } from './AllListings';
type SoftexLandingProps = {};

// @component: SoftexLanding
export const SoftexLanding = (props: SoftexLandingProps) => {
  const [showAllListings, setShowAllListings] = useState(false);
  if (showAllListings) {
    return <AllListings onBack={() => setShowAllListings(false)} data-magicpath-id="0" data-magicpath-path="SoftexLanding.tsx" />;
  }
  return <SortableContainer dndKitId="0b017dc1-55a4-4744-a887-b83438c7f61f" containerType="regular" prevTag="div" className="min-h-screen bg-black text-white" data-magicpath-id="1" data-magicpath-path="SoftexLanding.tsx">
      <SortableContainer dndKitId="3a4184cd-0066-4144-ba6c-0c9906f84709" containerType="regular" prevTag="header" className="border-b border-gray-900 px-6 py-4" data-magicpath-id="2" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="9eb71172-5ef5-485b-ba88-4b8c04deff21" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="3" data-magicpath-path="SoftexLanding.tsx">
          <SortableContainer dndKitId="27996291-95ec-4b8a-8170-041e9a8ed774" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="4" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="4d3a0d8d-3060-4e72-9f74-da9bf1e9d0cf" containerType="regular" prevTag="div" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center" data-magicpath-id="5" data-magicpath-path="SoftexLanding.tsx">
              <div className="w-6 h-6 border-2 border-white rounded" data-magicpath-id="6" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
            <span className="text-xl font-semibold" data-magicpath-id="7" data-magicpath-path="SoftexLanding.tsx">Softex</span>
          </SortableContainer>
          <SortableContainer dndKitId="6970be83-7db2-4c92-bde5-1f340a543472" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="8" data-magicpath-path="SoftexLanding.tsx">
            <button className="text-gray-300 hover:text-white px-4 py-2" data-magicpath-id="9" data-magicpath-path="SoftexLanding.tsx">
              Login
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium" data-magicpath-id="10" data-magicpath-path="SoftexLanding.tsx">
              Sign Up
            </button>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="74e6fd2d-1ea5-42be-a689-f5e2361f155c" containerType="regular" prevTag="main" className="max-w-[1400px] mx-auto px-6" data-magicpath-id="11" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="b5c44cd2-7633-4253-ac9b-659f1ccd4ead" containerType="regular" prevTag="section" className="py-16" data-magicpath-id="12" data-magicpath-path="SoftexLanding.tsx">
          <h1 className="text-6xl font-bold text-center mb-12" data-magicpath-id="13" data-magicpath-path="SoftexLanding.tsx">
            Find your next investment
          </h1>

          <SortableContainer dndKitId="05d95efb-f573-4401-afa7-ea950f4bf7e4" containerType="regular" prevTag="div" className="flex items-center gap-4 max-w-4xl mx-auto mb-20" data-magicpath-id="14" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="26ca5e4f-ea9a-4c68-920c-70f5342ebdb3" containerType="regular" prevTag="div" className="flex-1 relative" data-magicpath-id="15" data-magicpath-path="SoftexLanding.tsx">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" data-magicpath-id="16" data-magicpath-path="SoftexLanding.tsx" />
              <input type="text" placeholder="Search for businesses, industries, or locations..." className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" data-magicpath-id="17" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="b3c93962-49ac-49ac-9ca7-bc1f3baf410d" containerType="regular" prevTag="button" className="bg-transparent border border-gray-800 rounded-xl p-4 hover:bg-gray-900 transition-colors" data-magicpath-id="18" data-magicpath-path="SoftexLanding.tsx">
              <Sparkles className="w-5 h-5 text-gray-500" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="7cc613c0-6c4c-4f9e-a745-e83e7bb2a3a5" containerType="regular" prevTag="div" className="flex items-center justify-between mb-8" data-magicpath-id="19" data-magicpath-path="SoftexLanding.tsx">
            <h2 className="text-4xl font-bold" data-magicpath-id="20" data-magicpath-path="SoftexLanding.tsx">Listings</h2>
            <SortableContainer dndKitId="74422d96-1567-4bfe-90ad-5b6d1eff390a" containerType="regular" prevTag="button" onClick={() => setShowAllListings(true)} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" data-magicpath-id="21" data-magicpath-path="SoftexLanding.tsx">
              <ArrowRight className="w-5 h-5" data-magicpath-id="22" data-magicpath-path="SoftexLanding.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="eba0a8f7-5522-4e81-bc4a-d6532b517676" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-6 mb-20" data-magicpath-id="23" data-magicpath-path="SoftexLanding.tsx">
            {/* Card 1 */}
            <SortableContainer dndKitId="d5c37e13-dbae-436c-80f2-fb3d3a89c208" containerType="regular" prevTag="div" className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer" data-magicpath-id="24" data-magicpath-path="SoftexLanding.tsx">
              <SortableContainer dndKitId="6b3c75fa-47fe-4604-841d-72c602062df9" containerType="regular" prevTag="div" className="relative h-64" data-magicpath-id="25" data-magicpath-path="SoftexLanding.tsx">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" alt="The Artisan Cafe" className="w-full h-full object-cover" data-magicpath-id="26" data-magicpath-path="SoftexLanding.tsx" />
                <SortableContainer dndKitId="0207e9d5-7e32-49d9-8473-36fb8aae27ce" containerType="regular" prevTag="div" className="absolute top-4 right-4 bg-[#0B1A33] px-5 py-2 rounded-full" data-magicpath-id="27" data-magicpath-path="SoftexLanding.tsx">
                  <span className="text-[#4169E1] font-bold text-lg" data-magicpath-id="28" data-magicpath-path="SoftexLanding.tsx">$250,000</span>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="d998f273-7e25-4fe7-92a1-466456371bb5" containerType="regular" prevTag="div" className="p-6" data-magicpath-id="29" data-magicpath-path="SoftexLanding.tsx">
                <div className="text-[#4169E1] text-sm font-semibold mb-2 uppercase" data-magicpath-id="30" data-magicpath-path="SoftexLanding.tsx">
                  COFFEE & TEA
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4169E1] transition-colors" data-magicpath-id="31" data-magicpath-path="SoftexLanding.tsx">
                  The Artisan Cafe
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed" data-magicpath-id="32" data-magicpath-path="SoftexLanding.tsx">
                  Established coffee shop with loyal customer base and prime downtown location
                </p>
                <SortableContainer dndKitId="cd803a9c-1902-44c4-a9e9-24160cab91ac" containerType="regular" prevTag="div" className="flex justify-between items-center text-sm mb-6" data-magicpath-id="33" data-magicpath-path="SoftexLanding.tsx">
                  <SortableContainer dndKitId="fd1b7229-bdc0-4967-a7f1-ec15d38e68f6" containerType="regular" prevTag="div" data-magicpath-id="34" data-magicpath-path="SoftexLanding.tsx">
                    <span className="text-gray-500" data-magicpath-id="35" data-magicpath-path="SoftexLanding.tsx">Location:</span>
                    <span className="text-white ml-2 font-medium" data-magicpath-id="36" data-magicpath-path="SoftexLanding.tsx">Downtown District</span>
                  </SortableContainer>
                </SortableContainer>
                <SortableContainer dndKitId="a85b8b78-72cf-46bc-b99a-3a708c82bb3e" containerType="regular" prevTag="div" className="flex justify-between items-center text-sm mb-6" data-magicpath-id="37" data-magicpath-path="SoftexLanding.tsx">
                  <SortableContainer dndKitId="dc5f1712-6ea6-4603-bf74-cfd736264663" containerType="regular" prevTag="div" data-magicpath-id="38" data-magicpath-path="SoftexLanding.tsx">
                    <span className="text-gray-500" data-magicpath-id="39" data-magicpath-path="SoftexLanding.tsx">Revenue:</span>
                    <span className="text-green-500 ml-2 font-semibold" data-magicpath-id="40" data-magicpath-path="SoftexLanding.tsx">$500K/year</span>
                  </SortableContainer>
                </SortableContainer>
                <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors" data-magicpath-id="41" data-magicpath-path="SoftexLanding.tsx">
                  View Details
                </button>
              </SortableContainer>
            </SortableContainer>

            {/* Card 2 */}
            <SortableContainer dndKitId="1b06a82b-e546-4d07-9393-61632c34c34f" containerType="regular" prevTag="div" className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer" data-magicpath-id="42" data-magicpath-path="SoftexLanding.tsx">
              <SortableContainer dndKitId="69ec278f-2da4-4e7e-aba6-37c07175832e" containerType="regular" prevTag="div" className="relative h-64" data-magicpath-id="43" data-magicpath-path="SoftexLanding.tsx">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" alt="Bella Italia Ristorante" className="w-full h-full object-cover" data-magicpath-id="44" data-magicpath-path="SoftexLanding.tsx" />
                <SortableContainer dndKitId="443f862a-5a00-4872-9c99-ffda7269c3c8" containerType="regular" prevTag="div" className="absolute top-4 right-4 bg-[#0B1A33] px-5 py-2 rounded-full" data-magicpath-id="45" data-magicpath-path="SoftexLanding.tsx">
                  <span className="text-[#4169E1] font-bold text-lg" data-magicpath-id="46" data-magicpath-path="SoftexLanding.tsx">$450,000</span>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="806e43a3-5334-4206-acf5-bf71c75a0a15" containerType="regular" prevTag="div" className="p-6" data-magicpath-id="47" data-magicpath-path="SoftexLanding.tsx">
                <div className="text-[#4169E1] text-sm font-semibold mb-2 uppercase" data-magicpath-id="48" data-magicpath-path="SoftexLanding.tsx">
                  RESTAURANT
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4169E1] transition-colors" data-magicpath-id="49" data-magicpath-path="SoftexLanding.tsx">
                  Bella Italia Ristorante
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed" data-magicpath-id="50" data-magicpath-path="SoftexLanding.tsx">
                  Popular Italian restaurant with established brand and recipes
                </p>
                <SortableContainer dndKitId="aebc22ef-14ed-44b1-9902-776063e70341" containerType="regular" prevTag="div" className="flex justify-between items-center text-sm mb-6" data-magicpath-id="51" data-magicpath-path="SoftexLanding.tsx">
                  <SortableContainer dndKitId="d8565801-cb6f-4bed-ab5b-3ba86cb736d5" containerType="regular" prevTag="div" data-magicpath-id="52" data-magicpath-path="SoftexLanding.tsx">
                    <span className="text-gray-500" data-magicpath-id="53" data-magicpath-path="SoftexLanding.tsx">Location:</span>
                    <span className="text-white ml-2 font-medium" data-magicpath-id="54" data-magicpath-path="SoftexLanding.tsx">Midtown Area</span>
                  </SortableContainer>
                </SortableContainer>
                <SortableContainer dndKitId="d8425350-9980-4a03-b9e8-924c6ba47285" containerType="regular" prevTag="div" className="flex justify-between items-center text-sm mb-6" data-magicpath-id="55" data-magicpath-path="SoftexLanding.tsx">
                  <SortableContainer dndKitId="6fce8aec-0cf5-4094-a782-4ad3911d4e62" containerType="regular" prevTag="div" data-magicpath-id="56" data-magicpath-path="SoftexLanding.tsx">
                    <span className="text-gray-500" data-magicpath-id="57" data-magicpath-path="SoftexLanding.tsx">Revenue:</span>
                    <span className="text-green-500 ml-2 font-semibold" data-magicpath-id="58" data-magicpath-path="SoftexLanding.tsx">$850K/year</span>
                  </SortableContainer>
                </SortableContainer>
                <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors" data-magicpath-id="59" data-magicpath-path="SoftexLanding.tsx">
                  View Details
                </button>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      <SortableContainer dndKitId="581a17dd-cb1f-456f-96f2-2ea308a960f2" containerType="regular" prevTag="footer" className="border-t border-gray-900 py-12" data-magicpath-id="60" data-magicpath-path="SoftexLanding.tsx">
        <SortableContainer dndKitId="73297559-b94b-4075-8d9a-d92ab6c23b98" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto px-6" data-magicpath-id="61" data-magicpath-path="SoftexLanding.tsx">
          <SortableContainer dndKitId="57b5eee1-b940-4857-9310-fd86eed14728" containerType="regular" prevTag="div" className="grid grid-cols-4 gap-12 mb-12" data-magicpath-id="62" data-magicpath-path="SoftexLanding.tsx">
            <SortableContainer dndKitId="02433858-96da-4b7f-9e2c-45720d695e6b" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="64" data-magicpath-path="SoftexLanding.tsx">Company</h4>
              <SortableContainer dndKitId="da551d43-243c-47ac-8463-3f7dfd14b6e8" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="65" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="66" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="67" data-magicpath-path="SoftexLanding.tsx">About Us</a>
                </li>
                <li data-magicpath-id="68" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="69" data-magicpath-path="SoftexLanding.tsx">Contact</a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="cb11b9ba-1f5a-4af7-9211-0089a5b6f0f3" containerType="regular" prevTag="div" data-magicpath-id="70" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="71" data-magicpath-path="SoftexLanding.tsx">Legal</h4>
              <SortableContainer dndKitId="96e5c804-7870-4da3-8ad9-ea87d794d380" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="72" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="73" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="74" data-magicpath-path="SoftexLanding.tsx">Terms of Service</a>
                </li>
                <li data-magicpath-id="75" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="76" data-magicpath-path="SoftexLanding.tsx">Privacy Policy</a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="9066135d-6267-4d5d-9d32-c0eb290c3c47" containerType="regular" prevTag="div" data-magicpath-id="77" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="78" data-magicpath-path="SoftexLanding.tsx">Support</h4>
              <SortableContainer dndKitId="def62a77-b571-473f-90dc-b87291a8d02d" containerType="regular" prevTag="ul" className="space-y-3 text-gray-400" data-magicpath-id="79" data-magicpath-path="SoftexLanding.tsx">
                <li data-magicpath-id="80" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="81" data-magicpath-path="SoftexLanding.tsx">Help Center</a>
                </li>
                <li data-magicpath-id="82" data-magicpath-path="SoftexLanding.tsx">
                  <a href="#" className="hover:text-white" data-magicpath-id="83" data-magicpath-path="SoftexLanding.tsx">FAQ's</a>
                </li>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="2638cbda-21ed-4d69-bd93-3723eaaea224" containerType="regular" prevTag="div" data-magicpath-id="84" data-magicpath-path="SoftexLanding.tsx">
              <h4 className="font-semibold mb-4" data-magicpath-id="85" data-magicpath-path="SoftexLanding.tsx">Follow Us</h4>
              <SortableContainer dndKitId="bb682896-2e8f-488b-9617-35c58e0e1d49" containerType="regular" prevTag="div" className="flex gap-3" data-magicpath-id="86" data-magicpath-path="SoftexLanding.tsx">
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="87" data-magicpath-path="SoftexLanding.tsx">
                  <Instagram className="w-5 h-5" data-magicpath-id="88" data-magicpath-path="SoftexLanding.tsx" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="89" data-magicpath-path="SoftexLanding.tsx">
                  <Twitter className="w-5 h-5" data-magicpath-id="90" data-magicpath-path="SoftexLanding.tsx" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800" data-magicpath-id="91" data-magicpath-path="SoftexLanding.tsx">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" data-magicpath-id="92" data-magicpath-path="SoftexLanding.tsx">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" data-magicpath-id="93" data-magicpath-path="SoftexLanding.tsx" />
                  </svg>
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-900" data-magicpath-id="94" data-magicpath-path="SoftexLanding.tsx">
            © 2024 Softex. All rights reserved.
          </div>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};