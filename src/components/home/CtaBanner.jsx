import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section className="cta-banner-section">
      <div className="cta-banner-bg-grid" />
      <div className="container cta-banner-container">
        <span className="kicker kicker-gold-light">
          <span className="kicker-line" style={{ backgroundColor: '#E5BA85' }}></span>
          YOUR OCCASION, OUR STAGE
          <span className="kicker-line" style={{ backgroundColor: '#E5BA85' }}></span>
        </span>

        <h2 className="cta-banner-title font-serif">
          Ready to bring your vision <span className="gold-italic text-glow">to life?</span>
        </h2>

        <p className="cta-banner-subtitle">
          Let's create something extraordinary together.
        </p>

        <div className="cta-banner-btn-wrap">
          <button
            onClick={onOpenQuote}
            className="btn btn-primary btn-lg cta-gold-btn"
            id="banner-schedule-consultation-btn"
          >
            <span>Schedule a Free Consultation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
