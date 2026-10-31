import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenQuote, onExploreWork }) {
  const scrollToServices = () => {
    const el = document.getElementById('services-preview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Image with Bokeh / Microphone Event Overlay */}
      <div className="hero-bg-media">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=85"
          alt="Event stage lighting and microphone atmosphere"
          className="hero-bg-img"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-radial-glow"></div>
      </div>

      <div className="container hero-content-container">
        {/* Kicker Tag */}
        <div className="hero-kicker-wrap">
          <span className="hero-kicker-tag">EVENT MANAGEMENT · PUNE</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-headline font-serif">
          Creating <span className="gold-italic">unforgettable</span> moments, one event at a time
        </h1>

        {/* Subhead */}
        <p className="hero-subhead">
          Full-service event management for corporate, social, and private celebrations.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <button
            onClick={onOpenQuote}
            className="btn btn-primary btn-lg hero-btn"
            id="hero-plan-event-btn"
          >
            <span>Plan Your Event</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onExploreWork}
            className="btn btn-secondary btn-lg hero-btn"
            id="hero-view-work-btn"
          >
            <span>View Our Work</span>
          </button>
        </div>

        {/* Stat strip & Scroll Indicator */}
        <div className="hero-footer-strip">
          <div className="hero-stat-pill">
            <span className="stat-number">50+</span>
            <span className="stat-label">EVENTS STAGED ACROSS MAHARASHTRA</span>
          </div>

          <button
            onClick={scrollToServices}
            className="hero-scroll-indicator animate-bounce-subtle"
            aria-label="Scroll down to explore services"
          >
            <ArrowDown size={20} className="text-gold" />
          </button>
        </div>
      </div>
    </section>
  );
}
