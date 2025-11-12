"use client";

import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Menu as MenuIcon, MapPin, DollarSign, TrendingUp, Star } from 'lucide-react';
import { AIAdvisorPanel } from './AIAdvisorPanel';
import { MenuPanel } from './MenuPanel';
import { BusinessDetails } from './BusinessDetails';
import { FilterPopup } from './FilterPopup';
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
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [selectedInvestmentTypes, setSelectedInvestmentTypes] = useState<string[]>([]);
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
    established: '2018',
    employees: 8,
    website: 'www.artisancafe.com',
    email: 'contact@artisancafe.com',
    phone: '+1 (555) 123-4567',
    fullDescription: 'The Artisan Cafe is a beloved coffee shop that has become a cornerstone of the downtown community since 2018. Known for its artisanal coffee blends, fresh pastries, and warm atmosphere, this establishment offers a turnkey opportunity in the thriving cafe industry. The business comes with trained staff, established supplier relationships, and a strong reputation for quality and service.',
    revenueExpensesData: [{
      month: 'Jan',
      revenue: 42000,
      expenses: 28000
    }, {
      month: 'Feb',
      revenue: 45000,
      expenses: 29000
    }, {
      month: 'Mar',
      revenue: 48000,
      expenses: 30000
    }, {
      month: 'Apr',
      revenue: 52000,
      expenses: 31000
    }, {
      month: 'May',
      revenue: 55000,
      expenses: 32000
    }, {
      month: 'Jun',
      revenue: 58000,
      expenses: 33000
    }],
    trafficData: [{
      day: 'Mon',
      customers: 120
    }, {
      day: 'Tue',
      customers: 135
    }, {
      day: 'Wed',
      customers: 140
    }, {
      day: 'Thu',
      customers: 155
    }, {
      day: 'Fri',
      customers: 200
    }, {
      day: 'Sat',
      customers: 250
    }, {
      day: 'Sun',
      customers: 180
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 60
    }, {
      name: 'Services',
      value: 25
    }, {
      name: 'Other',
      value: 15
    }],
    growthData: [{
      month: 'Jan',
      revenue: 42000
    }, {
      month: 'Feb',
      revenue: 45000
    }, {
      month: 'Mar',
      revenue: 48000
    }, {
      month: 'Apr',
      revenue: 52000
    }, {
      month: 'May',
      revenue: 55000
    }, {
      month: 'Jun',
      revenue: 58000
    }],
    highlights: ['Prime downtown location with high foot traffic', 'Loyal customer base with 70% repeat customers', 'Exclusive roasting partnerships', 'Modern equipment fully maintained', 'Strong social media presence with 15K+ followers', 'Excellent online reviews (4.8/5 stars)'],
    assets: ['Commercial espresso machines and equipment', 'Furniture and interior decor', 'Point of sale system', 'Inventory management software', 'Customer loyalty program database', 'Trademark and branding materials']
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
      expenses: 48000
    }, {
      month: 'Feb',
      revenue: 70000,
      expenses: 49000
    }, {
      month: 'Mar',
      revenue: 72000,
      expenses: 50000
    }, {
      month: 'Apr',
      revenue: 75000,
      expenses: 52000
    }, {
      month: 'May',
      revenue: 78000,
      expenses: 54000
    }, {
      month: 'Jun',
      revenue: 82000,
      expenses: 56000
    }],
    trafficData: [{
      day: 'Mon',
      customers: 110
    }, {
      day: 'Tue',
      customers: 125
    }, {
      day: 'Wed',
      customers: 135
    }, {
      day: 'Thu',
      customers: 150
    }, {
      day: 'Fri',
      customers: 195
    }, {
      day: 'Sat',
      customers: 245
    }, {
      day: 'Sun',
      customers: 175
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 60
    }, {
      name: 'Services',
      value: 25
    }, {
      name: 'Other',
      value: 15
    }],
    growthData: [{
      month: 'Jan',
      revenue: 68000
    }, {
      month: 'Feb',
      revenue: 70000
    }, {
      month: 'Mar',
      revenue: 72000
    }, {
      month: 'Apr',
      revenue: 75000
    }, {
      month: 'May',
      revenue: 78000
    }, {
      month: 'Jun',
      revenue: 82000
    }],
    highlights: ['Established brand with 8+ years of operation', 'Exclusive family recipes and menu', 'Full liquor license included', 'Seating capacity of 80 guests', 'Strong catering and events business', 'Excellent online reviews and reputation'],
    assets: ['Commercial kitchen equipment', 'Dining room furniture and decor', 'Liquor license', 'POS and reservation system', 'Wine inventory', 'Recipes and operational procedures']
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
    established: '2017',
    employees: 12,
    website: 'www.fitzonegym.com',
    email: 'info@fitzonegym.com',
    phone: '+1 (555) 345-6789',
    fullDescription: 'FitZone Gym is a modern fitness center that has built a strong community of over 500 active members since 2017. Featuring state-of-the-art equipment, group classes, and personal training services, this facility offers a comprehensive fitness experience. The business comes with experienced trainers, established member base, and strong growth potential.',
    revenueExpensesData: [{
      month: 'Jan',
      revenue: 52000,
      expenses: 38000
    }, {
      month: 'Feb',
      revenue: 54000,
      expenses: 39000
    }, {
      month: 'Mar',
      revenue: 56000,
      expenses: 40000
    }, {
      month: 'Apr',
      revenue: 58000,
      expenses: 41000
    }, {
      month: 'May',
      revenue: 60000,
      expenses: 42000
    }, {
      month: 'Jun',
      revenue: 62000,
      expenses: 43000
    }],
    trafficData: [{
      day: 'Mon',
      customers: 185
    }, {
      day: 'Tue',
      customers: 195
    }, {
      day: 'Wed',
      customers: 210
    }, {
      day: 'Thu',
      customers: 200
    }, {
      day: 'Fri',
      customers: 175
    }, {
      day: 'Sat',
      customers: 160
    }, {
      day: 'Sun',
      customers: 145
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 55
    }, {
      name: 'Services',
      value: 35
    }, {
      name: 'Other',
      value: 10
    }],
    growthData: [{
      month: 'Jan',
      revenue: 52000
    }, {
      month: 'Feb',
      revenue: 54000
    }, {
      month: 'Mar',
      revenue: 56000
    }, {
      month: 'Apr',
      revenue: 58000
    }, {
      month: 'May',
      revenue: 60000
    }, {
      month: 'Jun',
      revenue: 62000
    }],
    highlights: ['500+ active members with recurring revenue', 'Modern equipment and facilities', 'Established personal training program', 'Group fitness classes included', 'Strong member retention rate (85%)', 'Prime suburban location with parking'],
    assets: ['State-of-the-art fitness equipment', 'Sound system and lighting', 'Locker room facilities', 'Member management software', 'Personal training equipment', 'Marketing materials and branding']
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
    established: '2019',
    employees: 6,
    website: 'www.techrepairhub.com',
    email: 'support@techrepairhub.com',
    phone: '+1 (555) 456-7890',
    fullDescription: 'Tech Repair Hub is a leading technology repair service specializing in smartphones, computers, and tablets since 2019. With a strong online presence, corporate contracts, and excellent customer reviews, this business has established itself as the go-to repair center in the tech district. The business includes trained technicians, established relationships with parts suppliers, and a loyal customer base.',
    revenueExpensesData: [{
      month: 'Jan',
      revenue: 26000,
      expenses: 17000
    }, {
      month: 'Feb',
      revenue: 27000,
      expenses: 17500
    }, {
      month: 'Mar',
      revenue: 28000,
      expenses: 18000
    }, {
      month: 'Apr',
      revenue: 29000,
      expenses: 18500
    }, {
      month: 'May',
      revenue: 30000,
      expenses: 19000
    }, {
      month: 'Jun',
      revenue: 31000,
      expenses: 19500
    }],
    trafficData: [{
      day: 'Mon',
      customers: 95
    }, {
      day: 'Tue',
      customers: 105
    }, {
      day: 'Wed',
      customers: 110
    }, {
      day: 'Thu',
      customers: 115
    }, {
      day: 'Fri',
      customers: 125
    }, {
      day: 'Sat',
      customers: 100
    }, {
      day: 'Sun',
      customers: 75
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 45
    }, {
      name: 'Services',
      value: 45
    }, {
      name: 'Other',
      value: 10
    }],
    growthData: [{
      month: 'Jan',
      revenue: 26000
    }, {
      month: 'Feb',
      revenue: 27000
    }, {
      month: 'Mar',
      revenue: 28000
    }, {
      month: 'Apr',
      revenue: 29000
    }, {
      month: 'May',
      revenue: 30000
    }, {
      month: 'Jun',
      revenue: 31000
    }],
    highlights: ['Corporate service contracts established', 'Strong online presence and reviews', 'Certified technicians on staff', 'Relationships with major suppliers', 'Fast turnaround times', 'Warranty programs in place'],
    assets: ['Specialized repair equipment and tools', 'Parts inventory', 'Customer database', 'Service management software', 'Corporate contract agreements', 'Website and online booking system']
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
    established: '2016',
    employees: 10,
    website: 'www.greenleafnursery.com',
    email: 'info@greenleafnursery.com',
    phone: '+1 (555) 567-8901',
    fullDescription: 'Green Leaf Nursery is an established plant nursery offering both wholesale and retail operations since 2016. Located in the heart of the garden district, this business has built strong relationships with local landscapers, garden centers, and individual plant enthusiasts. The nursery features a wide variety of plants, gardening supplies, and expert horticultural advice.',
    revenueExpensesData: [{
      month: 'Jan',
      revenue: 32000,
      expenses: 25000
    }, {
      month: 'Feb',
      revenue: 34000,
      expenses: 26000
    }, {
      month: 'Mar',
      revenue: 38000,
      expenses: 28000
    }, {
      month: 'Apr',
      revenue: 42000,
      expenses: 30000
    }, {
      month: 'May',
      revenue: 45000,
      expenses: 32000
    }, {
      month: 'Jun',
      revenue: 48000,
      expenses: 34000
    }],
    trafficData: [{
      day: 'Mon',
      customers: 85
    }, {
      day: 'Tue',
      customers: 90
    }, {
      day: 'Wed',
      customers: 95
    }, {
      day: 'Thu',
      customers: 100
    }, {
      day: 'Fri',
      customers: 110
    }, {
      day: 'Sat',
      customers: 145
    }, {
      day: 'Sun',
      customers: 125
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 70
    }, {
      name: 'Services',
      value: 20
    }, {
      name: 'Other',
      value: 10
    }],
    growthData: [{
      month: 'Jan',
      revenue: 32000
    }, {
      month: 'Feb',
      revenue: 34000
    }, {
      month: 'Mar',
      revenue: 38000
    }, {
      month: 'Apr',
      revenue: 42000
    }, {
      month: 'May',
      revenue: 45000
    }, {
      month: 'Jun',
      revenue: 48000
    }],
    highlights: ['Established wholesale and retail operations', 'Strong relationships with local landscapers', 'Large outdoor growing area', 'Expert horticultural staff', 'Seasonal event programming', 'Growing online sales channel'],
    assets: ['Greenhouse and growing facilities', 'Irrigation systems', 'Delivery vehicles', 'Plant inventory', 'Customer database', 'Garden center equipment']
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
    established: '2014',
    employees: 11,
    website: 'www.bookhaven.com',
    email: 'hello@bookhaven.com',
    phone: '+1 (555) 678-9012',
    fullDescription: 'BookHaven Store is a beloved independent bookstore that has been serving the arts district community since 2014. More than just a bookstore, it features a cozy cafe, events space for author readings and book clubs, and has cultivated a loyal following of book enthusiasts. The business combines retail, food service, and community programming for multiple revenue streams.',
    revenueExpensesData: [{
      month: 'Jan',
      revenue: 38000,
      expenses: 30000
    }, {
      month: 'Feb',
      revenue: 39000,
      expenses: 31000
    }, {
      month: 'Mar',
      revenue: 40000,
      expenses: 32000
    }, {
      month: 'Apr',
      revenue: 42000,
      expenses: 33000
    }, {
      month: 'May',
      revenue: 44000,
      expenses: 34000
    }, {
      month: 'Jun',
      revenue: 46000,
      expenses: 35000
    }],
    trafficData: [{
      day: 'Mon',
      customers: 115
    }, {
      day: 'Tue',
      customers: 125
    }, {
      day: 'Wed',
      customers: 130
    }, {
      day: 'Thu',
      customers: 145
    }, {
      day: 'Fri',
      customers: 165
    }, {
      day: 'Sat',
      customers: 210
    }, {
      day: 'Sun',
      customers: 180
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 65
    }, {
      name: 'Services',
      value: 25
    }, {
      name: 'Other',
      value: 10
    }],
    growthData: [{
      month: 'Jan',
      revenue: 38000
    }, {
      month: 'Feb',
      revenue: 39000
    }, {
      month: 'Mar',
      revenue: 40000
    }, {
      month: 'Apr',
      revenue: 42000
    }, {
      month: 'May',
      revenue: 44000
    }, {
      month: 'Jun',
      revenue: 46000
    }],
    highlights: ['Independent bookstore with 10+ years operation', 'Integrated cafe with beverage service', 'Events space for author readings and clubs', 'Strong community following', 'Curated selection and expert recommendations', 'Active social media and newsletter'],
    assets: ['Book inventory (8,000+ titles)', 'Cafe equipment and supplies', 'Events space furnishings', 'Point of sale system', 'Customer loyalty program', 'Publisher relationships and accounts']
  }] as any[];
  const categories = ['all', 'COFFEE & TEA', 'RESTAURANT', 'FITNESS', 'TECHNOLOGY', 'RETAIL'];
  const priceRanges = [{
    label: 'All Prices',
    value: 'all'
  }, {
    label: 'Under $200K',
    value: 'under200'
  }, {
    label: '$200K - $400K',
    value: '200to400'
  }, {
    label: 'Over $400K',
    value: 'over400'
  }];
  const filterListings = (list: any[]) => {
    let filtered = [...list];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Price range filter (preset ranges)
    if (priceRange !== 'all') {
      filtered = filtered.filter(item => {
        const price = parseInt(item.price.replace(/[$,]/g, ''));
        if (priceRange === 'under200') return price < 200000;
        if (priceRange === '200to400') return price >= 200000 && price <= 400000;
        if (priceRange === 'over400') return price > 400000;
        return true;
      });
    }

    // Custom min/max price filter
    if (minPrice) {
      const min = parseInt(minPrice);
      if (!isNaN(min)) {
        filtered = filtered.filter(item => {
          const price = parseInt(item.price.replace(/[$,]/g, ''));
          return price >= min;
        });
      }
    }

    if (maxPrice) {
      const max = parseInt(maxPrice);
      if (!isNaN(max)) {
        filtered = filtered.filter(item => {
          const price = parseInt(item.price.replace(/[$,]/g, ''));
          return price <= max;
        });
      }
    }

    // Investment type filter (if any types are selected)
    if (selectedInvestmentTypes.length > 0) {
      // Note: This would need to match against listing data. For now, we'll filter by category
      // You may want to add an 'investmentType' field to your listings data
      filtered = filtered.filter(item => {
        // This is a placeholder - adjust based on your actual data structure
        return true; // For now, don't filter by investment type until data structure is updated
      });
    }

    return filtered;
  };
  const filteredListings = filterListings(listings);
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
  const handleViewDetails = (listing: any) => {
    setSelectedBusiness(listing);
  };
  if (selectedBusiness) {
    return <BusinessDetails business={selectedBusiness} onBack={() => setSelectedBusiness(null)} />;
  }
  return <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-900 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>

          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2">All Listings</h1>

          <div className="flex items-center gap-2">
            <button onClick={() => setShowAIAdvisor(true)} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors">
              <Sparkles className="w-6 h-6 text-white" />
            </button>

            <button onClick={() => setShowMenu(true)} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>


      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-8">
        {filteredListings.length === 0 ? <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No listings match your filters</p>
            <button onClick={() => {
          setSelectedCategory('all');
          setPriceRange('all');
        }} className="mt-4 text-blue-500 hover:text-blue-400 transition-colors">
              Clear filters
            </button>
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all" onClick={() => handleViewDetails(listing)}>
              {/* Image */}
              <div className="relative h-56">
                <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />

                {/* Star Icon */}
                <button onClick={e => {
              e.stopPropagation();
              handleBookmark(listing);
            }} className="absolute top-3 left-3 w-9 h-9 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                  <Star className={`w-5 h-5 ${bookmarkedIds.has(listing.id) ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} />
                </button>

                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-[#0B1A33] px-4 py-2 rounded-full">
                  <span className="text-[#4169E1] font-bold text-lg">{listing.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-[#4169E1] text-xs font-bold mb-2 uppercase tracking-wide">
                  {listing.category}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#4169E1] transition-colors">
                  {listing.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{listing.description}</p>

                {/* Stats */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-300">{listing.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span className="text-green-500 font-semibold">{listing.revenue}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-300">Margin: {listing.margin}</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors">
                  View Details
                </button>
              </div>
            </div>)}
          </div>}
      </main>

      {/* Panels */}
      <AIAdvisorPanel isOpen={showAIAdvisor} onClose={() => setShowAIAdvisor(false)} onLogout={onLogout} />
      <MenuPanel isOpen={showMenu} onClose={() => setShowMenu(false)} savedListings={savedListings} onNavigateHome={onBack} onNavigateMyListings={() => {
      setShowMenu(false);
      alert('My Listings feature coming soon!');
    }} onNavigateSettings={() => {
      setShowMenu(false);
      alert('Settings feature coming soon!');
    }} onNavigateFilter={() => {
      setShowMenu(false);
      setShowFilters(true);
    }} onLogout={onLogout} />
      <FilterPopup isOpen={showFilters} onClose={() => setShowFilters(false)} minPrice={minPrice} maxPrice={maxPrice} selectedInvestmentTypes={selectedInvestmentTypes} onMinPriceChange={setMinPrice} onMaxPriceChange={setMaxPrice} onInvestmentTypesChange={setSelectedInvestmentTypes} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} priceRange={priceRange} onPriceRangeChange={setPriceRange} />
    </div>;
};