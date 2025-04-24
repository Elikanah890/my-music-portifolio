import { useState } from 'react';
import { X } from 'lucide-react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: '/elka_1.jpg',
      alt: 'Playing Piano',
      category: 'Piano'
    },
    {
      src: '/TAE_1561.JPG',
      alt: 'Lead Guitar Performance',
      category: 'Lead Guitar'
    },
    {
      src: '/IMG_20241204_031848_441.jpg',
      alt: 'Bass Guitar Session',
      category: 'Bass Guitar'
    },
    {
      src: '/TAE_1568.JPG',
      alt: 'Rhythm Guitar Practice',
      category: 'Rhythm Guitar'
    },
    {
      src: '/studio_recording.jpg',
      alt: 'Studio Recording',
      category: 'Studio'
    },
    {
      src: '/studio_recording.jpg',
      alt: 'Live Performance',
      category: 'Concert'
    }
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            Gallery
            <span className="block h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Moments captured from performances, practices, and musical journeys
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
              onClick={() => openLightbox(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt || 'Gallery Image'}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full w-fit mb-2">
                  {image.category}
                </span>
                <h3 className="text-white text-lg font-medium">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white bg-gray-800/50 hover:bg-gray-800 rounded-full p-2 transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
