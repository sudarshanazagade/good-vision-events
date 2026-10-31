import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/eventData';

export default function Navbar({ currentPage, setCurrentPage, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'themes', label: 'Themes' },
    { id: 'packages', label: 'Packages' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = id === 'home' ? '' : `#${id}`;
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled glass-header' : 'transparent'}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="brand-logo-btn"
          aria-label="Good Vision Events Home"
        >
          <div className="logo-icon-wrap">
            <svg viewBox="0 0 32 32" fill="none" className="logo-svg">
              {/* Elegant Arch / Marquee frame with golden diamond */}
              <path
                d="M4 26V13C4 7.47715 8.47715 3 14 3H18C23.5228 3 28 7.47715 28 13V26"
                stroke="#D4A373"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M8 26V14C8 9.58172 11.5817 6 16 6C20.4183 6 24 9.58172 24 14V26"
                stroke="#D4A373"
                strokeWidth="1.2"
                strokeOpacity="0.6"
              />
              <circle cx="16" cy="14" r="2.5" fill="#D4A373" />
              <line x1="2" y1="26" x2="30" y2="26" stroke="#D4A373" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">Good Vision</span>
            <span className="brand-sub">EVENTS · PUNE</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link-btn ${currentPage === link.id ? 'active' : ''}`}
                >
                  {link.label}
                  {currentPage === link.id && <span className="active-dot" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <button
            onClick={onOpenQuote}
            className="btn btn-primary btn-sm quote-btn"
            id="nav-get-quote-btn"
          >
            <span>Get a Quote</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-text">
                <span className="brand-name">Good Vision</span>
                <span className="brand-sub">EVENTS · PUNE</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-close-btn"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`mobile-nav-link ${currentPage === link.id ? 'active' : ''}`}
                  >
                    <span>{link.label}</span>
                    {currentPage === link.id && <Sparkles size={16} className="text-gold" />}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="btn btn-primary w-full"
              >
                Get a Quote
              </button>
              <p className="mobile-phone-link">
                Call us: <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
