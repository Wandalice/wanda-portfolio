import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-center text-sm">
      <p>© Wanda von Bremen {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;