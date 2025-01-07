import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div 
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-12 right-10 w-10 h-10 z-[999] cursor-pointer"
      >
        <div className="w-8 h-5 flex flex-col justify-between">
          <div className="w-full h-0.5 bg-black"></div>
          <div className="w-full h-0.5 bg-black"></div>
          <div className="w-full h-0.5 bg-black"></div>
        </div>
      </div>

      <div className={`fixed top-0 right-0 w-72 h-full transform transition-transform duration-1000 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      } z-[1000]`}>
        <div className="w-full h-full bg-[#dfbd40] relative">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 text-black hover:text-white bg-transparent border-0"
            aria-label="Close menu"
          >
            ✕
          </button>

          <div className="absolute top-1/2 left-12 -translate-y-1/2 flex flex-col gap-3">
            <Link 
              to="/" 
              className="font-mono text-lg text-black hover:text-white no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/work" 
              className="font-mono text-lg text-black hover:text-white no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              to="/holisis" 
              className="font-mono text-sm text-black hover:text-white no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Book: Holisis
            </Link>
            <Link 
              to="/bio" 
              className="font-mono text-lg text-black hover:text-white no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Bio
            </Link>
            <Link 
              to="/contact" 
              className="font-mono text-lg text-black hover:text-white no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;