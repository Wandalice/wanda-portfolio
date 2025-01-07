import React, { useRef, useEffect, useState } from 'react';

const CanvasEraser = ({
  imageUrl,
  width = 1400,
  height = 1400,
  minErasePercent = 80,
  isMobile = false,
  index = 0
}) => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Berechne die Größe basierend auf der Bildgröße
      const finalWidth = Math.min(isMobile ? 300 : width, img.width);
      const scaleFactor = finalWidth / img.width;
      const finalHeight = img.height * scaleFactor;

      canvas.width = finalWidth;
      canvas.height = finalHeight;
      ctx.drawImage(img, 0, 0, finalWidth, finalHeight);
      
      // Verzögertes Einblenden
      setTimeout(() => setLoaded(true), 500);
    };
    img.src = imageUrl;

    let old = null;
    function handleMouseMove(e) {
      if (lock) return;

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = e.offsetX * scaleX;
      const y = e.offsetY * scaleY;

      if (old) {
        ctx.globalCompositeOperation = 'destination-out';

        // Radierer-Effekt
        ctx.beginPath();
        ctx.arc(x, y, 15 * Math.random(), 0, Math.PI * Math.random());
        ctx.fill();

        // Strich-Effekt
        ctx.lineWidth = 150;
        ctx.beginPath();
        ctx.moveTo(old.x, old.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      old = { x, y };

      // Sichtbarkeits-Check
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let visiblePixels = 0;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] > 90) visiblePixels++;
      }

      const pctVisible = (100 * visiblePixels) / (canvas.width * canvas.height);
      const threshold = index === 0 ? 50 : minErasePercent;

      if (pctVisible < threshold && canvas.style.pointerEvents !== 'none') {
        setLock(true);
        setTimeout(() => {
          canvas.style.opacity = '0';
          canvas.style.pointerEvents = 'none';
        }, 4000); // 4 Sekunden Verzögerung vor dem Ausblenden
        
        // Lock wieder aufheben
        setTimeout(() => setLock(false), 5000);
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove);
    return () => canvas.removeEventListener('mousemove', handleMouseMove);
  }, [imageUrl, width, height, minErasePercent, isMobile, index]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 3s',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '95vw',
        maxHeight: '90vh'
      }}
    />
  );
};

export default CanvasEraser;