import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { PACKAGES, STANDALONE_SERVICES, COMPANY_INFO } from '../data/eventData';

export default function PackagesPage({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Weddings',
    'Corporate',
    'Birthdays',
    'Social',
    'Private',
    'Activations'
  ];

  const filteredPackages = selectedCategory === 'All'
    ? PACKAGES
    : PACKAGES.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handlePackageEnquiry = (pkg) => {
    const text = encodeURIComponent(
      `Hi Good Vision Events! I'd like to discuss the ${pkg.title} package. Please share availability and a customised quote.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="packages-page-view">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="page-header-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80"
          alt="Event packages"
          className="page-header-bg"
        />
        <div className="container page-header-content">
          <span className="kicker">CURATED PROPOSALS</span>
          <h1 className="page-title font-serif">
            Event & Service <span className="gold-italic">Packages</span>
          </h1>
          <p className="page-subtitle">
            A complete celebration or just the services you need — thoughtfully brought together.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-main-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title-dark font-serif">
              The right plan for <span className="gold-italic">your event</span>
            </h2>
            <p className="section-subtitle-dark">
              Suggested package scopes, tailored to your guest count, venue, date and requirements. Every package is individually quoted.
            </p>
          </div>

          {/* Filters */}
          <div className="category-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="results-count-bar">
            {filteredPackages.length} {filteredPackages.length === 1 ? 'package' : 'packages'} · {selectedCategory === 'All' ? 'All Events' : selectedCategory}
          </p>

          {/* Packages Grid */}
          <div className="packages-cards-grid">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`package-card ${pkg.popular ? 'package-card-featured' : ''}`}
              >
                {pkg.popular && (
                  <div className="package-popular-badge">
                    <Sparkles size={13} />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="package-card-header">
                  <span className="package-category-pill">{pkg.category}</span>
                  <h3 className="package-card-title font-serif">{pkg.title}</h3>
                  <p className="package-card-tagline">{pkg.tagline}</p>
                </div>

                <div className="package-price-wrap">
                  <span className="price-tag font-serif">{pkg.price}</span>
                  <span className="price-note">Tailored to your guest count & venue</span>
                </div>

                <ul className="package-features-list">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <Check size={16} className="text-gold flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePackageEnquiry(pkg)}
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-dark'} w-full mt-auto`}
                >
                  <MessageCircle size={15} />
                  <span>Request package quote</span>
                </button>
              </div>
            ))}
          </div>

          <div className="package-disclaimer-box">
            <p>
              Final scope, vendor charges, venue fees, travel and applicable taxes are confirmed in your written proposal. Services listed as coordination cover planning and management; supplier services and costs are quoted separately unless expressly included.
            </p>
          </div>
        </div>
      </section>

      {/* Standalone A La Carte Services */}
      <section className="standalone-services-section">
        <div className="container">
          <div className="section-header-center">
            <span className="kicker">
              <span className="kicker-line"></span>
              À LA CARTE MODULES
              <span className="kicker-line"></span>
            </span>
            <h2 className="section-title-light font-serif">
              Only what <span className="gold-italic">you need</span>
            </h2>
            <p className="section-subtitle-light">
              Choose a single service or combine several with your event package.
            </p>
          </div>

          <div className="standalone-grid">
            {STANDALONE_SERVICES.map((s) => (
              <div key={s.id} className="standalone-card">
                <h3 className="standalone-title font-serif">{s.title}</h3>
                <p className="standalone-desc">{s.desc}</p>
                <ul className="standalone-items-list">
                  {s.items.map((it, idx) => (
                    <li key={idx}>
                      <span className="text-gold mr-1.5">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={onOpenQuote} className="btn btn-primary btn-lg">
              <span>Build a Custom Package</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
