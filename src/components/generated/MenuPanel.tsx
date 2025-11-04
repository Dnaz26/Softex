import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { X, Home, Heart, FileText, Settings, LogOut } from 'lucide-react';
type MenuPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  savedListings: any[];
};

// @component: MenuPanel
export const MenuPanel = ({
  isOpen,
  onClose,
  savedListings
}: MenuPanelProps) => {
  if (!isOpen) return null;
  return <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40 transition-opacity" onClick={onClose} data-magicpath-id="0" data-magicpath-path="MenuPanel.tsx" />
      
      {/* Panel */}
      <SortableContainer dndKitId="3619bda9-cd3c-4253-97d8-ae062ec51f62" containerType="regular" prevTag="div" className="fixed top-0 right-0 h-full w-[380px] bg-[#0a0f1a] z-50 shadow-2xl flex flex-col border-l border-gray-800" data-magicpath-id="1" data-magicpath-path="MenuPanel.tsx">
        {/* Header */}
        <SortableContainer dndKitId="89bf676d-221a-4b82-8473-d744fe8a6731" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="MenuPanel.tsx">
          <h2 className="text-xl font-bold text-white" data-magicpath-id="3" data-magicpath-path="MenuPanel.tsx">Menu</h2>
          <SortableContainer dndKitId="ffcf5531-c95b-48ba-ac17-8e4457314c2a" containerType="regular" prevTag="button" onClick={onClose} className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="4" data-magicpath-path="MenuPanel.tsx">
            <X className="w-5 h-5 text-white" data-magicpath-id="5" data-magicpath-path="MenuPanel.tsx" />
          </SortableContainer>
        </SortableContainer>

        {/* Menu Items */}
        <SortableContainer dndKitId="536d38dc-b295-4e6a-b127-84cd6b3524ca" containerType="regular" prevTag="div" className="flex-1 overflow-y-auto" data-magicpath-id="6" data-magicpath-path="MenuPanel.tsx">
          {/* Navigation */}
          <SortableContainer dndKitId="6dcda2a0-6a68-419a-9436-e555f9d92308" containerType="regular" prevTag="div" className="px-4 py-6 border-b border-gray-800" data-magicpath-id="7" data-magicpath-path="MenuPanel.tsx">
            <SortableContainer dndKitId="bc4a7a2f-e790-4858-81f8-771061684095" containerType="regular" prevTag="nav" className="space-y-1" data-magicpath-id="8" data-magicpath-path="MenuPanel.tsx">
              <SortableContainer dndKitId="5caeb4fc-fa86-4346-89b4-90205604ec68" containerType="regular" prevTag="button" className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors" data-magicpath-id="9" data-magicpath-path="MenuPanel.tsx">
                <Home className="w-5 h-5" data-magicpath-id="10" data-magicpath-path="MenuPanel.tsx" />
                <span className="font-medium" data-magicpath-id="11" data-magicpath-path="MenuPanel.tsx">Home</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="7b75318d-6569-4cc5-b749-fbf2149b200f" containerType="regular" prevTag="button" className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors" data-magicpath-id="12" data-magicpath-path="MenuPanel.tsx">
                <FileText className="w-5 h-5" data-magicpath-id="13" data-magicpath-path="MenuPanel.tsx" />
                <span className="font-medium" data-magicpath-id="14" data-magicpath-path="MenuPanel.tsx">My Listings</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="694cfa21-7f1d-4d7a-aed7-354a8da1086f" containerType="regular" prevTag="button" className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors" data-magicpath-id="15" data-magicpath-path="MenuPanel.tsx">
                <Settings className="w-5 h-5" data-magicpath-id="16" data-magicpath-path="MenuPanel.tsx" />
                <span className="font-medium" data-magicpath-id="17" data-magicpath-path="MenuPanel.tsx">Settings</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Saved Section */}
          <SortableContainer dndKitId="644279d4-b26d-457b-9393-03bbaf3a7af2" containerType="regular" prevTag="div" className="px-4 py-6" data-magicpath-id="18" data-magicpath-path="MenuPanel.tsx">
            <SortableContainer dndKitId="8eed6876-6ca5-4aee-8154-ff6b75a82a02" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-4" data-magicpath-id="19" data-magicpath-path="MenuPanel.tsx">
              <Heart className="w-5 h-5 text-gray-400" data-magicpath-id="20" data-magicpath-path="MenuPanel.tsx" />
              <h3 className="text-lg font-semibold text-white" data-magicpath-id="21" data-magicpath-path="MenuPanel.tsx">Saved</h3>
            </SortableContainer>
            
            {savedListings.length > 0 ? <SortableContainer dndKitId="6ccf2cd5-c864-4e55-9042-771c22dfdba7" containerType="collection" prevTag="div" className="space-y-3" data-magicpath-id="22" data-magicpath-path="MenuPanel.tsx">
                {savedListings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500/50 transition-all cursor-pointer" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="MenuPanel.tsx">
                    <div className="flex gap-3" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="MenuPanel.tsx">
                      <img src={listing.image} alt={listing.title} className="w-20 h-20 object-cover" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="25" data-magicpath-path="MenuPanel.tsx" />
                      <div className="flex-1 py-2 pr-3" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="MenuPanel.tsx">
                        <div className="text-[#4169E1] text-xs font-bold mb-1 uppercase" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="27" data-magicpath-path="MenuPanel.tsx">
                          {listing.category}
                        </div>
                        <h4 className="text-white font-semibold text-sm mb-1 line-clamp-1" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="28" data-magicpath-path="MenuPanel.tsx">
                          {listing.title}
                        </h4>
                        <p className="text-[#4169E1] font-bold text-sm" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="29" data-magicpath-path="MenuPanel.tsx">
                          {listing.price}
                        </p>
                      </div>
                    </div>
                  </div>)}
              </SortableContainer> : <p className="text-gray-400 text-sm text-center py-8" data-magicpath-id="30" data-magicpath-path="MenuPanel.tsx">
                No saved listings yet
              </p>}
          </SortableContainer>
        </SortableContainer>

        {/* Logout */}
        <SortableContainer dndKitId="c2b4c8ca-7aff-4325-a380-238d34b17ed9" containerType="regular" prevTag="div" className="px-4 py-4 border-t border-gray-800" data-magicpath-id="31" data-magicpath-path="MenuPanel.tsx">
          <SortableContainer dndKitId="219f16ef-0004-428f-be63-7e67cd30c959" containerType="regular" prevTag="button" className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" data-magicpath-id="32" data-magicpath-path="MenuPanel.tsx">
            <LogOut className="w-5 h-5" data-magicpath-id="33" data-magicpath-path="MenuPanel.tsx" />
            <span className="font-medium" data-magicpath-id="34" data-magicpath-path="MenuPanel.tsx">Logout</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </>;
};