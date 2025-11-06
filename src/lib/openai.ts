// OpenAI API Service
// Note: In production, you should use a backend proxy to keep your API key secure
// This frontend implementation is for development purposes only

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  error?: {
    message: string;
  };
}

/**
 * Call OpenAI API with a chat completion request
 */
export async function callOpenAI(
  messages: OpenAIMessage[],
  model: string = 'gpt-4o-mini'
): Promise<string> {
  // Debug: Log all environment info
  console.log('🔍 Checking for API key...');
  console.log('import.meta.env exists:', !!import.meta.env);
  console.log('All env keys:', import.meta.env ? Object.keys(import.meta.env) : 'N/A');
  console.log('VITE_ keys:', import.meta.env ? Object.keys(import.meta.env).filter(k => k.startsWith('VITE_')) : []);
  
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  console.log('API Key found:', !!apiKey);
  console.log('API Key length:', apiKey ? apiKey.length : 0);

  if (!apiKey || apiKey.trim() === '') {
    console.error('❌ API KEY NOT FOUND!');
    console.error('This usually means:');
    console.error('1. The .env file is missing or in the wrong location');
    console.error('2. The dev server was NOT restarted after creating .env');
    console.error('3. The variable name is wrong (must be VITE_OPENAI_API_KEY)');
    throw new Error(
      'OpenAI API key not found. Please set VITE_OPENAI_API_KEY in your .env file and restart the dev server.'
    );
  }
  
  console.log('✅ API Key loaded successfully!');

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error?.message || `API request failed: ${response.statusText}`
      );
    }

    const data: OpenAIResponse = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return data.choices[0]?.message?.content || 'No response from AI';
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to call OpenAI API');
  }
}

/**
 * Analyze a business investment opportunity using OpenAI
 */
export async function analyzeBusinessInvestment(business: {
  title: string;
  price: string;
  revenue: string;
  margin: string;
  established: string;
}): Promise<{
  score: number;
  recommendation: string;
  risk: string;
  valuation: string;
  insights: string[];
  concerns: string[];
}> {
  const prompt = `You are an expert investment analyst. Analyze this business opportunity and provide a structured analysis.

Business Details:
- Title: ${business.title}
- Price: ${business.price}
- Revenue: ${business.revenue}
- Profit Margin: ${business.margin}
- Established: ${business.established}

Please provide your analysis in the following JSON format (no markdown, just valid JSON):
{
  "score": <number between 0-100>,
  "recommendation": "<short recommendation>",
  "risk": "<risk level: Low, Low to Medium, Medium, Medium to High, High>",
  "valuation": "<Fair Price, Good Price, Slightly Overvalued, Overvalued>",
  "insights": ["<insight 1>", "<insight 2>", "<insight 3>", "<insight 4>", "<insight 5>"],
  "concerns": ["<concern 1 if any>", "<concern 2 if any>"]
}

Be thorough, professional, and provide actionable insights.`;

  const messages: OpenAIMessage[] = [
    {
      role: 'system',
      content:
        'You are a professional investment analyst with expertise in business valuation and risk assessment. Provide clear, actionable insights in JSON format.',
    },
    {
      role: 'user',
      content: prompt,
    },
  ];

  try {
    const response = await callOpenAI(messages);
    
    // Try to parse JSON from the response
    // Sometimes GPT returns markdown code blocks, so we extract JSON
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : response;
    
    const analysis = JSON.parse(jsonString);
    
    // Validate and ensure all required fields exist
    return {
      score: Math.min(100, Math.max(0, analysis.score || 75)),
      recommendation: analysis.recommendation || 'Good Investment',
      risk: analysis.risk || 'Medium',
      valuation: analysis.valuation || 'Fair Price',
      insights: Array.isArray(analysis.insights) ? analysis.insights : [],
      concerns: Array.isArray(analysis.concerns) ? analysis.concerns : [],
    };
  } catch (error) {
    console.error('Error analyzing business:', error);
    throw new Error('Failed to analyze business investment');
  }
}

/**
 * Get AI response for a chat message
 */
export async function getChatResponse(
  userMessage: string,
  conversationHistory: OpenAIMessage[] = []
): Promise<string> {
  const messages: OpenAIMessage[] = [
    {
      role: 'system',
      content:
        'You are a helpful AI investment advisor for a business marketplace platform. You help users find investment opportunities, analyze businesses, and provide financial guidance. Be concise, professional, and helpful.',
    },
    ...conversationHistory,
    {
      role: 'user',
      content: userMessage,
    },
  ];

  return await callOpenAI(messages);
}

/**
 * Analyze seller/business for security and legitimacy
 */
export async function analyzeSellerSecurity(
  sellerOrBusinessName: string
): Promise<{
  isSecure: boolean;
  confidence: number;
  reasons: string[];
  warnings: string[];
}> {
  const prompt = `You are a security analyst specializing in business marketplace verification. Analyze the seller or business named "${sellerOrBusinessName}" for legitimacy and security.

Consider:
- Previous listings history and patterns
- Financial data consistency and accuracy
- Business registration and verification status
- Red flags or suspicious activity
- Overall trustworthiness

Based on your analysis, determine if this seller/business is SECURE (legitimate and trustworthy) or NOT SECURE (suspicious or potentially fraudulent).

Respond in this JSON format (no markdown, just valid JSON):
{
  "isSecure": <true or false>,
  "confidence": <number 0-100>,
  "reasons": ["<reason 1>", "<reason 2>", "<reason 3>"],
  "warnings": ["<warning 1 if any>", "<warning 2 if any>"]
}

Be thorough and professional. If you cannot find specific information about this seller, base your analysis on common red flags and best practices.`;

  const messages: OpenAIMessage[] = [
    {
      role: 'system',
      content:
        'You are a professional security analyst specializing in business marketplace verification. Analyze sellers and businesses for legitimacy, financial accuracy, and trustworthiness. Provide clear, fact-based assessments in JSON format.',
    },
    {
      role: 'user',
      content: prompt,
    },
  ];

  try {
    const response = await callOpenAI(messages);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : response;
    const analysis = JSON.parse(jsonString);

    return {
      isSecure: analysis.isSecure === true || analysis.isSecure === 'true',
      confidence: Math.min(100, Math.max(0, analysis.confidence || 50)),
      reasons: Array.isArray(analysis.reasons) ? analysis.reasons : [],
      warnings: Array.isArray(analysis.warnings) ? analysis.warnings : [],
    };
  } catch (error) {
    console.error('Error analyzing seller security:', error);
    throw new Error('Failed to analyze seller security');
  }
}

/**
 * Analyze survey answers and recommend businesses
 */
export async function getInvestmentRecommendations(
  surveyAnswers: Record<number, string>,
  questions: Array<{ id: number; question: string }>
): Promise<{
  recommendation: string;
  businessType: string;
  reasoning: string[];
  keyMatchFactors: string[];
}> {
  // Build a comprehensive summary of answers
  const answersSummary = Object.entries(surveyAnswers)
    .map(([qId, answer]) => {
      const question = questions.find(q => q.id === parseInt(qId));
      return question ? `${question.question}: ${answer}` : null;
    })
    .filter(Boolean)
    .join('\n');

  const prompt = `You are an expert investment advisor. A user has completed an investment preferences survey. Based on their answers, recommend the best business type and investment opportunity for them.

User's Survey Answers:
${answersSummary}

Analyze their:
- Budget and financial capacity
- Industry preferences
- Experience level
- Risk tolerance
- Time commitment preferences
- Location preferences
- Growth expectations
- Other specific requirements

Provide a detailed recommendation in JSON format (no markdown, just valid JSON):
{
  "recommendation": "<Overall recommendation - what type of business they should invest in>",
  "businessType": "<Specific business type/category>",
  "reasoning": ["<reason 1 why this matches their profile>", "<reason 2>", "<reason 3>", "<reason 4>"],
  "keyMatchFactors": ["<factor 1 that makes this a good match>", "<factor 2>", "<factor 3>"]
}

Be specific, actionable, and match their profile closely.`;

  const messages: OpenAIMessage[] = [
    {
      role: 'system',
      content:
        'You are a professional investment advisor with expertise in matching investors with suitable business opportunities. Analyze user preferences and provide specific, actionable business recommendations in JSON format.',
    },
    {
      role: 'user',
      content: prompt,
    },
  ];

  try {
    const response = await callOpenAI(messages);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : response;
    const recommendation = JSON.parse(jsonString);

    return {
      recommendation: recommendation.recommendation || 'Based on your preferences, we recommend exploring established businesses in your preferred industry.',
      businessType: recommendation.businessType || 'General Business',
      reasoning: Array.isArray(recommendation.reasoning) ? recommendation.reasoning : [],
      keyMatchFactors: Array.isArray(recommendation.keyMatchFactors) ? recommendation.keyMatchFactors : [],
    };
  } catch (error) {
    console.error('Error getting investment recommendations:', error);
    throw new Error('Failed to generate investment recommendations');
  }
}

