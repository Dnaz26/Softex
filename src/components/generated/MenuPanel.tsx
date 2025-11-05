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
      <div className="fixed inset-0 bg-black/60 z-40 transition-opacity" onClick={onClose} />
      
      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-[380px] bg-[#0a0f1a] z-50 shadow-2xl flex flex-col border-l border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          {/* Navigation */}
          <div className="px-4 py-6 border-b border-gray-800">
            <nav className="space-y-1">
              <button onClick={handleHomeClick} className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors">
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </button>
              
              <button onClick={handleMyListingsClick} className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors">
                <FileText className="w-5 h-5" />
                <span className="font-medium">My Listings</span>
              </button>
              
              <button onClick={handleSettingsClick} className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800/50 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
                <span className="font-medium">Settings</span>
              </button>
            </nav>
          </div>

          {/* Saved Section */}
          <div className="px-4 py-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-gray-400" />
              <h3 className="text-lg font-semibold text-white">Saved</h3>
            </div>
            
            {savedListings.length > 0 ? <div className="space-y-3">
                {savedListings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500/50 transition-all cursor-pointer">
                    <div className="flex gap-3">
                      <img src={listing.image} alt={listing.title} className="w-20 h-20 object-cover" />
                      <div className="flex-1 py-2 pr-3">
                        <div className="text-[#4169E1] text-xs font-bold mb-1 uppercase">
                          {listing.category}
                        </div>
                        <h4 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                          {listing.title}
                        </h4>
                        <p className="text-[#4169E1] font-bold text-sm">
                          {listing.price}
                        </p>
                      </div>
                    </div>
                  </div>)}
              </div> : <p className="text-gray-400 text-sm text-center py-8">
                No saved listings yet
              </p>}
          </div>
        </div>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-gray-800">
          <button onClick={handleLogoutClick} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>;
};