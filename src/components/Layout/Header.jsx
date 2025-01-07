// Header.jsx
import React from 'react';

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header>
      {/* Logo/Title */}
      <div className="title">
        WANDA VON BREMEN
        <div className="untertitle">PHOTOGRAPHY</div>
      </div>

      {/* Hamburger */}
      <div 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: 'fixed',
          top: '50px',
          right: '40px',
          width: '40px',
          height: '40px',
          backgroundImage: 'url(menu-icon.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 499,
          cursor: 'pointer'
        }}
      />
    </header>
  );
};

export default Header;