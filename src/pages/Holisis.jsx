import React from 'react';
import { Link } from 'react-router-dom';
import CanvasEraser from '../components/Holisis/CanvasEraser';

const Holisis = () => {
  const images = Array.from({ length: 36 }, (_, i) => ({
    id: 36 - i,
    src: `./book/canvas${36 - i}.jpg`
  }));

  return (
    <>

      <div className="content">
        <h1>Holisis</h1>

        <div className="text">
          <p>Holisis is a journey into a physical book in a virtual reality.</p>

          <p>
            Juxtaposing common perceptions and associations of beauty and decay, 
            Holisis offers the viewer the concept of eternal interdependency within nature as a whole.
          </p>

          <p>
            Emphasizing the diversity of nature, the work allows the viewer to investigate 
            the commonly ignored and unseen organisms and creatures as necessary part 
            of the interconnected ecosystem.
          </p>

          <p>
            In the interactive web version, the idea of circuition and decay is transmitted 
            through an erasing effect which leads you through the book. This allows everyone 
            to find their path through my work, leaving individual traces behind.
          </p>
        </div>

        <div className="canvas-section">
          {images.map((img, index) => (
            <CanvasEraser
              key={img.id}
              imageUrl={img.src}
              width={1400}
              height={1400}
              index={index}
              minErasePercent={80}
            />
          ))}
        </div>

        <div className="text">
          <p>
            "Holisis" is a one-of-a-kind-book of color photographs, scans, and collages. 
            Every organism in the life-cycle is irreplaceable and creates a delicate balance 
            that needs to be maintained. In exploring the biological life-cycle, some pages 
            are self-made and may contain germinated seeds that will grow and die.
          </p>

          <p>
            I recycle my own pictures, make paper out of them, or allow them to decay 
            or dissolve in the river. Some items will break or fall out.
          </p>

          <p>
            As a result, the book will be different every time it is read.
          </p>
        </div>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/_sD-EadUN4g"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <footer>© Wanda von Bremen 2023</footer>
    </>
  );
};

export default Holisis;