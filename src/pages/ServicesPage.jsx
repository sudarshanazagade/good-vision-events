import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { SERVICES, HOW_WE_WORK_PHASES, FAQS } from '../data/eventData';

export default function ServicesPage({ onOpenQuote, selectedServiceId }) {
  const [activePhase, setActivePhase] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="services-page-view">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="page-header-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80"
          alt="Event planning services"
          className="page-header-bg"
        />
        <div className="container page-header-content">
          <span className="kicker">COMPREHENSIVE CAPABILITIES</span>
          <h1 className="page-title font-serif">
            Event Planning <span className="gold-italic">Services in Pune</span>
          </h1>
          <p className="page-subtitle">
            Comprehensive event management tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="services-detail-section">
        <div className="container">
          <div className="services-detail-stack">
            {SERVICES.map((srv, idx) => (
              <div
                key={srv.id}
                id={`service-${srv.id}`}
                className={`service-detail-row ${idx % 2 === 1 ? 'row-reversed' : ''}`}
              >
                <div className="service-detail-media">
                  <div className="service-img-frame">
                    <img src={srv.image} alt={srv.title} className="service-detail-img" />
                    <span className="service-number-badge font-serif">{srv.number}</span>
                  </div>
                </div>

                <div className="service-detail-text">
                  <span className="kicker">DISCIPLINE 0{idx + 1}</span>
                  <h2 className="service-detail-title font-serif">{srv.title}</h2>
                  <p className="service-detail-lead">{srv.fullDesc}</p>

                  <ul className="service-features-list">
                    {srv.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <div className="check-bullet">
                          <Check size={14} className="text-gold" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onOpenQuote}
                    className="btn btn-primary mt-4"
                  >
                    <span>{srv.ctaText}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Interactive Phase Road Map */}
      <section className="how-we-work-section">
        <div className="container">
          <div className="section-header-center">
            <span className="kicker">
              <span className="kicker-line"></span>
              METHODOLOGY
              <span className="kicker-line"></span>
            </span>
            <h2 className="section-title-dark font-serif">
              How we <span className="gold-italic">work</span>
            </h2>
            <p className="section-subtitle-dark">
              Click each phase to see what happens from initial spark to final ovation.
            </p>
          </div>

          <div className="phases-nav-bar">
            {HOW_WE_WORK_PHASES.map((p, pIdx) => (
              <button
                key={pIdx}
                onClick={() => setActivePhase(pIdx)}
                className={`phase-tab-btn ${activePhase === pIdx ? 'active' : ''}`}
              >
                <span className="phase-num">{p.number}</span>
                <span className="phase-tab-title">{p.title}</span>
              </button>
            ))}
          </div>

          <div className="active-phase-card">
            <div className="active-phase-badge font-serif">
              {HOW_WE_WORK_PHASES[activePhase].number}
            </div>
            <h3 className="active-phase-title font-serif">
              {HOW_WE_WORK_PHASES[activePhase].title}
            </h3>
            <p className="active-phase-desc">
              {HOW_WE_WORK_PHASES[activePhase].desc}
            </p>
            <div className="phase-steps-note">
              <Sparkles size={16} className="text-gold inline mr-2" />
              <span>Full documentation & live dashboard shared with every client</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        <div className="container">
          <div className="section-header-center">
            <span className="kicker">
              <span className="kicker-line"></span>
              COMMON QUERIES
              <span className="kicker-line"></span>
            </span>
            <h2 className="section-title-light font-serif">
              Frequently asked <span className="gold-italic">questions</span>
            </h2>
          </div>

          <div className="faqs-accordion-wrap">
            {FAQS.map((faq, fIdx) => (
              <div
                key={fIdx}
                className={`faq-accordion-item ${openFaq === fIdx ? 'open' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(fIdx)}
                  className="faq-question-btn"
                  aria-expanded={openFaq === fIdx}
                >
                  <span className="faq-question-text font-serif">{faq.q}</span>
                  <span className="faq-icon-wrap">
                    {openFaq === fIdx ? <ChevronUp size={20} className="text-gold" /> : <ChevronDown size={20} />}
                  </span>
                </button>
                {openFaq === fIdx && (
                  <div className="faq-answer-pane">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="services-bottom-cta">
        <div className="container text-center">
          <h2 className="font-serif text-3xl mb-3">
            Not sure which <span className="gold-italic">service fits?</span>
          </h2>
          <p className="text-secondary max-w-xl mx-auto mb-6">
            Tell us about your occasion — we'll shape the right custom plan.
          </p>
          <button onClick={onOpenQuote} className="btn btn-primary btn-lg">
            <span>Request a Quote</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
