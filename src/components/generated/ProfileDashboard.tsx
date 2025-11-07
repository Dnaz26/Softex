"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3, User, Receipt } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { supabase } from '../../lib/supabase';
import { TransactionsView } from './TransactionsView';

type ProfileDashboardProps = {
  isOpen: boolean;
  onClose: () => void;
  userData: {
    firstName: string;
    profilePicture: string | null;
  };
  onProfilePictureUpdate: (newPicture: string | null) => void;
};

// Mock investment data
const generateMockData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map(month => ({
    month,
    value: Math.floor(Math.random() * 50000) + 100000,
    profit: Math.floor(Math.random() * 10000) - 2000,
  }));
};

const portfolioValueData = generateMockData();

const holdingsData = [
  { name: 'The Artisan Cafe', type: 'Coffee Shop', invested: 125000, currentValue: 142500, change: 14.0, changeAmount: 17500 },
  { name: 'Tech Startup Alpha', type: 'Technology', invested: 50000, currentValue: 67500, change: 35.0, changeAmount: 17500 },
  { name: 'Real Estate Fund', type: 'Real Estate', invested: 200000, currentValue: 210000, change: 5.0, changeAmount: 10000 },
  { name: 'E-commerce Store', type: 'Retail', invested: 75000, currentValue: 69000, change: -8.0, changeAmount: -6000 },
];

const categoryDistribution = [
  { name: 'Food & Beverage', value: 35, color: '#4169E1' },
  { name: 'Technology', value: 25, color: '#10B981' },
  { name: 'Real Estate', value: 30, color: '#F59E0B' },
  { name: 'Retail', value: 10, color: '#EF4444' },
];

const totalInvested = holdingsData.reduce((sum, h) => sum + h.invested, 0);
const totalCurrentValue = holdingsData.reduce((sum, h) => sum + h.currentValue, 0);
const totalChange = totalCurrentValue - totalInvested;
const totalChangePercent = ((totalChange / totalInvested) * 100).toFixed(2);

// @component: ProfileDashboard
export const ProfileDashboard = ({
  isOpen,
  onClose,
  userData,
  onProfilePictureUpdate
}: ProfileDashboardProps) => {
  const [profilePicture, setProfilePicture] = useState<string | null>(userData.profilePicture);
  const [isEditingPicture, setIsEditingPicture] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProfilePictureClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const newPicture = reader.result as string;
        setProfilePicture(newPicture);
        onProfilePictureUpdate(newPicture);
        setIsEditingPicture(false);
        
        // Save to Supabase
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            await supabase
              .from('user_profiles')
              .update({ profile_picture: newPicture })
              .eq('id', user.id);
          }
        } catch (error) {
          console.error('Error updating profile picture in database:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Update local state when userData changes
  useEffect(() => {
    setProfilePicture(userData.profilePicture);
  }, [userData.profilePicture]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto">
      <div className="min-h-screen bg-[#0B1A33]">
        {/* Header */}
        <div className="bg-[#1E3A8A] border-b border-blue-700/30 px-6 py-6 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Investment Portfolio</h1>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center hover:bg-blue-700/30 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Profile Section */}
          <div className="bg-[#1e293b] rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 bg-[#4169E1] rounded-full flex items-center justify-center overflow-hidden border-4 border-[#4169E1]">
                  {profilePicture ? (
                    <img src={profilePicture} alt={userData.firstName} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-16 h-16 text-white" />
                  )}
                </div>
                <button
                  onClick={handleProfilePictureClick}
                  className="absolute bottom-0 right-0 w-10 h-10 bg-[#4169E1] rounded-full flex items-center justify-center border-4 border-[#1e293b] hover:bg-[#3557C1] transition-colors"
                >
                  <Upload className="w-5 h-5 text-white" />
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">{userData.firstName}'s Portfolio</h2>
                <p className="text-gray-400 text-lg">Investment Dashboard</p>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#1e293b] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#4169E1]" />
                </div>
                {totalChange >= 0 ? (
                  <TrendingUp className="w-6 h-6 text-green-500" />
                ) : (
                  <TrendingDown className="w-6 h-6 text-red-500" />
                )}
              </div>
              <p className="text-gray-400 text-sm mb-1">Total Portfolio Value</p>
              <p className="text-3xl font-bold text-white mb-1">
                ${totalCurrentValue.toLocaleString()}
              </p>
              <p className={`text-sm font-semibold ${totalChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {totalChange >= 0 ? '+' : ''}${totalChange.toLocaleString()} ({totalChangePercent}%)
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">Total Invested</p>
              <p className="text-3xl font-bold text-white">
                ${totalInvested.toLocaleString()}
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <PieChart className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">Active Holdings</p>
              <p className="text-3xl font-bold text-white">
                {holdingsData.length}
              </p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Portfolio Value Over Time */}
            <div className="bg-[#1e293b] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#4169E1]" />
                Portfolio Value Over Time
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={portfolioValueData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4169E1" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#4169E1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #374151', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#4169E1"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Profit/Loss Over Time */}
            <div className="bg-[#1e293b] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#4169E1]" />
                Profit & Loss Trend
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={portfolioValueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #374151', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="profit"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ fill: '#10B981', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-[#1e293b] rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-[#4169E1]" />
              Portfolio Distribution by Category
            </h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #374151', borderRadius: '8px' }}
                  />
                  <Legend
                    wrapperStyle={{ color: '#fff' }}
                  />
                  <Pie
                    data={categoryDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* View Transactions Button */}
          <div className="bg-[#1e293b] rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Escrow Transactions</h3>
                <p className="text-gray-400 text-sm">View all software purchases secured through Escrow.com</p>
              </div>
              <button
                onClick={() => setShowTransactions(true)}
                className="flex items-center gap-2 px-6 py-3 bg-[#4169E1] hover:bg-[#3557C1] text-white rounded-xl transition-colors font-semibold"
              >
                <Receipt className="w-5 h-5" />
                View Transactions
              </button>
            </div>
          </div>

          {/* Holdings Table */}
          <div className="bg-[#1e293b] rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">All Holdings</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Investment</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold">Type</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-semibold">Invested</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-semibold">Current Value</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-semibold">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {holdingsData.map((holding, index) => (
                    <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-4">
                        <p className="text-white font-semibold">{holding.name}</p>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-400">{holding.type}</span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <p className="text-white">${holding.invested.toLocaleString()}</p>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <p className="text-white font-semibold">${holding.currentValue.toLocaleString()}</p>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {holding.change >= 0 ? (
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-500" />
                          )}
                          <p className={`font-semibold ${holding.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {holding.change >= 0 ? '+' : ''}{holding.change}%
                          </p>
                          <p className={`text-sm ${holding.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            ({holding.changeAmount >= 0 ? '+' : ''}${holding.changeAmount.toLocaleString()})
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions View Modal */}
      <TransactionsView isOpen={showTransactions} onClose={() => setShowTransactions(false)} />
    </div>
  );
};

