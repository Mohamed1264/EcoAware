import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trees, Droplets, Sprout, Gamepad2, Menu, X, Bot, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { en, fr, ar } from '../translations/index';

// Assets
import logo from '../logo.png';
import logoGray from '../LogoGray.png';
import logoAmber from '../logoAmber (1).png';
import logoBlue from '../logoBlue.png';

const navLinks = [
  {
    pageName: 'forests',
    link: '/forests',
    icon: <Trees className='size-4 md:size-5' />
  },
  {
    pageName: 'wetlands',
    link: '/wetlands',
    icon: <Sprout className='size-4 md:size-5' />
  },
  {
    pageName: 'water',
    link: '/water',
    icon: <Droplets className='size-4 md:size-5' />
  },
  {
    pageName: 'chatbot',
    link: '/chatbot',
    icon: <Bot className='size-4 md:size-5' />
  }
];

const themeConfig = {
  '/': {
    logo: logoGray,
    navBg: 'bg-gray-100',
    textColor: 'text-gray-700',
    activeBg: 'bg-gray-700',
    activeText: 'text-gray-100',
    border: 'border-gray-700'
  },
  '/forests': {
    logo: logo,
    navBg: 'bg-green-100',
    textColor: 'text-green-700',
    activeBg: 'bg-green-700',
    activeText: 'text-green-100',
    border: 'border-green-700'
  },
  '/wetlands': {
    logo: logo,
    navBg: 'bg-lime-100',
    textColor: 'text-lime-700',
    activeBg: 'bg-lime-700',
    activeText: 'text-lime-100',
    border: 'border-lime-700'
  },
  '/water': {
    logo: logoBlue,
    navBg: 'bg-blue-100',
    textColor: 'text-blue-700',
    activeBg: 'bg-blue-700',
    activeText: 'text-blue-100',
    border: 'border-blue-700'
  },
  '/funny': {
    logo: logoAmber,
    navBg: 'bg-amber-100',
    textColor: 'text-amber-700',
    activeBg: 'bg-amber-700',
    activeText: 'text-amber-100',
    border: 'border-amber-700'
  },
  '/chatbot': {
    logo: logoBlue,
    navBg: 'bg-indigo-100',
    textColor: 'text-indigo-700',
    activeBg: 'bg-indigo-700',
    activeText: 'text-indigo-100',
    border: 'border-indigo-700'
  }
};

export default function NavBar({ lang, changeLanguage, supportedLanguages }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const { pathname } = useLocation();
  const { language } = useLanguage();
  
  // Get translations safely with fallback to English
  const translations = useMemo(() => {
    try {
      switch (language) {
        case 'fr':
          return fr;
        case 'ar':
          return ar;
        default:
          return en;
      }
    } catch (error) {
      console.error('Error loading translations:', error);
      return en;
    }
  }, [language]);
  
  // Get current theme based on path, default to home if not found
  const currentTheme = themeConfig[pathname] || themeConfig['/'];
  const isActive = (link) => pathname === link;

  // Handle language change
  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setShowLanguageDropdown(false);
    setIsMobileMenuOpen(false);
  };

  // Get safe navigation text
  const getNavText = (key) => {
    return translations?.nav?.[key] || key;
  };

  return (
    <nav 
      className={`${currentTheme.navBg} shadow-md fixed w-full z-50`}
      style={{
        '--nav-hover-bg': currentTheme.activeBg.replace('bg-', ''),
        '--nav-hover-text': currentTheme.activeText.replace('text-', '')
      }}
    >
      <div className="mx-auto px-2 sm:px-4 h-14 sm:h-16 lg:px-8">
        {/* Main Navigation Container */}
        <div className="flex items-center justify-between">
          
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1 sm:gap-2">
              <img 
                className="size-8 sm:size-10 md:size-12" 
                src={currentTheme.logo} 
                alt="EcoAware Logo" 
              />
              <span className={`text-lg sm:text-xl font-bold ${currentTheme.textColor}`}>
                EcoAware
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.pageName}
                to={navLink.link}
                className={`flex items-center gap-1 rounded-md px-2 sm:px-3 py-2 text-sm font-medium
                  ${isActive(navLink.link) 
                    ? `${currentTheme.activeBg} ${currentTheme.activeText}` 
                    : `${currentTheme.textColor} hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]`
                  }`}
              >
                {navLink.icon}
                <span>{getNavText(navLink.pageName)}</span>
              </Link>
            ))}

            <Link
              to={`/funny`}
              className={`flex items-center gap-1 rounded-md px-2 sm:px-3 py-2 text-sm font-medium
                ${isActive(`/funny`)
                  ? `${currentTheme.activeBg} ${currentTheme.activeText}`
                  : `${currentTheme.textColor} hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]`
                }`}
            >
              <Gamepad2 className="size-4 md:size-5" />
              <span>{getNavText('funny')}</span>
            </Link>
          </div>

          {/* Language Selector - Desktop */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className={`flex items-center gap-1 rounded-md px-2 sm:px-3 py-2 text-sm
                  ${currentTheme.textColor} hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]`}
              >
                <Globe className="size-4" />
                <span>{supportedLanguages?.[lang]?.nativeName || lang}</span>
              </button>
              
              {showLanguageDropdown && (
                <div className={`flex flex-col absolute right-0 mt-2 w-40 rounded-md shadow-lg ${currentTheme.navBg} ring-1 ring-black ring-opacity-5 z-50`}>
                  <div className="py-1">
                    {Object.entries(supportedLanguages || {}).map(([code, { nativeName }]) => (
                      <button
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        className={`flex items-center px-3 py-2 text-sm w-full text-left
                          ${lang === code
                            ? `${currentTheme.activeBg} ${currentTheme.activeText}`
                            : `${currentTheme.textColor} hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]`
                          }`}
                      >
                        {nativeName}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1.5 sm:p-2 rounded-md ${currentTheme.textColor} hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div 
          className={`flex flex-col md:hidden ${currentTheme.navBg} pb-4`}
          style={{
            '--nav-hover-bg': currentTheme.activeBg.replace('bg-', ''),
            '--nav-hover-text': currentTheme.activeText.replace('text-', '')
          }}
        >
          <div className="flex flex-col space-y-1 px-2 pt-2">
            {navLinks.map((navLink) => (
              <Link
                key={navLink.pageName}
                to={navLink.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium
                  ${isActive(navLink.link)
                    ? `${currentTheme.activeBg} ${currentTheme.activeText}`
                    : `${currentTheme.textColor} hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]`
                  }`}
              >
                {navLink.icon}
                <span>{getNavText(navLink.pageName)}</span>
              </Link>
            ))}

            <Link
              to={`/funny`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium
                ${isActive(`/funny`)
                  ? `${currentTheme.activeBg} ${currentTheme.activeText}`
                  : `${currentTheme.textColor} hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]`
                }`}
            >
              <Gamepad2 className="size-4" />
              <span>{getNavText('funny')}</span>
            </Link>
          </div>

          {/* Language Selector - Mobile */}
          <div className="flex flex-col mt-2 border-t border-gray-300 pt-3 px-2">
            <h4 className={`px-3 py-2 text-sm font-medium ${currentTheme.textColor}`}>
              {language === 'en' ? 'Language' : language === 'fr' ? 'Langue' : 'اللغة'}
            </h4>
            <div className="grid grid-cols-2 gap-2 px-2">
              {Object.entries(supportedLanguages || {}).map(([code, { nativeName }]) => (
                <button
                  key={code}
                  onClick={() => handleLanguageChange(code)}
                  className={`flex justify-center items-center py-2.5 text-sm font-medium rounded-md
                    ${lang === code
                      ? `${currentTheme.activeBg} ${currentTheme.activeText}`
                      : `${currentTheme.textColor} hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)]`
                    }`}
                >
                  {nativeName}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}