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
      <SortableContainer dndKitId="1f580b9f-19aa-45c3-ba8c-9117b7e5e81d" containerType="regular" prevTag="div" className="fixed top-0 right-0 h-full w-[380px] bg-[#0a0f1a] z-50 shadow-2xl flex flex-col border-l border-gray-800" data-magicpath-id="1" data-magicpath-path="MenuPanel.tsx">
        {/* Header */}
        <SortableContainer dndKitId="8695d127-945e-45ee-b06f-f7293ab05205" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="MenuPanel.tsx">
          <h2 className="text-xl font-bold text-white" data-magicpath-id="3" data-magicpath-path="MenuPanel.tsx">Menu</h2>
          <SortableContainer dndKitId="9843d186-25ec-4bf1-bd6f-156793aa8fba" containerType="regular" prevTag="button" onClick={onClose} className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="4" data-magicpath-path="MenuPanel.tsx">
            <X className="w-5 h-5 text-white" data-magicpath-id="5" data-magicpath-path="MenuPanel.tsx" />
          </SortableContainer>
        </SortableContainer>

        {/* Menu Items */}
        <SortableContainer dndKitId="5a7fc09e-65a8-4cec-b5ce-e254261eda3b" containerType="regular" prevTag="div" className="flex-1 overflow-y-auto" data-magicpath-id="6" data-magicpath-path="MenuPanel.tsx">
          {/* Navigation */}
          <SortableContainer dndKitId="81b6461a-53e1-4cdb-81f0-2edb93851226" containerType="regular" prevTag="div" className="px-4 py-6 border-b border-gray-800" data-magicpath-id="7" data-magicpath-path="MenuPanel.tsx">
            <SortableContainer dndKitId="b0abf710-ddd2-4d01-bf68-89433503a3c7" containerType="regular" prevTag="nav" className="space-y-1" data-magicpath-id="8" data-magicpath-path="MenuPanel.tsx">
              <SortableContainer dndKitId="4cbb069d-bd54-4988-94e6-423b8fb375ac" containerType="regular" prevTag="button" className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors" data-magicpath-id="9" data-magicpath-path="MenuPanel.tsx">
                <Home className="w-5 h-5" data-magicpath-id="10" data-magicpath-path="MenuPanel.tsx" />
                <span className="font-medium" data-magicpath-id="11" data-magicpath-path="MenuPanel.tsx">Home</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="cbca5032-24d9-4d91-a9cf-45a6bda44ede" containerType="regular" prevTag="button" className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors" data-magicpath-id="12" data-magicpath-path="MenuPanel.tsx">
                <FileText className="w-5 h-5" data-magicpath-id="13" data-magicpath-path="MenuPanel.tsx" />
                <span className="font-medium" data-magicpath-id="14" data-magicpath-path="MenuPanel.tsx">My Listings</span>
              </SortableContainer>
              
              <SortableContainer dndKitId="d172de81-4887-4910-99df-edcdf6df429b" containerType="regular" prevTag="button" className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors" data-magicpath-id="15" data-magicpath-path="MenuPanel.tsx">
                <Settings className="w-5 h-5" data-magicpath-id="16" data-magicpath-path="MenuPanel.tsx" />
                <span className="font-medium" data-magicpath-id="17" data-magicpath-path="MenuPanel.tsx">Settings</span>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Saved Section */}
          <SortableContainer dndKitId="10f0f229-9f66-41c1-be78-71406ba21135" containerType="regular" prevTag="div" className="px-4 py-6" data-magicpath-id="18" data-magicpath-path="MenuPanel.tsx">
            <SortableContainer dndKitId="ebd4892a-80eb-4e9a-8ad2-8f1f32aab78a" containerType="regular" prevTag="div" className="flex items-center gap-2 mb-4" data-magicpath-id="19" data-magicpath-path="MenuPanel.tsx">
              <Heart className="w-5 h-5 text-gray-400" data-magicpath-id="20" data-magicpath-path="MenuPanel.tsx" />
              <h3 className="text-lg font-semibold text-white" data-magicpath-id="21" data-magicpath-path="MenuPanel.tsx">Saved</h3>
            </SortableContainer>
            
            {savedListings.length > 0 ? <SortableContainer dndKitId="38f6fb62-bac5-4195-b392-54543527a6cb" containerType="collection" prevTag="div" className="space-y-3" data-magicpath-id="22" data-magicpath-path="MenuPanel.tsx">
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
        <SortableContainer dndKitId="1b3355d7-8892-42c8-9209-7d2c2a8dbfb4" containerType="regular" prevTag="div" className="px-4 py-4 border-t border-gray-800" data-magicpath-id="31" data-magicpath-path="MenuPanel.tsx">
          <SortableContainer dndKitId="62f9e04e-d072-4860-92a6-d05754b343af" containerType="regular" prevTag="button" className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" data-magicpath-id="32" data-magicpath-path="MenuPanel.tsx">
            <LogOut className="w-5 h-5" data-magicpath-id="33" data-magicpath-path="MenuPanel.tsx" />
            <span className="font-medium" data-magicpath-id="34" data-magicpath-path="MenuPanel.tsx">Logout</span>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </>;
};