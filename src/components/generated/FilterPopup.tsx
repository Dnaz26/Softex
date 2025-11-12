"use client";

import React from 'react';
import { X, Filter } from 'lucide-react';

type FilterPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  minPrice: string;
  maxPrice: string;
  selectedInvestmentTypes: string[];
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onInvestmentTypesChange: (types: string[]) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: string;
  onPriceRangeChange: (range: string) => void;
};

// @component: FilterPopup
export const FilterPopup = ({
  isOpen,
  onClose,
  minPrice,
  maxPrice,
  selectedInvestmentTypes,
  onMinPriceChange,
  onMaxPriceChange,
  onInvestmentTypesChange,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange
}: FilterPopupProps) => {
  if (!isOpen) return null;

  const investmentTypes = [
    'Apps',
    'Websites',
    'Games',
    'SaaS',
    'E-commerce',
    'Mobile Apps',
    'Web Apps',
    'Desktop Software',
    'APIs',
    'Plugins',
    'Templates',
    'Other'
  ];

  const categories = ['all', 'COFFEE & TEA', 'RESTAURANT', 'FITNESS', 'TECHNOLOGY', 'RETAIL'];

  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under $200K', value: 'under200' },
    { label: '$200K - $400K', value: '200to400' },
    { label: 'Over $400K', value: 'over400' }
  ];

  const handleInvestmentTypeToggle = (type: string) => {
    if (selectedInvestmentTypes.includes(type)) {
      onInvestmentTypesChange(selectedInvestmentTypes.filter(t => t !== type));
    } else {
      onInvestmentTypesChange([...selectedInvestmentTypes, type]);
    }
  };

  const handleClearFilters = () => {
    onMinPriceChange('');
    onMaxPriceChange('');
    onInvestmentTypesChange([]);
    onCategoryChange('all');
    onPriceRangeChange('all');
  };

  const hasActiveFilters = minPrice || maxPrice || selectedInvestmentTypes.length > 0 || selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40 transition-opacity" onClick={onClose} />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-[#0a0f1a] z-50 shadow-2xl rounded-2xl border border-gray-800 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800 sticky top-0 bg-[#0a0f1a] z-10">
          <div className="flex items-center gap-3">
            <Filter className="w-6 h-6 text-[#4169E1]" />
            <h2 className="text-2xl font-bold text-white">Filter Options</h2>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Price Range */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Price Range</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Price ($)</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => onMinPriceChange(e.target.value)}
                  placeholder="0"
                  className="w-full bg-[#1a2942] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Maximum Price ($)</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => onMaxPriceChange(e.target.value)}
                  placeholder="No limit"
                  className="w-full bg-[#1a2942] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map(range => (
                <button
                  key={range.value}
                  onClick={() => onPriceRangeChange(range.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    priceRange === range.value
                      ? 'bg-[#4169E1] text-white'
                      : 'bg-[#1a2942] text-gray-300 hover:bg-[#243552]'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Investment Type */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Type of Investment</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {investmentTypes.map(type => (
                <button
                  key={type}
                  onClick={() => handleInvestmentTypeToggle(type)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors text-left ${
                    selectedInvestmentTypes.includes(type)
                      ? 'bg-[#4169E1] text-white'
                      : 'bg-[#1a2942] text-gray-300 hover:bg-[#243552]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#4169E1] text-white'
                      : 'bg-[#1a2942] text-gray-300 hover:bg-[#243552]'
                  }`}
                >
                  {cat === 'all' ? 'All Categories' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between sticky bottom-0 bg-[#0a0f1a]">
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Clear all filters
            </button>
          )}
          <div className="flex gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#1a2942] hover:bg-[#243552] text-white rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#4169E1] hover:bg-[#3557C1] text-white rounded-lg font-medium transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


