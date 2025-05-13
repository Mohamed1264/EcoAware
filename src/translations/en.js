export const en = {
  nav: {
    home: "Home",
    forests: 'Forests',
    wetlands: 'Wetlands',
    water: 'Water',
    funny: 'Funny/Quiz',
    chatbot: 'Chatbot'
  },
  chatbot: {
    title: 'Environmental Assistant',
    welcome: "Hello! I'm your environmental assistant. How can I help you today?",
    placeholder: 'Type your environmental question...',
    you: 'You',
    bot: 'Assistant',
    suggestedQuestions: 'Suggested Questions',
    questions: [
      "What are the main causes of climate change?",
      "How can we reduce our carbon footprint?",
      "What is the importance of biodiversity?",
      "How do forests help the environment?",
      "What are the effects of plastic pollution?",
      "How can we protect marine ecosystems?",
      "What is sustainable development?",
      "How does recycling help the environment?",
      "What are renewable energy sources?",
      "How can we conserve water?"
    ]
  },
  languages: {
    english: 'English',
    french: 'French',
    arabic: 'Arabic'
  },
  common: {
    loading: 'Loading...',
    error: 'Error',
    retry: 'Retry',
    back: 'Back',
    learnMore: 'Learn More'
  },
  quiz: {
    title: 'Environmental Quiz',
    nextQuestion: 'Next Question',
    seeResults: 'See Results',
    quizCompleted: 'Quiz Completed!',
    yourScore: 'Your Score',
    tryAgain: 'Try Again',
    goHome: 'Go Home',
    noQuestions: 'No questions available',
    categories: {
      climate: 'Climate Change',
      biodiversity: 'Biodiversity',
      pollution: 'Pollution',
      energy: 'Energy'
    },
    questions: [
      // Climate Change Questions
      {
        question: "What is the main cause of climate change?",
        options: [
          "Natural climate cycles",
          "Human activities and greenhouse gas emissions",
          "Solar radiation",
          "Volcanic activity"
        ],
        correctAnswer: 1,
        explanation: "While natural factors do influence climate, human activities like burning fossil fuels are the primary drivers of current climate change.",
        category: 'climate'
      },
      {
        question: "Which greenhouse gas is most responsible for global warming?",
        options: [
          "Methane (CH₄)",
          "Carbon dioxide (CO₂)",
          "Nitrous oxide (N₂O)",
          "Water vapor (H₂O)"
        ],
        correctAnswer: 1,
        explanation: "CO₂ contributes most to global warming because of its high concentration and long atmospheric lifetime.",
        category: 'climate'
      },
      {
        question: "What is the Paris Agreement's main goal?",
        options: [
          "Limit global temperature rise to 1.5°C",
          "Ban all fossil fuels by 2030",
          "Reduce air pollution by 50%",
          "Plant 1 trillion trees"
        ],
        correctAnswer: 0,
        explanation: "The Paris Agreement aims to limit global warming to well below 2°C, preferably to 1.5°C.",
        category: 'climate'
      },

      // Biodiversity Questions
      {
        question: "What percentage of Earth's species may face extinction by 2100?",
        options: [
          "5-10%",
          "15-20%",
          "25-30%",
          "Over 50%"
        ],
        correctAnswer: 3,
        explanation: "Scientists warn that current extinction rates are 100-1000 times higher than natural rates.",
        category: 'biodiversity'
      },
      {
        question: "Which ecosystem has the highest biodiversity?",
        options: [
          "Coral reefs",
          "Tropical rainforests",
          "Grasslands",
          "Tundra"
        ],
        correctAnswer: 1,
        explanation: "Tropical rainforests contain about 50% of the world's terrestrial species.",
        category: 'biodiversity'
      },

      // Pollution Questions
      {
        question: "How long does it take for plastic to decompose?",
        options: [
          "10-20 years",
          "50-100 years",
          "200-400 years",
          "500+ years"
        ],
        correctAnswer: 3,
        explanation: "Most plastics take centuries to decompose, with some estimates up to 1000 years.",
        category: 'pollution'
      },
      {
        question: "What is the Great Pacific Garbage Patch mainly composed of?",
        options: [
          "Plastic bottles",
          "Fishing nets",
          "Microplastics",
          "Industrial waste"
        ],
        correctAnswer: 2,
        explanation: "About 94% of the patch consists of microplastics smaller than 5mm.",
        category: 'pollution'
      },

      // Energy Questions
      {
        question: "Which renewable energy source grew the fastest in the last decade?",
        options: [
          "Hydropower",
          "Wind",
          "Solar",
          "Geothermal"
        ],
        correctAnswer: 2,
        explanation: "Solar energy saw a 49% annual growth rate from 2010-2020.",
        category: 'energy'
      },
      {
        question: "What percentage of global energy was renewable in 2022?",
        options: [
          "8%",
          "12%",
          "18%",
          "30%"
        ],
        correctAnswer: 3,
        explanation: "Renewables accounted for about 30% of global electricity generation in 2022.",
        category: 'energy'
      },
      {
        question: "Which country leads in wind energy production?",
        options: [
          "United States",
          "Germany",
          "China",
          "India"
        ],
        correctAnswer: 2,
        explanation: "China produces more wind energy than any other country, with over 300 GW capacity.",
        category: 'energy'
      }
    ]
  },
 
};