// src/components/Forests.jsx
import { useLanguage } from '../context/LanguageContext';
import { forestTranslations } from '../data/translationsForest';
import forest from '../assets/SliderImages/forest3.jpg';
import forestSection from '../assets/sections/forest/forest_section.jpg';
import argania from '../assets/sections/forest/argania.jpg';
import acacia from '../assets/sections/forest/acacia.jpg';
import tamarix from '../assets/sections/forest/tamarix.jpg'; // Changed from forest_section to tamarix for consistency

export default function Forests() {
  const { language } = useLanguage(); // Removed useContext since useLanguage is already a custom hook
  const t = forestTranslations[language] || forestTranslations.en;

  const forestsTypes = [
    {
      type: t.species.argan.name,
      image: argania,
      description: t.species.argan.desc,
      role: t.species.argan.role
    },
    {
      type: t.species.acacia.name,
      image: acacia,
      description: t.species.acacia.desc,
      role: t.species.acacia.role
    },
    {
      type: t.species.tamarix.name, // Changed from forest_section to tamarix
      image: tamarix,
      description: t.species.tamarix.desc,
      role: t.species.tamarix.role
    }
  ];

  const wildlifeSpecies = [
    {
      name: t.wildlife.fennec.name,
      role: t.wildlife.fennec.role,
      status: t.wildlife.fennec.status
    },
    {
      name: t.wildlife.gazelle.name,
      role: t.wildlife.gazelle.role,
      status: t.wildlife.gazelle.status
    },
    {
      name: t.wildlife.monitor.name,
      role: t.wildlife.monitor.role,
      status: t.wildlife.monitor.status
    },
    {
      name: t.wildlife.eagle.name,
      role: t.wildlife.eagle.role,
      status: t.wildlife.eagle.status
    }
  ];

  const conservationEfforts = [
    {
      program: t.conservation.reforestation.name,
      description: t.conservation.reforestation.desc,
      impact: t.conservation.reforestation.impact
    },
    {
      program: t.conservation.watershed.name,
      description: t.conservation.watershed.desc,
      impact: t.conservation.watershed.impact
    },
    {
      program: t.conservation.argan.name,
      description: t.conservation.argan.desc,
      impact: t.conservation.argan.impact
    }
  ];

  return (
    <div className='bg-green-50' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen w-full bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 h-screen"
          style={{ backgroundImage: `url(${forest})` }}
        />
        <div className='w-4/5 lg:w-1/2 flex flex-col items-center gap-6 z-10 px-4'>
          <h1 className='text-4xl md:text-5xl text-green-50 text-center font-bold leading-tight'>
            {t.hero.title}
          </h1>
          <p className='text-xl text-green-100 text-center font-medium'>
            {t.hero.subtitle}
          </p>
          <a 
            href='#conservation' 
            className='block w-fit text-lg font-medium mt-8 bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-md transition duration-300'
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      {/* Region Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              {t.overview.title}
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              {t.overview.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🌵 {t.overview.climate}</h3>
              <p className="text-gray-700">{t.overview.climateDesc}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🌍 {t.overview.ecology}</h3>
              <p className="text-gray-700">{t.overview.ecologyDesc}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-3">👥 {t.overview.economy}</h3>
              <p className="text-gray-700">{t.overview.economyDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forest Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-2">{t.species.title}</h2>
          <p className="text-lg text-green-700 mb-12 max-w-3xl">
            {t.species.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {forestsTypes.map((forest, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img 
                  src={forest.image} 
                  alt={forest.type} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">{forest.type}</h3>
                  <p className="text-gray-700 mb-4">{forest.description}</p>
                  <div className="text-sm text-green-600 font-medium">
                    {language === 'en' ? 'Ecological Role' : 
                     language === 'fr' ? 'Rôle écologique' : 
                     'الدور البيئي'}: {forest.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-800 mb-6">{t.wildlife.title}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t.wildlife.description}
              </p>
              
              <div className="space-y-6">
                {wildlifeSpecies.map((animal, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`mt-1 flex-shrink-0 rounded-full w-8 h-8 flex items-center justify-center 
                        ${animal.status === t.wildlife.gazelle.status ? 'bg-red-100 text-red-800' : 
                          animal.status === t.wildlife.monitor.status ? 'bg-orange-100 text-orange-800' : 
                          'bg-green-100 text-green-800'}`}>
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{animal.name}</h4>
                      <p className="text-gray-700">{animal.role}</p>
                      <span className={`text-sm px-2 py-1 rounded-full 
                          ${animal.status === t.wildlife.gazelle.status ? 'bg-red-50 text-red-700' : 
                            animal.status === t.wildlife.monitor.status ? 'bg-orange-50 text-orange-700' : 
                            'bg-green-50 text-green-700'}`}>
                        {animal.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative rounded-xl overflow-hidden shadow-xl h-96 md:h-[500px]">
              <img
                src={forestSection}
                alt={t.wildlife.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-green-700/30 flex items-end p-8">
                <p className="text-white text-lg font-medium">
                  {t.wildlife.migration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        {t.ai?.title || "AI Forest Conservation Technologies"}
      </h2>
      <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        {t.ai?.subtitle || "Innovative artificial intelligence applications protecting our forests"}
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Deforestation Monitoring */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 bg-green-800 flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {t.ai?.solutions?.monitoring?.title || "Deforestation Monitoring"}
          </h3>
          <p className="text-gray-600 mb-4">
            {t.ai?.solutions?.monitoring?.desc || "Satellite imagery analysis detects illegal logging activities in real-time with 94% accuracy"}
          </p>
          <div className="flex items-center text-sm text-green-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            {t.ai?.solutions?.monitoring?.stats || "Alerts rangers within 15 minutes"}
          </div>
        </div>
      </div>

      {/* Species Protection */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 bg-green-700 flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {t.ai?.solutions?.wildlife?.title || "Wildlife Protection"}
          </h3>
          <p className="text-gray-600 mb-4">
            {t.ai?.solutions?.wildlife?.desc || "Camera traps with computer vision identify endangered species and poachers"}
          </p>
          <div className="flex items-center text-sm text-green-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            {t.ai?.solutions?.wildlife?.stats || "300+ species automatically cataloged"}
          </div>
        </div>
      </div>

      {/* Smart Reforestation */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 bg-green-600 flex items-center justify-center">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {t.ai?.solutions?.reforestation?.title || " Reforestation"}
          </h3>
          <p className="text-gray-600 mb-4">
            {t.ai?.solutions?.reforestation?.desc || "AI-powered drones plant native tree species in optimal locations"}
          </p>
          <div className="flex items-center text-sm text-green-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            {t.ai?.solutions?.reforestation?.stats || "10x faster than manual planting"}
          </div>
        </div>
      </div>
    </div>

    <div className="mt-12 bg-green-50 rounded-lg p-6 border border-green-200">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
          <h3 className="text-xl font-semibold text-green-800 mb-3">
            {t.ai?.caseStudy?.title || "Real-World Implementation"}
          </h3>
          <p className="text-gray-700">
            {t.ai?.caseStudy?.content || "In the Atlas Mountains, AI monitoring reduced illegal logging by 65% in the first year of deployment"}
          </p>
        </div>
        <div className="md:w-1/3">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            {t.ai?.caseStudy?.cta || "View Case Study"}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
      
      
    </div>
  );
}




