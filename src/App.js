import { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Forests from "./Pages/Forests";
import WetLands from "./Pages/WetLands";
import Water from "./Pages/Water";
import Funny from "./Pages/Funny";
import Chatbot from "./Pages/Chatbot";
import data from "./data/questions.json";
import { LanguageProvider } from "./context/LanguageContext";

// Define supported languages with their native names
const SUPPORTED_LANGUAGES = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' },
  ar: { nativeName: 'العربية' }
};

function App() {
  // Get initial language from localStorage or default to English
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || "en"; // Default to 'en' instead of 'English'
  });

  const location = useLocation();

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Exclude footer on /chatbot route
  const hideFooter = location.pathname.startsWith("/chatbot");

  return (
    <LanguageProvider value={{ language, changeLanguage }}>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Fixed Navbar wrapper */}
        <div className="fixed w-full top-0 z-50">
          <NavBar 
            lang={language}
            changeLanguage={changeLanguage}
            supportedLanguages={SUPPORTED_LANGUAGES}
          />
        </div>

        {/* Main content with padding to account for fixed navbar */}
        <main className="flex-grow pt-16"> {/* Adjusted padding for your navbar height */}
          <div className="mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/forests" element={<Forests />} />
              <Route path="/wetlands" element={<WetLands />} />
              <Route path="/water" element={<Water />} />
              <Route path="/funny/:category" element={<Funny questions={data} />} />
              <Route path="/funny" element={<Funny questions={data} />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>

        {/* Footer only if not on chatbot route */}
        {!hideFooter && <Footer />}
      </div>
    </LanguageProvider>
  );
}

export default App;