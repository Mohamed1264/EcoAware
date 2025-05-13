import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { en, fr, ar } from '../translations/index';
import { Trophy, Clock, CheckCircle, XCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const Quiz = () => {
  const { language } = useLanguage();
  const translations = language === 'English' ? en : language === 'French' ? fr : ar;

  // Quiz questions in different languages
  const questions = {
    English: [
      {
        question: "What is the main cause of climate change?",
        options: [
          "Natural climate cycles",
          "Human activities and greenhouse gas emissions",
          "Solar radiation",
          "Volcanic activity"
        ],
        correctAnswer: 1,
        explanation: "While natural factors do influence climate, the overwhelming scientific consensus is that human activities, particularly the burning of fossil fuels and deforestation, are the primary drivers of current climate change."
      },
      {
        question: "Which of these is a renewable energy source?",
        options: [
          "Coal",
          "Natural gas",
          "Solar power",
          "Nuclear power"
        ],
        correctAnswer: 2,
        explanation: "Solar power is a renewable energy source as it harnesses energy from the sun, which is virtually inexhaustible. Unlike fossil fuels, solar energy doesn't produce greenhouse gas emissions during operation."
      },
      {
        question: "What percentage of Earth's water is freshwater?",
        options: [
          "97%",
          "50%",
          "3%",
          "25%"
        ],
        correctAnswer: 2,
        explanation: "Only about 3% of Earth's water is freshwater, and most of that is locked in ice caps and glaciers. Less than 1% is readily available for human use."
      }
    ],
    French: [
      {
        question: "Quelle est la principale cause du changement climatique ?",
        options: [
          "Les cycles climatiques naturels",
          "Les activités humaines et les émissions de gaz à effet de serre",
          "Le rayonnement solaire",
          "L'activité volcanique"
        ],
        correctAnswer: 1,
        explanation: "Bien que les facteurs naturels influencent le climat, le consensus scientifique est que les activités humaines, notamment la combustion des combustibles fossiles et la déforestation, sont les principaux moteurs du changement climatique actuel."
      },
      {
        question: "Laquelle de ces sources est une énergie renouvelable ?",
        options: [
          "Le charbon",
          "Le gaz naturel",
          "L'énergie solaire",
          "L'énergie nucléaire"
        ],
        correctAnswer: 2,
        explanation: "L'énergie solaire est une source d'énergie renouvelable car elle utilise l'énergie du soleil, qui est pratiquement inépuisable. Contrairement aux combustibles fossiles, l'énergie solaire ne produit pas d'émissions de gaz à effet de serre pendant son fonctionnement."
      },
      {
        question: "Quel pourcentage de l'eau de la Terre est de l'eau douce ?",
        options: [
          "97%",
          "50%",
          "3%",
          "25%"
        ],
        correctAnswer: 2,
        explanation: "Seulement environ 3% de l'eau de la Terre est de l'eau douce, et la plupart est enfermée dans les calottes glaciaires et les glaciers. Moins de 1% est facilement disponible pour l'usage humain."
      }
    ],
    Arabic: [
      {
        question: "ما هو السبب الرئيسي لتغير المناخ؟",
        options: [
          "الدورات المناخية الطبيعية",
          "الأنشطة البشرية وانبعاثات غازات الدفيئة",
          "الإشعاع الشمسي",
          "النشاط البركاني"
        ],
        correctAnswer: 1,
        explanation: "على الرغم من أن العوامل الطبيعية تؤثر على المناخ، فإن الإجماع العلمي هو أن الأنشطة البشرية، وخاصة حرق الوقود الأحفوري وإزالة الغابات، هي المحركات الرئيسية لتغير المناخ الحالي."
      },
      {
        question: "أي من هذه المصادر هو مصدر طاقة متجددة؟",
        options: [
          "الفحم",
          "الغاز الطبيعي",
          "الطاقة الشمسية",
          "الطاقة النووية"
        ],
        correctAnswer: 2,
        explanation: "الطاقة الشمسية هي مصدر طاقة متجددة لأنها تستخدم طاقة الشمس، وهي غير قابلة للنفاد عملياً. على عكس الوقود الأحفوري، لا تنتج الطاقة الشمسية انبعاثات غازات الدفيئة أثناء التشغيل."
      },
      {
        question: "ما هي نسبة المياه العذبة على الأرض؟",
        options: [
          "97%",
          "50%",
          "3%",
          "25%"
        ],
        correctAnswer: 2,
        explanation: "حوالي 3% فقط من مياه الأرض هي مياه عذبة، ومعظمها محبوس في القمم الجليدية والأنهار الجليدية. أقل من 1% متاح بسهولة للاستخدام البشري."
      }
    ]
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !showResult && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleNextQuestion();
    }
  }, [timeLeft, showResult, quizCompleted]);

  const handleAnswerSelect = (index) => {
    if (showResult) return;
    setSelectedAnswer(index);
    const isCorrect = index === questions[language][currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions[language].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setTimeLeft(30);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Quiz Header */}
          <div className="p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{translations.quiz.title}</h1>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{timeLeft}s</span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions[language].length) * 100}%` }}
                />
              </div>
              <span className="text-sm">
                {currentQuestion + 1}/{questions[language].length}
              </span>
            </div>
          </div>

          {/* Quiz Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {!quizCompleted ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {questions[language][currentQuestion].question}
                  </h2>

                  <div className="grid gap-3">
                    {questions[language][currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswerSelect(index)}
                        className={`p-4 rounded-lg text-left transition-all ${
                          selectedAnswer === index
                            ? index === questions[language][currentQuestion].correctAnswer
                              ? 'bg-green-100 border-2 border-green-500'
                              : 'bg-red-100 border-2 border-red-500'
                            : showResult
                            ? 'opacity-50 cursor-not-allowed'
                            : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                        }`}
                        disabled={showResult}
                      >
                        <div className="flex items-center gap-3">
                          {showResult && (
                            <span>
                              {index === questions[language][currentQuestion].correctAnswer ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : selectedAnswer === index ? (
                                <XCircle className="w-5 h-5 text-red-500" />
                              ) : null}
                            </span>
                          )}
                          <span>{option}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <p className="text-gray-700">
                        {questions[language][currentQuestion].explanation}
                      </p>
                      <button
                        onClick={handleNextQuestion}
                        className="mt-4 flex items-center gap-2 text-blue-500 hover:text-blue-600"
                      >
                        {currentQuestion < questions[language].length - 1 ? (
                          <>
                            {translations.quiz.nextQuestion}
                            <ArrowRight className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            {translations.quiz.seeResults}
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {translations.quiz.quizCompleted}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {translations.quiz.yourScore}: {score}/{questions[language].length}
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={resetQuiz}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      {translations.quiz.tryAgain}
                    </button>
                    <button
                      onClick={() => window.location.href = '/'}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      {translations.quiz.goHome}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz; 