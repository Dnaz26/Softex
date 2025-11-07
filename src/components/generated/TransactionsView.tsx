"use client";

import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Loader2, AlertCircle, CheckCircle2, Clock, DollarSign } from 'lucide-react';
import { listEscrowTransactions, getEscrowTransactionStatus } from '../../lib/escrow';

type TransactionsViewProps = {
  isOpen: boolean;
  onClose: () => void;
};

interface Transaction {
  id: number;
  reference: string;
  status: string;
  created_at: string;
  currency: string;
  amount?: number;
  description?: string;
  buyer?: string;
  seller?: string;
  escrow_link?: string;
}

// @component: TransactionsView
export const TransactionsView = ({
  isOpen,
  onClose
}: TransactionsViewProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetchTransactions();
    }
  }, [isOpen]);

  const fetchTransactions = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await listEscrowTransactions(50, 0);
      
      // Handle different response formats from Escrow API
      if (Array.isArray(data)) {
        setTransactions(data);
      } else if (data.transactions) {
        setTransactions(data.transactions);
      } else if (data.results) {
        setTransactions(data.results);
      } else {
        setTransactions([]);
      }
    } catch (err: any) {
      console.error('Error fetching transactions:', err);
      setError(
        err.message || 
        'Failed to load transactions. Please check your Escrow.com API connection.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes('complete') || lowerStatus.includes('paid')) {
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    } else if (lowerStatus.includes('pending') || lowerStatus.includes('waiting')) {
      return <Clock className="w-5 h-5 text-yellow-500" />;
    } else {
      return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes('complete') || lowerStatus.includes('paid')) {
      return 'text-green-400 bg-green-400/10 border-green-400/20';
    } else if (lowerStatus.includes('pending') || lowerStatus.includes('waiting')) {
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    } else {
      return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto">
      <div className="min-h-screen bg-[#0B1A33]">
        {/* Header */}
        <div className="bg-[#1E3A8A] border-b border-blue-700/30 px-6 py-6 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Escrow Transactions</h1>
              <p className="text-blue-100 text-sm mt-1">View all software purchases secured through Escrow.com</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.escrow.com/account/transactions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View on Escrow.com
              </a>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center hover:bg-blue-700/30 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Info Banner */}
          <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-blue-200 font-medium mb-1">View All Transactions</p>
                <p className="text-blue-300 text-sm">
                  All transactions are securely processed through Escrow.com. You can view detailed information and manage transactions on the Escrow.com dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-red-300 font-medium">Error Loading Transactions</p>
                <p className="text-red-400 text-sm mt-1">{error}</p>
                <button
                  onClick={fetchTransactions}
                  className="mt-3 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-lg transition-colors text-sm"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-8 h-8 text-[#4169E1] animate-spin" />
                <p className="text-gray-400">Loading transactions...</p>
              </div>
            </div>
          )}

          {/* Transactions List */}
          {!isLoading && !error && (
            <div className="bg-[#1e293b] rounded-2xl overflow-hidden">
              {transactions.length === 0 ? (
                <div className="p-12 text-center">
                  <DollarSign className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg mb-2">No transactions found</p>
                  <p className="text-gray-500 text-sm">
                    Transactions will appear here once users make purchases through Escrow.com
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700 bg-gray-800/50">
                        <th className="text-left py-4 px-6 text-gray-400 font-semibold">Transaction ID</th>
                        <th className="text-left py-4 px-6 text-gray-400 font-semibold">Description</th>
                        <th className="text-left py-4 px-6 text-gray-400 font-semibold">Status</th>
                        <th className="text-left py-4 px-6 text-gray-400 font-semibold">Date</th>
                        <th className="text-right py-4 px-6 text-gray-400 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr
                          key={transaction.id}
                          className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors"
                        >
                          <td className="py-4 px-6">
                            <p className="text-white font-mono text-sm">
                              #{transaction.id || transaction.reference}
                            </p>
                          </td>
                          <td className="py-4 px-6">
                            <p className="text-gray-300">
                              {transaction.description || 'Software Purchase'}
                            </p>
                            {transaction.amount && (
                              <p className="text-gray-500 text-sm mt-1">
                                ${transaction.amount.toLocaleString()} {transaction.currency?.toUpperCase() || 'USD'}
                              </p>
                            )}
                          </td>
                          <td className="py-4 px-6">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusColor(transaction.status)}`}>
                              {getStatusIcon(transaction.status)}
                              <span className="text-sm font-medium capitalize">
                                {transaction.status.replace('_', ' ')}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <p className="text-gray-400 text-sm">
                              {formatDate(transaction.created_at)}
                            </p>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {transaction.escrow_link && (
                                <a
                                  href={transaction.escrow_link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors flex items-center gap-1"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  View
                                </a>
                              )}
                              <a
                                href={`https://www.escrow.com/transaction/${transaction.id || transaction.reference}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
                              >
                                Details
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

