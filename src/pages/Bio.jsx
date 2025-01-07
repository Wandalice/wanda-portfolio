import React from 'react';

const Bio = () => {
  const exhibitions = [
    {
      year: "2023",
      title: "Group exhibition Suelo",
      location: "Teorética, San José, Costa Rica"
    },
    {
      year: "2022",
      title: "Group exhibition Nature through her eyes",
      location: "Alliance Française, Cape Town, South Africa"
    },
    // ... weitere Ausstellungen
  ];

  const residencies = [
    {
      year: "2022",
      title: "La Wayaka Current Residency"
    },
    {
      year: "2022",
      title: "Estudio Abierto Art Residency"
    },
    // ... weitere Residencies
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profil Sektion */}
      <div className="grid md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-4">
          <img 
            src="/wanda/profil2022.jpg" 
            alt="Wanda von Bremen"
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:col-span-8">
          <div className="prose max-w-none">
            <p className="mb-6">
              Wanda von Bremen is a photographer, artist, and ecologist who is deeply
              dedicated to finding innovative communication strategies to raise awareness
              about the critical ecological issues facing our planet.
            </p>
            <p>
              With a Bachelor of Science in Nature Conservation and a degree in photography
              from the renowned International Center of Photography in New York, Wanda has
              successfully combined activism, ecology, and art to create a unique and
              impactful approach to a sustainable future.
            </p>
            {/* Weiterer Biografietext */}
          </div>
        </div>
      </div>

      {/* Ausstellungen */}
      <div className="mb-16">
        <h2 className="text-2xl mb-6">EXHIBITION</h2>
        <div className="space-y-4">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="flex gap-4">
              <span className="font-bold">{exhibition.year}</span>
              <div>
                {exhibition.title}
                <br />
                {exhibition.location}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Residencies/Awards */}
      <div>
        <h2 className="text-2xl mb-6">RESIDENCY/AWARDS</h2>
        <div className="space-y-4">
          {residencies.map((residency, index) => (
            <div key={index} className="flex gap-4">
              <span className="font-bold">{residency.year}</span>
              <div>{residency.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio;