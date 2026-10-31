import React from 'react';
import { Briefcase, Heart, PartyPopper, Megaphone, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/eventData';

export default function ServicesSection({ onSelectService, onNavigate }) {
  // Map icons to the 4 primary services on homepage
  const getIcon = (id) => {
    switch (id) {
      case 'corporate':
        return <Briefcase size={24} className="service-icon" />;
      case 'weddings':
        return (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-icon">
            <circle cx="8" cy="14" r="5" />
            <circle cx="16" cy="14" r="5" />
            <path d="M12 9l2-4 4 2" />
          </svg>
        );
      case 'social':
        return <PartyPopper size={24} className="service-icon" />;
      case 'brand':
        return <Megaphone size={24} className="service-icon" />;
      default:
        return <Heart size={24} className="service-icon" />;
    }
  };

  const homepageServices = SERVICES.filter(s => s.id !== 'private');

  return (
    <section id="services-preview" className="services-section">
      <div className="container">
        <div className="services-layout-grid">
          {/* Left Column: Heading and intro */}
          <div className="services-intro-col">
            <span className="kicker">
              <span className="kicker-line"></span>
              No. 01 — SERVICES
            </span>
            <h2 className="services-main-title font-serif">
              What we do <span className="gold-italic">best</span>
            </h2>
            <p className="services-main-desc">
              Four disciplines, one obsession: making your guests feel something.
            </p>
            <div className="services-extra-note">
              <p>Every event is uniquely crafted from Pune's most versatile production workshop.</p>
              <button
                onClick={() => onNavigate('services')}
                className="btn btn-outline-gold btn-sm mt-4"
              >
                <span>View All Capabilities</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Service Cards */}
          <div className="services-cards-grid">
            {homepageServices.map((srv) => (
              <div
                key={srv.id}
                className="service-card"
                onClick={() => {
                  onSelectService(srv.id);
                  onNavigate('services');
                }}
              >
                <div className="service-icon-bubble">
                  {getIcon(srv.id)}
                </div>
                <h3 className="service-card-title font-serif">{srv.title}</h3>
                <p className="service-card-desc">{srv.shortDesc}</p>
                <div className="service-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
