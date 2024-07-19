'use client'; 

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <h1 className="text-2xl font-bold text-white-800" style={{ marginTop: '10px', color: 'rgb(81,45,238)' }}>AHEAD</h1>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link href="/emotions">Emotions</Link></li>
        <li><Link href="/manifesto">Manifesto</Link></li>
        <li><Link href="/self-awareness-test">Self-awareness test</Link></li>
        <li><Link href="/work-with-us">Work With Us</Link></li>
      </ul>
      <button>Download app</button>
    </nav>
  );
};

export default Navbar;
