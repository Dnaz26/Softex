import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { ArrowLeft, Sparkles, Menu, MapPin, DollarSign, TrendingUp, Star } from 'lucide-react';
type AllListingsProps = {
  onBack: () => void;
};

// @component: AllListings
export const AllListings = ({
  onBack
}: AllListingsProps) => {
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
    featured: true,
    mpid: "a21e8261-5c10-4d86-8931-47032c3cc47d"
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
    featured: false,
    mpid: "e87256f5-2bb1-46a7-8a48-2194efab0f4e"
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
    featured: true,
    mpid: "611e7c89-7ac9-4a02-b9c7-bcc2a6f91ddc"
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
    featured: false,
    mpid: "bb25a862-c0e0-422b-9dcd-26d592f2a904"
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
    featured: false,
    mpid: "92feaee0-6cf3-40e2-a56c-b8e357f711fc"
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
    featured: false,
    mpid: "8a0a58c0-b710-4111-923e-950b63631f37"
  }] as any[];
  return <SortableContainer dndKitId="bd2db649-38e2-44ae-8444-de77d781944e" containerType="regular" prevTag="div" className="min-h-screen bg-black text-white" data-magicpath-id="0" data-magicpath-path="AllListings.tsx">
      {/* Header */}
      <SortableContainer dndKitId="c4bc2eee-5c30-4ced-98b7-3e48d953a4cb" containerType="regular" prevTag="header" className="border-b border-gray-900 px-6 py-4" data-magicpath-id="1" data-magicpath-path="AllListings.tsx">
        <SortableContainer dndKitId="74bc71bd-4594-4e3d-979f-c444a5fd0217" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="AllListings.tsx">
          <SortableContainer dndKitId="03a8032a-33a7-4f45-ad47-f12e463bdfad" containerType="regular" prevTag="button" onClick={onBack} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="3" data-magicpath-path="AllListings.tsx">
            <ArrowLeft className="w-6 h-6" data-magicpath-id="4" data-magicpath-path="AllListings.tsx" />
          </SortableContainer>
          
          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2" data-magicpath-id="5" data-magicpath-path="AllListings.tsx">
            All Listings
          </h1>
          
          <SortableContainer dndKitId="75c49735-6c78-4e1a-a46f-48cda53a342e" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="6" data-magicpath-path="AllListings.tsx">
            <SortableContainer dndKitId="3da97487-be4f-4cb8-96ce-e77095a30685" containerType="regular" prevTag="button" className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="7" data-magicpath-path="AllListings.tsx">
              <Sparkles className="w-6 h-6" />
            </SortableContainer>
            <SortableContainer dndKitId="e1d60552-1eab-41e2-83be-459348aabe82" containerType="regular" prevTag="button" className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="8" data-magicpath-path="AllListings.tsx">
              <Menu className="w-6 h-6" data-magicpath-id="9" data-magicpath-path="AllListings.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Main Content */}
      <SortableContainer dndKitId="0767855b-d60d-48fd-9927-7940273b71b2" containerType="regular" prevTag="main" className="max-w-[1400px] mx-auto px-6 py-8" data-magicpath-id="10" data-magicpath-path="AllListings.tsx">
        <SortableContainer dndKitId="628174a6-35d6-41a1-9cc4-b50f368c1459" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="11" data-magicpath-path="AllListings.tsx">
          {listings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="AllListings.tsx">
              {/* Image */}
              <div className="relative h-56" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="AllListings.tsx">
                <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:string" data-magicpath-id="14" data-magicpath-path="AllListings.tsx" />
                
                {/* Star Icon */}
                <div className="absolute top-3 left-3" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="AllListings.tsx">
                  {listing.featured ? <div className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="AllListings.tsx">
                      <Star className="w-5 h-5 text-white fill-white" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="AllListings.tsx" />
                    </div> : <div className="w-9 h-9 bg-gray-900/80 rounded-full flex items-center justify-center" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="AllListings.tsx">
                      <Star className="w-5 h-5 text-white" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="AllListings.tsx" />
                    </div>}
                </div>
                
                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-[#0B1A33] px-4 py-2 rounded-full" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="AllListings.tsx">
                  <span className="text-[#4169E1] font-bold text-lg" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:string" data-magicpath-id="21" data-magicpath-path="AllListings.tsx">{listing.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="AllListings.tsx">
                <div className="text-[#4169E1] text-xs font-bold mb-2 uppercase tracking-wide" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:string" data-magicpath-id="23" data-magicpath-path="AllListings.tsx">
                  {listing.category}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#4169E1] transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="24" data-magicpath-path="AllListings.tsx">
                  {listing.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="25" data-magicpath-path="AllListings.tsx">
                  {listing.description}
                </p>

                {/* Stats */}
                <div className="space-y-2 mb-5" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="AllListings.tsx">
                  <div className="flex items-center gap-2 text-sm" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="AllListings.tsx">
                    <MapPin className="w-4 h-4 text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="AllListings.tsx" />
                    <span className="text-gray-300" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="location:string" data-magicpath-id="29" data-magicpath-path="AllListings.tsx">{listing.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="AllListings.tsx">
                    <DollarSign className="w-4 h-4 text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="AllListings.tsx" />
                    <span className="text-green-500 font-semibold" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="revenue:string" data-magicpath-id="32" data-magicpath-path="AllListings.tsx">{listing.revenue}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="AllListings.tsx">
                    <TrendingUp className="w-4 h-4 text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="AllListings.tsx" />
                    <span className="text-gray-300" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="margin:string" data-magicpath-id="35" data-magicpath-path="AllListings.tsx">Margin: {listing.margin}</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="AllListings.tsx">
                  View Details
                </button>
              </div>
            </div>)}
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};