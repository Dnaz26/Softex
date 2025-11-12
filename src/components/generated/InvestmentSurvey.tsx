"use client";

import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Loader2, Sparkles } from 'lucide-react';
import { getInvestmentRecommendations } from '../../lib/openai';

type InvestmentSurveyProps = {
  isOpen: boolean;
  onClose: () => void;
};

// @component: InvestmentSurvey
export const InvestmentSurvey = ({
  isOpen,
  onClose
}: InvestmentSurveyProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    recommendation: string;
    businessType: string;
    reasoning: string[];
    keyMatchFactors: string[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const questions = [{
    id: 0,
    question: "What's your investment budget range?",
    type: "text",
    placeholder: "$50,000 - $500,000"
  }, {
    id: 1,
    question: "What industry are you most interested in?",
    type: "text",
    placeholder: "e.g., Food & Beverage, Technology, Retail"
  }, {
    id: 2,
    question: "How much business experience do you have?",
    type: "select",
    options: ["None", "1-3 years", "3-5 years", "5+ years"]
  }, {
    id: 3,
    question: "Are you looking for a full-time or passive investment?",
    type: "select",
    options: ["Full-time", "Passive", "Either"]
  }, {
    id: 4,
    question: "What's your preferred location?",
    type: "text",
    placeholder: "City or region"
  }, {
    id: 5,
    question: "What's your risk tolerance?",
    type: "select",
    options: ["Low", "Medium", "High"]
  }, {
    id: 6,
    question: "Do you prefer an established business or startup?",
    type: "select",
    options: ["Established", "Startup", "Either"]
  }, {
    id: 7,
    question: "What's your expected return on investment?",
    type: "text",
    placeholder: "e.g., 15-20% annually"
  }, {
    id: 8,
    question: "How soon do you want to start?",
    type: "select",
    options: ["Immediately", "1-3 months", "3-6 months", "6+ months"]
  }, {
    id: 9,
    question: "Do you need financing options?",
    type: "select",
    options: ["Yes", "No", "Maybe"]
  }, {
    id: 10,
    question: "What size team are you comfortable managing?",
    type: "text",
    placeholder: "e.g., 5-10 employees"
  }, {
    id: 11,
    question: "Are you open to franchises?",
    type: "select",
    options: ["Yes", "No", "Maybe"]
  }, {
    id: 12,
    question: "What's your preferred growth strategy?",
    type: "text",
    placeholder: "e.g., Expansion, Optimization, Innovation"
  }, {
    id: 13,
    question: "Do you have specific revenue targets?",
    type: "text",
    placeholder: "e.g., $500K-$1M annually"
  }, {
    id: 14,
    question: "Any other requirements or preferences?",
    type: "textarea",
    placeholder: "Tell us anything else that's important to you..."
  }] as any[];
  const currentQ = questions[currentQuestion];
  const hasAnswer = !!answers[currentQuestion]?.trim();
  
  const handleNext = () => {
    if (!hasAnswer) return; // Don't allow proceeding without an answer
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered, analyze with GPT
      handleSubmit();
    }
  };
  
  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value
    });
  };
  
  const handleSubmit = async () => {
    // Check if all questions are answered
    const allAnswered = questions.every(q => answers[q.id]?.trim());
    if (!allAnswered) {
      setError('Please answer all questions before submitting.');
      return;
    }
    
    setIsAnalyzing(true);
    setError(null);
    
    try {
      const result = await getInvestmentRecommendations(answers, questions);
      setRecommendation(result);
      setIsAnalyzing(false);
    } catch (err) {
      console.error('Error getting recommendations:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate recommendations');
      setIsAnalyzing(false);
    }
  };
  
  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setRecommendation(null);
    setError(null);
    setIsAnalyzing(false);
  };
  if (!isOpen) return null;
  
  // Show recommendation results
  if (recommendation) {
    return (
      <>
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0f1a] rounded-2xl w-full max-w-2xl border border-gray-800 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#4169E1]" />
                <h2 className="text-2xl font-bold text-white">Your Investment Recommendation</h2>
              </div>
              <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Recommendation Content */}
            <div className="px-6 py-6 space-y-6">
              {/* Main Recommendation */}
              <div className="bg-[#1a2332] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Recommended Business Type:</h3>
                <p className="text-2xl font-bold text-[#4169E1] mb-4">{recommendation.businessType}</p>
                <p className="text-gray-300 leading-relaxed">{recommendation.recommendation}</p>
              </div>

              {/* Reasoning */}
              {recommendation.reasoning.length > 0 && (
                <div className="bg-[#1a2332] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Why This Matches You:</h3>
                  <ul className="space-y-3">
                    {recommendation.reasoning.map((reason, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Match Factors */}
              {recommendation.keyMatchFactors.length > 0 && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">Key Match Factors:</h3>
                  <ul className="space-y-2">
                    {recommendation.keyMatchFactors.map((factor, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors font-semibold"
                >
                  Start Over
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 rounded-xl bg-[#4169E1] hover:bg-[#3557C1] text-white font-semibold transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  return <>
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-[#0a0f1a] rounded-2xl w-full max-w-2xl border border-gray-800">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
            <div>
              <h2 className="text-2xl font-bold text-white">Investment Preferences</h2>
              <p className="text-gray-400 text-sm mt-1">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 pt-4">
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-[#4169E1] h-2 rounded-full transition-all duration-300" style={{
              width: `${(currentQuestion + 1) / questions.length * 100}%`
            }} />
            </div>
          </div>

          {/* Question */}
          <div className="px-6 py-8">
            <h3 className="text-xl font-semibold text-white mb-6">{currentQ.question}</h3>

            {currentQ.type === "text" && (
              <input
                type="text"
                value={answers[currentQuestion] || ""}
                onChange={e => handleAnswer(e.target.value)}
                placeholder={currentQ.placeholder}
                className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors"
              />
            )}

            {currentQ.type === "textarea" && (
              <textarea
                value={answers[currentQuestion] || ""}
                onChange={e => handleAnswer(e.target.value)}
                placeholder={currentQ.placeholder}
                rows={4}
                className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors resize-none"
              />
            )}

            {currentQ.type === "select" && (
              <div className="space-y-3">
                {currentQ.options?.map(option => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                      answers[currentQuestion] === option
                        ? "border-[#4169E1] bg-[#4169E1]/10 text-white"
                        : "border-gray-700 bg-[#1a2332] text-gray-300 hover:border-gray-600"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {!hasAnswer && currentQuestion > 0 && (
              <p className="text-yellow-400 text-sm mt-4">Please provide an answer to continue</p>
            )}
          </div>

          {/* Loading State */}
          {isAnalyzing && (
            <div className="px-6 py-4">
              <div className="flex items-center justify-center gap-3 bg-[#1a2332] rounded-xl p-6">
                <Loader2 className="w-6 h-6 text-[#4169E1] animate-spin" />
                <div>
                  <p className="text-white font-semibold">Analyzing your preferences...</p>
                  <p className="text-gray-400 text-sm">Getting personalized recommendations</p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="px-6 py-2">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between px-6 py-5 border-t border-gray-800">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0 || isAnalyzing}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnswer || isAnalyzing}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4169E1] hover:bg-[#3557C1] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition-colors"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
              {currentQuestion < questions.length - 1 && <ChevronRight className="w-5 h-5" />}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>;
};