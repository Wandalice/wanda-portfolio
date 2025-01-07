import React from 'react';

const Contact = () => {
  const socialLinks = [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/wandalice/?hl=en',
      icon: '/wanda/in_.jpg'
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/Wandalice.v.B/',
      icon: '/wanda/fb_.jpg'
    },
    {
      platform: 'LinkedIn',
      url: 'https://de.linkedin.com/in/wanda-von-bremen-1a470912a',
      icon: '/wanda/link_.jpg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
        {/* Bild */}
        <div>
          <img 
            src="/wanda/rahmen.jpg" 
            alt="Contact" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Kontaktinformationen */}
        <div className="text-center">
          <div className="mb-12">
            <p className="mb-6">
              Please don't hesitate to get in touch
              regarding projects, collaborations,
              commissioned work and media enquiries.
            </p>
            <p className="mb-6">
              Happy to hear from you.
            </p>
          </div>

          {/* Email */}
          <div className="mb-12">
            <p className="text-lg">
              Email: wandavobremen@gmail.com
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt={social.platform}
                  className="w-12 h-12"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;