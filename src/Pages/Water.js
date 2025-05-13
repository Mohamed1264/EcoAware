import { useLanguage } from '../context/LanguageContext';
import { waterTranslations } from '../data/waterTranslations';
import water from '../assets/SliderImages/water4.jpg';
import waterSection from '../assets/sections/water/water_section_2.jpg';
import aquifer from '../assets/sections/water/aquifer.jpg';
import coast from '../assets/sections/water/coast.jpg';
import oasis from '../assets/sections/water/oasis.jpg';

export default function Water() {
  const { language } = useLanguage();
  const t = waterTranslations[language] || waterTranslations.en;

  const waterSources = [
    {
      type: t.sources.groundwater.name,
      image: aquifer,
      description: t.sources.groundwater.desc,
      role: t.sources.groundwater.role
    },
    {
      type: t.sources.coastal.name,
      image: coast,
      description: t.sources.coastal.desc,
      role: t.sources.coastal.role
    },
    {
      type: t.sources.oasis.name,
      image: oasis,
      description: t.sources.oasis.desc,
      role: t.sources.oasis.role
    }
  ];

  const conservationEfforts = [
    {
      program: t.conservation.desalination.name,
      description: t.conservation.desalination.desc,
      impact: t.conservation.desalination.impact
    },
    {
      program: t.conservation.irrigation.name,
      description: t.conservation.irrigation.desc,
      impact: t.conservation.irrigation.impact
    },
    {
      program: t.conservation.education.name,
      description: t.conservation.education.desc,
      impact: t.conservation.education.impact
    }
  ];

  return (
    <div className='bg-blue-50' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen w-full bg-gradient-to-b from-blue-900 to-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 h-screen"
          style={{ backgroundImage: `url(${water})` }}
        />
        <div className='w-4/5 lg:w-1/2 flex flex-col items-center gap-6 z-10 px-4'>
          <h1 className='text-4xl md:text-5xl text-blue-50 text-center font-bold leading-tight'>
            {t.hero.title}
          </h1>
          <p className='text-xl text-blue-100 text-center font-medium'>
            {t.hero.subtitle}
          </p>
          <a 
            href='#conservation' 
            className='block w-fit text-lg font-medium mt-8 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md transition duration-300'
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      {/* Water Sources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-2">{t.sources.title}</h2>
          <p className="text-lg text-blue-700 mb-12 max-w-3xl">
            {t.sources.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {waterSources.map((source, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img 
                  src={source.image} 
                  alt={source.type} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{source.type}</h3>
                  <p className="text-gray-700 mb-4">{source.description}</p>
                  <div className="text-sm text-blue-600 font-medium">
                    {language === 'en' ? 'Primary Role' : 
                     language === 'fr' ? 'Rôle principal' : 
                     'الدور الرئيسي'}: {source.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-800 text-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.threats.title}</h2>
            <div className="w-24 h-1 bg-blue-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">{t.threats.environmental}</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1 flex-shrink-0 rounded-full bg-red-200/30 flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-red-400"></span>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">{t.threats.pollution.title}</span>
                    <p className="text-blue-100">{t.threats.pollution.desc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1 flex-shrink-0 rounded-full bg-orange-200/30 flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">{t.threats.scarcity.title}</span>
                    <p className="text-blue-100">{t.threats.scarcity.desc}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">{t.threats.human}</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1 flex-shrink-0 rounded-full bg-purple-200/30 flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-purple-400"></span>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">{t.threats.climate.title}</span>
                    <p className="text-blue-100">{t.threats.climate.desc}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-900/50 rounded-xl p-8">
            <p className="text-center max-w-4xl mx-auto">{t.threats.impact}</p>
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section id="conservation" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">{t.conservation.title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              {t.conservation.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {conservationEfforts.map((program, index) => (
              <div key={index} className="border border-blue-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-700 text-white p-4">
                  <h3 className="text-xl font-semibold">{program.program}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <div className="text-blue-700 font-medium">{program.impact}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">{t.conservation.help.title}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-blue-700">✓</span>
                    <div>
                      <span className="font-medium text-blue-800">{t.conservation.help.reduce.title}</span>
                      <p className="text-gray-700">{t.conservation.help.reduce.desc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-blue-700">✓</span>
                    <div>
                      <span className="font-medium text-blue-800">{t.conservation.help.protect.title}</span>
                      <p className="text-gray-700">{t.conservation.help.protect.desc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-blue-700">✓</span>
                    <div>
                      <span className="font-medium text-blue-800">{t.conservation.help.support.title}</span>
                      <p className="text-gray-700">{t.conservation.help.support.desc}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-blue-100 rounded-lg p-6 h-full">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">
                  {language === 'en' ? 'Future Outlook' : 
                   language === 'fr' ? 'Perspectives futures' : 
                   'التوقعات المستقبلية'}
                </h4>
                <p className="text-gray-700 mb-6">
                  {t.conservation.outlook}
                </p>
                <a href="#" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200">
                  {t.conservation.action}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl mb-8">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-blue-800 px-8 py-3 rounded-lg font-bold hover:bg-blue-100 transition-colors duration-200">
              {t.cta.donate}
            </a>
            <a href="#" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors duration-200">
              {t.cta.learn}
            </a>
          </div>
        </div>
      </section>

      {/* AI Solutions Section - Matching Water Page Design */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-100">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        {t.ai?.title || "AI Water Guardians"}
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
      <p className="text-lg text-blue-700 max-w-3xl mx-auto">
        {t.ai?.subtitle || "Smart technologies preserving Morocco's water resources"}
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {t.ai?.solutions?.map((solution, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="h-48 bg-blue-700 flex items-center justify-center text-6xl text-white">
            {solution.icon}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              {solution.title}
            </h3>
            <p className="text-gray-700 mb-4">{solution.desc}</p>
            <div className="flex items-center text-sm text-blue-600 font-medium">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              {solution.stats}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            {t.ai?.caseStudy?.title || "Atlas Mountain Water Initiative"}
          </h3>
          <p className="text-gray-700 mb-4">
            {t.ai?.caseStudy?.content || "AI-driven irrigation reduced water waste by 40% in test regions"}
          </p>
          <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            {t.ai?.caseStudy?.cta || "Read Case Study"}
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </a>
        </div>
        <div className="md:w-1/3 flex flex-wrap gap-2 justify-center">
          {t.ai?.caseStudy?.partners?.map((partner, i) => (
            <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}