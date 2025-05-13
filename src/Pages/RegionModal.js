import React, { useRef, useEffect, useState } from 'react';

const RegionModal = ({ region, language, translate, onClose }) => {
  const modalRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Handle click outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Handle image loading and errors
  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="p-3 sm:p-6">
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{region[language].title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl p-1"
              aria-label={language === 'en' ? 'Close' : language === 'fr' ? 'Fermer' : 'إغلاق'}
            >
              ×
            </button>
          </div>

          <div className="relative mb-3 sm:mb-4 rounded-lg overflow-hidden">
            {/* Blurred placeholder that shows while loading */}
            {!imageLoaded && (
              <img 
                src={region.imageUrl}
                alt=""
                className="absolute inset-0 w-full h-48 sm:h-64 object-cover blur-sm scale-105"
                loading="lazy"
              />
            )}
            
            {/* High quality image */}
            <img
              src={region.imageUrl}
              alt={region.name}
              className={`w-full h-48 sm:h-64 object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
            />
            
            {/* Loading indicator */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>

          {/* Fallback image */}
          {imageError && (
            <img 
              src="/images/regions/default-region.jpg"
              alt={region.name}
              className="w-full h-48 sm:h-64 object-cover rounded-lg mb-3 sm:mb-4"
            />
          )}

          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
            {region[language].description}
          </p>

          <div className="space-y-3 sm:space-y-4">
            {/* Water Resources Section */}
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 sm:mb-3">
                {translate('waterResources')}
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  <span className="font-medium">{translate('rivers')}: </span>
                  {region[language].water.rivers} ({region[language].water.majorRivers?.join(', ')})
                </li>
                {/* Other water resources data... */}
              </ul>
            </div>

            {/* Forests Section */}
            <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2 sm:mb-3">
                {translate('forests')}
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>
                  <span className="font-medium">{translate('area')}: </span>
                  {region[language].forests.area}
                </li>
                {/* Other forests data... */}
              </ul>
            </div>

            {/* Conservation Projects */}
            <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-800 mb-2 sm:mb-3">
                {language === 'en' ? 'Conservation Projects' : 
                 language === 'fr' ? 'Projets de Conservation' : 
                 'مشاريع الحفاظ'}
              </h3>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
                {Array.isArray(region[language].forests.projects) ? (
                  region[language].forests.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))
                ) : (
                  <li>{region[language].forests.projects}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionModal;