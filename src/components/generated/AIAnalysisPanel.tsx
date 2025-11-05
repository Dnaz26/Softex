"use client";

import React, { useState, useEffect } from 'react';
import { X, Sparkles, TrendingUp, AlertTriangle, CheckCircle2, DollarSign } from 'lucide-react';
type AIAnalysisPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  business: {
    title: string;
    price: string;
    revenue: string;
    margin: string;
    established: string;
  };
};

// @component: AIAnalysisPanel
export const AIAnalysisPanel = ({
  isOpen,
  onClose,
  business
}: AIAnalysisPanelProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [analysis, setAnalysis] = useState<any>(null);
  useEffect(() => {
    if (isOpen) {
      setIsAnalyzing(true);

      // Simulate AI analysis
      setTimeout(() => {
        // Generate random but plausible analysis
        const priceValue = parseInt(business.price.replace(/[$,]/g, ''));
        const revenueValue = parseInt(business.revenue.replace(/[$,Kyear/]/g, '')) * 1000;
        const marginValue = parseInt(business.margin.replace('%', ''));
        const score = Math.floor(Math.random() * 30) + 70; // 70-100
        const valuationRatio = priceValue / revenueValue;
        let recommendation = 'Good Investment';
        let risk = 'Low';
        let valuation = 'Fair Price';
        if (score >= 85) {
          recommendation = 'High Potential';
          risk = 'Low';
          valuation = 'Good Price';
        } else if (score >= 75) {
          recommendation = 'Good Investment';
          risk = 'Low to Medium';
          valuation = 'Fair Price';
        } else {
          recommendation = 'Proceed with Caution';
          risk = 'Medium';
          valuation = 'Slightly Overvalued';
        }
        setAnalysis({
          score,
          recommendation,
          risk,
          valuation,
          insights: [`Strong profit margin of ${marginValue}% indicates healthy operations`, `Established since ${business.established} provides business stability`, `Price-to-revenue ratio of ${valuationRatio.toFixed(2)}x is ${valuationRatio < 1 ? 'excellent' : valuationRatio < 1.5 ? 'competitive' : 'above market average'}`, 'Business shows consistent growth trajectory', 'Market conditions are favorable for this industry'],
          concerns: score < 80 ? ['Consider requesting additional financial documentation', 'Verify customer retention rates'] : []
        });
        setIsAnalyzing(false);
      }, 3000);
    }
  }, [isOpen, business]);
  if (!isOpen) return null;
  return <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 z-50 transition-opacity" onClick={onClose} />
      
      {/* Panel */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[600px] bg-[#0B1A33] z-50 rounded-3xl shadow-2xl border border-gray-800 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#4169E1] rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">AI Analyzer</h2>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {isAnalyzing ? <div className="flex flex-col items-center justify-center py-16">
              <div className="relative">
                <Sparkles className="w-16 h-16 text-[#4169E1] animate-pulse" />
                <div className="absolute inset-0 w-16 h-16 bg-[#4169E1] rounded-full blur-xl opacity-50 animate-pulse" />
              </div>
              <p className="text-white text-xl font-semibold mt-6">Analyzing Investment...</p>
              <p className="text-gray-400 mt-2">Evaluating financials, market conditions, and risk factors</p>
            </div> : analysis ? <div className="space-y-6">
              {/* Score Card */}
              <div className="bg-[#1a2942] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Investment Score</h3>
                  <div className={`text-4xl font-bold ${analysis.score >= 85 ? 'text-green-500' : analysis.score >= 75 ? 'text-blue-400' : 'text-yellow-500'}`}>
                    {analysis.score}/100
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div className={`h-3 rounded-full transition-all duration-1000 ${analysis.score >= 85 ? 'bg-green-500' : analysis.score >= 75 ? 'bg-blue-400' : 'bg-yellow-500'}`} style={{
                width: `${analysis.score}%`
              }} />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#1a2942] rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-400">Potential</span>
                  </div>
                  <p className="text-lg font-bold text-white">{analysis.recommendation}</p>
                </div>

                <div className="bg-[#1a2942] rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-400">Risk Level</span>
                  </div>
                  <p className="text-lg font-bold text-white">{analysis.risk}</p>
                </div>

                <div className="bg-[#1a2942] rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-400">Valuation</span>
                  </div>
                  <p className="text-lg font-bold text-white">{analysis.valuation}</p>
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-[#1a2942] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Key Insights
                </h3>
                <ul className="space-y-3">
                  {analysis.insights.map((insight: string, index: number) => <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{insight}</span>
                    </li>)}
                </ul>
              </div>

              {/* Concerns (if any) */}
              {analysis.concerns.length > 0 && <div className="bg-[#1a2942] rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    Points to Consider
                  </h3>
                  <ul className="space-y-3">
                    {analysis.concerns.map((concern: string, index: number) => <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">{concern}</span>
                      </li>)}
                  </ul>
                </div>}

              {/* Recommendation */}
              <div className={`rounded-2xl p-6 ${analysis.score >= 85 ? 'bg-green-500/10 border border-green-500/30' : analysis.score >= 75 ? 'bg-blue-400/10 border border-blue-400/30' : 'bg-yellow-500/10 border border-yellow-500/30'}`}>
                <p className="text-white font-semibold text-center">
                  {analysis.score >= 85 ? '✓ This appears to be an excellent investment opportunity' : analysis.score >= 75 ? '✓ This investment shows good potential with manageable risk' : '⚠ Consider conducting additional due diligence before proceeding'}
                </p>
              </div>
            </div> : null}
        </div>
      </div>
    </>;
};