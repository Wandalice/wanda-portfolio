// Layout.jsx
import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log('Layout rendering, menuOpen:', menuOpen);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> {/* setMenuOpen hinzugefügt */}
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;