"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Menu as MenuIcon, MapPin, DollarSign, TrendingUp, Star, User } from 'lucide-react';
import { AIAdvisorPanel } from './AIAdvisorPanel';
import { MenuPanel } from './MenuPanel';
import { BusinessDetails } from './BusinessDetails';
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
      expenses: 28000,
      mpid: "f93c6b00-ee20-41aa-b33d-8400013b7c0f"
    }, {
      month: 'Feb',
      revenue: 45000,
      expenses: 29000,
      mpid: "ceaf5eab-c625-400e-8b50-ce31a7e79c2a"
    }, {
      month: 'Mar',
      revenue: 48000,
      expenses: 30000,
      mpid: "7149dc35-0acc-49f2-b283-663bb4422270"
    }, {
      month: 'Apr',
      revenue: 52000,
      expenses: 31000,
      mpid: "f6535c72-6f3d-4f77-9415-3ddd98ed8703"
    }, {
      month: 'May',
      revenue: 55000,
      expenses: 32000,
      mpid: "825ae294-3e50-4542-ad5d-9b8a4e3099c1"
    }, {
      month: 'Jun',
      revenue: 58000,
      expenses: 33000,
      mpid: "253b6ad4-18cf-4c2f-bba3-f780cda849d1"
    }],
    trafficData: [{
      day: 'Mon',
      customers: 120,
      mpid: "88d77bf1-9520-4671-a57d-bb18afea5041"
    }, {
      day: 'Tue',
      customers: 135,
      mpid: "f34bd050-f4ab-4f87-a1a8-a8836d04b459"
    }, {
      day: 'Wed',
      customers: 140,
      mpid: "87701c3b-b814-44e9-bf23-995d83bb2b22"
    }, {
      day: 'Thu',
      customers: 155,
      mpid: "f5e48cd2-3ccb-47f2-b9c6-aa18451db3b1"
    }, {
      day: 'Fri',
      customers: 200,
      mpid: "5f95ee4d-6740-450e-adec-151e1ec4b2d2"
    }, {
      day: 'Sat',
      customers: 250,
      mpid: "8b3b7901-3152-42ba-a024-47a77681f7cf"
    }, {
      day: 'Sun',
      customers: 180,
      mpid: "9c59cf37-35eb-469e-858f-ffd529aba109"
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 60,
      mpid: "17b1d685-4ac0-418b-8c6e-b63aeffe11a4"
    }, {
      name: 'Services',
      value: 25,
      mpid: "d6bd6b3d-54ea-4ffe-bb74-ec96c9648e44"
    }, {
      name: 'Other',
      value: 15,
      mpid: "8ebd1737-78ee-434f-be7c-ab2dad52df5d"
    }],
    growthData: [{
      month: 'Jan',
      revenue: 42000,
      mpid: "b9f9ca95-201d-40ea-863b-01024b69fee8"
    }, {
      month: 'Feb',
      revenue: 45000,
      mpid: "4452b6af-d2d8-467c-9d17-806c4b4411c6"
    }, {
      month: 'Mar',
      revenue: 48000,
      mpid: "465e7dba-d63f-4eed-b138-408c9fc25ca4"
    }, {
      month: 'Apr',
      revenue: 52000,
      mpid: "eaadd5da-c3ca-4ccb-9f5f-c517c7518990"
    }, {
      month: 'May',
      revenue: 55000,
      mpid: "36fbb2d8-6ac7-40c4-a0c9-2baaeeaa4e5e"
    }, {
      month: 'Jun',
      revenue: 58000,
      mpid: "a1a6a876-e0b9-46ac-ab9c-1eb36de97f27"
    }],
    highlights: ['Prime downtown location with high foot traffic', 'Loyal customer base with 70% repeat customers', 'Exclusive roasting partnerships', 'Modern equipment fully maintained', 'Strong social media presence with 15K+ followers', 'Excellent online reviews (4.8/5 stars)'],
    assets: ['Commercial espresso machines and equipment', 'Furniture and interior decor', 'Point of sale system', 'Inventory management software', 'Customer loyalty program database', 'Trademark and branding materials'],
    mpid: "1ca390f1-0c77-4178-b636-564b8bdf8ccd"
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
      expenses: 48000,
      mpid: "c1f03dab-c888-425d-aea5-d0af3823e2d7"
    }, {
      month: 'Feb',
      revenue: 70000,
      expenses: 49000,
      mpid: "984ef8e1-6533-48fa-8329-b0bc87a79473"
    }, {
      month: 'Mar',
      revenue: 72000,
      expenses: 50000,
      mpid: "447287dd-8955-482e-bd3d-62d92e46967a"
    }, {
      month: 'Apr',
      revenue: 75000,
      expenses: 52000,
      mpid: "eacded7e-0143-4323-93d3-13ae61926f66"
    }, {
      month: 'May',
      revenue: 78000,
      expenses: 54000,
      mpid: "864d6cd7-eb75-4cd0-bc1b-033ef4b5e70d"
    }, {
      month: 'Jun',
      revenue: 82000,
      expenses: 56000,
      mpid: "e4438232-e39a-49d6-9b8e-78f2ad7251e2"
    }],
    trafficData: [{
      day: 'Mon',
      customers: 110,
      mpid: "0f45be1f-4748-4559-8edb-de5865d7e0dc"
    }, {
      day: 'Tue',
      customers: 125,
      mpid: "f81b71d4-d936-4dc7-96f3-66e389ba216a"
    }, {
      day: 'Wed',
      customers: 135,
      mpid: "4c1d784c-5c19-4f0a-b95d-125d20cd7c00"
    }, {
      day: 'Thu',
      customers: 150,
      mpid: "10bf7212-1575-467a-bdbe-d24e4ff67298"
    }, {
      day: 'Fri',
      customers: 195,
      mpid: "e51c5220-3337-48c6-a5c1-fe5ff5550820"
    }, {
      day: 'Sat',
      customers: 245,
      mpid: "67d3fa6c-fad1-4058-89f5-699e30744851"
    }, {
      day: 'Sun',
      customers: 175,
      mpid: "90fa32ef-68ea-407c-9a28-24f53b737d11"
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 60,
      mpid: "1ae196e7-1b4a-4976-acf9-6965bc59af16"
    }, {
      name: 'Services',
      value: 25,
      mpid: "dce76e1b-5aa0-4935-a511-1119981f4b01"
    }, {
      name: 'Other',
      value: 15,
      mpid: "58feac54-3f3b-4cd2-be02-de3e54b19f45"
    }],
    growthData: [{
      month: 'Jan',
      revenue: 68000,
      mpid: "2d70716d-f899-45ac-bdc3-383140fe0bca"
    }, {
      month: 'Feb',
      revenue: 70000,
      mpid: "2a29bea4-a4a4-420f-aa3a-101223320e8f"
    }, {
      month: 'Mar',
      revenue: 72000,
      mpid: "61a7d8a7-d04a-4043-9702-bad9e0ef3639"
    }, {
      month: 'Apr',
      revenue: 75000,
      mpid: "0a2da18d-62eb-40a0-a28b-a61685f45ff3"
    }, {
      month: 'May',
      revenue: 78000,
      mpid: "47876bab-316d-4f4c-afca-1b40a3c2ee9d"
    }, {
      month: 'Jun',
      revenue: 82000,
      mpid: "14e3f9a9-4054-40ac-b12d-e19f4fb58ee2"
    }],
    highlights: ['Established brand with 8+ years of operation', 'Exclusive family recipes and menu', 'Full liquor license included', 'Seating capacity of 80 guests', 'Strong catering and events business', 'Excellent online reviews and reputation'],
    assets: ['Commercial kitchen equipment', 'Dining room furniture and decor', 'Liquor license', 'POS and reservation system', 'Wine inventory', 'Recipes and operational procedures'],
    mpid: "02514402-1847-4333-94e1-b7d5829eedee"
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
      expenses: 38000,
      mpid: "b11f6ac1-9287-4c76-8304-95ce831211b0"
    }, {
      month: 'Feb',
      revenue: 54000,
      expenses: 39000,
      mpid: "38bcd0f7-4d31-428e-974b-c226a27721d4"
    }, {
      month: 'Mar',
      revenue: 56000,
      expenses: 40000,
      mpid: "937a78e7-066f-415c-afce-a732d1a0640e"
    }, {
      month: 'Apr',
      revenue: 58000,
      expenses: 41000,
      mpid: "2eb230ee-9606-4c25-9463-9b7976e62316"
    }, {
      month: 'May',
      revenue: 60000,
      expenses: 42000,
      mpid: "55d7abae-facc-4aab-bfb1-304d49661e6d"
    }, {
      month: 'Jun',
      revenue: 62000,
      expenses: 43000,
      mpid: "4ce31917-69e1-428b-a58a-06cb30533d97"
    }],
    trafficData: [{
      day: 'Mon',
      customers: 185,
      mpid: "4865323b-7041-4e8f-92d7-f746dcf2054b"
    }, {
      day: 'Tue',
      customers: 195,
      mpid: "abad9188-924b-4828-9b99-4bac02353a0c"
    }, {
      day: 'Wed',
      customers: 210,
      mpid: "468cdd75-ff54-4c40-8ffa-f2788acb9183"
    }, {
      day: 'Thu',
      customers: 200,
      mpid: "8571da94-7b63-463e-95da-1c0f71b5e649"
    }, {
      day: 'Fri',
      customers: 175,
      mpid: "79404816-1aa0-45c5-9bac-c790b9e5e2c6"
    }, {
      day: 'Sat',
      customers: 160,
      mpid: "18beb693-c7f6-4d7e-8d96-4d4d048249f3"
    }, {
      day: 'Sun',
      customers: 145,
      mpid: "03b803ce-955c-428e-b926-8405c8f2fb43"
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 55,
      mpid: "0ceba442-a300-4b16-9d2c-74ee4a6dc63c"
    }, {
      name: 'Services',
      value: 35,
      mpid: "d9947c11-dad6-4188-942f-e749a14ea368"
    }, {
      name: 'Other',
      value: 10,
      mpid: "5d2ca0c9-7023-42b2-98bb-df5491237d77"
    }],
    growthData: [{
      month: 'Jan',
      revenue: 52000,
      mpid: "f97d4ed8-1376-4260-952f-8b8a5b39d0f8"
    }, {
      month: 'Feb',
      revenue: 54000,
      mpid: "9d4f4d33-2372-47d1-9d57-333dd260cfd4"
    }, {
      month: 'Mar',
      revenue: 56000,
      mpid: "4ff58fa5-1fdd-42b0-8b24-9a52f09c8aa1"
    }, {
      month: 'Apr',
      revenue: 58000,
      mpid: "5cc3ebcb-fa89-4d76-8448-ecd66ac969db"
    }, {
      month: 'May',
      revenue: 60000,
      mpid: "1b7aa033-56dc-42dc-a904-920999ac7fff"
    }, {
      month: 'Jun',
      revenue: 62000,
      mpid: "2694fbbf-f91c-47c5-a974-4334c5a70937"
    }],
    highlights: ['500+ active members with recurring revenue', 'Modern equipment and facilities', 'Established personal training program', 'Group fitness classes included', 'Strong member retention rate (85%)', 'Prime suburban location with parking'],
    assets: ['State-of-the-art fitness equipment', 'Sound system and lighting', 'Locker room facilities', 'Member management software', 'Personal training equipment', 'Marketing materials and branding'],
    mpid: "2267bfbc-2db3-4d4a-9ff9-b4a41530f496"
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
      expenses: 17000,
      mpid: "08c65511-3967-4072-b0e8-002d8f3e6603"
    }, {
      month: 'Feb',
      revenue: 27000,
      expenses: 17500,
      mpid: "8ae222f6-f6b6-4057-a3cd-47f8a947668d"
    }, {
      month: 'Mar',
      revenue: 28000,
      expenses: 18000,
      mpid: "b92559ac-2af7-4d47-88c1-d3a9e2b27c00"
    }, {
      month: 'Apr',
      revenue: 29000,
      expenses: 18500,
      mpid: "eb9b19e5-10b7-4e14-ba7d-ee4abd5443ef"
    }, {
      month: 'May',
      revenue: 30000,
      expenses: 19000,
      mpid: "c8402d76-ac36-405f-a7d1-7d04d74872c7"
    }, {
      month: 'Jun',
      revenue: 31000,
      expenses: 19500,
      mpid: "15655d5d-8a81-44f0-bac7-f9d93293302c"
    }],
    trafficData: [{
      day: 'Mon',
      customers: 95,
      mpid: "6a095022-80b7-419f-8fb2-47077d0c49db"
    }, {
      day: 'Tue',
      customers: 105,
      mpid: "c6749417-298d-41db-be2f-d9224551ab7f"
    }, {
      day: 'Wed',
      customers: 110,
      mpid: "1cd7bbba-a96e-4115-96c5-b0756eaab00c"
    }, {
      day: 'Thu',
      customers: 115,
      mpid: "59e55155-01f9-4dda-9b94-76c193f27e1c"
    }, {
      day: 'Fri',
      customers: 125,
      mpid: "ac3ee061-0ec7-466b-a113-bf002c48b914"
    }, {
      day: 'Sat',
      customers: 100,
      mpid: "3900dab7-2394-4270-93f6-d0b83a4aa310"
    }, {
      day: 'Sun',
      customers: 75,
      mpid: "1903f5d3-687d-4c2c-8918-7016dbcbe89c"
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 45,
      mpid: "0d23c9f5-9889-48cd-87b8-b121f931c64f"
    }, {
      name: 'Services',
      value: 45,
      mpid: "0bd829f2-6769-4c53-9fd1-9f41a792ca46"
    }, {
      name: 'Other',
      value: 10,
      mpid: "b984b645-3eb6-44f9-812a-67f3bd63018c"
    }],
    growthData: [{
      month: 'Jan',
      revenue: 26000,
      mpid: "967f60fb-79f0-4055-9531-f6bdc779699c"
    }, {
      month: 'Feb',
      revenue: 27000,
      mpid: "ef161914-bb1b-4426-a320-67967a71dd0c"
    }, {
      month: 'Mar',
      revenue: 28000,
      mpid: "f0d842ef-716f-43ae-b6b0-82f44ce41c24"
    }, {
      month: 'Apr',
      revenue: 29000,
      mpid: "a216a9cd-6370-471b-a202-3f9603b61db6"
    }, {
      month: 'May',
      revenue: 30000,
      mpid: "731c7a09-8ea3-4226-8b78-27ad114d41b2"
    }, {
      month: 'Jun',
      revenue: 31000,
      mpid: "733aca19-c162-4132-a24b-eae16d30e019"
    }],
    highlights: ['Corporate service contracts established', 'Strong online presence and reviews', 'Certified technicians on staff', 'Relationships with major suppliers', 'Fast turnaround times', 'Warranty programs in place'],
    assets: ['Specialized repair equipment and tools', 'Parts inventory', 'Customer database', 'Service management software', 'Corporate contract agreements', 'Website and online booking system'],
    mpid: "b6d2ece7-b79f-4097-a943-dedd5ab03f36"
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
      expenses: 25000,
      mpid: "a8e3d1bd-23ff-4e2e-a9f1-3868c0818e42"
    }, {
      month: 'Feb',
      revenue: 34000,
      expenses: 26000,
      mpid: "4a877683-109c-4a85-8366-9fff527fbd3a"
    }, {
      month: 'Mar',
      revenue: 38000,
      expenses: 28000,
      mpid: "ec883517-2724-4258-a15f-dafb29867124"
    }, {
      month: 'Apr',
      revenue: 42000,
      expenses: 30000,
      mpid: "c165ca7e-fdcc-47c3-9e0e-942a6d241287"
    }, {
      month: 'May',
      revenue: 45000,
      expenses: 32000,
      mpid: "8a3f1d20-ab7d-49d3-be80-4c652200ee83"
    }, {
      month: 'Jun',
      revenue: 48000,
      expenses: 34000,
      mpid: "c1087b3d-f839-4008-867e-8ccadd536088"
    }],
    trafficData: [{
      day: 'Mon',
      customers: 85,
      mpid: "e4f62966-1281-4c13-839d-e20a6a48e227"
    }, {
      day: 'Tue',
      customers: 90,
      mpid: "c86a3780-9ead-4c6a-8eea-4f111569efcb"
    }, {
      day: 'Wed',
      customers: 95,
      mpid: "057b910f-af90-4e29-b1cf-9313c117147a"
    }, {
      day: 'Thu',
      customers: 100,
      mpid: "f4dbb675-7b9b-4980-82f6-117e8969e353"
    }, {
      day: 'Fri',
      customers: 110,
      mpid: "6a6fa06d-5b32-4b2b-b02a-03d52101e53f"
    }, {
      day: 'Sat',
      customers: 145,
      mpid: "ea014f16-4cc6-4c7e-bcad-fe3f90ab101e"
    }, {
      day: 'Sun',
      customers: 125,
      mpid: "f8c08d6b-9005-4623-9696-1859824efcda"
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 70,
      mpid: "07be8246-be1c-4723-a12f-9772f7d9eafa"
    }, {
      name: 'Services',
      value: 20,
      mpid: "2a462a9c-c505-4117-b10b-27bbd579f8e7"
    }, {
      name: 'Other',
      value: 10,
      mpid: "b168206b-5a4e-47bd-aa30-4b781b72d598"
    }],
    growthData: [{
      month: 'Jan',
      revenue: 32000,
      mpid: "59a8ce60-65bd-4de4-b0a0-994f779d1d85"
    }, {
      month: 'Feb',
      revenue: 34000,
      mpid: "6c9a0f8a-b760-4b42-868f-97d9a20adec1"
    }, {
      month: 'Mar',
      revenue: 38000,
      mpid: "8132027c-169c-4c8e-a84f-9b0245b98898"
    }, {
      month: 'Apr',
      revenue: 42000,
      mpid: "0c63987f-0f98-4618-9502-82af34b67997"
    }, {
      month: 'May',
      revenue: 45000,
      mpid: "957a1b33-c083-4ab1-bd9f-a02a2c6e7431"
    }, {
      month: 'Jun',
      revenue: 48000,
      mpid: "807c3730-7920-4df7-a21b-3d9faf02fc7c"
    }],
    highlights: ['Established wholesale and retail operations', 'Strong relationships with local landscapers', 'Large outdoor growing area', 'Expert horticultural staff', 'Seasonal event programming', 'Growing online sales channel'],
    assets: ['Greenhouse and growing facilities', 'Irrigation systems', 'Delivery vehicles', 'Plant inventory', 'Customer database', 'Garden center equipment'],
    mpid: "f1643f1d-7eb4-4c2a-a470-7ed9b6bae620"
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
      expenses: 30000,
      mpid: "af84e987-fd44-427a-bc7b-f811a647343c"
    }, {
      month: 'Feb',
      revenue: 39000,
      expenses: 31000,
      mpid: "266b83d1-2033-43a3-8f19-995792cf24bb"
    }, {
      month: 'Mar',
      revenue: 40000,
      expenses: 32000,
      mpid: "7ef9c1ba-4f9a-4aa4-9129-9d850674d7c4"
    }, {
      month: 'Apr',
      revenue: 42000,
      expenses: 33000,
      mpid: "93a0f313-5d3a-40c7-bdb6-dea6e37bd039"
    }, {
      month: 'May',
      revenue: 44000,
      expenses: 34000,
      mpid: "b567065c-ba45-4c4a-95d9-98a331510c45"
    }, {
      month: 'Jun',
      revenue: 46000,
      expenses: 35000,
      mpid: "1229762c-488f-4805-b3f2-0cea2ec75be4"
    }],
    trafficData: [{
      day: 'Mon',
      customers: 115,
      mpid: "55062b75-d621-4f0d-b1da-55f9c43e7b1a"
    }, {
      day: 'Tue',
      customers: 125,
      mpid: "99f7304e-1d6d-411d-a647-a55de15872d2"
    }, {
      day: 'Wed',
      customers: 130,
      mpid: "e4b94353-4800-42d3-a278-7fcf359db0ce"
    }, {
      day: 'Thu',
      customers: 145,
      mpid: "457d4ffc-ff6b-4a04-81d8-168917e20454"
    }, {
      day: 'Fri',
      customers: 165,
      mpid: "20361020-c212-4e2e-a8f8-5d6e50e87246"
    }, {
      day: 'Sat',
      customers: 210,
      mpid: "3a09fb44-25ca-4af5-aa89-9fd2926429e1"
    }, {
      day: 'Sun',
      customers: 180,
      mpid: "429c8ff6-1d27-45e1-a671-3a80f6357efd"
    }],
    distributionData: [{
      name: 'Product Sales',
      value: 65,
      mpid: "7c2812e3-adb3-4338-9e7e-e15a71f4e1b1"
    }, {
      name: 'Services',
      value: 25,
      mpid: "3ba8fb56-add7-48f8-8184-a4a503258626"
    }, {
      name: 'Other',
      value: 10,
      mpid: "926a946f-cea3-4547-b9cc-525ab84b1d33"
    }],
    growthData: [{
      month: 'Jan',
      revenue: 38000,
      mpid: "20ad6bc2-d248-45fa-83a9-c4d5b4b16365"
    }, {
      month: 'Feb',
      revenue: 39000,
      mpid: "60f9c758-8fdb-425b-a11d-f76d194e59d9"
    }, {
      month: 'Mar',
      revenue: 40000,
      mpid: "455d953e-ceba-4866-892a-91b110e2a871"
    }, {
      month: 'Apr',
      revenue: 42000,
      mpid: "2fee202c-3020-42d4-8cad-7e5756025aac"
    }, {
      month: 'May',
      revenue: 44000,
      mpid: "9919ddd7-6beb-4e40-b1de-b81c0d652ce3"
    }, {
      month: 'Jun',
      revenue: 46000,
      mpid: "f4096bc3-fada-4366-bc74-16f394e1447a"
    }],
    highlights: ['Independent bookstore with 10+ years operation', 'Integrated cafe with beverage service', 'Events space for author readings and clubs', 'Strong community following', 'Curated selection and expert recommendations', 'Active social media and newsletter'],
    assets: ['Book inventory (8,000+ titles)', 'Cafe equipment and supplies', 'Events space furnishings', 'Point of sale system', 'Customer loyalty program', 'Publisher relationships and accounts'],
    mpid: "d8e143d8-d7fb-4d07-ba1d-14ed56af1bb1"
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
  const handleViewDetails = (listing: any) => {
    setSelectedBusiness(listing);
  };
  if (selectedBusiness) {
    return <BusinessDetails business={selectedBusiness} onBack={() => setSelectedBusiness(null)} data-magicpath-id="0" data-magicpath-path="AllListings.tsx" />;
  }
  return <SortableContainer dndKitId="80eb0db8-c309-4d65-aae6-bf6dd95339b4" containerType="regular" prevTag="div" className="min-h-screen bg-black text-white" data-magicpath-id="1" data-magicpath-path="AllListings.tsx">
      {/* Header */}
      <SortableContainer dndKitId="1152ee35-cb43-4ecc-8319-07ac7b2c0824" containerType="regular" prevTag="header" className="border-b border-gray-900 px-6 py-4" data-magicpath-id="2" data-magicpath-path="AllListings.tsx">
        <SortableContainer dndKitId="76378617-a392-4927-8ac2-8e0f3ea9b67b" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="3" data-magicpath-path="AllListings.tsx">
          <SortableContainer dndKitId="ba504a9e-84c9-416a-b88c-2cc57c1d7736" containerType="regular" prevTag="button" onClick={onBack} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="4" data-magicpath-path="AllListings.tsx">
            <ArrowLeft className="w-6 h-6" data-magicpath-id="5" data-magicpath-path="AllListings.tsx" />
          </SortableContainer>

          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2" data-magicpath-id="6" data-magicpath-path="AllListings.tsx">All Listings</h1>

          <SortableContainer dndKitId="2c97db2f-5d35-4355-934e-963110c23f5d" containerType="regular" prevTag="div" className="flex items-center gap-2" data-magicpath-id="7" data-magicpath-path="AllListings.tsx">
            <SortableContainer dndKitId="57af00e5-885d-4d73-ba77-be2d63430b19" containerType="regular" prevTag="button" onClick={() => setShowAIAdvisor(true)} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="8" data-magicpath-path="AllListings.tsx">
              <Sparkles className="w-6 h-6 text-white" />
            </SortableContainer>

            {isLoggedIn && userData ? <SortableContainer dndKitId="3c7374b5-11a0-40d6-ba0f-e921be18827d" containerType="regular" prevTag="div" className="flex items-center gap-2 ml-2" data-magicpath-id="9" data-magicpath-path="AllListings.tsx">
                {userData.profilePicture ? <img src={userData.profilePicture} alt={userData.firstName} className="w-10 h-10 rounded-full object-cover border-2 border-blue-600" data-magicpath-id="10" data-magicpath-path="AllListings.tsx" /> : <SortableContainer dndKitId="3c67f0a9-7677-428b-b7f2-fe4cf2b330f5" containerType="regular" prevTag="div" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="AllListings.tsx">
                    <User className="w-5 h-5 text-white" data-magicpath-id="12" data-magicpath-path="AllListings.tsx" />
                  </SortableContainer>}
                <span className="text-white font-medium" data-magicpath-id="13" data-magicpath-path="AllListings.tsx">{userData.firstName}</span>
              </SortableContainer> : null}

            <SortableContainer dndKitId="c15da152-9220-4ac8-adda-6352809e752c" containerType="regular" prevTag="button" onClick={() => setShowMenu(true)} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="14" data-magicpath-path="AllListings.tsx">
              <MenuIcon className="w-6 h-6" data-magicpath-id="15" data-magicpath-path="AllListings.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Main Content */}
      <SortableContainer dndKitId="b75f8aca-4125-46c5-8516-278acf9a7c05" containerType="regular" prevTag="main" className="max-w-[1400px] mx-auto px-6 py-8" data-magicpath-id="16" data-magicpath-path="AllListings.tsx">
        <SortableContainer dndKitId="5c2718f4-2ab6-4dad-bbfe-031fbd76e15e" containerType="collection" prevTag="div" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="17" data-magicpath-path="AllListings.tsx">
          {listings.map(listing => <div key={listing.id} className="bg-[#0B1A33] rounded-2xl overflow-hidden group cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all" onClick={() => handleViewDetails(listing)} data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="AllListings.tsx">
              {/* Image */}
              <div className="relative h-56" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="AllListings.tsx">
                <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:string" data-magicpath-id="20" data-magicpath-path="AllListings.tsx" />

                {/* Star Icon */}
                <button onClick={e => {
              e.stopPropagation();
              handleBookmark(listing);
            }} className="absolute top-3 left-3 w-9 h-9 bg-gray-900/80 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="AllListings.tsx">
                  <Star className={`w-5 h-5 ${bookmarkedIds.has(listing.id) ? 'text-yellow-500 fill-yellow-500' : 'text-white'}`} data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="AllListings.tsx" />
                </button>

                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-[#0B1A33] px-4 py-2 rounded-full" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="AllListings.tsx">
                  <span className="text-[#4169E1] font-bold text-lg" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:string" data-magicpath-id="24" data-magicpath-path="AllListings.tsx">{listing.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="AllListings.tsx">
                <div className="text-[#4169E1] text-xs font-bold mb-2 uppercase tracking-wide" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:string" data-magicpath-id="26" data-magicpath-path="AllListings.tsx">
                  {listing.category}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#4169E1] transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="27" data-magicpath-path="AllListings.tsx">
                  {listing.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="28" data-magicpath-path="AllListings.tsx">{listing.description}</p>

                {/* Stats */}
                <div className="space-y-2 mb-5" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="AllListings.tsx">
                  <div className="flex items-center gap-2 text-sm" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="AllListings.tsx">
                    <MapPin className="w-4 h-4 text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="AllListings.tsx" />
                    <span className="text-gray-300" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="location:string" data-magicpath-id="32" data-magicpath-path="AllListings.tsx">{listing.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="AllListings.tsx">
                    <DollarSign className="w-4 h-4 text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="AllListings.tsx" />
                    <span className="text-green-500 font-semibold" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="revenue:string" data-magicpath-id="35" data-magicpath-path="AllListings.tsx">{listing.revenue}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="AllListings.tsx">
                    <TrendingUp className="w-4 h-4 text-gray-500" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="AllListings.tsx" />
                    <span className="text-gray-300" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-field="margin:string" data-magicpath-id="38" data-magicpath-path="AllListings.tsx">Margin: {listing.margin}</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-[#4169E1] hover:bg-[#3557C1] text-white py-3.5 rounded-2xl font-semibold transition-colors" data-magicpath-uuid={(listing as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="AllListings.tsx">
                  View Details
                </button>
              </div>
            </div>)}
        </SortableContainer>
      </SortableContainer>

      {/* Panels */}
      <AIAdvisorPanel isOpen={showAIAdvisor} onClose={() => setShowAIAdvisor(false)} onLogout={onLogout} data-magicpath-id="40" data-magicpath-path="AllListings.tsx" />
      <MenuPanel isOpen={showMenu} onClose={() => setShowMenu(false)} savedListings={savedListings} data-magicpath-id="41" data-magicpath-path="AllListings.tsx" />
    </SortableContainer>;
};