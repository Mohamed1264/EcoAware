import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { sliderTranslations } from '../data/sliderTranslations';
import { Link } from 'react-router-dom';
import wetland from '../assets/SliderImages/wetlands3.jpg';
import forest from '../assets/SliderImages/forest4.jpg';
import water from '../assets/SliderImages/water4.jpg';
import fun from '../assets/SliderImages/funny2.jpg';

const Slider = () => {
  const { language } = useLanguage();
  const t = sliderTranslations[language] || sliderTranslations.en;
  const [currentSlide, setCurrentSlide] = useState(0);

  const destinations = [
    {
      id: 1,
      title: t.forests.title,
      description: t.forests.description,
      image: forest,
      link: '/forests',
      cta: t.forests.cta,
      color: 'from-green-900'
    },
    {
      id: 2,
      title: t.wetlands.title,
      description: t.wetlands.description,
      image: wetland,
      link: '/wetlands',
      cta: t.wetlands.cta,
      color: 'from-teal-900'
    },
    {
      id: 3,
      title: t.water.title,
      description: t.water.description,
      image: water,
      link: '/water',
      cta: t.water.cta,
      color: 'from-blue-900'
    },
    {
      id: 4,
      title: t.fun.title,
      description: t.fun.description,
      image: fun,
      link: '/funny',
      cta: t.fun.cta,
      color: 'from-purple-900'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, destinations.length]);

  const activeSlide = destinations[currentSlide];

  return (
    <div className={`relative w-full bg-gradient-to-b ${activeSlide.color} to-black overflow-hidden h-[90vh]`}>
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50 transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url(${activeSlide.image})`,
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12 lg:p-16 xl:p-20 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 animate-fadeIn">
            {activeSlide.title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-2xl mb-8 animate-fadeIn delay-100">
            {activeSlide.description}
          </p>
          <Link 
            to={activeSlide.link}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 w-fit animate-fadeIn delay-200"
          >
            {activeSlide.cta}
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-2 md:flex gap-4 mt-8 md:mt-0 md:absolute md:right-8 md:bottom-1/2 md:transform md:translate-y-1/2 md:flex-col md:w-48 lg:w-56">
          {destinations.map((d, index) => (
            <button
              key={d.id}
              onClick={() => setCurrentSlide(index)}
              className={`relative h-28 md:h-24 lg:h-28 w-full rounded-lg overflow-hidden transition-all duration-300 ${currentSlide === index ? 'ring-4 ring-white scale-105' : 'opacity-70 hover:opacity-100 hover:scale-105'}`}
              aria-label={`View ${d.title}`}
            >
              <img 
                src={d.image} 
                alt={d.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 flex items-center justify-center bg-black ${currentSlide === index ? 'bg-opacity-30' : 'bg-opacity-50'} transition-all duration-300`}>
                <span className="text-white font-bold text-sm md:text-base lg:text-lg px-2 text-center">
                  {d.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;