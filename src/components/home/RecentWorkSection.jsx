import React, { useState } from 'react';
import { ArrowRight, MapPin, Users, X, Eye } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../../data/eventData';

export default function RecentWorkSection({ onNavigate }) {
  const [activeItem, setActiveItem] = useState(null);
  const displayItems = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <section id="work" className="recent-work-section">
      <div className="container">
        {/* Section Header with CTA on right */}
        <div className="recent-work-header">
          <div>
            <span className="kicker">
              <span className="kicker-line"></span>
              No. 03 — PORTFOLIO
            </span>
            <h2 className="section-title-light font-serif">
              Our <span className="gold-italic">recent work</span>
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn btn-dark"
            id="view-full-portfolio-btn"
          >
            <span>View Full Portfolio</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Bento Grid Gallery */}
        <div className="bento-grid">
          {displayItems.map((item, idx) => (
            <div
              key={item.id}
              className={`bento-card bento-card-${idx}`}
              onClick={() => setActiveItem(item)}
            >
              <div className="bento-img-wrap">
                <img src={item.image} alt={item.title} className="bento-img" loading="lazy" />
                <div className="bento-gradient-overlay" />
              </div>

              <div className="bento-content">
                <span className="bento-category-tag">{item.category}</span>
                <h3 className="bento-title font-serif">{item.title}</h3>
                <div className="bento-meta">
                  <span className="bento-location">
                    <MapPin size={14} className="text-gold" />
                    {item.location}
                  </span>
                  <span className="bento-guests">
                    <Users size={14} className="text-gold" />
                    {item.guests}
                  </span>
                </div>
              </div>

              <div className="bento-hover-pill">
                <Eye size={16} />
                <span>View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="modal-backdrop" onClick={() => setActiveItem(null)}>
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setActiveItem(null)}
              aria-label="Close details"
            >
              <X size={20} />
            </button>
            <div className="lightbox-img-wrap">
              <img src={activeItem.image} alt={activeItem.title} className="lightbox-img" />
            </div>
            <div className="lightbox-info">
              <div className="lightbox-meta-row">
                <span className="badge-tag">{activeItem.category}</span>
                <span className="text-muted text-sm">{activeItem.guests}</span>
              </div>
              <h3 className="lightbox-title font-serif">{activeItem.title}</h3>
              <p className="lightbox-location text-gold">
                <MapPin size={15} className="inline mr-1" />
                {activeItem.location}
              </p>
              <p className="lightbox-highlight mt-2">{activeItem.highlight}</p>
              <button
                onClick={() => {
                  setActiveItem(null);
                  onNavigate('contact');
                }}
                className="btn btn-primary btn-sm mt-4"
              >
                Plan a Similar Event
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
