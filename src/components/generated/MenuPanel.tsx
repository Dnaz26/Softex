import React from 'react';
import { X, Home, Heart, FileText, Settings, LogOut } from 'lucide-react';
type MenuPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  savedListings: any[];
  onNavigateHome?: () => void;
  onNavigateMyListings?: () => void;
  onNavigateSettings?: () => void;
  onLogout?: () => void;
};

// @component: MenuPanel
export const MenuPanel = ({
  isOpen,
  onClose,
  savedListings,
  onNavigateHome,
  onNavigateMyListings,
  onNavigateSettings,
  onLogout
}: MenuPanelProps) => {
  if (!isOpen) return null;
  const handleHomeClick = () => {
    onNavigateHome?.();
    onClose();
  };
  const handleMyListingsClick = () => {
    onNavigateMyListings?.();
    onClose();
  };
  const handleSettingsClick = () => {
    onNavigateSettings?.();
    onClose();
  };
  const handleLogoutClick = () => {
    onLogout?.();
    onClose();
  };
  return <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40 transition-opacity" onClick={onClose} data-magicpath-id="0" data-magicpath-path="MenuPanel.tsx" />
      
      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-[380px] bg-[#0a0f1a] z-50 shadow-2xl flex flex-col border-l border-gray-800" data-magicpath-id="1" data-magicpath-path="MenuPanel.tsx">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="MenuPanel.tsx">
          <h2 className="text-xl font-bold text-white" data-magicpath-id="3" data-magicpath-path="MenuPanel.tsx">Menu</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="4" data-magicpath-path="MenuPanel.tsx">
            <X className="w-5 h-5 text-white" data-magicpath-id="5" data-magicpath-path="MenuPanel.tsx" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto" data-magicpath-id="6" data-magicpath-path="MenuPanel.tsx">
          {/* Navigation */}
          <div className="px-4 py-6 border-b border-gray-800" data-magicpath-id="7" data-magicpath-path="MenuPanel.tsx">
            <nav className="space-y-1" data-magicpath-id="8" data-magicpath-path="MenuPanel.tsx">
              <button onClick={handleHomeClick} className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors" data-magicpath-id="9" data-magicpath-path="MenuPanel.tsx">
                <Home className="w-5 h-5" data-magicpath-id="10" data-magicpath-path="MenuPanel.tsx" />
                <span className="font-medium" data-magicpath-id="11" data-magicpath-path="MenuPanel.tsx">Home</span>
              </button>
              
              <button onClick={handleMyListingsClick} className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors" data-magicpath-id="12" data-magicpath-path="MenuPanel.tsx">
                <FileText className="w-5 h-5" data-magicpath-id="13" data-magicpath-path="MenuPanel.tsx" />
                <span className="font-medium" data-magicpath-id="14" data-magicpath-path="MenuPanel.tsx">My Listings</span>
              </button>
              
              <button onClick={handleSettingsClick} className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors" data-magicpath-id="15" data-magicpath-path="MenuPanel.tsx">
                <Settings className="w-5 h-5" data-magicpath-id="16" data-magicpath-path="MenuPanel.tsx" />
                <span className="font-medium" data-magicpath-id="17" data-magicpath-path="MenuPanel.tsx">Settings</span>
              </button>
            </nav>
          </div>

          {/* Saved Section */}
          <div className="px-4 py-6" data-magicpath-id="18" data-magicpath-path="MenuPanel.tsx">
            <div className="flex items-center gap-2 mb-4" data-magicpath-id="19" data-magicpath-path="MenuPanel.tsx">
              <Heart className="w-5 h-5 text-gray-400" data-magicpath-id="20" data-magicpath-path="MenuPanel.tsx" />
              <h3 className="text-lg font-semibold text-white" data-magicpath-id="21" data-magicpath-path="MenuPanel.tsx">Saved</h3>
            </div>
            
            {savedListings.length > 0 ? <div className="space-y-3" data-magicpath-id="22" data-magicpath-path="MenuPanel.tsx">
                {savedListings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500/50 transition-all cursor-pointer" data-magicpath-id="23" data-magicpath-path="MenuPanel.tsx">
                    <div className="flex gap-3" data-magicpath-id="24" data-magicpath-path="MenuPanel.tsx">
                      <img src={listing.image} alt={listing.title} className="w-20 h-20 object-cover" data-magicpath-id="25" data-magicpath-path="MenuPanel.tsx" />
                      <div className="flex-1 py-2 pr-3" data-magicpath-id="26" data-magicpath-path="MenuPanel.tsx">
                        <div className="text-[#4169E1] text-xs font-bold mb-1 uppercase" data-magicpath-id="27" data-magicpath-path="MenuPanel.tsx">
                          {listing.category}
                        </div>
                        <h4 className="text-white font-semibold text-sm mb-1 line-clamp-1" data-magicpath-id="28" data-magicpath-path="MenuPanel.tsx">
                          {listing.title}
                        </h4>
                        <p className="text-[#4169E1] font-bold text-sm" data-magicpath-id="29" data-magicpath-path="MenuPanel.tsx">
                          {listing.price}
                        </p>
                      </div>
                    </div>
                  </div>)}
              </div> : <p className="text-gray-400 text-sm text-center py-8" data-magicpath-id="30" data-magicpath-path="MenuPanel.tsx">
                No saved listings yet
              </p>}
          </div>
        </div>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-gray-800" data-magicpath-id="31" data-magicpath-path="MenuPanel.tsx">
          <button onClick={handleLogoutClick} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" data-magicpath-id="32" data-magicpath-path="MenuPanel.tsx">
            <LogOut className="w-5 h-5" data-magicpath-id="33" data-magicpath-path="MenuPanel.tsx" />
            <span className="font-medium" data-magicpath-id="34" data-magicpath-path="MenuPanel.tsx">Logout</span>
          </button>
        </div>
      </div>
    </>;
};