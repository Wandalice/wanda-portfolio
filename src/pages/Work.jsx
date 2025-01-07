import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Work = () => {
  const [currentImage, setCurrentImage] = useState(null);

  // Hier die drei Spalten mit allen Bildern aus deinem Original
  const images = [
    // Erste Spalte
    [
      'wanda/auge.jpg',
      'wanda/cricked.jpg',
      'wanda/sonnenpflanze.jpg',
      'book/canvas17.jpg',
      'wanda/fungi.jpg',
      'wanda/xxbaum.jpg',
      'wanda/krabbe.jpg',
      'wanda/xxblume.jpg',
      'wanda/xxtot.jpg',
      'wanda/bmix.jpg',
      'wanda/fell.jpg',
      'wanda/costarica.jpg',
      'wanda/bookweitercheck8.jpg',
      'wanda/schlamm.jpg',
      'wanda/xschnee.jpg',
      'wanda/bug-3.jpg',
      'wanda/james-4.jpg'
    ],
    // Zweite Spalte
    [
      'wanda/arbol.jpg',
      'book/canvas8.jpg',
      'wanda/royal.jpg',
      'wanda/banana.jpg',
      'book/canvas12.jpg',
      'wanda/water1.jpg',
      'wanda/fuchs.jpg',
      'wanda/spinne.jpg',
      'wanda/xxladybug.jpg',
      'book/canvas7.jpg',
      'wanda/coral1.jpg',
      'wanda/ants.jpg',
      'wanda/wvb Kopie.jpg',
      'wanda/düne.jpg',
      'wanda/hug.jpg',
      'wanda/cactus.jpg',
      'wanda/bauchnabel.jpg',
      'wanda/birke.jpg',
      'wanda/james.jpg'
    ],
    // Dritte Spalte
    [
      'wanda/soredom.jpg',
      'book/canvas32.jpg',
      'wanda/xxleave.jpg',
      'wanda/piel.jpg',
      'book/canvas34.jpg',
      'wanda/gecko.jpg',
      'wanda/Soredom-17.jpg',
      'wanda/ISP-13.jpg',
      'wanda/xxhand.jpg',
      'book/canvas30.jpg',
      'wanda/xxbird.jpg',
      'book/canvas20.jpg',
      'wanda/xxdoppel.jpg',
      'wanda/xilitla1.jpg',
      'wanda/verwischt.jpg',
      'wanda/xxstuhl.jpg',
      'book/canvas18.jpg'
    ]
  ];

  // Für die Lightbox‐Navigation sammeln wir alle Bilder in einer flachen Liste
  const allImages = images.flat();

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    // Scrollen der Seite unterbinden, solange Lightbox offen ist
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = allImages.indexOf(currentImage);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % allImages.length;
    } else {
      newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    }

    setCurrentImage(allImages[newIndex]);
  };

  return (
    <>
      {/* Hauptgalerie */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full rounded-lg transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <X size={24} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <img
            src={currentImage}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  );
};

export default Work;
