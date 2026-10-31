import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './SocialIcons';
import { COMPANY_INFO, SERVICES } from '../data/eventData';

export default function Footer({ onNavigate }) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'themes', label: 'Themes' },
    { id: 'packages', label: 'Packages' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="brand-logo-btn cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="logo-icon-wrap">
                <svg viewBox="0 0 32 32" fill="none" className="logo-svg">
                  <path
                    d="M4 26V13C4 7.47715 8.47715 3 14 3H18C23.5228 3 28 7.47715 28 13V26"
                    stroke="#D4A373"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="16" cy="14" r="2.5" fill="#D4A373" />
                  <line x1="2" y1="26" x2="30" y2="26" stroke="#D4A373" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name">Good Vision</span>
                <span className="brand-sub">EVENTS · PUNE</span>
              </div>
            </div>

            <p className="footer-motto font-serif italic text-gold">{COMPANY_INFO.motto}</p>
            <p className="footer-desc">{COMPANY_INFO.description}</p>

            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hi!%20I'm%20interested%20in%20planning%20an%20event.%20Can%20you%20help%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-chat-pill"
            >
              <MessageCircle size={18} />
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="footer-link-btn"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="footer-link-btn"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="contact-link">
                  <Phone size={16} className="text-gold" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="contact-link">
                  <Mail size={16} className="text-gold" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="contact-address">
                <MapPin size={18} className="text-gold flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="footer-social-wrap">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
                <InstagramIcon size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn">
                <FacebookIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Good Vision Events. All rights reserved. Crafted with care for Pune & beyond.</p>
          <div className="footer-bottom-links">
            <span>Pune, Maharashtra</span>
            <span>·</span>
            <span>End-to-End Production</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
