"use client";

import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mail, Phone, Globe, DollarSign, TrendingUp, Calendar, Users, CheckCircle2, Sparkles } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChatWithSeller } from './ChatWithSeller';
import { PurchaseScreen } from './PurchaseScreen';
import { AIAnalysisPanel } from './AIAnalysisPanel';
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
  const [showChat, setShowChat] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);
  const [showAIAnalysis, setShowAIAnalysis] = useState(false);
  const COLORS = ['#4169E1', '#8B5CF6', '#10B981'];
  if (showChat) {
    return <ChatWithSeller businessName={business.title} sellerName="Business Owner" onBack={() => setShowChat(false)} data-magicpath-id="0" data-magicpath-path="BusinessDetails.tsx" />;
  }
  if (showPurchase) {
    return <PurchaseScreen business={{
      title: business.title,
      price: business.price,
      image: business.image,
      category: business.category
    }} onBack={() => setShowPurchase(false)} data-magicpath-id="1" data-magicpath-path="BusinessDetails.tsx" />;
  }
  return <div className="min-h-screen bg-black text-white" data-magicpath-id="2" data-magicpath-path="BusinessDetails.tsx">
      {/* Header */}
      <header className="border-b border-gray-900 px-6 py-4" data-magicpath-id="3" data-magicpath-path="BusinessDetails.tsx">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between" data-magicpath-id="4" data-magicpath-path="BusinessDetails.tsx">
          <button onClick={onBack} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors" data-magicpath-id="5" data-magicpath-path="BusinessDetails.tsx">
            <ArrowLeft className="w-6 h-6" data-magicpath-id="6" data-magicpath-path="BusinessDetails.tsx" />
          </button>

          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2" data-magicpath-id="7" data-magicpath-path="BusinessDetails.tsx">Business Details</h1>

          <button onClick={() => setShowAIAnalysis(true)} className="flex items-center gap-2 hover:opacity-80 transition-opacity" data-magicpath-id="8" data-magicpath-path="BusinessDetails.tsx">
            <Sparkles className="w-6 h-6 text-white" />
            <span className="text-white font-semibold" data-magicpath-id="9" data-magicpath-path="BusinessDetails.tsx">AI Analyzer</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-8" data-magicpath-id="10" data-magicpath-path="BusinessDetails.tsx">
        {/* Hero Section */}
        <div className="bg-[#0B1A33] rounded-3xl overflow-hidden mb-8" data-magicpath-id="11" data-magicpath-path="BusinessDetails.tsx">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" data-magicpath-id="12" data-magicpath-path="BusinessDetails.tsx">
            {/* Image - Full vertical height */}
            <div className="relative h-[500px] lg:h-auto" data-magicpath-id="13" data-magicpath-path="BusinessDetails.tsx">
              <img src={business.image} alt={business.title} className="w-full h-full object-cover" data-magicpath-id="14" data-magicpath-path="BusinessDetails.tsx" />
            </div>

            {/* Info */}
            <div className="p-8 lg:p-12" data-magicpath-id="15" data-magicpath-path="BusinessDetails.tsx">
              <div className="text-blue-500 text-sm font-bold mb-3 uppercase tracking-wide" data-magicpath-id="16" data-magicpath-path="BusinessDetails.tsx">
                {business.category}
              </div>

              <h2 className="text-4xl font-bold mb-4 text-white" data-magicpath-id="17" data-magicpath-path="BusinessDetails.tsx">{business.title}</h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed" data-magicpath-id="18" data-magicpath-path="BusinessDetails.tsx">
                {business.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8" data-magicpath-id="19" data-magicpath-path="BusinessDetails.tsx">
                <div className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="20" data-magicpath-path="BusinessDetails.tsx">
                  <div className="flex items-center gap-2 text-green-500 mb-2" data-magicpath-id="21" data-magicpath-path="BusinessDetails.tsx">
                    <DollarSign className="w-5 h-5" data-magicpath-id="22" data-magicpath-path="BusinessDetails.tsx" />
                    <span className="text-sm font-medium" data-magicpath-id="23" data-magicpath-path="BusinessDetails.tsx">Annual Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-white" data-magicpath-id="24" data-magicpath-path="BusinessDetails.tsx">{business.revenue}</div>
                </div>

                <div className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="25" data-magicpath-path="BusinessDetails.tsx">
                  <div className="flex items-center gap-2 text-blue-400 mb-2" data-magicpath-id="26" data-magicpath-path="BusinessDetails.tsx">
                    <TrendingUp className="w-5 h-5" data-magicpath-id="27" data-magicpath-path="BusinessDetails.tsx" />
                    <span className="text-sm font-medium" data-magicpath-id="28" data-magicpath-path="BusinessDetails.tsx">Profit Margin</span>
                  </div>
                  <div className="text-2xl font-bold text-white" data-magicpath-id="29" data-magicpath-path="BusinessDetails.tsx">{business.margin}</div>
                </div>

                <div className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="30" data-magicpath-path="BusinessDetails.tsx">
                  <div className="flex items-center gap-2 text-purple-400 mb-2" data-magicpath-id="31" data-magicpath-path="BusinessDetails.tsx">
                    <Calendar className="w-5 h-5" data-magicpath-id="32" data-magicpath-path="BusinessDetails.tsx" />
                    <span className="text-sm font-medium" data-magicpath-id="33" data-magicpath-path="BusinessDetails.tsx">Established</span>
                  </div>
                  <div className="text-2xl font-bold text-white" data-magicpath-id="34" data-magicpath-path="BusinessDetails.tsx">{business.established}</div>
                </div>

                <div className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="35" data-magicpath-path="BusinessDetails.tsx">
                  <div className="flex items-center gap-2 text-orange-400 mb-2" data-magicpath-id="36" data-magicpath-path="BusinessDetails.tsx">
                    <Users className="w-5 h-5" data-magicpath-id="37" data-magicpath-path="BusinessDetails.tsx" />
                    <span className="text-sm font-medium" data-magicpath-id="38" data-magicpath-path="BusinessDetails.tsx">Employees</span>
                  </div>
                  <div className="text-2xl font-bold text-white" data-magicpath-id="39" data-magicpath-path="BusinessDetails.tsx">{business.employees}</div>
                </div>
              </div>

              {/* Contact Seller Button */}
              <button onClick={() => setShowChat(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold transition-colors mb-6" data-magicpath-id="40" data-magicpath-path="BusinessDetails.tsx">
                Contact Seller
              </button>

              {/* Contact Info */}
              <div className="space-y-3" data-magicpath-id="41" data-magicpath-path="BusinessDetails.tsx">
                <div className="flex items-center gap-3 text-gray-300" data-magicpath-id="42" data-magicpath-path="BusinessDetails.tsx">
                  <MapPin className="w-5 h-5 text-gray-500" data-magicpath-id="43" data-magicpath-path="BusinessDetails.tsx" />
                  <span data-magicpath-id="44" data-magicpath-path="BusinessDetails.tsx">{business.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300" data-magicpath-id="45" data-magicpath-path="BusinessDetails.tsx">
                  <Globe className="w-5 h-5 text-gray-500" data-magicpath-id="46" data-magicpath-path="BusinessDetails.tsx" />
                  <span data-magicpath-id="47" data-magicpath-path="BusinessDetails.tsx">{business.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-[#0B1A33] rounded-3xl p-8 mb-8" data-magicpath-id="48" data-magicpath-path="BusinessDetails.tsx">
          <h3 className="text-3xl font-bold mb-6" data-magicpath-id="49" data-magicpath-path="BusinessDetails.tsx">About This Business</h3>
          <p className="text-gray-300 text-lg leading-relaxed" data-magicpath-id="50" data-magicpath-path="BusinessDetails.tsx">{business.fullDescription}</p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" data-magicpath-id="51" data-magicpath-path="BusinessDetails.tsx">
          {/* Revenue & Expenses */}
          <div className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="52" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-2xl font-bold mb-6" data-magicpath-id="53" data-magicpath-path="BusinessDetails.tsx">Revenue & Expenses</h3>
            <ResponsiveContainer width="100%" height={300} data-magicpath-id="54" data-magicpath-path="BusinessDetails.tsx">
              <AreaChart data={business.revenueExpensesData} data-magicpath-id="55" data-magicpath-path="BusinessDetails.tsx">
                <defs data-magicpath-id="56" data-magicpath-path="BusinessDetails.tsx">
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1" data-magicpath-id="57" data-magicpath-path="BusinessDetails.tsx">
                    <stop offset="5%" stopColor="#4169E1" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4169E1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1" data-magicpath-id="58" data-magicpath-path="BusinessDetails.tsx">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" data-magicpath-id="59" data-magicpath-path="BusinessDetails.tsx" />
                <XAxis dataKey="month" stroke="#94a3b8" data-magicpath-id="60" data-magicpath-path="BusinessDetails.tsx" />
                <YAxis stroke="#94a3b8" data-magicpath-id="61" data-magicpath-path="BusinessDetails.tsx" />
                <Tooltip contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px'
              }} data-magicpath-id="62" data-magicpath-path="BusinessDetails.tsx" />
                <Legend data-magicpath-id="63" data-magicpath-path="BusinessDetails.tsx" />
                <Area type="monotone" dataKey="revenue" stroke="#4169E1" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue" data-magicpath-id="64" data-magicpath-path="BusinessDetails.tsx" />
                <Area type="monotone" dataKey="expenses" stroke="#EF4444" fillOpacity={1} fill="url(#colorExpenses)" name="Expenses" data-magicpath-id="65" data-magicpath-path="BusinessDetails.tsx" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Weekly Traffic */}
          <div className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="66" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-2xl font-bold mb-6" data-magicpath-id="67" data-magicpath-path="BusinessDetails.tsx">Weekly Customer Traffic</h3>
            <ResponsiveContainer width="100%" height={300} data-magicpath-id="68" data-magicpath-path="BusinessDetails.tsx">
              <BarChart data={business.trafficData} data-magicpath-id="69" data-magicpath-path="BusinessDetails.tsx">
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" data-magicpath-id="70" data-magicpath-path="BusinessDetails.tsx" />
                <XAxis dataKey="day" stroke="#94a3b8" data-magicpath-id="71" data-magicpath-path="BusinessDetails.tsx" />
                <YAxis stroke="#94a3b8" data-magicpath-id="72" data-magicpath-path="BusinessDetails.tsx" />
                <Tooltip contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px'
              }} data-magicpath-id="73" data-magicpath-path="BusinessDetails.tsx" />
                <Bar dataKey="customers" fill="#8B5CF6" radius={[8, 8, 0, 0]} data-magicpath-id="74" data-magicpath-path="BusinessDetails.tsx" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Distribution */}
          <div className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="75" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-2xl font-bold mb-6" data-magicpath-id="76" data-magicpath-path="BusinessDetails.tsx">Revenue Distribution</h3>
            <div className="flex items-center justify-center" data-magicpath-id="77" data-magicpath-path="BusinessDetails.tsx">
              <ResponsiveContainer width="100%" height={300} data-magicpath-id="78" data-magicpath-path="BusinessDetails.tsx">
                <PieChart data-magicpath-id="79" data-magicpath-path="BusinessDetails.tsx">
                  <Pie data={business.distributionData} cx="50%" cy="50%" labelLine={false} label={({
                  name,
                  percent
                }) => `${name}: ${(percent * 100).toFixed(0)}%`} outerRadius={100} fill="#8884d8" dataKey="value" data-magicpath-id="80" data-magicpath-path="BusinessDetails.tsx">
                    {business.distributionData.map((entry: any, index: number) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} data-magicpath-id="81" data-magicpath-path="BusinessDetails.tsx" />)}
                  </Pie>
                  <Tooltip contentStyle={{
                  backgroundColor: '#1e293b',
                  border: 'none',
                  borderRadius: '8px'
                }} data-magicpath-id="82" data-magicpath-path="BusinessDetails.tsx" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Growth Trend */}
          <div className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="83" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-2xl font-bold mb-6" data-magicpath-id="84" data-magicpath-path="BusinessDetails.tsx">6-Month Growth Trend</h3>
            <ResponsiveContainer width="100%" height={300} data-magicpath-id="85" data-magicpath-path="BusinessDetails.tsx">
              <LineChart data={business.growthData} data-magicpath-id="86" data-magicpath-path="BusinessDetails.tsx">
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" data-magicpath-id="87" data-magicpath-path="BusinessDetails.tsx" />
                <XAxis dataKey="month" stroke="#94a3b8" data-magicpath-id="88" data-magicpath-path="BusinessDetails.tsx" />
                <YAxis stroke="#94a3b8" data-magicpath-id="89" data-magicpath-path="BusinessDetails.tsx" />
                <Tooltip contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px'
              }} data-magicpath-id="90" data-magicpath-path="BusinessDetails.tsx" />
                <Legend data-magicpath-id="91" data-magicpath-path="BusinessDetails.tsx" />
                <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} dot={{
                r: 5
              }} name="Revenue" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Highlights and Assets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" data-magicpath-id="92" data-magicpath-path="BusinessDetails.tsx">
          {/* Key Highlights */}
          <div className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="93" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-3xl font-bold mb-6" data-magicpath-id="94" data-magicpath-path="BusinessDetails.tsx">Key Highlights</h3>
            <div className="space-y-4" data-magicpath-id="95" data-magicpath-path="BusinessDetails.tsx">
              {business.highlights.map((highlight, index) => <div key={index} className="flex items-start gap-3" data-magicpath-id="96" data-magicpath-path="BusinessDetails.tsx">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" data-magicpath-id="97" data-magicpath-path="BusinessDetails.tsx" />
                  <span className="text-gray-300 text-lg" data-magicpath-id="98" data-magicpath-path="BusinessDetails.tsx">{highlight}</span>
                </div>)}
            </div>
          </div>

          {/* Included Assets */}
          <div className="bg-[#0B1A33] rounded-3xl p-8" data-magicpath-id="99" data-magicpath-path="BusinessDetails.tsx">
            <h3 className="text-3xl font-bold mb-6" data-magicpath-id="100" data-magicpath-path="BusinessDetails.tsx">Included Assets</h3>
            <div className="space-y-4" data-magicpath-id="101" data-magicpath-path="BusinessDetails.tsx">
              {business.assets.map((asset, index) => <div key={index} className="flex items-start gap-3" data-magicpath-id="102" data-magicpath-path="BusinessDetails.tsx">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" data-magicpath-id="103" data-magicpath-path="BusinessDetails.tsx" />
                  <span className="text-gray-300 text-lg" data-magicpath-id="104" data-magicpath-path="BusinessDetails.tsx">{asset}</span>
                </div>)}
            </div>
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="flex justify-center" data-magicpath-id="105" data-magicpath-path="BusinessDetails.tsx">
          <button onClick={() => setShowPurchase(true)} className="bg-[#4169E1] hover:bg-[#3557C1] text-white px-16 py-4 rounded-2xl font-bold text-xl transition-all" data-magicpath-id="106" data-magicpath-path="BusinessDetails.tsx">
            Buy Now
          </button>
        </div>
      </main>

      {/* AI Analysis Panel */}
      <AIAnalysisPanel isOpen={showAIAnalysis} onClose={() => setShowAIAnalysis(false)} business={business} data-magicpath-id="107" data-magicpath-path="BusinessDetails.tsx" />
    </div>;
};