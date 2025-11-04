"use client";

import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
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
  const questions = [{
    id: 0,
    question: "What's your investment budget range?",
    type: "text",
    placeholder: "$50,000 - $500,000",
    mpid: "83c08d52-1ad3-490e-b0db-a77317a5342f"
  }, {
    id: 1,
    question: "What industry are you most interested in?",
    type: "text",
    placeholder: "e.g., Food & Beverage, Technology, Retail",
    mpid: "f16fc469-eb0c-4c41-88df-fad2830bdf3c"
  }, {
    id: 2,
    question: "How much business experience do you have?",
    type: "select",
    options: ["None", "1-3 years", "3-5 years", "5+ years"],
    mpid: "0b42a2a8-4111-4365-b7c4-361dc9488914"
  }, {
    id: 3,
    question: "Are you looking for a full-time or passive investment?",
    type: "select",
    options: ["Full-time", "Passive", "Either"],
    mpid: "341ac586-d673-400e-a73f-5d157f3af828"
  }, {
    id: 4,
    question: "What's your preferred location?",
    type: "text",
    placeholder: "City or region",
    mpid: "479f16a3-bebf-464a-8e97-a8d20a45aefc"
  }, {
    id: 5,
    question: "What's your risk tolerance?",
    type: "select",
    options: ["Low", "Medium", "High"],
    mpid: "ef745d7e-d3f8-4bf6-96fd-8c4618e8f487"
  }, {
    id: 6,
    question: "Do you prefer an established business or startup?",
    type: "select",
    options: ["Established", "Startup", "Either"],
    mpid: "33edf074-d3fb-445b-92d8-ac96e2bc1daa"
  }, {
    id: 7,
    question: "What's your expected return on investment?",
    type: "text",
    placeholder: "e.g., 15-20% annually",
    mpid: "c014ad8b-2447-4739-9461-3f1e02b712a0"
  }, {
    id: 8,
    question: "How soon do you want to start?",
    type: "select",
    options: ["Immediately", "1-3 months", "3-6 months", "6+ months"],
    mpid: "448f88a1-3036-4b23-909c-f0b1a9fa0c58"
  }, {
    id: 9,
    question: "Do you need financing options?",
    type: "select",
    options: ["Yes", "No", "Maybe"],
    mpid: "2648b3c4-8cdc-49f6-ac30-183bb0f8aa40"
  }, {
    id: 10,
    question: "What size team are you comfortable managing?",
    type: "text",
    placeholder: "e.g., 5-10 employees",
    mpid: "2ddb1e86-6eed-4e21-8fac-14c243a5c4c9"
  }, {
    id: 11,
    question: "Are you open to franchises?",
    type: "select",
    options: ["Yes", "No", "Maybe"],
    mpid: "2d683388-498d-4e25-b339-012c87f78fcd"
  }, {
    id: 12,
    question: "What's your preferred growth strategy?",
    type: "text",
    placeholder: "e.g., Expansion, Optimization, Innovation",
    mpid: "dc9e15b6-08e6-40a6-8c88-63ed6abefeff"
  }, {
    id: 13,
    question: "Do you have specific revenue targets?",
    type: "text",
    placeholder: "e.g., $500K-$1M annually",
    mpid: "ad4383e9-0c68-4f4b-bd33-0c8178f8a0ce"
  }, {
    id: 14,
    question: "Any other requirements or preferences?",
    type: "textarea",
    placeholder: "Tell us anything else that's important to you...",
    mpid: "cd7d56c2-826a-4600-beec-17796ef1c965"
  }] as any[];
  const currentQ = questions[currentQuestion];
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Submit survey
      onClose();
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
  if (!isOpen) return null;
  return <>
      <SortableContainer dndKitId="88e93f9d-3c7c-4b5a-af64-f88a7b62591b" containerType="regular" prevTag="div" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" data-magicpath-id="0" data-magicpath-path="InvestmentSurvey.tsx">
        <SortableContainer dndKitId="31e743e4-2eeb-432f-8843-9bfb09fa4844" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-2xl w-full max-w-2xl border border-gray-800" data-magicpath-id="1" data-magicpath-path="InvestmentSurvey.tsx">
          {/* Header */}
          <SortableContainer dndKitId="f600a58d-b3d3-4a37-b8b8-a52b2024c3df" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="InvestmentSurvey.tsx">
            <SortableContainer dndKitId="939c51ce-6ea1-430f-b2ef-14ccd5184d9f" containerType="regular" prevTag="div" data-magicpath-id="3" data-magicpath-path="InvestmentSurvey.tsx">
              <h2 className="text-2xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="InvestmentSurvey.tsx">Investment Preferences</h2>
              <p className="text-gray-400 text-sm mt-1" data-magicpath-id="5" data-magicpath-path="InvestmentSurvey.tsx">Question {currentQuestion + 1} of {questions.length}</p>
            </SortableContainer>
            <SortableContainer dndKitId="8ea3fd5d-ce02-45f2-af31-009b858ee8e2" containerType="regular" prevTag="button" onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="6" data-magicpath-path="InvestmentSurvey.tsx">
              <X className="w-5 h-5 text-white" data-magicpath-id="7" data-magicpath-path="InvestmentSurvey.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Progress Bar */}
          <SortableContainer dndKitId="7502a36e-3d35-41c8-a422-0f2454ffe5c8" containerType="regular" prevTag="div" className="px-6 pt-4" data-magicpath-id="8" data-magicpath-path="InvestmentSurvey.tsx">
            <SortableContainer dndKitId="10a8f24a-4df2-4db3-bcbf-6d7e8644866c" containerType="regular" prevTag="div" className="w-full bg-gray-800 rounded-full h-2" data-magicpath-id="9" data-magicpath-path="InvestmentSurvey.tsx">
              <div className="bg-[#4169E1] h-2 rounded-full transition-all duration-300" style={{
              width: `${(currentQuestion + 1) / questions.length * 100}%`
            }} data-magicpath-id="10" data-magicpath-path="InvestmentSurvey.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Question */}
          <SortableContainer dndKitId="2e1f2f78-5999-4729-a068-f32edd0b7175" containerType="regular" prevTag="div" className="px-6 py-8" data-magicpath-id="11" data-magicpath-path="InvestmentSurvey.tsx">
            <h3 className="text-xl font-semibold text-white mb-6" data-magicpath-id="12" data-magicpath-path="InvestmentSurvey.tsx">{currentQ.question}</h3>

            {currentQ.type === "text" && <input type="text" value={answers[currentQuestion] || ""} onChange={e => handleAnswer(e.target.value)} placeholder={currentQ.placeholder} className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors" data-magicpath-id="13" data-magicpath-path="InvestmentSurvey.tsx" />}

            {currentQ.type === "textarea" && <textarea value={answers[currentQuestion] || ""} onChange={e => handleAnswer(e.target.value)} placeholder={currentQ.placeholder} rows={4} className="w-full bg-[#1a2332] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4169E1] transition-colors resize-none" data-magicpath-id="14" data-magicpath-path="InvestmentSurvey.tsx" />}

            {currentQ.type === "select" && <div className="space-y-3" data-magicpath-id="15" data-magicpath-path="InvestmentSurvey.tsx">
                {currentQ.options?.map(option => <button key={option} onClick={() => handleAnswer(option)} className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${answers[currentQuestion] === option ? "border-[#4169E1] bg-[#4169E1]/10 text-white" : "border-gray-700 bg-[#1a2332] text-gray-300 hover:border-gray-600"}`} data-magicpath-id="16" data-magicpath-path="InvestmentSurvey.tsx">
                    {option}
                  </button>)}
              </div>}
          </SortableContainer>

          {/* Navigation */}
          <SortableContainer dndKitId="6aa6d596-15a9-4b78-8872-e901e2a5aa42" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-t border-gray-800" data-magicpath-id="17" data-magicpath-path="InvestmentSurvey.tsx">
            <SortableContainer dndKitId="cddc3002-603a-4e7c-acce-df827178ec8e" containerType="regular" prevTag="button" onClick={handlePrev} disabled={currentQuestion === 0} className="flex items-center gap-2 px-5 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" data-magicpath-id="18" data-magicpath-path="InvestmentSurvey.tsx">
              <ChevronLeft className="w-5 h-5" data-magicpath-id="19" data-magicpath-path="InvestmentSurvey.tsx" />
              Previous
            </SortableContainer>

            <SortableContainer dndKitId="d76d60b2-68f0-45f1-8405-c236d63d9e88" containerType="regular" prevTag="button" onClick={handleNext} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4169E1] hover:bg-[#3557C1] text-white font-semibold transition-colors" data-magicpath-id="20" data-magicpath-path="InvestmentSurvey.tsx">
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
              {currentQuestion < questions.length - 1 && <ChevronRight className="w-5 h-5" data-magicpath-id="21" data-magicpath-path="InvestmentSurvey.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </>;
};