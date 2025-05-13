import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Clock, CheckCircle, XCircle, ArrowRight, Home, RotateCw } from 'lucide-react';
import { getQuizQuestions } from '../data/quizQuestions';

const QuizGame = () => {
  const { language } = useLanguage();
  const [quizData, setQuizData] = useState({
    questions: [],
    title: 'Environmental Quiz'
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load questions based on language
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = getQuizQuestions(language);
        const shuffledQuestions = [...data.questions].sort(() => 0.5 - Math.random());
        
        setQuizData({
          questions: shuffledQuestions.slice(0, 10), // Show 10 questions
          title: data.title
        });
        
      } catch (err) {
        console.error("Failed to load questions:", err);
        setError("Failed to load questions. Please try again.");
        // Fallback to English if error
        const data = getQuizQuestions('en');
        setQuizData({
          questions: data.questions.slice(0, 5),
          title: data.title
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, [language]);

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !showResult && !quizCompleted && quizData.questions.length > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult && quizData.questions.length > 0) {
      handleNextQuestion();
    }
  }, [timeLeft, showResult, quizCompleted, quizData.questions]);

  const handleAnswerSelect = (index) => {
    if (showResult || quizCompleted || !quizData.questions[currentQuestionIndex]) return;
    
    setSelectedAnswer(index);
    const isCorrect = index === quizData.questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    try {
      const data = getQuizQuestions(language);
      const shuffledQuestions = [...data.questions].sort(() => 0.5 - Math.random());
      
      setQuizData({
        questions: shuffledQuestions.slice(0, 10),
        title: data.title
      });
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setScore(0);
      setShowResult(false);
      setTimeLeft(30);
      setQuizCompleted(false);
      setError(null);
    } catch (err) {
      console.error("Failed to reset quiz:", err);
      setError("Failed to reset quiz. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg w-[80%] max-w-3xl">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading quiz questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg w-[80%] max-w-3xl">
          <XCircle className="w-16 h-16 text-red-500 mx-auto" />
          <h2 className="text-xl font-bold text-gray-800 mt-4">Error</h2>
          <p className="text-gray-600 mt-2">{error}</p>
          <button 
            onClick={resetQuiz}
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (quizData.questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg w-[80%] max-w-3xl">
          <XCircle className="w-16 h-16 text-yellow-500 mx-auto" />
          <h2 className="text-xl font-bold text-gray-800 mt-4">No Questions Available</h2>
          <p className="text-gray-600 mt-2">We couldn't find any quiz questions.</p>
          <button 
            onClick={resetQuiz}
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="mx-auto w-[80%] max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Quiz Header */}
          {showResult ? (
                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg"
                  >
                    {/* Header with title (similar to quiz header) */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <h3 className="text-2xl font-bold">
                      {
                          language=='en'?'Explanation':language=='fr'?'Explication':'توضيح'
                        }
                      </h3>
                      {/* Optional: You could add a status badge here if needed */}
                    </div>
                  
                    {/* Explanation content with white/transparent background for better readability */}
                    <div className="mt-4 p-4 bg-white/10 rounded-lg">
                      <p className="text-white/90">{currentQuestion.explanation}</p>
                    </div>
                  
                    {/* Progress bar (same style as original) */}
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2.5">
                        <div
                          className="bg-white h-2.5 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {currentQuestionIndex + 1}/{quizData.questions.length}
                      </span>
                    </div>
                  
                    {/* Next button (improved styling to match design system) */}
                    <button
                      onClick={handleNextQuestion}
                      className="mt-4 w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-full hover:bg-white/90 transition-colors font-medium"
                    >
                      {currentQuestionIndex < quizData.questions.length - 1 ? (
                        <>
                        {
                          language=='en'?'Next Question':language=='fr'?'Question Suivant':'السؤال التالي'
                        }
                          
                          <ArrowRight className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                        {
                          language=='en'?'See Results':language=='fr'?'Voir les résultats':'مشاهدة النتائج'
                        }
                          
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.div>
                  ):
                  
                  
          <div className="p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-2xl font-bold">{quizData.title}</h1>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{timeLeft}s</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2.5">
                <div
                  className="bg-white h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-sm font-medium">
                {currentQuestionIndex + 1}/{quizData.questions.length}
              </span>
            </div>
          </div>}

          {/* Quiz Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {!quizCompleted ? (
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6  "
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {currentQuestion.question}
                  </h2>

                  <div className="grid gap-3">
                    {currentQuestion.options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswerSelect(index)}
                        className={`p-4 rounded-lg text-left transition-all ${
                          selectedAnswer === index
                            ? index === currentQuestion.correctAnswer
                              ? 'bg-green-100 border-2 border-green-500'
                              : 'bg-red-100 border-2 border-red-500'
                            : showResult
                            ? 'opacity-70 cursor-not-allowed'
                            : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                        }`}
                        disabled={showResult}
                      >
                        <div className="flex items-center gap-3">
                          {showResult && (
                            <span>
                              {index === currentQuestion.correctAnswer ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : selectedAnswer === index ? (
                                <XCircle className="w-5 h-5 text-red-500" />
                              ) : null}
                            </span>
                          )}
                          <span className="text-gray-800">{option}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 px-4"
                >
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {
                          language=='en'?'Quiz Completed!':language=='fr'?'Quiz terminé !':'تم الانتهاء من الاختبار '
                        }
                  </h2>
                  <p className="text-gray-600 mb-4">
                  {
                          language=='en'?'Your Score:':language=='fr'?'Score':': نتيجة'
                        }
                     {score}/{quizData.questions.length}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                    <button
                      onClick={resetQuiz}
                      className="flex-1 sm:flex-none px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <RotateCw className="w-5 h-5" />
                      
                    </button>
                    <button
                      onClick={() => window.location.href = '/'}
                      className="flex-1 sm:flex-none px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
                    >
                      <Home className="w-5 h-5" />
                      
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

export default QuizGame;