import { chatResponses } from '../data/chatResponses';
import { chatResponsesFr } from '../data/chatResponsesFr';
import { chatResponsesAr } from '../data/chatResponsesAr';

// 1. Configuration
const WORD_RESPONSES = {
  en: {
    'climate': 'Climate change refers to long-term temperature and weather pattern shifts.',
    'forest': 'Forests cover 30% of Earth\'s land and produce vital oxygen.',
    'water': 'Only 2.5% of Earth\'s water is freshwater, with <1% accessible for humans.'
  },
  fr: {
    'climat': 'Le changement climatique modifie les températures et modèles météorologiques.',
    'forêt': 'Les forêts couvrent 30% des terres et produisent de l\'oxygène vital.',
    'eau': 'Seulement 2,5% de l\'eau est douce, dont <1% accessible aux humains.'
  },
  ar: {
    'مناخ': 'يشير تغير المناخ إلى تحولات طويلة الأمد في درجات الحرارة وأنماط الطقس.',
    'غابة': 'تغطي الغابات 30٪ من مساحة الأرض وتنتج الأكسجين الحيوي.',
    'ماء': 'فقط 2.5٪ من مياه الأرض عذبة، وأقل من 1٪ متاح للبشر.'
  }
};

// 2. Helper Functions
const getChatResponses = (languageCode) => {
  return {
    en: chatResponses || {},
    fr: chatResponsesFr || {},
    ar: chatResponsesAr || {}
  }[languageCode] || {};
};

const getDefaultResponse = (languageCode) => {
  return {
    en: "I'm an environmental assistant. Ask me about climate, forests, or water.",
    fr: "Je suis un assistant environnemental. Posez-moi des questions sur le climat, les forêts ou l'eau.",
    ar: "أنا مساعدك البيئي. اسألني عن المناخ أو الغابات أو المياه."
  }[languageCode];
};

// 3. Core Matching Function
export const findBestResponse = (input, languageCode) => {
  const cleanInput = input.toLowerCase().trim().replace(/[؟،?.,!]/g, '');
  const inputWords = cleanInput.split(/\s+/).filter(word => word.length > 2);
  console.log("Input words:", inputWords);

  const responses = getChatResponses(languageCode);
  console.log(responses);
  
  // A. Check single-word responses first
  for (const word of inputWords) {
    if (WORD_RESPONSES[languageCode]?.[word]) {
      return WORD_RESPONSES[languageCode][word];
    }
  }
  
  // B. Search through all questions
  let bestMatch = null;
  let highestScore = 0;
  
  for (const category in responses) {
    const { questions = [], answer = [] } = responses[category];
    
    questions.forEach((question, index) => {
      const lowerQuestion = question.toLowerCase();
      let score = 0;
      
      // Calculate match score
      inputWords.forEach(word => {
        if (lowerQuestion.includes(word)) {
          score += word.length; // Longer words get more weight
        }
      });
      
      // Track best match
      if (score > highestScore || 
          (score === highestScore && question.length < (bestMatch?.question?.length || Infinity))) {
        highestScore = score;
        bestMatch = { answer: answer, question };
        console.log("Scanned questions:", answer);

      }
    });
  }
  
  // C. Return best match if found
  if (bestMatch && highestScore > 0) {
    return Array.isArray(bestMatch.answer) ? bestMatch.answer[0] : bestMatch.answer;
  }
  
  // D. Final fallback
  return getDefaultResponse(languageCode);
};

// 4. Suggestion Finder
export const findSuggestions = (input, languageCode) => {
  if (!input.trim()) return [];
  
  const cleanInput = input.toLowerCase().trim();
  const responses = getChatResponses(languageCode);
  const suggestions = [];
  
  // Search through all questions
  for (const category in responses) {
    responses[category]?.questions?.forEach(question => {
      if (question.toLowerCase().includes(cleanInput)) {
        suggestions.push(question);
      }
    });
  }
  
  return suggestions.slice(0, 5);
};