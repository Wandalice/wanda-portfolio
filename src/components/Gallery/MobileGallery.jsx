import React from 'react';

const MobileGallery = () => {
  const images = [
    'wanda/xxtot.jpg',
    'wanda/bflow.jpg',
    'wanda/xxhand.jpg',
    'wanda/costarica.jpg',
    'wanda/xxbaum.jpg',
    'wanda/blumengum.gif',
    'wanda/bug-7.jpg',
    'wanda/robbe.jpg',
    'wanda/ants.jpg',
    'wanda/bmix.jpg',
    'wanda/xxkuh.jpg',
    'wanda/coral1.jpg',
    'wanda/xxladybug.jpg',
    'wanda/arbol.jpg',
    'wanda/xxdoppel.jpg',
    'wanda/xxalge.jpg'
  ];

  return (
    <div className="px-4 space-y-4">
      {images.map((image, index) => (
        <div key={index} className="aspect-w-16 aspect-h-9">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default MobileGallery;