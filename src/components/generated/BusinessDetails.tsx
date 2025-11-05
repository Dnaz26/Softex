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
    return <ChatWithSeller businessName={business.title} sellerName="Business Owner" onBack={() => setShowChat(false)} />;
  }
  if (showPurchase) {
    return <PurchaseScreen business={{
      title: business.title,
      price: business.price,
      image: business.image,
      category: business.category
    }} onBack={() => setShowPurchase(false)} />;
  }
  return <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-900 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center justify-center w-12 h-12 hover:bg-gray-900 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>

          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2">Business Details</h1>

          <button onClick={() => setShowAIAnalysis(true)} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sparkles className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">AI Analyzer</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="bg-[#0B1A33] rounded-3xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image - Full vertical height */}
            <div className="relative h-[500px] lg:h-auto">
              <img src={business.image} alt={business.title} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="p-8 lg:p-12">
              <div className="text-blue-500 text-sm font-bold mb-3 uppercase tracking-wide">
                {business.category}
              </div>

              <h2 className="text-4xl font-bold mb-4 text-white">{business.title}</h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {business.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#1a2942] rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-green-500 mb-2">
                    <DollarSign className="w-5 h-5" />
                    <span className="text-sm font-medium">Annual Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{business.revenue}</div>
                </div>

                <div className="bg-[#1a2942] rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Profit Margin</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{business.margin}</div>
                </div>

                <div className="bg-[#1a2942] rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">Established</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{business.established}</div>
                </div>

                <div className="bg-[#1a2942] rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-orange-400 mb-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-medium">Employees</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{business.employees}</div>
                </div>
              </div>

              {/* Contact Seller Button */}
              <button onClick={() => setShowChat(true)} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold transition-colors mb-6">
                Contact Seller
              </button>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span>{business.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <span>{business.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-[#0B1A33] rounded-3xl p-8 mb-8">
          <h3 className="text-3xl font-bold mb-6">About This Business</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{business.fullDescription}</p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue & Expenses */}
          <div className="bg-[#0B1A33] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Revenue & Expenses</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={business.revenueExpensesData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4169E1" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4169E1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px'
              }} />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#4169E1" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue" />
                <Area type="monotone" dataKey="expenses" stroke="#EF4444" fillOpacity={1} fill="url(#colorExpenses)" name="Expenses" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Weekly Traffic */}
          <div className="bg-[#0B1A33] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Weekly Customer Traffic</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={business.trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px'
              }} />
                <Bar dataKey="customers" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Distribution */}
          <div className="bg-[#0B1A33] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Revenue Distribution</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={business.distributionData} cx="50%" cy="50%" labelLine={false} label={({
                  name,
                  percent
                }) => `${name}: ${(percent * 100).toFixed(0)}%`} outerRadius={100} fill="#8884d8" dataKey="value">
                    {business.distributionData.map((entry: any, index: number) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{
                  backgroundColor: '#1e293b',
                  border: 'none',
                  borderRadius: '8px'
                }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Growth Trend */}
          <div className="bg-[#0B1A33] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">6-Month Growth Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={business.growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '8px'
              }} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} dot={{
                r: 5
              }} name="Revenue" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Highlights and Assets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Key Highlights */}
          <div className="bg-[#0B1A33] rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-6">Key Highlights</h3>
            <div className="space-y-4">
              {business.highlights.map((highlight, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">{highlight}</span>
                </div>)}
            </div>
          </div>

          {/* Included Assets */}
          <div className="bg-[#0B1A33] rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-6">Included Assets</h3>
            <div className="space-y-4">
              {business.assets.map((asset, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">{asset}</span>
                </div>)}
            </div>
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="flex justify-center">
          <button onClick={() => setShowPurchase(true)} className="bg-[#4169E1] hover:bg-[#3557C1] text-white px-16 py-4 rounded-2xl font-bold text-xl transition-all">
            Buy Now
          </button>
        </div>
      </main>

      {/* AI Analysis Panel */}
      <AIAnalysisPanel isOpen={showAIAnalysis} onClose={() => setShowAIAnalysis(false)} business={business} />
    </div>;
};