"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { ArrowLeft, MapPin, Mail, Phone, Globe, DollarSign, TrendingUp, Calendar, Users, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
type BusinessDetailsProps = {
  business: {
    id: number;
    title: string;
    category: string;
    description: string;
    location: string;
    revenue: string;
    margin: string;
    price: string;
    image: string;
    established: string;
    employees: number;
    website: string;
    email: string;
    phone: string;
    fullDescription: string;
    revenueExpensesData: any[];
    trafficData: any[];
    distributionData: any[];
    growthData: any[];
    highlights: string[];
    assets: string[];
  };
  onBack: () => void;
};

// @component: BusinessDetails
export const BusinessDetails = ({
  business,
  onBack
}: BusinessDetailsProps) => {
  const COLORS = ['#4169E1', '#8B5CF6', '#10B981'];
  return <SortableContainer dndKitId="7e5155f0-0bde-46d4-ac08-4dd0628b37a1" containerType="regular" prevTag="div" className="min-h-screen bg-black text-white" data-magicpath-id="0" data-magicpath-path="BusinessDetails.tsx">
      {/* Header */}
      <SortableContainer dndKitId="1b227fe8-0b92-44ad-ae97-cc1acea8eff2" containerType="regular" prevTag="header" className="border-b border-gray-900 px-6 py-4" data-magicpath-id="1" data-magicpath-path="BusinessDetails.tsx">
        <SortableContainer dndKitId="26cee4eb-10b7-429e-8b5b-7bb60feaff28" containerType="regular" prevTag="div" className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="BusinessDetails.tsx">
          <SortableContainer dndKitId="893eae3e-ff2a-4a4c-b6cb-7d81e1583e85" containerType="regular" prevTag="button" onClick={onBack} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="3" data-magicpath-path="BusinessDetails.tsx">
            <ArrowLeft className="w-6 h-6" data-magicpath-id="4" data-magicpath-path="BusinessDetails.tsx" />
          </SortableContainer>

          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2" data-magicpath-id="5" data-magicpath-path="BusinessDetails.tsx">Business Details</h1>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors" data-magicpath-id="6" data-magicpath-path="BusinessDetails.tsx">
            Contact Seller
          </button>
        </SortableContainer>
      </SortableContainer>

      {/* Main Content */}
      <SortableContainer dndKitId="aefb2b5a-f0f9-42cc-a3b8-867b8575e1ae" containerType="regular" prevTag="main" className="max-w-[1400px] mx-auto px-6 py-8" data-magicpath-id="7" data-magicpath-path="BusinessDetails.tsx">
        {/* Hero Section */}
        <SortableContainer dndKitId="fca22adc-9141-4ce8-9b22-f36767a82427" containerType="regular" prevTag="div" className="bg-[#0B1A33] rounded-3xl overflow-hidden mb-8" data-magicpath-id="8" data-magicpath-path="BusinessDetails.tsx">
          <SortableContainer dndKitId="60e10e46-1c8b-42e8-ab16-2eb73aa71dbf" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-2 gap-0" data-magicpath-id="9" data-magicpath-path="BusinessDetails.tsx">
            {/* Image */}
            <SortableContainer dndKitId="e996e480-2ba4-4463-8519-26ec4645c8eb" containerType="regular" prevTag="div" className="relative h-[400px] lg:h-[500px]" data-magicpath-id="10" data-magicpath-path="BusinessDetails.tsx">
              <img src={business.image} alt={business.title} className="w-full h-full object-cover" data-magicpath-id="11" data-magicpath-path="BusinessDetails.tsx" />
              <SortableContainer dndKitId="19c182d4-aa1a-4f5a-9833-afb411e8baf4" containerType="regular" prevTag="div" className="absolute top-6 left-6 bg-blue-600 px-6 py-3 rounded-full" data-magicpath-id="12" data-magicpath-path="BusinessDetails.tsx">
                <span className="text-white font-bold text-2xl" data-magicpath-id="13" data-magicpath-path="BusinessDetails.tsx">{business.price}</span>
              </SortableContainer>
            </SortableContainer>

            {/* Info */}
            <SortableContainer dndKitId="e4660fca-c5bb-47cb-bc2b-940b4402504f" containerType="regular" prevTag="div" className="p-8 lg:p-12" data-magicpath-id="14" data-magicpath-path="BusinessDetails.tsx">
              <div className="text-blue-500 text-sm font-bold mb-3 uppercase tracking-wide" data-magicpath-id="15" data-magicpath-path="BusinessDetails.tsx">
                {business.category}
              </div>

              <h2 className="text-4xl font-bold mb-4 text-white" data-magicpath-id="16" data-magicpath-path="BusinessDetails.tsx">{business.title}</h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed" data-magicpath-id="17" data-magicpath-path="BusinessDetails.tsx">
                {business.description}
              </p>

              {/* Stats Grid */}
              <SortableContainer dndKitId="8e9de96f-32d6-49a7-a13a-487715b421ea" containerType="regular" prevTag="div" className="grid grid-cols-2 gap-4 mb-8" data-magicpath-id="18" data-magicpath-path="BusinessDetails.tsx">
                <SortableContainer dndKitId="8993562b-0acc-4f2b-9042-7ce5a1784b68" containerType="regular" prevTag="div" className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="19" data-magicpath-path="BusinessDetails.tsx">
                  <SortableContainer dndKitId="e17a28a0-a884-4392-bbd8-21f838ca94a9" containerType="regular" prevTag="div" className="flex items-center gap-2 text-green-500 mb-2" data-magicpath-id="20" data-magicpath-path="BusinessDetails.tsx">
                    <DollarSign className="w-5 h-5" data-magicpath-id="21" data-magicpath-path="BusinessDetails.tsx" />
                    <span className="text-sm font-medium" data-magicpath-id="22" data-magicpath-path="BusinessDetails.tsx">Annual Revenue</span>
                  </SortableContainer>
                  <div className="text-2xl font-bold text-white" data-magicpath-id="23" data-magicpath-path="BusinessDetails.tsx">{business.revenue}</div>
                </SortableContainer>

                <SortableContainer dndKitId="26a06cee-50aa-4183-acb5-439e3f8761c4" containerType="regular" prevTag="div" className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="24" data-magicpath-path="BusinessDetails.tsx">
                  <SortableContainer dndKitId="eb04b4e6-3b26-421f-b2fa-320340a750c1" containerType="regular" prevTag="div" className="flex items-center gap-2 text-blue-400 mb-2" data-magicpath-id="25" data-magicpath-path="BusinessDetails.tsx">
                    <TrendingUp className="w-5 h-5" data-magicpath-id="26" data-magicpath-path="BusinessDetails.tsx" />
                    <span className="text-sm font-medium" data-magicpath-id="27" data-magicpath-path="BusinessDetails.tsx">Profit Margin</span>
                  </SortableContainer>
                  <div className="text-2xl font-bold text-white" data-magicpath-id="28" data-magicpath-path="BusinessDetails.tsx">{business.margin}</div>
                </SortableContainer>

                <SortableContainer dndKitId="6bd9b94e-023e-4e5a-979f-d3b71dea183b" containerType="regular" prevTag="div" className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="29" data-magicpath-path="BusinessDetails.tsx">
                  <SortableContainer dndKitId="db1d9726-1be7-4dc0-a0ce-bd00bef4fb3f" containerType="regular" prevTag="div" className="flex items-center gap-2 text-purple-400 mb-2" data-magicpath-id="30" data-magicpath-path="BusinessDetails.tsx">
                    <Calendar className="w-5 h-5" data-magicpath-id="31" data-magicpath-path="BusinessDetails.tsx" />
                    <span className="text-sm font-medium" data-magicpath-id="32" data-magicpath-path="BusinessDetails.tsx">Established</span>
                  </SortableContainer>
                  <div className="text-2xl font-bold text-white" data-magicpath-id="33" data-magicpath-path="BusinessDetails.tsx">{business.established}</div>
                </SortableContainer>

                <SortableContainer dndKitId="d361c0f3-a536-4f02-a76d-36ac47793988" containerType="regular" prevTag="div" className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="34" data-magicpath-path="BusinessDetails.tsx">
                  <SortableContainer dndKitId="3bc66006-4ea1-4194-96d5-764c69356fff" containerType="regular" prevTag="div" className="flex items-center gap-2 text-orange-400 mb-2" data-magicpath-id="35" data-magicpath-path="BusinessDetails.tsx">
                    <Users className="w-5 h-5" data-magicpath-id="36" data-magicpath-path="BusinessDetails.tsx" />
                    <span className="text-sm font-medium" data-magicpath-id="37" data-magicpath-path="BusinessDetails.tsx">Employees</span>
                  </SortableContainer>
                  <div className="text-2xl font-bold text-white" data-magicpath-id="38" data-magicpath-path="BusinessDetails.tsx">{business.employees}</div>
                </SortableContainer>
              </SortableContainer>

              {/* Contact Info */}
              <SortableContainer dndKitId="56e0b066-3b3e-4f2d-9b20-b05ec59ff600" containerType="regular" prevTag="div" className="space-y-3" data-magicpath-id="39" data-magicpath-path="BusinessDetails.tsx">
                <SortableContainer dndKitId="9f3cda8a-b34a-4010-b4b7-78e0ffe0c13d" containerType="regular" prevTag="div" className="flex items-center gap-3 text-gray-300" data-magicpath-id="40" data-magicpath-path="BusinessDetails.tsx">
                  <MapPin className="w-5 h-5 text-gray-500" data-magicpath-id="41" data-magicpath-path="BusinessDetails.tsx" />
                  <span data-magicpath-id="42" data-magicpath-path="BusinessDetails.tsx">{business.location}</span>
                </SortableContainer>
                <SortableContainer dndKitId="28385f3a-cdc8-4f3e-b33f-8be1619410e9" containerType="regular" prevTag="div" className="flex items-center gap-3 text-gray-300" data-magicpath-id="43" data-magicpath-path="BusinessDetails.tsx">
                  <Globe className="w-5 h-5 text-gray-500" data-magicpath-id="44" data-magicpath-path="BusinessDetails.tsx" />
                  <span data-magicpath-id="45" data-magicpath-path="BusinessDetails.tsx">{business.website}</span>
                </SortableContainer>
                <SortableContainer dndKitId="80602e50-d021-4502-9d0e-89c2234436fd" containerType="regular" prevTag="div" className="flex items-center gap-3 text-gray-300" data-magicpath-id="46" data-magicpath-path="BusinessDetails.tsx">
                  <Mail className="w-5 h-5 text-gray-500" data-magicpath-id="47" data-magicpath-path="BusinessDetails.tsx" />
                  <span data-magicpath-id="48" data-magicpath-path="BusinessDetails.tsx">{business.email}</span>
                </SortableContainer>
                <SortableContainer dndKitId="5f777976-b42e-41b4-a524-b75edddfbb1e" containerType="regular" prevTag="div" className="flex items-center gap-3 text-gray-300" data-magicpath-id="49" data-magicpath-path="BusinessDetails.tsx">
                  <Phone className="w-5 h-5 text-gray-500" data-magicpath-id="50" data-magicpath-path="BusinessDetails.tsx" />
                  <span data-magicpath-id="51" data-magicpath-path="BusinessDetails.tsx">{business.phone}</span>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* About Section */}
        <SortableContainer dndKitId="632beb02-4378-410e-8737-d4f32da1330a" containerType="regular" prevTag="div" className="bg-[#0B1A33] rounded-3xl p-8 mb-8" data-magicpath-id="52" data-magicpath-path="BusinessDetails.tsx">
          <h3 className="text-3xl font-bold mb-6" data-magicpath-id="53" data-magicpath-path="BusinessDetails.tsx">About This Business</h3>
          <p className="text-gray-300 text-lg leading-relaxed" data-magicpath-id="54" data-magicpath-path="BusinessDetails.tsx">{business.fullDescription}</p>
        </SortableContainer>

        {/* Charts Grid */}
        <SortableContainer dndKitId="865226cb-5f12-4516-b0cf-ac4c2e30bed6" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" data-magicpath-id="55" data-magicpath-path="BusinessDetails.tsx">
          {/* Revenue & Expenses */}
          <SortableContainer dndKitId="be8b229a-428d-4a1f-84b3-4ca6bfaf2830" containerType="regular" prevTag="div" className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="56" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-2xl font-bold mb-6" data-magicpath-id="57" data-magicpath-path="BusinessDetails.tsx">Revenue & Expenses</h3>
            <ResponsiveContainer width="100%" height={300} data-magicpath-id="58" data-magicpath-path="BusinessDetails.tsx">
              <AreaChart data={business.revenueExpensesData} data-magicpath-id="59" data-magicpath-path="BusinessDetails.tsx">
                <defs data-magicpath-id="60" data-magicpath-path="BusinessDetails.tsx">
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1" data-magicpath-id="61" data-magicpath-path="BusinessDetails.tsx">
                    <stop offset="5%" stopColor="#4169E1" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4169E1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1" data-magicpath-id="62" data-magicpath-path="BusinessDetails.tsx">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" data-magicpath-id="63" data-magicpath-path="BusinessDetails.tsx" />
                <XAxis dataKey="month" stroke="#94a3b8" data-magicpath-id="64" data-magicpath-path="BusinessDetails.tsx" />
                <YAxis stroke="#94a3b8" data-magicpath-id="65" data-magicpath-path="BusinessDetails.tsx" />
                <Tooltip contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px'
              }} data-magicpath-id="66" data-magicpath-path="BusinessDetails.tsx" />
                <Legend data-magicpath-id="67" data-magicpath-path="BusinessDetails.tsx" />
                <Area type="monotone" dataKey="revenue" stroke="#4169E1" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue" data-magicpath-id="68" data-magicpath-path="BusinessDetails.tsx" />
                <Area type="monotone" dataKey="expenses" stroke="#EF4444" fillOpacity={1} fill="url(#colorExpenses)" name="Expenses" data-magicpath-id="69" data-magicpath-path="BusinessDetails.tsx" />
              </AreaChart>
            </ResponsiveContainer>
          </SortableContainer>

          {/* Weekly Traffic */}
          <SortableContainer dndKitId="2e1da139-70f2-425e-89e5-eb3156cbee13" containerType="regular" prevTag="div" className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="70" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-2xl font-bold mb-6" data-magicpath-id="71" data-magicpath-path="BusinessDetails.tsx">Weekly Customer Traffic</h3>
            <ResponsiveContainer width="100%" height={300} data-magicpath-id="72" data-magicpath-path="BusinessDetails.tsx">
              <BarChart data={business.trafficData} data-magicpath-id="73" data-magicpath-path="BusinessDetails.tsx">
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" data-magicpath-id="74" data-magicpath-path="BusinessDetails.tsx" />
                <XAxis dataKey="day" stroke="#94a3b8" data-magicpath-id="75" data-magicpath-path="BusinessDetails.tsx" />
                <YAxis stroke="#94a3b8" data-magicpath-id="76" data-magicpath-path="BusinessDetails.tsx" />
                <Tooltip contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px'
              }} data-magicpath-id="77" data-magicpath-path="BusinessDetails.tsx" />
                <Bar dataKey="customers" fill="#8B5CF6" radius={[8, 8, 0, 0]} data-magicpath-id="78" data-magicpath-path="BusinessDetails.tsx" />
              </BarChart>
            </ResponsiveContainer>
          </SortableContainer>

          {/* Revenue Distribution */}
          <SortableContainer dndKitId="ae136947-80e0-4bf5-8994-19a424a9892d" containerType="regular" prevTag="div" className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="79" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-2xl font-bold mb-6" data-magicpath-id="80" data-magicpath-path="BusinessDetails.tsx">Revenue Distribution</h3>
            <SortableContainer dndKitId="0758678f-2c89-4e7a-ac82-2ec9121aa203" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="81" data-magicpath-path="BusinessDetails.tsx">
              <ResponsiveContainer width="100%" height={300} data-magicpath-id="82" data-magicpath-path="BusinessDetails.tsx">
                <PieChart data-magicpath-id="83" data-magicpath-path="BusinessDetails.tsx">
                  <Pie data={business.distributionData} cx="50%" cy="50%" labelLine={false} label={({
                  name,
                  percent
                }) => `${name}: ${(percent * 100).toFixed(0)}%`} outerRadius={100} fill="#8884d8" dataKey="value" data-magicpath-id="84" data-magicpath-path="BusinessDetails.tsx">
                    {business.distributionData.map((entry: any, index: number) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} data-magicpath-id="85" data-magicpath-path="BusinessDetails.tsx" />)}
                  </Pie>
                  <Tooltip contentStyle={{
                  backgroundColor: '#1e293b',
                  border: 'none',
                  borderRadius: '8px'
                }} data-magicpath-id="86" data-magicpath-path="BusinessDetails.tsx" />
                </PieChart>
              </ResponsiveContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Growth Trend */}
          <SortableContainer dndKitId="ff29c6bd-ed06-46a3-a7a8-a66435d936e6" containerType="regular" prevTag="div" className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="87" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-2xl font-bold mb-6" data-magicpath-id="88" data-magicpath-path="BusinessDetails.tsx">6-Month Growth Trend</h3>
            <ResponsiveContainer width="100%" height={300} data-magicpath-id="89" data-magicpath-path="BusinessDetails.tsx">
              <LineChart data={business.growthData} data-magicpath-id="90" data-magicpath-path="BusinessDetails.tsx">
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" data-magicpath-id="91" data-magicpath-path="BusinessDetails.tsx" />
                <XAxis dataKey="month" stroke="#94a3b8" data-magicpath-id="92" data-magicpath-path="BusinessDetails.tsx" />
                <YAxis stroke="#94a3b8" data-magicpath-id="93" data-magicpath-path="BusinessDetails.tsx" />
                <Tooltip contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px'
              }} data-magicpath-id="94" data-magicpath-path="BusinessDetails.tsx" />
                <Legend data-magicpath-id="95" data-magicpath-path="BusinessDetails.tsx" />
                <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} dot={{
                r: 5
              }} name="Revenue" />
              </LineChart>
            </ResponsiveContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Highlights and Assets */}
        <SortableContainer dndKitId="c2c7a3ba-0623-43f2-bc96-0a958ab0b3d9" containerType="regular" prevTag="div" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" data-magicpath-id="96" data-magicpath-path="BusinessDetails.tsx">
          {/* Key Highlights */}
          <SortableContainer dndKitId="c1884c0c-6101-4429-8ba5-1fb684c4fcdd" containerType="regular" prevTag="div" className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="97" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-3xl font-bold mb-6" data-magicpath-id="98" data-magicpath-path="BusinessDetails.tsx">Key Highlights</h3>
            <div className="space-y-4" data-magicpath-id="99" data-magicpath-path="BusinessDetails.tsx">
              {business.highlights.map((highlight, index) => <SortableContainer dndKitId="369f17a6-2184-4c5f-9f91-b76584f7941e" containerType="regular" prevTag="div" key={index} className="flex items-start gap-3" data-magicpath-id="100" data-magicpath-path="BusinessDetails.tsx">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" data-magicpath-id="101" data-magicpath-path="BusinessDetails.tsx" />
                  <span className="text-gray-300 text-lg" data-magicpath-id="102" data-magicpath-path="BusinessDetails.tsx">{highlight}</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>

          {/* Included Assets */}
          <SortableContainer dndKitId="87cdcf74-523b-43ab-a5f3-2fcdfa2f6620" containerType="regular" prevTag="div" className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="103" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-3xl font-bold mb-6" data-magicpath-id="104" data-magicpath-path="BusinessDetails.tsx">Included Assets</h3>
            <div className="space-y-4" data-magicpath-id="105" data-magicpath-path="BusinessDetails.tsx">
              {business.assets.map((asset, index) => <SortableContainer dndKitId="29d811df-2029-4dc0-9df7-2fac90863f63" containerType="regular" prevTag="div" key={index} className="flex items-start gap-3" data-magicpath-id="106" data-magicpath-path="BusinessDetails.tsx">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" data-magicpath-id="107" data-magicpath-path="BusinessDetails.tsx" />
                  <span className="text-gray-300 text-lg" data-magicpath-id="108" data-magicpath-path="BusinessDetails.tsx">{asset}</span>
                </SortableContainer>)}
            </div>
          </SortableContainer>
        </SortableContainer>

        {/* Buy Now Button */}
        <SortableContainer dndKitId="9e69ec00-4d12-45fd-a5b8-3a7ba3e1fdba" containerType="regular" prevTag="div" className="flex justify-center" data-magicpath-id="109" data-magicpath-path="BusinessDetails.tsx">
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-16 py-4 rounded-2xl font-bold text-xl transition-all" data-magicpath-id="110" data-magicpath-path="BusinessDetails.tsx">
            Buy Now
          </button>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};