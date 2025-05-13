import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { findBestResponse , findSuggestions} from '../services/responseHandler';


const Chatbot = () => {
  const { language } = useLanguage();
  console.log(language);
  
  const languageCode = language === 'en' ? 'en' : language === 'fr' ? 'fr' : 'ar';
  
  const [darkMode, setDarkMode] = useState(false);
  const [messages, setMessages] = useState([{
    text: languageCode === 'en' 
      ? "Hello! I'm your environmental assistant."
      : languageCode === 'fr'
      ? "Bonjour ! Je suis votre assistant environnemental."
      : "مرحبًا! أنا مساعدك البيئي.",
    sender: 'bot',
    timestamp: new Date().toISOString()
  }]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Find suggestions when input changes
  useEffect(() => {
    if (input.trim()) {
      const newSuggestions = findSuggestions(input, languageCode);
      setSuggestions(newSuggestions);
      setShowSuggestions(newSuggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
    setSelectedSuggestion(-1);
  }, [input, languageCode]);

  // Handle sending messages
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      text: input.trim(),
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      const response = findBestResponse(userMessage.text, languageCode);
      
      setMessages(prev => [...prev, {
        text: response,
        sender: 'bot',
        timestamp: new Date().toISOString()
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        text: languageCode === 'en' 
          ? "Sorry, I couldn't understand that."
          : languageCode === 'fr'
          ? "Désolé, je n'ai pas compris."
          : "عذرًا، لم أفهم ذلك.",
        sender: 'bot',
        isError: true,
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedSuggestion(prev => 
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedSuggestion(prev => 
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === 'Enter' && selectedSuggestion >= 0) {
      e.preventDefault();
      setInput(suggestions[selectedSuggestion]);
      setSelectedSuggestion(-1);
      setShowSuggestions(false);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Fixed Header */}
      <header className={`sticky top-0 z-10 p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center shadow-sm`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
            <Bot className="text-white" size={20} />
          </div>
          <h1 className="text-xl font-semibold">
            {languageCode === 'en' 
              ? "Environmental Assistant" 
              : languageCode === 'fr'
              ? "Assistant Environnemental"
              : "المساعد البيئي"}
          </h1>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Messages Container */}
      <main className="flex-1 overflow-y-auto p-4 pt-16">
        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-4 ${
                    message.sender === 'user'
                      ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                      : darkMode ? 'bg-gray-800' : 'bg-white'
                  } ${message.isError ? (darkMode ? 'text-red-300' : 'text-red-600') : ''}`}
                  style={{ 
                    direction: languageCode === 'ar' ? 'rtl' : 'ltr',
                    textAlign: languageCode === 'ar' ? 'right' : 'left'
                  }}
                >
                  <p>{message.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area with Suggestions */}
      <footer className={`sticky bottom-0 p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-3xl mx-auto relative">
          {/* Suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div 
              ref={suggestionsRef}
              className={`absolute bottom-full mb-2 w-full rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
            >
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`p-3 cursor-pointer ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} ${index === selectedSuggestion ? (darkMode ? 'bg-gray-600' : 'bg-gray-100') : ''} ${index !== suggestions.length - 1 ? `border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}` : ''}`}
                  onClick={() => {
                    setInput(suggestion);
                    setShowSuggestions(false);
                    inputRef.current?.focus();
                  }}
                  style={{ 
                    direction: languageCode === 'ar' ? 'rtl' : 'ltr',
                    textAlign: languageCode === 'ar' ? 'right' : 'left'
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleSend} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => input.trim() && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onKeyDown={handleKeyDown}
              placeholder={languageCode === 'en' 
                ? "Ask about environmental topics..." 
                : languageCode === 'fr'
                ? "Posez des questions sur l'environnement..."
                : "اسأل عن المواضيع البيئية..."}
              className={`flex-1 p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100'}`}
              style={{ direction: languageCode === 'ar' ? 'rtl' : 'ltr' }}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={`p-3 w-12 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            >
              {isLoading ? <Loader2 className="animate-spin w-5 h-5" size={20} /> : <Send className="w-5 h-5" />}
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Chatbot;