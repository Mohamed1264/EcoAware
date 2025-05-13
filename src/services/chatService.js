import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const FALLBACK_RESPONSES = {
  connection: "I'm having trouble connecting right now. Please try again later.",
  rateLimit: "I'm getting too many requests. Please wait a moment before trying again.",
  invalidKey: "There's an issue with the API configuration. Please contact support.",
  timeout: "The request is taking too long. Please try again.",
  general: "I'm having trouble processing your request. Please try again."
};

const RATE_LIMIT = {
  windowMs: 60000, // 1 minute
  maxRequests: 30
};

const requestTimestamps = [];

const checkRateLimit = () => {
  const now = Date.now();
  requestTimestamps.push(now);
  
  // Remove timestamps older than the window
  while (requestTimestamps[0] < now - RATE_LIMIT.windowMs) {
    requestTimestamps.shift();
  }
  
  return requestTimestamps.length <= RATE_LIMIT.maxRequests;
};

const getRandomFallbackResponse = () => {
  const responses = [
    "Did you know that forests cover about 31% of the Earth's land area?",
    "The ocean produces over 50% of the world's oxygen.",
    "Recycling one aluminum can saves enough energy to run a TV for 3 hours.",
    "A single tree can absorb up to 48 pounds of carbon dioxide per year.",
    "The Great Barrier Reef is the largest living structure on Earth."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

export const getChatResponse = async (message, languageCode = 'en') => {
  if (!process.env.REACT_APP_GEMINI_API_KEY) {
    console.error('API key is missing');
    return {
      success: false,
      error: FALLBACK_RESPONSES.invalidKey
    };
  }

  if (!checkRateLimit()) {
    console.warn('Rate limit exceeded');
    return {
      success: false,
      error: FALLBACK_RESPONSES.rateLimit
    };
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const systemPrompt = `You are an environmental expert assistant. Your responses should be:
    1. Factually accurate and based on current environmental data
    2. Concise and educational
    3. Focused solely on environmental topics
    4. Include relevant statistics and dates when available
    5. Format responses with markdown for better readability
    6. Use bullet points for lists
    7. Highlight important numbers and dates
    8. Include sources when possible
    9. If the question is short or unclear, try to:
       - Interpret it in the context of environmental topics
       - Provide related environmental information
       - Suggest more specific questions
       - Share interesting environmental facts

    Current environmental context (2024):
    - Global average temperature has risen by 1.1°C since pre-industrial times
    - CO2 levels are at 420 ppm (highest in 800,000 years)
    - 1 million species face extinction due to human activities
    - 75% of land environment has been significantly altered
    - Ocean temperatures are rising at 0.13°C per decade

    Respond in ${languageCode} language.`;

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: `Question: ${message}\n\nIf this question is short or unclear, please provide relevant environmental information and suggest more specific questions.` }]
        }
      ],
      generationConfig: {
        temperature: 0.7, // Increased for more creative interpretations
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1000, // Increased for more detailed responses
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
      ]
    });

    const response = await result.response;
    const text = response.text();

    return {
      success: true,
      response: text
    };
  } catch (error) {
    console.error('Chat service error:', error);
    return {
      success: false,
      error: error.message || FALLBACK_RESPONSES.general
    };
  }
};

// New function for instant search
export const searchEnvironmentalData = async (query, languageCode = 'en') => {
  if (!query.trim()) return [];

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `Provide quick facts about "${query}" related to the environment. 
    Format as a JSON array of objects with 'fact' and 'source' properties.
    Keep responses brief and factual.
    Use ${languageCode} language.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      return JSON.parse(text);
    } catch (e) {
      return [{ fact: text, source: 'Environmental Database' }];
    }
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
};