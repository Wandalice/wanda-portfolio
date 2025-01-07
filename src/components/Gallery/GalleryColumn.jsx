import React, { useEffect, useState } from 'react';

const GalleryColumn = ({ images, mouseX }) => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // Lade alle Bilder vor
    Promise.all(
      images.map(
        (src) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = reject;
            img.src = src;
          })
      )
    ).then(setLoadedImages);
  }, [images]);

  // Berechne welches Bild basierend auf der Mausposition angezeigt werden soll
  const imageToShow = Math.floor(mouseX * images.length);

  return (
    <div className="relative h-screen">
      {loadedImages.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{
            opacity: index === imageToShow ? 1 : 0,
            zIndex: index === imageToShow ? 2 : 1,
          }}
        />
      ))}
    </div>
  );
};

export default GalleryColumn;