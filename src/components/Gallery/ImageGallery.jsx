import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState({ left: 0, right: 0 });
  const [imageDimensions, setImageDimensions] = useState({});

  // Abstände und (optionaler) Skalierungsfaktor
  const TOP_PADDING = '40px';      // Abstand nach oben
  const BOTTOM_PADDING = '40px';   // Abstand nach unten
  const MIDDLE_GAP = '16px';       // Abstand zwischen linker/rechter Spalte (etwas verringert)
  const HEADER_OFFSET = 80;        // z.B. Höhe deiner Header‐Leiste
  const IMAGE_SCALE = 1.0;         // Bilder größer anzeigen (1.0 = keine Verkleinerung)

  const leftImages = [
    'wanda/ast.jpg',
    'wanda/xxhand.jpg',
    'wanda/xxbaum.jpg',
    'wanda/xxleave.jpg',
    'wanda/xxtot.jpg',
    'wanda/gecko.jpg',
    'wanda/gelb.jpg',
    'wanda/qualle.jpg',
    'wanda/robbe.jpg',
    'wanda/fungi.jpg',
    'wanda/reflection.jpg',
    'wanda/bug-3.jpg',
    'wanda/boden.jpg',
    'wanda/so-2.jpg',
    'wanda/james.jpg',
    'wanda/xxstuhl.jpg',
    'wanda/bblood.jpg',
    'wanda/bflow.jpg'
  ];

  const rightImages = [
    'wanda/james-3.jpg',
    'wanda/xxalge.jpg',
    'wanda/xxbird.jpg',
    'wanda/xschnee.jpg',
    'wanda/xxblood.jpg',
    'wanda/xxdoppel.jpg',
    'wanda/val.jpg',
    'wanda/schleim.jpg',
    'wanda/auge.jpg',
    'wanda/xxladybug.jpg',
    'wanda/alge.jpg',
    'wanda/traube.jpg',
    'wanda/xxroute.jpg',
    'wanda/xxdrop-15.jpg',
    'wanda/algenarsch.jpg',
    'wanda/ants.jpg',
    'wanda/rosa.jpg',
    'wanda/bmix.jpg',
    'wanda/xxblume.jpg',
    'wanda/xxkuh.jpg',
    'wanda/balge.jpg',
    'wanda/james-4.jpg',
    'wanda/düne.jpg'
  ];

  // Bildabmessungen laden
  useEffect(() => {
    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setImageDimensions((prev) => ({
            ...prev,
            [src]: {
              width: img.naturalWidth,
              height: img.naturalHeight,
              ratio: img.naturalWidth / img.naturalHeight
            }
          }));
          resolve();
        };
        img.src = src;
      });
    };
    [...leftImages, ...rightImages].forEach(preloadImage);
  }, []);

  // Aktuelles Bild in Abhängigkeit der Mausposition wechseln
  useEffect(() => {
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const x = e.clientX;
      const percentageX = x / windowWidth;

      setCurrentIndex({
        left: Math.floor(percentageX * leftImages.length),
        right: Math.floor(percentageX * rightImages.length)
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [leftImages.length, rightImages.length]);

  /**
   * Ermittelt die Inline‐Styles, damit:
   *  - Die Bilder ihr Seitenverhältnis behalten (objectFit).
   *  - Hochkant-Bilder zentral in der Spalte stehen (links + rechts Platz).
   *  - Querformat ggf. die volle Spaltenbreite ausnutzt, aber korrekt skaliert.
   */
  const getImageStyle = (src) => {
    if (!imageDimensions[src]) return {};

    const ratio = imageDimensions[src].ratio;

    // Verfügbare Fläche: halbe Fensterbreite (minus Gap), abzüglich evtl. Header/Foot‐Abzug.
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Containerhöhe (Spalte) = Gesamthöhe - HEADER_OFFSET - Padding oben/unten
    const containerHeight =
      (viewportHeight - HEADER_OFFSET - parseInt(TOP_PADDING) - parseInt(BOTTOM_PADDING)) * IMAGE_SCALE;

    // Containerbreite (Spalte) = (Gesamtbreite - MIDDLE_GAP) / 2
    const containerWidth =
      ((viewportWidth - parseInt(MIDDLE_GAP)) / 2) * IMAGE_SCALE;

    const containerRatio = containerWidth / containerHeight;

    // Gemeinsame Basis-Styles
    const baseStyle = {
      position: 'absolute',
      top: '50%', 
      left: '50%',
      transform: 'translate(-50%, -50%)', 
      transition: 'opacity 0.3s ease',
      objectFit: 'contain'
    };

    // Falls das Bild "breiter" ist als der Container (vom Seitenverhältnis her)
    // => volle Breite, Höhe passt sich automatisch an.
    if (ratio >= containerRatio) {
      return {
        ...baseStyle,
        width: '100%',
        height: 'auto',
        maxWidth: `${containerWidth}px`,
        maxHeight: `${containerHeight}px`
      };
    } 
    // Sonst (Hochkant / "schmaler" Bild) => volle Höhe, Breite passt sich an.
    else {
      return {
        ...baseStyle,
        width: 'auto',
        height: '100%',
        maxWidth: `${containerWidth}px`,
        maxHeight: `${containerHeight}px`
      };
    }
  };

  return (
    <div
      className="flex w-full"
      style={{
        /* Gesamthöhe: 100vh minus z.B. 80px (Header?) */
        height: `calc(100vh - ${HEADER_OFFSET}px)`,
        padding: `${TOP_PADDING} 0 ${BOTTOM_PADDING} 0`,
        gap: MIDDLE_GAP
      }}
    >
      {/* Linke Spalte */}
      <Link
        to="/work"
        className="w-1/2 relative overflow-hidden"
        data-slug="commissioned"
      >
        {leftImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            style={{
              ...getImageStyle(src),
              opacity: index === currentIndex.left ? 1 : 0,
              zIndex: index === currentIndex.left ? 2 : 1
            }}
          />
        ))}
      </Link>

      {/* Rechte Spalte */}
      <Link
        to="/work"
        className="w-1/2 relative overflow-hidden"
        data-slug="personal"
      >
        {rightImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            style={{
              ...getImageStyle(src),
              opacity: index === currentIndex.right ? 1 : 0,
              zIndex: index === currentIndex.right ? 2 : 1
            }}
          />
        ))}
      </Link>
    </div>
  );
};

export default ImageGallery;
