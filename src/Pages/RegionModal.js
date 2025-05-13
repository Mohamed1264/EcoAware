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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{region[language].title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label={language === 'en' ? 'Close' : language === 'fr' ? 'Fermer' : 'إغلاق'}
            >
              ×
            </button>
          </div>

          {region.imageUrl && !imageError && (
            <div className="relative  mb-4 rounded-lg overflow-hidden">
              {/* Blurred placeholder that shows while loading */}
              {!imageLoaded && (
                <img 
                  src={region.imageUrl}
                  alt=""
                  className="absolute inset-0 w-50% h-auto object-cover blur-sm scale-105"
                  loading="lazy"
                />
              )}
              
              {/* High quality image */}
              <img
                src={region.imageUrl}
                alt={region.name}
                className={`w-50% h-auto object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onError={handleImageError}
                onLoad={handleImageLoad}
                loading="lazy"
              />
              
              {/* Loading indicator */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}
            </div>
          )}

          {/* Fallback image */}
          {imageError && (
            <img 
              src="/images/regions/default-region.jpg"
              alt={region.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}

          <p className="text-gray-700 mb-6">
            {region[language].description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Water Resources Section */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {translate('waterResources')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">{translate('rivers')}: </span>
                  {region[language].water.rivers} ({region[language].water.majorRivers?.join(', ')})
                </li>
                {/* Other water resources data... */}
              </ul>
            </div>

            {/* Forests Section */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {translate('forests')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">{translate('area')}: </span>
                  {region[language].forests.area}
                </li>
                {/* Other forests data... */}
              </ul>
            </div>
          </div>

          {/* Conservation Projects */}
          {region[language].forests.projects && (
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                {language === 'en' ? 'Conservation Projects' : 
                 language === 'fr' ? 'Projets de Conservation' : 
                 'مشاريع الحفاظ'}
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                {Array.isArray(region[language].forests.projects) ? (
                  region[language].forests.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))
                ) : (
                  <li>{region[language].forests.projects}</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegionModal;