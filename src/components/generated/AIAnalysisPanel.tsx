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
      <div className="fixed inset-0 bg-black/80 z-50 transition-opacity" onClick={onClose} data-magicpath-id="0" data-magicpath-path="AIAnalysisPanel.tsx" />
      
      {/* Panel */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[600px] bg-[#0B1A33] z-50 rounded-3xl shadow-2xl border border-gray-800 max-h-[90vh] overflow-hidden flex flex-col" data-magicpath-id="1" data-magicpath-path="AIAnalysisPanel.tsx">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="AIAnalysisPanel.tsx">
          <div className="flex items-center gap-3" data-magicpath-id="3" data-magicpath-path="AIAnalysisPanel.tsx">
            <div className="w-10 h-10 bg-[#4169E1] rounded-full flex items-center justify-center" data-magicpath-id="4" data-magicpath-path="AIAnalysisPanel.tsx">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white" data-magicpath-id="5" data-magicpath-path="AIAnalysisPanel.tsx">AI Analyzer</h2>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="6" data-magicpath-path="AIAnalysisPanel.tsx">
            <X className="w-6 h-6 text-white" data-magicpath-id="7" data-magicpath-path="AIAnalysisPanel.tsx" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6" data-magicpath-id="8" data-magicpath-path="AIAnalysisPanel.tsx">
          {isAnalyzing ? <div className="flex flex-col items-center justify-center py-16" data-magicpath-id="9" data-magicpath-path="AIAnalysisPanel.tsx">
              <div className="relative" data-magicpath-id="10" data-magicpath-path="AIAnalysisPanel.tsx">
                <Sparkles className="w-16 h-16 text-[#4169E1] animate-pulse" />
                <div className="absolute inset-0 w-16 h-16 bg-[#4169E1] rounded-full blur-xl opacity-50 animate-pulse" data-magicpath-id="11" data-magicpath-path="AIAnalysisPanel.tsx" />
              </div>
              <p className="text-white text-xl font-semibold mt-6" data-magicpath-id="12" data-magicpath-path="AIAnalysisPanel.tsx">Analyzing Investment...</p>
              <p className="text-gray-400 mt-2" data-magicpath-id="13" data-magicpath-path="AIAnalysisPanel.tsx">Evaluating financials, market conditions, and risk factors</p>
            </div> : analysis ? <div className="space-y-6" data-magicpath-id="14" data-magicpath-path="AIAnalysisPanel.tsx">
              {/* Score Card */}
              <div className="bg-[#1a2942] rounded-2xl p-6" data-magicpath-id="15" data-magicpath-path="AIAnalysisPanel.tsx">
                <div className="flex items-center justify-between mb-4" data-magicpath-id="16" data-magicpath-path="AIAnalysisPanel.tsx">
                  <h3 className="text-xl font-bold text-white" data-magicpath-id="17" data-magicpath-path="AIAnalysisPanel.tsx">Investment Score</h3>
                  <div className={`text-4xl font-bold ${analysis.score >= 85 ? 'text-green-500' : analysis.score >= 75 ? 'text-blue-400' : 'text-yellow-500'}`} data-magicpath-id="18" data-magicpath-path="AIAnalysisPanel.tsx">
                    {analysis.score}/100
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-3" data-magicpath-id="19" data-magicpath-path="AIAnalysisPanel.tsx">
                  <div className={`h-3 rounded-full transition-all duration-1000 ${analysis.score >= 85 ? 'bg-green-500' : analysis.score >= 75 ? 'bg-blue-400' : 'bg-yellow-500'}`} style={{
                width: `${analysis.score}%`
              }} data-magicpath-id="20" data-magicpath-path="AIAnalysisPanel.tsx" />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4" data-magicpath-id="21" data-magicpath-path="AIAnalysisPanel.tsx">
                <div className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="22" data-magicpath-path="AIAnalysisPanel.tsx">
                  <div className="flex items-center gap-2 mb-2" data-magicpath-id="23" data-magicpath-path="AIAnalysisPanel.tsx">
                    <TrendingUp className="w-5 h-5 text-green-500" data-magicpath-id="24" data-magicpath-path="AIAnalysisPanel.tsx" />
                    <span className="text-sm text-gray-400" data-magicpath-id="25" data-magicpath-path="AIAnalysisPanel.tsx">Potential</span>
                  </div>
                  <p className="text-lg font-bold text-white" data-magicpath-id="26" data-magicpath-path="AIAnalysisPanel.tsx">{analysis.recommendation}</p>
                </div>

                <div className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="27" data-magicpath-path="AIAnalysisPanel.tsx">
                  <div className="flex items-center gap-2 mb-2" data-magicpath-id="28" data-magicpath-path="AIAnalysisPanel.tsx">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" data-magicpath-id="29" data-magicpath-path="AIAnalysisPanel.tsx" />
                    <span className="text-sm text-gray-400" data-magicpath-id="30" data-magicpath-path="AIAnalysisPanel.tsx">Risk Level</span>
                  </div>
                  <p className="text-lg font-bold text-white" data-magicpath-id="31" data-magicpath-path="AIAnalysisPanel.tsx">{analysis.risk}</p>
                </div>

                <div className="bg-[#1a2942] rounded-2xl p-5" data-magicpath-id="32" data-magicpath-path="AIAnalysisPanel.tsx">
                  <div className="flex items-center gap-2 mb-2" data-magicpath-id="33" data-magicpath-path="AIAnalysisPanel.tsx">
                    <DollarSign className="w-5 h-5 text-blue-400" data-magicpath-id="34" data-magicpath-path="AIAnalysisPanel.tsx" />
                    <span className="text-sm text-gray-400" data-magicpath-id="35" data-magicpath-path="AIAnalysisPanel.tsx">Valuation</span>
                  </div>
                  <p className="text-lg font-bold text-white" data-magicpath-id="36" data-magicpath-path="AIAnalysisPanel.tsx">{analysis.valuation}</p>
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-[#1a2942] rounded-2xl p-6" data-magicpath-id="37" data-magicpath-path="AIAnalysisPanel.tsx">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2" data-magicpath-id="38" data-magicpath-path="AIAnalysisPanel.tsx">
                  <CheckCircle2 className="w-5 h-5 text-green-500" data-magicpath-id="39" data-magicpath-path="AIAnalysisPanel.tsx" />
                  Key Insights
                </h3>
                <ul className="space-y-3" data-magicpath-id="40" data-magicpath-path="AIAnalysisPanel.tsx">
                  {analysis.insights.map((insight: string, index: number) => <li key={index} className="flex items-start gap-3" data-magicpath-id="41" data-magicpath-path="AIAnalysisPanel.tsx">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" data-magicpath-id="42" data-magicpath-path="AIAnalysisPanel.tsx" />
                      <span className="text-gray-300 text-sm leading-relaxed" data-magicpath-id="43" data-magicpath-path="AIAnalysisPanel.tsx">{insight}</span>
                    </li>)}
                </ul>
              </div>

              {/* Concerns (if any) */}
              {analysis.concerns.length > 0 && <div className="bg-[#1a2942] rounded-2xl p-6" data-magicpath-id="44" data-magicpath-path="AIAnalysisPanel.tsx">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2" data-magicpath-id="45" data-magicpath-path="AIAnalysisPanel.tsx">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" data-magicpath-id="46" data-magicpath-path="AIAnalysisPanel.tsx" />
                    Points to Consider
                  </h3>
                  <ul className="space-y-3" data-magicpath-id="47" data-magicpath-path="AIAnalysisPanel.tsx">
                    {analysis.concerns.map((concern: string, index: number) => <li key={index} className="flex items-start gap-3" data-magicpath-id="48" data-magicpath-path="AIAnalysisPanel.tsx">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" data-magicpath-id="49" data-magicpath-path="AIAnalysisPanel.tsx" />
                        <span className="text-gray-300 text-sm leading-relaxed" data-magicpath-id="50" data-magicpath-path="AIAnalysisPanel.tsx">{concern}</span>
                      </li>)}
                  </ul>
                </div>}

              {/* Recommendation */}
              <div className={`rounded-2xl p-6 ${analysis.score >= 85 ? 'bg-green-500/10 border border-green-500/30' : analysis.score >= 75 ? 'bg-blue-400/10 border border-blue-400/30' : 'bg-yellow-500/10 border border-yellow-500/30'}`} data-magicpath-id="51" data-magicpath-path="AIAnalysisPanel.tsx">
                <p className="text-white font-semibold text-center" data-magicpath-id="52" data-magicpath-path="AIAnalysisPanel.tsx">
                  {analysis.score >= 85 ? '✓ This appears to be an excellent investment opportunity' : analysis.score >= 75 ? '✓ This investment shows good potential with manageable risk' : '⚠ Consider conducting additional due diligence before proceeding'}
                </p>
              </div>
            </div> : null}
        </div>
      </div>
    </>;
};