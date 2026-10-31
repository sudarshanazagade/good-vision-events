import React from 'react';
import { Star, Quote, ArrowRight, Play, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/eventData';

export default function TestimonialsPage({ onOpenQuote }) {
  const caseStudies = [
    {
      title: "Anjali & Rohit's wedding story",
      location: "Lavasa Waterfront",
      duration: "3-day Maharashtrian celebration",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      quote: "From the haldi on the lawn to the midnight reception, not a single detail felt rushed."
    },
    {
      title: "Innovate Solutions summit",
      location: "Pune Convention Center",
      duration: "500-delegate tech conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      quote: "Flawless audio-visual cues and seamless VIP delegate reception."
    },
    {
      title: "Kulkarni 50th anniversary",
      location: "The O Hotel, Pune",
      duration: "200-guest golden jubilee",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
      quote: "Coordinated remotely while we were overseas with complete peace of mind."
    }
  ];

  return (
    <div className="testimonials-page-view">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="page-header-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80"
          alt="Client stories"
          className="page-header-bg"
        />
        <div className="container page-header-content">
          <span className="kicker">CLIENT REPUTATION</span>
          <h1 className="page-title font-serif">
            Client <span className="gold-italic">Testimonials</span>
          </h1>
          <p className="page-subtitle">
            Don't just take our word for it. Hear from those whose moments we've staged.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title-dark font-serif">
              Real stories from <span className="gold-italic">Pune & beyond</span>
            </h2>
          </div>

          <div className="testimonials-all-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-card-header">
                  <div className="star-rating-row">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#D4A373" color="#D4A373" />
                    ))}
                  </div>
                  <Quote size={24} className="text-gold opacity-50" />
                </div>

                <p className="testimonial-card-quote font-serif">"{t.quote}"</p>

                <div className="testimonial-card-footer">
                  <img src={t.avatar} alt={t.name} className="author-avatar" />
                  <div>
                    <h4 className="author-name font-serif">{t.name}</h4>
                    <p className="author-role">{t.role}</p>
                    <span className="author-event-tag">{t.event}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Video / Story Spotlights */}
          <div className="client-stories-spotlight">
            <div className="section-header-center mb-8">
              <span className="kicker">
                <span className="kicker-line"></span>
                DEEP DIVES
                <span className="kicker-line"></span>
              </span>
              <h2 className="section-title-light font-serif">
                Hear from <span className="gold-italic">our clients</span>
              </h2>
            </div>

            <div className="case-studies-grid">
              {caseStudies.map((cs, idx) => (
                <div key={idx} className="case-study-card">
                  <div className="case-study-media">
                    <img src={cs.image} alt={cs.title} className="case-study-img" />
                    <div className="play-badge-wrap">
                      <Play size={20} fill="#D4A373" className="text-gold" />
                    </div>
                  </div>
                  <div className="case-study-content">
                    <h3 className="case-study-title font-serif">{cs.title}</h3>
                    <p className="case-study-meta text-gold text-xs">{cs.location} · {cs.duration}</p>
                    <p className="case-study-quote italic">"{cs.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="testimonials-cta-box">
            <h2 className="font-serif text-3xl mb-3">
              Ready to be our next <span className="gold-italic">happy client?</span>
            </h2>
            <p className="text-secondary mb-6">
              Let's craft an event experience your guests will remember for years.
            </p>
            <button onClick={onOpenQuote} className="btn btn-primary btn-lg">
              <span>Get in Touch</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
