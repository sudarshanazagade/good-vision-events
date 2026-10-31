import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/eventData';

export default function TestimonialsSection({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header-center">
          <span className="kicker">
            <span className="kicker-line"></span>
            No. 04 — TESTIMONIALS
            <span className="kicker-line"></span>
          </span>
          <h2 className="section-title-light font-serif">
            What our clients <span className="gold-italic">say</span>
          </h2>
        </div>

        {/* Carousel Showcase Card */}
        <div className="testimonial-featured-card">
          <Quote size={48} className="testimonial-quote-icon text-gold" />
          
          <div className="star-rating-row">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={18} fill="#D4A373" color="#D4A373" />
            ))}
          </div>

          <p className="testimonial-quote-text font-serif">
            "{current.quote}"
          </p>

          <div className="testimonial-author-row">
            <img src={current.avatar} alt={current.name} className="author-avatar" />
            <div className="author-info">
              <h4 className="author-name font-serif">{current.name}</h4>
              <p className="author-role">{current.role}</p>
              <span className="author-event-tag">{current.event}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="testimonial-nav-controls">
            <button onClick={prevSlide} className="carousel-btn" aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <span className="carousel-counter">
              {currentIndex + 1} / {TESTIMONIALS.length}
            </span>
            <button onClick={nextSlide} className="carousel-btn" aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Read more link */}
        <div className="testimonials-footer-cta">
          <button
            onClick={() => {
              onNavigate('testimonials');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn btn-outline-gold"
          >
            <span>Read More Testimonials</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
