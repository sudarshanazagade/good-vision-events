import React, { useState } from 'react';
import { MapPin, Users, Eye, X, ArrowRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/eventData';

export default function PortfolioPage({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['All', 'Corporate', 'Weddings', 'Social', 'Activations'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="portfolio-page-view">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="page-header-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
          alt="Portfolio showcase"
          className="page-header-bg"
        />
        <div className="container page-header-content">
          <span className="kicker">PRODUCTION ARCHIVE</span>
          <h1 className="page-title font-serif">
            Our <span className="gold-italic">Work</span>
          </h1>
          <p className="page-subtitle">
            A showcase of memorable moments we've created across Pune and Maharashtra.
          </p>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="portfolio-main-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="category-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="results-count-bar">
            Showing {filteredItems.length} productions in {activeCategory === 'All' ? 'All Disciplines' : activeCategory}
          </p>

          <div className="portfolio-gallery-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-card"
                onClick={() => setSelectedItem(item)}
              >
                <div className="portfolio-img-wrap">
                  <img src={item.image} alt={item.title} className="portfolio-img" loading="lazy" />
                  <span className="portfolio-category-badge">{item.category}</span>
                  <div className="portfolio-hover-indicator">
                    <Eye size={18} />
                    <span>View Story</span>
                  </div>
                </div>

                <div className="portfolio-card-body">
                  <h3 className="portfolio-card-title font-serif">{item.title}</h3>
                  <div className="portfolio-card-meta">
                    <span className="meta-item">
                      <Users size={14} className="text-gold" />
                      {item.guests}
                    </span>
                    <span className="meta-item">
                      <MapPin size={14} className="text-gold" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="portfolio-bottom-cta">
            <h2 className="font-serif text-3xl mb-3">
              Inspired? Let's create something <span className="gold-italic">amazing together</span>
            </h2>
            <p className="text-secondary mb-6">
              Share your preferred date and venue style to begin the creative journey.
            </p>
            <button onClick={onOpenQuote} className="btn btn-primary btn-lg">
              <span>Start Planning Your Event</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Detail Lightbox */}
      {selectedItem && (
        <div className="modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedItem(null)}
              aria-label="Close details"
            >
              <X size={20} />
            </button>
            <div className="lightbox-img-wrap">
              <img src={selectedItem.image} alt={selectedItem.title} className="lightbox-img" />
            </div>
            <div className="lightbox-info">
              <div className="lightbox-meta-row">
                <span className="badge-tag">{selectedItem.category}</span>
                <span className="text-muted text-sm">{selectedItem.guests}</span>
              </div>
              <h3 className="lightbox-title font-serif">{selectedItem.title}</h3>
              <p className="lightbox-location text-gold">
                <MapPin size={15} className="inline mr-1" />
                {selectedItem.location}
              </p>
              <p className="lightbox-highlight mt-2">{selectedItem.highlight}</p>
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenQuote();
                }}
                className="btn btn-primary btn-sm mt-4"
              >
                Inquire About Similar Production
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
