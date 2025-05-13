// geminiService.js
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// Validate API key on service initialization
if (!GEMINI_API_KEY) {
  console.error(
    'Gemini API key is not configured. Please set REACT_APP_GEMINI_API_KEY in your .env file\n' +
    'Get your API key from: https://ai.google.dev/'
  );
}

// Enhanced fallback responses with more context
const FALLBACK_RESPONSES = {
  error: "I'm experiencing technical difficulties. Please try again shortly.",
  rateLimit: "I'm receiving many requests. Please wait a moment and try again.",
  invalidKey: "API authentication issue. Please verify your API key configuration.",
  timeout: "Request timeout. Please check your connection and try again.",
  invalidResponse: "I'm having trouble formulating a response. Could you rephrase your question?",
  environmental: [
    "Current environmental data shows... [provide general facts]",
    "Recent studies indicate... [mention a trend]",
    "Environmental experts suggest... [give general advice]"
  ]
};

// Enhanced system prompt with better structure
const SYSTEM_PROMPT = `You are an Environmental Expert Assistant with these characteristics:
- Provide accurate, science-based environmental information
- Specialize in climate change, conservation, sustainability
- Cite sources when possible
- Use clear, professional language
- Admit uncertainty when appropriate
- Maintain neutral, factual tone

Current Environmental Context (2023-2024):
- Global temperature: +1.1°C since pre-industrial era
- CO2 levels: ~420 ppm (Mauna Loa Observatory)
- Biodiversity loss rate: 100-1000x background extinction
- Renewable energy share: ~30% of global electricity
- Plastic waste: 400M tons/year, 14M tons enter oceans`;

// Rate limiting with enhanced tracking
const RATE_LIMIT = {
  maxRequests: 15, // Increased slightly
  timeWindow: 60000,
  requests: [],
  check: function() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.timeWindow);
    if (this.requests.length >= this.maxRequests) {
      const waitTime = Math.ceil((this.requests[0] + this.timeWindow - now) / 1000);
      throw new Error(`RATE_LIMIT: Please wait ${waitTime} seconds`);
    }
    this.requests.push(now);
  }
};

// Enhanced error logger
const logError = (error, context = {}) => {
  console.error('Gemini Service Error:', {
    timestamp: new Date().toISOString(),
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack
    },
    context
  });
};

// Main API service function
export const generateResponse = async ({ message, conversationHistory, language }) => {
  // Validate inputs
  if (!message?.trim()) {
    throw new Error('Empty message received');
  }

  // Check for API key
  if (!GEMINI_API_KEY) {
    logError(new Error('Missing API key'));
    return FALLBACK_RESPONSES.invalidKey;
  }

  try {
    // Apply rate limiting
    RATE_LIMIT.check();

    // Prepare conversation context
    const conversationContext = conversationHistory
      ?.slice(-6) // Last 3 exchanges (user+bot pairs)
      .map(msg => `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
      .join('\n') || 'No previous context';

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout

    // API request
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `${SYSTEM_PROMPT}\n\nConversation Context:\n${conversationContext}\n\nUser Message (${language}): ${message}\n\nAssistant Response:`
          }]
        }],
        generationConfig: {
          temperature: 0.7, // Balanced creativity
          maxOutputTokens: 1500,
          topP: 0.9,
          topK: 40
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          // Other safety settings...
        ]
      }),
      signal: controller.signal
    });

    clearTimeout(timeout);

    // Handle response errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMsg = errorData.error?.message || 'Unknown API error';
      throw new Error(`API_${response.status}: ${errorMsg}`);
    }

    // Process response
    const data = await response.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText || responseText.length < 10) {
      throw new Error('INVALID_RESPONSE: Empty or too short');
    }

    return responseText.trim();
  } catch (error) {
    logError(error, { message, language });

    // Enhanced error handling
    if (error.name === 'AbortError') {
      return FALLBACK_RESPONSES.timeout;
    }

    switch (true) {
      case error.message.startsWith('API_429'):
        return FALLBACK_RESPONSES.rateLimit;
      case error.message.startsWith('API_401'):
        return FALLBACK_RESPONSES.invalidKey;
      case error.message.includes('RATE_LIMIT'):
        return FALLBACK_RESPONSES.rateLimit;
      case error.message.includes('INVALID_RESPONSE'):
        return FALLBACK_RESPONSES.invalidResponse;
      default:
        return FALLBACK_RESPONSES.error;
    }
  }
};