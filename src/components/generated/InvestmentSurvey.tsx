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
    mpid: "ce761a1b-2430-4425-869b-176b4b82e211"
  }, {
    id: 1,
    question: "What industry are you most interested in?",
    type: "text",
    placeholder: "e.g., Food & Beverage, Technology, Retail",
    mpid: "84a72366-5354-427c-b4ab-13c4cdcc91cd"
  }, {
    id: 2,
    question: "How much business experience do you have?",
    type: "select",
    options: ["None", "1-3 years", "3-5 years", "5+ years"],
    mpid: "043fdac0-976c-4d2f-94ab-357d38e226a0"
  }, {
    id: 3,
    question: "Are you looking for a full-time or passive investment?",
    type: "select",
    options: ["Full-time", "Passive", "Either"],
    mpid: "2be299f3-9a9b-4d7d-ba29-9a00428a5c8f"
  }, {
    id: 4,
    question: "What's your preferred location?",
    type: "text",
    placeholder: "City or region",
    mpid: "ead55dec-ed0c-4630-83d9-b93f4d58f6a2"
  }, {
    id: 5,
    question: "What's your risk tolerance?",
    type: "select",
    options: ["Low", "Medium", "High"],
    mpid: "c1e7403c-869d-44d9-855a-8ebdcdaf056b"
  }, {
    id: 6,
    question: "Do you prefer an established business or startup?",
    type: "select",
    options: ["Established", "Startup", "Either"],
    mpid: "fd1f2a0f-956f-47d4-a1ec-1ef9f7d21b0b"
  }, {
    id: 7,
    question: "What's your expected return on investment?",
    type: "text",
    placeholder: "e.g., 15-20% annually",
    mpid: "c445eb0b-2e70-4daa-ba13-a2692db52e1b"
  }, {
    id: 8,
    question: "How soon do you want to start?",
    type: "select",
    options: ["Immediately", "1-3 months", "3-6 months", "6+ months"],
    mpid: "531c15a2-9b24-413d-80db-60c15fc8acdb"
  }, {
    id: 9,
    question: "Do you need financing options?",
    type: "select",
    options: ["Yes", "No", "Maybe"],
    mpid: "17d5441e-ea47-40a1-88c2-1085737cf550"
  }, {
    id: 10,
    question: "What size team are you comfortable managing?",
    type: "text",
    placeholder: "e.g., 5-10 employees",
    mpid: "39a72306-d258-40c6-8b64-2b2d072ba9e8"
  }, {
    id: 11,
    question: "Are you open to franchises?",
    type: "select",
    options: ["Yes", "No", "Maybe"],
    mpid: "a571a845-5f4c-4a5c-aa43-29d8ee2d0990"
  }, {
    id: 12,
    question: "What's your preferred growth strategy?",
    type: "text",
    placeholder: "e.g., Expansion, Optimization, Innovation",
    mpid: "503bef25-c804-4bda-bcd4-a3e380b10fc6"
  }, {
    id: 13,
    question: "Do you have specific revenue targets?",
    type: "text",
    placeholder: "e.g., $500K-$1M annually",
    mpid: "efa955e0-bdde-4307-96a2-16c2c421ce16"
  }, {
    id: 14,
    question: "Any other requirements or preferences?",
    type: "textarea",
    placeholder: "Tell us anything else that's important to you...",
    mpid: "4de393c0-d7ed-4e99-b36d-46aa261c6bce"
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
      <SortableContainer dndKitId="720921ee-e551-40b6-ad62-5755ce9eb99b" containerType="regular" prevTag="div" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" data-magicpath-id="0" data-magicpath-path="InvestmentSurvey.tsx">
        <SortableContainer dndKitId="62dc6d1f-a3fd-4d19-aa56-705310f4bc6a" containerType="regular" prevTag="div" className="bg-[#0a0f1a] rounded-2xl w-full max-w-2xl border border-gray-800" data-magicpath-id="1" data-magicpath-path="InvestmentSurvey.tsx">
          {/* Header */}
          <SortableContainer dndKitId="bfbfdd4f-85b3-4eb3-9939-9f802c3d3821" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-b border-gray-800" data-magicpath-id="2" data-magicpath-path="InvestmentSurvey.tsx">
            <SortableContainer dndKitId="0e195769-7a14-4287-9231-f7904df93d99" containerType="regular" prevTag="div" data-magicpath-id="3" data-magicpath-path="InvestmentSurvey.tsx">
              <h2 className="text-2xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="InvestmentSurvey.tsx">Investment Preferences</h2>
              <p className="text-gray-400 text-sm mt-1" data-magicpath-id="5" data-magicpath-path="InvestmentSurvey.tsx">Question {currentQuestion + 1} of {questions.length}</p>
            </SortableContainer>
            <SortableContainer dndKitId="cd3f575b-023b-4d98-bceb-23fd1ccf701e" containerType="regular" prevTag="button" onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-lg transition-colors" data-magicpath-id="6" data-magicpath-path="InvestmentSurvey.tsx">
              <X className="w-5 h-5 text-white" data-magicpath-id="7" data-magicpath-path="InvestmentSurvey.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Progress Bar */}
          <SortableContainer dndKitId="a09189e6-d86f-4b8f-b719-9447b0ce18ff" containerType="regular" prevTag="div" className="px-6 pt-4" data-magicpath-id="8" data-magicpath-path="InvestmentSurvey.tsx">
            <SortableContainer dndKitId="d4c502b9-61f2-4e1d-ae1a-af249b4560da" containerType="regular" prevTag="div" className="w-full bg-gray-800 rounded-full h-2" data-magicpath-id="9" data-magicpath-path="InvestmentSurvey.tsx">
              <div className="bg-[#4169E1] h-2 rounded-full transition-all duration-300" style={{
              width: `${(currentQuestion + 1) / questions.length * 100}%`
            }} data-magicpath-id="10" data-magicpath-path="InvestmentSurvey.tsx" />
            </SortableContainer>
          </SortableContainer>

          {/* Question */}
          <SortableContainer dndKitId="4d2a97fb-8dd9-42a5-b3d6-8c3c7f03cace" containerType="regular" prevTag="div" className="px-6 py-8" data-magicpath-id="11" data-magicpath-path="InvestmentSurvey.tsx">
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
          <SortableContainer dndKitId="7399f910-2907-4910-829b-c8cbca8a63c2" containerType="regular" prevTag="div" className="flex items-center justify-between px-6 py-5 border-t border-gray-800" data-magicpath-id="17" data-magicpath-path="InvestmentSurvey.tsx">
            <SortableContainer dndKitId="26327655-7ccf-4b1d-87ca-c4cf963d082b" containerType="regular" prevTag="button" onClick={handlePrev} disabled={currentQuestion === 0} className="flex items-center gap-2 px-5 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" data-magicpath-id="18" data-magicpath-path="InvestmentSurvey.tsx">
              <ChevronLeft className="w-5 h-5" data-magicpath-id="19" data-magicpath-path="InvestmentSurvey.tsx" />
              Previous
            </SortableContainer>

            <SortableContainer dndKitId="dca69c36-f155-4878-a087-fdc872331974" containerType="regular" prevTag="button" onClick={handleNext} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4169E1] hover:bg-[#3557C1] text-white font-semibold transition-colors" data-magicpath-id="20" data-magicpath-path="InvestmentSurvey.tsx">
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
              {currentQuestion < questions.length - 1 && <ChevronRight className="w-5 h-5" data-magicpath-id="21" data-magicpath-path="InvestmentSurvey.tsx" />}
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </>;
};