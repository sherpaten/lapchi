import React, { useState } from 'react';
import '../Stylesheet/Navbar.css';

const Navbar = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <a href="#home" className="logo-wrapper">
          {/* PNG Logo for Navbar */}
          <img 
            src={process.env.PUBLIC_URL + '/Logo.png'} 
            alt="Lapchi Mila Logo" 
            className="nav-logo-img" 
          />
          <div className="logo-text">
            <span className="logo-brand">LAPCHI MILA</span>
            <span className="logo-sub">INCENSE & TREKS</span>
          </div>
        </a>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>

          <a href="#incense" onClick={() => setMobileMenuOpen(false)}>Incense Collection</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#events" onClick={() => setMobileMenuOpen(false)}>Trekking & Events</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>

        <div className="navbar-actions">
          <button className="cart-btn" onClick={onOpenCart}>
            🛒 <span className="cart-badge">{cartCount}</span>
          </button>
          <button 
            className="hamburger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;