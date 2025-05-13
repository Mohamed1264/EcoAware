import { useLanguage } from '../context/LanguageContext';
import { wetlandsTranslations } from '../data/wetlandsTranslations';
import wetlands from '../assets/SliderImages/wetlands2.jpg';
import wetlandSection from '../assets/sections/wetland/wetland_section.jpg';
import marsh from '../assets/sections/wetland/marsh.jpg';
import swamp from '../assets/sections/wetland/swamp.jpg';
import mangrove from '../assets/sections/wetland/mangrove.jpg';

export default function WetLands() {
  const { language } = useLanguage();
  const t = wetlandsTranslations[language] || wetlandsTranslations.en;

  const wetlandTypes = [
    {
      type: t.types.marsh.name,
      image: marsh,
      description: t.types.marsh.desc,
      role: t.types.marsh.role
    },
    {
      type: t.types.swamp.name,
      image: swamp,
      description: t.types.swamp.desc,
      role: t.types.swamp.role
    },
    {
      type: t.types.mangrove.name,
      image: mangrove,
      description: t.types.mangrove.desc,
      role: t.types.mangrove.role
    }
  ];

  const wildlifeSpecies = [
    {
      name: t.wildlife.heron.name,
      role: t.wildlife.heron.role,
      status: t.wildlife.heron.status
    },
    {
      name: t.wildlife.turtle.name,
      role: t.wildlife.turtle.role,
      status: t.wildlife.turtle.status
    },
    {
      name: t.wildlife.fish.name,
      role: t.wildlife.fish.role,
      status: t.wildlife.fish.status
    }
  ];

  const conservationEfforts = [
    {
      program: t.conservation.restoration.name,
      description: t.conservation.restoration.desc,
      impact: t.conservation.restoration.impact
    },
    {
      program: t.conservation.urban.name,
      description: t.conservation.urban.desc,
      impact: t.conservation.urban.impact
    },
    {
      program: t.conservation.awareness.name,
      description: t.conservation.awareness.desc,
      impact: t.conservation.awareness.impact
    }
  ];

  return (
    <div className='bg-lime-50' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen w-full bg-gradient-to-b from-lime-900 to-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 h-screen"
          style={{ backgroundImage: `url(${wetlands})` }}
        />
        <div className='w-4/5 lg:w-1/2 flex flex-col items-center gap-6 z-10 px-4'>
          <h1 className='text-4xl md:text-5xl text-lime-50 text-center font-bold leading-tight'>
            {t.hero.title}
          </h1>
          <p className='text-xl text-lime-100 text-center font-medium'>
            {t.hero.subtitle}
          </p>
          <a 
            href='#conservation' 
            className='block w-fit text-lg font-medium mt-8 bg-lime-600 text-white hover:bg-lime-700 px-6 py-3 rounded-md transition duration-300'
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      {/* Wetland Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-lime-800 mb-2">{t.types.title}</h2>
          <p className="text-lg text-lime-700 mb-12 max-w-3xl">
            {t.types.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {wetlandTypes.map((wetland, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img 
                  src={wetland.image} 
                  alt={wetland.type} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-lime-800 mb-3">{wetland.type}</h3>
                  <p className="text-gray-700 mb-4">{wetland.description}</p>
                  <div className="text-sm text-lime-600 font-medium">
                    {language === 'en' ? 'Ecological Role' : 
                     language === 'fr' ? 'Rôle écologique' : 
                     'الدور البيئي'}: {wetland.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-lime-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-lime-800 mb-6">{t.wildlife.title}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {t.wildlife.description}
              </p>
              
              <div className="space-y-6">
                {wildlifeSpecies.map((animal, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`mt-1 flex-shrink-0 rounded-full w-8 h-8 flex items-center justify-center 
                        ${animal.status === 'Endangered' ? 'bg-red-100 text-red-800' : 
                          animal.status === 'Vulnerable' ? 'bg-orange-100 text-orange-800' : 
                          'bg-lime-100 text-lime-800'}`}>
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{animal.name}</h4>
                      <p className="text-gray-700">{animal.role}</p>
                      <span className={`text-sm px-2 py-1 rounded-full 
                          ${animal.status === 'Endangered' ? 'bg-red-50 text-red-700' : 
                            animal.status === 'Vulnerable' ? 'bg-orange-50 text-orange-700' : 
                            'bg-lime-50 text-lime-700'}`}>
                        {animal.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative rounded-xl overflow-hidden shadow-xl h-96 md:h-[500px]">
              <img
                src={wetlandSection}
                alt={t.wildlife.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-lime-700/30 flex items-end p-8">
                <p className="text-white text-lg font-medium">
                  {t.wildlife.migration}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-lime-800 text-lime-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.threats.title}</h2>
            <div className="w-24 h-1 bg-lime-300 mx-auto"></div>
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
                    <span className="font-bold block mb-1">{t.threats.draining.title}</span>
                    <p className="text-lime-100">{t.threats.draining.desc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 mt-1 flex-shrink-0 rounded-full bg-orange-200/30 flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">{t.threats.pollution.title}</span>
                    <p className="text-lime-100">{t.threats.pollution.desc}</p>
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
                    <p className="text-lime-100">{t.threats.climate.desc}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-lime-900/50 rounded-xl p-8">
            <p className="text-center max-w-4xl mx-auto">{t.threats.impact}</p>
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section id="conservation" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lime-800 mb-4">{t.conservation.title}</h2>
            <div className="w-24 h-1 bg-lime-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              {t.conservation.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {conservationEfforts.map((program, index) => (
              <div key={index} className="border border-lime-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-lime-700 text-white p-4">
                  <h3 className="text-xl font-semibold">{program.program}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <div className="text-lime-700 font-medium">{program.impact}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-lime-50 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-lime-800 mb-4">{t.conservation.help.title}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lime-700">✓</span>
                    <div>
                      <span className="font-medium text-lime-800">{t.conservation.help.clean.title}</span>
                      <p className="text-gray-700">{t.conservation.help.clean.desc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lime-700">✓</span>
                    <div>
                      <span className="font-medium text-lime-800">{t.conservation.help.water.title}</span>
                      <p className="text-gray-700">{t.conservation.help.water.desc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lime-700">✓</span>
                    <div>
                      <span className="font-medium text-lime-800">{t.conservation.help.support.title}</span>
                      <p className="text-gray-700">{t.conservation.help.support.desc}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-lime-100 rounded-lg p-6 h-full">
                <h4 className="text-xl font-semibold text-lime-800 mb-4">
                  {language === 'en' ? 'Future Outlook' : 
                   language === 'fr' ? 'Perspectives futures' : 
                   'التوقعات المستقبلية'}
                </h4>
                <p className="text-gray-700 mb-6">
                  {t.conservation.outlook}
                </p>
                <a href="#" className="inline-block bg-lime-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-lime-800 transition-colors duration-200">
                  {t.conservation.action}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-lime-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl mb-8">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-lime-800 px-8 py-3 rounded-lg font-bold hover:bg-lime-100 transition-colors duration-200">
              {t.cta.donate}
            </a>
            <a href="#" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors duration-200">
              {t.cta.learn}
            </a>
          </div>
        </div>
      </section>
      {/* AI Solutions Section - Matching Wetlands Design */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-lime-100">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-lime-800 mb-4">
        {t.ai?.title || "AI Wetland Guardians"}
      </h2>
      <div className="w-24 h-1 bg-lime-600 mx-auto mb-6"></div>
      <p className="text-lg text-lime-700 max-w-3xl mx-auto">
        {t.ai?.subtitle || "Smart technologies protecting Dakhla's aquatic ecosystems"}
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {t.ai?.solutions?.map((solution, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="h-48 bg-lime-700 flex items-center justify-center text-6xl text-white">
            {solution.icon}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-lime-800 mb-3">
              {solution.title}
            </h3>
            <p className="text-gray-700 mb-4">{solution.desc}</p>
            <div className="flex items-center text-sm text-lime-600 font-medium">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              {solution.stats}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-lime-50 rounded-xl p-8 border border-lime-200">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold text-lime-800 mb-3">
            {t.ai?.caseStudy?.title || "Dakhla Bay Initiative"}
          </h3>
          <p className="text-gray-700 mb-4">
            {t.ai?.caseStudy?.content || "AI monitoring reduced illegal fishing by 72% while increasing biodiversity"}
          </p>
          <a href="#" className="inline-flex items-center text-lime-600 hover:text-lime-800 font-medium">
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